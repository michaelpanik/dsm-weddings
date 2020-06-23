import React from "react"
import { Link } from "gatsby"

import "../main.css"
import Navbar from "./navbar"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-200 font-serif">
      <Navbar />
      <main className="py-10 container mx-auto ">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
