'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
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
          className="w-full font-bold text-lg py-4 px-8 rounded-xl transition-all duration-300 hover:scale-[1.02]"
          style={{backgroundColor: '#ef233c', color: '#ffffff'}}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d41f35'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ef233c'}
        >
          Submit
        </button>
      </form>
    </section>
  );
}
