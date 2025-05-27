interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  arabicExplanation: string;
}

export const quiz2: Question[] = [
  {
    id: 1,
    question:
      "In a ………………… there is an always-on host, called the server, which services requests from many other hosts, called clients.",
    options: [
      "client-server architecture",
      "layered architecture",
      "P2P architecture",
      "None of the above",
    ],
    correctAnswer: 0,
    explanation:
      "<p>In a <strong>client-server architecture</strong>, there is always a host called the <strong>server</strong> that is always on. It provides services to multiple other hosts, which are called <strong>clients</strong>. For example, when you use Facebook, your device (the client) sends a request to Facebook's servers (the server) to load data like your feed, profile, or messages. This type of architecture ensures that data and services are centralized and easy to manage, which is why it's very popular in web and enterprise applications.</p>",
    arabicExplanation:
      "<p>في نظام <strong>client-server architecture</strong> بيكون في جهاز اسمه <strong>server</strong> دايمًا شغال، وده اللي بيقدم خدمات لباقي الأجهزة اللي اسمها <strong>clients</strong>. زي ما تفتح فيسبوك، جهازك (العميل) بيبعت طلب للسيرفر علشان يعرضلك البوستات والرسائل. النظام ده مريح لأنه بيخلي البيانات كلها في مكان واحد (السيرفر) ومش متفرقة.</p>",
  },
  {
    id: 2,
    question:
      "The architecture that is used to make two applications (called peers) establish direct communications between themselves, is …………..",
    options: [
      "client-server architecture",
      "layered architecture",
      "P2P architecture",
      "None of the above",
    ],
    correctAnswer: 2,
    explanation:
      "<p>In a <strong>P2P architecture (peer-to-peer)</strong>, the applications (or peers) communicate directly with each other without needing a dedicated server. This approach is common in file sharing applications like BitTorrent, where your device connects directly to another device to exchange data.</p>",
    arabicExplanation:
      "<p>في نظام <strong>P2P architecture</strong> أو (peer-to-peer)، البرامج (اللي اسمها peers) بتتواصل مع بعض على طول، من غير ما يحتاجوا سيرفر. زي برامج مشاركة الملفات (زي التورنت)، بتفتح التورنت تلاقي جهازك بيكلم جهاز تاني على طول علشان تبادل البيانات.</p>",
  },
  {
    id: 3,
    question:
      "Internet telephony and video conference (Skype) are examples of using …………………",
    options: [
      "client-server architecture",
      "layered architecture",
      "P2P architecture",
      "None of the above",
    ],
    correctAnswer: 2,
    explanation:
      "<p>Applications like Skype use a <strong>P2P architecture</strong> where two users (peers) directly connect with each other to have real-time voice or video communication. This model reduces server load and improves direct data exchange.</p>",
    arabicExplanation:
      "<p>البرامج زي Skype بتستخدم <strong>P2P architecture</strong> علشان الناس تتواصل مع بعض صوت وصورة بشكل مباشر. كده الحمل على السيرفر بيقل وكمان بيكون أسرع.</p>",
  },
  {
    id: 4,
    question: "HTTP, FTP, Telnet, and e-mail",
    options: [
      "client-server architecture",
      "layered architecture",
      "P2P architecture",
      "None of the above",
    ],
    correctAnswer: 0,
    explanation:
      "<p>These applications use a <strong>client-server architecture</strong>. The client sends a request (like asking for a web page via HTTP) and the server responds with the requested data. Email (via IMAP or POP) and FTP (for file transfers) also use this model to serve many clients from a central server.</p>",
    arabicExplanation:
      "<p>الخدمات دي (زي HTTP وFTP وTelnet والبريد الإلكتروني) بتعتمد على <strong>client-server architecture</strong>، يعني العميل بيطلب حاجة والسيرفر بيرد عليه بالبيانات المطلوبة. زي ما تفتح الإيميل أو موقع ويب، كل ده بيشتغل بالطريقة دي.</p>",
  },
  {
    id: 5,
    question: "…………………. is called program that is running (at execution).",
    options: [
      "Architecture",
      "process.",
      "Both a and b.",
      "None of the above.",
    ],
    correctAnswer: 1,
    explanation:
      "<p>A <strong>process</strong> is a program that is currently running in execution. In an operating system, each active program is represented as a process that uses resources like CPU and memory.</p>",
    arabicExplanation:
      "<p>الـ<strong>process</strong> معناها البرنامج اللي شغال فعليًا دلوقتي. يعني أي برنامج شغال على الجهاز بتاعك بيتعامل كـ process.</p>",
  },
  {
    id: 6,
    question:
      "A networking process sends messages into, and receives messages from, the network ……….",
    options: ["Socket", "IP", "Port.", "None of the above."],
    correctAnswer: 0,
    explanation:
      "<p>A <strong>socket</strong> is the combination of an IP address and port number. It represents a communication endpoint used by a process to send or receive messages over a network.</p>",
    arabicExplanation:
      "<p>الـ<strong>socket</strong> هو اللي بيمثل النقطة اللي الجهاز بيكلم بيها أي جهاز تاني على الشبكة. هو عنوان IP + رقم البورت، وده اللي بيسمح للبرامج تبعت وتستقبل البيانات.</p>",
  },
  {
    id: 7,
    question: "To identify a receiving process, two addresses are needed:",
    options: ["IP", "The port number.", "both a and b.", "none of the above"],
    correctAnswer: 2,
    explanation:
      "<p>To identify a receiving process, both the <strong>IP address</strong> and the <strong>port number</strong> are needed. The IP address locates the machine, while the port number identifies the specific application or process within that machine.</p>",
    arabicExplanation:
      "<p>عشان تعرف توصل لـ process معينة، لازم تعرف عنوان الـ<strong>IP</strong> (مكان الجهاز) وكمان رقم الـ<strong>port</strong> (البرنامج اللي جوا الجهاز). الاتنين مع بعض بيسمحوا بالتواصل المباشر.</p>",
  },
  {
    id: 8,
    question:
      "With the Web, a browser is a ………… process and a ………… is a server process.",
    options: [
      "Client, Web server",
      "Client, router",
      "Web server, client",
      "Router, host",
    ],
    correctAnswer: 0,
    explanation:
      "<p>In the context of the Web, the browser you use (like Chrome, Firefox) acts as a <strong>client</strong> process that sends requests to the <strong>Web server</strong> process (like the server hosting www.facebook.com) to get data like web pages.</p>",
    arabicExplanation:
      "<p>هنا المقصود إن المتصفح بتاعك (زي جوجل كروم) هو العميل <strong>Client</strong> اللي بيطلب البيانات من سيرفر الويب <strong>Web server</strong> اللي فيه البيانات. السيرفر بيرد على طلبات المتصفح بالصفحات والملفات.</p>",
  },
  {
    id: 9,
    question:
      "With P2P file sharing, the peer that is downloading the file is labeled as the ……… , and the peer that is uploading the file is labeled as the ………………",
    options: [
      "Client, Web server",
      "Client, router",
      "Web server, client",
      "Router, host",
    ],
    correctAnswer: 0,
    explanation:
      "<p>In <strong>P2P file sharing</strong> (like torrents), the peer downloading is considered the <strong>client</strong> because it is requesting data, while the peer uploading is the <strong>server</strong> because it is providing data.</p>",
    arabicExplanation:
      "<p>في مشاركة الملفات من نوع <strong>P2P</strong> (زي التورنت)، الجهاز اللي بيحمل الملف (اللي بيطلب) هو <strong>Client</strong>، والجهاز اللي بيرفع الملف (اللي بيقدم البيانات) هو <strong>Web server</strong> هنا بالمعنى العام.</p>",
  },
  {
    id: 10,
    question:
      "In the context of a communication session between a pair of processes, the process that initiates the communication is labeled as the ………………. . The process that waits to be contacted to begin the session is the ……………………",
    options: [
      "Client, Web server",
      "Client, router",
      "Web server, client",
      "Router, host",
    ],
    correctAnswer: 0,
    explanation:
      "<p>In networking, the process that starts the connection is the <strong>client</strong> (like your browser). The process that waits to be contacted is the <strong>server</strong> (like a web server waiting for incoming requests).</p>",
    arabicExplanation:
      "<p>في الاتصال بين عمليتين، اللي بيبدأ الاتصال هو <strong>العميل Client</strong>، واللي بيستنى الاتصال بيه هو <strong>السيرفر Web server</strong>.</p>",
  },
  {
    id: 11,
    question:
      "……………… is the interface between the application layer and the transport layer within a host. It is also referred to as the ……………… between the application and the network.",
    options: [
      "Socket, API (Application programming interface)",
      "IP, API",
      "Socket, ABI",
      "None of the above.",
    ],
    correctAnswer: 0,
    explanation:
      "<p>The <strong>socket</strong> is the endpoint for sending and receiving data between the application layer and the transport layer. The <strong>API (Application Programming Interface)</strong> provides the functions to use the socket and manage the connection.</p>",
    arabicExplanation:
      "<p>الـ<strong>socket</strong> هو نقطة الاتصال بين البرنامج (application) وطبقة النقل (transport layer)، والـ<strong>API</strong> بيوفر الدوال اللي بتستخدم الـ socket.</p>",
  },
  {
    id: 12,
    question:
      "The (HTTP), the Web’s application-layer protocol, is implemented in two programs:",
    options: [
      "Client only.",
      "Server only.",
      "Client and server.",
      "None of the above.",
    ],
    correctAnswer: 2,
    explanation:
      "<p>The <strong>HTTP protocol</strong> is used by both the client (browser) and the server (web server). Clients send requests, servers send responses.</p>",
    arabicExplanation:
      "<p>بروتوكول <strong>HTTP</strong> بيشتغل على العميل (المتصفح) وكمان على السيرفر. المتصفح بيبعت طلب، السيرفر بيرد عليه.</p>",
  },
  {
    id: 13,
    question:
      "HTTP save connection states (i.e. storing any state information about the client).",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "<p>HTTP is a <strong>stateless protocol</strong>, meaning it does not save information about the client's previous requests or states. Each request is independent.</p>",
    arabicExplanation:
      "<p>بروتوكول <strong>HTTP</strong> مش بيخزن أي حالة عن العميل. كل طلب منفصل عن التاني، عشان كده بنقول إنه <strong>stateless</strong>.</p>",
  },
  {
    id: 14,
    question:
      "HTTP is stateless because HTTP server does not maintain any information about clients.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "<p>This statement is <strong>True</strong>. HTTP is stateless because it does not store information about previous interactions. Each request is handled independently of others.</p>",
    arabicExplanation:
      "<p>ده <strong>صح</strong>. بروتوكول HTTP بيكون <strong>stateless</strong> لأنه مش بيحتفظ بأي معلومات عن العميل بعد ما يخلص الطلب.</p>",
  },
  {
    id: 15,
    question:
      "In ………………………… each request/response pair between the client and the server is sent over a separate TCP connection.",
    options: [
      "Non-persistent connections",
      "Persistent connections.",
      "TCP connection",
      "None of the above.",
    ],
    correctAnswer: 0,
    explanation:
      "<p>In <strong>non-persistent connections</strong>, each HTTP request and response pair uses a separate TCP connection. After a response is received, the TCP connection is closed, and a new one is established for the next request.</p>",
    arabicExplanation:
      "<p>في <strong>non-persistent connections</strong>، كل طلب HTTP واستجابة ليه بيتم في اتصال TCP منفصل. يعني بعد ما السيرفر يرد على الطلب، الاتصال بيتقفل وبنحتاج نفتح اتصال جديد لو في طلب جديد.</p>",
  },
  {
    id: 16,
    question:
      "In ………………………… all of the requests and their corresponding responses between the client and the server are sent over the same TCP connection.",
    options: [
      "Non-persistent connections",
      "Persistent connections.",
      "TCP connection",
      "None of the above.",
    ],
    correctAnswer: 1,
    explanation:
      "<p>In <strong>persistent connections</strong>, all HTTP requests and their responses are sent over the same TCP connection. This reduces the overhead of repeatedly establishing connections.</p>",
    arabicExplanation:
      "<p>في <strong>persistent connections</strong>، كل الطلبات والاستجابات بتتم في نفس اتصال TCP. ده بيوفر وقت وجهد بدل ما نفتح اتصال جديد كل مرة.</p>",
  },
  {
    id: 17,
    question: "In HTTP non-persistent connections",
    options: [
      "each request/response pair between the client and the server is sent over a separate TCP connection",
      "all of the requests and their corresponding responses between the client and the server are sent over the same TCP connection",
      "Server leaves the TCP connection open after sending a response and subsequent requests and responses between the same client and server can be sent over the same connection",
      "an efficient data transmission can be achieved especially when responding to multiple client requests",
    ],
    correctAnswer: 0,
    explanation:
      "<p>In <strong>non-persistent connections</strong>, a new TCP connection is opened for each HTTP request and response pair. This means multiple TCP connections are used for multiple HTTP requests.</p>",
    arabicExplanation:
      "<p>في <strong>non-persistent connections</strong>، كل مرة بنبعت طلب جديد، بيتفتح اتصال TCP جديد مخصوص ليه. يعني كل طلب ليه اتصال منفصل.</p>",
  },
  {
    id: 18,
    question: "In HTTP persistent connections",
    options: [
      "Multiple Web pages residing on the same server can be sent from the server to the same client over a single persistent TCP connection",
      "all of the requests and their corresponding responses between the client and the server are sent over the same TCP connection",
      "Server leaves the TCP connection open after sending a response and subsequent requests and responses between the same client and server can be sent over the same connection.",
      "The HTTP server closes a connection when it isn’t used for a certain time",
      "All The Above",
    ],
    correctAnswer: 4,
    explanation:
      "<p>All of these statements describe the behavior of <strong>persistent connections</strong>. They keep the same TCP connection open for multiple HTTP requests and responses, reducing the overhead of reconnecting.</p>",
    arabicExplanation:
      "<p>كل الكلام ده صح وبيوصف <strong>persistent connections</strong>. السيرفر بيسيب الاتصال مفتوح شوية وبيقدر يتعامل مع طلبات كتيرة في نفس الاتصال.</p>",
  },
  {
    id: 19,
    question:
      "If the client needs to fetch HTML page including 10 images and one video with HTTP non-persistent connection, how many TCP connections the clients will request:",
    options: ["1", "10", "12", "11"],
    correctAnswer: 2,
    explanation:
      "<p>For <strong>HTTP non-persistent connections</strong>, each object (HTML page, each image, and video) uses a separate TCP connection. So, 1 (HTML) + 10 (images) + 1 (video) = 12 TCP connections.</p>",
    arabicExplanation:
      "<p>في <strong>non-persistent connections</strong>، كل حاجة (صفحة HTML، كل صورة، والفيديو) ليها اتصال TCP خاص. يعني الإجمالي 12 اتصال.</p>",
  },
  {
    id: 20,
    question:
      "If the client needs to fetch HTML page including 10 images and one video with HTTP persistent connection, how many TCP connections the clients will request:",
    options: ["1", "10", "12", "11"],
    correctAnswer: 0,
    explanation:
      "<p>في <strong>persistent connections</strong>، بيتفتح اتصال واحد بس (TCP connection واحد) بيتعامل مع كل حاجة: الصفحة والصور والفيديو. يعني مش محتاجين نفتح اتصال جديد لكل طلب زي non-persistent connections.</p>",
    arabicExplanation:
      "<p>هنا الإجابة 1 عشان في persistent connections، السيرفر والعميل بيكلموا بعض على نفس الاتصال TCP وبيكملوا عليه طول ما فيه طلبات.</p>",
  },
  {
    id: 21,
    question:
      "The amount of time that elapses from when a client requests the base HTML file until the entire file is received by the client, is called………….",
    options: [
      "Round trip time (RTT)",
      "Response time",
      "Transmission time.",
      "None of the above.",
    ],
    correctAnswer: 0,
    explanation:
      "<p><strong>RTT</strong> (Round Trip Time) هو الوقت من لما العميل يطلب ملف HTML الأساسي لحد ما يستلم الملف كله. يعني الوقت اللي بياخده الباكت يروح ويرجع.</p>",
    arabicExplanation:
      "<p>RTT معناها الوقت اللي بياخده الطلب يطلع من العميل للسيرفر ويرجع بالرد. ده مهم عشان يقيس سرعة استجابة الشبكة.</p>",
  },
  {
    id: 22,
    question:
      "………………………… is the time it takes for a small packet to travel from client to server and then back to the client.",
    options: [
      "Round trip time (RTT)",
      "Response time",
      "Transmission time.",
      "None of the above.",
    ],
    correctAnswer: 0,
    explanation:
      "<p>ده تعريف مباشر لـ<strong>RTT</strong>: الوقت اللي بياخده الباكت يطلع من العميل ويرجعله تاني بعد ما يوصّل السيرفر.</p>",
    arabicExplanation:
      "<p>RTT هو زمن ذهاب وإياب الباكت الصغير، من العميل للسيرفر وبعدين راجع تاني.</p>",
  },
  {
    id: 23,
    question: "The RTT includes ………………",
    options: [
      "packet-propagation delays.",
      "packet- queuing delays",
      "packet-processing delays.",
      "All of the above",
    ],
    correctAnswer: 3,
    explanation:
      "<p><strong>RTT</strong> بيشمل تلات حاجات: تأخير انتقال الباكت (propagation)، التأخير في الصف (queuing)، والتأخير في المعالجة (processing). كله بيتجمع عشان يدينا زمن الرحلة الكاملة للباكت.</p>",
    arabicExplanation:
      "<p>RTT بيضم كل التأخيرات اللي بتحصل للباكت لحد ما يوصل ويرجع: وقت انتقاله، وقته في الصف، ووقت معالجته.</p>",
  },
  {
    id: 24,
    question:
      "If the client needs to fetch HTML page including 11 images and one video with HTTP non-persistent connection, what is the total delays in RTTs?",
    options: ["14", "23", "25", "26"],
    correctAnswer: 3,
    explanation:
      "<p>في <strong>non-persistent connections</strong>، لكل طلب لازم اتصال منفصل. عشان كده الإجمالي 2×عدد العناصر (2×13 = 26 RTTs).</p>",
    arabicExplanation:
      "<p>كل طلب جديد في non-persistent بيحتاج RTT مرتين: مرة لفتح الاتصال ومرة للإرسال، فالإجمالي 26 RTTs.</p>",
  },
  {
    id: 25,
    question:
      "If the client needs to fetch HTML page including 11 images and one video with HTTP persistent connection, what is the total delays in RTTs?",
    options: ["14", "23", "25", "26"],
    correctAnswer: 0,
    explanation:
      "<p>في <strong>persistent connections</strong>، أول طلب (الـ HTML) بيحتاج RTT واحد لفتح الاتصال وRTT للرد، بعدين كل العناصر التانية (11 صورة + فيديو = 12) بيحتاجوا RTT واحد بس لكل منهم. الناتج = 1 + 12 = 13 + 1 (الاتصال الأساسي) = 14 RTTs.</p>",
    arabicExplanation:
      "<p>في persistent connections، الاتصال بيتفتح مرة واحدة وبعدين كل طلب جديد بيتم في نفس الاتصال، عشان كده الإجمالي 14 RTTs.</p>",
  },
  {
    id: 26,
    question: "The disadvantages of HTTP non-persistent connection include:",
    options: [
      "A new connection must be established and maintained for each requested object.",
      "Each object suffers a delivery delay of two RTTs.",
      "Each object suffers a delivery delay of one RTTs.",
      "Both a and b.",
    ],
    correctAnswer: 3,
    explanation:
      "<p>في <strong>non-persistent connections</strong>، كل طلب جديد لازم يفتح اتصال جديد (new TCP connection) وده بيأخر التوصيل (RTTs).</p>",
    arabicExplanation:
      "<p>النظام ده بيحتاج فتح اتصال جديد لكل طلب وده بياخد وقت إضافي (RTTs).</p>",
  },
  {
    id: 27,
    question: "The disadvantages of HTTP persistent connection includes:",
    options: [
      "A new connection must be established and maintained for each requested object.",
      "Each object suffers a delivery delay of two RTTs.",
      "Both a and b.",
      "None of the above.",
    ],
    correctAnswer: 3,
    explanation:
      "<p><strong>Persistent connections</strong> actually بتقلل العيوب دي عشان كله بيتم في نفس الاتصال.</p>",
    arabicExplanation:
      "<p>هنا مفيش عيوب حقيقية، عشان الاتصال بيكمل من غير ما يعيد فتحه كل مرة.</p>",
  },
  {
    id: 28,
    question: "………………………… is the first line of an HTTP request message.",
    options: [
      "Request line.",
      "Header line.",
      "Both a and b.",
      "None of the above.",
    ],
    correctAnswer: 0,
    explanation:
      "<p>أول سطر في طلب HTTP هو الـ<strong>Request line</strong>، وده بيحتوي على الميثود (زي GET) وURL ونسخة HTTP.</p>",
    arabicExplanation:
      "<p>ده اللي بيوضح إيه نوع الطلب (GET مثلا) وإيه عنوان URL.</p>",
  },
  {
    id: 29,
    question:
      "The following are the fields of the request line of the HTTP request message …………………",
    options: [
      "The method field",
      "The URL field",
      "HTTP version field",
      "All of the above",
    ],
    correctAnswer: 3,
    explanation:
      "<p>الـ<strong>Request line</strong> فيها التلاتة دول مع بعض: الميثود، عنوان URL، ونسخة البروتوكول.</p>",
    arabicExplanation: "<p>كل دول هما مكونات الـ Request line.</p>",
  },
  {
    id: 30,
    question: "In the HTTP request message, the header line includes …………………",
    options: [
      "The header line Host",
      "Connection: close",
      "User-agent",
      "Accept-language",
      "All of the above",
    ],
    correctAnswer: 4,
    explanation: "<p>كل دول header lines، زي Host وConnection وUser-agent.</p>",
    arabicExplanation:
      "<p>كل دول بيتكتبوا في الـ header line عشان السيرفر يعرف تفاصيل الطلب.</p>",
  },
  {
    id: 31,
    question:
      "The Host header line is needed if the client has already established a connection with the server to be used by the web proxy caches.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "<p>صح. الـ Host header مهم جدًا لو فيه web proxy cache عشان يعرف يوجه الطلب بشكل صحيح.</p>",
    arabicExplanation:
      "<p>Header line Host مهم لو فيه بروكسي بيتعامل مع الطلبات.</p>",
  },
  {
    id: 32,
    question:
      "With GET message, the entity body of the HTTP request message is empty.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "<p>صح. GET message مش بيبقى فيه body، بس بيكون فيه header line.</p>",
    arabicExplanation: "<p>صح. GET بيبقى فاضي من ناحية الـ body.</p>",
  },
  {
    id: 33,
    question:
      "With POST message, the entity body of the HTTP request message is empty.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "<p>غلط. POST request بيبقى فيه body للبيانات اللي بيبعتها العميل (زي فورم مثلا).</p>",
    arabicExplanation: "<p>POST دايمًا بيبقى فيه بيانات في الـ body.</p>",
  },
  {
    id: 34,
    question:
      "The data entered by the user in the web form is stored in the entity body of the HTTP request message with the ………………….",
    options: ["POST message", "GET message", "HEAD message", "PUT message"],
    correctAnswer: 0,
    explanation:
      "<p>البيانات اللي بيدخلها المستخدم في النموذج (form) بتتحط في <strong>body</strong> لو بنستخدم <strong>POST</strong> عشان يتم إرسالها للسيرفر.</p>",
    arabicExplanation:
      "<p>بيانات الفورم بتتحط في الـ body لما نستخدم POST.</p>",
  },
  {
    id: 35,
    question:
      "The data entered by the user in the web form is stored in the URL field of the HTTP request message with the ………………….",
    options: ["POST message", "GET message", "HEAD message", "PUT message"],
    correctAnswer: 1,
    explanation:
      "<p>في <strong>GET message</strong>، البيانات اللي بيكتبها المستخدم (زي search query) بتظهر في الـ URL (بعد علامة الاستفهام).</p>",
    arabicExplanation: "<p>GET بيحط البيانات في الـ URL مش في body.</p>",
  },
  {
    id: 36,
    question:
      "The server responds with an HTTP message but it leaves out the requested object, if the HTTP request method is",
    options: ["POST", "GET", "HEAD", "PUT"],
    correctAnswer: 2,
    explanation:
      "<p>لو الـ<strong>HTTP method</strong> هو <strong>HEAD</strong>، السيرفر بيرد بس من غير ما يبعث الجسم (body) بتاع المحتوى.</p>",
    arabicExplanation: "<p>HEAD بس بيرجع الهيدر من غير جسم البيانات.</p>",
  },
  {
    id: 37,
    question:
      "The …………… HTTP method allows a user to upload an object to a specific path (directory) on a specific Web server.",
    options: ["POST", "GET", "HEAD", "PUT"],
    correctAnswer: 3,
    explanation:
      "<p>الـ<strong>PUT</strong> method بيسمحلك ترفع (upload) ملف لمكان معين في السيرفر.</p>",
    arabicExplanation: "<p>PUT بيستخدم لرفع الملفات على مكان محدد.</p>",
  },
  {
    id: 38,
    question:
      "The …………… HTTP method allows a user, or an application, to delete an object on a Web server.",
    options: ["POST", "GET", "HEAD", "DELETE"],
    correctAnswer: 3,
    explanation:
      "<p>الـ<strong>DELETE</strong> method بيستخدمه العميل عشان يمسح ملف معين من السيرفر.</p>",
    arabicExplanation: "<p>DELETE بيستخدمه العميل لمسح الملفات من السيرفر.</p>",
  },
  {
    id: 39,
    question: "The HTTP response message includes …………………",
    options: [
      "an initial status line,",
      "six header lines,",
      "the entity body",
      "all of the above",
    ],
    correctAnswer: 3,
    explanation:
      "<p>الـ<strong>HTTP response</strong> بيحتوي على status line (أول سطر في الرد)، header lines (بيوضح معلومات زي الـ content type)، وكمان ال body نفسه (لو موجود).</p>",
    arabicExplanation:
      "<p>الرد HTTP بيحتوي على السطر الأول، headers، وكمان body للبيانات.</p>",
  },
  {
    id: 40,
    question: "In the HTTP response message, the status line includes …………………",
    options: [
      "The protocol version field,",
      "A status code,",
      "Status message",
      "all of the above",
    ],
    correctAnswer: 3,
    explanation:
      "<p>الـ<strong>status line</strong> بيتكون من نسخة البروتوكول، كود الحالة، والرسالة التوضيحية.</p>",
    arabicExplanation:
      "<p>السطر الأول في الرد HTTP بيحتوي على كل دول مع بعض.</p>",
  },
  {
    id: 41,
    question: "In the HTTP response message, the header line includes …………………",
    options: [
      "Connection: close",
      "Date",
      "Server",
      "Last-Modified",
      "Content-Length",
      "Content-Type",
      "All of the above",
    ],
    correctAnswer: 6,
    explanation:
      "<p>الـ<strong>HTTP header</strong> بيضم كل المعلومات دي عشان السيرفر يوضح التفاصيل للعميل.</p>",
    arabicExplanation:
      "<p>الهيدر بيحتوي على كل دول عشان توضح حالة الطلب والبيانات.</p>",
  },
  {
    id: 42,
    question:
      "In the HTTP response message, the ………………………… is the status code that means that the Request succeeded and the information is returned in the response.",
    options: ["200", "301", "404", "505"],
    correctAnswer: 0,
    explanation:
      "<p>الكود <strong>200</strong> يعني إن الطلب نجح وكل حاجة تمام.</p>",
    arabicExplanation:
      "<p>كود 200 معناها (OK) يعني السيرفر نفذ الطلب تمام.</p>",
  },
  {
    id: 43,
    question:
      "In the HTTP response message, the ………………………… is the status code that means that Requested object has been permanently moved.",
    options: ["200", "301", "404", "505"],
    correctAnswer: 1,
    explanation:
      "<p>الكود <strong>301</strong> معناه إن الحاجة اللي طالبها العميل اتحركت نهائيًا (redirect دائم).</p>",
    arabicExplanation:
      "<p>301 دايمًا معناه إن الرابط اتغير أو اتحرك لمكان تاني.</p>",
  },
  {
    id: 44,
    question:
      "In the HTTP response message, the ………………………… is the status code that means that the request could not be understood by the server.",
    options: ["200", "301", "400 Bad request.", "505"],
    correctAnswer: 2,
    explanation:
      "<p>الكود <strong>400</strong> معناه إن السيرفر مش فاهم الطلب أو فيه مشكلة فيه.</p>",
    arabicExplanation: "<p>400 يعني الطلب مش مفهوم أو فيه مشكلة في تكوينه.</p>",
  },
  {
    id: 45,
    question:
      "In the HTTP response message, the ………………………… is the status code that means that the requested document does not exist on this server.",
    options: ["200", "301", "404", "505"],
    correctAnswer: 2,
    explanation:
      "<p>الكود <strong>404</strong> معروف جدًا ومعناه إن الصفحة أو الملف مش موجود.</p>",
    arabicExplanation: "<p>404 يعني السيرفر مش لاقي الصفحة المطلوبة.</p>",
  },
  {
    id: 46,
    question:
      "In the HTTP response message, the ………………………… is the status code that means that The requested HTTP protocol version is not supported by the server.",
    options: ["200", "301", "404", "505"],
    correctAnswer: 3,
    explanation:
      "<p>الكود <strong>505</strong> معناه إن السيرفر مش بيدعم نسخة البروتوكول اللي العميل بيستخدمها.</p>",
    arabicExplanation:
      "<p>505 معناها البروتوكول اللي العميل عايز يستخدمه مش مدعوم من السيرفر.</p>",
  },
  {
    id: 47,
    question: "cookie technology has the following components:",
    options: [
      "a cookie header line in the HTTP response message;",
      "a cookie header line in the HTTP request message;",
      "a cookie file kept on the user's end system and managed by the user's browser;",
      "a back-end database at the Web site.",
      "All of the above.",
    ],
    correctAnswer: 4,
    explanation:
      "<p>كل دول بيتكونوا مع بعض عشان يدوا الـ<strong>cookie</strong> وظيفته الكاملة: التواصل بين العميل والسيرفر + حفظ المعلومات.</p>",
    arabicExplanation:
      "<p>كل المكونات دي بتساعد الكوكيز إنه يشتغل ويحفظ المعلومات.</p>",
  },
  {
    id: 48,
    question:
      "The HTTP protocol is stateless but we use ………… to store the state of the connection (i.e. the information about the client)",
    options: ["Cookies", "Cache", "Both a and b", "None of the above"],
    correctAnswer: 0,
    explanation:
      "<p>بما إن الـ<strong>HTTP</strong> أصلاً <strong>stateless</strong>، فبنستخدم الـ<strong>cookies</strong> عشان نحتفظ بحالة العميل.</p>",
    arabicExplanation:
      "<p>الكوكيز هي اللي بتخزن حالة العميل لإن HTTP مش بيحتفظ بحاجة بنفسه.</p>",
  },
  {
    id: 49,
    question:
      "………………………… is a network entity that satisfies HTTP requests on the behalf of an origin Web server.",
    options: ["Web cache", "Proxy cache", "Both a and b", "None of the above"],
    correctAnswer: 2,
    explanation:
      "<p>الاتنين <strong>web cache</strong> و<strong>proxy cache</strong> بيقدموا طلبات HTTP بدل السيرفر الأصلي لتسريع الرد.</p>",
    arabicExplanation:
      "<p>الاتنين بيعملوا نفس وظيفة تسريع الخدمة وتقليل الضغط على السيرفر.</p>",
  },
  {
    id: 50,
    question: "The advantages of the Web cache is",
    options: [
      "reduce the response time for a client request.",
      "reduce Web traffic.",
      "Both a and b",
      "None of the above",
    ],
    correctAnswer: 2,
    explanation:
      "<p>الـ<strong>web cache</strong> بيساعد إنه يسرع رد السيرفر ويوفر الباندويث (Web traffic).</p>",
    arabicExplanation: "<p>بيخلي التصفح أسرع ويوفر وقت وتحميل بيانات.</p>",
  },
  {
    id: 51,
    question:
      "The major components of the electronic mail in the internet are ………",
    options: [
      "user agent",
      "mail server",
      "simple mail transfer protocol (SMTP)",
      "all of the above",
    ],
    correctAnswer: 3,
    explanation:
      "<p>كل دول هم المكونات الأساسية لأي نظام بريد إلكتروني على الإنترنت.</p>",
    arabicExplanation:
      "<p>كل واحد فيهم ليه دور: المستخدم، السيرفر، والبروتوكول اللي بينقل الرسائل.</p>",
  },
  {
    id: 52,
    question:
      "…………… is the principal application-layer protocol for Internet electronic mail.",
    options: ["SMTP.", "DNS.", "FTP.", "HTTP."],
    correctAnswer: 0,
    explanation:
      "<p>الـ<strong>SMTP</strong> هو البروتوكول الأساسي لنقل البريد الإلكتروني عبر الإنترنت.</p>",
    arabicExplanation:
      "<p>SMTP هو البروتوكول الرئيسي في إرسال الإيميلات على الإنترنت.</p>",
  },
  {
    id: 53,
    question:
      "The SMTP of the application layer uses the …………… protocol of the transport layer",
    options: ["UDP", "TCP", "HTTP", "DNS"],
    correctAnswer: 1,
    explanation:
      "<p>الـ<strong>SMTP</strong> بيستخدم بروتوكول <strong>TCP</strong> من طبقة النقل عشان يضمن نقل الرسائل بشكل موثوق.</p>",
    arabicExplanation:
      "<p>البريد الإلكتروني بيتنقل عبر TCP لإنه مضمون أكتر.</p>",
  },
  {
    id: 54,
    question:
      "………………… translate user-supplied hostnames (domain name) to IP addresses.",
    options: ["SMTP", "DNS.", "FTP.", "HTTP."],
    correctAnswer: 1,
    explanation:
      "<p>الـ<strong>DNS</strong> هو اللي بيحول اسم النطاق (hostname) لعنوان IP عشان يسهل التواصل على الشبكة.</p>",
    arabicExplanation: "<p>DNS وظيفته الأساسية تحويل الأسماء لعناوين IP.</p>",
  },
  {
    id: 55,
    question: "The DNS protocol runs over ……………… and uses port 53.",
    options: ["UDP", "TCP", "HTTP", "DNS"],
    correctAnswer: 0,
    explanation:
      "<p>الـ<strong>DNS</strong> شغال على <strong>UDP</strong> (وبيستخدم أحيانًا TCP)، وبيشتغل على المنفذ 53.</p>",
    arabicExplanation: "<p>DNS بيستخدم المنفذ 53 وبيفضل UDP لأنه أسرع.</p>",
  },
  {
    id: 56,
    question: "………………………… provide the IP addresses of the TLD servers.",
    options: [
      "Root name servers",
      "TLD",
      "Authoritative DNS servers",
      "None of the above",
    ],
    correctAnswer: 0,
    explanation:
      "<p><strong>Root name servers</strong> بيدي عنوان السيرفرات اللي بتخدم النطاقات الرئيسية (TLD servers).</p>",
    arabicExplanation:
      "<p>Root name servers هم البداية وبيشاوروا على الـ TLD servers.</p>",
  },
  {
    id: 57,
    question:
      "………………………… provide the IP addresses for authoritative DNS servers.",
    options: [
      "Root name servers",
      "TLD (top-level-domain servers)",
      "Authoritative DNS servers",
      "None of the above",
    ],
    correctAnswer: 1,
    explanation:
      "<p><strong>TLD servers</strong> هي اللي بتوجهك لعناوين الـ authoritative DNS servers لكل دومين.</p>",
    arabicExplanation:
      "<p>تقدر تقول إن TLD هي وسيط ما بين root وauthoritative DNS.</p>",
  },
  {
    id: 58,
    question:
      "In the ……………… DNS query, the local DNS server connects directly with each DNS server involved in the lookup.",
    options: ["Iterative.", "Recursive.", "Both a and b", "None of the above"],
    correctAnswer: 0,
    explanation:
      "<p>في <strong>iterative DNS query</strong>، كل سيرفر بيرد ويشاور على السيرفر اللي بعده. العميل بيسأل سيرفر ويمشي للي بعده لحد ما يجيب الإجابة.</p>",
    arabicExplanation: "<p>الـ iterative بيخلي العميل يسأل خطوة بخطوة.</p>",
  },
  {
    id: 59,
    question:
      "In the ……………… DNS query, the local DNS server connects only with the root DNS server involved in the lookup.",
    options: ["Iterative.", "Recursive.", "Both a and b", "None of the above"],
    correctAnswer: 1,
    explanation:
      "<p>في <strong>recursive DNS query</strong>، السيرفر المحلي بيطلب كل حاجة كاملة من سيرفر DNS root أو أي سيرفر DNS تاني، وده بيرد عليه بالنتيجة النهائية.</p>",
    arabicExplanation:
      "<p>في recursive، العميل (أو السيرفر المحلي) بيسيب السيرفر اللي بيتعامل معاه يجيبله الإجابة كاملة.</p>",
  },
  {
    id: 60,
    question:
      "In ………………………… server must send a copy of the file to each of the peers.",
    options: [
      "Client-server file distribution",
      "P2P file distribution",
      "Both a and b",
      "None of the above",
    ],
    correctAnswer: 0,
    explanation:
      "<p>في <strong>client-server file distribution</strong>، السيرفر هو المسؤول إنه يوزع نسخ الملف لكل جهاز (peer) يطلبه، زي ما بيحصل في مواقع التحميل.</p>",
    arabicExplanation:
      "<p>في client-server، السيرفر نفسه بيوزع الملف على كل الناس اللي بتطلبه.</p>",
  },
  {
    id: 61,
    question:
      "In ………………………… each peer redistributes portions of the file it has received to other peers:",
    options: [
      "Client-server file distribution",
      "P2P file distribution",
      "Both a and b",
      "None of the above",
    ],
    correctAnswer: 1,
    explanation:
      "<p>في <strong>P2P file distribution</strong>، كل جهاز (peer) بيشارك الأجزاء اللي حملها مع أجهزة تانية، وده بيقلل الضغط على السيرفر.</p>",
    arabicExplanation:
      "<p>في P2P، الأجهزة بتساعد بعضها وبتوزع البيانات بدون الحاجة للسيرفر دايمًا.</p>",
  },
];
