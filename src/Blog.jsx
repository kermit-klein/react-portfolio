import React from "react";

const divStyle = {
  marginTop: 100,
  width: "70%",
};

const Blog = () => {
  return (
    <div className="ui container" style={divStyle}>
      <div
        id="retainable-rss-embed"
        data-rss="https://medium.com/feed/@aerbay"
        data-maxcols="3"
        data-layout="grid"
        data-poststyle="external"
        data-readmore="Read the rest"
        data-buttonclass="ui blue button"
        data-offset="-100"
      ></div>
    </div>
  );
};

export default Blog;
