import Image from 'next/image'

const RegistrarPartners = () => {
  const registrars = [
    {
      name: 'GoDaddy',
      logo: '/goDaddy.svg',
      alt: 'GoDaddy logo'
    },
    {
      name: 'Namecheap',
      logo: '/nameCheap.svg',
      alt: 'Namecheap logo'
    }
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-semibold text-white mb-4">
          Trusted Domain Registrar Partners
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Seamlessly integrated with industry-leading domain registrars
        </p>
        <div className="flex justify-center items-center gap-12 flex-wrap">
          {registrars.map((registrar) => (
            <div 
              key={registrar.name}
              className="relative w-48 h-24 brightness-0 invert hover:brightness-100 hover:invert-0 transition-all duration-300"
            >
              <Image
                src={registrar.logo}
                alt={registrar.alt}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RegistrarPartners
