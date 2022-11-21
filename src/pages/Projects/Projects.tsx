import React, { useEffect } from 'react';
import './styles/Projects.scss';
import { useObserver } from '@/hooks';
import { dataPage } from '@/utils';
import { ProjectCard } from '@/components';
export interface ProjectsInterface {
  serInView: React.Dispatch<React.SetStateAction<string>>;
}

const Projects: React.FC<ProjectsInterface> = ({ serInView }) => {
  const [isIntersecting, setReference] = useObserver({
    root: null,
    threshold: 0.5
  });
  useEffect(() => {
    isIntersecting && serInView('projects');
  }, [isIntersecting]);

  return (
    <div className="projects" ref={setReference} id="projects">
      <h2 className="text-primary--sub projects__title">
        Trabajos | Proyectos
      </h2>
      <div className="projects__container">
        {dataPage.projects.map((project, index) => (
          <div className={`projects__item projects__item--${index}`}>
            <p className="projects__item__description">{project.description}</p>
            <ProjectCard
              image={project.image}
              title={project.title}
              description={project.technologies}
              type={project.type}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
