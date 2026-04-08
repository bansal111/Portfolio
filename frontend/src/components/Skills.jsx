import react from '../assets/react.png'
import python from '../assets/python.png'
import C from '../assets/c.png'
import Cplus from '../assets/c++.png'
import Java from '../assets/java.png'
import vhdl from '../assets/vhdl.png'
import verilog from '../assets/verilog.png'
import systemverilog from '../assets/systemverliog.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import node from '../assets/node.png'
import express from '../assets/express.png'
import sql from '../assets/sql.png'
import mongodb from '../assets/mongodb.png'
import linux from '../assets/linux.png'
import ltspice from '../assets/ltspice.png'
import fpga from '../assets/fpga.png'
import matlab from '../assets/matlab.png'
import { useState } from 'react'

const skillsData = {
  All:[
    { name: 'Python', icon: python, level: 75, color: 'from-blue-500 to-indigo-500' },
    { name: 'C', icon: C, level: 80, color: 'from-yellow-500 to-amber-500' },
    { name: 'C++', icon: Cplus, level: 50, color: 'from-teal-500 to-cyan-500' },
    { name: 'Java', icon: Java, level: 90, color: 'from-blue-500 to-indigo-500' },
    { name: 'VHDL', icon: vhdl, level: 90, color: 'from-blue-500 to-indigo-500' },
    { name: 'Verilog', icon: verilog, level: 85, color: 'from-yellow-500 to-amber-500' },
    { name: 'SystemVerilog', icon: systemverilog, level: 70, color: 'from-teal-500 to-cyan-500' },
    { name: 'React.js', icon: react, level: 70, color: 'from-cyan-500 to-blue-500' },
    { name: 'Html', icon: html, level: 70, color: 'from-yellow-500 to-amber-500' },
    { name: 'CSS', icon: css, level: 60, color: 'from-teal-500 to-cyan-500' },
    { name: 'Javascript', icon: javascript, level: 90, color: 'from-blue-500 to-cyan-500' },
    { name: 'Node.Js', icon: node, level: 80, color: 'from-yellow-500 to-amber-500' },
    { name: 'Express.js', icon: express, level: 75, color: 'from-teal-500 to-cyan-500' },
    { name: 'SQL', icon: sql, level: 60, color: 'from-green-500 to-emerald-500' },
    { name: 'MongoDB', icon: mongodb, level: 80, color: 'from-teal-500 to-cyan-500' },
    { name: 'Linux', icon: linux, level: 90, color: 'from-cyan-500 to-blue-500' },
    { name: 'LtSpice', icon: ltspice, level: 92, color: 'from-green-500 to-emerald-500' },
    { name: 'FPGA', icon: fpga, level: 90, color: 'from-red-500 to-orange-500' },
    { name: 'MATLAB', icon: matlab, level: 85, color: 'from-teal-500 to-cyan-500' },
  ],
  'Programming Languages': [
    { name: 'Python', icon: python, level: 75, color: 'from-blue-500 to-indigo-500' },
    { name: 'C', icon: C, level: 80, color: 'from-yellow-500 to-amber-500' },
    { name: 'C++', icon: Cplus, level: 50, color: 'from-teal-500 to-cyan-500' },
    { name: 'Java', icon: Java, level: 90, color: 'from-blue-500 to-indigo-500' }
  ],
  'Hardware Description languages': [
    { name: 'VHDL', icon: vhdl, level: 90, color: 'from-blue-500 to-indigo-500' },
    { name: 'Verilog', icon: verilog, level: 85, color: 'from-yellow-500 to-amber-500' },
    { name: 'SystemVerilog', icon: systemverilog, level: 70, color: 'from-teal-500 to-cyan-500' },
  ],
  'Web Development': [
    { name: 'React.js', icon: react, level: 70, color: 'from-cyan-500 to-blue-500' },
    { name: 'Html', icon: html, level: 70, color: 'from-yellow-500 to-amber-500' },
    { name: 'CSS', icon: css, level: 60, color: 'from-teal-500 to-cyan-500' },
    { name: 'Javascript', icon: javascript, level: 90, color: 'from-blue-500 to-cyan-500' },
    { name: 'Node.Js', icon: node, level: 80, color: 'from-yellow-500 to-amber-500' },
    { name: 'Express.js', icon: express, level: 75, color: 'from-teal-500 to-cyan-500' },
  ],
  Database:[
    { name: 'SQL', icon: sql, level: 60, color: 'from-green-500 to-emerald-500' },
    { name: 'MongoDB', icon: mongodb, level: 80, color: 'from-teal-500 to-cyan-500' },
  ],
  'Tools & Technologies': [
    { name: 'Linux', icon: linux, level: 90, color: 'from-cyan-500 to-blue-500' },
    { name: 'LtSpice', icon: ltspice, level: 92, color: 'from-green-500 to-emerald-500' },
    { name: 'FPGA', icon: fpga, level: 90, color: 'from-red-500 to-orange-500' },
    { name: 'MATLAB', icon: matlab, level: 85, color: 'from-teal-500 to-cyan-500' },
  ],
};

