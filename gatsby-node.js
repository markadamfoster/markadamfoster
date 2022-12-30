const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)
const articleLayout = path.resolve(`./src/layouts/ArticleLayout.js`)

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
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            title
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('Error loading MDX result', result.errors)
  }

  const mdxNodes = result.data.allMdx.nodes

  mdxNodes.forEach((node) => {
    createPage({
      path: node.fields.slug,
      component: `${articleLayout}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        id: node.id,
      },
    })
  })
}
