import * as React from 'react'
import { Link } from 'react-router'
import * as IoNaviconRound from 'react-icons/lib/io/navicon-round'

import * as styles from './Header.css'

export default function Header(props) {
  return (
    <div className={styles.offset}>
      <header className={styles.header}>
        {props.children}
      </header>
    </div>
  )
}
Header.propTypes = {
  children: React.PropTypes.node
}

export function Burger(props) {
  return (
    <a className={styles.burger} onClick={() => props.onClick()}>
      <IoNaviconRound />
    </a>
  )
}
Burger.propTypes = {
  onClick: React.PropTypes.func
}

export function Logo(props) {
  const className = props.center ? styles.logoCenter : styles.logo
  return <Link to={props.link} className={className} />
}
Logo.propTypes = {
  link: React.PropTypes.string,
  center: React.PropTypes.bool
}

export function Menu(props) {
  return (
    <ul className={styles.menu}>
      {props.children}
    </ul>
  )
}
Menu.propTypes = {
  children: React.PropTypes.node
}

export function MenuItem(props) {
  const action = props.link
    ? <Link to={props.link}>{props.text}</Link>
    : <a onClick={props.onClick}>{props.text}</a>
  return (
    <li className={styles.menuItem}>
      {action}
    </li>
  )
}
MenuItem.propTypes = {
  text: React.PropTypes.string,
  link: React.PropTypes.string,
  onClick: React.PropTypes.func
}