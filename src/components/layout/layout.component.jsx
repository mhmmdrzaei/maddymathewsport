import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Head from "../header/header.component.jsx"
import Footer from "../footer/footer.component.jsx"
const Layout = ({ children }) => {

  return (
    <>
        <Head />
        <main>{children}</main>
        <Footer /> 
    </>
  )
}

export default Layout