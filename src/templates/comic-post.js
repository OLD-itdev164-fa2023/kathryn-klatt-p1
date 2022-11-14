import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const ComicPost = ({data}) => {
    const {title} = data.prismicComics;

    return (
        <Layout>
        <h1>{title}</h1>
        </Layout>
    );
}

export default ComicPost;

export const pageQuery = graphql`
  query comicQuery($id: String) {
    prismicComics(id: { eq: $id }) {
      data {
        comic_title {
          text
        }
      }
    }
  }
`