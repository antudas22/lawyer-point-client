import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../../Services/Services';
import Lawyers from '../../Lawyers/Lawyers';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Services/>
            <Lawyers/>
        </div>
    );
};

export default Home;