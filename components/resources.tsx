import { BookOpen } from "lucide-react"

const blogs = [
  {
    title: "How AI is Transforming Warehouse Operations in 2025",
    excerpt:
      "Discover how AI-powered systems enable accurate demand forecasting, inventory automation, and predictive maintenance.",
    date: "Nov 2024",
  },
  {
    title: "The Power of Real-Time Visibility in Supply Chain",
    excerpt: "Learn why real-time tracking is essential for warehouse efficiency and how smart systems reduce losses.",
    date: "Oct 2024",
  },
  {
    title: "The Vault vs. Traditional WMS: Key Benefits",
    excerpt:
      "Understand how modern WMS technology delivers operational excellence with AI, automation, and real-time insights.",
    date: "Sep 2024",
  },
  {
    title: "Top 7 Warehouse Automation Trends for 2025",
    excerpt:
      "Explore robotics, smart conveyors, AI routing, and automation trends redefining warehouse productivity this year.",
    date: "Jan 2025",
  },
  {
    title: "Why Every Warehouse Needs Advanced Slotting Optimization",
    excerpt:
      "Reduce travel time, increase picking accuracy, and streamline order fulfillment with intelligent slotting strategies.",
    date: "Dec 2024",
  },
  {
    title: "How WMS Improves Multi-Client 3PL Operations",
    excerpt:
      "Learn how a modern WMS simplifies billing, client segregation, reporting, and real-time order visibility for 3PLs.",
    date: "Dec 2024",
  },
]

export function Resources() {
  return (
    <section id="resources" className="pt-6 md:pt-10 pb-20 md:pb-10 bg-gray-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Resources & Insights</h2>
          <p className="text-xl text-gray-600">
            Stay updated on industry trends, best practices, and warehouse transformation strategies.
          </p>
        </div>

        {/* Blog Articles */}
        <div>
          <div className="flex items-center gap-2 mb-8">
            <BookOpen className="w-6 h-6" style={{ color: "#003b66" }} />
            <h3 className="text-2xl font-bold text-gray-900">Blog Articles</h3>
          </div>

          {/* EXACT SAME AS YOUR OLD DESIGN - 3 COLUMN GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-all cursor-pointer"
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{blog.title}</h4>
                <p className="text-gray-600 mb-3 text-sm">{blog.excerpt}</p>
                <span className="text-xs text-gray-500">{blog.date}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
