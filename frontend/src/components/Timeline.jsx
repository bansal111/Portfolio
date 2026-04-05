const timelineData = [
  {
    type: 'education',
    title: 'Secondary (Class IX andX)',
    institution: 'K.L Arya D.A.V Public School, Hisar',
    period: '2018 – 2020',
    description: 'Secondary Education with core subjects including Mathematics, Science, and English.',
    icon: '📚',
  },
  {
    type: 'education',
    title: 'Senior Secondary (Class XI and XII)',
    institution: 'The Vivekanand School, Delhi',
    period: '2020 – 2022',
    description: 'Science stream with Mathematics, Physics, and Computer Science.',
    icon: '📚',
  },
  {
    type: 'education',
    title: 'Bachelor of Technology - Computer and Communication Engineering',
    institution: 'JK Lakshmipat University, Jaipur',
    period: '2023 – 2026',
    description: 'Pursuing B.Tech in Computer & CommunicationEngineering with specialisation in VLSI and Minor in Mathematics.',
    icon: '🎓',
  },
  {
    type: 'experience',
    title: 'Signal Processing Research Intern',
    institution: 'LNMIIT, Jaipur',
    period: 'May 2025 – Jul 2025',
    description: 'Designed and implemented a system to analyze human motion using Continuous Wave (CW) Doppler radar by capturing frequency shifts caused by movement. Processed radar signals using MATLAB to extract velocity information and identify motion patterns, demonstrating practical applications of signal processing in real-time sensing.',
    icon: '💼',
  },
];

const Timeline = ({ darkMode }) => {
  return (
    <section id='timeline' style={{ backgroundColor: darkMode ? '#0d182e' : '#f0f4ff' }}
      className='py-20 overflow-hidden'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-14' data-aos='fade-up'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-3' style={{ color: darkMode ? 'white' : '#1f2937' }}>
            Education &{' '}
            <span style={{ background: 'linear-gradient(to right, #f97316, #f59e0b)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
              Experience
            </span>
          </h2>
          <p style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}>My academic and professional journey</p>
        </div>

        <div className='relative max-w-3xl mx-auto'>
          {/* Vertical line */}
          <div className='absolute left-1/2 transform -translate-x-1/2 h-full w-0.5'
            style={{ background: 'linear-gradient(to bottom, #f97316, #f59e0b, transparent)' }} />

          {timelineData.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={index}
                className={`relative flex ${isLeft ? 'flex-row' : 'flex-row-reverse'} items-center mb-12`}
                data-aos={isLeft ? 'fade-right' : 'fade-left'}
                data-aos-delay={`${index * 150}`}>

                {/* Card */}
                <div className={`w-5/12 ${isLeft ? 'pr-6 text-right' : 'pl-6 text-left'}`}>
                  <div
                    style={{
                      background: darkMode ? 'linear-gradient(135deg, #1f2937, #111827)' : 'linear-gradient(135deg, #ffffff, #f9fafb)',
                      borderColor: darkMode ? '#374151' : '#e5e7eb'
                    }}
                    className='p-5 rounded-2xl border hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1 group'>
                    <div className={`flex items-center gap-2 mb-2 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                        item.type === 'education' ? 'bg-blue-500/20 text-blue-400' : 'bg-orange-500/20 text-orange-400'
                      }`}>
                        {item.type === 'education' ? '🎓 Education' : '💼 Experience'}
                      </span>
                    </div>
                    <h3 className='text-base font-bold mb-1' style={{ color: darkMode ? 'white' : '#1f2937' }}>
                      {item.title}
                    </h3>
                    <p className='text-sm font-medium mb-1' style={{ color: '#f97316' }}>
                      {item.institution}
                    </p>
                    <p className='text-xs mb-2' style={{ color: darkMode ? '#9ca3af' : '#6b7280' }}>
                      📅 {item.period}
                    </p>
                    <p className='text-xs leading-relaxed' style={{ color: darkMode ? '#d1d5db' : '#4b5563' }}>
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Center dot */}
                <div className='absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center text-xl z-10 shadow-lg'
                  style={{ background: 'linear-gradient(135deg, #f97316, #f59e0b)' }}>
                  {item.icon}
                </div>

                {/* Empty space for opposite side */}
                <div className='w-5/12' />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
