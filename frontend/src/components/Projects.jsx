import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'
import project5 from '../assets/project5.png'
import project6 from '../assets/project6.png'
import {FaGithub, FaExternalLinkAlt} from 'react-icons/fa'

const Projects = ({darkMode}) => {
    const projects = [
        {
            id:1,
            title: 'Traffic Light Controller', 
            desc: 'Designed a finite state machine (FSM)-based traffic light controller for a four-way intersection, managing North, South, East, and West signals. Implemented timed transitions with Green (8 cycles) and Yellow (4 cycles) phases, with reset initializing the system to the North direction, ensuring sequential and cyclic traffic flow control.',
            image: project1,
            tags: ['Verilog', 'FPGA'],
            githubLink: 'https://github.com/bansal111/Tarffic-Light-Controller',
            demoLink: 'https://jklujaipur-my.sharepoint.com/:v:/g/personal/prathambansal_jklu_edu_in/IQDxMQ_nLDwVTrB7VRxHvAXiAZhFvKd1uDYj4TxMPsgTwi0?e=04Prec'
        },
        {
            id:2,
            title: 'Alumni Student Interaction Portal', 
            desc: 'A full-stack MERN platform enabling students to connect with alumni and faculty for mentorship, featuring real-time chat, slot-based booking, email notifications, and role-based access for events, jobs, and community interaction.',
            image: project2,
            tags: ['React', 'Node.js', "MongoDB", "Tailwind CSS", "Socket.io", "JWT", "Nodemailer", "Express.js"],
            githubLink: 'https://github.com/mananrathi23/Alumni_Portal/tree/master',
            demoLink: 'https://frontend-ten-nu-30.vercel.app'
        },
        {
            id:3,
            title: 'Orthogonal Frequency Divison Multiplexing', 
            desc: 'Implemented an OFDM system in MATLAB using BPSK and QPSK modulation techniques. Analyzed system performance by evaluating Bit Error Rate (BER) under an AWGN channel, demonstrating improved bandwidth efficiency and robustness against noise.',
            image: project3,
            tags: ['MATLAB', 'BPSK', 'QPSK'],
            githubLink: 'https://github.com/bansal111/OFDM',
            demoLink: 'https://jklujaipur-my.sharepoint.com/:v:/g/personal/prathambansal_jklu_edu_in/IQDuuJh7KfbuQq8N8MV-KgtrAclD19zVuMoCNNiW973gSjI?e=5tvYZ2'
        },
        {
            id:4,
            title: 'Advance Encryption Standard (AES)', 
            desc: 'Implemented the AES encryption algorithm in VHDL, ensuring secure data encryption and decryption processes.',
            image: project4,
            tags: ['VHDL', 'FPGA'],
            githubLink: 'https://github.com/bansal111/AES.git',
            demoLink: 'https://jklujaipur-my.sharepoint.com/:w:/g/personal/prathambansal_jklu_edu_in/IQCrH5E79qrATZVklMWIiBROATCA6-YMDAqtgzMnVUlG0gE?e=kZFkuQ'
        },
        {
            id:5,
            title: 'Statistical Analysis of SDG 3 (Good Health and Well-Being)', 
            desc: 'Conducted a data-driven analysis on Sustainable Development Goal 3 (SDG 3), focusing on health-related trends and future projections. Used statistical methods and data visualization techniques to identify patterns and predict potential outcomes.',
            image: project5,
            tags: ['Python', 'Data Analysis', 'Visualization'],
            githubLink: 'https://github.com/bansal111/Certificates-and-Project/blob/main/Maths_project_final_report.docx',
            demoLink: 'https://jklujaipur-my.sharepoint.com/:w:/g/personal/prathambansal_jklu_edu_in/IQA04Z-x77-0RLtSdhtFVQwDATSbmQXvgp9TheVLbhQmLFE?e=uLnlcO'
        },
        {
            id:6,
            title: 'Flight Route Optimisation', 
            desc: 'Developed a flight booking and routing system using the Bellman-Ford algorithm to find optimal routes based on cost and duration. Integrated bipartite graph matching to efficiently allocate seats to passengers based on preferences, ensuring optimized multi-user booking.',
            image: project6,
            tags: ['C', 'Bellman-Ford Algorithm', "Bipartite Matching"],
            githubLink: 'https://github.com/bansal111/Project-DAA-Analog-/blob/main/Flight_route_optimization.zip',
            demoLink: 'https://jklujaipur-my.sharepoint.com/:w:/g/personal/prathambansal_jklu_edu_in/IQCrH5E79qrATZVklMWIiBROATCA6-YMDAqtgzMnVUlG0gE?e=kZFkuQ'
        },
    ];
  return (
    <section id='projects' style={{backgroundColor: darkMode ? '#111827' : '#f9fafb'}} className='relative py-24'>
        <div className='container mx-auto px-4'>
            <div className='text-center mb-10' data-aos='fade-up'>
                <h2 className='text-3xl sm:text-4xl font-bold mb-3' style={{ color: darkMode ? 'white' : '#1f2937'}}>
                My <span style={{background: 'linear-gradient(to right, #f97316, #f59e0b)', WebkitBackgroundClip: 'text', backgroundClip:'text', color:'transparent'}}>
                    Projects
                </span>
                </h2>
                <p className='max-w-xl mx-auto' style={{color: darkMode ? '#d1d5db' : '#6b728'}}>
                    A showcase of my recent work
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12'>
                {projects.map((project, index)=>(
                    <div key={project.id} style={{background: darkMode ? 'linear-gradient(to right, #1f2937, #111827)' : 'linear-gradient(to right, #ffffff, #f9fafb)', borderColor: darkMode ? '#374151' : '#e5e7eb'}} className='group rounded-xl border duration-300 hover:border-orange-500/50 transition-all' data-aos='fade-up' data-aos-delay={index*100}>
                        <div className='h-36 overflow-hidden rounded-t-xl'>
                            <img src={project.image} alt={project.title} className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'/>
                        </div>
                        <div className='p-4'>
                            <h3 className='text-lg font-bold mb-2' style={{color: darkMode ? 'white' : '#1f2937'}}>
                                {project.title}
                            </h3>
                            <p className='text-sm mb-3' style={{color: darkMode ? '#d1d5db' : '#6b7280'}}>
                                {project.desc}
                            </p>
                            <div className='flex flex-wrap gap-1.5 mb-4'>
                                {project.tags.map((tag, idx)=>(
                                    <span key={idx} style={{backgroundColor: darkMode ? '#374151' : '#f3f4f6', color:darkMode ? '#d1d5db' : '#4b5563'}} className='px-2 py-1 text-xs rounded-full'>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className='flex gap-2'>
                                <a href={project.githubLink} target='_blank' rel='noreferrer' style={{backgroundColor: darkMode ? '#374151' : '#f3f4f6', color: darkMode ? 'white' : '#374151'}} className='flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm rounded-lg hover:opacity-90 transition-colors' data-aos='zoom-in' data-aos-delay='300'>
                                    <FaGithub className='text-sm'/>
                                    <span>Code</span>
                                </a>
                                {/* Demo */}
                                <a href={project.demoLink} target='_blank' rel='noreferrer' style={{background: 'linear-gradient(to right, #f97316, #f59e0b)'}} className='flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-white text-sm rounded-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all' data-aos='zoom-in' data-aos-delay='400'>
                                    <FaExternalLinkAlt className='text-sm'/>
                                    <span>Demo</span>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='text-center mt-10'>
                <a href="https://github.com/bansal111?tab=repositories" target='_blank' rel='noreferrer' style={{background: 'linear-gradient(to right, #f97316, #f59e0b)'}} className='inline-flex items-center font-semibold gap-2 px-7 py-4 text-white text-sm rounded-full hover:shadow-lg hover:shadow-orange-500/25 transition-all' data-aos='zoom-in' data-aos-delay='400'>
                    <FaGithub/>
                    <span>View All Projects</span>
                    <FaExternalLinkAlt className='text-sm'/>
                    <span>Demo</span>
                </a>
            </div>
        </div>
    </section>
  );
};

export default Projects
