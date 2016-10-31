import * as React from 'react'

import {Container, Row, Col} from '../components/Grid'

export interface HomeProps {
}

export class Home extends React.Component<HomeProps, {}> {
  constructor(props: HomeProps) {
    super(props)
  }

  render() {
    return (
      <Container>
        <Row>
          <Col span="eight" offset="four">
            <h3>Home</h3>
          </Col>
        </Row>
      </Container>
    )
  }
}
