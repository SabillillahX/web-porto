'use client';

import { useState } from "react";

export default function useOnProgress() {
  const [open, setOpen] = useState(false);

  const show = () => setOpen(true);
  const hide = () => setOpen(false);

  const Dialog = open ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-gray-900 rounded-xl shadow-xl p-8 max-w-xs w-full flex flex-col items-center animate-fade-in">
        <svg
          className="w-12 h-12 text-indigo-400 mb-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h2 className="text-lg font-semibold text-white mb-2">Fitur Belum Tersedia</h2>
        <p className="text-gray-300 text-center mb-4 text-sm">
          Maaf, fitur atau halaman ini masih dalam tahap pengembangan.
        </p>
        <button
          onClick={hide}
          className="px-4 py-2 rounded bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
        >
          Tutup
        </button>
      </div>
    </div>
  ) : null;

  return { show, hide, Dialog };
}