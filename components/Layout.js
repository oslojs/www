import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'

const Layout = props => (
  <div className="root">
    <Head>
      <title>Oslo JS</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:description" content="Meetup group and umbrella organization for Oslo-based JavaScript meetups" />
      <meta property="og:image" content="https://oslojs.no/static/images/logo-512.png" />
      <meta property="og:site_name" content="Oslo JS" />
      <meta property="og:title" content="Javascript meetup in Oslo" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/images/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/images/favicon-16x16.png" />

      <link
        href="https://fonts.googleapis.com/css?family=Roboto:400,700,300"
        rel="stylesheet"
        type="text/css"
      />
    </Head>

    <style jsx global>{`
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      body {
        background: #f2db4f;
        color: #2e2e2c;
        font-family: 'Roboto',sans-serif;
        font-size: 18px;
      }
    `}</style>

    {props.children}
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
