import React from 'react'

import {Container, Row, Col} from '../components/Grid'

export default class Features extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Container>
        <Row>
          <Col span="twelve">
            <h3>Features</h3>
          </Col>
        </Row>
      </Container>
    )
  }
}
