import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: readonly string[] | string; 
  link?: string; // <- optionnel
};

export const ProjectCard = ({ src, title, description, link }: ProjectCardProps) => {
  const items = Array.isArray(description) ? description : [description];
  const className =
    "relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]";

  const content = (
    <>
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        loading="lazy"
          className="w-full h-[250px] object-cover rounded-t-lg"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <ul className="list-disc list-inside text-sm text-neutral-700 dark:text-neutral-300 space-y-2 text-left">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );

  // Si pas de lien -> on retourne un simple <div>
  if (!link || link.trim() === "") {
    return <div className={className}>{content}</div>;
  }

  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className={className}
    >
      {content}
    </Link>
  );
};
