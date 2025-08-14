import { Button } from "../components/ui/button"
import { CheckCircle2, Lock } from "lucide-react"

export default function MembershipPlans() {
  return (
    <section className="bg-gradient-to-b from-[#f0fffc] to-[#f9fff1] py-16 px-6 lg:px-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="bg-green-100 text-green-800 text-xs font-semibold px-4 py-1 rounded-full uppercase">
          Membership
        </span>
        <h2 className="mt-4 text-4xl font-bold text-gray-900">
          AI Academy membership plans.
        </h2>
        <p className="mt-3 text-gray-600">
          Tailored for beginners and experts alike, our academy empowers you with the
          knowledge and tools to thrive in the AI-driven world.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* AI Learner Membership */}
        <div className="bg-white rounded-2xl  p-8 flex flex-col">
          <h3 className="text-xl font-semibold text-gray-900">
            AI Learner Membership
          </h3>
          <p className="text-gray-500 text-sm">Beginners & AI Enthusiasts</p>
          <div className="mt-6 bg-green-50 rounded-xl p-6 text-center">
            <p className="text-4xl font-bold text-green-700">$1000</p>
            <p className="text-gray-600 text-sm">USD / month or $12000 / year</p>
            <Button className="mt-5 bg-green-700 hover:bg-green-800 text-white rounded-full px-8 py-3">
              Get Started
            </Button>
            <div className="flex items-center justify-center mt-3 text-xs text-gray-500">
              <Lock size={14} className="mr-1" />
              Payments are secure & encrypted
            </div>
          </div>
          <div className="mt-6">
            <h4 className="font-semibold mb-3">What's included?</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              {[
                "Access to Introductory AI Courses",
                "Live Webinars with AI Experts",
                "Beginner-Friendly Projects & Tutorials",
                "Member Community Forum Access",
                "Certificate of Completion for Courses"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center">
                  <CheckCircle2 size={18} className="text-green-600 mr-2" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* AI Pro Membership */}
        <div className="from-green-500 to-yellow-200 bg-gradient-to-br rounded-2xl  p-8 text-white flex flex-col">
          <h3 className="text-xl font-semibold">AI Pro Membership</h3>
          <p className="text-green-100 text-sm">Advanced Learners & AI Professionals</p>
          <div className="mt-6 backdrop-blur-sm backdrop-opacity-50 bg-white/30 rounded-xl p-6 text-center">
            <p className="text-4xl font-bold">$2000</p>
            <p className="text-green-100 text-sm">USD / month or $24000 / year</p>
            <Button className="mt-5 bg-white text-green-700 hover:bg-gray-100 rounded-full px-8 py-3">
              Become A Member
            </Button>
            <div className="flex items-center justify-center mt-3 text-xs text-green-100">
              <Lock size={14} className="mr-1" />
              Payments are secure & encrypted
            </div>
          </div>
          <div className="mt-6">
            <h4 className="font-semibold mb-3">What's included?</h4>
            <ul className="space-y-2 text-sm">
              {[
                "All Learner Membership benefits",
                "One-on-One Mentorship with AI Experts",
                "Exclusive Masterclasses by Industry Leaders",
                "Early Access to AI Tool Updates",
                "Invitations to AI Conferences & Events"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center">
                  <CheckCircle2 size={18} className="text-white mr-2" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  )
}
