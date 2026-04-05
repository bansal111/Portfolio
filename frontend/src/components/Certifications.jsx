import coursera from '../assets/coursera.png';
import atal from '../assets/atal.png'
import infosys from '../assets/infosys.webp'
import redhat from '../assets/redhat.svg'
import jklu from '../assets/jklu.jpg'

const certifications = [
  {
    title: 'Programming for Everybody (Getting Started with Python)',
    platform: 'Coursera',
    date: '2023',
    link: 'https://www.coursera.org/account/accomplishments/certificate/JQKYPN8WXTVU',
    badge: coursera,
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Python Data Structures',
    platform: 'Coursera',
    date: '2023',
    link: 'https://www.coursera.org/account/accomplishments/certificate/BEZLDJMRXK3F',
    badge: coursera,
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Exploring C',
    platform: 'Coursera',
    date: '2024',
    link: 'https://www.coursera.org/account/accomplishments/certificate/RPBGS4226TCA',
    badge: coursera,
    color: 'from-green-600 to-teal-500',
  },
  {
    title: 'Hands-on Training, Research Aspects and Demonstrations in 5G Use Case Lab',
    platform: 'AICTE Training And Learning (ATAL) Academy',
    date: '2025',
    link: 'https://jklujaipur-my.sharepoint.com/:i:/g/personal/prathambansal_jklu_edu_in/IQDZQ576VuUUSaXq0Zkuo5FUAb1axuDFFXU1cPqXeVUpsPM?e=2EDcgL',
    badge: atal,
    color: 'from-orange-500 to-amber-500',
  },
  {
    title: 'Programming Using JAVA',
    platform: 'Infosys Springboard',
    date: '2025',
    link: 'https://jklujaipur-my.sharepoint.com/:b:/g/personal/prathambansal_jklu_edu_in/IQAcNzVhYLsnQa8-Y3aquN6tAYzFGTb7fAW7ye4HQK4StA0?e=s12iKx',
    badge: infosys,
    color: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'Red-Hat System Administration RH-124',
    platform: 'Red-Hat',
    date: '2025',
    link: 'https://jklujaipur-my.sharepoint.com/:b:/g/personal/prathambansal_jklu_edu_in/IQDZHzoTc1lhT7caqGOtakz4AYNnV7BV-ENlO8rn38xJVwY?e=Bxg4Up',
    badge: redhat,
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Honors List Recipient',
    platform: 'JK Lakshmipat University',
    date: '2025',
    link: 'https://jklu.edu.in/pdf/Honors-List-February-2025.pdf',
    badge: jklu,
    color: 'from-yellow-500 to-orange-500',
  },
];

const Certifications = ({ darkMode }) => {
  return (
    <section id='certifications' style={{ backgroundColor: darkMode ? '#111827' : '#f9fafb' }}
      className='py-20 overflow-hidden'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-14' data-aos='fade-up'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-3' style={{ color: darkMode ? 'white' : '#1f2937' }}>
            Certifications &{' '}
            <span style={{ background: 'linear-gradient(to right, #f97316, #f59e0b)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
              Achievements
            </span>
          </h2>
          <p style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}>
            Credentials and recognitions that shape my expertise
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {certifications.map((cert, index) => (
            <div
              key={index}
              data-aos='fade-up'
              data-aos-delay={`${index * 100}`}
              className='group relative overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/50'
              style={{
                background: darkMode ? 'linear-gradient(135deg, #1f2937, #111827)' : 'linear-gradient(135deg, #ffffff, #f9fafb)',
                borderColor: darkMode ? '#374151' : '#e5e7eb'
              }}>
              {/* Top gradient bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${cert.color}`} />

              <div className='p-6'>
                <div className='flex items-start gap-4 mb-4'>
                  <div className='text-3xl w-12 h-12 flex items-center justify-center flex-shrink-0'>
                    {typeof cert.badge === '.png' ? (
                      cert.badge
                    ) : (
                      <img src={cert.badge} alt={cert.platform} className='w-full h-full object-contain' />
                    )}
                  </div>
                  <div>
                    <h3 className='font-bold text-base mb-1' style={{ color: darkMode ? 'white' : '#1f2937' }}>
                      {cert.title}
                    </h3>
                    <p className='text-sm font-medium' style={{ color: '#f97316' }}>{cert.platform}</p>
                    <p className='text-xs mt-1' style={{ color: darkMode ? '#9ca3af' : '#6b7280' }}>📅 {cert.date}</p>
                  </div>
                </div>

                <a href={cert.link} target='_blank' rel='noreferrer'
                  className='inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full transition-all hover:shadow-md'
                  style={{ background: 'linear-gradient(to right, #f97316, #f59e0b)', color: 'white' }}>
                  View Certificate →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
