const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-row items-center justify-between">
          {/* Contact Info */}
          <div className="text-center">
            <h3 className="text-white text-lg font-semibold mb-2">Contact</h3>
            <p className="flex items-center justify-center text-gray-400">
              <span className="mr-2">✉️</span> info@example.com
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} DomSell. All rights reserved.
            </p>
          </div>

          {/* Credits */}
          <div className="text-center">
            <p className="text-gray-400">
              Made with ❤️ by yash & nilanchal
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
