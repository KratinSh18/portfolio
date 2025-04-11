import React from "react";
import ExperienceCard from "../molecules/ExperienceCard";

const experiences = [
  {
    name: "Music Recommendation ",
    date: "April 2024 - Present",
    imgSrc: "medchain.jpg",
    link: "https://github.com/KratinSh18/music_recommendation",
    works: [
      "- Tools and Technologies:Python, pandas, Seaborn, scikit-learn.",
      "-Data Handling:Processes music data to extract user preferences and song attributes.",
      "-Model Training and Evaluation: Uses collaborative and content-based filtering for recommendations.",
      "Visualization:Leverages Seaborn for insightful data and model performance visualizations.",
    ],
  },
  {
    name: "Pay-Protect ",
    date: "May 2024 - Present",
    imgSrc: "uclacat.png",
    link: "https://github.com/KratinSh18/Pay-Protect",
    works: [
      "- Tools and Technologies: Utilized Python, Flask, and SQLAlchemy for development.",
      "- Functionality: Designed to protect and manage user payments securely.",
      "- Data Security: Implemented robust encryption and authentication mechanisms.",
      "- User Interface: Developed a user-friendly interface for seamless interaction.",
    ],
  },
  {
    name: "Loan Eligibility Predictor ",
    date: "May-June 2024",
    imgSrc: "cura.jpg",
    link: "https://github.com/KratinSh18/loan_prediction",
    works: [
      "Tools and Technologies: Utilizes Python, pandas, scikit-learn, and Seaborn for data analysis and visualization.",
      "Data Handling: Processes applicant data to extract relevant features for model training.",
      "Model Training: Implements logistic regression, decision trees, and random forests for predicting loan eligibility.",
      "Evaluation: Uses metrics like accuracy, precision, and recall to assess model performance.",
    ],
  },
];

function ProjectCards({ isDetailed }) {
  return (
    <>
      {experiences.map(({ name, position, date, imgSrc, works, link }, idx) => {
        return (
          <ExperienceCard
            name={name}
            // position={position}
            date={date}
            imgSrc={imgSrc}
            works={works}
            link={link}
            key={idx}
            isDetailed={isDetailed}
          />
        );
      })}
    </>
  );
}

export default ProjectCards;
