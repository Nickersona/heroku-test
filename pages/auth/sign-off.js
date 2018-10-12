import React from 'react'

import { unsetToken } from '../../client/utils/auth_universal'
import { logout } from '../../client/utils/lock'

export default class SignOff extends React.Component {
  componentDidMount () {
    unsetToken()
    logout()
  }
  render () {
    return null
  }
}