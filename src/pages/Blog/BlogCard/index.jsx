import React, { useEffect, useState } from "react";
import useWindowSize from "hooks/useWindowSize";
import { Link } from "react-router-dom";
import "./styles.css";

const BlogCard = ({ data, type }) => {
  const { width } = useWindowSize();
  const [dynamicClassName, setDynamicClassName] = useState("-large");

  useEffect(() => {
    if (width < 1000) {
      setDynamicClassName("");
    } else {
      setDynamicClassName("-large");
    }
  }, [width]);

  return (
    <div className={`blog-item${dynamicClassName}__container`}>
      <div className={`blog-item${dynamicClassName}__inner`}>
        <div className={`blog-item${dynamicClassName}__image-container`}>
          <img
            src={data?.thumbnail}
            alt="thumbnail"
            width="100%"
            height="100%"
          />
        </div>
        <div className={`blog-item${dynamicClassName}__content`}>
          <div className={`blog-item${dynamicClassName}__type-container`}>
            {data?.types.length &&
              data.types.map((type, index) => (
                <div
                  key={index.toString()}
                  className="chip"
                  style={{
                    backgroundColor: type.bgColor,
                  }}
                >
                  <span> {type.name} </span>
                </div>
              ))}
          </div>
          <span className={`blog-item${dynamicClassName}__date`}>
            {data.date} | {data.author}
          </span>
          <h2 className={`blog-item${dynamicClassName}__title`}>
            {data.title}
          </h2>
          <p className={`blog-item${dynamicClassName}__text`}>{data.text}</p>
          <div className={`blog-item${dynamicClassName}__read-more__container`}>
            {data.type === "link" ? (
              <a
                target="_blank"
                href={data.link}
                rel="noopener noreferrer"
                className="read-more" 
              >
                READ MORE
              </a>
            ) : (
              <Link to={`/${type}/${data.id}`} className="read-more">
                {data.type === "article" ? "READ MORE" : "VIEW MORE"}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
