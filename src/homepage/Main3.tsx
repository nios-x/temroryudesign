import { Button } from "../components/ui/button"

export default function FeaturedPrograms() {
  return (
    <section className="bg-white py-12 px-6 lg:px-20">
      {/* Featured Badge */}
      <div className="flex items-center gap-2">
        <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
          FEATURED PROGRAM
        </span>
      </div>

      {/* Title */}
      <h2 className="mt-4 text-4xl font-bold text-gray-900 leading-tight">
        Shaping the innovators/leaders of tomorrow.
      </h2>

      {/* Subtitle */}
      <p className="mt-3 text-gray-600 max-w-2xl">
        We offer comprehensive and inclusive education programs designed to equip individuals with
        the skills to harness the power of technology efficiently.
      </p>

      {/* View All Button */}
      <div className="mt-5">
        <Button className="bg-[#00725c] text-white font-semibold rounded-full px-6 py-2 transition-transform duration-300 hover:scale-105 cursor-pointer">
          View All Programs
        </Button>
      </div>


      {/* Courses Grid */}
      <div className="mt-10 grid lg:grid-cols-2 gap-6">

        {/* AI Fundamentals Bootcamp */}
        <div className="bg-green-50 rounded-xl overflow-hidden  flex flex-col">
          <img src="https://thumbs.dreamstime.com/b/ai-machine-learning-hands-robot-human-touching-big-data-network-connection-background-science-artificial-intelligence-172987598.jpg?w=992" alt="AI Fundamentals" className="h-60 w-full object-cover" />
          <div className="p-6">
            <span className="uppercase text-green-700 font-bold text-sm">6 Weeks</span>
            <h3 className="mt-2 text-2xl font-bold">AI Fundamentals Bootcamp</h3>
            <p className="mt-2 text-gray-600">
              Learn the basics of artificial intelligence, including machine learning,
              neural networks, and data processing.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <img src="https://avatars.githubusercontent.com/u/9113740?v=4" alt="Oliver Bennett" className="h-10 w-10 rounded-full object-cover" />
              <div>
                <p className="font-semibold text-gray-900">Oliver Bennett</p>
                <p className="text-sm text-gray-500">Deep Learning Specialist</p>
              </div>
            </div>
            <div className="mt-5 flex justify-between items-center">
              <span className="text-2xl font-bold text-gray-900">$899</span>
              <Button className="bg-[#00725c] text-white rounded-full px-5 py-2 cursor-pointer">
                Join Now
              </Button>
            </div>
          </div>
        </div>

        {/* Machine Learning Masterclass */}
        <div className="bg-green-50 rounded-xl overflow-hidden  flex flex-col">
          <img src="https://thumbs.dreamstime.com/b/llm-large-language-model-ai-technology-concept-man-holds-icons-artificial-intelligence-deep-learning-machine-nlp-natural-371315117.jpg?w=768" alt="Machine Learning" className="h-60 w-full object-cover" />
          <div className="p-6">
            <span className="uppercase text-green-700 font-bold text-sm">On-Demand</span>
            <h3 className="mt-2 text-2xl font-bold">Machine Learning Masterclass</h3>
            <p className="mt-2 text-gray-600">
              Covering topics like supervised learning, unsupervised learning, and model optimization.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <img src="https://avatars.githubusercontent.com/u/9113740?v=4" alt="David Wilson" className="h-10 w-10 rounded-full object-cover" />
              <div>
                <p className="font-semibold text-gray-900">David Wilson</p>
                <p className="text-sm text-gray-500">Machine Learning Specialist</p>
              </div>
            </div>
            <div className="mt-5 flex justify-between items-center">
              <span className="text-2xl font-bold text-gray-900">$399</span>
              <Button className="bg-[#00725c] text-white rounded-full px-5 py-2 cursor-pointer">
                Join Now
              </Button>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}
