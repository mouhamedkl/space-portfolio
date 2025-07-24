import { Education } from "@/components/main/education";
import { Encryption } from "@/components/main/encryption";
import { Exprience } from "@/components/main/exprience";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Education />
        <Exprience /> 
        <Skills />
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}
