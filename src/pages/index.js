import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import AppLayout from "../components/appLayout"
import SEO from "../components/seo"
import Image from "gatsby-image"
import { rhythm } from "../utils/typography"
import { Row, Col, Card } from "antd"

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <AppLayout page="1" location={this.props.location} title={siteTitle}>
        <SEO
          title="Latest posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Bio />

        <Row className="latest-post" type="flex" justify="center" gutter={16}>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            const { Meta } = Card;
            return (
              <Col className="card-post" xs={24} sm={12} lg={8}>
                <Card hoverable key={node.fields.slug}
                  cover={<Image sizes={node.frontmatter.featuredImage.childImageSharp.sizes} />}
                >
                  <Meta
                    title={
                      <div>
                        <h3
                          style={{
                            marginBottom: rhythm(1 / 4),
                          }}
                        >
                          <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                            {title}
                          </Link>
                        </h3>
                        <small className="date">{node.frontmatter.date}</small>
                      </div>
                    }
                    date={<small>{node.frontmatter.date}</small>}
                    description={<p dangerouslySetInnerHTML={{ __html: node.excerpt }} />}
                  />
                </Card>
              </Col>
            )
          })}
        </Row>
      </AppLayout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
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