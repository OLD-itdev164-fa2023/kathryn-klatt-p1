import * as React from "react"
import { graphql, Link } from "gatsby"
import styled from 'styled-components'
import Layout from "../components/layout"
import Seo from "../components/seo"


const Heading = styled.h3`
padding: 20px;
text-align: center;
color: green;
`


const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home"/>
    <ul>
    {
      data.allPrismicComics.edges.map(edge =>(
        <li key={edge.node.id}>
        <Link to={edge.node.id}>{edge.node.data.comic_title.text}</Link>
        </li>
      ))
    }
    </ul>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
  {
    allPrismicComics {
      edges {
        node {
          id
        }
      }
    }
  }
`