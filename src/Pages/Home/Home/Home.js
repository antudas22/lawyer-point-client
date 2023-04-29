import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../../Services/Services';
import Lawyers from '../../Lawyers/Lawyers';
import Testimonial from '../../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Services/>
            <Lawyers/>
            <Testimonial/>
        </div>
    );
};

export default Home;