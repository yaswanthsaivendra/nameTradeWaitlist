import { 
  BiRefresh,
  BiBarChart,
  BiHeart,
  BiDollar,
  BiClipboard
} from 'react-icons/bi'    

const Features = () => {
  const featureGroups = [
    {
      features: [
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
        }
      ]
    },
    {
      features: [
        {
          title: "Transparent Pricing",
          description: "Clear, upfront pricing with no hidden fees. Know exactly what you're paying and earning.",
          icon: BiDollar
        },
        {
          title: "Real-time Offers",
          description: "List your domains and receive instant offers from interested buyers worldwide.",
          icon: BiClipboard
        },
        {
          title: "Price Comparison",
          description: "Compare domain prices across different registrars to ensure you get the best deal available.",
          icon: BiBarChart
        }
      ]
    }
  ]

  return (
    <section className="py-12 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-white mb-2">
            Powerful Features for Domain Traders
          </h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            Everything you need to manage, value, and trade domains effectively
          </p>
        </div>

        {featureGroups.map((group, groupIndex) => (
          <div 
            key={groupIndex}
            className="mb-12"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.features.map((feature) => (
                <div 
                  key={feature.title}
                  className="flex flex-col p-6 rounded-xl bg-gradient-to-br from-gray-800/80 to-gray-800/40 backdrop-blur-sm hover:from-gray-700/80 hover:to-gray-800/60 transition-all duration-300 border border-gray-700/50 shadow-lg hover:shadow-xl group"
                >
                  <div className="w-12 h-12 bg-blue-600/20 rounded-xl p-2.5 flex-shrink-0 shadow-inner transform group-hover:scale-110 transition-transform duration-300 mb-4">
                    <feature.icon className="w-full h-full text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-base">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
