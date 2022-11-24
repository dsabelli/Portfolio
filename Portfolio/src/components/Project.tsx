import { useId } from "react";

interface Props {
  title: string;
  description: string;
  tech: string[];
  webLink: string;
  githubLink: string;
  image: string;
}

const Project = ({
  title,
  description,
  tech,
  webLink,
  githubLink,
  image,
}: Props) => {
  const id = useId();
  const techEls = tech.map((t, idx) => <li key={`${id}-${idx}`}>{t}</li>);

  return (
    <div className="p-4">
      <div className="hero min-h-screen bg-base-200 w-full">
        <div className="hero-content flex-col lg:flex-row">
          <div className="md:w-1/2">
            <h4>{title}</h4>
            <p className="py-6">{description}</p>
            <ul className="flex">{techEls}</ul>
            <div className="flex flex-end">
              <a href={webLink}>webLink</a>
              <a href={githubLink}>githubLink</a>
            </div>
          </div>
          <figure className="md:w-1/2">
            <img
              src={image}
              className="max-w-sm rounded-lg shadow-2xl w-full"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Project;
