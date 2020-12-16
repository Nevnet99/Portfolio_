const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const projectTemplate = path.resolve('src/templates/Project.jsx')
    const blogTemplate = path.resolve('src/templates/BlogPost.jsx')
    resolve(
      graphql(`
        query PageQuery {
          allContentfulProject {
            edges {
              node {
                contentful_id
              }
            }
          }

          allContentfulBlogPost {
            edges {
              node {
                contentful_id
              }
            }
          }
        }
      `).then(({ errors, data }) => {
        if (errors) {
          reject(errors)
        }
        console.log(data, 'DATAS')
        data.allContentfulProject.edges.forEach(edge => {
          const { contentful_id } = edge.node
          createPage({
            path: `/project/${contentful_id}`,
            component: projectTemplate,
            context: {
              id: `${contentful_id}`,
            },
          })
        })

        data.allContentfulBlogPost.edges.forEach(edge => {
          const { contentful_id } = edge.node
          createPage({
            path: `/blog/${contentful_id}`,
            component: blogTemplate,
            context: {
              id: `${contentful_id}`,
            },
          })
        })
      })
    )
  })
}
