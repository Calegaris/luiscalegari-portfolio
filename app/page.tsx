import { Hero } from "@/src/components/sections/Hero";
import { About } from "@/src/components/sections/About";
import { TechStack } from "@/src/components/sections/TechStack";
import { Education } from "@/src/components/sections/Education";
import { ProjectsGrid } from "@/src/components/sections/ProjectsGrid";
import { Certificates } from "@/src/components/sections/Certificates";
import { Contact } from "@/src/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative flex flex-col w-full overflow-hidden">
      <Hero />
      <About />
      <TechStack />
      <Education />
      <ProjectsGrid />
      <Certificates />
      <Contact />
    </main>
  );
}
