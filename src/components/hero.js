import React from "react"
import Img from "gatsby-image"

const Hero = ({ image, title, children }) => {
  return (
    <div className="py-32 font-serif text-center mb-12 relative overflow-hidden">
      <Img
        fixed={image}
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: "100%",
          height: "100%",
          transform: "translate(-50%,-50%)",
          zIndex: -1,
        }}
      />
      {children}
    </div>
  )
}

export default Hero
