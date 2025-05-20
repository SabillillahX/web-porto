'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect ke halaman home saat komponen ini dimuat dengan timeout untuk memastikan eksekusi
    const redirectTimeout = setTimeout(() => {
      window.location.href = '/home';
    }, 100);
    
    return () => clearTimeout(redirectTimeout);
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-2">Redirecting...</h2>
        <p className="text-gray-400">Please wait while we redirect you to the home page.</p>
        <div className="mt-4">
          <a href="/home" className="text-indigo-400 hover:underline">Click here if not redirected automatically</a>
        </div>
      </div>
    </div>
  );
}
