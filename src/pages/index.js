import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Authors from "../components/authors"
import DefaultFeaturedImage from "../components/default-featured-image"

const IndexPage = ({ data }) => (
  
  <Layout>
  <SEO title="Home" />
  <ul style={{ listStyle: "none", margin: `0` }}>
  
    {data.allWordpressPost.edges.map(post => (

      <Link to={`/post/${post.node.slug}`} style={{ display: "flex", color: "black", textDecoration: "none" }} >
        <li style={{ padding: "20px 0", borderBottom: "1px solid #ccc" }}>
          <div style={{ width: "100%" }}>
            <div className="index-post-container">
            {post.node.featured_media != null ? <div className="index-post-img" ><Img fluid={post.node.featured_media.localFile.childImageSharp.fluid} /></div> : <div className="index-post-img" ><DefaultFeaturedImage /></div>}
            <div className="index-post">
            <h3 dangerouslySetInnerHTML={{ __html: post.node.title }} style={{ marginBottom: 0 }} />
            <p style={{ margin: 0, color: "grey" }}>
                Written by {Authors[post.node.author]} on {post.node.date}
            </p>
            <div dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
            </div>
            </div>
          </div>
        </li>
      </Link>
    ))}
  </ul>
</Layout>
)
  
export default IndexPage

export const query = graphql`
  {
    allWordpressPost(sort: {fields: date, order: DESC}, limit: 6) {
      edges {
        node {
          title
          excerpt
          slug
          author
          date(formatString: "MM-DD-YYYY")
          content
          featured_media {
            alt_text
            localFile {
              childImageSharp {
                fluid(maxWidth: 960) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`