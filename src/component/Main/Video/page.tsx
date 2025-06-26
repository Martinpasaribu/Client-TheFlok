import React from 'react'

const Video = () => {
  return (

    <video 
        autoPlay 
        loop
        playsInline
        preload="auto" 
        className="w-full h-screen md:h-screen object-cover">
        <source src="/video/Adhisthana-Villas.mp4" type="video/mp4" />
        Your browser does not support the video tag.
    </video>


  )
}

export default Video


{/* <video 
  autoPlay 
  loop 
  preload="auto" 
  className="w-full h-screen md:h-screen object-cover">
  <source src="/video/VillasHD.mp4" type="video/mp4" />
  <track
    src="/Adhisthana.mp4"
    kind="subtitles"
    srcLang="en"
    label="English"
  />
  Your browser does not support the video tag.
</video> */}


{/* <video 
  autoPlay 
  muted 
  loop 
  controls 
  preload="metadata" 
  className="w-full h-screen object-cover">
  <source 
    src="https://darkslateblue-quetzal-444131.hostingersite.com/videos/Borobudur" 
    type="video/mp4" 
  />
  Your browser does not support the video tag.
</video> */}