const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const projectTemplate = path.resolve('src/templates/Project.jsx')
    resolve(
      graphql(`
        query MyQuery {
          allContentfulProject {
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
      })
    )
  })
}
