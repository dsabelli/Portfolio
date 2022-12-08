import React, { useId } from "react";
import ExternalLink from "../../public/Icons/ExternalLink";
import Github from "../../public/Icons/Github";
import Carousel from "./Carousel";

type Position = "left" | "right";

interface Props {
  title: string;
  description: string;
  tech: string[];
  webLink: string;
  githubLink: string;
  images: string[];
  mobileImages: string[];
  position: Position;
  children: JSX.Element;
}

const Project = ({
  title,
  description,
  tech,
  webLink,
  githubLink,
  images,
  mobileImages,
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
      <div className="hero rounded-lg bg-base-100 p-4">
        <div
          className={`hero-content flex-col  ${
            position === "left" ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          <div className="md:w-1/3">
            <h4
              className={`flex items-center gap-2 text-2xl font-bold text-secondary ${
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
              className={`flex flex-wrap gap-2 font-mono text-sm  ${
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
              <a className="hover:text-primary" href={webLink}>
                <ExternalLink />
              </a>
              <a className="hover:text-primary" href={githubLink}>
                <Github />
              </a>
            </div>
          </div>

          <a href={webLink} target="_blank" className="md:w-2/3  ">
            <Carousel>
              {window.innerWidth >= 768 ? images : mobileImages}
            </Carousel>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
