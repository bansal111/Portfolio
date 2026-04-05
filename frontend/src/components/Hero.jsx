import { useEffect, useState } from 'react';
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import { DownloadIcon, Mail } from 'lucide-react';
import hero from '../assets/pratham.png'
import hi from '../assets/hi.png'

const TYPEWRITER_TEXTS = [
  'VLSI | FPGA | Signal Processing',
  'Hardware + Software Engineer',
  'Full-Stack Developer',
  'Problem Solver',
];

const Hero = ({ darkMode }) => {
  const [typewriterText, setTypewriterText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = TYPEWRITER_TEXTS[textIndex];
    const speed = isDeleting ? 60 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setTypewriterText(current.slice(0, charIndex + 1));
        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        } else {
          setCharIndex(c => c + 1);
        }
      } else {
        setTypewriterText(current.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setTextIndex(t => (t + 1) % TYPEWRITER_TEXTS.length);
          setCharIndex(0);
        } else {
          setCharIndex(c => c - 1);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  const socialIcons = [
    { icon: github, alt: 'GitHub', href: 'https://github.com/bansal111' },
    { icon: linkedin, alt: 'LinkedIn', href: 'https://www.linkedin.com/in/pratham-bansal-480318288/' },
  ];

  const darkTheme = {
    textPrimary: 'text-white',
    textSecondary: 'text-gray-300',
    buttonSecondary: 'text-white border-2 border-orange-500 hover:bg-orange-600',
    decorativeCircle: 'bg-orange-500 opacity-10',
  };
  const lightTheme = {
    textPrimary: 'text-gray-900',
    textSecondary: 'text-gray-700',
    buttonSecondary: 'text-gray-800 border-2 border-orange-500 hover:bg-orange-500 hover:text-white',
    decorativeCircle: 'bg-orange-400 opacity-20',
  };
  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <div className='relative overflow-hidden min-h-screen flex flex-col'>
      <section id='home' data-aos='fade-up' data-aos-delay='250' className='body-font z-10'>
        <div className='container mx-auto flex px-4 sm:px-8 lg:px-14 py-12 lg:py-14 flex-col lg:flex-row items-center justify-between lg:mt-14 mt-14'>
          <div className='lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left mb-12 lg:mb-0'>
            <div className='flex justify-center lg:justify-start gap-4 sm:gap-6 mb-6 sm:mb-7 w-full'>
              {socialIcons.map((icon, index) => (
                <a key={index} href={icon.href} target='_blank' rel='noreferrer'
                  className='transform hover:scale-110 transition-transform duration-300'>
                  <img src={icon.icon} alt={icon.alt}
                    className={`w-8 h-8 sm:w-10 sm:h-10 object-contain ${darkMode ? '' : 'filter brightness-75'}`} />
                </a>
              ))}
            </div>

            <h1 className={`text-3xl sm:text-4xl lg:text-5xl mb-3 font-bold ${theme.textPrimary}`}
              data-aos='fade-up' data-aos-delay='500'>
              Hi, I'm Pratham Bansal
            </h1>

            <div className='mb-4 h-9 flex items-center' data-aos='fade-up' data-aos-delay='550'>
              <span className='text-xl sm:text-2xl font-semibold'
                style={{ background: 'linear-gradient(to right, #f97316, #f59e0b)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
                {typewriterText}
              </span>
              <span className='ml-1 inline-block w-0.5 h-7 bg-orange-500 animate-pulse' />
            </div>

            <p className={`mb-6 sm:mb-8 leading-relaxed max-w-md sm:max-w-lg ${theme.textSecondary}`}
              data-aos='fade-up' data-aos-delay='600'>
              Computer and Communication Engineering student focused on VLSI, FPGA systems, and signal processing, with experience in full-stack development. Building efficient and scalable solutions.
            </p>

            <div className='w-full pt-4 sm:pt-6'>
              <div className='flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4'
                data-aos='fade-up' data-aos-delay='700'>
                <a href='http://localhost:5000/api/download/pdf' target='_blank' rel='noreferrer' className='w-full sm:w-auto'>
                  <button className='w-full sm:w-auto inline-flex items-center justify-center text-white bg-gradient-to-r from-orange-500 to-amber-500 border-0 py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300'>
                    <DownloadIcon className='w-4 h-4 sm:h-5 sm:w-5 mr-2' />
                    Download CV (PDF)
                  </button>
                </a>
                <a href='#contact' className='w-full sm:w-auto'>
                  <button className={`w-full sm:w-auto inline-flex items-center ${theme.buttonSecondary} justify-center py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300`}>
                    <Mail className='w-4 h-4 sm:w-5 sm:h-5 mr-2' />
                    Contact Me
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className='lg:w-1/2 w-full max-w-md lg:max-w-lg mt-8 lg:mt-0 flex justify-center'
            data-aos='fade-left' data-aos-delay='400'>
            <div className='relative w-4/5 sm:w-3/4 lg:w-full'>
              <div className='relative overflow-hidden'>
                <img src={hero} alt='Hero' className='w-full h-auto object-cover transform hover:scale-105 transition duration-500' />
              </div>
              <img src={hi} alt='Hi icon' className='absolute -top-2 sm:top-4 left-6 sm:left-20 w-14 sm:w-20 sm:h-20 object-contain animate-bounce opacity-90 z-10' />
            </div>
          </div>
        </div>

        <div className={`absolute -top-20 -left-20 w-40 h-40 sm:w-64 sm:h-64 ${theme.decorativeCircle} rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse hidden sm:block`} />
      </section>
    </div>
  );
};

export default Hero;
