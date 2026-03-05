import React from 'react';
import Banner from '../banner/Banner';
import Work from '../work/Work';
import Services from '../services/Services';
import Helped from '../helped/Helped';
import Details from '../details/Details';
import Priority from '../priority/Priority';
import Customer from '../Customer/Customer';
import Faq from '../Faq/Faq';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Work></Work>
            <Services></Services>
            <Helped></Helped>
            <Details></Details>
            <Priority></Priority>
            <Customer></Customer>
            <Faq></Faq>
        </div>
    );
};

export default Home;