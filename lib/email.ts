// Purpose: Utility function to handle sending email from the contact form.
// If using EmailJS, configure client here. If using API route, define fetch/POST logic.

export async function sendContactEmail({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  // Contoh: Kirim ke API route Next.js
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message }),
  });

  if (!res.ok) {
    throw new Error('Failed to send email');
  }

  return res.json();
}

// Jika ingin pakai EmailJS, bisa gunakan kode berikut:
// import emailjs from '@emailjs/browser';
// export function sendContactEmailWithEmailJS(data: { name: string; email: string; message: string }) {
//   return emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', data, 'YOUR_PUBLIC_KEY');
// }