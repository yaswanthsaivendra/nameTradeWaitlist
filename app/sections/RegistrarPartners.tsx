import Image from "next/image";

const RegistrarPartners = () => {
  const registrars = [
    {
      name: "GoDaddy",
      logo: "/goDaddy.svg",
      alt: "GoDaddy logo",
    },
    {
      name: "Namecheap",
      logo: "/nameCheap.svg",
      alt: "Namecheap logo",
    },
  ];

  return (
    <section className="pt-10">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-xl font-semibold text-white md:text-2xl">
          Connect with any of these
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-x-12">
          {registrars.map((registrar) => (
            <div
              key={registrar.name}
              className="relative h-24 w-32 brightness-0 invert transition-all duration-300 hover:brightness-100 hover:invert-0 md:w-48"
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
  );
};

export default RegistrarPartners;
