import React from 'react'

import defaultPage from '../../client/hoc/defaultPage'
import { show } from '../../client/utils/lock'

const CONTAINER_ID = 'put-lock-here'

export default class SignIn extends React.Component {
  componentDidMount () {
    show(CONTAINER_ID)
  }
  render () {
    return <div id={CONTAINER_ID} />
  }
}



