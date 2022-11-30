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
    <li
      className={`${position === "right" ? "mr-4" : "mr-4 md:ml-4 md:mr-0"}`}
      key={`${id}-${idx}`}
    >
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
          <div className="md:w-1/3 h-full">
            <h4
              className={`flex items-center gap-2 text-2xl font-bold ${
                position === "right" ? "" : "md:justify-end"
              }`}
            >
              <div className="flex justify-center items-center">{children}</div>
              {title}
            </h4>
            <p
              className={`my-6 ${position === "right" ? "" : "md:text-right"}`}
            >
              {description}
            </p>
            <ul
              className={`flex flex-wrap gap-2 font-mono text-sm ${
                position === "right" ? "" : "md:justify-end"
              }`}
            >
              {techEls}
            </ul>
            <div
              className={`flex my-6 gap-2 ${
                position === "right" ? "" : "md:justify-end"
              }`}
            >
              <a href={webLink}>
                <ExternalLink />
              </a>
              <a href={githubLink}>
                <Github />
              </a>
            </div>
          </div>
          <figure className="md:w-2/3 ">
            <img
              src={image}
              className="max-h-96 rounded-lg shadow-2xl w-full"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Project;
