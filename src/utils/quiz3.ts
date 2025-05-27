interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  arabicExplanation: string;
}

export const quiz3: Question[] = [
  {
    id: 1,
    question:
      "Transport-layer protocols are implemented in network routers but not in the end systems.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "<p>Transport-layer protocols are actually implemented in the end systems, not in the routers. The routers work at the network layer.</p>",
    arabicExplanation:
      "<p>البروتوكولات بتاعت الطبقة الرابعة (Transport layer) بتتطبق على الأجهزة الطرفية (end systems) زي الكمبيوتر والموبايل، مش في الرواترز نفسها. الرواترز شغالة في الطبقة التالتة (Network layer) بس.</p>",
  },
  {
    id: 2,
    question:
      "............................. protocol provides logical communication between application processes",
    options: [
      "Application layer",
      "Transport layer",
      "Network layer",
      "Data-link layer",
    ],
    correctAnswer: 1,
    explanation:
      "<p>Transport layer provides logical communication between application processes by using protocols like TCP and UDP.</p>",
    arabicExplanation:
      "<p>الطبقة الرابعة (Transport layer) بتديك الاتصال المنطقي بين البرامج (زي لما تفتح موقع ويب). البروتوكولات المهمة هنا TCP وUDP.</p>",
  },
  {
    id: 3,
    question:
      "............................. protocol provides logical communication between hosts.",
    options: [
      "Application layer",
      "Transport layer",
      "Network layer",
      "Data-link layer",
    ],
    correctAnswer: 2,
    explanation:
      "<p>The Network layer provides logical communication between hosts, e.g., using the IP protocol.</p>",
    arabicExplanation:
      "<p>الطبقة التالتة (Network layer) مسؤولة عن الاتصال بين الأجهزة (hosts) عن طريق بروتوكولات زي IP.</p>",
  },
  {
    id: 4,
    question:
      "............................. provides a process-to-process communication.",
    options: [
      "Application layer",
      "Transport layer",
      "Network layer",
      "Data-link layer",
    ],
    correctAnswer: 1,
    explanation:
      "<p>The Transport layer ensures process-to-process communication using ports to identify specific processes.</p>",
    arabicExplanation:
      "<p>الطبقة الرابعة (Transport layer) بتديك تواصل من برنامج لبرنامج عن طريق البورتات، زي لما يشتغل برنامج على رقم بورت معين.</p>",
  },
  {
    id: 5,
    question:
      "............................. provides a host-to-host communication.",
    options: [
      "Application layer",
      "Transport layer",
      "Network layer",
      "Data-link layer",
    ],
    correctAnswer: 2,
    explanation:
      "<p>The Network layer enables communication from one host to another using logical addressing.</p>",
    arabicExplanation:
      "<p>الطبقة التالتة (Network layer) هي اللي بتخلي الأجهزة تكلم بعضها عن طريق عناوين IP.</p>",
  },
  {
    id: 6,
    question:
      "...................... protocol provides an unreliable, connectionless service.",
    options: ["TCP", "UDP", "HTTP", "FTP"],
    correctAnswer: 1,
    explanation:
      "<p>UDP (User Datagram Protocol) is an unreliable, connectionless protocol.</p>",
    arabicExplanation:
      "<p>البروتوكول اسمه UDP، وده مش بيضمن ان الداتا توصل سليمة، وبيشتغل من غير اتصال ثابت. مثال عليه: البث المباشر (live streaming).</p>",
  },
  {
    id: 7,
    question:
      "...................... provides a reliable, connection-oriented service.",
    options: ["TCP", "UDP", "HTTP", "FTP"],
    correctAnswer: 0,
    explanation:
      "<p>TCP (Transmission Control Protocol) ensures reliable, connection-oriented communication.</p>",
    arabicExplanation:
      "<p>البروتوكول اسمه TCP، وده بيضمن توصيل البيانات بشكل موثوق، وبيستخدم لما تكون عايز اتصال ثابت زي تحميل الملفات.</p>",
  },
  {
    id: 8,
    question:
      "We refer to the transport-layer packet as a segment. But often refers to the packet for UDP as a ....................",
    options: ["datagram", "segment", "frame", "message"],
    correctAnswer: 0,
    explanation:
      "<p>In UDP, the packet is called a datagram because it's a connectionless, unreliable piece of data.</p>",
    arabicExplanation:
      "<p>في UDP، الباكت اسمها Datagram لأنها بتتبعت من غير اتصال ثابت (connectionless) وكأنها رسالة منفردة.</p>",
  },
  {
    id: 9,
    question: "In user datagram protocol (UDP),",
    options: [
      "Flow control is enforced",
      "Error control is enforced",
      "Best effort service is provided",
      "End-to-end delay limits are guaranteed",
    ],
    correctAnswer: 2,
    explanation:
      "<p>UDP provides a best effort service without ensuring reliability or order.</p>",
    arabicExplanation:
      "<p>UDP بيدي خدمة بأفضل مجهود (best effort) يعني بيبعت البيانات وخلاص، مش بيضمن توصل أو ما توصلش.</p>",
  },
  {
    id: 10,
    question:
      "............................. protocol provides logical communication between application processes",
    options: ["TCP", "UDP", "IP", "Both a and b"],
    correctAnswer: 3,
    explanation:
      "<p>Both TCP and UDP provide logical communication between applications.</p>",
    arabicExplanation:
      "<p>الاتنين TCP وUDP بيوصلوا البرامج ببعض عن طريق بورتات.</p>",
  },
  {
    id: 11,
    question:
      "............................. protocol provides Logical communication between hosts.",
    options: ["TCP", "UDP", "IP", "Both a and b"],
    correctAnswer: 2,
    explanation:
      "<p>IP protocol is used for logical communication between hosts by assigning unique IP addresses.</p>",
    arabicExplanation:
      "<p>بروتوكول IP هو اللي بيربط الأجهزة ببعض عن طريق عناوين IP.</p>",
  },
  {
    id: 12,
    question:
      "Extend host-to-host delivery service provided by the network layer to a process-to-process delivery service for applications running on the hosts is called.",
    options: [
      "Multiplexing",
      "Demultiplexing",
      "Multiplexing and demultiplexing",
      "None of the above",
    ],
    correctAnswer: 2,
    explanation:
      "<p>Multiplexing at sender and demultiplexing at receiver ensure that data reaches the right application.</p>",
    arabicExplanation:
      "<p>الطبقة الرابعة بتعمل multiplexing في الجهاز المرسل (يعني بتجمع البيانات) و demultiplexing عند المستقبل (يعني بتفرق البيانات حسب البورت).</p>",
  },
  {
    id: 13,
    question:
      "At the sending host, the transport layer receives messages from the application layer processes and sends these messages to the network layer",
    options: [
      "Multiplexing.",
      "Demultiplexing",
      "Multiplexing and demultiplexing",
      "None of the above",
    ],
    correctAnswer: 0,
    explanation:
      "<p>At the sender, multiplexing collects data from multiple applications and passes them to the network layer.</p>",
    arabicExplanation:
      "<p>في الجهاز اللي بيبعت، الطبقة الرابعة بتعمل multiplexing يعني بتجمع البيانات من كل البرامج وبتوديها للطبقة التالتة.</p>",
  },
  {
    id: 14,
    question:
      "At the receiving host, the transport layer receives messages from the network layer and sends them to the appropriate application layer processes",
    options: [
      "Multiplexing.",
      "Demultiplexing",
      "Multiplexing and demultiplexing",
      "None of the above",
    ],
    correctAnswer: 1,
    explanation:
      "<p>At the receiver, demultiplexing sends the data to the correct application process using port numbers.</p>",
    arabicExplanation:
      "<p>في الجهاز اللي بيستقبل، الطبقة الرابعة بتعمل demultiplexing يعني بتفرق البيانات وتبعتها للبرنامج الصح.</p>",
  },
  {
    id: 15,
    question: "Transport layer multiplexing/demultiplexing requires:",
    options: [
      "sockets have unique identifiers",
      "each segment have special fields that indicate the socket to which the segment is to be delivered (source port number and destination port number)",
      "both a and b",
      "none of the above",
    ],
    correctAnswer: 2,
    explanation:
      "<p>Both unique identifiers (like ports) and special fields in segment headers help in identifying which process should receive the segment.</p>",
    arabicExplanation:
      "<p>الطبقة الرابعة لازم يكون عندها حاجتين: أرقام مميزة لكل برنامج (Sockets) وكمان في الباكت نفسه بيكون فيه معلومات بتحدد رايح لمين (Source & Destination Port).</p>",
  },
  {
    id: 16,
    question:
      "TCP ensures that data is delivered from sending process to receiving process, correctly and in order using:",
    options: [
      "Using flow control,",
      "sequence numbers,",
      "acknowledgments, and timers.",
      "All of the above",
    ],
    correctAnswer: 3,
    explanation:
      "<p>TCP uses flow control, sequence numbers, acknowledgments, and timers to ensure reliable, ordered delivery.</p>",
    arabicExplanation:
      "<p>بروتوكول TCP بيستخدم كل ده عشان يضمن البيانات توصل بالترتيب ومن غير مشاكل: flow control, sequence numbers, acknowledgments.</p>",
  },
  {
    id: 17,
    question:
      "This job of delivering the data in a transport-layer segment to the correct socket is called .....................",
    options: [
      "Multiplexing",
      "Demultiplexing",
      "Multiplexing and demultiplexing",
      "None of the above",
    ],
    correctAnswer: 1,
    explanation:
      "<p>Demultiplexing is the process at the receiver of identifying which process should get the data.</p>",
    arabicExplanation:
      "<p>في الجهاز المستقبل، Demultiplexing هو اللي بيخلي البيانات توصل للبرنامج الصح.</p>",
  },
  {
    id: 18,
    question:
      "The job of gathering data chunks at the source host from different sockets, encapsulating each data chunk with header information to create segments, and passing the segments to the network layer is called ............................",
    options: [
      "Multiplexing.",
      "Demultiplexing",
      "Multiplexing and demultiplexing",
      "None of the above",
    ],
    correctAnswer: 0,
    explanation:
      "<p>Multiplexing at the sender involves collecting data from many applications and sending it to the network.</p>",
    arabicExplanation:
      "<p>في الجهاز اللي بيبعت، Multiplexing يعني بياخد الداتا من كل البرامج ويجهزها عشان تتبعت.</p>",
  },
  {
    id: 19,
    question:
      "With ...................... protocol there is no handshaking between sending and receiving transport-layer entities before sending a segment.",
    options: ["TCP.", "UDP.", "HTTP.", "FTP."],
    correctAnswer: 1,
    explanation:
      "<p>UDP is a connectionless protocol and doesn’t use handshaking before sending data.</p>",
    arabicExplanation:
      "<p>البروتوكول UDP مش بيعمل أي تحضير أو اتصال قبل ما يبعث البيانات (no handshaking).</p>",
  },
  {
    id: 20,
    question:
      "With ...................... protocol there is handshaking between sending and receiving transport-layer entities before sending a segment.",
    options: ["TCP.", "UDP.", "HTTP.", "FTP."],
    correctAnswer: 0,
    explanation:
      "<p>TCP does a three-way handshake before data transmission to establish a reliable connection.</p>",
    arabicExplanation:
      "<p>البروتوكول TCP لازم يعمل 3-way handshake قبل ما يبدأ نقل البيانات عشان يضمن الاتصال الثابت والموثوق.</p>",
  },
  {
    id: 21,
    question: "Connectionless means .................",
    options: [
      "no connection established,",
      "no flow control",
      "no congestion control",
      "no quality-of-service guarantee.",
      "All of the above",
    ],
    correctAnswer: 4,
    explanation:
      "<p>Connectionless protocols (like UDP) don’t establish a connection and don’t provide flow control, congestion control, or QoS.</p>",
    arabicExplanation:
      "<p>Connectionless يعني البروتوكول (زي UDP) مش بيعمل اتصال مسبق ومفيش ضمان يوصل صح أو لأ (زي live streaming).</p>",
  },
  {
    id: 22,
    question: "UDP guarantee of the quality of the serve:",
    options: ["True", "false"],
    correctAnswer: 1,
    explanation:
      "<p>UDP doesn’t guarantee delivery, order, or quality of service. It’s best effort.</p>",
    arabicExplanation: "<p>UDP مش بيضمن ان الداتا توصل كلها أو صح.</p>",
  },
  {
    id: 23,
    question: "TCP guarantee of the quality of the serve:",
    options: ["True", "false"],
    correctAnswer: 0,
    explanation:
      "<p>TCP provides reliable delivery with congestion control, flow control, and error recovery.</p>",
    arabicExplanation:
      "<p>TCP بيوفر اتصال ثابت وموثوق وبيراقب الزحمة (congestion control) والأخطاء.</p>",
  },
  {
    id: 24,
    question: "Advantages of UDP:",
    options: [
      "Finer application-level control over what data is sent, and when",
      "No connection establishment.",
      "No connection state.",
      "Small packet header overhead",
      "All of the above",
    ],
    correctAnswer: 4,
    explanation:
      "<p>UDP’s simplicity (no connection, no state) makes it faster and more flexible for certain applications.</p>",
    arabicExplanation:
      "<p>UDP سهل وسريع ومش معقد عشان مفيش تأكيد اتصال ولا بيانات إضافية كتير.</p>",
  },
  {
    id: 25,
    question: "The fields of the UDP header includes .....................",
    options: [
      "Source port number",
      "Destination port number",
      "Checksum",
      "Header length",
      "All of the above",
    ],
    correctAnswer: 4,
    explanation:
      "<p>UDP header has these basic fields to identify and protect data.</p>",
    arabicExplanation:
      "<p>رأس الـ UDP فيه الحاجات دي كلها زي source port, destination port, إلخ عشان البيانات توصل صح.</p>",
  },
  {
    id: 26,
    question: "Reliable data connection means ..............",
    options: [
      "guarantees that packet is delivered and delivered correctly,",
      "do flow control,",
      "congestion control.",
      "All of the above",
    ],
    correctAnswer: 3,
    explanation:
      "<p>Reliable connection (like TCP) ensures data arrives in order, controls flow, and manages congestion.</p>",
    arabicExplanation:
      "<p>الاتصال الموثوق يعني البيانات توصل بالترتيب وبيتحكم في السرعة والازدحام.</p>",
  },
  {
    id: 27,
    question:
      "In the TCP connection, If the destination is not found, then the sender will be notified:",
    options: ["True", "false"],
    correctAnswer: 0,
    explanation:
      "<p>TCP uses acknowledgments and error messages to inform the sender if the destination is not reachable.</p>",
    arabicExplanation: "<p>لو مفيش وجهة، TCP بيبعت رسالة خطأ للمرسل.</p>",
  },
  {
    id: 28,
    question: "In the UDP header, the checksum is used for:",
    options: [
      "Error detection",
      "Error correction",
      "Flow control",
      "Congestion control",
    ],
    correctAnswer: 0,
    explanation:
      "<p>The checksum in UDP header is only for error detection, not correction.</p>",
    arabicExplanation:
      "<p>الـ checksum في UDP بس عشان يكتشف لو في خطأ (error detection)، مش بيصلح الخطأ.</p>",
  },
  {
    id: 29,
    question:
      "................................. a mechanism is needed to allow the receiver to detect when bit errors have occurred and notify the sender",
    options: [
      "Error detection",
      "Error correction",
      "Flow control",
      "Congestion control",
    ],
    correctAnswer: 0,
    explanation:
      "<p>Error detection is used to identify errors in transmission and notify the sender to fix or resend the data.</p>",
    arabicExplanation:
      "<p>error detection يعني تتأكد ان الداتا اتبعتت صح ولو في مشكلة المرسل يتصرف.</p>",
  },
  {
    id: 30,
    question:
      "The IP protocol provides unreliable connection but with the TCP protocol it provides reliable connection ........",
    options: ["True", "false"],
    correctAnswer: 0,
    explanation:
      "<p>IP alone doesn’t ensure reliable delivery, but TCP works on top of it to ensure reliability.</p>",
    arabicExplanation:
      "<p>IP بس مش موثوق، TCP بيكمل الشغل عشان يخلي الاتصال موثوق.</p>",
  },
  {
    id: 31,
    question:
      "................................. is the acknowledgement of the receiver after receiving a packet.",
    options: [
      "Receiver feedback",
      "Error correction",
      "Flow control",
      "Congestion control",
    ],
    correctAnswer: 0,
    explanation:
      "<p>Receiver feedback like ACK or NACK tells the sender the status of the sent data.</p>",
    arabicExplanation:
      "<p>دي رسائل بتقول للمرسل (زي ACK, NACK) البيانات وصلت ولا لأ.</p>",
  },
  {
    id: 32,
    question:
      "................................. signal is sent to reject a previously received message or to indicate some kind of error.",
    options: [
      "Negative acknowledgement (NACK)",
      "Positive acknowledgement (ACK)",
      "Both a and b",
      "None of the above",
    ],
    correctAnswer: 0,
    explanation:
      "<p>NACK is used to tell the sender that there’s an error or rejection.</p>",
    arabicExplanation: "<p>NACK يعني 'فيه مشكلة'، ابعت تاني!</p>",
  },
  {
    id: 33,
    question:
      "In case of ................................. the receiver explicitly notifies the sender which packets, messages, or segments were received correctly.",
    options: [
      "Negative acknowledgement (NACK)",
      "Positive acknowledgement (ACK)",
      "Both a and b",
      "None of the above",
    ],
    correctAnswer: 1,
    explanation:
      "<p>ACK (positive acknowledgement) is used to confirm successful delivery.</p>",
    arabicExplanation: "<p>الـ ACK بيأكد للمرسل ان الداتا وصلت تمام.</p>",
  },
  {
    id: 34,
    question:
      "................................. is used to account for the possibility of corruption of the ACK or NAK during transmission from receiver to sender?",
    options: [
      "Sequence number",
      "Retransmission",
      "Error detection",
      "Error correction",
    ],
    correctAnswer: 0,
    explanation:
      "<p>Sequence numbers help in tracking and reordering packets to avoid confusion from lost or corrupted acknowledgments.</p>",
    arabicExplanation:
      "<p>Sequence number بيرتب الباكتات وبتأكد انها صح لو حصلت مشكلة في الـ ACK.</p>",
  },
  {
    id: 35,
    question:
      "In the reliable data transfer in noisy channel, the sender can retransmit the packet if, .....",
    options: [
      "If an ACK is not received before the timer ends.",
      "The ACK is lost.",
      "There is a large delay in the packet delivery.",
      "All of the above.",
    ],
    correctAnswer: 3,
    explanation:
      "<p>All of these situations require the sender to retransmit the data to ensure it arrives safely.</p>",
    arabicExplanation:
      "<p>لو حصلت مشكلة في الاستلام (زي تأخير أو فقدان الـ ACK)، المرسل بيبعت تاني عشان يضمن توصل البيانات.</p>",
  },
  {
    id: 38,
    question:
      "In the ................................., the sender is allowed to transmit multiple packets (when available) without waiting for an acknowledgment but is constrained to have no more than some maximum allowable number, N, of unacknowledged packets in the pipeline.",
    options: [
      "stop-and-wait protocol.",
      "Go-back-N protocol.",
      "Selective repeat",
      "Both b and c",
    ],
    correctAnswer: 3,
    explanation:
      "<p>Both Go-back-N and Selective Repeat ARQ allow multiple unacknowledged packets in flight (windowed transmission).</p>",
    arabicExplanation:
      "<p>الاتنين (Go-back-N وSelective Repeat) بيخلوا المرسل يبعث كذا باكت في نفس الوقت من غير ما يستنى.</p>",
  },
  {
    id: 39,
    question:
      "A transmitter has already transmitted 12 frames. There was one error in frame number 8 (frames are numbered starting from 0 to 11). How many frames the transmitted retransmits using a Go back N ARQ error control?",
    options: ["1", "4", "8", "12"],
    correctAnswer: 1,
    explanation:
      "<p>In Go-back-N, if a frame error occurs, all frames from the erroneous one onward are retransmitted. So from frame 8 to 11 (4 frames).</p>",
    arabicExplanation:
      "<p>في Go-back-N، لو فريم 8 باز، لازم نعيد من 8 لحد 11 (يبقى 4 فريمات).</p>",
  },
  {
    id: 40,
    question:
      "A transmitter has already transmitted 12 frames. There was one error in frame number 8 (frames are numbered starting from 0 to 11). How many frames the transmitted retransmits using a the selective repeat ARQ error control?",
    options: ["1", "4", "8", "12"],
    correctAnswer: 0,
    explanation:
      "<p>In Selective Repeat, only the frame in error (frame 8) is retransmitted.</p>",
    arabicExplanation:
      "<p>في Selective Repeat، بس الفريم اللي حصل فيه مشكلة هو اللي بيتعاد (فريم 8).</p>",
  },
  {
    id: 41,
    question: "The TCP segment includes:",
    options: [
      "Source and destination port numbers",
      "Checksum field",
      "Header.",
      "data",
      "all of the above.",
    ],
    correctAnswer: 4,
    explanation:
      "<p>TCP segments include all these fields for reliable delivery.</p>",
    arabicExplanation:
      "<p>التقسيمة بتاعة TCP فيها كل دول: source, destination, checksum, header, data.</p>",
  },
  {
    id: 42,
    question: "TCP segment header includes:",
    options: [
      "32-bit sequence number field and the 32-bit acknowledgment number field",
      "16-bit receive window",
      "4-bit header length field",
      "options field",
      "flag field",
      "all of the above.",
    ],
    correctAnswer: 5,
    explanation:
      "<p>TCP header contains all these fields to ensure control and reliable delivery of segments.</p>",
    arabicExplanation:
      "<p>Header بتاع TCP فيه كل دول: أرقام التتبع (sequence), window size, طول الهيدر, حاجات إضافية (options) وكمان flag field.</p>",
  },
];
