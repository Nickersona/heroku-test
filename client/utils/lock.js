import { setSecret } from './auth_universal'

import uuid from 'uuid'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

const { 
    AUTH_DOMAIN,
    AUTH_CLIENT_ID,
    AUTH_REDIRECT_URI
} =  publicRuntimeConfig


const getLock = (options) => {
  const Auth0Lock = require('auth0-lock').default
  return new Auth0Lock(AUTH_CLIENT_ID, AUTH_DOMAIN, options)
}

const getBaseUrl = () => `${window.location.protocol}//${window.location.host}`

const getOptions = (container) => {
  const secret = uuid.v4()
  setSecret(secret)
  return {
    container,
    closable: false,
    auth: {
      responseType: 'token id_token',
      redirectUrl: `${getBaseUrl()}/auth/signed-in`,
      params: {
        scope: 'openid profile email',
        state: secret
      }
    }
  }
}

export const show = (container) => getLock(getOptions(container)).show()
export const logout = () => getLock().logout({ returnTo: getBaseUrl() })