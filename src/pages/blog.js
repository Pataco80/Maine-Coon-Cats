import React from "react"
import { Link, graphql } from "gatsby"
import { Row, Col, Button } from "antd"
import AppLayout from "../components/appLayout"
import SEO from "../components/seo"
import Img from 'gatsby-image'
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <AppLayout page="blog" location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Row>
          <h1 style={{ textAlign: "center", marginBottom: "1.5rem" }}><strong>Blog</strong></h1>
        </Row>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <Row className="list-posts" type="flex" justify="center">
              <Col className="posts-container" xs={20} md={22}>
                <Row className="posts" type="flex">
                  <div key={node.fields.slug}>
                    <h3
                      style={{
                        marginBottom: rhythm(1 / 4),
                      }}
                    >
                      <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                        {title}
                      </Link>
                    </h3>
                    <small>{node.frontmatter.date}</small>
                    <Row className="post-content" gutter={16} type="flex">
                      <Col xs={3} md={6}>
                        <Img sizes={node.frontmatter.featuredImage.childImageSharp.sizes} />
                      </Col>
                      <Col xs={21} md={18} className="post-info">
                        <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                        <Button><Link style={{ boxShadow: 'none' }} to={node.fields.slug}>En savoir plus</Link></Button>
                        <p>Tags:{node.frontmatter.tags}</p>
                      </Col>
                    </Row>
                  </div>
                </Row>

              </Col>
            </Row>
          )
        })}
      </AppLayout>
    )
  }
}

export default BlogIndex

export const blogQuery = graphql`
  query BlogQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            tags
            featuredImage {
                childImageSharp{
                    sizes(maxWidth: 630) {
                        ...GatsbyImageSharpSizes
                    }
                }
            }
          }
        }
      }
    }
  }
`