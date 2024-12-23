import Image from 'next/image'

const AppShowcase = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center gap-8">
          <div className="relative w-64 h-[500px] transform rotate-[-6deg]">
            <Image
              src="/screenshot3.jpg" // Update with your image path
              alt="Domain marketplace mobile app screenshot 1"
              fill
              className="object-contain rounded-3xl shadow-2xl"
            />
          </div>
          <div className="relative w-64 h-[500px] transform rotate-[6deg]">
            <Image
              src="/screenshot2.jpg" // Update with your image path
              alt="Domain marketplace mobile app screenshot 2"
              fill
              className="object-contain rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppShowcase 