import React, { useId } from "react";
import ExternalLink from "../../public/ExternalLink";
import Github from "../../public/Github";

type Position = "left" | "right";

interface Props {
  title: string;
  description: string;
  tech: string[];
  webLink: string;
  githubLink: string;
  image: string;
  position: Position;
  children: JSX.Element;
}

const Project = ({
  title,
  description,
  tech,
  webLink,
  githubLink,
  image,
  position,
  children,
}: Props) => {
  const id = useId();
  const techEls = tech.map((t, idx) => (
    <li className="mr-4" key={`${id}-${idx}`}>
      {t}
    </li>
  ));

  return (
    <div className="my-12 px-4">
      <div className="hero shadow-2xl rounded-lg bg-base-300 p-4">
        <div
          className={`hero-content flex-col h-full ${
            position === "left" ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          <div className="md:w-1/2 h-full">
            <h4 className="flex items-center gap-2 text-2xl font-bold">
              <div className="flex justify-center items-center">{children}</div>
              {title}
            </h4>
            <p className="my-6">{description}</p>
            <ul className="flex flex-wrap gap-2 font-mono text-sm">
              {techEls}
            </ul>
            <div className="flex my-6 gap-2">
              <a href={webLink}>
                <ExternalLink />
              </a>
              <a href={githubLink}>
                <Github />
              </a>
            </div>
          </div>
          <figure className="md:w-1/2 ">
            <img
              src={image}
              className="max-w-sm max-h-96 rounded-lg shadow-2xl w-full"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Project;
