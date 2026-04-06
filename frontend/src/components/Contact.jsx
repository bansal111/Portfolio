import { useState } from 'react'
import contactImg from '../assets/prathamco.png'

const Contact = ({ darkMode }) => {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: '', error: '' });

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: '', error: '' });
    try {
      const res = await fetch('https://portfolio-chv3.vercel.app/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus({ loading: false, success: data.message, error: '' });
        setForm({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      } else {
        setStatus({ loading: false, success: '', error: data.message });
      }
    } catch {
      setStatus({ loading: false, success: '', error: 'Could not connect to server. Please try again.' });
    }
  };

  const inputStyle = {
    backgroundColor: darkMode ? '#374151' : '#faede3',
    borderColor: darkMode ? '#4b5563' : '#d1d5db',
    color: darkMode ? 'white' : '#1f2937'
  };
  const inputClass = 'w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base border focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all outline-none';

  return (
    <section id='contact' style={{ backgroundColor: darkMode ? '#111827' : '#f9fafb' }}
      className='py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-8 sm:mb-10 md:mb-12' data-aos='fade-up'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3'
            style={{ color: darkMode ? 'white' : '#1f2937' }}>
            Get In{' '}
            <span style={{ background: 'linear-gradient(to right, #f97316, #f59e0b)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
              Touch
            </span>
          </h2>
          <p className='text-base sm:text-lg md:text-xl' style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}>
            Let's discuss your project
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center'>
          <div className='flex justify-center order-2 lg:order-1' data-aos='fade-right'>
            <img src={contactImg} alt='contact' className='w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto object-contain' />
          </div>

          <form
            onSubmit={handleSubmit}
            style={{
              background: darkMode ? 'linear-gradient(to right, #1f2937, #111827)' : 'linear-gradient(to right, #ffffff, #f9fafb)',
              borderColor: darkMode ? '#374151' : '#e5e7eb'
            }}
            className='rounded-xl p-4 sm:p-6 lg:p-8 border shadow-lg order-1 lg:order-2'
            data-aos='fade-left'>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4'>
              <input type='text' name='firstName' placeholder='First Name' value={form.firstName}
                onChange={handleChange} style={inputStyle} className={inputClass} required />
              <input type='text' name='lastName' placeholder='Last Name' value={form.lastName}
                onChange={handleChange} style={inputStyle} className={inputClass} required />
            </div>
            <input type='email' name='email' placeholder='Email Address' value={form.email}
              onChange={handleChange} style={inputStyle} className={`${inputClass} mb-4`} required />
            <input type='tel' name='phone' placeholder='Phone Number (optional)' value={form.phone}
              onChange={handleChange} style={inputStyle} className={`${inputClass} mb-4`} />
            <textarea name='message' rows='4' placeholder='Your Message' value={form.message}
              onChange={handleChange} style={inputStyle} className={`${inputClass} mb-4 resize-none`} required />

            {status.success && (
              <div className='mb-4 px-4 py-3 rounded-lg bg-green-500/20 border border-green-500/40 text-green-400 text-sm'>
                ✅ {status.success}
              </div>
            )}
            {status.error && (
              <div className='mb-4 px-4 py-3 rounded-lg bg-red-500/20 border border-red-500/40 text-red-400 text-sm'>
                ❌ {status.error}
              </div>
            )}

            <button type='submit' disabled={status.loading}
              style={{ background: 'linear-gradient(to right, #f97316, #f59e0b)' }}
              className='w-full py-2 sm:py-3 text-white font-semibold rounded-lg text-sm sm:text-base hover:shadow-lg hover:shadow-orange-500/25 hover:scale-[1.02] transition-all disabled:opacity-70 disabled:cursor-not-allowed'>
              {status.loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
