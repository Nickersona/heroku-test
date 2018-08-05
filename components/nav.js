import React from 'react'
import Link from 'next/link'

let links = [
  { href: 'https://github.com/segmentio/create-next-app', label: 'Github' },
]


const Nav = ({ auth }) => {
  const isAuthenticated = auth.isAuthenticated()
  if (!isAuthenticated) { links.push({ onClick: auth.login(), label: 'Login' }) }
  if (isAuthenticated) { links.push({ onClick: auth.logout(), label: 'Logout' }) }

  links.map(link => {
    link.key = `nav-link-${link.href}-${link.label}`
    return link
  })

  return (
    <nav>
      <ul>
        <li>
          <Link prefetch href="/">
            <a>Home</a>
          </Link>
        </li>
        <ul>
          {links.map(({ key, href, onClick, label }) => {
            const clickEvent = onClick || (() => {})
            return (
              <li key={key}>
                <Link href={href} onClick={clickEvent}>
                  <a>{label}</a>
                </Link>
              </li>
            )
          })}
        </ul>
      </ul>

      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
            Helvetica, sans-serif;
        }
        nav {
          text-align: center;
        }
        ul {
          display: flex;
          justify-content: space-between;
        }
        nav > ul {
          padding: 4px 16px;
        }
        li {
          display: flex;
          padding: 6px 8px;
        }
        a {
          color: #067df7;
          text-decoration: none;
          font-size: 13px;
        }
      `}</style>
    </nav>
  )
}
export default Nav
