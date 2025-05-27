import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { Menu, X, Home, BookOpen, ChevronDown } from "lucide-react";
import MainPage from "./MainPage";
import Chapter1Page from "./pages/chapters/Chapter1Page";
import Chapter2Page from "./pages/chapters/Chapter2Page";
import Chapter3Page from "./pages/chapters/Chapter3Page";
import Chapter4Page from "./pages/chapters/Chapter4Page";
import QuizBank from "./pages/QuizBank";
import MidTerm from "./pages/MidTerm";
import ImageGallery from "./pages/Gallery";
import FinalQuiz from "./pages/FinalQuiz";
import TextQuiz from "./pages/TextQuiz";

// interface NavigationItemProps {
//   label: string;
//   icon: React.ElementType;
//   isActive: boolean;
//   onClick: () => void;
// }

// const NavigationItem = ({
//   label,
//   icon: Icon,
//   isActive,
//   onClick,
// }: NavigationItemProps) => (
//   <button
//     onClick={onClick}
//     className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group w-full text-left ${
//       isActive
//         ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-600/25"
//         : "bg-white text-gray-600 hover:text-blue-600 hover:bg-blue-50"
//     }`}
//   >
//     <Icon
//       className={`w-5 h-5 ${
//         isActive ? "text-white" : "text-gray-400 group-hover:text-blue-500"
//       }`}
//     />
//     <span className="font-medium">{label}</span>
//   </button>
// );

const AppContent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const navigationItems = [
    { key: "/", label: "الصفحة الرئيسية", icon: Home },
    { key: "/chapter1", label: "الشيت الأول", icon: BookOpen },
    { key: "/chapter2", label: "الشيت الثاني", icon: BookOpen },
    { key: "/chapter3", label: "الشيت الثالث", icon: BookOpen },
    { key: "/chapter4", label: "الشيت الرابع", icon: BookOpen },
    { key: "/mcq", label: "MCQ,TF", icon: BookOpen },
    { key: "/mid", label: "Mid Term", icon: BookOpen },
    { key: "/gallery", label: "Gallery ", icon: BookOpen },
    { key: "/final", label: "Final ", icon: BookOpen },
    { key: "/text", label: "text ", icon: BookOpen },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16" dir="rtl">
            {/* Logo */}
            <div
              className="flex items-center cursor-pointer"
              onClick={() => handleNavigation("/")}
            >
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">CS</span>
                </div>
              </div>
              <div className="mr-3 hidden sm:block">
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  CS 509 - الشبكات
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:block relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all duration-200 bg-white text-gray-600 hover:text-blue-600 hover:bg-blue-50"
              >
                القائمة
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                  {navigationItems.map((item) => (
                    <button
                      key={item.key}
                      onClick={() => handleNavigation(item.key)}
                      className={`w-full text-right bg-slate-100 border  px-5 py-3 font-medium transition-all duration-200 flex items-center gap-2   hover:border-blue-600 rounded-lg ${
                        location.pathname === item.key ||
                        (location.pathname === "/" && item.key === "/")
                          ? "border-blue-600 text-blue-600"
                          : "text-gray-600 hover:text-blue-600"
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-xl text-gray-400 hover:text-gray-500 hover:bg-gray-100 transition-colors bg-white"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden bg-white border-t border-gray-100 shadow-lg"
            dir="rtl"
          >
            <div className="px-4 py-4 space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavigation(item.key)}
                  className={`w-full text-right px-5 py-3 rounded-xl font-medium transition-all duration-200 ${
                    location.pathname === item.key ||
                    (location.pathname === "/" && item.key === "/")
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                      : "bg-white text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className=" px-4  py-3">
        <div className="animate-in fade-in duration-500">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/chapter1" element={<Chapter1Page />} />
            <Route path="/chapter2" element={<Chapter2Page />} />
            <Route path="/chapter3" element={<Chapter3Page />} />
            <Route path="/chapter4" element={<Chapter4Page />} />
            <Route path="/mcq" element={<QuizBank />} />
            <Route path="/mid" element={<MidTerm />} />
            <Route path="/gallery" element={<ImageGallery />} />
            <Route path="/final" element={<FinalQuiz />} />
            <Route path="/text" element={<TextQuiz />} />
          </Routes>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-500 text-sm">
            © 2025 CS 509 | Developed by Mohammed Yousef
          </div>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
