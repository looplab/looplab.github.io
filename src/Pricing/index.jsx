import React from 'react'

import {Container, Row, Col} from '../components/Grid'

export default class Pricing extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Container>
        <Row>
          <Col span="twelve">
            <h3>Pricing</h3>
          </Col>
        </Row>
      </Container>
    )
  }
}
