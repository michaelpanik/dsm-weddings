import React from "react"
import { Link } from "gatsby"

import "../main.css"
import Navbar from "./navbar"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="px-8">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
