import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <div class="float-container">
      <div class="float-child">
      <img src="https://images.wallpaperscraft.com/image/single/travel_adventure_words_170050_300x168.jpg"/>
      </div>
      <div class="float-child">
      <img src="https://images.wallpaperscraft.com/image/single/travel_rock_forest_167729_300x168.jpg"/>
      </div>
      </div>
      <div class="float-container">
      <div class="float-child">
      <img src="https://images.wallpaperscraft.com/image/single/jeep_travel_slope_177152_300x168.jpg"/>
      </div>
      <div class="float-child">
      <img src="https://images.wallpaperscraft.com/image/single/couple_mountains_travel_122719_300x168.jpg"/>
      </div>
      <div class="float-child">
      <img src="https://images.wallpaperscraft.com/image/single/road_car_travel_221392_300x168.jpg"/>
      </div>
      <div class="float-child">
      <img src="https://images.wallpaperscraft.com/image/single/traveler_travel_mountains_187836_300x168.jpg"/>
      </div>
      <div class="float-container">
      <div class="float-child">
      <img src="https://images.wallpaperscraft.com/image/single/feet_boat_travel_114467_300x168.jpg"/>
      </div>
      <div class="float-child">
      <img src="https://images.wallpaperscraft.com/image/single/loneliness_lonely_travel_164762_300x168.jpg"/>
      </div>
      <div class="float-child">
      <img src="https://images.wallpaperscraft.com/image/single/man_backpack_travel_149886_300x168.jpg"/>
      </div>
      </div>
      
      </div>
    </>
  );
};

const About = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>
        These adventurous travel bloggers, storytellers, and photographers are inspiring explorers in their own right—their travel stories entertain, their adventures inspire, and they live their passion for travel.

Paul Nicklen is an award-winning polar photographer using remarkable imagery to share stories of our rapidly changing planet on all seven continents.
Wandering Earl is an off-the-beaten path adventurer who has visited many places that other people either cannot, or don’t want to go. He sheds light on offbeat destinations adventurous travelers just might want to explore
Oneika Raymond is an Emmy Award-winning journalist and perpetual explorer—she is a passionate traveler using her travel stories to inspire others to discover the most unforgettable places.
While certainly not the first family travel bloggers to set out to explore the world, the Bucket List Family does an amazing job sharing the wonders of the world through videos and imagery that homebound travelers can enjoy with their kids
        </p>
      </section>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="form">
      <form>
        <label>Your Name</label>
        <input type="text" />

        <label>Email</label>
        <input type="email" />

        <label>Subject</label>
        <input type="text" />

        <label>Message</label>
        <textarea rows="6" placeholder="Type your message here" />

        <button className="btn">Submit</button>
      </form>
    </div>
    </>
  );
};

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>
      
      <Route path="/contact">
        <Contact />
      </Route>
    </Switch>
  );
};

export default App;
