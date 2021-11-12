import React from "react";
import PropTypes from "prop-types";

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="robots" content="index,follow" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`loader`}
          id="___loader"
          style={{
            display: "table",
            position: "fixed",
            width: "100%",
            height: "100%",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            zIndex: 99999,
            backgroundColor: "#F2F2F2",
          }}
        >
          <div
            style={{
              fontSize: "24px",
              fontFamily: "sans-serif",
              fontStyle: "normal",
              color: "#7f8c8d",
              display: "table-cell",
              textAlign: "center",
              verticalAlign: "middle",
            }}
          >
            LOADING...
          </div>
        </div>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
