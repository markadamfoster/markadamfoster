const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  // creates the `node.fields.slug` property to all Mdx pages
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    actions.createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query: ', result)
  }

  const posts = result.data.allMdx.edges
  posts.forEach(({ node }, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    actions.createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/layouts/ArticleLayout.js`),
      context: {
        id: node.id,
        slug: node.fields.slug,
        previous,
        next,
      },
    })
  })
}
