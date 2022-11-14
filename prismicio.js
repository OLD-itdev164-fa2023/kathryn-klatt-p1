import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"
import * as prismic from "@prismicio/client"
import { GraphQLClient } from "graphql-request"

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

// Fill in your repository name
export const repositoryName = 'bestcom'

const prismicClient = prismic.createClient(
  prismic.getEndpoint(bestcom),
  {
    // If your repository is private, add an access token
    accessToken: `${process.env.PRISMIC_ACCESS_TOKEN}`,

    // This defines how you will structure URL paths in your project.
    // Update the types to match the Custom Types in your project, and edit
    // the paths to match the routing in your project.
    //
    // If you are not using a router in your project, you can change this
    // to an empty array or remove the option entirely.
    routes: [
      {
        type: "comics",
        path: "/:uid",
      },
    ],
  }
)





export const client = new GraphQLClient(
  prismic.getGraphQLEndpoint(repositoryName),
  {
    fetch: prismicClient.graphqlFetch,
    method: "get",
  }
)
