import React from "react";
// import ExperienceCard from "../molecules/ExperienceCard";

const experiences = [
  {
    name: "No Experience BUt enthusiats for doing thrilling work",
    position: "",
    date: "",
    imgSrc: "",
    works: [""],
  },
];

function ExperienceCards({ isDetailed }) {
  return (
    <>
      {experiences.map(({ name, position, date, imgSrc, works }, idx) => {
        return (
          <ExperienceCard
            name={name}
            position={position}
            date={date}
            imgSrc={imgSrc}
            works={works}
            key={idx}
            isDetailed={isDetailed}
          />
        );
      })}
    </>
  );
}

export default ExperienceCards;
