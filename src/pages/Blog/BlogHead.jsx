import React from "react";
import Helmet from "react-helmet";

const BlogHead = ({ description, blogId, image }) => {
  return (
    <Helmet>
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`https://habitatsartorial.org/blog/${blogId}`}
      />
      <meta
        property="og:title"
        content="Habitat Sartorial | Fashion for a cause"
      />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content={`https://habitatsartorial.org/blog/${blogId}`}
      />
      <meta
        property="twitter:title"
        content="Habitat Sartorial | Fashion for a cause"
      />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  );
};

export default BlogHead;
