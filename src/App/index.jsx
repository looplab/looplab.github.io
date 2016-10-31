import React from 'react'
import {connect} from 'react-redux'
import MediaQuery from 'react-responsive'

// Require instead of import because we don't need the content per se.
require('./styles.css')

import {actions} from './reducer'

export {reducer} from './reducer'

import { Header, Burger, Logo, Menu, MenuItem } from './Header'
import Sidebar, {SidebarLogo, SidebarMenu, SidebarItem, SidebarFooter} from './Sidebar'

const mapStateToProps = (state) => ({
  sidebarVisible: state.app.sidebarVisible,
})
export class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const menu =
      <Menu>
        <MenuItem text="Features" link="/features" />
        <MenuItem text="Pricing" link="/pricing" />
      </Menu>

    const sidebarMenu =
      <SidebarMenu>
        <SidebarItem text="Features" link="/features" />
        <SidebarItem text="Pricing" link="/pricing" />
      </SidebarMenu>

    return (
      <div>
        <Header>
          <MediaQuery maxWidth={689}>
            <Burger onClick={this.props.showSidebar} />
            <Logo link="/" center={true} />
          </MediaQuery>

          <MediaQuery minWidth={690}>
            <Logo link="/" />
            {menu}
          </MediaQuery>
        </Header>

        <MediaQuery maxWidth={689}>
          <Sidebar visible={this.props.sidebarVisible} onOutside={this.props.hideSidebar}>
            <SidebarLogo onClick={this.props.hideSidebar} />
            {sidebarMenu}
            <SidebarFooter text="&copy; 2016 Looplab AB" />
          </Sidebar>
        </MediaQuery>

        {this.props.children}
      </div>
    )
  }
}
App.propTypes = {
  children: React.PropTypes.node,
  showSidebar: React.PropTypes.boolean,
  hideSidebar: React.PropTypes.boolean,
  sidebarVisible: React.PropTypes.boolean
}
export default connect(mapStateToProps, actions)(App)
