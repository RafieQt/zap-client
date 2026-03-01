import React from 'react';
import Banner from '../banner/Banner';
import Work from '../work/Work';
import Services from '../services/Services';
import Helped from '../helped/Helped';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Work></Work>
            <Services></Services>
            <Helped></Helped>
        </div>
    );
};

export default Home;