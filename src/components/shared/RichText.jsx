import React from 'react'
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => <p className="align-center">{children}</p>

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.EMBEDDED_ASSET]: node => {
      if (node?.data?.target?.fields?.file) {
        const { url } = node.data.target.fields.file['en-US']
        const {
          allContentfulAsset: { edges },
        } = useStaticQuery(graphql`
          query GetAllAssets {
            allContentfulAsset {
              edges {
                node {
                  file {
                    url
                  }
                  fluid {
                    ...GatsbyContentfulFluid
                  }
                }
              }
            }
          }
        `)

        const currentAsset = edges.find(
          ({
            node: {
              file: { url: storedUrl },
            },
          }) => url === storedUrl
        )
        console.log(currentAsset, 'CA')
        return <Img fluid={currentAsset.node.fluid} />
      }
    },
    [INLINES.EMBEDDED_ENTRY]: node => {
      const { code, language } = node.data.target.fields
      return (
        <div className="code-block">
          <SyntaxHighlighter language={language} style={dark}>
            {code['en-US']}
          </SyntaxHighlighter>
        </div>
      )
    },
  },
}
const handleRichText = json => documentToReactComponents(json, options)

export default handleRichText
