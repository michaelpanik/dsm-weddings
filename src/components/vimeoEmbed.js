import React from 'react'

const VimeoEmbed = ({id, className}) => {
    return (<div
      style={{
        padding: "56.25% 0 0 0",
        position: "relative"
      }}
      className={className}
    >
      <iframe
        src={`https://player.vimeo.com/video/${id}?color=ffffff&title=0&byline=0&portrait=0`}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen />
        <script src="https://player.vimeo.com/api/player.js"></script>
    </div>)
}

export default VimeoEmbed