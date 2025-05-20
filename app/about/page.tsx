'use client';

import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaGithub, FaFigma } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si';

const experiences = [
  {
    title: 'Frontend Developer',
    company: 'Tech Solutions Inc.',
    period: '2023 - Present',
    description: 'Building responsive web apps with React, Next.js, and Tailwind CSS.',
  },
  {
    title: 'UI/UX Designer',
    company: 'Creative Studio',
    period: '2021 - 2023',
    description: 'Designed user interfaces and experiences for web and mobile platforms.',
  },
  // Add more experiences as needed
];

const skills = [
  { name: 'React', icon: <FaReact className="text-sky-400" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" /> },
  { name: 'GitHub', icon: <FaGithub className="text-gray-300" /> },
  { name: 'Figma', icon: <FaFigma className="text-pink-500" /> },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 px-4 py-12">
      <section className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">About Me</h1>
        <p className="text-gray-300 text-lg">
          I’m Brown Mayers, a passionate software engineer focused on building modern, user-friendly web applications. I love solving problems, designing intuitive interfaces, and learning new technologies.
        </p>
      </section>

      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-indigo-400 mb-6">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-gray-800 rounded-lg p-6 shadow flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl text-white font-bold">{exp.title}</h3>
                <p className="text-indigo-300">{exp.company}</p>
                <p className="text-gray-400">{exp.description}</p>
              </div>
              <span className="text-gray-300 mt-2 md:mt-0 md:ml-6">{exp.period}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-indigo-400 mb-6">Skills</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
          {skills.map((skill, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="text-4xl mb-2">{skill.icon}</div>
              <span className="text-gray-200 text-sm">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}