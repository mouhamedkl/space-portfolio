import { ProjectCard } from "@/components/sub/project-card";
import { Educations } from "@/constants";

export const Education = () => {
  return (
    <section
      id="education"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Education
      </h1>
      <div className="w-full px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Educations.map((education, index) => (
            <article
              key={index}
              className="rounded-2xl p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <header className="mb-3 flex flex-col items-center text-center">
                <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                  {education.title}
                </h2>
                <p className="text-xs tracking-wide uppercase text-neutral-500 dark:text-neutral-400">
                  {education.date}
                </p>
              </header>

              <p className="text-sm text-neutral-700 dark:text-neutral-300 text-center">
                {education.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
