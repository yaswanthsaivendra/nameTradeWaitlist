import {
  BiRefresh,
  BiBarChart,
  BiHeart,
  BiDollar,
  BiClipboard,
} from "react-icons/bi";

const Features = () => {
  const featureGroups = [
    {
      features: [
        {
          title: "Simple Reselling Process",
          description:
            "List and sell domains with just a few clicks. Our streamlined process makes domain trading effortless.",
          icon: BiRefresh,
        },
        {
          title: "Domain Portfolio & Valuation",
          description:
            "Showcase your domains and get accurate portfolio valuations based on market trends.",
          icon: BiBarChart,
        },
        {
          title: "Smart Favorites & Notifications",
          description:
            "Save domains to your watchlist and receive instant notifications when prices drop.",
          icon: BiHeart,
        },
      ],
    },
    {
      features: [
        {
          title: "Transparent Pricing",
          description:
            "Clear, upfront pricing with no hidden fees. Know exactly what you're paying and earning.",
          icon: BiDollar,
        },
        {
          title: "Real-time Offers",
          description:
            "List your domains and receive instant offers from interested buyers worldwide.",
          icon: BiClipboard,
        },
        {
          title: "Price Comparison",
          description:
            "Compare domain prices across different registrars to ensure you get the best deal available.",
          icon: BiBarChart,
        },
      ],
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#111111] to-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-2xl font-bold text-white">
            Powerful Features for Domain Traders
          </h2>
          <p className="mx-auto max-w-2xl text-base text-gray-400">
            Everything you need to manage, value, and trade domains effectively
          </p>
        </div>

        {featureGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="mb-3 md:mb-12">
            <div className="mx-auto grid w-full gap-y-3 md:w-[80%] md:gap-6 lg:grid-cols-3">
              {group.features.map((feature) => (
                <div
                  key={feature.title}
                  className="group flex flex-col items-center rounded-xl border border-gray-700/50 bg-gradient-to-br from-gray-800/80 to-gray-800/40 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:from-gray-700/80 hover:to-gray-800/60 hover:shadow-xl md:items-start"
                >
                  <div className="mb-4 h-12 w-12 flex-shrink-0 transform rounded-xl bg-blue-600/20 p-2.5 shadow-inner transition-transform duration-300 group-hover:scale-110">
                    <feature.icon className="h-full w-full text-blue-400" />
                  </div>
                  <h3 className="mb-2 text-center text-xl font-semibold tracking-wide text-white md:text-start">
                    {feature.title}
                  </h3>
                  <p className="text-center text-base leading-relaxed text-gray-400 md:text-start">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
