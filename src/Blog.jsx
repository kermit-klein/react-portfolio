import React, { useEffect } from "react";

const Blog = () => {
  useEffect(() => {
    let container = document.getElementById("retainable-rss-embed");
    if (container) {
      let css = document.createElement("link");
      css.href =
        "https://www.twilik.com/assets/retainable/rss-embed/retainable-rss-embed.css";
      css.rel = "stylesheet";
      document.getElementsByTagName("head")[0].appendChild(css);
      let script = document.createElement("script");
      script.src =
        "https://www.twilik.com/assets/retainable/rss-embed/retainable-rss-embed.js";
      document.getElementsByTagName("body")[0].appendChild(script);
    }
  }, []);

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

const divStyle = {
  marginTop: 100,
  width: "70%",
};
export default Blog;
