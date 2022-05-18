import React from "react"
import { Link } from "gatsby"

import "../main.css"
import Navbar from "./navbar"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <div className="text-gray-700">
      <Navbar />
      <main className="px-0 md:px-8">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
