require('dotenv').config()

const {
  AUTH_DOMAIN,
  AUTH_CLIENT_ID,
  AUTH_REDIRECT_URI,
} = process.env


// serverRuntimeConfig = { // Will only be available on the server side
//   mySecret: 'secret'
// }

module.exports = {
  publicRuntimeConfig: { // Will be available on both server and client
    AUTH_DOMAIN,
    AUTH_CLIENT_ID,
    AUTH_REDIRECT_URI
  },
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }


    return config
  }
}
