import React from "react"
import { Row, Col } from "antd"

class FooterSite extends React.Component {
  render() {
    return (
      <Row type="flex" justify="center">
        <Col xs={24} sm={12}>© Maine Coon Cat's</Col>
        <Col xs={24} sm={12}>Dernière mise à jour, le {new Date().toLocaleDateString()}</Col>
        <Col xs={24}>Site Construit avec
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a></Col>
      </Row>
    )
  }
}

export default FooterSite