import * as React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
      {siteTitle}
    </Link>
    <img
      alt="Gatsby logo"
      height={50}
      style={{ margin: 0 }}
      src="https://images.prismic.io/bestcompany/83c14199-9491-4860-9e17-9778128c0653_logo.png"
    />
  </header>
)

export default Header
