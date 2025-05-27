import { X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

interface ExplanationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function Explanation2Dialog({
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
                  Comprehensive Explanation for Networking Quiz
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
              {/* Network Architectures Section */}
              <section className="mb-8" dir="rtl">
                <h2 className="text-xl font-semibold text-gray-200 mb-4 border-b pb-2">
                  Network Architectures - أنماط معمارية الشبكات
                </h2>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg border-r-4 border-blue-500">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      • Client-Server Architecture
                    </h3>
                    <p className="text-gray-700 mb-2">
                      In client-server architecture, there is an always-on host
                      called the server that services requests from many other
                      hosts called clients. The server centralizes data and
                      services, making it easier to manage and maintain.
                      Examples include web servers, email servers, and database
                      servers.
                    </p>
                    <p className="text-gray-600 text-sm" dir="rtl">
                      في هذا النمط، يوجد جهاز مضيف دائمًا يُسمى السيرفر يقدم
                      الخدمات لأجهزة أخرى تُسمى العملاء. مثل مواقع الويب والبريد
                      الإلكتروني
                    </p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg border-r-4 border-green-500">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      • P2P Architecture (Peer-to-Peer)
                    </h3>
                    <p className="text-gray-700 mb-2">
                      In P2P architecture, applications (peers) communicate
                      directly with each other without requiring a dedicated
                      server. Each peer can act as both client and server.
                      Examples include BitTorrent, Skype, and some file-sharing
                      applications.
                    </p>
                    <p className="text-gray-600 text-sm" dir="rtl">
                      في هذا النمط، التطبيقات تتواصل مباشرة مع بعضها البعض بدون
                      الحاجة لسيرفر مركزي. مثل برامج مشاركة الملفات والمكالمات
                      المباشرة
                    </p>
                  </div>
                </div>
              </section>

              {/* Network Processes Section */}
              <section className="mb-8" dir="rtl">
                <h2 className="text-xl font-semibold text-gray-200 mb-4 border-b pb-2">
                  Network Processes & Communication - العمليات والاتصال في
                  الشبكات
                </h2>
                <div className="space-y-4">
                  <div className="bg-purple-50 p-4 rounded-lg border-r-4 border-purple-500">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      • Process
                    </h3>
                    <p className="text-gray-700 mb-2">
                      A process is a program that is currently running and
                      executing. In networking, processes communicate with each
                      other across the network to exchange data and services.
                    </p>
                    <p className="text-gray-600 text-sm" dir="rtl">
                      العملية هي برنامج يعمل حاليًا. في الشبكات، العمليات تتواصل
                      مع بعضها عبر الشبكة لتبادل البيانات والخدمات
                    </p>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg border-r-4 border-yellow-500">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      • Socket
                    </h3>
                    <p className="text-gray-700 mb-2">
                      A socket is the interface between the application layer
                      and transport layer. It's the combination of IP address
                      and port number that identifies a communication endpoint.
                      Processes send and receive messages through sockets.
                    </p>
                    <p className="text-gray-600 text-sm" dir="rtl">
                      المقبس هو الواجهة بين طبقة التطبيق وطبقة النقل. يتكون من
                      عنوان IP ورقم المنفذ ويحدد نقطة الاتصال
                    </p>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg border-r-4 border-red-500">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      • IP Address & Port Number
                    </h3>
                    <p className="text-gray-700 mb-2">
                      To identify a receiving process, two addresses are needed:
                      the IP address (identifies the host machine) and the port
                      number (identifies the specific process/application within
                      that machine).
                    </p>
                    <p className="text-gray-600 text-sm" dir="rtl">
                      لتحديد العملية المستقبلة، نحتاج عنوانين: عنوان IP (يحدد
                      الجهاز) ورقم المنفذ (يحدد التطبيق المحدد داخل الجهاز)
                    </p>
                  </div>
                </div>
              </section>

              {/* HTTP Protocol Section */}
              <section className="mb-8" dir="rtl">
                <h2 className="text-xl font-semibold text-gray-200 mb-4 border-b pb-2">
                  HTTP Protocol - بروتوكول HTTP
                </h2>
                <div className="space-y-4">
                  <div className="bg-indigo-50 p-4 rounded-lg border-r-4 border-indigo-500">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      • HTTP Characteristics
                    </h3>
                    <p className="text-gray-700 mb-2">
                      HTTP is a stateless protocol, meaning it doesn't maintain
                      any information about previous client requests. Each
                      request is independent. HTTP is implemented in both client
                      (browser) and server programs.
                    </p>
                    <p className="text-gray-600 text-sm" dir="rtl">
                      HTTP بروتوكول عديم الحالة، أي لا يحتفظ بمعلومات عن الطلبات
                      السابقة. كل طلب مستقل عن الآخر
                    </p>
                  </div>

                  <div className="bg-teal-50 p-4 rounded-lg border-r-4 border-teal-500">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      • HTTP Connections
                    </h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Non-persistent connections:</strong> Each
                      request/response pair uses a separate TCP connection.
                      <br />
                      <strong>Persistent connections:</strong> Multiple
                      requests/responses use the same TCP connection, reducing
                      overhead and improving performance.
                    </p>
                    <p className="text-gray-600 text-sm" dir="rtl">
                      الاتصالات غير المستمرة: كل طلب يستخدم اتصال TCP منفصل.
                      الاتصالات المستمرة: عدة طلبات تستخدم نفس الاتصال
                    </p>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg border-r-4 border-orange-500">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      • HTTP Methods
                    </h3>
                    <p className="text-gray-700 mb-2">
                      <strong>GET:</strong> Requests data, entity body is empty
                      <br />
                      <strong>POST:</strong> Sends data in entity body (like
                      form data)
                      <br />
                      <strong>HEAD:</strong> Like GET but server doesn't return
                      the object
                      <br />
                      <strong>PUT:</strong> Uploads object to specific path
                      <br />
                      <strong>DELETE:</strong> Deletes object from server
                    </p>
                    <p className="text-gray-600 text-sm" dir="rtl">
                      طرق HTTP المختلفة: GET للطلب، POST لإرسال البيانات، HEAD
                      للرأس فقط، PUT للرفع، DELETE للحذف
                    </p>
                  </div>

                  <div className="bg-pink-50 p-4 rounded-lg border-r-4 border-pink-500">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      • HTTP Status Codes
                    </h3>
                    <p className="text-gray-700 mb-2">
                      <strong>200:</strong> OK - Request succeeded
                      <br />
                      <strong>301:</strong> Moved Permanently - Object
                      permanently moved
                      <br />
                      <strong>400:</strong> Bad Request - Server couldn't
                      understand request
                      <br />
                      <strong>404:</strong> Not Found - Requested document
                      doesn't exist
                      <br />
                      <strong>505:</strong> HTTP Version Not Supported
                    </p>
                    <p className="text-gray-600 text-sm" dir="rtl">
                      رموز حالة HTTP: 200 نجح، 301 تم النقل، 400 طلب سيء، 404
                      غير موجود، 505 إصدار غير مدعوم
                    </p>
                  </div>
                </div>
              </section>

              {/* RTT and Performance Section */}
              <section className="mb-8" dir="rtl">
                <h2 className="text-xl font-semibold text-gray-200 mb-4 border-b pb-2">
                  Network Performance - أداء الشبكة
                </h2>
                <div className="space-y-4">
                  <div className="bg-cyan-50 p-4 rounded-lg border-r-4 border-cyan-500">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      • Round Trip Time (RTT)
                    </h3>
                    <p className="text-gray-700 mb-2">
                      RTT is the time it takes for a small packet to travel from
                      client to server and back. It includes propagation delays,
                      queuing delays, and processing delays. RTT is crucial for
                      calculating total response time.
                    </p>
                    <p className="text-gray-600 text-sm" dir="rtl">
                      وقت الرحلة الكاملة هو الوقت اللازم لسفر حزمة صغيرة من
                      العميل للخادم والعودة، ويشمل جميع التأخيرات
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg border-r-4 border-gray-500">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      • Connection Performance Comparison
                    </h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Non-persistent:</strong> Each object requires 2
                      RTTs (connection + request/response)
                      <br />
                      <strong>Persistent:</strong> First object needs 2 RTTs,
                      subsequent objects need 1 RTT each
                      <br />
                      For multiple objects, persistent connections are much more
                      efficient.
                    </p>
                    <p className="text-gray-600 text-sm" dir="rtl">
                      الاتصالات غير المستمرة تحتاج RTT مضاعف، بينما المستمرة
                      أكثر كفاءة للكائنات المتعددة
                    </p>
                  </div>
                </div>
              </section>

              {/* Cookies and Web Cache Section */}
              <section className="mb-8" dir="rtl">
                <h2 className="text-xl font-semibold text-gray-200 mb-4 border-b pb-2">
                  Web Technologies - تقنيات الويب
                </h2>
                <div className="space-y-4">
                  <div className="bg-emerald-50 p-4 rounded-lg border-r-4 border-emerald-500">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      • Cookies
                    </h3>
                    <p className="text-gray-700 mb-2">
                      Since HTTP is stateless, cookies are used to maintain
                      state information about clients. Cookies consist of:
                      header lines in HTTP messages, cookie files on user's
                      system, and back-end databases at websites.
                    </p>
                    <p className="text-gray-600 text-sm" dir="rtl">
                      بما أن HTTP عديم الحالة، تُستخدم الكوكيز للاحتفاظ بمعلومات
                      حالة العميل عبر الجلسات المختلفة
                    </p>
                  </div>

                  <div className="bg-amber-50 p-4 rounded-lg border-r-4 border-amber-500">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      • Web Cache (Proxy Cache)
                    </h3>
                    <p className="text-gray-700 mb-2">
                      Web cache is a network entity that satisfies HTTP requests
                      on behalf of origin servers. Benefits include: reduced
                      response time for client requests and reduced web traffic
                      on networks.
                    </p>
                    <p className="text-gray-600 text-sm" dir="rtl">
                      ذاكرة التخزين المؤقت للويب تقلل وقت الاستجابة وحركة المرور
                      على الشبكة عبر تخزين المحتوى المطلوب بكثرة
                    </p>
                  </div>
                </div>
              </section>

              {/* Email System Section */}
              <section className="mb-8" dir="rtl">
                <h2 className="text-xl font-semibold text-gray-200 mb-4 border-b pb-2">
                  Electronic Mail System - نظام البريد الإلكتروني
                </h2>
                <div className="space-y-4">
                  <div className="bg-violet-50 p-4 rounded-lg border-r-4 border-violet-500">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      • Email Components
                    </h3>
                    <p className="text-gray-700 mb-2">
                      The major components of Internet electronic mail are: User
                      agents (email clients), Mail servers (store and forward
                      messages), and SMTP protocol (Simple Mail Transfer
                      Protocol) for transferring messages between servers.
                    </p>
                    <p className="text-gray-600 text-sm" dir="rtl">
                      مكونات البريد الإلكتروني الرئيسية: وكلاء المستخدم، خوادم
                      البريد، وبروتوكول SMTP لنقل الرسائل
                    </p>
                  </div>

                  <div className="bg-rose-50 p-4 rounded-lg border-r-4 border-rose-500">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      • SMTP Protocol
                    </h3>
                    <p className="text-gray-700 mb-2">
                      SMTP is the principal application-layer protocol for
                      Internet electronic mail. It uses TCP protocol from the
                      transport layer to ensure reliable delivery of email
                      messages between mail servers.
                    </p>
                    <p className="text-gray-600 text-sm" dir="rtl">
                      SMTP هو البروتوكول الرئيسي لطبقة التطبيق للبريد
                      الإلكتروني، ويستخدم TCP لضمان التسليم الموثوق
                    </p>
                  </div>
                </div>
              </section>

              {/* DNS System Section */}
              <section className="mb-8" dir="rtl">
                <h2 className="text-xl font-semibold text-gray-200 mb-4 border-b pb-2">
                  Domain Name System (DNS) - نظام أسماء النطاقات
                </h2>
                <div className="space-y-4">
                  <div className="bg-sky-50 p-4 rounded-lg border-r-4 border-sky-500">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      • DNS Function
                    </h3>
                    <p className="text-gray-700 mb-2">
                      DNS translates user-supplied hostnames (domain names) to
                      IP addresses. It runs over UDP protocol and uses port 53.
                      DNS provides a distributed database that maps domain names
                      to IP addresses.
                    </p>
                    <p className="text-gray-600 text-sm" dir="rtl">
                      DNS يترجم أسماء النطاقات إلى عناوين IP، ويعمل على بروتوكول
                      UDP ومنفذ 53
                    </p>
                  </div>

                  <div className="bg-lime-50 p-4 rounded-lg border-r-4 border-lime-500">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      • DNS Server Hierarchy
                    </h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Root name servers:</strong> Provide IP addresses
                      of TLD servers
                      <br />
                      <strong>TLD servers:</strong> Provide IP addresses for
                      authoritative DNS servers
                      <br />
                      <strong>Authoritative DNS servers:</strong> Provide final
                      IP addresses for specific domains
                    </p>
                    <p className="text-gray-600 text-sm" dir="rtl">
                      التسلسل الهرمي لخوادم DNS: الجذر، النطاق الأعلى، والخوادم
                      المخولة للنطاقات المحددة
                    </p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-lg border-r-4 border-slate-500">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      • DNS Query Types
                    </h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Iterative query:</strong> Local DNS server
                      connects directly with each DNS server in the lookup chain
                      <br />
                      <strong>Recursive query:</strong> Local DNS server
                      connects only with root DNS server, which handles the
                      complete lookup
                    </p>
                    <p className="text-gray-600 text-sm" dir="rtl">
                      الاستعلام التكراري: كل خطوة منفصلة. الاستعلام العودي:
                      الخادم يتولى البحث الكامل
                    </p>
                  </div>
                </div>
              </section>

              {/* File Distribution Section */}
              <section className="mb-8" dir="rtl">
                <h2 className="text-xl font-semibold text-gray-200 mb-4 border-b pb-2">
                  File Distribution Systems - أنظمة توزيع الملفات
                </h2>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg border-r-4 border-blue-500">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      • Client-Server File Distribution
                    </h3>
                    <p className="text-gray-700 mb-2">
                      In client-server file distribution, the server must send a
                      copy of the file to each peer that requests it. This puts
                      all the distribution load on the server, which can become
                      a bottleneck as the number of clients increases.
                    </p>
                    <p className="text-gray-600 text-sm" dir="rtl">
                      في توزيع الملفات عميل-خادم، الخادم يرسل نسخة من الملف لكل
                      عميل، مما يضع عبء التوزيع على الخادم
                    </p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg border-r-4 border-green-500">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      • P2P File Distribution
                    </h3>
                    <p className="text-gray-700 mb-2">
                      In P2P file distribution, each peer redistributes portions
                      of the file it has received to other peers. This
                      distributes the load among all participants, making the
                      system more scalable and efficient as more peers join the
                      network.
                    </p>
                    <p className="text-gray-600 text-sm" dir="rtl">
                      في توزيع الملفات النظير-للنظير، كل نظير يعيد توزيع أجزاء
                      الملف التي استلمها للأنظار الأخرى، مما يوزع العبء
                    </p>
                  </div>
                </div>
              </section>

              {/* Key Formulas and Calculations */}
              <section className="mb-8" dir="rtl">
                <h2 className="text-xl font-semibold text-gray-200 mb-4 border-b pb-2">
                  Key Calculations - الحسابات الأساسية
                </h2>
                <div className="space-y-4">
                  <div className="bg-yellow-50 p-4 rounded-lg border-r-4 border-yellow-500">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      • TCP Connection Calculations
                    </h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Non-persistent connections:</strong> Each object =
                      2 RTTs
                      <br />
                      Example: HTML + 10 images + 1 video = 12 objects × 2 RTTs
                      = 24 RTTs
                      <br />
                      <strong>Persistent connections:</strong> First object = 2
                      RTTs, subsequent objects = 1 RTT each
                      <br />
                      Example: HTML (2 RTTs) + 11 objects (11 RTTs) = 13 RTTs
                      total
                    </p>
                    <p className="text-gray-600 text-sm" dir="rtl">
                      حسابات اتصال TCP للاتصالات المستمرة وغير المستمرة مع أمثلة
                      عملية لصفحات تحتوي على عدة عناصر
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
