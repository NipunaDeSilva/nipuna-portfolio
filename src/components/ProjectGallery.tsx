
import Image from "next/image";
import { assetPath } from "@/lib/assetPath";

type GalleryImage = {
    image: string;
    caption: string;
};

type ProjectGalleryProps = {
    images: GalleryImage[];
};

export default function ProjectGallery({
                                           images,
                                       }: ProjectGalleryProps) {
    if (images.length === 0) return null;

    return (
        <section className="mt-16">
            <h2 className="text-2xl font-bold">
                Project Screenshots
            </h2>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {images.map((item) => (
                    <figure
                        key={item.image}
                        className="overflow-hidden rounded-xl border border-gray-200 bg-white"
                    >
                        <div className="relative h-64 bg-gray-100">
                            <Image
                                src={assetPath(item.image)}
                                alt={item.caption}
                                fill
                                unoptimized
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>

                        <figcaption className="px-4 py-3 text-sm text-gray-600">
                            {item.caption}
                        </figcaption>
                    </figure>
                ))}
            </div>
        </section>
    );
}
