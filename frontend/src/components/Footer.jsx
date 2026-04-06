import { FaGithub, FaLinkedin, FaTwitter, FaHeart, FaEnvelope, FaVideo } from 'react-icons/fa';

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: darkMode ? 'linear-gradient(to bottom, #0d182e, #111827)' : 'linear-gradient(to bottom, #f3f4f6, #e5e7eb)',
        borderColor: darkMode ? '#374151' : '#d1d5db'
      }}
      className='border-t'>
      <div className='container mx-auto px-4 py-8'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
          <div className='text-center md:text-left'>
            <h3 className='text-2xl font-bold mb-1' style={{ color: darkMode ? 'white' : '#1f2937' }}>
              Portfolio<span className='text-orange-500'>.</span>
            </h3>
            <p className='text-sm' style={{ color: darkMode ? '#9ca3af' : '#6b7280' }}>
              VLSI • Signal Processing • Full-Stack Development
            </p>
          </div>

          {/* CV Download links */}
          <div className='flex flex-col sm:flex-row gap-2 text-sm'>
            <a href='https://portfolio-chv3.vercel.app/api/download/pdf' target='_blank' rel='noreferrer'
              className='px-4 py-2 rounded-full font-medium text-white transition-all hover:shadow-md hover:shadow-orange-500/30'
              style={{ background: 'linear-gradient(to right, #f97316, #f59e0b)' }}>
              📄 Download CV (PDF)
            </a>
            <a href='https://portfolio-chv3.vercel.app/api/download/docx' target='_blank' rel='noreferrer'
              className='px-4 py-2 rounded-full font-medium transition-all border'
              style={{
                borderColor: '#f97316',
                color: darkMode ? '#fb923c' : '#ea580c',
                background: darkMode ? 'transparent' : 'white'
              }}>
              📝 Download CV (DOCX)
            </a>
            <a href='https://jklujaipur-my.sharepoint.com/:v:/g/personal/prathambansal_jklu_edu_in/IQBnfKVNtjMWQr8LrZipVAlfAXsOjstfXz0N2IzXF802bFw?e=2ceotp' target='_blank' rel='noreferrer'
              className='px-4 py-2 rounded-full font-medium text-white transition-all hover:shadow-md hover:shadow-orange-500/30 flex items-center gap-2'
              style={{ background: 'linear-gradient(to right, #f97316, #f59e0b)' }}>
              <FaVideo className='text-sm' />
              Video Resume
            </a>
          </div>

          <div className='flex gap-4'>
            <a href='https://github.com/bansal111' target='_blank' rel='noreferrer' aria-label='GitHub'
              className='w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all'
              style={{ background: darkMode ? '#374151' : '#e5e7eb', color: darkMode ? 'white' : '#374151' }}>
              <FaGithub />
            </a>
            <a href='https://www.linkedin.com/in/pratham-bansal-480318288/' target='_blank' rel='noreferrer' aria-label='LinkedIn'
              className='w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all'
              style={{ background: darkMode ? '#374151' : '#e5e7eb', color: darkMode ? 'white' : '#374151' }}>
              <FaLinkedin />
            </a>
            <a href='mailto:prathambansal111.co@gmail.com' aria-label='Email'
              className='w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all'
              style={{ background: darkMode ? '#374151' : '#e5e7eb', color: darkMode ? 'white' : '#374151' }}>
              <FaEnvelope />
            </a>
          </div>

          <div className='text-center md:text-right'>
            <p className='text-sm flex items-center justify-center md:justify-end gap-1' style={{ color: darkMode ? '#9ca3af' : '#6b7280' }}>
              © {currentYear} Made with <FaHeart className='text-red-500 mx-0.5' /> by{' '}
              <span className='text-orange-500 font-semibold ml-1'>Pratham Bansal</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
