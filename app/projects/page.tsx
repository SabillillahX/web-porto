'use client';

import Image from 'next/image';
import useOnProgress from '@/components/on-progress-dialog';

const projects = [
  {
    title: 'Flexy App',
    image: '/images/portfolio.png',
    description: 'A Simple prchasing aFlexy, a sophisticated Android application, is designed to help small to medium-sized businesses manage their inventory and cashier more easily..',
    tech: ['Flutter', 'Laravel'],
    github: 'https://github.com/hanifaslam/appflexy',
    demo: 'onprogress', // Still on progress
  },
  {
    title: 'E-commerce Store',
    image: '/images/ecommerce.png',
    description: 'A modern e-commerce platform with shopping cart and payment integration.',
    tech: ['React', 'Redux', 'Node.js'],
    github: 'https://github.com/yourusername/ecommerce-store',
    demo: 'https://ecommerce-demo.com',
  },
  // Add more projects as needed
];

export default function ProjectsPage() {
  const onProgress = useOnProgress();

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 px-4 py-12">
      <h1 className="text-3xl md:text-5xl font-bold text-white text-center mb-10">My Projects</h1>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col"
          >
            <div className="relative h-48 w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={idx === 0}
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h2 className="text-xl font-semibold text-white mb-2">{project.title}</h2>
              <p className="text-gray-300 mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-indigo-600 text-white text-xs px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:underline font-medium"
                >
                  GitHub
                </a>
                {project.demo === 'onprogress' ? (
                  <button
                    type="button"
                    onClick={onProgress.show}
                    className="text-indigo-400 hover:underline font-medium"
                  >
                    Demo
                  </button>
                ) : (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:underline font-medium"
                  >
                    Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {onProgress.Dialog}
    </main>
  );
}