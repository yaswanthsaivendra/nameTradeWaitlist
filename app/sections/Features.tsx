import { 
  BiRefresh,
  BiBarChart,
  BiHeart,
  BiDollar,
  BiClipboard
} from 'react-icons/bi'    

const Features = () => {
  const features = [
    {
      title: "Simple Reselling Process",
      description: "List and sell domains with just a few clicks. Our streamlined process makes domain trading effortless.",
      icon: BiRefresh
    },
    {
      title: "Domain Portfolio & Valuation", 
      description: "Showcase your domains and get accurate portfolio valuations based on market trends and historical data.",
      icon: BiBarChart
    },
    {
      title: "Smart Favorites & Notifications",
      description: "Save domains to your watchlist and receive instant notifications when prices drop.",
      icon: BiHeart
    },
    {
      title: "Transparent Pricing",
      description: "Clear, upfront pricing with no hidden fees. Know exactly what you're paying and earning.",
      icon: BiDollar
    },
    {
      title: "Real-time Offers",
      description: "List your domains and receive instant offers from interested buyers worldwide.",
      icon: BiClipboard
    }
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Powerful Features for Domain Traders
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to manage, value, and trade domains effectively
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="p-6 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-all duration-300 border border-gray-700"
            >
              <div className="w-12 h-12 bg-blue-600/10 rounded-lg p-2 mb-6">
                <feature.icon className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
