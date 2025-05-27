import { X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

interface ExplanationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function Explanation3Dialog({
  open,
  onOpenChange,
}: ExplanationDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-none p-0">
        <div className="h-screen w-screen overflow-y-auto">
          <DialogHeader className="sticky top-0 z-10 bg-white border-b shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <DialogTitle className="text-2xl font-bold text-gray-900">
                  Comprehensive Explanation for Transport Layer Quiz
                </DialogTitle>
                <button
                  onClick={() => onOpenChange(false)}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>
            </div>
          </DialogHeader>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="prose prose-lg max-w-none">
              {/* Transport Layer Overview */}
              <section className="mb-8" dir="rtl">
                <h2 className="text-xl font-semibold text-gray-200 mb-4 border-b pb-2">
                  Transport Layer Overview - نظرة عامة على طبقة النقل
                </h2>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg border-r-4 border-blue-500">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      • Transport Layer Location
                    </h3>
                    <p className="text-gray-700 mb-2">
                      Transport-layer protocols are implemented in end systems
                      (hosts), NOT in network routers. Routers work at the
                      network layer (Layer 3), while transport layer (Layer 4)
                      protocols like TCP and UDP operate in the end devices like
                      computers and smartphones.
                    </p>
                    <p className="text-gray-600 text-sm" dir="rtl">
                      بروتوكولات طبقة النقل تُطبق في الأنظمة الطرفية (الأجهزة)
                      وليس في أجهزة التوجيه. أجهزة التوجيه تعمل في الطبقة
                      الثالثة فقط
                    </p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg border-r-4 border-green-500">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      • Communication Types
                    </h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Transport Layer:</strong> Provides logical
                      communication between application processes
                      (process-to-process)
                      <br />
                      <strong>Network Layer:</strong> Provides logical
                      communication between hosts (host-to-host)
                      <br />
                      The transport layer extends host-to-host delivery to
                      process-to-process delivery.
                    </p>
                    <p className="text-gray-600 text-sm" dir="rtl">
                      طبقة النقل توفر الاتصال بين العمليات، بينما طبقة الشبكة
                      توفر الاتصال بين الأجهزة
                    </p>
                  </div>
                </div>
              </section>

              {/* TCP vs UDP Comparison */}
              <section className="mb-8" dir="rtl">
                <h2 className="text-xl font-semibold text-gray-200 mb-4 border-b pb-2">
                  TCP vs UDP Protocols - مقارنة بروتوكولي TCP و UDP
                </h2>
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg border-r-4 border-red-500">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      • TCP (Transmission Control Protocol)
                    </h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Reliable, connection-oriented service:</strong>
                      <br />
                      • Requires handshaking (3-way handshake) before data
                      transmission
                      <br />
                      • Guarantees delivery, order, and error correction
                      <br />
                      • Provides flow control and congestion control
                      <br />
                      • Uses acknowledgments, sequence numbers, and timers
                      <br />• Larger header overhead but ensures data integrity
                    </p>
                    <p className="text-gray-600 text-sm" dir="rtl">
                      TCP موثوق ويتطلب إنشاء اتصال أولاً، يضمن وصول البيانات
                      بالترتيب الصحيح ويتحكم في التدفق والازدحام
                    </p>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg border-r-4 border-yellow-500">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      • UDP (User Datagram Protocol)
                    </h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Unreliable, connectionless service:</strong>
                      <br />
                      • No handshaking required before sending data
                      <br />
                      • Best effort service - no guarantee of delivery
                      <br />
                      • No flow control or congestion control
                      <br />
                      • Packets called "datagrams"
                      <br />
                      • Simple, fast, and minimal overhead
                      <br />• Only basic error detection with checksum
                    </p>
                    <p className="text-gray-600 text-sm" dir="rtl">
                      UDP غير موثوق ولا يتطلب اتصال مسبق، سريع وبسيط لكن لا يضمن
                      وصول البيانات أو ترتيبها
                    </p>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg border-r-4 border-purple-500">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      • When to Use Each Protocol
                    </h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Use TCP for:</strong> Web browsing (HTTP), email
                      (SMTP), file transfer (FTP), any application requiring
                      reliable delivery
                      <br />
                      <strong>Use UDP for:</strong> Live streaming, video calls,
                      online gaming, DNS queries, applications where speed is
                      more important than reliability
                    </p>
                    <p className="text-gray-600 text-sm" dir="rtl">
                      استخدم TCP للتطبيقات التي تحتاج موثوقية، واستخدم UDP
                      للتطبيقات التي تحتاج سرعة أكثر من الموثوقية
                    </p>
                  </div>
                </div>
              </section>

              {/* Multiplexing and Demultiplexing */}
              <section className="mb-8" dir="rtl">
                <h2 className="text-xl font-semibold text-gray-200 mb-4 border-b pb-2">
                  Multiplexing & Demultiplexing - التجميع والتوزيع
                </h2>
                <div className="space-y-4">
                  <div className="bg-indigo-50 p-4 rounded-lg border-r-4 border-indigo-500">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      • Multiplexing (at Sender)
                    </h3>
                    <p className="text-gray-700 mb-2">
                      The process of gathering data from multiple application
                      processes, adding transport headers (including source and
                      destination port numbers), and passing segments to the
                      network layer. This allows multiple applications to share
                      the same network connection.
                    </p>
                    <p className="text-gray-600 text-sm" dir="rtl">
                      التجميع يحدث في المرسل: جمع البيانات من عدة تطبيقات وإضافة
                      معلومات المنافذ قبل الإرسال
                    </p>
                  </div>

                  <div className="bg-teal-50 p-4 rounded-lg border-r-4 border-teal-500">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      • Demultiplexing (at Receiver)
                    </h3>
                    <p className="text-gray-700 mb-2">
                      The process of examining port numbers in received segments
                      and directing each segment to the appropriate
                      socket/application process. This ensures data reaches the
                      correct application on the receiving host.
                    </p>
                    <p className="text-gray-600 text-sm" dir="rtl">
                      التوزيع يحدث في المستقبل: فحص أرقام المنافذ وتوجيه كل جزء
                      للتطبيق المناسب
                    </p>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg border-r-4 border-orange-500">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      • Requirements for Multiplexing/Demultiplexing
                    </h3>
                    <p className="text-gray-700 mb-2">
                      • Sockets must have unique identifiers (port numbers)
                      <br />
                      • Each segment must have special fields indicating source
                      and destination ports
                      <br />• Transport layer uses these port numbers to route
                      data to correct processes
                    </p>
                    <p className="text-gray-600 text-sm" dir="rtl">
                      يتطلب وجود معرفات فريدة للمقابس (أرقام المنافذ) ومعلومات
                      في رأس الجزء تحدد المصدر والوجهة
                    </p>
                  </div>
                </div>
              </section>

              {/* UDP Details */}
              <section className="mb-8" dir="rtl">
                <h2 className="text-xl font-semibold text-gray-200 mb-4 border-b pb-2">
                  UDP Protocol Details - تفاصيل بروتوكول UDP
                </h2>
                <div className="space-y-4">
                  <div className="bg-cyan-50 p-4 rounded-lg border-r-4 border-cyan-500">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      • UDP Characteristics
                    </h3>
                    <p className="text-gray-700 mb-2">
                      • <strong>Connectionless:</strong> No connection
                      establishment, no connection state
                      <br />• <strong>Unreliable:</strong> No guarantee of
                      delivery or quality of service
                      <br />• <strong>Best Effort Service:</strong> Does its
                      best but doesn't guarantee results
                      <br />• <strong>No Flow/Congestion Control:</strong> Sends
                      data as fast as application provides it
                    </p>
                    <p className="text-gray-600 text-sm" dir="rtl">
                      UDP لا يتطلب اتصال مسبق، يقدم خدمة بأفضل جهد ممكن دون
                      ضمانات، ولا يتحكم في تدفق البيانات
                    </p>
                  </div>

                  <div className="bg-pink-50 p-4 rounded-lg border-r-4 border-pink-500">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      • UDP Header Fields
                    </h3>
                    <p className="text-gray-700 mb-2">
                      • <strong>Source Port Number</strong> (16 bits):
                      Identifies sending process
                      <br />• <strong>Destination Port Number</strong> (16
                      bits): Identifies receiving process
                      <br />• <strong>Length</strong> (16 bits): Length of UDP
                      header and data
                      <br />• <strong>Checksum</strong> (16 bits): For error
                      detection (not correction)
                    </p>
                    <p className="text-gray-600 text-sm" dir="rtl">
                      رأس UDP يحتوي على منفذ المصدر والوجهة والطول ومجموع الفحص
                      للكشف عن الأخطاء
                    </p>
                  </div>

                  <div className="bg-emerald-50 p-4 rounded-lg border-r-4 border-emerald-500">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      • Advantages of UDP
                    </h3>
                    <p className="text-gray-700 mb-2">
                      • <strong>Finer Application Control:</strong> Application
                      decides when and what to send
                      <br />• <strong>No Connection Establishment:</strong> No
                      delay for setting up connection
                      <br />• <strong>No Connection State:</strong> Server can
                      support more clients
                      <br />• <strong>Small Header Overhead:</strong> Only 8
                      bytes vs TCP's 20+ bytes
                    </p>
                    <p className="text-gray-600 text-sm" dir="rtl">
                      مزايا UDP: تحكم أفضل للتطبيق، عدم الحاجة لإنشاء اتصال، عدم
                      حفظ حالة الاتصال، رأس صغير
                    </p>
                  </div>
                </div>
              </section>

              {/* Reliable Data Transfer */}
              <section className="mb-8" dir="rtl">
                <h2 className="text-xl font-semibold text-gray-200 mb-4 border-b pb-2">
                  Reliable Data Transfer - النقل الموثوق للبيانات
                </h2>
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg border-r-4 border-red-500">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      • Reliable Connection Requirements
                    </h3>
                    <p className="text-gray-700 mb-2">
                      • <strong>Guaranteed Delivery:</strong> Ensures packets
                      arrive and arrive correctly
                      <br />• <strong>Flow Control:</strong> Manages the rate of
                      data transmission
                      <br />• <strong>Congestion Control:</strong> Prevents
                      network overload
                      <br />• <strong>
                        Error Detection and Correction:
                      </strong>{" "}
                      Identifies and fixes transmission errors
                    </p>
                    <p className="text-gray-600 text-sm" dir="rtl">
                      الاتصال الموثوق يضمن وصول البيانات صحيحة ويتحكم في التدفق
                      والازدحام ويكتشف ويصحح الأخطاء
                    </p>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg border-r-4 border-yellow-500">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      • Error Detection and Feedback
                    </h3>
                    <p className="text-gray-700 mb-2">
                      • <strong>Error Detection:</strong> Mechanism to detect
                      bit errors in transmission
                      <br />• <strong>Receiver Feedback:</strong>{" "}
                      Acknowledgments (ACK/NACK) to inform sender
                      <br />• <strong>
                        ACK (Positive Acknowledgment):
                      </strong>{" "}
                      Confirms successful receipt
                      <br />• <strong>
                        NACK (Negative Acknowledgment):
                      </strong>{" "}
                      Indicates error or rejection
                      <br />• <strong>Checksum:</strong> Used for error
                      detection in headers
                    </p>
                    <p className="text-gray-600 text-sm" dir="rtl">
                      كشف الأخطاء وردود الفعل: ACK للتأكيد الإيجابي، NACK
                      للتأكيد السلبي، ومجموع الفحص لكشف الأخطاء
                    </p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg border-r-4 border-green-500">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      • Sequence Numbers and Retransmission
                    </h3>
                    <p className="text-gray-700 mb-2">
                      • <strong>Sequence Numbers:</strong> Track and reorder
                      packets, handle duplicate detection
                      <br />• <strong>Retransmission Triggers:</strong> When ACK
                      not received before timer expires, when ACK is lost, or
                      when there's excessive delay
                      <br />• <strong>Timer-based Recovery:</strong> Automatic
                      retransmission after timeout
                    </p>
                    <p className="text-gray-600 text-sm" dir="rtl">
                      أرقام التسلسل لتتبع الحزم، وإعادة الإرسال عند عدم استلام
                      ACK أو انتهاء المؤقت أو فقدان ACK
                    </p>
                  </div>
                </div>
              </section>

              {/* ARQ Protocols */}
              <section className="mb-8" dir="rtl">
                <h2 className="text-xl font-semibold text-gray-200 mb-4 border-b pb-2">
                  ARQ Protocols - بروتوكولات ARQ
                </h2>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg border-r-4 border-blue-500">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      • Stop-and-Wait Protocol
                    </h3>
                    <p className="text-gray-700 mb-2">
                      The simplest ARQ protocol where sender transmits one
                      packet and waits for acknowledgment before sending the
                      next packet. Inefficient for high-bandwidth networks due
                      to waiting time.
                    </p>
                    <p className="text-gray-600 text-sm" dir="rtl">
                      بروتوكول توقف وانتظر: إرسال حزمة واحدة فقط والانتظار
                      للتأكيد قبل إرسال التالية، غير فعال للشبكات السريعة
                    </p>
                  </div>

                  <div className="bg-violet-50 p-4 rounded-lg border-r-4 border-violet-500">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      • Go-Back-N ARQ
                    </h3>
                    <p className="text-gray-700 mb-2">
                      Allows sender to transmit multiple packets without waiting
                      for individual acknowledgments, but limited to N
                      unacknowledged packets. If error occurs, ALL packets from
                      the error point onward are retransmitted.
                      <br />
                      <strong>Example:</strong> If frame 8 has error in
                      transmission of 12 frames (0-11), retransmit frames 8, 9,
                      10, 11 = 4 frames total.
                    </p>
                    <p className="text-gray-600 text-sm" dir="rtl">
                      Go-Back-N: إرسال عدة حزم، لكن عند حدوث خطأ يتم إعادة إرسال
                      جميع الحزم من نقطة الخطأ فما بعد
                    </p>
                  </div>

                  <div className="bg-amber-50 p-4 rounded-lg border-r-4 border-amber-500">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      • Selective Repeat ARQ
                    </h3>
                    <p className="text-gray-700 mb-2">
                      More efficient than Go-Back-N. Allows multiple
                      unacknowledged packets, but only retransmits the specific
                      packets that had errors, not all subsequent packets.
                      <br />
                      <strong>Example:</strong> If frame 8 has error in
                      transmission of 12 frames (0-11), only retransmit frame 8
                      = 1 frame total.
                    </p>
                    <p className="text-gray-600 text-sm" dir="rtl">
                      Selective Repeat: أكثر كفاءة، يعيد إرسال الحزم المعطوبة
                      فقط وليس جميع الحزم التالية
                    </p>
                  </div>
                </div>
              </section>

              {/* TCP Segment Structure */}
              <section className="mb-8" dir="rtl">
                <h2 className="text-xl font-semibold text-gray-200 mb-4 border-b pb-2">
                  TCP Segment Structure - هيكل جزء TCP
                </h2>
                <div className="space-y-4">
                  <div className="bg-slate-50 p-4 rounded-lg border-r-4 border-slate-500">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      • TCP Segment Components
                    </h3>
                    <p className="text-gray-700 mb-2">
                      A TCP segment includes:
                      <br />•{" "}
                      <strong>Source and Destination Port Numbers</strong> (16
                      bits each)
                      <br />• <strong>Header</strong> with control information
                      <br />• <strong>Data</strong> payload from application
                      <br />• <strong>Checksum Field</strong> for error
                      detection
                    </p>
                    <p className="text-gray-600 text-sm" dir="rtl">
                      جزء TCP يتضمن: أرقام منافذ المصدر والوجهة، الرأس،
                      البيانات، ومجموع الفحص
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg border-r-4 border-gray-500">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      • TCP Header Fields
                    </h3>
                    <p className="text-gray-700 mb-2">
                      • <strong>32-bit Sequence Number:</strong> For ordering
                      and duplicate detection
                      <br />• <strong>
                        32-bit Acknowledgment Number:
                      </strong>{" "}
                      Next expected sequence number
                      <br />• <strong>16-bit Receive Window:</strong> Flow
                      control, available buffer space
                      <br />• <strong>4-bit Header Length:</strong> Size of TCP
                      header
                      <br />• <strong>Flag Field:</strong> Control bits (SYN,
                      ACK, FIN, RST, etc.)
                      <br />• <strong>Options Field:</strong> Additional TCP
                      options (variable length)
                    </p>
                    <p className="text-gray-600 text-sm" dir="rtl">
                      رأس TCP يحتوي على: رقم التسلسل، رقم التأكيد، نافذة
                      الاستقبال، طول الرأس، حقل الأعلام، والخيارات
                    </p>
                  </div>
                </div>
              </section>

              {/* Key Concepts Summary */}
              <section className="mb-8" dir="rtl">
                <h2 className="text-xl font-semibold text-gray-200 mb-4 border-b pb-2">
                  Key Concepts Summary - ملخص المفاهيم الأساسية
                </h2>
                <div className="space-y-4">
                  <div className="bg-indigo-50 p-4 rounded-lg border-r-4 border-indigo-500">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      • Layer Relationships
                    </h3>
                    <p className="text-gray-700 mb-2">
                      • <strong>IP Protocol:</strong> Provides unreliable
                      host-to-host communication
                      <br />• <strong>TCP over IP:</strong> Adds reliability to
                      create reliable end-to-end communication
                      <br />• <strong>UDP over IP:</strong> Keeps it simple and
                      fast for applications that can handle some data loss
                      <br />• <strong>Transport Layer:</strong> Bridges network
                      layer (host-to-host) to application layer
                      (process-to-process)
                    </p>
                    <p className="text-gray-600 text-sm" dir="rtl">
                      IP غير موثوق، TCP يضيف الموثوقية، UDP يبقي الأمور بسيطة
                      وسريعة، وطبقة النقل تربط بين الطبقات
                    </p>
                  </div>

                  <div className="bg-lime-50 p-4 rounded-lg border-r-4 border-lime-500">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      • Protocol Selection Guidelines
                    </h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Choose TCP when:</strong> Data integrity is
                      crucial, order matters, can tolerate some delay
                      <br />
                      <strong>Choose UDP when:</strong> Speed is critical, some
                      data loss is acceptable, real-time applications
                      <br />
                      <strong>Examples:</strong> Web browsing (TCP), Video
                      streaming (UDP), File transfer (TCP), Online gaming (UDP)
                    </p>
                    <p className="text-gray-600 text-sm" dir="rtl">
                      اختر TCP عندما تحتاج موثوقية، واختر UDP عندما تحتاج سرعة
                      ويمكن تحمل فقدان بعض البيانات
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
