"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-customNavy text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center md:flex-row justify-between">
          {/* Logo or Branding */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-cyan-400">
              Muhammad <span className="text-white">Rafii</span>
            </h2>
            <p className="mt-2 text-gray-400">Fullstack Developer</p>
          </div>

          {/* Social Links */}
          <div className="mt-4 md:mt-0 flex justify-center space-x-6">
            <Link href="https://github.com" target="_blank" aria-label="GitHub">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-gray-300 hover:text-cyan-400 transition-all duration-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 2C6.48 2 2 6.48 2 12c0 4.41 2.88 8.16 6.84 9.49.5.09.68-.21.68-.47 0-.23-.01-.85-.01-1.66-2.78.61-3.36-1.34-3.36-1.34-.45-1.14-1.1-1.45-1.1-1.45-.9-.61.07-.6.07-.6 1.02.07 1.55 1.06 1.55 1.06.9 1.55 2.37 1.1 2.94.84.09-.65.35-1.1.64-1.35-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.97 1.03-2.66-.1-.25-.45-.67-.2-1.35 0 0 1.15-.36 3.76 1.37 1.09-.3 2.25-.45 3.41-.45 1.16 0 2.32.15 3.41.45 2.6-1.73 3.75-1.37 3.75-1.37.25.68-.1 1.1-.2 1.35.64.69 1.03 1.57 1.03 2.66 0 3.83-2.35 4.67-4.57 4.93.36.31.68.92.68 1.86 0 1.34-.01 2.43-.01 2.76 0 .26.18.56.68.47 3.95-1.33 6.84-5.08 6.84-9.49 0-5.52-4.48-10-10-10z"
                />
              </svg>
            </Link>

            <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-gray-300 hover:text-cyan-400 transition-all duration-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20 2H4a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V4a2 2 0 00-2-2zM9 19H5V9h4v10zm-2-11H7V7h.01c.01 0 .01 0 .01 0 .59 0 1-.44 1-1s-.44-1-1-1H7a1 1 0 00-1 1v1h-1v4h2v9zm12 11h-4v-5.75c0-2.68-3.25-2.68-3.25 0V19h-4v-10h4v4h2V9h4v10z"
                />
              </svg>
            </Link>

            <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-gray-300 hover:text-cyan-400 transition-all duration-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M23 3a10.91 10.91 0 01-3.07.84A4.48 4.48 0 0022.4 2a9.14 9.14 0 01-2.83 1.08A4.52 4.52 0 0016.5 2c-2.5 0-4.52 2.02-4.52 4.5 0 .35.04.69.1 1.02-3.76-.19-7.1-2-9.33-4.74a4.5 4.5 0 00-.61 2.27c0 1.57.8 2.95 2 3.77-1.3-.04-2.5-.4-3.56-.99-.01.03-.01.07-.01.1 0 2.18 1.56 4 3.64 4.42-.38.1-.78.16-1.19.16-.29 0-.57-.03-.85-.08.57 1.77 2.22 3.06 4.17 3.1a9.05 9.05 0 01-5.58 1.93c-.36 0-.72-.02-1.08-.06 1.98 1.27 4.35 2.01 6.88 2.01 8.26 0 12.79-6.84 12.79-12.79 0-.19 0-.37-.01-.56A9.21 9.21 0 0023 3z"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Footer Text */}
        <div className="mt-8 text-center text-gray-400">
          <p>Made with Next.js and Tailwind CSS</p>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2025 Muhammad Rafii. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
