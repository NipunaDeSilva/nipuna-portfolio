
import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

type ProjectCardProps = {
    title: string;
    category: string;
    description: string;
    image: string;
    technologies: string[];
    highlights: string[];
    slug: string;
};

export default function ProjectCard({
                                        title,
                                        category,
                                        description,
                                        image,
                                        technologies,
                                        highlights,
                                        slug
                                    }: ProjectCardProps) {
    return (
        <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">

            {/* Project Image */}
            <div className="relative h-56 overflow-hidden bg-gray-100">
                <Image
                    src={assetPath(image)}
                    alt={`${title} project screenshot`}
                    fill
                    unoptimized
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>

            {/* Project Information */}
            <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
                    {category}
                </p>

                <h3 className="mt-3 text-xl font-bold text-gray-900">
                    {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                    {description}
                </p>

                {/* Highlights */}
                <ul className="mt-5 space-y-2">
                    {highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-2 text-sm text-gray-600">
                            <span className="text-blue-600">✓</span>
                            {highlight}
                        </li>
                    ))}
                </ul>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                    {technologies.map((technology) => (
                        <span
                            key={technology}
                            className="rounded-md bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700"
                        >
              {technology}
            </span>
                    ))}
                </div>


                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 pt-4">
  <span className="text-xs font-medium text-gray-500">
    Private repository · Available upon request
  </span>

                    <Link
                        href={`/projects/${slug}`}
                        className="text-sm font-semibold text-blue-600 transition hover:text-blue-800"
                    >
                        View Project →
                    </Link>
                </div>

            </div>
        </article>
    );
}
