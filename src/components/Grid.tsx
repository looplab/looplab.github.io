import * as React from 'react'
import * as classNames from 'classnames'

import * as styles from './Grid.css'

export interface ContainerProps {
    fullWidth?: boolean;
    maxFullWidth?: boolean;
    children?: any;
}

export const Container: React.StatelessComponent<ContainerProps> = (props) => {
  const className = classNames({
    [styles.container]: true,
    [styles.full_width]: !!props.fullWidth,
    [styles.max_full_width]: !!props.maxFullWidth
  })
  return (
    <div className={className}>
      {props.children}
    </div>
  )
}

export interface RowProps {
    children?: any;
}

export const Row: React.StatelessComponent<RowProps> = (props) => {
  return (
    <div className={styles.row}>
      {props.children}
    </div>
  )
}

export interface ColProps {
    children?: any;
    span?: string;
    offset?: string;
    left?: boolean;
    right?: boolean;
}

export const Col: React.StatelessComponent<ColProps> = (props) => {
  const className = classNames({
    [(styles as any)[props.span]]: true,
    [(styles as any)[`offset_${props.offset}`]]: !!props.offset,
    [styles.left]: !!props.left,
    [styles.right]: !!props.right,
  })
  return (
    <div className={className}>
      {props.children}
    </div>
  )
}
Col.defaultProps = {
  span: 'twelve',
}

export const Clear: React.StatelessComponent<{}> = (props) => {
  return <div className={styles.clear}></div>
}
