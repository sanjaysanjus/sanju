import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Slider1 from "./slider1.avif"
import Slider2 from "./slider2.avif"
import Slider3 from "./slider3.avif"
import Slider4 from "./slider4.avif"
import global from "../../global.css"

const Slider = () => {
    return (
      <Carousel
        autoPlay={true}
        showArrows={true}
        interval={5000}
        dynamicHeight={true}
        stopOnHover={true}
        showThumbs={false}
        showIndicators={false}
      >
        <div>
          <img src={Slider1} alt="slider1" />
          <aside className="legend">
            <h1>Mysore</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt,
              nam! Cumque, impedit? Saepe maiores quasi voluptas ea similique
              nobis error. Molestiae id corporis beatae quasi harum dolore
            </p>
            <button>View More</button>
          </aside>
        </div>
        <div>
          <img src={Slider2} alt="slider2" />
          <aside className="legend">
            <h1>Mandya</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus consequatur officia ut minima commodi voluptate, rerum
              nihil quia repellendus. Consequatur, reiciendis excepturi! Accusamus
              illum culpa ad dicta ullam mollitia minus.
            </p>
            <button>View More</button>
          </aside>
        </div>
        <div>
          <img src={Slider3} alt="slider3" />
          <aside className="legend">
            <h1>Bangalore</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              assumenda nobis quisquam aliquam cupiditate laboriosam qui odit
              nihil obcaecati, ullam, corrupti facere soluta quod beatae!
              Recusandae optio cumque unde earum.
            </p>
            <button>View More</button>
          </aside>
        </div>
      </Carousel>
    );
  };
  
  export default Slider;
