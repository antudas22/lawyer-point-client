import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Lawyers from '../Lawyers/Lawyers';
import Testimonial from '../Testimonial/Testimonial';
import ContactUs from '../ContactUs/ContactUs';
import Location from '../Location/Location';
import Reputation from '../Reputation/Reputation';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Services/>
            <Lawyers/>
            <Reputation/>
            <Testimonial/>
            <Location/>
            <ContactUs/>
        </div>
    );
};

export default Home;