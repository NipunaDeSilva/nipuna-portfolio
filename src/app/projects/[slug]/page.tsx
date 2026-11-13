
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/components/projects";
import ProjectGallery from "@/components/ProjectGallery";

type ProjectPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

// Generate all project pages during the static build.
export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({
                                              params,
                                          }: ProjectPageProps) {
    const { slug } = await params;

    const project = projects.find(
        (item) => item.slug === slug
    );

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white text-gray-900">
            {/* Navigation */}
            <nav className="border-b border-gray-100">
                <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
                    <Link
                        href="/"
                        className="text-xl font-bold tracking-tight"
                    >
                        NIPUNA<span className="text-blue-600">.</span>
                    </Link>

                    <Link
                        href="/#projects"
                        className="text-sm font-medium text-gray-600 transition hover:text-blue-600"
                    >
                        ← Back to projects
                    </Link>
                </div>
            </nav>

            {/* Project Details */}
            <div className="mx-auto max-w-5xl px-6 py-16">
                <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                    {project.category}
                </p>

                <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                    {project.title}
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
                    {project.description}
                </p>

                {/* Main Screenshot */}
                <div className="relative mt-10 h-64 overflow-hidden rounded-2xl bg-gray-100 sm:h-[420px]">
                    <Image
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        fill
                        unoptimized
                        priority
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 1024px"
                    />
                </div>

                <ProjectGallery images={project.gallery ?? []} />

                {/* Highlights */}
                <section className="mt-14">
                    <h2 className="text-2xl font-bold">
                        Project Highlights
                    </h2>

                    <ul className="mt-6 space-y-4">
                        {project.highlights.map((highlight) => (
                            <li
                                key={highlight}
                                className="flex items-start gap-3 text-gray-600"
                            >
                                <span className="font-bold text-blue-600">✓</span>
                                {highlight}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Technologies */}
                <section className="mt-14">
                    <h2 className="text-2xl font-bold">
                        Technologies Used
                    </h2>

                    <div className="mt-6 flex flex-wrap gap-3">
                        {project.technologies.map((technology) => (
                            <span
                                key={technology}
                                className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700"
                            >
                {technology}
              </span>
                        ))}
                    </div>
                </section>

                {/* Repository Information */}
                <section className="mt-14 rounded-xl border border-gray-200 bg-gray-50 p-6">
                    <h2 className="text-lg font-bold">
                        Source Code
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-gray-600">
                        This university project is maintained in a private
                        GitHub repository. Source code can be made available
                        upon request, subject to repository access permissions.
                    </p>
                </section>

                <div className="mt-12">
                    <Link
                        href="/#projects"
                        className="inline-flex rounded-lg bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                    >
                        ← Back to all projects
                    </Link>
                </div>
            </div>

            {/* Footer */}
            <footer className="border-t border-gray-100">
                <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-gray-500">
                    © {new Date().getFullYear()} Nipuna Samaraweera Arachchige
                </div>
            </footer>
        </main>
    );
}
