import React, { useEffect }  from 'react';
import useWindowSize from "hooks/useWindowSize"

import "./style.css";

const defaultPost = {
  imgSrc: "https://i.ibb.co/YLmzhgp/construction-4445367-1920-2.jpg",
  types : [
    {
      name: "Constructuion",
      bgColor: "#fcb941"
    },
    {
      name: "Market",
      bgColor: "#FC6042"
    },
  ],
  date: "14 Jan 2021",
  title: "TOP 5 Ways to Choose Bricks made from manufactured stone",
  text: "Brampton Brick® Select Series is a cost-effective clay brick product series...",
  url: "/someblog"
}

const BlogCard = ({
  data = defaultPost
}) => {
    const { width } = useWindowSize();
    const [dynamicClassName , setDynamicClassName] = useState("-large");

    useEffect(() => {
        if (width < 1000) {
            setDynamicClassName("")
        } else {
            setDynamicClassName("-large")
        }
    }, [width])

  return ( 
    <div className={`blog-item${dynamicClassName}__container`}>
      <div className={`blog-item${dynamicClassName}__inner`}>
         <div className={`blog-item${dynamicClassName}__image-container`}>
            <img src={data.imgSrc}/>
         </div>
         <div className={`blog-item${dynamicClassName}__content`}>
            <div className={`blog-item${dynamicClassName}__type-container`}>
              {
                data?.types.length && data.types.map((type,index)=>(
                  <div 
                    key={index.toString()} 
                    className="chip" 
                    style={{
                      backgroundColor: type.bgColor
                    }}
                  >
                    <span> { type.name } </span>
                  </div>
                ))
              }
            </div>
            <span className={`blog-item${dynamicClassName}__date`}>{data.date}</span>
            <h2 className={`blog-item${dynamicClassName}__title`}>{data.title}</h2>
            <p className={`blog-item${dynamicClassName}__text`}>
              {data.text}
            </p>
            <div className={`blog-item${dynamicClassName}__read-more__container`}>
                <a href={data.url} className="read-more">
                  READ MORE
                </a>
            </div>
         </div>
      </div>
    </div>
   );
}
 
export default BlogCard;