const categories = Object.keys(skillsData).filter(cat => cat !== 'All');

const Skills = ({ darkMode }) => {

  return (
    <section id='skills' style={{ backgroundColor: darkMode ? '#111827' : '#f9fafb' }}
      className='py-14 relative overflow-hidden'>
      <div className='container px-5 py-14 mx-auto'>
        <div className='text-center mb-10' data-aos='fade-up'>
          <h1 className='sm:text-4xl text-3xl font-bold title-font mb-4'
            style={{ color: darkMode ? 'white' : '#1f2937' }}>
            My{' '}
            <span style={{ background: 'linear-gradient(to right, #f97316, #f59e0b)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
              Skills
            </span>
          </h1>
          <p className='text-lg max-w-2xl mx-auto leading-relaxed'
            style={{ color: darkMode ? '#d1d5db' : '#4b5563' }}>
            A collection of technologies I work with across the stack
          </p>
        </div>

        {/* Skills by Category */}
        {categories.map(cat => (
          <div key={cat} className='mb-12' data-aos='fade-up' data-aos-delay='200'>
            <h2 className='text-2xl font-bold mb-6 text-center'
              style={{ color: darkMode ? 'white' : '#1f2937' }}>
              {cat}
            </h2>
            <div className='flex flex-wrap -m-4'>
              {skillsData[cat].map((skill, index) => (
                <div key={index} className='p-4 lg:w-1/4 md:w-1/2 w-full'
                  data-aos='fade-up' data-aos-delay={`${300 + index * 100}`}>
                  <div
                    style={{
                      background: darkMode ? 'linear-gradient(to bottom right, #1f2937, #111827)' : 'linear-gradient(to bottom right, #ffffff, #f3f4f6)',
                      borderColor: darkMode ? '#374151' : '#e5e7eb'
                    }}
                    className='h-full p-6 rounded-2xl border hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2 group'>
                    <div className='flex items-center mb-6'>
                      <div
                        style={{ background: darkMode ? 'linear-gradient(to bottom right, #374151, #1f2937)' : 'linear-gradient(to bottom right, #f3f4f6, #e5e7eb)' }}
                        className='w-16 h-16 rounded-xl p-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                        <img src={skill.icon} alt={skill.name} className='w-full h-full object-contain' />
                      </div>
                      <div className='ml-4'>
                        <h3 className='text-lg font-bold' style={{ color: darkMode ? 'white' : '#1f2937' }}>
                          {skill.name}
                        </h3>
                        <span className='text-xs font-medium px-2 py-0.5 rounded-full'
                          style={{ background: darkMode ? '#374151' : '#f3f4f6', color: darkMode ? '#9ca3af' : '#6b7280' }}>
                          {cat}
                        </span>
                      </div>
                    </div>
                    <div className='mb-2 flex justify-between items-center'>
                      <span className='font-medium text-sm' style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}>
                        Proficiency
                      </span>
                      <span className='font-bold' style={{ background: 'linear-gradient(to right, #f97316, #f59e0b)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className='w-full rounded-full h-3 overflow-hidden' style={{ backgroundColor: darkMode ? '#374151' : '#e5e7eb' }}>
                      <div className={`h-full rounded-full bg-linear-to-r ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }} />
                    </div>
                    {/* Tooltip on hover */}
                    <div className={`mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs text-center py-1 px-2 rounded-lg`}
                      style={{ background: darkMode ? '#374151' : '#f3f4f6', color: darkMode ? '#d1d5db' : '#4b5563' }}>
                      {skill.level >= 90 ? '🔥 Expert' : skill.level >= 80 ? '⚡ Advanced' : '✨ Intermediate'}
                    </div>
                    <div className={`mt-4 pt-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                      <div className='h-1 rounded-full opacity-70 group-hover:w-full transition-all duration-500 w-1/3'
                        style={{ background: 'linear-gradient(to right, #f97316, #f59e0b)' }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
