import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '350px',
  height: '350px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function Location() {
  return (

    <div>
        <h2 className="text-3xl font-bold text-center my-10 lg:my-14">Our Location</h2>
        <div className="hero">
  <div className="hero-content justify-center lg:gap-20 flex-col lg:flex-row">
  <LoadScript
      googleMapsApiKey="YOUR_API_KEY"
    >
      <div className=''>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      />
      </div>
    </LoadScript>
    <div className='w-3/4 lg:w-1/2 text-center lg:text-start mt-7 lg:mt-0'>
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">Check the location to get us.</h1>
      <p className="py-6">Click the pointer to get more information about our office and details of it's location.</p>
    </div>
  </div>
</div>
    </div>
  )
}

export default React.memo(Location)