import React, { useState, useEffect, useCallback, useMemo, memo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Dialog, DialogContent } from "./components/ui/dialog";
import {
  CheckCircle,
  XCircle,
  BookOpen,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Clock,
  Award,
  LogOut,
} from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  arabicExplanation: string;
}

interface Props {
  title: string;
  questions: Question[];
}

// Memoized utility functions
const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
};

const getGrade = (percentage: number) => {
  if (percentage >= 90) return { grade: "A+", color: "text-green-600" };
  if (percentage >= 85) return { grade: "A", color: "text-green-600" };
  if (percentage >= 80) return { grade: "B+", color: "text-blue-600" };
  if (percentage >= 75) return { grade: "B", color: "text-blue-600" };
  if (percentage >= 70) return { grade: "C+", color: "text-yellow-600" };
  if (percentage >= 65) return { grade: "C", color: "text-yellow-600" };
  if (percentage >= 60) return { grade: "D+", color: "text-orange-600" };
  if (percentage >= 50) return { grade: "D", color: "text-orange-600" };
  return { grade: "F", color: "text-red-600" };
};

// Memoized Timer Component
const Timer = memo(({ time }: { time: number }) => (
  <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
    <Clock className="h-4 w-4 text-blue-500" />
    <span className="font-semibold text-gray-700">{formatTime(time)}</span>
  </div>
));

// Memoized Score Component
const ScoreDisplay = memo(
  ({
    score,
    total,
    percentage,
    gradeInfo,
  }: {
    score: number;
    total: number;
    percentage: number;
    gradeInfo: { grade: string; color: string };
  }) => (
    <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
      <Award className="h-4 w-4 text-purple-500" />
      <span className="font-semibold text-gray-700">
        {score}/{total} ({percentage}%)
      </span>
      <span className={`font-bold ${gradeInfo.color}`}>{gradeInfo.grade}</span>
    </div>
  )
);

