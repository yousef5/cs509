interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  arabicExplanation: string;
}

export const quiz1: Question[] = [
  {
    id: 1,
    question:
      "……………….. are connected together by a network of communication links and packet switches.",
    options: ["Routers", "End systems", "Hosts", "b and c"],
    correctAnswer: 3,
    explanation:
      "<p>End systems (also called hosts) are connected together by communication links and packet switches. These end systems can be computers, smartphones, etc., that communicate over a network.</p>",
    arabicExplanation:
      "<p>الأنظمة الطرفية (End systems) أو hosts زي الكمبيوترات والموبايلات بتتربط ببعض عن طريق لينكات الاتصال والمبدلات (packet switches).</p><p>مثال: جهاز الكمبيوتر بتاعك (host) بيتواصل مع خوادم المواقع (hosts) عن طريق الإنترنت اللي مليان راوترات وسويتشات بتساعد في نقل الداتا.</p>",
  },
  {
    id: 2,
    question:
      "When one end system has data to send to another end system, the sending end system segments the data and adds ……….. bytes to each segment.",
    options: ["Header", "Sequence Number", "Packet", "All of the above"],
    correctAnswer: 0,
    explanation:
      "<p>When data is segmented for sending, each segment has a <strong>header</strong> added to it. The header contains information about the segment to help it be properly reassembled and understood by the receiving system.</p>",
    arabicExplanation:
      "<p>لما جهاز يبعث داتا لجهاز تاني، بيكسرها لقطع صغيرة وبيزود لكل قطعة حاجة اسمها header (رأس)، عشان يساعد الجهاز التاني يعرف ينظمها.</p><p>مثال: لما تبعت صورة على واتساب، الصورة بتتقسم أجزاء، وكل جزء عليه هيدر بيعرف يوصله صح للجهة التانية.</p>",
  },
  {
    id: 3,
    question:
      "When one end system has data to send to another end system, the sending end system segments the data into packages of information called ………………..",
    options: ["Packets", "Bits", "Links", "All of the above"],
    correctAnswer: 0,
    explanation:
      "<p>The data segments are called <strong>packets</strong>. These packets travel over the network to reach the destination end system.</p>",
    arabicExplanation:
      "<p>البيانات اللي الجهاز بيبعتها بتتسمى packets (حزم بيانات). الحزم دي هي اللي بتسافر جوه الشبكة عشان توصل للجهاز التاني.</p><p>مثال: لما تبعت فيديو على اليوتيوب، بيتحول لحزم packets بتوصل واحدة ورا التانية لحد ما الفيديو يشتغل عندك.</p>",
  },
  {
    id: 4,
    question:
      "…………………. takes a packet arriving on one of its incoming communication links and forwards that packet on one of its outgoing communication links. Such as …………… and ……………",
    options: [
      "Packet switches, router, host.",
      "Packet switches, link-layer switches, routers.",
      "Packet switches, link-layer switches, end systems.",
      "Routers, link-layer switches, routers.",
    ],
    correctAnswer: 1,
    explanation:
      "<p>Devices like <strong>packet switches</strong>, <strong>link-layer switches</strong>, and <strong>routers</strong> take an incoming packet and send it forward to the appropriate link. These are essential components in network data forwarding.</p>",
    arabicExplanation:
      "<p>الحاجات اللي بتنقل الباكيتس جوه الشبكة هي packet switches زي الراوترات والسويتشات (link-layer switches). بتاخد الباكيتس وتبعتها للمكان الصح.</p><p>مثال: الراوتر في بيتك بياخد الباكيتس من النت ويبعتها لجهازك عشان تقدر تتصفح النت.</p>",
  },
  {
    id: 5,
    question:
      "……………….. are typically used in access networks, while …………… are typically used in the network core.",
    options: [
      "Link-layer switches, routers",
      "Routers, link-layer switches",
      "Routers, hosts",
      "Link-layer switches, hosts",
    ],
    correctAnswer: 0,
    explanation:
      "<p><strong>Link-layer switches</strong> and <strong>routers</strong> are usually used in the access networks (like your home or office), while <strong>routers</strong> are used in the core of the network to manage large-scale routing between different networks.</p>",
    arabicExplanation:
      "<p>في الشبكة، السويتشات (link-layer switches) والراوترات بيشتغلوا في جزء الـ access network (زي شبكة الشركة أو البيت). أما في قلب الشبكة (core)، بيشتغلوا الراوترات عشان ينقلوا البيانات بين الشبكات الكبيرة.</p><p>مثال: السويتشات في مكتبك بتربط الأجهزة مع بعض، إنما الراوتر في سنترال النت بينقل البيانات بين شبكات العالم كله.</p>",
  },
  {
    id: 6,
    question:
      "ISPs provide a variety of types of network access to the end systems, including ………..",
    options: [
      "residential broadband access such as cable modem or DSL",
      "high-speed local area network access",
      "mobile wireless access.",
      "All of the above.",
    ],
    correctAnswer: 3,
    explanation:
      "<p>Internet Service Providers (ISPs) offer various access types: from home broadband (like DSL, cable modem), to local networks (LANs), and even wireless networks. They make sure end systems can connect to the Internet!</p>",
    arabicExplanation:
      "<p>مقدمي خدمة الإنترنت (ISPs) بيوفروا طرق كتير لربط الأجهزة زي الإنترنت في البيت (DSL, كابل)، شبكات محلية (LAN)، والإنترنت اللاسلكي (WiFi). يعني بيخلوا أي جهاز يقدر يتوصل بالنت!</p><p>مثال: في بيتك، غالبًا بتستخدم DSL أو راوتر WiFi. في الشغل، ممكن شبكة LAN أو واي فاي.</p>",
  },
  {
    id: 7,
    question:
      "End systems, packet switches, and other pieces of the Internet run …………… that control the sending and receiving of information within the Internet.",
    options: ["Protocols", "Software", "Web services", "All of the above"],
    correctAnswer: 0,
    explanation:
      "<p><strong>Protocols</strong> are rules that tell computers how to talk to each other across networks. They handle data transfer and ensure everything arrives in order.</p>",
    arabicExplanation:
      "<p>البروتوكولات (Protocols) هي القوانين اللي الأجهزة بتمشي عليها عشان تتكلم مع بعض. بتنظم نقل البيانات وتضمن توصيلها صح.</p><p>مثال: زي ما العربيات ليها إشارات مرور، الشبكة ليها بروتوكولات زي TCP/IP عشان تنظم الطريق.</p>",
  },
  {
    id: 8,
    question:
      "End systems connected to the Internet provide a ………………… that specifies how a program running on one end system asks the Internet infrastructure to deliver data to a specific destination program running on another end system.",
    options: ["Socket interface", "TCP", "IP", "TCP/IP"],
    correctAnswer: 0,
    explanation:
      "<p>The <strong>socket interface</strong> allows programs to send and receive data over the Internet. It's like a doorway between your app and the network.</p>",
    arabicExplanation:
      "<p>الـ socket interface دي زي باب بيتك، البرنامج بيستخدمه عشان يبعت ويستقبل الداتا من الإنترنت.</p><p>مثال: لما تفتح فيسبوك، التطبيق بيستخدم socket interface عشان يجيب البيانات من سيرفر فيسبوك.</p>",
  },
  {
    id: 9,
    question:
      "………………….. is a set of rules that the sending program must follow so that the Internet can deliver the data to the destination program.",
    options: ["Protocol", "TCP", "IP", "TCP/IP"],
    correctAnswer: 0,
    explanation:
      "<p>A <strong>protocol</strong> defines the rules for how data should be sent and received, ensuring it reaches the right destination correctly.</p>",
    arabicExplanation:
      "<p>البروتوكول (Protocol) هو القوانين اللي لازم البرنامج يتبعها عشان الداتا توصل صح للجهاز التاني.</p><p>مثال: زي قوانين المرور اللي بتخلي العربيات توصل لمكانها من غير مشاكل.</p>",
  },
  {
    id: 10,
    question:
      "………………….. is a set of rules that defines the format and the order of messages exchanged between two or more communicating entities, as well as the actions taken on the transmission and/or receipt of a message or other event.",
    options: ["A Protocol", "Software", "A Web service", "All of the above"],
    correctAnswer: 0,
    explanation:
      "<p>A <strong>protocol</strong> is like a conversation script: it says how to start, continue, and end a conversation between computers, defining the exact format and order of messages.</p>",
    arabicExplanation:
      "<p>البروتوكول زي سكريبت الحوار! بيحدد إزاي الأجهزة تتكلم مع بعض: تبدأ، تنهي، وتكمل الرسائل بالترتيب.</p><p>مثال: لما تطلب أغنية من Spotify، في بروتوكول بيحدد الخطوات من أول ما تطلب لحد ما الأغنية توصل.</p>",
  },
  {
    id: 11,
    question:
      "The home’s DSL modem takes digital data and translates it to high-frequency tones for transmission over telephone wires to the CO (i.e. convert digital signal to analog signal).",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "<p>The DSL modem converts digital data from your computer to analog signals that can travel over telephone wires and back to digital at the central office.</p>",
    arabicExplanation:
      "<p>المودم بتاع DSL بيحول الإشارة الرقمية من الكمبيوتر لإشارة صوتية (analog) عشان تمشي جوه سلك التليفون، وبعدين تتحول تاني لـ digital عند السنترال.</p><p>مثال: زي لما تحوّل صوتك لموجة إذاعية عشان يوصل للناس اللي معاهم راديو!</p>",
  },
  {
    id: 12,
    question:
      "At the DSLAM, the analog signals from many such houses are translated back into digital format.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "<p>At the DSLAM (Digital Subscriber Line Access Multiplexer), analog signals coming from homes are converted back to digital so that they can travel over the digital core network.</p>",
    arabicExplanation:
      "<p>في جهاز الـ DSLAM، الإشارات الصوتية (analog) اللي جاية من البيوت بتتحول تاني لإشارات رقمية (digital) عشان تكمل طريقها في الشبكة الرقمية.</p><p>مثال: زي ما بتسجل صوتك وتحوّله لملف mp3 رقمي!</p>",
  },
  {
    id: 13,
    question:
      "In the cable internet access, because both fiber and coaxial cable are employed in this system, it is often referred to as ……………",
    options: [
      "hybrid fiber coax (HFC)",
      "twisted copper wire.",
      "Coaxial",
      "All of the above.",
    ],
    correctAnswer: 0,
    explanation:
      "<p>The term <strong>HFC (hybrid fiber coax)</strong> is used because both fiber optic and coaxial cables are used together to deliver internet in this setup.</p>",
    arabicExplanation:
      "<p>في الإنترنت اللي بيشتغل بالكابلات، بيستخدموا الفايبر وكمان الكابل coaxial، علشان كده اسمه HFC (hybrid fiber coax).</p><p>مثال: شبكة الإنترنت اللي في بيتك غالبًا بيبقى فيها فايبر للسرعة، وكابل coax يوصل لراوترك.</p>",
  },
  {
    id: 14,
    question:
      "The cable modem takes digital data and translates it to high-frequency tones for transmission over telephone wires to the CO (i.e. convert digital signal to analog signal).",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "<p>The cable modem converts digital data to analog signals that can travel over telephone wires to the central office.</p>",
    arabicExplanation:
      "<p>المودم بتاع الكابل بيحوّل الداتا الرقمية لإشارات صوتية (analog) عشان توصل للسنترال عن طريق سلك التليفون.</p><p>مثال: زي لما الراديو بيحوّل الموسيقى لصوت مسموع عن طريق موجات الراديو.</p>",
  },
  {
    id: 15,
    question:
      "At the CMTS, the digital signals from many such houses are translated back into analog format.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "<p>At the CMTS (Cable Modem Termination System), signals are converted from analog back to digital, not the other way around.</p>",
    arabicExplanation:
      "<p>جهاز الـ CMTS بيحوّل الإشارات الصوتية (analog) من البيوت لإشارات رقمية (digital)، مش العكس!</p><p>مثال: زي لما السي دي بيحوّل الأغنية من الصوت المسجل لإشارة رقمية تشتغل على الكمبيوتر.</p>",
  },
  {
    id: 16,
    question:
      "……………… concept is to provide an optical fiber path from the CO directly to the home.",
    options: ["The fiber to the home (FTTH)", "DSL", "HFC", "Cable"],
    correctAnswer: 0,
    explanation:
      "<p><strong>FTTH (Fiber to the home)</strong> means that fiber optic cable goes directly to your home for the fastest internet possible.</p>",
    arabicExplanation:
      "<p>FTTH معناها الفايبر (الكابل الضوئي) واصل لحد بيتك، فبتاخد أسرع نت ممكن.</p><p>مثال: زي لما توصلك المية من المحطة لبيتك من غير خراطيم تانية – سريع ومباشر!</p>",
  },
  {
    id: 17,
    question:
      "……………… is a mesh of packet switches and links that interconnects the Internet’s end systems.",
    options: [
      "The network core.",
      "The network edge.",
      "The network access.",
      "Both a and b",
    ],
    correctAnswer: 0,
    explanation:
      "<p>The <strong>network core</strong> is the backbone that connects all routers and links to make sure data flows between end systems.</p>",
    arabicExplanation:
      "<p>الـ network core هو العمود الفقري للشبكة، اللي بيربط كل الراوترات والمفاتيح عشان البيانات توصل بسرعة بين الأجهزة.</p><p>مثال: زي الشوارع الكبيرة اللي بتربط كل المدن ببعض.</p>",
  },
  {
    id: 18,
    question:
      "To send a message from a source end system to a destination end system, the source breaks long messages into smaller chunks of data known as ……………",
    options: ["Packets", "Bits", "Links", "All of the above"],
    correctAnswer: 0,
    explanation:
      "<p>Messages are broken into <strong>packets</strong> to make sending easier and faster. Packets travel separately and are reassembled at the destination.</p>",
    arabicExplanation:
      "<p>الرسائل بتتقسم لحزم صغيرة اسمها packets عشان توصل بسهولة وسرعة، وبترجع تتجمع تاني عند الجهة التانية.</p><p>مثال: زي لما تبعت شحنة كبيرة، بتقسمها لكراتين صغيرة عشان النقل أسهل!</p>",
  },
  {
    id: 19,
    question:
      "…………… also referred to as access or branch routers, are specialized routers that act as gateways at the network edge.",
    options: [
      "Edge routers",
      "Network core",
      "Network edge",
      "All of the above",
    ],
    correctAnswer: 0,
    explanation:
      "<p><strong>Edge routers</strong> are routers that connect end-user networks to the core of the internet. They act as the gateway for your local network to the world outside.</p>",
    arabicExplanation:
      "<p>الـ Edge routers دي الراوترات اللي بتربط الشبكة بتاعتك (زي بيتك أو شركتك) بالعالم كله (core). يعني هي بوابة الإنترنت!</p><p>مثال: الراوتر اللي في البيت بيوصل شبكتك بالنت الخارجي.</p>",
  },
  {
    id: 20,
    question:
      "…………………. refers to the area where a device or local network interfaces with the internet.",
    options: [
      "The network edge.",
      "The network core.",
      "The edge router.",
      "All of the above.",
    ],
    correctAnswer: 0,
    explanation:
      "<p>The <strong>network edge</strong> is the part where your local network (like your home or office) connects to the bigger internet.</p>",
    arabicExplanation:
      "<p>الـ network edge هو المكان اللي شبكتك الصغيرة بتتواصل فيه مع الإنترنت الكبير.</p><p>مثال: الراوتر في بيتك هو النقطة اللي بتوصل النت لكل الأجهزة عندك.</p>",
  },
  {
    id: 21,
    question:
      "The sequence of communication links and packet switches traversed by a packet from the sending end system to the receiving end system is known as a …….. through the network.",
    options: ["Route", "Path", "a or b", "none of the above"],
    correctAnswer: 2,
    explanation:
      "<p>The journey a packet takes through the internet is called a <strong>route</strong> or <strong>path</strong>. It includes all the links and switches it goes through.</p>",
    arabicExplanation:
      "<p>الطريق اللي الباكيت بيمشيه من جهازك للجهاز التاني اسمه Route أو Path. يعني كل اللينكات والسويتشات اللي بتعدي فيها.</p><p>مثال: زي ما تروح من بيتك لمكان شغلك في طرق كتير، نفس الفكرة هنا!</p>",
  },
  {
    id: 22,
    question:
      "…………………. means that the packet switch must receive the entire packet before it can begin to transmit the first bit of the packet onto the outbound link.",
    options: [
      "Store-and-forward transmission",
      "Direct transmission",
      "Indirect transmission",
      "Not of the above.",
    ],
    correctAnswer: 0,
    explanation:
      "<p><strong>Store-and-forward transmission</strong> is when the entire packet is received by a switch before it starts sending it to the next link.</p>",
    arabicExplanation:
      "<p>Store-and-forward transmission معناها إن السويتش بيستنى الباكيت يوصل كامل وبعدين يبدأ يبعت أول جزء منه في الاتجاه التاني.</p><p>مثال: زي لما تجمع كل الكتب قبل ما تبعتها مرة واحدة لصديقك.</p>",
  },
  {
    id: 23,
    question:
      "A source is connected to a destination through one router. What is the total delay of transmitting the packet if the packet length is 1000 bits and the transmission rate is 1000 bps? Ignore the propagation delay.",
    options: ["1 s", "2 s", "3 s", "6 s"],
    correctAnswer: 0,
    explanation:
      "<p>The delay is calculated as: <strong>d = L / R</strong> = 1000 bits / 1000 bps = 1 second.</p>",
    arabicExplanation:
      "<p>التأخير هنا بنقسم حجم الباكيت على السرعة: 1000 ÷ 1000 = 1 ثانية.</p><p>مثال: زي لو عندك ألف جنيه وبتصرفهم بمعدل ألف جنيه في ثانية!</p>",
  },
  {
    id: 24,
    question:
      "A source is connected to a destination through one router. What is the total delay of transmitting 3 packets if the packet length is 1000 bits and the transmission rate is 1000 bps? Ignore the propagation delay.",
    options: ["1 s", "2 s", "3 s", "6 s"],
    correctAnswer: 2,
    explanation:
      "<p>Since each packet takes 1 second, 3 packets will take 3 seconds: <strong>3 x (1000/1000) = 3 s</strong>.</p>",
    arabicExplanation:
      "<p>كل باكيت بياخد ثانية، فلما تبعت 3 باكيتس، يبقى المجموع 3 ثواني. سهلة!</p><p>مثال: زي ما تشتري 3 حاجات وكل واحدة بتاخد ثانية في الدفع، يبقى الإجمالي 3 ثواني.</p>",
  },
  {
    id: 25,
    question:
      "A source is connected to a destination through two routers. What is the total delay of transmitting the packet if the packet length is 1000 bits and the transmission rate is 1000 bps? Ignore the propagation delay.",
    options: ["1 s", "2 s", "3 s", "6 s"],
    correctAnswer: 1,
    explanation:
      "<p>The delay is calculated as <code>m.t</code> where m = 2 routers and t = L/R = 1000/1000 = 1 s. So total delay = 2 s.</p>",
    arabicExplanation:
      "<p>هنا عندنا راوترين، وكل راوتر بياخد 1 ثانية عشان يبعت الباكيت، يبقى المجموع 2 ثانية.</p><p>مثال: زي ما تمشي مشوارين كل واحد فيهم دقيقة، يبقى المجموع دقيقتين!</p>",
  },
  {
    id: 26,
    question:
      "A source is connected to a destination through two routers. What is the total delay of transmitting 3 packets if the packet length is 1000 bits and the transmission rate is 1000 bps? Ignore the propagation delay.",
    options: ["1 s", "3 s", "5 s", "4 s"],
    correctAnswer: 3,
    explanation:
      "<p>Total delay = m.t + (n-1)t = (2 x 1) + (3-1) x 1 = 2 + 2 = 4 s.</p>",
    arabicExplanation:
      "<p>فيه 2 راوتر، و3 باكيتس. أول باكيت هتاخد 2 ثانية (عشان راوترين)، والتانيتين كل واحدة تاخد ثانية بس. يبقى المجموع 4 ثواني.</p>",
  },
  {
    id: 27,
    question:
      "A source is connected to a destination through two routers. What is the total delay of transmitting 3 packets if the packet length is 1000 bits and the transmission rate is 1000 bps? Include the propagation delay, if the distance between each host and router is 500 m and the distance between the routers is 2500 km, if a propagation speed 2.5 x 10⁸ m/s.",
    options: ["1.4 s", "3.9 s", "6.5 s", "4010 ms"],
    correctAnswer: 3,
    explanation:
      "<p>First, calculate transmission delay = 4 s (from previous). Then, propagation delay = (500 + 500 + 2500000)/2.5x10⁸ = 0.010 s = 10 ms. Total delay = 4 s + 10 ms = 4010 ms.</p>",
    arabicExplanation:
      "<p>بنحسب أول حاجة الـ transmission delay: 4 ثواني. بعدين نحسب propagation delay للمسافات اللي اتقالت (500+500+2,500,000)/2.5x10⁸ = 0.010s (يعني 10 ms). يبقى الإجمالي 4010 ms أو 4 ثواني و10 أجزاء من الثانية.</p><p>مثال: زي لما تمشي طريق طويل (4 ثواني) وبعدين تعدي مطب بسيط (10 ms).</p>",
  },
  {
    id: 28,
    question:
      "For each attached link, the packet switch has an …………….., which stores packets that the router is about to send into that link.",
    options: [
      "Output buffer.",
      "Output queue.",
      "Both a and b.",
      "None of the above.",
    ],
    correctAnswer: 2,
    explanation:
      "<p>Each router or switch has both an output buffer and an output queue to hold packets before sending them onward.</p>",
    arabicExplanation:
      "<p>كل جهاز راوتر أو سويتش عنده buffer و queue بيشيلوا الباكيتس قبل ما يبعتهالهم. زي رف انتظار في مكتب البريد.</p>",
  },
  {
    id: 29,
    question:
      "In …………………………….., the resources needed along a path (buffers, link transmission rate) to provide for communication between the end systems are reserved for the duration of the communication session between the end systems.",
    options: [
      "circuit-switched networks.",
      "Packet-switched networks.",
      "Both a and b",
      "None of the above.",
    ],
    correctAnswer: 0,
    explanation:
      "<p><strong>Circuit-switched networks</strong> reserve resources (like buffers and links) for the whole session. It's like booking a taxi just for yourself during the trip.</p>",
    arabicExplanation:
      "<p>الشبكات اللي بتحجزلك الطريق كله زي الـ circuit-switched networks. زي لما تحجز تاكسي خاص لحد ما توصل.</p>",
  },
  {
    id: 30,
    question:
      "In …………………………….., the resources needed along a path (buffers, link transmission rate) to provide for communication between the end systems are not reserved for the duration of the communication session between the end systems.",
    options: [
      "circuit-switched networks.",
      "Packet-switched networks.",
      "Both a and b",
      "None of the above.",
    ],
    correctAnswer: 1,
    explanation:
      "<p><strong>Packet-switched networks</strong> do not reserve resources. Instead, they share them dynamically, like sharing a highway with many cars.</p>",
    arabicExplanation:
      "<p>الشبكات دي بتشارك الموارد زي الطريق المشترك، مفيش حجز خاص لحد، الكل بياخد دوره زي شبكة المرور.</p>",
  },
  {
    id: 31,
    question: "In Packet Switching:",
    options: [
      "All packets must follow the same path, thus packets are transmitted in order",
      "A path is reserved for the whole duration of the communication session",
      "Store-and-forward transmission is used within the network routers",
      "Admission control is deployed by default, thus QoS guarantees can be easily forced",
    ],
    correctAnswer: 2,
    explanation:
      "<p>Packet switching uses store-and-forward transmission to send data step by step, unlike circuit switching which reserves the whole path.</p>",
    arabicExplanation:
      "<p>الشبكات دي بتشتغل بالـ store-and-forward، يعني بتستقبل الباكيتس وتبعتها واحدة واحدة.</p>",
  },
  {
    id: 32,
    question: "In circuit Switching:",
    options: [
      "All packets must follow the same path, thus packets are transmitted in order",
      "A path is reserved for the whole duration of the communication session",
      "Store-and-forward transmission is used within the network routers",
      "Admission control is deployed by default, thus QoS guarantees can be easily forced",
    ],
    correctAnswer: 1,
    explanation:
      "<p>In circuit switching, the entire path is reserved for the whole session, just like a reserved lane for a VIP car.</p>",
    arabicExplanation:
      "<p>في الشبكة دي، بيبقى ليك الطريق كله محجوز طول ما انت ماشي فيه، زي تاكسي خاص بياخدك من الباب للباب.</p>",
  },
  {
    id: 33,
    question:
      "The time required to examine the packet’s header and determine where to direct the packet is part of the …………..",
    options: [
      "Processing delay",
      "Queuing delay",
      "Propagation delay",
      "Transmission delay",
    ],
    correctAnswer: 0,
    explanation:
      "<p>Processing delay is the time it takes for routers to look at the packet header and decide where to send it next.</p>",
    arabicExplanation:
      "<p>وقت معالجة الهيدر (processing delay) هو وقت القرار: أودي الباكيت فين بعد ما أشوف العنوان بتاعها.</p>",
  },
  {
    id: 34,
    question:
      "………………….. the time that a packet waits to be processed in the buffer of a switch.",
    options: [
      "Processing delay",
      "Queuing delay",
      "Propagation delay",
      "Transmission delay",
    ],
    correctAnswer: 1,
    explanation:
      "<p>Queuing delay is the wait time in line (like waiting at a bank counter).</p>",
    arabicExplanation:
      "<p>ده وقت الانتظار (queuing delay) في الطابور قبل ما يوصل دور الباكيت عشان تتبعت.</p>",
  },
  {
    id: 35,
    question:
      "With ………………….. , the frequency spectrum of a link is divided up among the connections established across the link.",
    options: [
      "FDM (frequency-division multiplexing).",
      "TDM (time-division multiplexing).",
      "Both a and b.",
      "None of the above.",
    ],
    correctAnswer: 0,
    explanation:
      "<p><strong>FDM</strong> splits the frequencies like splitting the radio stations on a dial.</p>",
    arabicExplanation:
      "<p>في FDM بنقسم الترددات بين الكل، زي محطات الراديو كل واحدة ليها موجة لوحدها.</p>",
  },
  {
    id: 36,
    question:
      "………………….. is the time that it takes for a bit to reach from one end of a link to the other.",
    options: [
      "Processing delay",
      "Queuing delay",
      "Propagation delay",
      "Transmission delay",
    ],
    correctAnswer: 2,
    explanation:
      "<p><strong>Propagation delay</strong> is the travel time of a bit across the link, like how long it takes for your voice to reach someone on the phone.</p>",
    arabicExplanation:
      "<p>ده الوقت اللي البتات بتقضيه عشان توصل من أول السلك لآخره، زي لما صوتك يوصل لصاحبك في التليفون.</p>",
  },
  {
    id: 37,
    question:
      "………………….. the time it takes to transmit a data packet onto the outgoing link.",
    options: [
      "Processing delay",
      "Queuing delay",
      "Propagation delay",
      "Transmission delay",
    ],
    correctAnswer: 3,
    explanation:
      "<p><strong>Transmission delay</strong> is the time to send out the entire packet onto the link.</p>",
    arabicExplanation:
      "<p>ده الوقت اللي بياخده الباكيت كله عشان يطلع من الراوتر على الخط، زي لما تفضي كوباية ميه كلها مرة واحدة!</p>",
  },
  {
    id: 38,
    question:
      "For a ……………… link, time is divided into frames of fixed duration, and each frame is divided into a fixed number of time slots.",
    options: [
      "FDM (frequency-division multiplexing).",
      "TDM (time-division multiplexing).",
      "Both a and b.",
      "None of the above.",
    ],
    correctAnswer: 1,
    explanation:
      "<p><strong>TDM</strong> divides time into slots for different data streams, like giving كل واحد وقت محدد يتكلم فيه.</p>",
    arabicExplanation:
      "<p>في TDM كل حاجة ليها وقتها عشان تتبعت، زي طابور في بنك – كل حد ليه دوره بس.</p>",
  },
  {
    id: 39,
    question: "Guided media:",
    options: [
      "fiber-optic cable,",
      "a twisted-pair copper wire,",
      "a coaxial cable",
      "all of the above",
    ],
    correctAnswer: 3,
    explanation:
      "<p>Guided media includes cables and wires that guide signals like fiber-optic, twisted-pair, and coaxial.</p>",
    arabicExplanation:
      "<p>الوسائط الموجهة دي زي الكابلات اللي بتسوق البيانات جوة، زي الفايبر أو النحاس أو الكوكسيل.</p>",
  },
  {
    id: 40,
    question: "Unguided media:",
    options: [
      "wireless LAN,",
      "cellular satellite",
      "digital satellite",
      "all of the above",
    ],
    correctAnswer: 3,
    explanation:
      "<p>Unguided media is wireless, like WiFi, cellular, and satellites, sending data through the air.</p>",
    arabicExplanation:
      "<p>دي الوسائط اللاسلكية، زي الواي فاي والتليفونات المحمولة والأقمار الصناعية – كلها شغالة بدون كابلات.</p>",
  },
  {
    id: 41,
    question: "The law of the end-to-end delay is",
    options: [
      "dend – end  = N (dproc  + dtrans + dprop)",
      "dend – end  = N (dproc  + dtrans)",
      "dend – end  = N (dproc  + dprop)",
      "dend – end  = N (dtrans  + dprop)",
    ],
    correctAnswer: 0,
    explanation:
      "<p>The end-to-end delay combines all three delays multiplied by the number of nodes (routers).</p>",
    arabicExplanation:
      "<p>قانون التأخير بيجمع كل أنواع التأخير (المعالجة – الإرسال – الانتشار) ويضربهم في عدد الراوترات اللي الباكيت بتعدي عليها.</p>",
  },
  {
    id: 42,
    question:
      "The protocols of the layer ………………………. can be implemented in software in the end system only.",
    options: [
      "Application layer",
      "Transport layer",
      "Network layer",
      "Both a and b",
    ],
    correctAnswer: 3,
    explanation:
      "<p>The protocols of the application and transport layers run in software only on end systems like computers and phones.</p>",
    arabicExplanation:
      "<p>الطبقتين دول شغلتهم بتكون على الأجهزة بس (زي الكمبيوتر أو الموبايل)، مش جوه الراوترات.</p>",
  },
  {
    id: 43,
    question:
      "The protocols of the layer ………………………. can be implemented in a network interface card.",
    options: [
      "Application layer",
      "Data-link layer",
      "physical layer",
      "Both b and c",
    ],
    correctAnswer: 3,
    explanation:
      "<p>The data-link and physical layers operate closest to the hardware and are often implemented in NICs (network cards).</p>",
    arabicExplanation:
      "<p>الطبقتين دول شغلتهم في كارت الشبكة عشان يتعاملوا مع الإشارات والكابلات بشكل مباشر.</p>",
  },
  {
    id: 44,
    question:
      "The protocols of the layer ………………………. is often a mixed implementation of hardware and software.",
    options: [
      "Application layer",
      "Data-link layer",
      "Network layer",
      "Both b and c",
    ],
    correctAnswer: 2,
    explanation:
      "<p>The network layer works at both the hardware (like routers) and software (like IP configuration) levels.</p>",
    arabicExplanation:
      "<p>الطبقة دي شغالة بين السوفتوير والهاردوير، زي الطبقة اللي بتحرك عربيات التوصيل (الراوترات) ومتابعة الطريق.</p>",
  },
  {
    id: 45,
    question: "In the protocols that found in the application layer are:",
    options: ["HTTP", "FTP", "DNS", "SMTP", "All of the above"],
    correctAnswer: 4,
    explanation:
      "<p>All these protocols (HTTP, FTP, DNS, SMTP) work in the application layer to support various online tasks.</p>",
    arabicExplanation:
      "<p>كل البروتوكولات دي (زي HTTP و FTP) بتشتغل في طبقة التطبيقات عشان تنجز حاجات مختلفة على النت زي التصفح أو نقل الملفات.</p>",
  },
  {
    id: 46,
    question: "In the protocols that found in the network layer are:",
    options: ["HTTP", "FTP", "IP", "All of the above"],
    correctAnswer: 2,
    explanation:
      "<p>The IP protocol is the core of the network layer, ensuring data gets to the right place across networks.</p>",
    arabicExplanation:
      "<p>البروتوكول الأساسي هنا هو IP، وده شغله زي جوجل مابس اللي بيحدد الطريق للبيانات!</p>",
  },
  {
    id: 47,
    question: "In the protocols that found in the transport layer are:",
    options: ["TCP", "UDP", "Both a and b", "None of the above"],
    correctAnswer: 2,
    explanation:
      "<p>Both TCP and UDP operate in the transport layer to manage how data flows between devices.</p>",
    arabicExplanation:
      "<p>الطبقة دي شغالة باثنين: TCP للاتصال الثابت و UDP للاتصال السريع زي البث المباشر.</p>",
  },
  {
    id: 48,
    question:
      "The naming of the packets in the application layer, transport layer, network layer, data-link layer respectively is, ………, ………, ………, ………",
    options: [
      "Message, datagram, segment, frame",
      "Frame, message, datagram, segment",
      "Message, segment, datagram, frame.",
      "Datagram, message, frame, segment.",
    ],
    correctAnswer: 2,
    explanation:
      "<p>The typical order for data packet naming is: Message (application), Segment (transport), Datagram (network), Frame (data-link).</p>",
    arabicExplanation:
      "<p>التسمية بتبدأ من الرسالة (Message) لحد الإطار (Frame) في النهاية – زي توصيل شحنة بتمر بمراحل من تحضير الطلب للتسليم!</p>",
  },
  {
    id: 49,
    question: "TCP protocol is connectionless:",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "<p>TCP is connection-oriented: it sets up a connection first before transferring data.</p>",
    arabicExplanation:
      "<p>بروتوكول TCP لازم يعمل اتصال (زي مكالمة تليفون) قبل ما يبعت البيانات، مش زيه زي UDP اللي بيبعت على طول.</p>",
  },
  {
    id: 50,
    question: "UDP protocol is connection-oriented:",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "<p>UDP is connectionless, it sends data without checking if the other side is ready.</p>",
    arabicExplanation:
      "<p>UDP زي البريد السريع: يبعت الحاجة وخلاص من غير ما يتأكد إن الطرف التاني فاتح الصندوق أو مستعد.</p>",
  },
  {
    id: 51,
    question: "…………… protocol offer flow control and congestion control:",
    options: ["TCP", "UDP", "Both a and b", "None of the above"],
    correctAnswer: 0,
    explanation:
      "<p><strong>TCP</strong> provides flow and congestion control to ensure reliable data transfer.</p>",
    arabicExplanation:
      "<p>بروتوكول TCP بيتأكد إن البيانات ماشية صح ومن غير زحمة أو بطء.</p>",
  },
  {
    id: 52,
    question: "……………….. protocol offers error detection.",
    options: ["TCP", "UDP", "Both a and b", "None of the above"],
    correctAnswer: 2,
    explanation:
      "<p>Both TCP and UDP include error detection to check data integrity.</p>",
    arabicExplanation:
      "<p>الاتنين TCP وUDP بيشوفوا لو البيانات حصل فيها أي غلط.</p>",
  },
  {
    id: 53,
    question: "The following is kind of addressing in the application layer:",
    options: ["Email address", "Domain", "Both a and b", "None of the above"],
    correctAnswer: 2,
    explanation:
      "<p>Application layer uses email and domain addresses to locate services or people.</p>",
    arabicExplanation:
      "<p>طبقة التطبيقات بتعتمد على الإيميل والدومين عشان تحدد مين بتبعتله.</p>",
  },
  {
    id: 54,
    question: "The following is kind of addressing in the transport layer:",
    options: ["Port number", "IP address", "MAC address", "All of the above"],
    correctAnswer: 0,
    explanation:
      "<p>Transport layer uses port numbers to identify different apps or services on a device.</p>",
    arabicExplanation:
      "<p>فيه حاجة اسمها port number لكل تطبيق (زي رقم الخط الأرضي) عشان يعرف يوصل صح.</p>",
  },
  {
    id: 55,
    question: "The following is kind of addressing in the data-link layer:",
    options: ["Port number", "IP address", "MAC address", "All of the above"],
    correctAnswer: 2,
    explanation:
      "<p>Data-link layer uses MAC addresses to identify devices on a local network.</p>",
    arabicExplanation:
      "<p>دي زي بطاقة التعريف للجهاز (MAC) بتخليه معروف ومميز وسط الشبكة المحلية.</p>",
  },
  {
    id: 56,
    question:
      "In the OSI model, ………………….. provide services that allow communicating applications to interpret the meaning of data exchanged.",
    options: [
      "The presentation layer",
      "The session layer",
      "Both a and b",
      "None of the above",
    ],
    correctAnswer: 0,
    explanation:
      "<p>The presentation layer translates data into a format that applications understand.</p>",
    arabicExplanation:
      "<p>طبقة الـ presentation layer بتجهز البيانات عشان التطبيقات تقدر تفهمها.</p>",
  },
  {
    id: 57,
    question:
      "In the OSI model, the services that provided by the presentation layer includes:",
    options: [
      "data compression",
      "data encryption",
      "data description",
      "All of the above",
    ],
    correctAnswer: 3,
    explanation:
      "<p>The presentation layer handles data compression, encryption, and description for better communication.</p>",
    arabicExplanation:
      "<p>الطبقة دي بتضغط البيانات، تشفرها، وتوصفها عشان تكون جاهزة ومحمية.</p>",
  },
  {
    id: 58,
    question:
      "………………………….. provides for delimiting and synchronization of data exchange, including the means to build a check pointing and recovery scheme.",
    options: [
      "The presentation layer",
      "The session layer",
      "Both a and b",
      "None of the above",
    ],
    correctAnswer: 1,
    explanation:
      "<p>The <strong>session layer</strong> handles the start, maintenance, and end of communication sessions, along with checkpoints for recovery.</p>",
    arabicExplanation:
      "<p>طبقة الـ session layer بتنظم بداية ونهاية الاتصال وبتحط نقاط فحص عشان لو حصل حاجة، تعرف ترجع البيانات.</p>",
  },
];
