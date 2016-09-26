import React from 'react'
import classNames from 'classnames/bind'

import styles from './Grid.css'
const cx = classNames.bind(styles)

export function Container(props) {
  const className = cx(
    'container',
    {full_width: !!props.fullWidth},
    {max_full_width: !!props.maxFullWidth}
  )
  return (
    <div className={className}>
      {props.children}
    </div>
  )
}
Container.propTypes = {
  fullWidth: React.PropTypes.bool,
  maxFullWidth: React.PropTypes.bool
}

export function Row(props) {
  return (
    <div className={styles.row}>
      {props.children}
    </div>
  )
}

export function Col(props) {
  const className = cx(
    props.span,
    {['offset_'+props.offset]: !!props.offset},
    {left: !!props.left},
    {right: !!props.right}
  )
  return (
    <div className={className}>
      {props.children}
    </div>
  )
}
Col.propTypes = {
  span: React.PropTypes.string,
  offset: React.PropTypes.string,
  left: React.PropTypes.bool,
  right: React.PropTypes.bool
}
Col.defaultProps = {
  span: 'twelve'
}

export function Clear(props) {
  return <div className={styles.clear}></div>
}
