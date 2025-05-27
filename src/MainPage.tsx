import {
  BookOpen,
  Home,
  FileText,
  Image,
  Award,
  FileCheck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  const cards = [
    {
      id: 1,
      icon: Home,
      title: "الصفحة الرئيسية",
      description: "الرئيسية",
      color: "bg-blue-500",
      path: "/",
    },
    {
      id: 2,
      icon: BookOpen,
      title: "الشيت الأول",
      description: "محتوى الشيت الأول",
      color: "bg-green-500",
      path: "/chapter1",
    },
    {
      id: 3,
      icon: BookOpen,
      title: "الشيت الثاني",
      description: "محتوى الشيت الثاني",
      color: "bg-purple-500",
      path: "/chapter2",
    },
    {
      id: 4,
      icon: BookOpen,
      title: "الشيت الثالث",
      description: "محتوى الشيت الثالث",
      color: "bg-orange-500",
      path: "/chapter3",
    },
    {
      id: 5,
      icon: BookOpen,
      title: "الشيت الرابع",
      description: "محتوى الشيت الرابع",
      color: "bg-red-500",
      path: "/chapter4",
    },
    {
      id: 6,
      icon: FileText,
      title: "MCQ,TF",
      description: "أسئلة الاختيار من متعدد",
      color: "bg-indigo-500",
      path: "/mcq",
    },
    {
      id: 7,
      icon: FileCheck,
      title: "Mid Term",
      description: "امتحان منتصف الفصل",
      color: "bg-pink-500",
      path: "/mid",
    },
    {
      id: 8,
      icon: Image,
      title: "Gallery",
      description: "معرض الصور",
      color: "bg-teal-500",
      path: "/gallery",
    },
    {
      id: 9,
      icon: Award,
      title: "Final",
      description: "الامتحان النهائي",
      color: "bg-yellow-500",
      path: "/final",
    },
    {
      id: 10,
      icon: FileText,
      title: "Text Quiz",
      description: "أسئلة نصية",
      color: "bg-cyan-500",
      path: "/text",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => navigate(card.path)}
            className="bg-white rounded-xl shadow-lg p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div
              className={`${card.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}
            >
              <card.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">{card.title}</h3>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
