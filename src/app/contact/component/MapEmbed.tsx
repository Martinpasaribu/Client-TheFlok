import React from 'react'

const MapEmbed = () => {
  return (
    <div className='w-full'>
        
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.925065518894!2d110.16257157455091!3d-7.592285375022506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a8df336186b81%3A0xb5e9320eca18cb7c!2sAdhisthana%20Villas!5e1!3m2!1sid!2sid!4v1735618775598!5m2!1sid!2sid" 
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        />


    </div>
  )
}

export default MapEmbed