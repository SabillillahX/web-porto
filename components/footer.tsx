'use client';

import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-6 mt-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-gray-400 text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Brown Mayers. All rights reserved.
        </span>
        <div className="flex gap-4 justify-center">
          <a
            href="https://github.com/SabillillahX"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href="https://linkedin.com/in/sabillillah"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}