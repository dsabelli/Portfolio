import React, { useId } from "react";

type Position = "left" | "right";

interface Props {
  title: string;
  description: string;
  tech: string[];
  webLink: string;
  githubLink: string;
  image: string;
  position: Position;
}

const Project = ({
  title,
  description,
  tech,
  webLink,
  githubLink,
  image,
  position,
}: Props) => {
  const id = useId();
  const techEls = tech.map((t, idx) => <li key={`${id}-${idx}`}>{t}</li>);

  return (
    <div className="p-4">
      <div className="hero shadow-2xl rounded-lg bg-base-200">
        <div
          className={`hero-content flex-col ${
            position === "left" ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
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
