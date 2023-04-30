import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '500px',
  height: '500px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function Location() {
  return (

    <div>
        <h2 className="text-3xl font-bold text-center my-14">Our Location</h2>
        <div className="hero">
  <div className="hero-content justify-center gap-20 flex-col lg:flex-row">
  <LoadScript
      googleMapsApiKey="YOUR_API_KEY"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
    <div className='w-1/3'>
      <h1 className="text-5xl font-bold">Check the location to get us.</h1>
      <p className="py-6">Click the pointer to get more information about our office and details of it's location.</p>
    </div>
  </div>
</div>
    </div>
  )
}

export default React.memo(Location)