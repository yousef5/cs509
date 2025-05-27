import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import {
  Network,
  Server,
  Globe,
  Wifi,
  CheckCircle,
  XCircle,
  ArrowLeftRight,
  HelpCircle,
} from "lucide-react";

const TextQuiz = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <Network className="h-10 w-10 text-blue-600" />
            Computer Networking Study Guide
          </h1>
          <p className="text-lg text-gray-600">
            Essential concepts for network protocols and communication
          </p>
        </div>

        {/* Question 1: Router Components */}
        <Card className="mb-8 shadow-lg border-0">
          <CardHeader className="bg-blue-600 text-white">
            <CardTitle className="flex items-center gap-2">
              <HelpCircle className="h-6 w-6" />
              Question 1
            </CardTitle>
            <CardDescription className="text-blue-100 mt-2 text-lg">
              What are components of a router?
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Server className="h-6 w-6 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-800">
                  Answer: Router Components
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                    <Badge
                      variant="outline"
                      className="mt-1 border-blue-300 text-black font-bold"
                    >
                      Input Ports
                    </Badge>
                    <p className="text-gray-700">
                      Interface to receive incoming packets
                    </p>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                    <Badge
                      variant="outline"
                      className="mt-1 border-blue-300 text-black font-bold"
                    >
                      Switching Fabric
                    </Badge>
                    <p className="text-gray-700">
                      Transfers packets from input ports to the appropriate
                      output ports
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                    <Badge
                      variant="outline"
                      className="mt-1 text-black font-bold border-blue-300"
                    >
                      Routing Processor
                    </Badge>
                    <p className="text-gray-700">
                      Determines the outgoing link for incoming packets by
                      running routing protocols
                    </p>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                    <Badge
                      variant="outline"
                      className="mt-1 border-blue-300 text-black font-bold"
                    >
                      Output Ports
                    </Badge>
                    <p className="text-gray-700">
                      Interface to send packets to the next hop
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Question 2: TCP Socket Identifiers */}
        <Card className="mb-8 shadow-lg border-0">
          <CardHeader className="bg-green-600 text-white">
            <CardTitle className="flex items-center gap-2">
              <HelpCircle className="h-6 w-6" />
              Question 2
            </CardTitle>
            <CardDescription className="text-green-100 mt-2 text-lg">
              What are the identifiers of a TCP socket?
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Globe className="h-6 w-6 text-green-600" />
                <h3 className="text-xl font-semibold text-gray-800">
                  Answer: TCP Socket Identifiers
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-4 text-lg">
                    Source Information
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">Source IP address</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">Source port number</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-4 text-lg">
                    Destination Information
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">
                        Destination IP address
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">
                        Destination port number
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Question 3: P2P Communication */}
        <Card className="mb-8 shadow-lg border-0">
          <CardHeader className="bg-purple-600 text-white">
            <CardTitle className="flex items-center gap-2">
              <HelpCircle className="h-6 w-6" />
              Question 3
            </CardTitle>
            <CardDescription className="text-purple-100 mt-2 text-lg">
              For a P2P file-sharing application, do you agree with the
              statement, "There is no notion of client and server sides of a
              communication session"? Why or why not?
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <ArrowLeftRight className="h-6 w-6 text-purple-600" />
                <h3 className="text-xl font-semibold text-gray-800">
                  Answer: P2P Communication Analysis
                </h3>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <div className="flex items-start gap-4 mb-6">
                  <CheckCircle className="h-8 w-8 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-purple-800 mb-4 text-lg">
                      Yes, I agree with this statement
                    </h4>
                  </div>
                </div>

                <div className="space-y-4">
                  <h5 className="font-semibold text-purple-800 text-lg mb-4">
                    Why I agree (Key Points):
                  </h5>

                  <div className="bg-white p-5 rounded-lg border border-purple-200">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h6 className="font-medium text-purple-800 mb-2">
                          Dynamic Role Switching
                        </h6>
                        <p className="text-gray-700">
                          In a P2P (peer-to-peer) file-sharing application,
                          every host can act both as a client and a server. A
                          host can request (client) a file from another peer and
                          also serve (server) files to other peers.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-lg border border-purple-200">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h6 className="font-medium text-purple-800 mb-2">
                          No Fixed Roles
                        </h6>
                        <p className="text-gray-700">
                          There's no fixed role — roles are dynamic and
                          interchangeable based on who initiates or responds to
                          a request.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-lg border border-purple-200">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h6 className="font-medium text-purple-800 mb-2">
                          Equal Peer Capabilities
                        </h6>
                        <p className="text-gray-700">
                          Each peer has equal capabilities in the network - they
                          can all upload and download files simultaneously.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-lg border border-purple-200">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h6 className="font-medium text-purple-800 mb-2">
                          Simultaneous Client-Server Behavior
                        </h6>
                        <p className="text-gray-700">
                          A single host can simultaneously download a file from
                          one peer (acting as client) while uploading a
                          different file to another peer (acting as server).
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-lg border border-purple-200">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h6 className="font-medium text-purple-800 mb-2">
                          No Permanent Hierarchy
                        </h6>
                        <p className="text-gray-700">
                          Unlike traditional client-server architecture, there's
                          no permanent hierarchy or dedicated server machine -
                          all participants are equal peers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Question 4: UDP vs TCP */}
        <Card className="mb-8 shadow-lg border-0">
          <CardHeader className="bg-orange-600 text-white">
            <CardTitle className="flex items-center gap-2">
              <HelpCircle className="h-6 w-6" />
              Question 4
            </CardTitle>
            <CardDescription className="text-orange-100 mt-2 text-lg">
              Suppose you wanted to do a transaction from a remote client to a
              server as fast as possible. Would you use UDP or TCP? Why?
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Wifi className="h-6 w-6 text-orange-600" />
                <h3 className="text-xl font-semibold text-gray-800">
                  Answer: Protocol Selection for Fast Transactions
                </h3>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg border border-orange-200 mb-6">
                <h4 className="font-semibold text-orange-800 mb-3 flex items-center gap-2 text-lg">
                  <Badge variant="default" className="bg-orange-600">
                    Recommendation
                  </Badge>
                  Use UDP (User Datagram Protocol)
                </h4>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4 text-lg">
                    Why UDP is better for fast transactions:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-5 rounded-lg border border-orange-200">
                      <h5 className="font-medium text-orange-800 mb-2">
                        UDP is connectionless
                      </h5>
                      <p className="text-sm text-gray-600">
                        Has lower overhead, and does not require a handshake
                        like TCP
                      </p>
                    </div>
                    <div className="bg-white p-5 rounded-lg border border-orange-200">
                      <h5 className="font-medium text-orange-800 mb-2">
                        Faster for transactions
                      </h5>
                      <p className="text-sm text-gray-600">
                        Where you need minimal delay and can tolerate possible
                        packet loss (e.g., DNS queries)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Question 5: UDP Checksum */}
        <Card className="mb-8 shadow-lg border-0">
          <CardHeader className="bg-red-600 text-white">
            <CardTitle className="flex items-center gap-2">
              <HelpCircle className="h-6 w-6" />
              Question 5
            </CardTitle>
            <CardDescription className="text-red-100 mt-2 text-lg">
              Suppose that the UDP receiver computes the Internet checksum for
              the received UDP segment and finds that it matches the value
              carried in the checksum field. Can the receiver be absolutely
              certain that no bit errors have occurred? Explain
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <XCircle className="h-6 w-6 text-red-600" />
                <h3 className="text-xl font-semibold text-gray-800">
                  Answer: UDP Checksum Reliability
                </h3>
              </div>
              <div className="bg-red-50 p-6 rounded-lg border border-red-200 mb-6">
                <div className="flex items-start gap-4">
                  <XCircle className="h-8 w-8 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2 text-lg">
                      No, it cannot be absolutely certain
                    </h4>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4 text-lg">
                    Why checksums aren't 100% reliable:
                  </h4>
                  <div className="space-y-4">
                    <div className="bg-white p-5 rounded-lg border border-red-200">
                      <h5 className="font-medium text-red-800 mb-3">
                        The Internet checksum can detect many errors, but not
                        all possible combinations of bit errors
                      </h5>
                      <p className="text-sm text-gray-600">
                        While checksums catch most transmission errors, they
                        have mathematical limitations that prevent detection of
                        certain error patterns.
                      </p>
                    </div>
                    <div className="bg-white p-5 rounded-lg border border-red-200">
                      <h5 className="font-medium text-red-800 mb-3">
                        It's possible that two or more errors may cancel each
                        other out
                      </h5>
                      <p className="text-sm text-gray-600">
                        Causing the checksum to match even if errors exist.
                        Multiple bit flips can mathematically compensate for
                        each other, making the corrupted data appear valid.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Question 6: TCP Port Numbers */}
        <Card className="mb-8 shadow-lg border-0">
          <CardHeader className="bg-indigo-600 text-white">
            <CardTitle className="flex items-center gap-2">
              <HelpCircle className="h-6 w-6" />
              Question 6
            </CardTitle>
            <CardDescription className="text-indigo-100 mt-2 text-lg">
              Consider a TCP connection between Host A and Host B. Suppose that
              the TCP segments traveling from Host A to Host B have source port
              number x and destination port number y. What are the source and
              destination port numbers for the segments traveling from Host B to
              Host A?
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <ArrowLeftRight className="h-6 w-6 text-indigo-600" />
                <h3 className="text-xl font-semibold text-gray-800">
                  Answer: TCP Port Number Reversal
                </h3>
              </div>
              <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
                <h4 className="font-semibold text-indigo-800 mb-6 text-lg">
                  For segments traveling from Host B to Host A:
                </h4>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white p-6 rounded-lg border border-indigo-200">
                    <h5 className="font-medium text-indigo-800 mb-3">
                      Source Port
                    </h5>
                    <p className="text-4xl font-bold text-indigo-600 mb-2">y</p>
                    <p className="text-sm text-gray-600">
                      Previous destination becomes source
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg border border-indigo-200">
                    <h5 className="font-medium text-indigo-800 mb-3">
                      Destination Port
                    </h5>
                    <p className="text-4xl font-bold text-indigo-600 mb-2">x</p>
                    <p className="text-sm text-gray-600">
                      Previous source becomes destination
                    </p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-indigo-200">
                  <p className="text-gray-700">
                    <strong>Explanation:</strong> Because the sender and
                    receiver switch roles for the reverse path. In TCP
                    communication, when Host B responds to Host A, it uses Host
                    A's original source port as its destination, and its own
                    original destination port becomes the source.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Question 7: Comparisons */}
        <Card className="mb-8 shadow-lg border-0">
          <CardHeader className="bg-gray-800 text-white">
            <CardTitle className="flex items-center gap-2">
              <HelpCircle className="h-6 w-6" />
              Question 7
            </CardTitle>
            <CardDescription className="text-gray-200 mt-2 text-lg">
              Comparisons
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <Network className="h-6 w-6 text-gray-800" />
              <h3 className="text-xl font-semibold text-gray-800">
                Answer: Protocol Comparisons
              </h3>
            </div>

            {/* Go-Back-N vs Selective-Repeat */}
            <div className="mb-10">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 bg-gray-100 p-3 rounded-lg">
                Go-Back-N vs Selective-Repeat
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 bg-white text-black font-bold">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-4 text-left font-semibold text-gray-800">
                        Feature
                      </th>
                      <th className="border border-gray-300 p-4 text-left font-semibold text-blue-800">
                        Go-Back-N
                      </th>
                      <th className="border border-gray-300 p-4 text-left font-semibold text-green-800">
                        Selective-Repeat
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-4 font-medium bg-gray-50">
                        Timer Maintaining
                      </td>
                      <td className="border border-gray-300 p-4">
                        Single timer for the oldest unacknowledged packet
                      </td>
                      <td className="border border-gray-300 p-4">
                        Separate timer for each unacknowledged packet
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 font-medium bg-gray-50">
                        Receiver Acknowledgment Policy
                      </td>
                      <td className="border border-gray-300 p-4">
                        Cumulative ACKs. Acknowledges last correctly received
                        in-sequence packet
                      </td>
                      <td className="border border-gray-300 p-4">
                        Individual ACKs for each correctly received packet
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 font-medium bg-gray-50">
                        Sender Retransmission Policy at Timer Expiration
                      </td>
                      <td className="border border-gray-300 p-4">
                        Retransmits all unacknowledged packets starting from the
                        oldest
                      </td>
                      <td className="border border-gray-300 p-4">
                        Retransmits only the specific packet(s) whose timer
                        expired
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <Separator className="my-8" />

            {/* End-to-End vs Network-Assisted */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4 bg-gray-100 p-3 rounded-lg">
                End-To-End vs Network-Assisted Congestion Control
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 bg-white text-black font-bold">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-4 text-left font-semibold text-gray-800">
                        Feature
                      </th>
                      <th className="border border-gray-300 p-4 text-left font-semibold text-purple-800">
                        End-To-End Congestion Control
                      </th>
                      <th className="border border-gray-300 p-4 text-left font-semibold text-orange-800">
                        Network-Assisted Congestion Control
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-4 font-medium bg-gray-50">
                        Congestion Discovery
                      </td>
                      <td className="border border-gray-300 p-4">
                        Detected by the sender via packet loss or delay
                      </td>
                      <td className="border border-gray-300 p-4">
                        Routers provide explicit feedback about congestion
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 font-medium bg-gray-50">
                        Congestion Indicators
                      </td>
                      <td className="border border-gray-300 p-4">
                        Packet loss, increased round-trip time (RTT)
                      </td>
                      <td className="border border-gray-300 p-4">
                        Setting single bit in flowing packet indicating
                        congestion to receiver that later notifies sender
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 font-medium bg-gray-50">
                        Congestion Solution
                      </td>
                      <td className="border border-gray-300 p-4">
                        Sender reduces transmission rate based on detected
                        congestion
                      </td>
                      <td className="border border-gray-300 p-4">
                        Set explicit rate as command for sender to send at
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center py-8">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Study Complete!
            </h3>
            <p className="text-gray-600">
              Review these networking concepts thoroughly for your exam. Each
              question and answer covers fundamental networking principles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextQuiz;
