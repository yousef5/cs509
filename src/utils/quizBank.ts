interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  arabicExplanation: string;
}

export const quiz: Question[] = [
  {
    id: 1,
    question:
      "Each application uses the transport layer services must have a unique ISP number.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "<p>This statement is false because applications use a unique port number, not an ISP number, for communication at the transport layer.</p>",
    arabicExplanation:
      "<p>العبارة دي غلط لأن التطبيقات بتستخدم رقم البورت (port) مش رقم ISP، البورت هو اللي بيحدد التطبيق اللي شغال على جهازك زي 80 للويب.</p>",
  },
  {
    id: 2,
    question:
      "The coaxial cable, twisted pair and optical fiber belong to the unguided media.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "<p>This is false. Coaxial cable, twisted pair, and optical fiber are all guided media because they use a physical path (like cables).</p>",
    arabicExplanation:
      "<p>ده غلط، لأن الكابلات دي بتحتاج أسلاك أو مسارات مادية، يعني guided media مش unguided.</p>",
  },
  {
    id: 3,
    question: "HTTP server is stateless.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "<p>This is true. HTTP is stateless because it does not keep track of previous requests – each request is independent.</p>",
    arabicExplanation:
      "<p>ده صحيح. بروتوكول HTTP مش بيفتكر أي طلب سابق، كل طلب مستقل.</p>",
  },
  {
    id: 4,
    question:
      "The seawater could be considered as unguided transmission medium.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "<p>This is true. Seawater can act as a medium to carry electromagnetic signals wirelessly, thus it’s considered unguided.</p>",
    arabicExplanation:
      "<p>ده صح. المية المالحة ممكن تنقل الإشارات الكهرومغناطيسية من غير أسلاك.</p>",
  },
  {
    id: 5,
    question: "Multimedia applications can tolerate some amount of data loss.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "<p>This is true. Applications like voice or video calls can handle some data loss because of real-time transmission.</p>",
    arabicExplanation:
      "<p>ده صح. تطبيقات زي الفيديو أو المكالمات بتقبل شوية فقد بيانات عشان تكون سريعة.</p>",
  },
  {
    id: 6,
    question:
      "The IP datagram is created by appending an IP header to an application packet.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "<p>This is false. IP datagrams are created by appending an IP header to a transport segment (like TCP or UDP segment).</p>",
    arabicExplanation:
      "<p>العبارة غلط، الداتاجرام بيتعمل بإضافة IP header لجزء نقل البيانات (transport segment).</p>",
  },
  {
    id: 7,
    question: "In P2P architecture, there is no always-on server.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "<p>This is true. P2P networks rely on peers directly, without a permanent central server.</p>",
    arabicExplanation:
      "<p>ده صح. شبكات P2P بتشتغل من غير سيرفر مركزي دايم.</p>",
  },
  {
    id: 8,
    question: "DNS and SNMP use TCP as underlying transport protocol.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "<p>This is false. DNS and SNMP usually use UDP, not TCP.</p>",
    arabicExplanation:
      "<p>ده غلط. البروتوكولات دي بتستخدم UDP لأنه أسرع ومش محتاج تأكيد الاستلام.</p>",
  },
  {
    id: 9,
    question: "TCP guarantees message delivery and prevents duplication.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "<p>This is true. TCP ensures reliable data transfer by confirming delivery and eliminating duplicate data.</p>",
    arabicExplanation: "<p>ده صح. TCP بيضمن وصول الرسالة ومنع تكرارها.</p>",
  },
  {
    id: 10,
    question:
      "Self-scalability is an important property of P2P network application architecture.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "<p>This is true. P2P networks grow easily as more peers join without a central bottleneck.</p>",
    arabicExplanation:
      "<p>ده صح. كل ما يشارك ناس أكتر الشبكة بتكبر من نفسها.</p>",
  },
  {
    id: 11,
    question:
      "In HTTP, post method uploads inputs in the URL field of the message request line.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "<p>This is false. The GET method puts inputs in the URL field, not POST.</p>",
    arabicExplanation:
      "<p>ده غلط. GET اللي بيحط البيانات في العنوان (URL)، POST بيبعتها في جسم الرسالة.</p>",
  },
  {
    id: 12,
    question:
      "Both TCP and UDP provide minimum delay, throughput and security guarantees.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "<p>This is false. Neither TCP nor UDP guarantees delay, throughput, or security – these depend on other factors.</p>",
    arabicExplanation:
      "<p>ده غلط. البروتوكولات دي مش بتضمن سرعة ولا أمان بشكل مباشر، دي حاجات بتتحكم فيها الشبكة.</p>",
  },
  {
    id: 13,
    question:
      "The processing delay is the waiting time of a packet to be transmitted over the output link of a router in its path across the network.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "<p>This is false. The waiting time before transmission is queuing delay, not processing delay.</p>",
    arabicExplanation:
      "<p>ده غلط. اللي بيتكلموا عنه هنا اسمه queuing delay (تأخير الطابور)، مش processing delay.</p>",
  },
  {
    id: 14,
    question:
      "Average throughput is the rate at which bits transferred between sender and receiver at any instant of time.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "<p>This is false. Average throughput is about average speed over time, but instantaneous throughput is at a specific instant.</p>",
    arabicExplanation:
      "<p>ده غلط. الـ Average throughput بيحسب السرعة المتوسطة مش اللحظية، اللي هي Instantaneous.</p>",
  },
  {
    id: 15,
    question:
      "The bandwidth-sensitive applications can make use of as much, or as little, throughput as happens to be available.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "<p>This is false. Elastic applications adapt to the bandwidth available.</p>",
    arabicExplanation:
      "<p>ده غلط. التطبيقات المرنة (elastic) بتقدر تستغل السرعة المتاحة زي تطبيقات الدردشة اللي بتمشي مع النت مهما كان سرعته.</p>",
  },
  {
    id: 16,
    question:
      "In persistent HTTP, at most one object sent over a TCP connection and then the connection is closed, so downloading multiple objects require multiple connections.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "<p>This is false. Persistent HTTP allows multiple objects to be sent over a single TCP connection without closing it each time.</p>",
    arabicExplanation:
      "<p>ده غلط. Persistent HTTP بيخلي الاتصال مفتوح عشان ينزل أكتر من object في مرة واحدة، مش لازم يفتح اتصال جديد لكل طلب.</p>",
  },
  {
    id: 17,
    question:
      "The application layer protocol of skype is intentionally not available in the public domain because it is not specified in RFCs.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "<p>This is true. Skype’s protocol isn’t published in RFCs, making it proprietary.</p>",
    arabicExplanation:
      "<p>ده صح. بروتوكول Skype مش موجود في RFCs ومش متاح للناس كلها.</p>",
  },
  {
    id: 18,
    question:
      "Network layer of TCP/IP protocol stack is found in every host and router.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "<p>This is true. The network layer is essential for routing and addressing.</p>",
    arabicExplanation:
      "<p>ده صح. طبقة الشبكة (Network Layer) موجودة في أي جهاز شغال على النت لأنها مسؤولة عن التوجيه والعناوين.</p>",
  },
  {
    id: 19,
    question: "IP address is conventionally expressed in hexadecimal notation.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "<p>This is false. IP addresses are usually written in dotted decimal format like 192.168.1.1.</p>",
    arabicExplanation:
      "<p>ده غلط. عناوين الـ IP بنكتبها بالطريقة المعروفة (dotted decimal) زي 192.168.1.1 مش هكساديسمل.</p>",
  },
  {
    id: 20,
    question:
      "Switching fabric transfers datagram from input port to appropriate output port.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "<p>This is true. Switching fabric is a hardware part in routers that sends packets to the correct output port.</p>",
    arabicExplanation:
      "<p>ده صح. الـ Switching fabric بيحول الباكيت من مدخل لمخرج مناسب جوة الراوتر.</p>",
  },
  {
    id: 21,
    question:
      "IPv4 uses four bytes to specify host address while IPv6 uses six bytes.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "<p>This is false. IPv6 uses 16 bytes (128 bits) while IPv4 uses 4 bytes (32 bits).</p>",
    arabicExplanation:
      "<p>ده غلط. IPv4 بياخد 4 بايت (32 بت)، بس IPv6 بياخد 16 بايت (128 بت) مش 6 بايت.</p>",
  },
  {
    id: 22,
    question:
      "ICMP messages are carried in IP datagrams as TCP & UDP segments.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "<p>This is true. ICMP messages are encapsulated inside IP datagrams, similar to TCP and UDP segments.</p>",
    arabicExplanation:
      "<p>ده صح. رسائل ICMP بتتلفف جوة الـ IP زي الـ TCP والـ UDP.</p>",
  },
  {
    id: 23,
    question:
      "IPv6 increases the number of assigned bits to host address without any other advantage over IPv4.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "<p>This is false. IPv6 offers several improvements over IPv4 like fixed header size and no fragmentation.</p>",
    arabicExplanation:
      "<p>ده غلط. IPv6 مش بس بيزود العناوين، لكن كمان بيضيف مزايا زي تقليل حجم الهيدر وتقليل التكسير (fragmentation).</p>",
  },
  {
    id: 24,
    question:
      "DHCP allows a host to dynamically obtain an IP address from a network server when this host joins this network.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "<p>This is true. DHCP automatically assigns an IP address to devices when they connect to the network.</p>",
    arabicExplanation:
      "<p>ده صح. DHCP بيدي الأجهزة عنوان IP بشكل تلقائي لما تتصل بالشبكة.</p>",
  },
  {
    id: 25,
    question:
      ".......... control is a mechanism assures that a sending entity does not overwhelm a receiving entity with huge data.",
    options: ["Error", "Congestion", "Flow"],
    correctAnswer: 2,
    explanation:
      "<p>Flow control ensures that the sender doesn’t overload the receiver by sending too much data too quickly.</p>",
    arabicExplanation:
      "<p> . flow control بيحافظ على توازن سرعة الإرسال عشان المستقبل مايتزنقش بالبيانات الكتير مرة واحدة.</p>",
  },
  {
    id: 26,
    question:
      "Which is a wireless medium used for transmission in short distances with limited rates?",
    options: ["Microwave", "Radio", "Bluetooth"],
    correctAnswer: 2,
    explanation:
      "<p>Bluetooth is a wireless technology suitable for short-range, low-speed connections.</p>",
    arabicExplanation:
      "<p> . البلوتوث هو وسيلة نقل لاسلكية لمسافات قصيرة وسرعة محدودة زي السماعات أو الإكسسوارات.</p>",
  },
  {
    id: 27,
    question: "The …………. guarantees delivery and prevents duplication.",
    options: ["UDP", "TCP", "POP3"],
    correctAnswer: 1,
    explanation:
      "<p>TCP is a reliable protocol ensuring data delivery and no duplicate packets.</p>",
    arabicExplanation:
      "<p> . بروتوكول TCP بيوصل البيانات مظبوط وبيتأكد إنها مش مكررة.</p>",
  },
  {
    id: 28,
    question: "The …………. means the host that generates data to be transmitted.",
    options: ["source", "transmitter", "(a) or (b)"],
    correctAnswer: 0,
    explanation:
      "<p>‘Source’ refers to the host or device that creates the data to be sent over the network.</p>",
    arabicExplanation:
      "<p> . المقصود بـ source هو الجهاز اللي بيبعت البيانات.</p>",
  },
  {
    id: 29,
    question:
      "………. layer provides messages routing between hosts attached to different networks.",
    options: ["Physical", "Application", "Internet"],
    correctAnswer: 2,
    explanation:
      "<p>The Internet layer handles routing data between networks (IP addressing and forwarding).</p>",
    arabicExplanation:
      "<p>ده صح. طبقة الإنترنت مسؤولة عن توجيه البيانات بين الشبكات المختلفة.</p>",
  },
  {
    id: 30,
    question:
      "UDP checksum treats segment contents as sequence of ………-byte integers.",
    options: ["2", "3", "4"],
    correctAnswer: 0,
    explanation:
      "<p>UDP checksum considers data in 16-bit (2-byte) segments.</p>",
    arabicExplanation:
      "<p>ده صح. الـ UDP checksum بيشوف البيانات على إنها أرقام من 2 بايت.</p>",
  },
  {
    id: 31,
    question: "Hosts and mail servers communicate over UDP using port ……….",
    options: ["25", "53", "80"],
    correctAnswer: 0,
    explanation:
      "<p>Port 25 is typically used for SMTP, which handles sending email.</p>",
    arabicExplanation:
      "<p>ده صح. بورت 25 بيستخدمه البريد الإلكتروني (SMTP) عشان إرسال الإيميلات.</p>",
  },
  {
    id: 32,
    question: "The telephone network switching technology is ……………-switching.",
    options: ["packet", "circuit", "(a) or (b)"],
    correctAnswer: 1,
    explanation:
      "<p>Traditional telephone networks use circuit switching (dedicated path for each call).</p>",
    arabicExplanation:
      "<p>ده صح. شبكات التليفون بتستخدم circuit switching يعني بيفتحوا خط خاص لكل مكالمة.</p>",
  },
  {
    id: 33,
    question: "Every host on the network needs to have a unique ……… address.",
    options: ["IP", "ISP", "SAP"],
    correctAnswer: 0,
    explanation:
      "<p>Every device on a network must have a unique IP address to identify it on the network.</p>",
    arabicExplanation:
      "<p>ده صح. كل جهاز لازم يكون ليه IP مختلف عشان نقدر نتعامل معاه في الشبكة.</p>",
  },
  {
    id: 34,
    question:
      "In ……… transmission, two hosts can exchange data simultaneously.",
    options: ["simplex", "half-duplex", "full-duplex"],
    correctAnswer: 2,
    explanation:
      "<p>Full-duplex allows simultaneous two-way communication between devices.</p>",
    arabicExplanation:
      "<p>ده صح. full-duplex يعني الجهازين يقدروا يبعتوا ويستقبلوا مع بعض في نفس الوقت زي المكالمات.</p>",
  },
  {
    id: 35,
    question: "Which is a better-known P2P application?",
    options: ["Telnet", "DNS", "Bit-Torrent"],
    correctAnswer: 2,
    explanation:
      "<p>Bit-Torrent is a popular peer-to-peer (P2P) file-sharing application.</p>",
    arabicExplanation:
      "<p>ده صح. Bit-Torrent من أشهر التطبيقات اللي بتستخدم طريقة P2P لمشاركة الملفات.</p>",
  },
  {
    id: 36,
    question: "The socket number of HTTP process on TCP is ……….",
    options: ["80", "25", "21"],
    correctAnswer: 0,
    explanation: "<p>HTTP typically uses TCP port 80 for communication.</p>",
    arabicExplanation: "<p>ده صح. بروتوكول HTTP بيشتغل دايمًا على بورت 80.</p>",
  },
  {
    id: 37,
    question:
      "The ……… delay is the time taken by a bit to travel across a link between two nodes.",
    options: ["processing", "transmission", "propagation"],
    correctAnswer: 2,
    explanation:
      "<p>Propagation delay refers to the time a bit takes to travel through the physical medium.</p>",
    arabicExplanation:
      "<p>ده صح. propagation delay يعني وقت انتقال البت من مكان لمكان.</p>",
  },
  {
    id: 38,
    question: "IPV6 uses ……… bits for specifying host address.",
    options: ["32", "48", "128"],
    correctAnswer: 2,
    explanation:
      "<p>IPv6 uses 128 bits to specify the address, unlike IPv4's 32 bits.</p>",
    arabicExplanation:
      "<p>ده صح. IPv6 بيستخدم 128 بت لتحديد العنوان، أكبر من IPv4.</p>",
  },
  {
    id: 39,
    question: "DHCP server returns to host ……… main pieces of information.",
    options: ["two", "three", "four"],
    correctAnswer: 1,
    explanation:
      "<p>DHCP typically provides three key pieces of information: IP address, subnet mask, and default gateway.</p>",
    arabicExplanation:
      "<p>ده صح. DHCP بيدي الجهاز 3 حاجات: IP، subnet mask، و gateway.</p>",
  },
  {
    id: 40,
    question:
      "Inside router, switching via ……… forwards multiple packets in parallel.",
    options: ["memory", "bus", "crossbar"],
    correctAnswer: 2,
    explanation:
      "<p>Crossbar switching can forward multiple packets simultaneously within the router.</p>",
    arabicExplanation:
      "<p>ده صح. crossbar switching بيسمح بمرور كذا باكيت مرة واحدة جوة الراوتر.</p>",
  },
];
