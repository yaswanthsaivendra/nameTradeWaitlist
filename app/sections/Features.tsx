import { 
  BiRefresh,
  BiBarChart,
  BiHeart,
  BiDollar,
  BiClipboard
} from 'react-icons/bi'    
import Image from 'next/image'

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
      ],
      image: "/screenshot3.jpg"
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
      ],
      image: "/screenshot2.jpg"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Powerful Features for Domain Traders
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to manage, value, and trade domains effectively
          </p>
        </div>

        {featureGroups.map((group, groupIndex) => (
          <div 
            key={groupIndex}
            className={`flex flex-col lg:flex-row items-center gap-12 mb-20 ${
              groupIndex % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            }`}
          >
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:flex-wrap justify-between gap-6">
                {group.features.map((feature) => (
                  <div 
                    key={feature.title}
                    className="md:w-[calc(50%-12px)] lg:w-full p-6 rounded-xl bg-gradient-to-br from-gray-800/80 to-gray-800/40 backdrop-blur-sm hover:from-gray-700/80 hover:to-gray-800/60 transition-all duration-300 border border-gray-700/50 shadow-lg hover:shadow-xl"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-600/20 rounded-lg p-2 flex-shrink-0 shadow-inner transform hover:scale-110 transition-transform duration-300">
                        <feature.icon className="w-8 h-8 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2 tracking-wide">
                          {feature.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className={`relative w-72 h-[540px] transform hover:scale-105 transition-transform duration-300
                ${groupIndex === 0 ? 'rotate-3' : '-rotate-3'}
              `}>
                <Image
                  src={group.image}
                  alt={`Domain marketplace mobile app screenshot ${groupIndex + 1}`}
                  fill
                  className="object-contain rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
