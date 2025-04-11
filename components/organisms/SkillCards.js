import React from "react";
import SkillCard from "../molecules/SkillCard";

const skills = [
  {
    name: "Languages",
    skills: [
      ["C/C++", "80"],
      ["Python", "90"],
      ["SQL", "50"],
      ["JavaScript", "50"],
      ["Html", "45"],
      ["CSS", "49"],
      ["PHP", "59"],
    ],
  },
  {
    name: "Frameworks / Tools",
    skills: [
      ["TensorFlow", "80"],
      ["Pandas", "70"],
      ["Numpy", "60"],
      ["Matplotlib.pyplot", "92"],
      ["seaborn", "56"],
      ["KNN", "46"],
      ["NodeJS", "29"],
      ["adafruit", "69"],
    ],
  },
];

function SkillCards({ isDetailed }) {
  return (
    <>
      {skills.map(({ name, skills }, idx) => {
        return (
          <SkillCard
            name={name}
            skills={skills}
            key={idx}
            isDetailed={isDetailed}
          />
        );
      })}
    </>
  );
}

export default SkillCards;
