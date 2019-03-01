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
      <AppLayout page="home" location={this.props.location} title={siteTitle}>
        <SEO
          title="Acceuil - Derniers Posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Row className="bio" type="flex" justify="center">
          <Col xs={24}>
            <h2>
              A propos de moi
              </h2>
            <p>Je m'appèle Ricardo Do Vale et j'aime les chats, en particulier les Maines Coon.</p>
            <p>J'ai découvert ma passion pour les chats grâce à ma compagne qui avait un chat de type européen nommé Mitterand (c’est pas une blague).</p>
            <p>Il y a quelques années, vous m’auriez proposé un chat ? Je vous aurais répondu: ”Et un battage de fesse tu veux aussi !”. Les chats… C’est pas des bêtes pour moi. Devant m’en accommoder (tu prend la femme, tu prends le chat), j’ai découvert un animal surprenant. J’envahis son territoire, je lui pique sa maîtresse, il trouve pourtant ma venue plutôt sympa.</p>
            <p>Ces petites habitudes se sont gentiment mêlées à notre quotidien. Au final, il prenait beaucoup de plaisir à mes côtés, surtout pour venir me réveiller le matin tel un tracteur qui avance avec douceur. Cela s’appèle… la Ronron thérapie.</p>
            <p>Quelques années après qu’il nous aie quitté, nous avons opté pour une Sibérienne que nous avons appelée Fiona et par la suite, de mon côté, j’ai trouvé le chat qui me convenait… Le Maine Coon</p>
            <Bio />
          </Col>
        </Row>

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