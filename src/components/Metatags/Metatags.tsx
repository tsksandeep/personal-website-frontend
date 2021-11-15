import React from "react";
import { Helmet } from "react-helmet";

interface MetaTagsProps {
  title: string;
  description: string;
  type: string;
  url: string;
  image: string;
}

const Metatags = (props: MetaTagsProps) => {
  return (
    <Helmet>
      <title>{props.title}</title>
      <meta name="title" content={props.title} />
      <meta name="description" content={props.description} />

      <meta property="og:type" content={props.type} />
      <meta property="og:url" content={props.url} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta
        property="og:image"
        content={`https://www.tsksandeep.com${props.image}`}
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={props.url} />
      <meta property="twitter:title" content={props.title} />
      <meta property="twitter:description" content={props.description} />
      <meta
        property="twitter:image"
        content={`https://www.tsksandeep.com${props.image}`}
      />
    </Helmet>
  );
};

export default Metatags;
