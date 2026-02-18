'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setNotification(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setNotification({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
        setFormData({ name: '', email: '', budget: '', message: '' });
      } else {
        setNotification({ type: 'error', message: data.error || 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      setNotification({ type: 'error', message: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setNotification(null), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="pt-8 sm:pt-12 pb-12 sm:pb-20">
      <div className="mb-8 sm:mb-10 lg:mb-16">
        <h2 className="text-5xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-black text-white leading-[0.95] mb-0 font-[family-name:var(--font-poppins)] text-center lg:text-left">
          LET'S WORK
        </h2>
        <h2 className="text-5xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-black leading-[0.95] font-[family-name:var(--font-poppins)] text-center lg:text-left" style={{color: '#353334'}}>
          TOGETHER
        </h2>
      </div>

      {/* Recruiter/Contractor Quick Contact */}
      <div className="bg-black border border-gray-700 rounded-2xl p-6 mb-8 max-w-3xl">
        <h3 className="text-xl font-bold text-white mb-3">For Recruiters & Contract Hiring</h3>
        <p className="text-gray-400 text-sm mb-4">Quick access for contract opportunities and recruitment enquiries</p>
        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:support@creativemikestudios.com"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#ef233c] text-white text-sm font-bold rounded-lg hover:bg-[#d41f35] transition-all"
          >
            Email Me
          </a>
          <a
            href="/cv/michael-adeleye-cv.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 text-white text-sm font-bold rounded-lg hover:bg-gray-600 transition-all"
          >
            Download CV
          </a>
          <a
            href="https://linkedin.com/in/michaeladeleye1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 text-white text-sm font-bold rounded-lg hover:bg-gray-600 transition-all"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Project Client Form */}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-white mb-2">Project Enquiry Form</h3>
        <p className="text-gray-400 text-sm">For project-based work and client enquiries</p>
      </div>

      {/* Notification */}
      {notification && (
        <div 
          className={`max-w-3xl mb-6 p-4 rounded-xl ${
            notification.type === 'success' 
              ? 'bg-green-500/10 border border-green-500 text-green-500' 
              : 'bg-red-500/10 border border-red-500 text-red-500'
          }`}
        >
          {notification.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-6 py-4 bg-gray-800 text-white rounded-xl border-none outline-none focus:ring-2 focus:ring-orange-500 transition-all placeholder:text-gray-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your@email.com"
              className="w-full px-6 py-4 bg-gray-800 text-white rounded-xl border-none outline-none focus:ring-2 focus:ring-orange-500 transition-all placeholder:text-gray-500"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-gray-400 mb-2">
            Budget
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-6 py-4 bg-gray-800 text-white rounded-xl border-none outline-none focus:ring-2 focus:ring-orange-500 transition-all appearance-none cursor-pointer"
            required
          >
            <option value="">Select...</option>
            <option value="< $5,000">{'< $5,000'}</option>
            <option value="$5,000 - $10,000">$5,000 - $10,000</option>
            <option value="$10,000 - $20,000">$10,000 - $20,000</option>
            <option value="$20,000 - $50,000">$20,000 - $50,000</option>
            <option value="> $50,000">{'> $50,000'}</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows={6}
            className="w-full px-6 py-4 bg-gray-800 text-white rounded-xl border-none outline-none focus:ring-2 focus:ring-orange-500 transition-all resize-none placeholder:text-gray-500"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full font-bold text-lg py-4 px-8 rounded-xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          style={{backgroundColor: '#ef233c', color: '#ffffff'}}
          onMouseEnter={(e) => !isSubmitting && (e.currentTarget.style.backgroundColor = '#d41f35')}
          onMouseLeave={(e) => !isSubmitting && (e.currentTarget.style.backgroundColor = '#ef233c')}
        >
          {isSubmitting ? 'Sending...' : 'Submit'}
        </button>
      </form>
    </section>
  );
}
