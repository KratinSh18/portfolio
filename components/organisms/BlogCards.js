import React from "react";
import BlogCard from "../molecules/BlogCard";

const blogs = [
  {
    name: "Website",
    link: "https://portfolio-eight-lyart-97.vercel.app/",
    imgSrc: "medium.webp",
  },
];

function BlogCards({ isDetailed }) {
  return (
    <>
      {blogs.map(({ name, link, imgSrc }, idx) => {
        return (
          <BlogCard
            name={name}
            link={link}
            imgSrc={imgSrc}
            key={idx}
            isDetailed={isDetailed}
          />
        );
      })}
    </>
  );
}

export default BlogCards;
