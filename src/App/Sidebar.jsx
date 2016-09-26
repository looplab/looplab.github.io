import React from 'react'
import {Link} from 'react-router'
import BodyClassName from 'react-body-classname'

import styles from './Sidebar.css'

export default function Sidebar(props) {
  const bodyClass = props.visible ? styles.navActive : ''
  const wrapperClass = props.visible ? styles.wrapperActive : styles.wrapper
  const maskClass = props.visible ? styles.maskActive : styles.mask
  const contentClass = props.visible ? styles.contentActive : styles.content
  return (
    <BodyClassName className={bodyClass}>
      <nav className={wrapperClass}>
        <div className={maskClass} onClick={() => props.onOutside()}></div>
        <div className={contentClass}>
          {props.children}
        </div>
      </nav>
    </BodyClassName>
  )
}
Sidebar.propTypes = {
  visible: React.PropTypes.bool,
  onOutside: React.PropTypes.func
}

export function SidebarLogo(props) {
  return <div className={styles.logo} onClick={() => props.onClick()}></div>
}
SidebarLogo.propTypes = {
  onClick: React.PropTypes.func
}

export function SidebarMenu(props) {
  return (
    <ul className={styles.menu}>
      {props.children}
    </ul>
  )
}

export function SidebarItem(props) {
  const action = !!props.link
    ? <Link to={props.link}>{props.text}</Link>
    : <a onClick={props.onClick}>{props.text}</a>
  return (
    <li className={styles.menuItem}>
      {action}
    </li>
  )
}
SidebarItem.propTypes = {
  text: React.PropTypes.string,
  link: React.PropTypes.string,
  onClick: React.PropTypes.func
}

export function SidebarFooter(props) {
  return (
    <div className={styles.footer}>
      {props.text}
    </div>
  )
}
SidebarFooter.propTypes = {
  text: React.PropTypes.string
}