// Memoized Progress Bar Component
const ProgressBar = memo(
  ({ current, total }: { current: number; total: number }) => {
    const progressPercent = useMemo(
      () => ((current + 1) / total) * 100,
      [current, total]
    );

    return (
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-semibold text-gray-600">
            Question {current + 1} of {total}
          </span>
          <span className="text-sm font-semibold text-gray-600">
            Progress: {Math.round(progressPercent)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500 shadow-sm"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
    );
  }
);

// Memoized Option Button Component
const OptionButton = memo(
  ({
    option,
    index,
    isSelected,
    isCorrect,
    isAnswered,
    onClick,
  }: {
    option: string;
    index: number;
    isSelected: boolean;
    isCorrect: boolean;
    isAnswered: boolean;
    onClick: () => void;
  }) => {
    const buttonClass = useMemo(() => {
      const baseClass =
        "w-full text-left p-5 rounded-xl border-2 transition-all duration-300 font-medium ";

      if (!isAnswered) {
        return (
          baseClass +
          "border-gray-200 bg-white hover:border-purple-300 hover:bg-purple-50 hover:scale-[1.01] active:scale-[0.99] shadow-sm hover:shadow-md"
        );
      } else if (isCorrect) {
        return (
          baseClass + "border-green-400 bg-green-50 text-green-800 shadow-md"
        );
      } else if (isSelected && !isCorrect) {
        return baseClass + "border-red-400 bg-red-50 text-red-800 shadow-md";
      } else {
        return baseClass + "border-gray-200 bg-gray-50 opacity-60";
      }
    }, [isAnswered, isCorrect, isSelected]);

    return (
      <button className={buttonClass} onClick={onClick}>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-4">
            <span className="font-bold text-gray-500 bg-gray-100 w-8 h-8 rounded-full flex items-center justify-center">
              {String.fromCharCode(65 + index)}
            </span>
            <span className="text-gray-700">{option}</span>
          </span>
          {isAnswered && isCorrect && (
            <CheckCircle className="h-6 w-6 text-green-600" />
          )}
          {isSelected && !isCorrect && (
            <XCircle className="h-6 w-6 text-red-600" />
          )}
        </div>
      </button>
    );
  }
);

// Memoized Question Navigator
const QuestionNavigator = memo(
  ({
    questions,
    currentQuestion,
    answeredQuestions,
    selectedAnswers,
    onNavigate,
  }: {
    questions: Question[];
    currentQuestion: number;
    answeredQuestions: boolean[];
    selectedAnswers: (number | null)[];
    onNavigate: (index: number) => void;
  }) => (
    <div className="mb-6">
      <div className="flex flex-wrap justify-center gap-1 p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-md">
        {questions.map((_, index) => {
          const isCurrentQuestion = index === currentQuestion;
          const isAnswered = answeredQuestions[index];
          const isCorrect =
            selectedAnswers[index] === questions[index].correctAnswer;

          const getButtonClass = () => {
            if (isCurrentQuestion) {
              return "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg";
            } else if (isAnswered) {
              return isCorrect
                ? "bg-green-100 text-green-700 border border-green-300"
                : "bg-red-100 text-red-700 border border-red-300";
            } else {
              return "bg-gray-100 text-gray-600 border border-gray-200 hover:bg-gray-200";
            }
          };

          return (
            <button
              key={index}
              onClick={() => onNavigate(index)}
              className={`w-8 h-8 rounded-lg text-xs font-bold transition-all duration-200 hover:scale-110 ${getButtonClass()}`}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </div>
  )
);

// Memoized Final Results Component
const FinalResults = memo(
  ({
    score,
    total,
    percentage,
    gradeInfo,
    totalTime,
  }: {
    score: number;
    total: number;
    percentage: number;
    gradeInfo: { grade: string; color: string };
    totalTime: number;
  }) => (
    <Card className="mb-6 shadow-2xl border-0 bg-gradient-to-r from-blue-50 to-purple-50">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold text-gray-800 mb-4">
          🎉 Quiz Completed!
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl font-bold text-blue-600">
              {score}/{total}
            </div>
            <div className="text-gray-600 font-medium">Score</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className={`text-3xl font-bold ${gradeInfo.color}`}>
              {gradeInfo.grade}
            </div>
            <div className="text-gray-600 font-medium">Grade</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl font-bold text-purple-600">
              {formatTime(totalTime)}
            </div>
            <div className="text-gray-600 font-medium">Time Taken</div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="text-5xl font-bold text-green-600 mb-2">
            {percentage}%
          </div>
          <div className="text-gray-600 font-medium text-lg">
            Overall Performance
          </div>
        </div>
      </CardContent>
    </Card>
  )
);

const NetworkingQuizApp: React.FC<Props> = ({ title, questions }) => {
  // State management with optimized initial values
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    () => new Array(questions.length).fill(null)
  );
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(() =>
    new Array(questions.length).fill(false)
  );
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  // Memoized values
  const currentQ = useMemo(
    () => questions[currentQuestion],
    [questions, currentQuestion]
  );
  const selectedAnswer = useMemo(
    () => selectedAnswers[currentQuestion],
    [selectedAnswers, currentQuestion]
  );
  const isFinished = useMemo(
    () => answeredQuestions.every((answered) => answered),
    [answeredQuestions]
  );
  const percentage = useMemo(
    () => Math.round((score / questions.length) * 100),
    [score, questions.length]
  );
  const gradeInfo = useMemo(() => getGrade(percentage), [percentage]);
  const totalTime = useMemo(
    () =>
      endTime ? Math.floor((endTime - (startTime || 0)) / 1000) : currentTime,
    [endTime, startTime, currentTime]
  );

  // Optimized timer effect
  useEffect(() => {
    if (!startTime || endTime || !isQuizOpen) return;

    const interval = setInterval(() => {
      setCurrentTime(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime, endTime, isQuizOpen]);

  // Keyboard and navigation prevention
  useEffect(() => {
    if (!isQuizOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.altKey ||
        e.ctrlKey ||
        e.key === "F11" ||
        e.key === "Escape" ||
        e.key === "Tab"
      ) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "Are you sure you want to leave the exam?";
      return "Are you sure you want to leave the exam?";
    };

    const handlePopState = (e: PopStateEvent) => {
      e.preventDefault();
      window.history.pushState(null, "", window.location.href);
    };

    document.addEventListener("keydown", handleKeyDown, { capture: true });
    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("popstate", handlePopState);
    window.history.pushState(null, "", window.location.href);

    // Prevent scrolling
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown, { capture: true });
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("popstate", handlePopState);
      document.body.style.overflow = "auto";
    };
  }, [isQuizOpen]);

  // Optimized score calculation
  useEffect(() => {
    const newScore = selectedAnswers.reduce(
      (acc: number, answer, index) =>
        answer === questions[index].correctAnswer ? acc + 1 : acc,
      0
    );
    setScore(newScore);
  }, [selectedAnswers, questions]);

  // Memoized callbacks
  const startQuiz = useCallback(() => {
    setIsQuizOpen(true);
    setStartTime(Date.now());
  }, []);

  const exitQuiz = useCallback(() => {
    if (window.confirm("هل أنت متأكد من الخروج من الامتحان؟")) {
      setIsQuizOpen(false);
      // Reset all state
      setCurrentQuestion(0);
      setSelectedAnswers(new Array(questions.length).fill(null));
      setShowResult(false);
      setScore(0);
      setAnsweredQuestions(new Array(questions.length).fill(false));
      setStartTime(null);
      setEndTime(null);
      setCurrentTime(0);
    }
  }, [questions.length]);

  const handleAnswerSelect = useCallback(
    (answerIndex: number) => {
      if (selectedAnswers[currentQuestion] !== null) return;

      setSelectedAnswers((prev) => {
        const newAnswers = [...prev];
        newAnswers[currentQuestion] = answerIndex;
        return newAnswers;
      });

      setAnsweredQuestions((prev) => {
        const newAnswered = [...prev];
        newAnswered[currentQuestion] = true;

        // Check if all questions are answered
        if (newAnswered.every((answered) => answered) && !endTime) {
          setEndTime(Date.now());
        }

        return newAnswered;
      });

      setShowResult(true);
    },
    [currentQuestion, selectedAnswers, endTime]
  );

  const handleNextQuestion = useCallback(() => {
    if (currentQuestion < questions.length - 1) {
      const nextIndex = currentQuestion + 1;
      setCurrentQuestion(nextIndex);
      setShowResult(selectedAnswers[nextIndex] !== null);
    }
  }, [currentQuestion, questions.length, selectedAnswers]);

  const handlePreviousQuestion = useCallback(() => {
    if (currentQuestion > 0) {
      const prevIndex = currentQuestion - 1;
      setCurrentQuestion(prevIndex);
      setShowResult(selectedAnswers[prevIndex] !== null);
    }
  }, [currentQuestion, selectedAnswers]);

  const handleQuestionNavigate = useCallback(
    (index: number) => {
      setCurrentQuestion(index);
      setShowResult(selectedAnswers[index] !== null);
    },
    [selectedAnswers]
  );

  const handleRestart = useCallback(() => {
    setCurrentQuestion(0);
    setSelectedAnswers(new Array(questions.length).fill(null));
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions(new Array(questions.length).fill(false));
    setStartTime(Date.now());
    setEndTime(null);
    setCurrentTime(0);
  }, [questions.length]);

  // Memoized Quiz Content
  const QuizContent = useMemo(
    () => (
      <div className="max-w-5xl mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl shadow-lg">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {title}
              </h1>
            </div>
            <Button
              onClick={exitQuiz}
              variant="destructive"
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
            >
              <LogOut className="h-4 w-4 mr-2" />
              خروج من الامتحان
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            onClick={handlePreviousQuestion}
            disabled={currentQuestion === 0}
            className="bg-white text-gray-700 border-2 border-gray-300 hover:bg-gray-50 hover:border-gray-400 px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105"
          >
            <ArrowLeft className="h-4 w-4 " />
          </Button>

          <div className="grid gird-cols-1 gap-2 md:grid-cols-2">
            <Timer time={totalTime} />
            <ScoreDisplay
              score={score}
              total={questions.length}
              percentage={percentage}
              gradeInfo={gradeInfo}
            />
          </div>

          <div className="flex gap-3">
            {isFinished && (
              <Button
                onClick={handleRestart}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Restart Quiz
              </Button>
            )}
            <Button
              onClick={handleNextQuestion}
              disabled={currentQuestion === questions.length - 1}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <ProgressBar current={currentQuestion} total={questions.length} />

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-4">
          {/* Question Card */}
          <Card className="mb-6 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-t-lg">
              <CardTitle className="text-xl text-gray-800 flex items-center gap-2">
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm">
                  Q{currentQ.id}
                </span>
              </CardTitle>
              <CardDescription className="text-xl text-gray-800 leading-relaxed font-medium mt-3">
                {currentQ.question}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-3">
                {currentQ.options.map((option, index) => (
                  <OptionButton
                    key={index}
                    option={option}
                    index={index}
                    isSelected={selectedAnswer === index}
                    isCorrect={index === currentQ.correctAnswer}
                    isAnswered={selectedAnswer !== null}
                    onClick={() => handleAnswerSelect(index)}
                  />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Result Card */}
          {showResult && (
            <Card className="mb-6 shadow-xl border-0 bg-white/90 backdrop-blur-sm">
              <CardHeader
                className={`rounded-t-lg ${
                  selectedAnswer === currentQ.correctAnswer
                    ? "bg-gradient-to-r from-green-50 to-emerald-50"
                    : "bg-gradient-to-r from-red-50 to-pink-50"
                }`}
              >
                <CardTitle className="flex items-center gap-3">
                  {selectedAnswer === currentQ.correctAnswer ? (
                    <>
                      <div className="p-2 bg-green-100 rounded-full">
                        <CheckCircle className="h-6 w-6 text-green-600" />
                      </div>
                      <span className="text-green-800 text-xl font-bold">
                        Excellent! Correct Answer
                      </span>
                    </>
                  ) : (
                    <>
                      <div className="p-2 bg-red-100 rounded-full">
                        <XCircle className="h-6 w-6 text-red-600" />
                      </div>
                      <span className="text-red-800 text-xl font-bold">
                        Incorrect Answer
                      </span>
                    </>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="bg-blue-50 p-5 rounded-xl border border-blue-200">
                    <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2 text-lg">
                      📖 Explanation
                    </h4>
                    <div
                      className="text-gray-700 leading-relaxed prose prose-sm max-w-none prose-headings:font-bold prose-p:my-2"
                      dangerouslySetInnerHTML={{ __html: currentQ.explanation }}
                    />
                  </div>
                  <div className="bg-purple-50 p-5 rounded-xl border border-purple-200">
                    <h4
                      className="font-bold text-purple-800 mb-3 flex items-center gap-2 text-lg text-right"
                      dir="rtl"
                    >
                      📚 الشرح بالعربي
                    </h4>
                    <div
                      className="text-gray-700 leading-relaxed text-right prose prose-sm max-w-none prose-headings:font-bold prose-p:my-2"
                      dir="rtl"
                      dangerouslySetInnerHTML={{
                        __html: currentQ.arabicExplanation,
                      }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <QuestionNavigator
          questions={questions}
          currentQuestion={currentQuestion}
          answeredQuestions={answeredQuestions}
          selectedAnswers={selectedAnswers}
          onNavigate={handleQuestionNavigate}
        />

        {isFinished && (
          <FinalResults
            score={score}
            total={questions.length}
            percentage={percentage}
            gradeInfo={gradeInfo}
            totalTime={totalTime}
          />
        )}
      </div>
    ),
    [
      title,
      currentQ,
      selectedAnswer,
      showResult,
      currentQuestion,
      questions,
      answeredQuestions,
      selectedAnswers,
      score,
      percentage,
      gradeInfo,
      totalTime,
      isFinished,
      exitQuiz,
      handlePreviousQuestion,
      handleNextQuestion,
      handleAnswerSelect,
      handleQuestionNavigate,
      handleRestart,
    ]
  );

  return (
    <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-4">
      {!isQuizOpen ? (
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl shadow-lg">
                <BookOpen className="h-12 w-12 text-white" />
              </div>
              <h1 className="text-2xl md:text-5xl  font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {title}
              </h1>
            </div>

            <div className="mb-8">
              <p className="text-lg text-gray-600 mb-4">
                Welcome to the networking quiz! This exam contains{" "}
                {questions.length} questions.
              </p>
              <div
                className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-right"
                dir="rtl"
              >
                <h3 className="font-bold text-amber-800 mb-2">تعليمات مهمة:</h3>
                <ul className="text-amber-700 space-y-1 text-right">
                  <li>
                    • لا يمكن الخروج من الامتحان إلا بالضغط على زر "خروج من
                    الامتحان"
                  </li>
                  <li>• سيتم منع استخدام اختصارات لوحة المفاتيح</li>
                  <li>• لا يمكن العودة للصفحة السابقة في المتصفح</li>
                  <li>• يرجى التأكد من اتصال الإنترنت قبل البدء</li>
                </ul>
              </div>
            </div>

            <Button
              onClick={startQuiz}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg"
            >
              <BookOpen className="h-5 w-5 mr-2" />
              Start Quiz
            </Button>
          </div>
        </div>
      ) : (
        <Dialog open={isQuizOpen} onOpenChange={setIsQuizOpen}>
          <DialogContent className="max-w-none w-screen h-screen p-0 border-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
            <div className="min-h-screen w-screen overflow-y-auto">
              {QuizContent}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default NetworkingQuizApp;
