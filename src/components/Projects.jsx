import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const [expanded, setExpanded] = useState(null);

  const projects = [
   

    /* INVENTOCUBE PROJECTS */
    {
      name: "Beba Brews",
      description: "Beverage and brewery website",
      technologies: ["React", "CSS", "JavaScript"],
      github: "https://bebabrews.com/",
    },
    {
      name: "Omer Perfumes",
      description: "Perfume and fragrance e-commerce site",
      technologies: ["React", "Tailwind CSS"],
      github: "https://www.omerperfumes.com/",
    },
    {
      name: "STUN Pakistan",
      description: "Website for STUN brand",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://www.stun.com.pk/",
    },
    {
      name: "Confido PK",
      description: "Confido Pakistan website",
      technologies: ["React", "Tailwind CSS"],
      github: "https://confido.pk/",
    },
    {
      name: "Innovoco Cube",
      description: "Innovoco Cube platform",
      technologies: ["React", "Next.js"],
      github: "https://inventocube.com/",
    },
    {
      name: "Noren PK",
      description: "Noren Pakistan website",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://www.noren.com.pk/",
    },
    {
      name: "United Ummah",
      description: "Online community platform",
      technologies: ["React", "Node.js"],
      github: "https://unitedummah.online/",
    },
    {
      name: "Replica Copy Industries",
      description: "Industrial copywriting website",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://replicacopyindustries.com/",
    },
    {
      name: "Glammar Paints",
      description: "Paint and coating website",
      technologies: ["React", "Tailwind CSS"],
      github: "https://www.glamurpaints.com/",
    },
    {
      name: "Rungdo",
      description: "Rungdo platform",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://rungdo.com/",
    },
    {
      name: "Literary Publisher",
      description: "React-based literary publishing platform",
      technologies: ["React", "Tailwind CSS"],
      github: "https://literarypublisher-react.vercel.app/",
    },
    {
      name: "Taha Hashmi Portfolio",
      description: "Personal portfolio website",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://tahahashmi.pro/",
    },
    {
      name: "AMG Landscapes",
      description: "Landscape architecture website",
      technologies: ["React", "Tailwind CSS"],
      github: "https://amg-landscapes.vercel.app/",
    },
    {
      name: "United Ummah (Duplicate)",
      description: "Online community platform - alternate entry",
      technologies: ["React", "Node.js"],
      github: "https://unitedummah.online/",
    },

    /* PERSONAL PROJECTS */
    {
      name: "Apna Daastakhwan",
      description: "Personal website",
      technologies: ["React", "Tailwind CSS"],
      github: "https://apnadaastakhwan.vercel.app/",
    },
    {
      name: "UX System Frontend",
      description: "User experience system frontend",
      technologies: ["React", "Tailwind CSS"],
      github: "https://ux-system-frontend.vercel.app/",
    },
    {
      name: "Tech BioSanct",
      description: "Biosanct technology website",
      technologies: ["React", "Tailwind CSS"],
      github: "https://tech.biosanct.com/",
    },
    {
      name: "Hey Ki Dora",
      description: "Children's or personal site",
      technologies: ["React", "Tailwind CSS"],
      github: "https://heykiddora.com/",
    },
    {
      name: "Digital Experts",
      description: "Digital experts platform",
      technologies: ["React", "Tailwind CSS"],
      github: "https://digitalexperts.dev/",
    },
    {
      name: "Study Fi Six",
      description: "Study and fitness tracking app",
      technologies: ["React", "Tailwind CSS"],
      github: "https://studi-fi-six.vercel.app/",
    },
    {
      name: "Chess Pro 360",
      description: "Chess game and analysis platform",
      technologies: ["React", "Tailwind CSS"],
      github: "https://chesspro360.vercel.app/",
    },
    {
      name: "Anatomy 6RZE",
      description: "Anatomy learning platform",
      technologies: ["React", "Tailwind CSS"],
      github: "https://anatomy-6rze.vercel.app/",
    },
    {
      name: "Shahrukh Brothers",
      description: "Brothers' business website",
      technologies: ["React", "Tailwind CSS"],
      github: "https://shahrukh-brothers.vercel.app/",
    },
    {
      name: "Vape Nest",
      description: "Vaping community website",
      technologies: ["React", "Tailwind CSS"],
      github: "https://vape-nest.vercel.app/",
    },
    {
      name: "Escholy",
      description: "Educational school platform",
      technologies: ["React", "Tailwind CSS"],
      github: "https://escholy.vercel.app/",
    },
    {
      name: "Potentials Dev Plus",
      description: "Development community platform",
      technologies: ["React", "Tailwind CSS"],
      github: "https://potentialsdevplus.vercel.app/",
    },
    {
      name: "4K Stream UK",
      description: "4K streaming service UK",
      technologies: ["React", "Tailwind CSS"],
      github: "https://4kstreamuk.vercel.app/",
    },
    {
      name: "Arc Urdu News",
      description: "Urdu news website",
      technologies: ["React", "Tailwind CSS"],
      github: "https://arc-urdu-news-qi2cbgskh-sohail-asghars-projects.vercel.app/",
    },
    {
      name: "HRM Project",
      description: "Human Resource Management project",
      technologies: ["React", "Tailwind CSS"],
      github: "https://hrm-project-kappa.vercel.app/",
    },
  ];

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="mx-auto px-6 py-10">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-black/30 border border-green-500 hover:border-green-400 hover:shadow-green-500/20 shadow-xl 
                       backdrop-blur-md rounded-2xl p-5 text-white transition-all duration-300 hover:scale-[1.02]"
          >
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleExpand(index)}
            >
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-code text-green-400 text-xl"></i>
                <h3 className="text-lg font-semibold">{project.name}</h3>
              </div>
              <motion.i
                className="fa-solid fa-chevron-down text-green-400"
                animate={{ rotate: expanded === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <AnimatePresence initial={false}>
              {expanded === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden mt-4 space-y-3"
                >
                  <p className="text-gray-300 text-sm">{project.description}</p>

                  <div>
                    <h4 className="text-green-400 font-semibold text-sm">🛠 Technologies:</h4>
                    <ul className="list-disc list-inside text-gray-300 text-sm pl-2">
                      {project.technologies.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </ul>
                  </div>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-green-300 hover:text-green-500 text-sm transition"
                    >
                      <i className="fa-brands fa-github" />
                      View on GitHub
                    </a>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
