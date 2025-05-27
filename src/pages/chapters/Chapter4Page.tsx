import { BookOpen } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../components/ui/card";
import { Brain } from "lucide-react";

import NetworkingQuizApp from "../../QuizPage";

import { quiz4 } from "../../utils/quiz4";

const Chapter4Page = () => {
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
              <h1 className="text-2xl font-bold mb-1">الشيت الرابع</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className=" w-[600px] grid grid-cols-1  gap-4 items-center justify-center">
          {/* Explanation Card */}

          {/* Quiz Card */}
          <Card className="border border-purple-100">
            <CardHeader className="bg-purple-50 rounded-t-lg border-b border-purple-100 py-2">
              <CardTitle className="text-purple-900 flex items-center gap-2 text-base">
                <Brain className="w-4 h-4" />
                اختبار
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3">
              <NetworkingQuizApp title="Chapter 4 Quiz" questions={quiz4} />
            </CardContent>
          </Card>
        </div>
      </div>
      {/* Main Content */}
    </div>
  );
};

export default Chapter4Page;
