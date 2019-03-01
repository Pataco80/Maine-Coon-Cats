import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Card,Avatar,Icon } from "antd"
import {Link} from "gatsby"


function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { Meta } = Card
        const { author, social } = data.site.siteMetadata
        return (
            <Card>
        <Meta
          avatar={<Avatar src="https://pbs.twimg.com/profile_images/1762501584/image_400x400.jpg" />}
          title={<Link to="/about/">{author}</Link>}
          description="Agé de 38 ans et père de 2 enfants, je suis ouvrier de jardin paysagiste de métier, reciclé en Web Designer | Intégrateur Web | futur Developpeur Web.
          Créateur de sites web modernes et souhaitant devenir freelance"
        />
        <p>Suivez-moi sur <a href={`https://twitter.com/${social.twitter}`}><Icon type="twitter" /></a> et <a href={`https://facebook.com/${social.facebook}`}><Icon type="facebook" /></a></p>
      </Card>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
