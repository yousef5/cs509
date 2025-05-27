interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  arabicExplanation: string;
}

export const quiz4: Question[] = [
  {
    id: 1,
    question: "The Network Layer provides:",
    options: [
      "Host-to-host communication",
      "Process-to-process communication",
      "Both a and b",
      "None of the above.",
    ],
    correctAnswer: 0,
    explanation:
      "<p>The network layer enables communication between hosts by handling logical addressing (like IP addresses).</p>",
    arabicExplanation:
      "<p>الطبقة التالتة (Network Layer) بتخلي الأجهزة تكلم بعضها (host-to-host) عن طريق عناوين IP.</p>",
  },
  {
    id: 2,
    question: "The Network Layer can be decomposed into two interacting parts:",
    options: [
      "Data plane",
      "Control plane",
      "Both a and b",
      "None of the above.",
    ],
    correctAnswer: 2,
    explanation:
      "<p>Network layer has two main parts: the data plane (for forwarding packets) and the control plane (for routing decisions).</p>",
    arabicExplanation:
      "<p>الطبقة التالتة فيها جزئين: data plane (بينقل الباكتات) وcontrol plane (يقرر يودي الباكت فين).</p>",
  },
  {
    id: 3,
    question:
      "................ is per-router functions that determine how a datagram (a network layer packet) arriving on one of a router’s input links is forwarded to one of that router’s output links",
    options: ["Data plane", "Forwarding", "Both a and b", "None of the above."],
    correctAnswer: 2,
    explanation:
      "<p>Forwarding (data plane) is a function in routers for moving packets from input to output interfaces.</p>",
    arabicExplanation:
      "<p>الوظيفة دي (forwarding) بتتحكم في ازاي الباكت يمشي من وصلة دخلة لوصلة خارجة.</p>",
  },
  {
    id: 4,
    question:
      "................ is the function performed when a packet arrives at a router’s input link, the router must move the packet to the appropriate output link.",
    options: ["Routing.", "Forwarding", "Both a and b", "None of the above."],
    correctAnswer: 1,
    explanation:
      "<p>Forwarding is done in the data plane to quickly move the packet to the output link.</p>",
    arabicExplanation:
      "<p>الـ forwarding ده هو اللي بيشوف الباكت رايح فين ويوديه الوصلة الصح بسرعة.</p>",
  },
  {
    id: 5,
    question:
      "................ is the network-wide logic that controls how a datagram is routed among routers along an end-to-end path from source host to destination host using routing protocols, such as OSPF and BGP.",
    options: ["Control plane", "Routing", "Both a and b", "None of the above."],
    correctAnswer: 2,
    explanation:
      "<p>Routing is done in the control plane to decide the best path for data to travel across the network.</p>",
    arabicExplanation:
      "<p>الـ routing بيقرر أفضل طريق للباكت تمشي فيه لحد ما توصل.</p>",
  },
  {
    id: 6,
    question:
      "..................... is one function implemented in the data plane.",
    options: ["Routing.", "Forwarding", "Both a and b", "None of the above."],
    correctAnswer: 1,
    explanation:
      "<p>Forwarding is a data plane function, quickly sending packets to the next router or host.</p>",
    arabicExplanation:
      "<p>الـ forwarding بس هو اللي شغال في data plane (يوصل الباكت للهدف بسرعة).</p>",
  },
  {
    id: 7,
    question:
      "................ is the function in which the network layer must determine the route or path taken by packets as they flow from a sender to a receiver.",
    options: ["Routing.", "Forwarding", "Both a and b", "None of the above."],
    correctAnswer: 0,
    explanation:
      "<p>Routing is the process of deciding the path the data will take through the network to reach its destination.</p>",
    arabicExplanation:
      "<p>الـ routing يعني نحدد الطريق اللي الباكت هيمشيه عشان يوصل من الجهاز اللي بيبعت للجهاز اللي بيستقبل. زي بالظبط GPS بيحددلك الطريق الأسرع.</p>",
  },
  {
    id: 8,
    question:
      "The algorithms that calculate paths taken by the packet are referred to as ...........",
    options: [
      "Routing algorithms.",
      "Forwarding algorithms",
      "Both a and b",
      "None of the above.",
    ],
    correctAnswer: 0,
    explanation:
      "<p>Routing algorithms figure out the best paths for data packets across the network.</p>",
    arabicExplanation:
      "<p>الـ routing algorithms هي اللي بتشوف الطريق الأحسن للباكتات عشان توصل أسرع وأضمن.</p>",
  },
  {
    id: 9,
    question:
      "................ is implemented in the control plane of the network layer.",
    options: ["Routing.", "Forwarding", "Both a and b", "None of the above."],
    correctAnswer: 0,
    explanation:
      "<p>Routing is part of the control plane, which decides how data should move through the network.</p>",
    arabicExplanation:
      "<p>الـ control plane بيتحكم في ازاي الداتا هتتحرك. وهو اللي بيشغل الـ routing.</p>",
  },
  {
    id: 10,
    question: "Routing is often implemented in ....................",
    options: ["Software", "Hardware", "Both a and b", "None of the above."],
    correctAnswer: 0,
    explanation:
      "<p>Routing algorithms are complex and are typically implemented in software because it’s easier to update.</p>",
    arabicExplanation:
      "<p>الـ routing غالبا بيتعمل بالسوفت وير عشان لو عايزين نعدله نقدر بسهولة من غير ما نغير الأجهزة نفسها.</p>",
  },
  {
    id: 11,
    question: "Forwarding is often implemented in ....................",
    options: ["Software", "Hardware", "Both a and b", "None of the above."],
    correctAnswer: 1,
    explanation:
      "<p>Forwarding is done at high speed and is usually implemented in hardware (like routers) for fast packet processing.</p>",
    arabicExplanation:
      "<p>الـ forwarding شغلته ينقل الباكت بسرعة، فعشان كده بيتعمل في الهاردوير جوه الراوتر عشان السرعة العالية.</p>",
  },
  {
    id: 12,
    question:
      "................................. is responsible for creating the forwarding table",
    options: [
      "Control plane",
      "Data plane",
      "Both a and b",
      "None of the above.",
    ],
    correctAnswer: 0,
    explanation:
      "<p>The control plane decides how packets are forwarded by creating the forwarding tables.</p>",
    arabicExplanation:
      "<p>الـ control plane بيقرر مين اللي هيوصل الباكت في الشبكة، وبيكتب ده في جدول اسمه forwarding table.</p>",
  },
  {
    id: 13,
    question:
      "Traditionally, ................................. determines the contents of the routers’ forwarding tables, in the control plane.",
    options: [
      "Routing algorithms.",
      "Forwarding algorithms",
      "SDN (software-defined networking).",
      "None of the above.",
    ],
    correctAnswer: 0,
    explanation:
      "<p>Routing algorithms figure out what to put in the forwarding table based on the best path decisions.</p>",
    arabicExplanation:
      "<p>الـ routing algorithms هي اللي بتحط المعلومات في جدول التوجيه (forwarding table) عشان الباكتات تعرف تتنقل صح.</p>",
  },
  {
    id: 14,
    question:
      "......................... approach is a physically separate (from the routers), remote controller computes and distributes the forwarding tables to be used by each and every router.",
    options: ["SDN", "Traditional", "Both a and b", "None of the above"],
    correctAnswer: 0,
    explanation:
      "<p>SDN (Software Defined Networking) separates the control plane from the data plane and uses a central controller.</p>",
    arabicExplanation:
      "<p>الـ SDN يعني ان في جهاز خارجي (زي سيرفر) هو اللي بيقرر الطريق مش الراوتر نفسه. السيرفر بيدي أوامر للراوترات.</p>",
  },
  {
    id: 15,
    question:
      "In ......................... approach, the routing algorithms determines the contents of the routers’ forwarding tables.",
    options: ["SDN", "Traditional", "Both a and b", "None of the above"],
    correctAnswer: 1,
    explanation:
      "<p>In the traditional approach, each router runs its own routing algorithms to fill its forwarding table.</p>",
    arabicExplanation:
      "<p>في النظام التقليدي، كل راوتر بيشغل الخوارزميات بنفسه ويقرر الطريق لوحده.</p>",
  },
  {
    id: 16,
    question:
      "The data plane components are the same in both the traditional and SDN approaches.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "<p>Regardless of control, the data plane's job is to forward packets, and the components stay the same.</p>",
    arabicExplanation:
      "<p>سواء النظام كان SDN أو تقليدي، الداتا بلين شغلته واحدة: ينقل الباكتات من مكان لمكان.</p>",
  },
  {
    id: 17,
    question:
      "......................... defines the characteristics of end-to-end delivery of packets between sending and receiving hosts.",
    options: [
      "Network service model",
      "Access service model",
      "Both a and b",
      "None of the above",
    ],
    correctAnswer: 0,
    explanation:
      "<p>The network service model defines what kind of delivery guarantees (like reliable or best effort) the network provides.</p>",
    arabicExplanation:
      "<p>Network service model يعني شكل الخدمة اللي الشبكة بتقدمها: زي هل هتوصل الباكتات بسرعة أو تتأخر؟ موثوقة ولا لأ؟</p>",
  },
  {
    id: 18,
    question:
      "......................... is a network service that guarantees that a packet sent by a source host will eventually arrive at the destination host.",
    options: [
      "Guaranteed delivery",
      "Guaranteed delivery with bounded delay",
      "In-order packet delivery",
      "Guaranteed minimal bandwidth",
    ],
    correctAnswer: 0,
    explanation:
      "<p>Guaranteed delivery ensures that the packet will reach its destination, no matter how long it takes.</p>",
    arabicExplanation: "<p>ده معناه ان الباكت هيوصل في الاخر حتى لو اتأخر.</p>",
  },
  {
    id: 19,
    question:
      "......................... is a network service that not only guarantees delivery of the packet, but delivery within a specified host-to-host delay bound.",
    options: [
      "Guaranteed delivery",
      "Guaranteed delivery with bounded delay",
      "In-order packet delivery",
      "Guaranteed minimal bandwidth",
    ],
    correctAnswer: 1,
    explanation:
      "<p>This service ensures not only arrival, but arrival within a time limit.</p>",
    arabicExplanation:
      "<p>ده معناه ان الباكت يوصل بسرعة معينة (مش بس يوصل وخلاص).</p>",
  },
  {
    id: 20,
    question:
      "......................... is a network service that guarantees that packets arrive at the destination in the order that they were sent..",
    options: [
      "Guaranteed delivery",
      "Guaranteed delivery with bounded delay",
      "In-order packet delivery",
      "Guaranteed minimal bandwidth",
    ],
    correctAnswer: 2,
    explanation:
      "<p>In-order delivery means the receiver gets the packets in the exact order the sender sent them.</p>",
    arabicExplanation:
      "<p>دي الخدمة اللي بتخلي الباكتات توصل بنفس الترتيب اللي اتبعتت بيه.</p>",
  },
  {
    id: 21,
    question:
      "......................... is a network service that emulates the behavior of a transmission link of a specified bit rate (for example, 1 Mbps) between sending and receiving hosts.",
    options: [
      "Guaranteed delivery",
      "Guaranteed delivery with bounded delay",
      "In-order packet delivery",
      "Guaranteed minimal bandwidth",
    ],
    correctAnswer: 3,
    explanation:
      "<p>Guaranteed minimal bandwidth ensures a minimum data rate between the sender and receiver.</p>",
    arabicExplanation:
      "<p>ده معناه ان الشبكة بتضمنلك أقل سرعة دايما، زي ما تضمن ان النت عندك مينزلش عن 1 Mbps.</p>",
  },
  {
    id: 22,
    question:
      "......................... is a network service that could encrypt all datagrams at the source and decrypt them at the destination to provide confidentiality to all transport-layer segments.",
    options: [
      "Guaranteed delivery",
      "Guaranteed delivery with bounded delay",
      "In-order packet delivery",
      "Security",
    ],
    correctAnswer: 3,
    explanation:
      "<p>Security means encrypting the data to protect it from unauthorized access.</p>",
    arabicExplanation:
      "<p>هنا المقصود ان البيانات تتشفر عشان محدش يقدر يقراها وهتوصل سرية للمستقبل.</p>",
  },
  {
    id: 23,
    question:
      "The Internet’s network layer provides a single service, known as.................................",
    options: [
      "best-effort service.",
      "DSL service",
      "Both a and b",
      "None of the above",
    ],
    correctAnswer: 0,
    explanation:
      "<p>The Internet’s network layer does its best to deliver packets but doesn’t guarantee delivery.</p>",
    arabicExplanation:
      "<p>الشبكة هنا بتعمل اللي تقدر عليه، بس مش بتوعدك ان الباكتات هتوصل كلها 100%.</p>",
  },
  {
    id: 24,
    question:
      "The functions that are performed by the input link of the router includes:",
    options: [
      "physical layer functions",
      "link-layer functions",
      "lookup function",
      "all of the above",
    ],
    correctAnswer: 3,
    explanation:
      "<p>All these functions are involved in getting the incoming data ready for forwarding.</p>",
    arabicExplanation:
      "<p>وصلة الدخول دي بتعمل كل الحاجات دي: من طبقة فيزيائية، لينك لير، وتلاقي مين هيبعتله الباكت (lookup).</p>",
  },
  {
    id: 25,
    question:
      "................................. connects the router’s input ports to its output ports.",
    options: [
      "Switching fabric",
      "Input link",
      "Output link",
      "Routing processor",
    ],
    correctAnswer: 0,
    explanation:
      "<p>The switching fabric is the part of the router that connects input interfaces to output interfaces.</p>",
    arabicExplanation:
      "<p>Switching fabric دي هي اللي بتوصل مداخل الراوتر لمخارجه (زي المفترق اللي بيحدد مين هيروح فين).</p>",
  },
  {
    id: 26,
    question:
      "................................. stores packets received from the switching fabric and transmits these packets on the outgoing link by performing the necessary link-layer and physical-layer functions.",
    options: [
      "Switching fabric",
      "Input link",
      "Output link",
      "Routing processor",
    ],
    correctAnswer: 2,
    explanation:
      "<p>The output link is responsible for finalizing the packet and sending it to the next hop.</p>",
    arabicExplanation:
      "<p>Output link ده هو اللي بياخد الباكت بعد ما يتحضر وبعدين يبعته للجهة اللي بعده.</p>",
  },
  {
    id: 27,
    question:
      "................................. performs control-plane functions.",
    options: [
      "Switching fabric",
      "Input link",
      "Output link",
      "Routing processor",
    ],
    correctAnswer: 3,
    explanation:
      "<p>The routing processor does the smart decisions about where packets should go, using routing algorithms.</p>",
    arabicExplanation:
      "<p>Routing processor ده بمثابة عقل الراوتر، بيقرر الباكتات هتروح فين بالظبط.</p>",
  },
  {
    id: 28,
    question:
      "In traditional routers, ................ executes the routing protocols, maintains routing tables and attached link state information, and computes the forwarding table for the router.",
    options: [
      "Switching fabric",
      "Input link",
      "Output link",
      "Routing processor",
    ],
    correctAnswer: 3,
    explanation:
      "<p>The routing processor is the brain of the router, handling routing tasks and updating the forwarding table.</p>",
    arabicExplanation:
      "<p>الـ Routing processor زي مخ الراوتر، بيحسب الطريق ويحافظ عالجدول بتاع التوجيه (forwarding table).</p>",
  },
  {
    id: 29,
    question:
      "In SDN routers, ................ is responsible for communicating with the remote controller in order to (among other activities) receive forwarding table entries computed by the remote controller and install these entries in the router’s input ports.",
    options: [
      "Switching fabric",
      "Input link",
      "Output link",
      "Routing processor",
    ],
    correctAnswer: 3,
    explanation:
      "<p>Even in SDN, the routing processor communicates with the controller to get the instructions.</p>",
    arabicExplanation:
      "<p>في SDN، الـ Routing processor بيكلم الكنترولر (سيرفر رئيسي) عشان ياخد منه التوجيهات.</p>",
  },
  {
    id: 30,
    question:
      "Using the following forwarding table, determine the link interface for the packet containing the following address, 11001000 00010111 00010110 10100001",
    options: ["0", "1", "2", "3"],
    correctAnswer: 0,
    explanation:
      "<p>The address matches the first prefix in the forwarding table, so the packet is forwarded on interface 0.</p>",
    arabicExplanation:
      "<p>العنوان هنا شبه الـ prefix الأول في الجدول، فالراوتر هيبعته عالانترفيس رقم 0.</p>",
  },
  {
    id: 31,
    question:
      "Using the following forwarding table, determine the link interface for the packet containing the following address, 11001000 00010111 00011000 10101010",
    options: ["0", "1", "2", "3"],
    correctAnswer: 1,
    explanation:
      "<p>The address matches the second prefix, which forwards the packet to interface 1.</p>",
    arabicExplanation:
      "<p>العنوان هنا شبه الـ prefix التاني في الجدول، فهيمشي على الانترفيس رقم 1.</p>",
  },
  {
    id: 32,
    question:
      "In the switching via ................., An input port with an arriving packet first signaled the routing processor via an interrupt.",
    options: ["Memory", "Bus", "Crossbar", "None of the above"],
    correctAnswer: 0,
    explanation:
      "<p>Memory-based switching uses the routing processor to handle the lookup when a packet arrives.</p>",
    arabicExplanation:
      "<p>في الذاكرة (memory)، الباكت لما يوصل بيشاور عالـ routing processor يقول له شوف دي تروح فين.</p>",
  },
  {
    id: 33,
    question:
      "In the switching via ................. , the lookup function is performed by routing processing.",
    options: ["Memory", "Bus", "Crossbar", "None of the above"],
    correctAnswer: 0,
    explanation:
      "<p>When using memory-based switching, the routing processor is responsible for doing the lookup.</p>",
    arabicExplanation:
      "<p>في الـ memory، الـ routing processor هو اللي بيشوف عنوان الباكت يروح فين.</p>",
  },
  {
    id: 34,
    question:
      "In the switching via ................. , an input port transfers a packet directly to the output port over a shared bus, without intervention by the routing processor.",
    options: ["Memory", "Bus", "Crossbar", "None of the above"],
    correctAnswer: 1,
    explanation:
      "<p>Bus-based switching doesn’t involve the routing processor for transferring packets.</p>",
    arabicExplanation:
      "<p>في الـ bus، الباكت بيروح لوحده (من غير تدخل الـ routing processor).</p>",
  },
  {
    id: 35,
    question:
      "In the switching via Memory , the lookup function is performed by .....................",
    options: [
      "Switching fabric",
      "Input link",
      "Output link",
      "Routing processor",
    ],
    correctAnswer: 3,
    explanation:
      "<p>The routing processor does the lookup in memory-based switching.</p>",
    arabicExplanation:
      "<p>الـ routing processor بيبص في الذاكرة ويشوف الباكت هيتبعت فين.</p>",
  },
  {
    id: 36,
    question:
      "In the switching via ................. , the lookup function is performed by input link.",
    options: ["Memory", "Bus", "Crossbar", "None of the above"],
    correctAnswer: 1,
    explanation:
      "<p>In bus-based switching, the input link itself does the lookup for where to send the packet.</p>",
    arabicExplanation:
      "<p>في الـ bus، input link بيشوف بنفسه الباكت ده يروح فين.</p>",
  },
  {
    id: 37,
    question:
      "In the switching via bus , the lookup function is performed by .....................",
    options: [
      "Switching fabric",
      "Input link",
      "Output link",
      "Routing processor",
    ],
    correctAnswer: 1,
    explanation:
      "<p>In bus-based switching, the input link is responsible for looking up the next hop for the packet.</p>",
    arabicExplanation:
      "<p>في نظام الـ bus، الـ input link نفسه هو اللي بيقرر الباكت يروح لمين.</p>",
  },
  {
    id: 38,
    question:
      "......................... scheduling discipline selects packets for link transmission in the same order in which they arrived at the output link queue.",
    options: [
      "FIFO",
      "Priority Queuing",
      "Round Robin and Weighted Fair Queuing (WFQ)",
      "None of the above",
    ],
    correctAnswer: 0,
    explanation:
      "<p>FIFO means First In First Out – packets leave in the same order they arrived.</p>",
    arabicExplanation:
      "<p>FIFO معناها اللي يوصل الأول يطلع الأول – زي طابور في السوبر ماركت!</p>",
  },
  {
    id: 39,
    question:
      "......................... packets arriving at the output link are classified into priority classes upon arrival at the queue",
    options: [
      "FIFO",
      "Priority Queuing",
      "Round Robin and Weighted Fair Queuing (WFQ)",
      "None the above",
    ],
    correctAnswer: 1,
    explanation:
      "<p>Priority Queuing assigns each packet to a priority level for later processing.</p>",
    arabicExplanation:
      "<p>الـ Priority Queuing يعني الشبكة بتشوف الباكت ده مهم ولا عادي عشان تحدد هيتم التعامل معاه ازاي.</p>",
  },
  {
    id: 40,
    question:
      "......................... in which if the output link is processing a lowest priority packet and a highest priority one arrives, then the processing of the lowest priority stopped to process the highest priority packet first.",
    options: [
      "FIFO",
      "Preemptive priority queuing",
      "None-Preemptive priority queuing",
      "Round Robin and Weighted Fair Queuing (WFQ)",
    ],
    correctAnswer: 1,
    explanation:
      "<p>Preemptive means high priority packets interrupt the lower priority packets’ processing.</p>",
    arabicExplanation:
      "<p>Preemptive يعني لو جا باكت مهم بيوقف الباكت العادي ويديه أولوية فورا.</p>",
  },
  {
    id: 41,
    question:
      "In the ......................... discipline, the transmission of a packet is not interrupted once it has begun.",
    options: [
      "FIFO",
      "Preemptive priority queuing",
      "None-Preemptive priority queuing",
      "Round Robin and Weighted Fair Queuing (WFQ)",
    ],
    correctAnswer: 2,
    explanation:
      "<p>Non-preemptive means once a packet is being transmitted, it won’t be interrupted.</p>",
    arabicExplanation:
      "<p>Non-preemptive يعني لو باكت بدأ يتبعت، هيكمل للآخر ومش هيتلغي في النص.</p>",
  },
  {
    id: 42,
    question:
      "......................... will serve classes in a circular manner— first serving class 1, then serving class 2, then serving class 3, and then",
    options: [
      "FIFO",
      "Preemptive priority queuing",
      "None-Preemptive priority queuing",
      "Round Robin and Weighted Fair Queuing (WFQ)",
    ],
    correctAnswer: 3,
    explanation:
      "<p>Round Robin and WFQ cycle through classes to give each class a fair share of bandwidth.</p>",
    arabicExplanation:
      "<p>Round Robin و WFQ بيخلوا كل الكلاسات (أو الأولويات) تاخد دورها بالعدل واحد ورا التاني.</p>",
  },
  {
    id: 43,
    question:
      "The 223.1.2.0/28 subnet thus consists of the two host interfaces (223.1.2.1 and 223.1.2.2) and one router interface (223.1.2.6). The maximum number of hosts within this subnet = ......................... hosts.",
    options: ["15", "14", "16", "12"],
    correctAnswer: 1,
    explanation:
      "<p>With /28 subnet (16 addresses) minus 2 reserved (network and broadcast), you get 14 usable addresses.</p>",
    arabicExplanation:
      "<p>في شبكة /28، بنطرح 2 للـ network و broadcast، يبقى معاك 14 عنوان فعلي تقدر تستخدمه.</p>",
  },
];
