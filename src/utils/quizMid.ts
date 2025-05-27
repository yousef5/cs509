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
    question: "___ uses UDP as its underlying transport protocol.",
    options: ["HTTP 3.0", "HTTP 1.0", "HTTP 1.1", "HTTP 2.0"],
    correctAnswer: 0,
    explanation:
      "<p>HTTP 3.0 uses QUIC, which is built on top of UDP. Unlike earlier HTTP versions that use TCP, HTTP 3.0 leverages UDP for faster transmission and lower latency.</p>",
    arabicExplanation:
      "<p>ده صح. HTTP 3.0 بيشتغل فوق بروتوكول QUIC، اللي أساسه UDP، وده بيخلي نقل البيانات أسرع من HTTP 1.0 و 1.1 و 2.0 اللي كانوا بيشتغلوا على TCP.</p>",
  },
  {
    id: 2,
    question:
      "___ delay of a packet is the time elapsed to push out the full packet onto a link.",
    options: ["Transmmision", "Queuing", "Propagation", "Processing"],
    correctAnswer: 0,
    explanation:
      "<p>Transmission delay is the time it takes to send all bits of a packet to the link.</p>",
    arabicExplanation:
      "<p>ده صح. الـ transmission delay هو وقت إرسال كل البتات بتاعة الباكت على الخط (وقت الدفع للباكت كلها).</p>",
  },
  {
    id: 3,
    question: "TCP provides minimum delay, throughput and security guarantees.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "<p>This is false. TCP ensures reliable delivery but doesn’t guarantee minimum delay or maximum throughput.</p>",
    arabicExplanation:
      "<p>ده غلط. TCP بس بيأكد وصول البيانات مظبوط، مش بيضمن تأخير قليل أو أعلى سرعة نقل.</p>",
  },
  {
    id: 4,
    question:
      "DNS iterative query puts heavy load at the upper levels of DNS servers hierarchy.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "<p>This is false. Iterative DNS queries push the load to the resolver, not the upper-level DNS servers.</p>",
    arabicExplanation:
      "<p>ده غلط. الـ iterative DNS queries بتحط الضغط على الـ resolver مش على السيرفرات العليا.</p>",
  },
  {
    id: 5,
    question: "A protocol must define ___ aspects for communication.",
    options: ["three", "four", "five", "two"],
    correctAnswer: 1,
    explanation:
      "<p>This is true. A protocol must define four main aspects: syntax, semantics, timing, and error handling.</p>",
    arabicExplanation:
      "<p>ده صح. البروتوكول لازم يحدد 4 حاجات: التركيب (syntax)، المعنى (semantics)، التوقيت (timing)، والتعامل مع الأخطاء (error handling).</p>",
  },
  {
    id: 6,
    question: "The IMAP is used only to pull emails from mail servers.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "<p>This is true. IMAP (Internet Message Access Protocol) is used to retrieve emails from the mail server to the client.</p>",
    arabicExplanation:
      "<p>ده صح. بروتوكول IMAP شغال بس لسحب الإيميلات من السيرفر للعميل، مش للإرسال.</p>",
  },
  {
    id: 7,
    question: "Bit-Torrent divides distributed file into ___ chunks.",
    options: ["256KB", "256Kb", "256MB", "256Mb"],
    correctAnswer: 0,
    explanation:
      "<p>This is true. Bit-Torrent typically splits files into 256KB chunks to download and distribute efficiently.</p>",
    arabicExplanation:
      "<p>ده صح. Bit-Torrent بيقسم الملفات لأجزاء (chunks) حجمها 256KB عشان ينقلها بسرعة وكفاءة.</p>",
  },
  {
    id: 8,
    question:
      "Link frame is created by appending the link layer header to transport segment.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "<p>This is false. The link frame is created by appending the link layer header to the network layer packet, not the transport segment.</p>",
    arabicExplanation:
      "<p>ده غلط. الفريم بتاع اللينك بيتعمل بإضافة الهيدر بتاع لينك لطبقة الشبكة (IP packet)، مش للطبقة الترانسبورت (TCP segment).</p>",
  },
  {
    id: 9,
    question:
      "In P2P architecture, there is no always-on server in data center.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "<p>This is true. In P2P networks, peers communicate directly without needing a central always-on server.</p>",
    arabicExplanation:
      "<p>ده صح. في نظام الـ P2P الأجهزة بتتواصل مع بعضها ومفيش سيرفر شغال على طول في نص الشبكة.</p>",
  },
  {
    id: 10,
    question: "Multimedia applications can tolerate some amount of data loss.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "<p>This is true. Multimedia applications like video streaming can handle some data loss without major issues in quality.</p>",
    arabicExplanation:
      "<p>ده صح. التطبيقات زي الفيديو والصوت بتقبل شوية فقد بيانات من غير ما تتأثر قوي.</p>",
  },
  {
    id: 11,
    question:
      "In HTTP, the post method uploads inputs in the URL field of the message request line.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "<p>This is false. In HTTP, the GET method includes inputs in the URL; POST sends them in the body of the request.</p>",
    arabicExplanation:
      "<p>ده غلط. الـ GET بس هو اللي بيحط البيانات في اللينك، إنما الـ POST بيبعتها في جسم الرسالة مش في اللينك.</p>",
  },
  {
    id: 12,
    question:
      "The application layer protocol of Skype is intentionally not available in the public domain because it is not specified in RFCs.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "<p>This is true. Skype protocol isn’t publicly available or defined in RFCs – it’s proprietary.</p>",
    arabicExplanation:
      "<p>ده صح. بروتوكول Skype مش منشور ومش موثق في RFCs، وده بيخليه مش متاح للعامة.</p>",
  },
  {
    id: 13,
    question:
      "Twisted pair, coaxial cable and optical fiber belong to guided transmission media.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "<p>This is true. All these are physical media used for guided transmission.</p>",
    arabicExplanation:
      "<p>ده صح. الكابلات دي كلها عبارة عن وسائط توصيل بيانات مادية (guided media).</p>",
  },
  {
    id: 14,
    question:
      "___ DNS servers are responsible for popular domains such as com, org, net, and all country level domains, e.g.: uk, fr, ca, jp.",
    options: ["TLD", "Root", "Authoritative", "Local"],
    correctAnswer: 0,
    explanation:
      "<p>TLD (Top-Level Domain) servers manage domains like .com, .net, etc.</p>",
    arabicExplanation:
      "<p>ده صح. TLD servers هي المسؤولة عن الدومينات الكبيرة زي .com، .org وهكذا.</p>",
  },
  {
    id: 15,
    question:
      "Chrome, Skype and WhatsApp are examples of application layer protocols.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "<p>This is false. Chrome and Skype are applications, not protocols; protocols include HTTP, SMTP, etc.</p>",
    arabicExplanation:
      "<p>ده غلط. دي تطبيقات مش بروتوكولات! البروتوكولات زي HTTP و DNS.</p>",
  },
  {
    id: 16,
    question: "Cookies maintain the state between mail agent and mail server.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "<p>This is false. Cookies are used for HTTP sessions, not email agents and servers.</p>",
    arabicExplanation:
      "<p>ده غلط. الكوكيز بتستخدم في المواقع، مش بين برامج البريد.</p>",
  },
  {
    id: 17,
    question: "Open System Interconnection model consists of five layers.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "<p>This is false. OSI model has seven layers: Physical, Data Link, Network, Transport, Session, Presentation, and Application.</p>",
    arabicExplanation:
      "<p>ده غلط. الـ OSI عنده 7 طبقات مش 5، عشان يغطي كل جوانب التواصل.</p>",
  },
  {
    id: 18,
    question:
      "In persistent HTTP, at most, one object is sent over a TCP connection and then the connection is closed, so downloading multiple objects require multiple connections.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "<p>This is false. That’s how non-persistent HTTP works; persistent HTTP keeps the connection open for multiple objects.</p>",
    arabicExplanation:
      "<p>ده غلط. ده اللي بيحصل في non-persistent HTTP، مش في persistent.</p>",
  },
  {
    id: 19,
    question:
      "Self-scalability is an important property of P2P network application architecture.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "<p>This is true. In P2P, adding more peers increases capacity and reduces bottlenecks.</p>",
    arabicExplanation:
      "<p>ده صح. في الـ P2P كل جهاز بيشارك بيزود قدرة الشبكة ويقلل الضغط.</p>",
  },
];
