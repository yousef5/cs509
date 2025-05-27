import { BookOpen, Book } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../components/ui/card";
import { Brain } from "lucide-react";

import NetworkingQuizApp from "../../QuizPage";

import { useState } from "react";

import { quiz2 } from "../../utils/quiz2";
import { Explanation2Dialog } from "../../components/Explanation2Dialog";

const Chapter2Page = () => {
  const [showExplanation, setShowExplanation] = useState(false);

  return (
    <div
      className="w-full max-w-full space-y-4 overflow-x-hidden px-3 "
      dir="rtl"
    >
      {/* Beautiful Header */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-l from-blue-600 to-indigo-700 px-6 py-8 text-white relative">
          <div className="absolute top-0 left-0 w-full h-full bg-black/5"></div>
          <div className="relative flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold mb-1">الشيت الثاني</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className=" w-[600px] grid grid-cols-1  gap-4 items-center justify-center">
          {/* Explanation Card */}
          <div
            className="group relative bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
            onClick={() => setShowExplanation(true)}
          >
            {/* Content */}
            <div className="relative p-4 flex items-center gap-4">
              {/* Icon Container */}
              <div className="relative flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300 shadow-md">
                  <Book className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Text Content */}
              <div className="flex-grow">
                <h2 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  الشروحات
                </h2>
                <p className="text-gray-600 text-sm">اضغط لفتح الشرح المفصل</p>
              </div>

              {/* Bottom Gradient Line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          </div>

          {/* Quiz Card */}
          <Card className="border border-purple-100">
            <CardHeader className="bg-purple-50 rounded-t-lg border-b border-purple-100 py-2">
              <CardTitle className="text-purple-900 flex items-center gap-2 text-base">
                <Brain className="w-4 h-4" />
                اختبار
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3">
              <NetworkingQuizApp title="Chapter 2 Quiz" questions={quiz2} />
            </CardContent>
          </Card>
        </div>
      </div>
      {/* Main Content */}

      {/* Explanation Dialog */}
      <Explanation2Dialog
        open={showExplanation}
        onOpenChange={setShowExplanation}
      />
    </div>
  );
};

export default Chapter2Page;
