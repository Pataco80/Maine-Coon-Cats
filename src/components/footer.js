import React from "react"
import { Row, Col } from "antd"

class FooterSite extends React.Component {
  render() {
    return (
      <Row type="flex" justify="center">
        <Col style={{ backgroundColor: "blue" }} xs={24} sm={12} md={8} > Part -1</Col>
        <Col style={{ backgroundColor: "red" }} xs={24} sm={12} md={8}>Part -2</Col>
        <Col style={{ backgroundColor: "green" }} xs={24} sm={16} md={8}>© {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a></Col>
      </Row>
    )
  }
}

export default FooterSite

