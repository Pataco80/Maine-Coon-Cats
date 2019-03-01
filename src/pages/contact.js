import React from "react"
import { graphql } from "gatsby"
import AppLayout from "../components/appLayout"
import { Form, Input, Button } from 'antd';
import SEO from "../components/seo"

export default class ContactPage extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    mail: "",
    message: ""
  }
  constructor() {
    super();
    this.state = {
      formLayout: 'horizontal',
    };
  }
  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }
  handleFormLayoutChange = (e) => {
    this.setState({ formLayout: e.target.value });
  }
  handleSubmit = event => {
    event.preventDefault()
    alert(`Welcome ${this.state.firstName} ${this.state.lastName}!`)
  }

  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const { formLayout } = this.state;
    const formItemLayout = formLayout === 'horizontal' ? {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
    } : null;
    const buttonItemLayout = formLayout === 'horizontal' ? {
      wrapperCol: { span: 14, offset: 4 },
    } : null;
    const { TextArea } = Input;

    return (
      <AppLayout page="contact" location={this.props.location} title={siteTitle}>
        <SEO
          title="Contact"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <h1 style={{ textAlign: "center" }}>Contactez-moi</h1>
        <form layout={formLayout} onSubmit={this.handleSubmit}>
          <Form.Item
            label="Prénom"
            {...formItemLayout}
          >
            <Input type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleInputChange} placeholder="Prénom" />
          </Form.Item>
          <Form.Item
            label="Nom"
            {...formItemLayout}
          >
            <Input type="text"
              name="lastname"
              value={this.state.lastname}
              onChange={this.handleInputChange} placeholder="Nom" />
          </Form.Item>
          <Form.Item
            label="mail"
            {...formItemLayout}
          >
            <Input type="email"
              name="lastname"
              value={this.state.email}
              onChange={this.handleInputChange} placeholder="Email" />
          </Form.Item>
          <Form.Item
            label="Message"
            {...formItemLayout}
          >
            <TextArea
              rows={4}
              name="message"
              value={this.state.message}
              onChange={this.handleInputChange} placeholder="Ecrivez votre Message" />
          </Form.Item>
          <Form.Item {...buttonItemLayout}>
            <Button type="primary">Submit</Button>
          </Form.Item>
        </form>
      </AppLayout>

    )
  }
}

export const pageQuery = graphql`
  query ContactQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`