import { X, Network, Globe, Wifi, Shield, Clock, Layers } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

interface ExplanationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ExplanationDialog({
  open,
  onOpenChange,
}: ExplanationDialogProps) {
  const sections = [
    {
      icon: <Network className="w-6 h-6 text-blue-500" />,
      title: "Network Fundamentals",
      titleAr: "أساسيات الشبكات",
      points: [
        {
          en: "End systems (hosts) are devices like computers, smartphones, and servers that communicate over networks",
          ar: "الأنظمة الطرفية (End systems) هي الأجهزة زي الكمبيوترات والموبايلات والسيرفرات اللي بتتواصل عبر الشبكات",
        },
        {
          en: "Packet switches (routers and link-layer switches) forward data packets between networks",
          ar: "مبدلات الحزم (الراوترات والسويتشات) بتنقل حزم البيانات بين الشبكات المختلفة",
        },
        {
          en: "Communication links connect devices together using cables, fiber optics, or wireless signals",
          ar: "روابط الاتصال بتربط الأجهزة ببعض باستخدام الكابلات أو الفايبر أو الإشارات اللاسلكية",
        },
        {
          en: "Data is segmented into packets with headers containing routing and control information",
          ar: "البيانات بتتقسم لحزم صغيرة مع رؤوس (headers) تحتوي على معلومات التوجيه والتحكم",
        },
      ],
    },
    {
      icon: <Globe className="w-6 h-6 text-green-500" />,
      title: "Internet Access Technologies",
      titleAr: "تقنيات الوصول للإنترنت",
      points: [
        {
          en: "DSL (Digital Subscriber Line) uses existing telephone lines with digital-to-analog conversion",
          ar: "DSL يستخدم خطوط التليفون الموجودة مع تحويل الإشارات من رقمية لتناظرية",
        },
        {
          en: "Cable internet uses HFC (Hybrid Fiber Coax) combining fiber optic and coaxial cables",
          ar: "إنترنت الكابل يستخدم HFC (مزيج الفايبر والكوكسيل) بدمج كابلات الفايبر والكوكسيل",
        },
        {
          en: "FTTH (Fiber to the Home) provides direct fiber optic connection for maximum speed",
          ar: "FTTH يوفر اتصال فايبر مباشر للمنزل لأقصى سرعة ممكنة",
        },
        {
          en: "DSL modem converts digital data to analog high-frequency tones for transmission over phone lines",
          ar: "مودم DSL يحول البيانات الرقمية لترددات تناظرية عالية للإرسال عبر خطوط التليفون",
        },
        {
          en: "DSLAM at Central Office converts analog signals back to digital format",
          ar: "جهاز DSLAM في المكتب المركزي يحول الإشارات التناظرية مرة أخرى للصيغة الرقمية",
        },
        {
          en: "Cable modem works similarly to DSL but uses coaxial cables instead of phone lines",
          ar: "مودم الكابل يعمل مثل DSL لكن يستخدم كابلات كوكسيل بدلاً من خطوط التليفون",
        },
        {
          en: "The home's DSL modem takes digital data and translates it to high-frequency tones for transmission over telephone wires to the CO",
          ar: "مودم DSL في المنزل ياخد البيانات الرقمية ويحولها لترددات عالية للإرسال عبر أسلاك التليفون للمكتب المركزي",
        },
        {
          en: "Key difference: DSL uses existing telephone lines, while Cable uses coaxial/fiber cables (HFC system)",
          ar: "الفرق الأساسي: DSL يستخدم خطوط التليفون الموجودة، بينما الكابل يستخدم كابلات كوكسيل/فايبر (نظام HFC)",
        },
        {
          en: "Both DSL and Cable modems convert digital signals to analog for transmission, then back to digital at the provider's end",
          ar: "كلاً من مودم DSL والكابل يحولان الإشارات الرقمية لتناظرية للإرسال، ثم مرة أخرى لرقمية عند مقدم الخدمة",
        },
        {
          en: "TDM (Time Division Multiplexing): divides time into fixed frames and time slots for different users",
          ar: "TDM (تعدد الإرسال بتقسيم الوقت): يقسم الوقت لإطارات ثابتة وفترات زمنية للمستخدمين المختلفين",
        },
        {
          en: "FDM (Frequency Division Multiplexing): divides frequency spectrum among different connections like radio stations",
          ar: "FDM (تعدد الإرسال بتقسيم التردد): يقسم طيف التردد بين الاتصالات المختلفة مثل محطات الراديو",
        },
        {
          en: "ISPs offer various access types: residential broadband, LAN access, and mobile wireless",
          ar: "مقدمي الخدمة يوفروا أنواع مختلفة: النطاق العريض السكني، وصول LAN، واللاسلكي المحمول",
        },
      ],
    },
    {
      icon: <Wifi className="w-6 h-6 text-purple-500" />,
      title: "Network Core & Switching",
      titleAr: "نواة الشبكة والتبديل",
      points: [
        {
          en: "Network core is a mesh of packet switches and links interconnecting end systems",
          ar: "نواة الشبكة هي شبكة من مبدلات الحزم والروابط التي تربط الأنظمة الطرفية",
        },
        {
          en: "Store-and-forward transmission: routers receive complete packets before forwarding",
          ar: "الإرسال بالتخزين والتمرير: الراوترات تستقبل الحزم كاملة قبل إعادة الإرسال",
        },
        {
          en: "Circuit switching reserves resources for entire session (like telephone calls)",
          ar: "التبديل الدائري يحجز الموارد للجلسة كاملة (زي مكالمات التليفون)",
        },
        {
          en: "Packet switching shares resources dynamically without reservation",
          ar: "تبديل الحزم يشارك الموارد ديناميكيًا بدون حجز مسبق",
        },
      ],
    },
    {
      icon: <Network className="w-6 h-6 text-teal-500" />,
      title: "Transmission Media Types",
      titleAr: "أنواع وسائط النقل",
      points: [
        {
          en: "Guided Media: signals travel through physical cables like fiber-optic, twisted-pair copper wire, and coaxial cable",
          ar: "الوسائط الموجهة: الإشارات تسافر عبر كابلات فيزيائية مثل الفايبر الضوئي وأسلاك النحاس المجدولة والكابل المحوري",
        },
        {
          en: "Unguided Media: signals travel through air or space like wireless LAN, cellular, and satellite communications",
          ar: "الوسائط غير الموجهة: الإشارات تسافر عبر الهواء أو الفضاء مثل الشبكات اللاسلكية والخلوية والأقمار الصناعية",
        },
        {
          en: "Guided media offers more security and reliability but requires physical installation",
          ar: "الوسائط الموجهة توفر أمان وموثوقية أكثر لكن تحتاج تركيب فيزيائي",
        },
        {
          en: "Unguided media provides mobility and flexibility but can face interference and security challenges",
          ar: "الوسائط غير الموجهة توفر حركة ومرونة لكن قد تواجه تداخل وتحديات أمنية",
        },
      ],
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-500" />,
      title: "Network Delays & Performance",
      titleAr: "التأخير وأداء الشبكة",
      points: [
        {
          en: "Processing delay: time to examine packet headers and determine routing",
          ar: "تأخير المعالجة: الوقت لفحص رؤوس الحزم وتحديد التوجيه",
        },
        {
          en: "Queuing delay: waiting time in router buffers before transmission",
          ar: "تأخير الطابور: وقت الانتظار في ذاكرة الراوتر قبل الإرسال",
        },
        {
          en: "Transmission delay: time to push packet onto link (L/R formula)",
          ar: "تأخير الإرسال: الوقت لدفع الحزمة على الرابط (قانون L/R)",
        },
        {
          en: "Propagation delay: time for signal to travel across physical medium",
          ar: "تأخير الانتشار: الوقت للإشارة للسفر عبر الوسط الفيزيائي",
        },
        {
          en: "End-to-end delay = N × (dproc + dtrans + dprop) for N routers",
          ar: "التأخير من النهاية للنهاية = N × (تمعالجة + إرسال + انتشار) لعدد N راوتر",
        },
      ],
    },
    {
      icon: <Layers className="w-6 h-6 text-indigo-500" />,
      title: "Protocol Stack & Layers",
      titleAr: "مكدس البروتوكولات والطبقات",
      points: [
        {
          en: "Application Layer: HTTP, FTP, DNS, SMTP protocols for user applications",
          ar: "طبقة التطبيق: بروتوكولات HTTP, FTP, DNS, SMTP لتطبيقات المستخدم",
        },
        {
          en: "Transport Layer: TCP (reliable) and UDP (fast) for end-to-end communication",
          ar: "طبقة النقل: TCP (موثوق) و UDP (سريع) للاتصال من النهاية للنهاية",
        },
        {
          en: "Network Layer: IP protocol for routing packets across networks",
          ar: "طبقة الشبكة: بروتوكول IP لتوجيه الحزم عبر الشبكات",
        },
        {
          en: "Data-Link Layer: handles local network communication with MAC addresses",
          ar: "طبقة ربط البيانات: تتعامل مع الاتصال المحلي باستخدام عناوين MAC",
        },
        {
          en: "Physical Layer: manages actual transmission of bits over physical medium",
          ar: "الطبقة الفيزيائية: تدير الإرسال الفعلي للبتات عبر الوسط الفيزيائي",
        },
        {
          en: "Packet naming by layer: Application (Message) → Transport (Segment) → Network (Datagram) → Data-Link (Frame)",
          ar: "تسمية الحزم حسب الطبقة: التطبيق (رسالة) ← النقل (مقطع) ← الشبكة (مخطط بيانات) ← ربط البيانات (إطار)",
        },
      ],
    },
    {
      icon: <Shield className="w-6 h-6 text-red-500" />,
      title: "Protocol Characteristics",
      titleAr: "خصائص البروتوكولات",
      points: [
        {
          en: "TCP is connection-oriented with flow control, congestion control, and error detection",
          ar: "TCP موجه بالاتصال مع التحكم في التدفق، التحكم في الازدحام، واكتشاف الأخطاء",
        },
        {
          en: "UDP is connectionless, faster but without guaranteed delivery",
          ar: "UDP غير موجه بالاتصال، أسرع لكن بدون ضمان التسليم",
        },
        {
          en: "Socket interface allows programs to communicate over the Internet",
          ar: "واجهة السوكت تسمح للبرامج بالتواصل عبر الإنترنت",
        },
        {
          en: "Protocols define rules for message format, order, and actions",
          ar: "البروتوكولات تحدد قوانين تنسيق الرسائل وترتيبها والإجراءات",
        },
      ],
    },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-none p-0">
        <div className="h-screen w-screen overflow-y-auto bg-gradient-to-br from-blue-50 to-indigo-100">
          <DialogHeader className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <DialogTitle className="text-2xl font-bold text-gray-900">
                  شرح شامل لمفاهيم الشبكات | Comprehensive Networking Concepts
                </DialogTitle>
                <button
                  onClick={() => onOpenChange(false)}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>
            </div>
          </DialogHeader>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                النقاط المهمة في شبكات الحاسوب
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                مجموعة شاملة من المفاهيم الأساسية التي تحتاج لمعرفتها في مادة
                شبكات الحاسوب
              </p>
            </div>

            <div className="grid gap-8">
              {sections.map((section, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-white/20 p-2 rounded-lg">
                        {section.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {section.title}
                        </h3>
                        <p className="text-blue-100 text-sm">
                          {section.titleAr}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="space-y-4">
                      {section.points.map((point, pointIndex) => (
                        <div
                          key={pointIndex}
                          className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-500 hover:bg-blue-50 transition-colors duration-200"
                        >
                          <div className="flex items-start gap-3">
                            <div className="bg-blue-500 text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                              {pointIndex + 1}
                            </div>
                            <div className="flex-1">
                              <p className="text-gray-800 font-medium mb-2 leading-relaxed">
                                {point.en}
                              </p>
                              <p
                                className="text-gray-600 text-sm leading-relaxed"
                                dir="rtl"
                              >
                                {point.ar}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">
                نصائح للامتحان | Exam Tips
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-bold mb-2">
                    تذكر الصيغ | Remember Formulas
                  </h4>
                  <p className="text-sm">
                    Transmission delay = L/R
                    <br />
                    End-to-end delay = N(dproc + dtrans + dprop)
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-bold mb-2">
                    الفرق بين البروتوكولات | Protocol Differences
                  </h4>
                  <p className="text-sm">
                    TCP = Connection-oriented, reliable
                    <br />
                    UDP = Connectionless, fast
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-bold mb-2">
                    تحويل الإشارات | Signal Conversion
                  </h4>
                  <p className="text-sm">
                    DSL/Cable Modem: Digital → Analog
                    <br />
                    DSLAM/CMTS: Analog → Digital
                    <br />
                    <strong>DSL vs Cable:</strong> Phone lines vs Coaxial cables
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-bold mb-2">
                    طرق التعدد | Multiplexing Methods
                  </h4>
                  <p className="text-sm">
                    <strong>TDM:</strong> Time slots (كل حد ياخد دوره)
                    <br />
                    <strong>FDM:</strong> Frequency bands (كل حد ياخد تردد)
                    <br />
                    TDM = Fixed frames & time slots
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-bold mb-2">
                    وسائط النقل | Transmission Media
                  </h4>
                  <p className="text-sm">
                    <strong>Guided:</strong> Cables (fiber, copper, coax)
                    <br />
                    <strong>Unguided:</strong> Wireless (WiFi, cellular,
                    satellite)
                    <br />
                    Guided = More secure, Unguided = More flexible
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-bold mb-2">
                    طبقات الشبكة | Network Layers
                  </h4>
                  <p className="text-sm">
                    Application → Transport → Network → Data-Link → Physical
                    <br />
                    <strong>Packet Names:</strong> Message → Segment → Datagram
                    → Frame
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-bold mb-2">
                    أنواع التأخير | Delay Types
                  </h4>
                  <p className="text-sm">
                    Processing, Queuing, Transmission, Propagation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
