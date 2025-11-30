'use client'
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Submitted! I'll reach out to you");

    // Clear the form
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className="max-w-xl mx-auto py-24 px-6 z-60 select-none">
      <h1 className="font-display text-5xl text-gray-400 mb-10">Contact</h1>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <input
          className="w-full p-4 rounded-xl border text-umber border-umber/20 bg-ivory"
          placeholder="Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="w-full p-4 rounded-xl text-umber border border-umber/20 bg-ivory"
          placeholder="Email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className="w-full p-4 rounded-xl text-umber border border-umber/20 bg-ivory h-40"
          placeholder="Message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          type="submit"
          className="w-full py-4 bg-clay text-ivory rounded-xl text-lg font-semibold hover:bg-ocha transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}













// 'use client'
// import { toast } from "sonner";

// export default function Contact() {
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     toast.success("Submitted! I'll reach out to you");
//   };

//   return (
//     <section className="max-w-xl mx-auto py-24 px-6 z-60 select-none">
//       <h1 className="font-display text-5xl text-gray-400 mb-10">Contact</h1>

//       <form className="space-y-6" onSubmit={handleSubmit}>
//         <input className="w-full p-4 rounded-xl border text-umber border-umber/20 bg-ivory" placeholder="Name" required />
//         <input className="w-full p-4 rounded-xl text-umber border border-umber/20 bg-ivory" placeholder="Email" type="email" required />
//         <textarea className="w-full p-4 rounded-xl text-umber border border-umber/20 bg-ivory h-40" placeholder="Message" required />

//         <button type="submit" className="w-full py-4 bg-clay text-ivory rounded-xl text-lg font-semibold hover:bg-ocha transition">
//           Send Message
//         </button>
//       </form>
//     </section>
//   );
// }
