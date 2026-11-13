import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/components/projects";

const skills = [
  "Java",
  "C++",
  "C#",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Selenium",
  "JUnit 5",
  "SQL",
  "Git & GitHub",
];

export default function Home() {
  return (
      <main className="min-h-screen bg-white text-gray-900">

        {/* Navigation */}
        <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
            <a href="#" className="text-xl font-bold tracking-tight">
              NIPUNA SAMARAWEERA ARACHCHIGE<span className="text-blue-600">.</span>
            </a>

            <div className="hidden gap-8 text-sm font-medium text-gray-600 sm:flex">
              <a href="#about" className="hover:text-blue-600">About</a>
              <a href="#skills" className="hover:text-blue-600">Skills</a>
              <a href="#projects" className="hover:text-blue-600">Projects</a>
              <a href="#contact" className="hover:text-blue-600">Contact</a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="mx-auto flex min-h-[650px] max-w-6xl flex-col justify-center px-6 py-24">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Software Engineering Student · RMIT University
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Building software.
            <br />
            Testing ideas.
            <br />
            <span className="text-blue-600">Solving problems.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-600">
            Hi, I&apos;m Nipuna. I&apos;m a Bachelor of Software Engineering(Professional)
            student at RMIT University, interested in software development,
            quality assurance and test automation.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
                href="#projects"
                className="rounded-lg bg-gray-900 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Explore My Projects →
            </a>

            <a
                href="#contact"
                className="rounded-lg border border-gray-300 px-7 py-3.5 text-sm font-semibold transition hover:border-gray-900"
            >
              Get In Touch
            </a>
          </div>

          <div className="mt-16 flex flex-wrap gap-8 text-sm text-gray-500">
            <span>📍 Melbourne, Australia</span>
            <span>🎓 RMIT University</span>
            <span>💻 Software Engineering</span>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="border-t border-gray-100 bg-gray-50">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
              Introduction
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">About Me</h2>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-gray-600">
              I am currently pursuing a Bachelor of Software Engineering
              (Professional) at RMIT University. Through my university
              projects, I have gained experience in programming, full-stack
              development and software testing.

              I enjoy solving technical problems, learning new technologies
              and building applications. I am particularly interested in
              software quality, test automation and developing reliable
              software systems.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
            My Technical Toolkit
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Skills & Technologies
          </h2>

          <p className="mt-4 max-w-2xl text-gray-600">
            Technologies and tools I have worked with through my
            university studies and projects.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {skills.map((skill) => (
                <span
                    key={skill}
                    className="rounded-lg border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-700 shadow-sm transition hover:border-blue-300 hover:text-blue-600"
                >
              {skill}
            </span>
            ))}
          </div>
        </section>

        {/* Projects Placeholder */}

        {/* Projects Section */}
        <section id="projects" className="border-t border-gray-100 bg-gray-50">
          <div className="mx-auto max-w-6xl px-6 py-24">

            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
              What I've Worked On
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Featured Projects
            </h2>

            <p className="mt-4 max-w-2xl text-gray-600">
              A selection of university projects showcasing my experience
              in software development, testing and artificial intelligence.
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {projects.map((project) => (
                  <ProjectCard
                      key={project.title}
                      {...project}
                  />
              ))}
            </div>

          </div>
        </section>


        {/* Contact Section */}
        <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Get In Touch
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Let&apos;s Connect
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-gray-600">
            I&apos;m interested in software engineering internship
            opportunities where I can apply my skills, learn from
            experienced developers and contribute to real-world projects.
          </p>

          <a
              href="mailto:nipunadinuja@gmail.com"
              className="mt-8 inline-block rounded-lg bg-gray-900 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Email Me →
          </a>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-100">
          <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 px-6 py-8 text-sm text-gray-500 sm:flex-row">
            <p>© {new Date().getFullYear()} Nipuna Samaraweera Arachchige</p>
            <p>Built with Next.js, TypeScript & Tailwind CSS.</p>
          </div>
        </footer>

      </main>
  );
}
