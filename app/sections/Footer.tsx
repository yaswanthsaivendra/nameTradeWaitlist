const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-[#111111] text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-y-4 px-6 md:flex-row md:items-center">
          {/* COMPANY INFO */}
          <div className="text-2xl font-bold">
            <img src="/goDaddy.svg" alt="Logo" className="w-32" />
            DomSell
          </div>
          <div className="flex flex-col items-start">
            {/* Contact Info */}
            <div className="flex flex-row items-center justify-center text-center">
              <h3 className="text-lg text-gray-400">Contact:</h3>
              <p className="ml-2 flex items-center justify-center font-normal text-white">
                info@example.com
              </p>
            </div>

            {/* Credits */}
            <div className="text-center">
              <p className="text-gray-400">
                Made with ❤️ by{" "}
                <a
                  href="https://x.com/Yash0x01"
                  target="_blank"
                  className="font-normal text-white underline"
                >
                  yash
                </a>{" "}
                &{" "}
                <a
                  href="https://x.com/dev_nilanxhal"
                  target="_blank"
                  className="font-normal text-white underline"
                >
                  nilanchal
                </a>
              </p>
            </div>
          </div>{" "}
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} DomSell. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
