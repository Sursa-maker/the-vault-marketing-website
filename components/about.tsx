import { Lightbulb, Globe, Users, Target } from "lucide-react"

export function About() {
  return (
    <section id="about" className="pt-10 md:pt-10 pb-14 md:pb-10 bg-gray-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About The Vault</h2>
          <p className="text-xl text-gray-600">
            Transforming global supply chains through intelligent automation and real-time visibility.
          </p>
        </div>

        {/* Mission & Values Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Mission */}
          <div className="bg-white p-10 rounded-lg border border-gray-200">
            <div
              className="w-14 h-14 rounded-lg flex items-center justify-center mb-6"
              style={{ backgroundColor: "#003b66", color: "white" }}
            >
              <Target size={28} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To empower logistics and warehouse operations with intelligent technology that drives efficiency,
              visibility, and sustainable growth. We believe every business deserves access to world-class supply chain
              solutions.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-10 rounded-lg border border-gray-200">
            <div
              className="w-14 h-14 rounded-lg flex items-center justify-center mb-6"
              style={{ backgroundColor: "#257ec0", color: "white" }}
            >
              <Lightbulb size={28} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              A world where supply chain complexity is simplified, operations run autonomously, and businesses can focus
              on growth. We're building the future of logistics today.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-white rounded-lg p-12 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center">Our Core Values</h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: "#ffb500", color: "white" }}
              >
                <Users size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Customer-First</h4>
              <p className="text-gray-600">
                We listen to our customers and continuously evolve to solve their real-world challenges.
              </p>
            </div>

            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: "#003b66", color: "white" }}
              >
                <Lightbulb size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Innovation</h4>
              <p className="text-gray-600">
                Technology should simplify, not complicate. We push boundaries to create intuitive solutions.
              </p>
            </div>

            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: "#257ec0", color: "white" }}
              >
                <Globe size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Global Impact</h4>
              <p className="text-gray-600">
                Building systems for a connected world. Sustainability and social responsibility drive our decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
