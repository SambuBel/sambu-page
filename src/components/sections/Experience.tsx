"use client";
import { FaBriefcase, FaCode } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      title: "Desarrolladora Frontend",
      company: "Empresa X",
      date: "2022 - Presente",
      description: "Creación de interfaces responsivas y optimización de rendimiento en Next.js.",
      icon: <FaCode />,
    },
    {
      title: "Diseñadora UX/UI",
      company: "Startup Y",
      date: "2020 - 2022",
      description: "Diseño de experiencias de usuario intuitivas y accesibles para aplicaciones móviles.",
      icon: <FaBriefcase />,
    },
  ];

  return (
    <section id="experience" className="py-16 bg-base-200 flex flex-col flex-1 items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Mi Experiencia</h1>

      <div className="timeline timeline-vertical">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-start">{exp.date}</div>
            <div className="timeline-middle">
              <div className="badge badge-primary p-3">{exp.icon}</div>
            </div>
            <div className="timeline-end">
              <div className="card bg-base-100 shadow-lg p-4">
                <h2 className="text-lg font-semibold">{exp.title}</h2>
                <p className="text-sm text-gray-500">{exp.company}</p>
                <p className="text-sm mt-2">{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
