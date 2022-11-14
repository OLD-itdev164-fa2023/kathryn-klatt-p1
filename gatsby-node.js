const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
graphql(`
{
   allPrismicComics {
    edges {
      node {
        id
      }
    }
  }
}
`).then(result => {
  if (result.errors) {
    reject(result.errors);
  }
  result.data.allPrismicComics.edges.forEach(edge => {
    createPage({
      path: edge.node.id,
      component: path.resolve(`./src/templates/comic-post.js`),
      context: {
        id: edge.node.id,
      },
    })
  })
  resolve();
})
  });
};