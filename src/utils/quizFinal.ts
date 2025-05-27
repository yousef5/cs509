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
      "User datagram protocol guarantees message delivery and prevents errors.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "<p>This is false. UDP (User Datagram Protocol) does not guarantee delivery of messages or error prevention. It is a connectionless protocol – it sends data without establishing a reliable connection like TCP.</p>",
    arabicExplanation:
      "<p>ده غلط. UDP مش بروتوكول موثوق، يعني مش بيضمن وصول البيانات ولا بيمنع الأخطاء. هو شغال بطريقة 'best effort' يعني بيبعت الباكيتات وخلاص، لو راحت راحت، لو وقعت في السكة عادي. مش زي TCP اللي بيتأكد إن الباكيت وصلت ويعيدها لو وقعت.</p><p>مثال: لو بتبعت لايف فيديو على النت (streaming)، هيبقى شغال بـ UDP. ليه؟ لأنه أسرع ومش مهم لو شوية فريمات وقعت، الفيديو هيفضل ماشي. لكن لو بتبعت فايل مهم، لازم TCP عشان يضمن يوصل كله.</p>",
  },
  {
    id: 2,
    question:
      "The forward table of router is stored in the memory of its input port.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "<p>This is true. Routers store their forwarding tables (Forwarding Information Base - FIB) in the fast memory of the input ports for faster lookups. This allows quick decisions about where to send packets based on their destination address.</p>",
    arabicExplanation:
      "<p>ده صح. الراوتر عنده جدول توجيه (اسمه Forwarding Table أو FIB - Forwarding Information Base). الجدول ده بيتخزن في الذاكرة بتاعة مدخلات الراوتر (input ports)، وده بيخلي الراوتر يقدر يقرر بسرعة يبعث الباكيتات دي على أي مخرج (output port) حسب العنوان بتاعها.</p><p>📌 مثال عملي: تخيل إنك شغال في سوبر ماركت، وكل موظف واقف في مدخل وبيشوف الطلبات اللي جاية (الباكيتات). الموظف ده عنده ورقة فيها جدول مكتوب فيه: 'لو جا طلب رقم 10، وديه على القسم الفلاني'. كل موظف بيحتفظ بالورقة دي معاه مش في مكتب المدير، عشان يقرر بسرعة ومفيش وقت يضيع.</p><p>✅ ليه؟ عشان لو كل مرة الموظف يروح يسأل المدير (زي لو الجدول موجود بعيد)، هيضيع وقت كتير! لكن لما الجدول معاه، يقرر فورًا.</p><p>💡 في الشبكات: الراوتر بيشتغل بنفس الفكرة، بيحتفظ بالجدول في input port memory عشان يقلل زمن اتخاذ القرار (forwarding decision) ويوصل البيانات أسرع.</p>",
  },
  {
    id: 3,
    question:
      "In NAT, just one IP address needed from provider ISP for all host in local network.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "<p>This is true. NAT (Network Address Translation) allows multiple devices on a local network to share a single public IP address assigned by the ISP. NAT translates the private IP addresses of local devices to the single public IP when they communicate with the outside world.</p>",
    arabicExplanation:
      "<p>ده صح. في الـ NAT (Network Address Translation)، الأجهزة اللي في الشبكة الداخلية (زي الراوتر والأجهزة الموصلة عليه) بتشارك نفس الـ public IP اللي بتديه شركة الإنترنت (ISP). يعني بدل ما كل جهاز ياخد IP لوحده من الشركة، الراوتر بيبقى عنده IP واحد بس ظاهر لبرا، وهو بيحول عناوين الأجهزة الداخلية (private IP) عشان البيانات توصل وتترجع تاني.</p><p>📌 مثال عملي: تخيل إنك ساكن في بيت ومعاك 5 موبايلات كلها شغالة على نفس شبكة الواي فاي. الشركة اللي بتديك الإنترنت (ISP) شايفة بس الراوتر بتاعك بعنوان IP واحد، مش شايفة كل موبايل لوحده. لكن جوة البيت، كل جهاز واخد IP خاص بيه (زي 192.168.1.5). اللي بيعمل التحويل ده هو الراوتر بالـ NAT.</p><p>💡 فايدة الـ NAT إنه بيقلل استهلاك عناوين الإنترنت العامة (public IPs) وبيزود الحماية شويه، عشان الأجهزة الداخلية مش ظاهرة مباشرة للإنترنت.</p><p>✅ كده: كل الشبكة الداخلية بتستعمل IP واحد بس من الشركة (الـ public IP) عن طريق الراوتر و NAT.</p>",
  },
  {
    id: 4,
    question: "Routing algorithm determines local forwarding at a router.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "<p>This is false. The forwarding table (not the routing algorithm) determines local forwarding decisions in a router. Routing algorithms calculate the routes and update the forwarding table, but actual forwarding uses the table only.</p>",
    arabicExplanation:
      "<p>ده غلط. اللي بيحدد التوجيه المحلي (local forwarding) في الراوتر هو جدول التوجيه (forwarding table) مش الـ routing algorithm. الـ routing algorithm وظيفته إنه يحسب أحسن طريق (route) ويوصل المعلومة للجدول، لكن لما ييجي دور الباكيت، الراوتر بيبص بس على الجدول مش بيعيد الحسابات.</p><p>📌 مثال عملي: زي ما تكون شغال في مطار. الكابتن (routing algorithm) بيخطط الرحلات (routes) وبيحدث اللوحات (جدول التوجيه). بس لما ييجي راكب يدخل المطار، الموظف (الراوتر) بيشوف اللوحة (الجدول) عشان يقرر هيدخل على أي بوابة، مش بيروح يسأل الكابتن.</p><p>✅ خلاصة: التوجيه المحلي بسرعة بيتعامل مع الجدول، مش مع طريقة الحساب نفسها.</p>",
  },
  {
    id: 5,
    question:
      "Human communications needs 2-way handshake procedure to setup a connection.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "<p>This is true. In communications, a 2-way handshake is essential for establishing a reliable connection between two parties.</p>",
    arabicExplanation:
      "<p>ده صح. في أي تواصل (حتى البشري)، لازم يكون في تأكيد بين الطرفين قبل ما نبدأ نتكلم فعليًا. يعني: واحد بيقول 'هلو' والتاني بيرد 'هلو'، وبعدين يبدأوا الحوار. في الشبكات نفس الفكرة! لازم يحصل حاجة زي 2-way handshake قبل ما البيانات تتنقل عشان يضمنوا إن الطرفين جاهزين.</p><p>✅ في البروتوكولات: TCP بيستخدم حاجة اسمها 3-way handshake، اللي هي عبارة عن 2-way handshake مع خطوة زيادة للتأكيد أكتر!</p>",
  },
  {
    id: 6,
    question:
      "In tunneling, IPv6 datagram is carried as payload in IPv4 datagram among IPv4 routers.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "<p>This is true. In tunneling, IPv6 data is encapsulated inside IPv4 packets to allow IPv6 traffic to pass through IPv4-only networks.</p>",
    arabicExplanation:
      "<p>ده صح. الـ tunneling بيخلي البيانات بتاعة IPv6 تتلفف وتتغلف في باكيتات IPv4. زي ما تحط حاجة غالية في كرتونة أرخص عشان توصل بيها! ده بيحصل لما الشبكة اللي ماشية فيها الباكيت مش بتدعم IPv6، فبيشيلوها جوه IPv4 عشان تعدي.</p>",
  },
  {
    id: 7,
    question: "HTTP protocol is implemented in host and router.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "<p>This is false. HTTP runs only on hosts (clients and servers), not routers.</p>",
    arabicExplanation:
      "<p>ده غلط. بروتوكول HTTP شغال بس على الأجهزة (clients و servers) اللي بتتواصل مع بعض. الراوترات ما بتشغلش HTTP، هي بتشيل البيانات من وإلى بس، زي واحد بيوصل طرود بس مش بيستخدمها!</p>",
  },
  {
    id: 8,
    question:
      "End-point authentication is the best defense mechanism against DoS attacks.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "<p>This is false. End-point authentication helps ensure you’re talking to the right entity, but it doesn’t prevent Denial of Service (DoS) attacks, which overwhelm the network.</p>",
    arabicExplanation:
      "<p>ده غلط. الـ end-point authentication بيأكد إنك بتكلم الطرف الصح (زي لما تتحقق من هوية حد). بس هجمات DoS بتشتغل عن طريق إغراق السيرفر بكمية ضخمة من الطلبات عشان يقع، وده مش بيتحل بالتحقق بس، لازم حلول تانية زي firewall و load balancing.</p>",
  },
  {
    id: 9,
    question:
      "In CIDR, x means the number of bits in subnet portion of address format: a.b.c.d/x.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "<p>This is true. In CIDR notation, the 'x' is the number of bits used for the network/subnet.</p>",
    arabicExplanation:
      "<p>ده صح. في نظام CIDR (Classless Inter-Domain Routing)، الرقم اللي بعد الشرطة المائلة (/) بيديك عدد البتات اللي بتحدد جزء الشبكة (subnet). يعني مثلاً: لو عندك عنوان 192.168.1.0/24، الرقم 24 معناه إن أول 24 بت من العنوان هما اللي بيحددوا الشبكة، والباقي للأجهزة.</p><p>📌 طيب ليه الكلام ده مهم؟ لأن CIDR بيساعدك تقسّم الشبكة حسب احتياجاتك. لو عندك 100 جهاز، هتختار /25 أو /26 عشان تناسب العدد ده، مش هتستخدم /24 لو مش محتاج عدد أكبر.</p><p>✅ أمثلة حقيقية بالعامية:</p><ul><li>192.168.1.0/24 → هنا أول 24 بت للشبكة، وده بيديك 256 عنوان مختلف (من 0 ل 255). دول للأجهزة.</li><li>10.0.0.0/8 → هنا أول 8 بت للشبكة، وده بيخلي الشبكة كبيرة جدًا (حوالي 16 مليون عنوان!).</li><li>172.16.0.0/12 → هنا أول 12 بت بس للشبكة، والباقي للأجهزة، فالشبكة متوسطة الحجم.</li></ul><p>💡 باختصار: الرقم بعد الشرطة (x) بيحدد قدي إيه الشبكة واسعة وكام جهاز تقدر تحط فيها. كل ما الرقم زاد، الشبكة أصغر (يعني فيها عدد أجهزة أقل)، وكل ما الرقم قل، الشبكة تكبر.</p>",
  },
  {
    id: 10,
    question:
      "Connectionless service must first setup connection between two involved hosts.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "<p>This is false. Connectionless services (like UDP) do not set up a dedicated connection before sending data.</p>",
    arabicExplanation:
      "<p>ده غلط. الخدمة اللي ملهاش اتصال (connectionless) زي UDP مش بتحتاج تفتح خط خاص قبل ما تبعت البيانات. بتبعت على طول وخلاص. ده عكس TCP اللي لازم يتأكد إن الخط مفتوح بين الجهازين قبل ما يبدأ ينقل البيانات.</p><p>✅ مثال: زي لما تزعق لحد في الشارع من غير ما تستأذن. بس لو هتتصل بتليفون، لازم الأول تفتح الخط (connection-oriented).</p>",
  },
  {
    id: 11,
    question:
      "The Discover and Offer broadcast messages of DHCP are mandatory.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "<p>This is true. In the DHCP (Dynamic Host Configuration Protocol) process, the Discover and Offer messages are essential for the initial handshake and IP address assignment process.</p>",
    arabicExplanation:
      "<p>ده صح. في بروتوكول DHCP اللي بيدي عنوان IP للجهاز بشكل تلقائي، لازم يحصل أول مرحلتين هما Discover و Offer. الأول، الجهاز (العميل) بيبعت رسالة Discover لكل الأجهزة في الشبكة (broadcast) عشان يقول: 'فيه سيرفر DHCP هنا يساعدني؟' بعدين السيرفر بيرد عليه برسالة Offer يقوله فيها: 'أنا موجود، ودي IP جاهز ليك.'</p><p>✅ بدون الرسالتين دول، الجهاز مش هيقدر ياخد عنوان IP من الشبكة ومش هيتوصل بالنت. الرسالتين دول زي ما يكونوا ترحيب وتعريف بين الجهاز والشبكة، لازم يحصلوا الأول عشان الباقي يمشي تمام.</p><p>📌 مثال: لما تدخل أي كافيه ومعاك اللابتوب، أول ما تفتح الواي فاي، بيبدأ جهازك يبعت طلب (Discover) يشوف لو في DHCP موجود. لو موجود، السيرفر بيرد عليه بـ (Offer) يقول: 'أنا معاك يا معلم، ودي IP جديد ليك'.</p>",
  },
  {
    id: 12,
    question:
      "IPv4 allows datagram fragmentation and variable length of datagram header.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "<p>This is true. IPv4 supports fragmentation, which means breaking large packets into smaller fragments to fit the maximum transmission unit (MTU) of the network. Also, the IPv4 header has optional fields that make its length variable.</p>",
    arabicExplanation:
      "<p>ده صح. بروتوكول IPv4 بيسمح بتقطيع الباكيتات الكبيرة (fragmentation) عشان تعدي الشبكات اللي عندها حجم أقصى معين (MTU). يعني لو عندك باكيت حجمها 2000 بايت، بس الشبكة بتقبل 1500 بس، الراوتر بيكسر الباكيت دي لجزئين. كده البيانات توصل بدون مشاكل.</p><p>💡 كمان هيدر IPv4 مش ثابت الطول! ليه؟ لأنه ممكن يكون فيه خيارات (options) زيادة حسب الحاجة، فالهيدر ممكن يكون 20 بايت أو أكتر. زي لما تحط شوية بيانات زيادة في مظروف كبير.</p><p>📌 مثال: لو بتبعت فايل كبير عبر النت، الباكيتات الكبيرة اللي بتتعدى MTU بتتقطع في النص، والراوترات بتعرف تعيد ترتيبها تاني عشان توصل صح.</p>",
  },
  {
    id: 13,
    question:
      "Transport segment is created by appending a transport header to an application packet.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "<p>This is true. In the OSI model, when data moves from the Application Layer to the Transport Layer, the transport layer (like TCP or UDP) adds its own header to the application data, creating what’s called a 'transport segment'.</p>",
    arabicExplanation:
      "<p>ده صح. لما البيانات بتاعتك (زي رسالة أو فايل) بتتحرك من طبقة الـ Application (اللي فيها التطبيقات اللي بتستخدمها) وتنزل لطبقة الـ Transport (اللي فيها بروتوكولات زي TCP و UDP)، الطبقة دي بتحط هيدر خاص بيها (زي العنوان ووسيلة النقل). النتيجة: بيتعمل Transport segment.</p><p>📌 مثال: لو بتكلم صاحبك على واتساب، الرسالة (application data) بتنزل لطبقة الـ Transport، وبعدين الـ TCP أو UDP بيحط الهيدر بتاعه (زي العنوان بتاع المرسل والمستقبل)، وبكده يطلع عندنا Transport segment.</p><p>💡 الفايدة: الهيدر ده مهم عشان يعرف الجهاز التاني الرسالة جاية منين ورايحة فين، وكمان لو في أكتر من محادثة شغالة، يفرق بينهم.</p>",
  },
  {
    id: 14,
    question:
      "Switching datagrams from input port(s) to output port(s) inside router is performed in decentralized form without interruptions of router processor.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "<p>This is true. Modern routers perform switching between input and output ports in a decentralized way (like crossbar switches or bus architectures) so the main processor of the router is not interrupted for every packet.</p>",
    arabicExplanation:
      "<p>ده صح. في الراوترات الحديثة، عملية تحويل الباكيتات من مدخلات (input ports) لمخارج (output ports) بتتعمل بشكل لامركزي (decentralized). يعني مش كل باكيت بيستنى الراوتر يعالجه بنفسه (الـ processor)، لأ! عندنا أنظمة خاصة جوة الراوتر (زي crossbar switching) بتاخد الباكيت وتوديها بسرعة من غير ما تعطل البروسيسور الرئيسي.</p><p>📌 مثال بالعامية: تخيل إنك في مصنع فيه موظف رئيسي (الراوتر processor) قاعد بيخطط كل حاجة. بس عنده سيور نقل (crossbar/bus) بتنقل البضاعة بين المداخل والمخارج بسرعة من غير ما الموظف ده يشوف كل كرتونة بنفسه! الموظف بس بيشرف على كل حاجة بس مش بيتدخل في كل باكيت.</p><p>✅ الفايدة: ده بيخلي الراوتر أسرع بكتير، عشان البروسيسور يركز بس على القرارات الكبيرة، والعمليات البسيطة زي تحويل الباكيتات بتتعمل بسرعة في الخلفية.</p>",
  },
  {
    id: 15,
    question:
      "Presenting an address to ___ memory in router retrieves the stored address with longest prefix matching in one clock cycle, regardless of forward table size.",
    options: ["TCAM", "SCAM", "DCAM", "RCAM"],
    correctAnswer: 0,
    explanation:
      "<p>This is true. TCAM (Ternary Content-Addressable Memory) can perform the longest prefix match lookup in a single clock cycle regardless of the table size. It's a special memory used in high-speed routers to quickly find matching entries.</p>",
    arabicExplanation:
      "<p>ده صح. الذاكرة اللي اسمها TCAM (Ternary Content-Addressable Memory) شغالة زي السحر في الراوترات السريعة! ليه؟ لأنها بتقدر تدور على العنوان اللي بيطابق أكتر (longest prefix matching) في جدول التوجيه في خطوة واحدة بس (one clock cycle). يعني مهما كان حجم الجدول كبير، السرعة واحدة. </p><p>✅ تخيلها كده: لو في جدول كبير زي دفتر تليفونات فيه آلاف الأرقام، وانت عايز تلاقي رقم بيبدأ بنفس البادئة (prefix) بتاعت رقم معين، TCAM بتجيبلك الرقم الصح في ثانية واحدة بس من غير ما تلف على الجدول كله.</p><p>📌 ليه مهم؟ عشان الراوترات الكبيرة لازم تتعامل مع ملايين الباكيتات في الثانية، وده مستحيل يحصل لو هنلف الجدول عادي. فـ TCAM بتحل المشكلة دي.</p>",
  },
  {
    id: 16,
    question:
      "In router, the switching via memory causes ___ bus crossings per datagram.",
    options: ["two", "three", "four", "five"],
    correctAnswer: 0,
    explanation:
      "<p>This is true. In routers that use memory-based switching, each datagram crosses the system bus twice: once from input port to memory, and once from memory to output port.</p>",
    arabicExplanation:
      "<p>ده صح. لو الراوتر شغال بطريقة memory-based switching، الباكيت بيعدي الباص مرتين: مرة وهو داخل من الـ input port للميموري، ومرة وهو طالع من الميموري للـ output port. زي ما تكون بتحط الحاجة جوه دولاب وبعدين تطلعها تاني.</p><p>✅ ده بيزود شوية وقت المعالجة، بس بيسهل على الراوتر التعامل مع الباكيتات الكتير.</p>",
  },
  {
    id: 17,
    question:
      "___ is a malware can record keystrokes, visited web sites, social security numbers, or passwords and upload that info to collection site.",
    options: ["Virus", "Trojan", "Worm", "Spyware"],
    correctAnswer: 3,
    explanation:
      "<p>This is true. Spyware is designed to secretly monitor user activity and gather personal info.</p>",
    arabicExplanation:
      "<p>ده صح. الـ Spyware عبارة عن برنامج تجسس خفي بيقدر يسجل كل حاجة بتعملها على جهازك: ضغطات الكيبورد، المواقع اللي زرتها، وأرقامك السرية! وبعد كده بيبعتها لمكان تاني (collection site).</p><p>📌 مثال: زي لما تفتح موقع مشبوه بالصدفة، ويبدأ spyware يشتغل من وراك عشان يسرق بياناتك.</p>",
  },
  {
    id: 18,
    question:
      "___ are remote controllers computes, which install forwarding tables in routers.",
    options: ["FDN", "SDN", "RDN", "CDN"],
    correctAnswer: 1,
    explanation:
      "<p>This is true. SDN (Software Defined Networking) uses external controllers to program and manage forwarding tables inside routers and switches.</p>",
    arabicExplanation:
      "<p>ده صح. في عالم الشبكات، SDN (Software Defined Networking) معناها إنك تقدر تدير الشبكة كلها ببرنامج من برة (remote controller). البرنامج ده بيقول للراوترات: 'حطوا الجداول دي هنا' و'ابعتوا الباكيتات دي هنا'.</p><p>✅ دي طريقة حديثة ومرنة عشان تتحكم في الشبكة بسهولة وتعمل تحسينات بدون ما تغير الأجهزة نفسها.</p>",
  },
  {
    id: 19,
    question:
      "ICANN allocates IP addresses, through ___ regional registries who may then reallocate to local registries.",
    options: ["two", "three", "four", "five"],
    correctAnswer: 3,
    explanation:
      "<p>This is true. ICANN allocates global IP addresses via 5 Regional Internet Registries (RIRs).</p>",
    arabicExplanation:
      "<p>ده صح. منظمة ICANN بتقسم عناوين الإنترنت على مستوى العالم من خلال 5 هيئات إقليمية (RIRs)، زي ARIN, RIPE, APNIC... دول مسؤولين عن توزيع العناوين للدول والمزودين المحليين.</p><p>📌 مثال: لو أنت في مصر، العناوين بتتوزع من خلال RIPE.</p>",
  },
  {
    id: 20,
    question:
      "TCP applies ___ approach to control congestion and reduce segments loss.",
    options: ["MDAI", "ADMI", "AIMD", "MIAD"],
    correctAnswer: 2,
    explanation:
      "<p>This is true. TCP uses AIMD (Additive Increase Multiplicative Decrease) for congestion control: it slowly increases sending rate until congestion is detected, then quickly decreases to avoid packet loss.</p>",
    arabicExplanation:
      "<p>ده صح. TCP بيستخدم تقنية اسمها AIMD عشان يتحكم في الزحمة (congestion): لما الشبكة فاضية بيزود سرعة الإرسال شوية شوية (additive increase)، لكن لو لقى زحمة فجأة بيقلل السرعة بسرعة (multiplicative decrease). زي ما تكون سايق العربية وبتزوّد شوية بشوية، ولو لقيت زحمة بفرامل فجأة.</p>",
  },
  {
    id: 21,
    question: "DNS resource record have ___ types.",
    options: ["five", "three", "four", "two"],
    correctAnswer: 2,
    explanation:
      "<p>This is true. The main resource record types in DNS include A, AAAA, CNAME, and MX.</p>",
    arabicExplanation:
      "<p>ده صح. في سجلات أساسية في الـ DNS عشان تشتغل الدومينات: زي A record (عنوان IPv4)، AAAA (IPv6)، CNAME (الاسم البديل)، MX (سيرفر الإيميلات). دول الأربع أساسيين اللي أي سيرفر DNS لازم يعرفهم.</p><p>📌 مثال: لو عندك موقع، لازم تعرف السيرفر بتاعه عنوانه (A) وكمان لو عندك إيميلات (MX) وهكذا.</p>",
  },
  {
    id: 22,
    question: "Computers communication model involves ___ key elements.",
    options: ["two", "three", "four", "five"],
    correctAnswer: 3,
    explanation:
      "<p>This is true. Communication models typically include five key elements: sender, receiver, message, medium, and protocol.</p>",
    arabicExplanation:
      "<p>ده صح. أي نموذج تواصل (communication model) بيتكون من خمس عناصر أساسية: المرسل (sender)، المستقبل (receiver)، الرسالة (message)، الوسط الناقل (medium)، والبروتوكول اللي بينهم (protocol). زي ما تكون بتتكلم مع حد، لازم يكون فيكوا الاتنين (sender وreceiver)، وحد بيتكلم (message)، والهوا أو الشبكة بتنقل الكلام (medium)، وكمان طريقة الكلام المتفق عليها (protocol).</p>",
  },
  {
    id: 23,
    question: "Hosts and DNS servers communicate over UDP using port ___.",
    options: ["53", "80", "20", "25"],
    correctAnswer: 0,
    explanation:
      "<p>This is true. DNS typically uses UDP port 53 for quick and small queries.</p>",
    arabicExplanation:
      "<p>ده صح. الـ DNS دايمًا بيستخدم بورت 53 عشان يرد على الأسئلة بسرعة من غير ما يعمل اتصال معقد. يعني زي ما تكون بتسأل حد على عنوان، وبتاخد الرد بسرعة وخلاص!</p>",
  },
  {
    id: 24,
    question:
      "___ is the incentive mechanism for file distribution in Bit-Torrent.",
    options: ["Step-By-Step", "Tit-For-Tat", "One-After-One", "Back-To-Back"],
    correctAnswer: 1,
    explanation:
      "<p>This is true. BitTorrent uses a 'tit-for-tat' strategy to encourage peers to share files fairly by rewarding those who upload more.</p>",
    arabicExplanation:
      "<p>ده صح. BitTorrent بيستخدم طريقة اسمها 'Tit-For-Tat' يعني: لو أنت شغال كويس وبتشارك ملفات، الناس هتشارك معاك برضه. زي نظام المقايضة: اللي يدي ياخد!</p>",
  },
  {
    id: 25,
    question:
      "The occurrence of at least one of ___ actions triggers TCP segment retransmission.",
    options: ["two", "three", "four", "five"],
    correctAnswer: 0,
    explanation:
      "<p>This is true. If either a timeout or three duplicate ACKs occur, TCP triggers retransmission of a segment.</p>",
    arabicExplanation:
      "<p>ده صح. في بروتوكول TCP، لو حصل حاجة من اتنين: يا إما الباكيت متأخرة جدًا (timeout) أو المستقبل بعتلك 3 رسائل متكررة (duplicate ACKs)، ساعتها TCP يعيد إرسال الباكيت اللي ضاعت.</p>",
  },
  {
    id: 26,
    question:
      "To reduce processing time at each hop, IPv6 removed ___ field that was in IPv4 header.",
    options: ["hop limit", "checksum", "version", "flow label"],
    correctAnswer: 1,
    explanation:
      "<p>This is true. IPv6 removed the checksum field to speed up packet processing.</p>",
    arabicExplanation:
      "<p>ده صح. الـ IPv6 شال خانة الـ checksum اللي كانت موجودة في IPv4. ليه؟ عشان كل راوتر كان لازم يحسب الـ checksum ده كل مرة الباكيت يعدي عليه، وده بياخد وقت. فـ IPv6 شالها خالص لتسريع التوصيل.</p>",
  },
  {
    id: 27,
    question: "The number of all DHCP messages is ___.",
    options: ["five", "four", "three", "two"],
    correctAnswer: 1,
    explanation:
      "<p>This is true. DHCP has four main message types: Discover, Offer, Request, and Acknowledgment.</p>",
    arabicExplanation:
      "<p>ده صح. بروتوكول DHCP فيه 4 رسائل أساسية: Discover (الجهاز بيدور على السيرفر)، Offer (السيرفر بيرد عليه ويعرض IP)، Request (الجهاز يطلب رسميًا)، Acknowledgment (السيرفر يوافق). زي ما تكون بتتعرف على حد جديد في شغلك: تسأل، يرد، تطلب رسميًا، يوافق!</p>",
  },
  {
    id: 28,
    question:
      "In communication model, the ___ means the host that generates data to be transmitted.",
    options: ["source", "destination", "transmitter", "receiver"],
    correctAnswer: 0,
    explanation:
      "<p>This is true. The 'source' is the device or host that creates and sends the data.</p>",
    arabicExplanation:
      "<p>ده صح. المصدر (source) هو الجهاز أو الشخص اللي بيبدأ الكلام وبيبعت البيانات. زي لما تكون إنت اللي بتكتب الرسالة على الموبايل، يبقى إنت الـ source.</p>",
  },
  {
    id: 29,
    question: "___ services are provided by DNS server to hosts.",
    options: ["Two", "Three", "Four", "Five"],
    correctAnswer: 2,
    explanation:
      "<p>This is true. DNS provides four main services: Host name to IP address mapping, IP address to host name mapping (reverse), mail server aliasing (MX), and load distribution (using multiple IPs).</p>",
    arabicExplanation:
      "<p>ده صح. الـ DNS بيقدم 4 خدمات أساسية: أولًا تحويل الاسم لعناوين (name to IP)، ثانيًا العكس (IP to name)، ثالثًا الميل سيرفر (MX record)، رابعًا توزيع الحمل (load balancing) باستخدام أكتر من IP. زي ما يكون فيه دليل تليفونات شامل كل حاجة!</p>",
  },
  {
    id: 30,
    question:
      "___-scheduling policy of queued datagrams in output port buffer inside router guarantees minimum bandwidth per traffic-class.",
    options: ["FCFS", "WFQ", "Priority", "RR"],
    correctAnswer: 1,
    explanation:
      "<p>This is true. WFQ (Weighted Fair Queuing) ensures fair bandwidth distribution per traffic class.</p>",
    arabicExplanation:
      "<p>ده صح. سياسة الـ WFQ بتضمن إن كل نوع من البيانات (traffic-class) ياخد نصيبه العادل من عرض النطاق (bandwidth). زي ما تكون فاتح مطعم وفيه طوابير لكل صنف أكل، وعايز تدي كل طابور نصيبه من الأكل عشان ماحدش يزعل!</p>",
  },
  {
    id: 31,
    question:
      "To transmit at the wider frequency band, ___ allocates periodic time slot(s) for a call.",
    options: ["FDM", "SDM", "TDM", "WDM"],
    correctAnswer: 2,
    explanation:
      "<p>This is true. TDM (Time Division Multiplexing) assigns periodic time slots for each channel in a wider frequency band.</p>",
    arabicExplanation:
      "<p>ده صح. في TDM (Time Division Multiplexing) بنقسم الوقت نفسه لمجموعات، وكل حد بياخد وقته الخاص. زي ما تكون فاتح ميكروفون واحد بس، وكل واحد بيتكلم في دوره عشان محدش يقاطع التاني!</p>",
  },
  {
    id: 32,
    question:
      "To schedule frames and mitigate HOL blocking, ___ divides objects to be sent into frames.",
    options: ["HTTP 3.0", "HTTP 2.0", "HTTP 1.1", "HTTP 1.0"],
    correctAnswer: 1,
    explanation:
      "<p>This is true. HTTP 2.0 uses multiplexing by dividing objects into frames to avoid head-of-line blocking.</p>",
    arabicExplanation:
      "<p>ده صح. في HTTP 2.0 البيانات بتتقسم لفرامز (frames) عشان نتجنب مشكلة الزحمة (head-of-line blocking) اللي كانت بتحصل في HTTP 1.1. زي ما تكون فاتح طريق جديد في الزحمة عشان العربيات توصل أسرع!</p>",
  },
  {
    id: 33,
    question: "Police radios transmission is a ___ type of communication.",
    options: ["simplex", "duplex", "half-duplex", "full-duplex"],
    correctAnswer: 2,
    explanation:
      "<p>This is true. Police radio uses half-duplex communication: one side can speak at a time, not both.</p>",
    arabicExplanation:
      "<p>ده صح. أجهزة الشرطة (اللاسلكي) بتشتغل بنظام نص-اتصال (half-duplex): يا إما المرسل بيتكلم يا المستقبل، مش الاتنين مع بعض. زي ما تكون في جهاز لاسلكي (walkie-talkie) وبتضغط زر عشان تتكلم بس!</p>",
  },
  {
    id: 34,
    question:
      "___ layer is directly responsible for transporting TCP segment between two connected hosts from source to destination.",
    options: ["Transport", "Network", "Link", "Physical"],
    correctAnswer: 0,
    explanation:
      "<p>This is true. The transport layer ensures reliable delivery of TCP segments end-to-end.</p>",
    arabicExplanation:
      "<p>ده صح. الطبقة اللي اسمها Transport هي اللي بتاخد الباكيتات من جهاز وتوديها للتاني، وتتأكد إنها واصلة مظبوط (لو TCP) أو بسرعة (لو UDP). زي ما يكون فيه حد مخصوص في الشركة مسؤول يوصل الأوراق بأمان للفرع التاني!</p>",
  },
  {
    id: 35,
    question:
      "HTTP 1.1 provides ___ method types in the request line of its request message.",
    options: ["two", "three", "four", "five"],
    correctAnswer: 3,
    explanation:
      "<p>This is true. HTTP 1.1 supports 5 request methods: GET, POST, HEAD, PUT, and DELETE.</p>",
    arabicExplanation:
      "<p>ده صح. بروتوكول HTTP 1.1 فيه 5 طرق عشان تطلب أو تبعت بيانات: GET (تجيب بيانات)، POST (تبعت بيانات)، HEAD (تجيب الهيدر بس)، PUT (تعدل)، و DELETE (تمسح). زي ما يكون عندك في المطبخ 5 أدوات مختلفة، كل واحدة ليها وظيفة!</p>",
  },
  {
    id: 36,
    question: "Cryptography is the best defense against ___ attack.",
    options: [
      "IP spoofing",
      "denial of service",
      "DNS tunneling",
      "packet sniffing",
    ],
    correctAnswer: 3,
    explanation:
      "<p>This is true. Encryption protects data from being intercepted and read by attackers.</p>",
    arabicExplanation:
      "<p>ده صح. التشفير (cryptography) بيمنع أي حد يتجسس على البيانات (packet sniffing). يعني لو حد حاول يسرق الداتا وهي ماشية في الشبكة، التشفير هيخلي البيانات مش مفهومة من غير المفتاح الصحيح.</p>",
  },
  {
    id: 37,
    question:
      "Every host uses transport layer services must have a unique port number.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "<p>This is true. Each service or application that uses the transport layer (like TCP/UDP) must have a unique port number to differentiate between different applications running on the same device.</p>",
    arabicExplanation:
      "<p>ده صح. كل خدمة أو تطبيق بيشتغل على طبقة الـ Transport (زي TCP أو UDP) لازم يكون ليه رقم بورت مختلف. البورت ده زي باب مخصوص بيفتحه التطبيق عشان البيانات توصله.</p><p>📌 ليه مهم؟ لو كان في جهاز شغال عليه أكتر من خدمة (زي متصفح وكمان برنامج محادثة)، لازم كل واحد يكون ليه بورت مخصوص. غير كده البيانات هتتلخبط.</p><p>✅ مثال بالعامية: لو في بيت فيه 3 أوض، وكل أوضة ليها باب (port) برقم معين. مينفعش أوضتين يكون ليهم نفس الباب، عشان الناس تعرف تدخل الصح.</p><p>💡 البورتات المشهورة زي: بورت 80 للويب (HTTP)، بورت 443 لـ HTTPS، بورت 21 للـ FTP.</p>",
  },
  {
    id: 38,
    question:
      "In client-server architecture, clients are intermittently connected by their permanent IPs.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "<p>This is false. Clients in a client-server architecture usually have dynamic IP addresses assigned by DHCP and are not permanently connected. The server, however, usually has a permanent (static) IP.</p>",
    arabicExplanation:
      "<p>ده غلط. في بنية الكلاينت-سيرفر، الكلاينت غالبًا بيتوصل بالشبكة وقت ما يحتاج، وعنده IP متغير (dynamic) مش ثابت. السيرفر هو اللي عنده IP ثابت (permanent) عشان يفضل دايمًا جاهز للناس كلها.</p><p>✅ مثال: زي لما تفتح الكمبيوتر في البيت، كل مرة ممكن ياخد IP جديد من الراوتر، لكن موقع زي Google عنده IP ثابت دايمًا.</p>",
  },
  {
    id: 39,
    question:
      "Downward message by the network layer to the below link layer must not exceed the maximum ____ size.",
    options: ["packet", "segment", "datagram", "frame"],
    correctAnswer: 3,
    explanation:
      "<p>This is true. The network layer sends data to the data link layer in the form of frames, which have a maximum size known as the Maximum Transmission Unit (MTU).</p>",
    arabicExplanation:
      "<p>ده صح. لما طبقة الشبكة (Network layer) تبعت البيانات لطبقة الرابط (Link layer)، لازم حجم البيانات مايزيدش عن حجم الـ frame (اللي اسمه MTU). زي لما تحط حاجة جوه شنطة، لازم تكون أصغر من حجم الشنطة نفسها!</p>",
  },
  {
    id: 40,
    question:
      "The standard Open System Interconnection model consists of ________ layers.",
    options: ["seven", "six", "five", "four"],
    correctAnswer: 0,
    explanation:
      "<p>This is true. The OSI model has seven layers: Application, Presentation, Session, Transport, Network, Data Link, and Physical.</p>",
    arabicExplanation:
      "<p>ده صح. الـ OSI Model عبارة عن 7 طبقات بتغطي كل حاجة في الشبكات من أول ما التطبيق يشتغل لحد ما البيانات تمشي على السلك!</p><p>✅ الطبقات من فوق لتحت: Application, Presentation, Session, Transport, Network, Data Link, Physical. كل طبقة لها دورها الخاص، زي ما يكون كل موظف في شركة ليه وظيفة محددة.</p>",
  },
  {
    id: 41,
    question:
      "Link frame is created by appending the link layer header to transport segment.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "<p>This is true. The link layer adds its own header to the segment it receives from the transport layer, creating the link-layer frame.</p>",
    arabicExplanation:
      "<p>ده صح. لما البيانات تنزل من طبقة النقل (Transport layer) لطبقة الربط (Link layer)، طبقة الربط بتحط الهيدر بتاعها قدام البيانات عشان تعرف تتحرك جوه الشبكة، وبكده بيتعمل frame كامل.</p><p>✅ زي لما تحط عنوان الشحن على طرد قبل ما تبعته!</p>",
  },
];
