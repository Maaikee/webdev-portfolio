import { Gallery } from "../../app/components/Gallery";
import { ImageCard } from "../../app/components/ImageCard";
import { TextCard } from "../../app/components/TextCard.js";
import { projectData, skills } from "../../../siteData.js";

interface ProjectData {
  slug: string;
  title: string;
  subtitle: string;
  video: string;
  tools: Array<string>;
  description: Array<string>;
}

interface Skill {
  title: string;
  description: string;
}

export function Home() {
  return (
    <>
      <Gallery
        title="My Skills"
        elements={skills.map((skill: Skill) => (
          <TextCard
            title={skill.title}
            description={skill.description}
            key={skill.title}
          />
        ))}
        button={{ title: "see my projects", url: "/projects" }}
      />
      <Gallery
        title="My projects"
        subtitle="I'm currently working on adding more projects to this website, so check back soon to see more!"
        elements={projectData.map((project: ProjectData) => (
          <ImageCard
            title={project.title}
            slug={project.slug}
            key={project.slug}
          />
        ))}
      />
    </>
  );
}
