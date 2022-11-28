import React from 'react';
import Styles from "./_pages.module.css";
import Slider from "./sliders/Slider"
import Booking from './Booking Component/SearchHotel';
const Home = () => {
  return (
    <section id={Styles.pagesBlock}><article><Slider/><Booking/></article></section>
  )
}

export default Home;