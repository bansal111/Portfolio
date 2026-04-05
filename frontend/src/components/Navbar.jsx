import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon, Menu, X } from 'lucide-react'

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const observer = useRef(null);

  const navItems = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Skills', link: '#skills' },
    { name: 'Projects', link: '#projects' },
    { name: 'Timeline', link: '#timeline' },
    { name: 'Certifications', link: '#certifications' },
    { name: 'Contact', link: '#contact' },
  ];

  const lightColors = {
    navBg: 'bg-gradient-to-br from-orange-200 to-white',
    textPrimary: 'text-gray-900',
    textSecondary: 'text-gray-800',
    textActive: 'text-orange-600',
    indicator: 'from-orange-500 to-amber-500',
    button: 'from-orange-500 to-amber-500',
  };
  const darkColors = {
    navBg: 'bg-gradient-to-br from-gray-700 to-black',
    textPrimary: 'text-white',
    textSecondary: 'text-gray-300',
    textActive: 'text-orange-400',
    indicator: 'from-orange-500 to-amber-500',
    button: 'from-orange-500 to-amber-500',
  };

  const colors = darkMode ? darkColors : lightColors;

  useEffect(() => {
    const sectionIds = navItems.map(item => item.link.substring(1)); // Remove the '#' from links

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    observer.current = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Trigger when section is in the middle of viewport
      threshold: 0,
    });

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.current.observe(element);
      }
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [navItems]);

  const handleNavClick = (itemName) => {
    setActiveSection(itemName.toLowerCase());
    setIsMenuOpen(false);
  };

  return (
    <div className='flex justify-center w-full fixed z-50 mt-4 px-4'>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`flex flex-col w-full max-w-5xl ${colors.navBg} backdrop-blur-lg rounded-2xl px-4 lg:px-8 py-2 shadow-lg`}>
        <div className='flex items-center justify-between w-full space-x-4'>
          {/* Logo */}
          <motion.a href='/' whileHover={{ scale: 1.05 }} className='flex items-center space-x-2'>
            <span className={`text-xl font-bold ${colors.textPrimary}`}>
              Portfolio<span className='text-orange-500'>.</span>
            </span>
          </motion.a>

          {/* Desktop nav */}
          <div className='hidden lg:flex items-center space-x-5'>
            {navItems.map((item) => (
              <a key={item.name} href={item.link} onClick={() => handleNavClick(item.name)} className='relative'>
                <motion.span
                  className={`font-medium transition-colors duration-300 ${activeSection === item.name.toLowerCase() ? colors.textActive : `${colors.textSecondary} hover:text-orange-500`}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}>
                  {item.name}
                </motion.span>
                {activeSection === item.name.toLowerCase() && (
                  <motion.div
                    layoutId='navbar-indicator'
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r rounded-full ${colors.indicator}`} />
                )}
              </a>
            ))}
          </div>

          <div className='flex items-center space-x-2'>
            {/* Dark/Light toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} transition-colors`}
              aria-label={darkMode ? 'Switch to Light mode' : 'Switch to Dark mode'}>
              {darkMode ? <Sun className='w-5 h-5 text-yellow-300' /> : <Moon className='w-5 h-5 text-gray-700' />}
            </motion.button>

            {/* Hire Me button */}
            <motion.a href='#contact'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`hidden lg:block px-6 py-2 font-semibold rounded-full bg-gradient-to-r ${colors.button} text-white shadow-md hover:shadow-lg transition-shadow`}>
              Hire Me
            </motion.a>

            {/* Mobile menu toggle */}
            <div className='flex lg:hidden'>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                {isMenuOpen
                  ? <X className={`w-5 h-5 ${darkMode ? 'text-white' : 'text-gray-700'}`} />
                  : <Menu className={`w-5 h-5 ${darkMode ? 'text-white' : 'text-gray-700'}`} />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`mt-2 lg:hidden ${darkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-lg rounded-xl shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className='px-4 py-3 space-y-1'>
              {navItems.map((item) => (
                <a key={item.name} href={item.link} onClick={() => handleNavClick(item.name)} className='block'>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className={`py-2.5 px-4 rounded-lg ${activeSection === item.name.toLowerCase() ? darkMode ? 'bg-gray-800' : 'bg-orange-50' : ''}`}>
                    <span className={`font-medium ${activeSection === item.name.toLowerCase() ? colors.textActive : colors.textSecondary}`}>
                      {item.name}
                    </span>
                  </motion.div>
                </a>
              ))}
              <motion.a href='#contact' onClick={() => setIsMenuOpen(false)} whileTap={{ scale: 0.95 }}
                className={`block py-2.5 px-4 text-center font-semibold rounded-lg bg-gradient-to-r ${colors.button} text-white`}>
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </div>
  );
};

export default Navbar;
