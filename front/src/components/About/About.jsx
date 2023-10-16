import React from "react";
import Button from "../Button/Button";
import AboutStyles from "./About.module.css";

const About = () => {
  return (
    <section className={AboutStyles.sectionAbout}>
      <div className={AboutStyles.aboutText}>
        <h2>About</h2>
        <p>
          Opening in Cronulla in 2016 by three mates Daniel Sorridimi, Robert
          Lechowicz and Paul Pisani, Blackwood has quickly become a favourite
          meeting place for locals and a must-visit brunch destination for
          visitors from around Sydney.
        </p><br />
        <p>
          Expanding to include a Bondi location in early 2022, blurring the
          lines between café, restaurant and bar, Blackwood now offers two
          distinct venues with the focus firmly on the essence of the way the
          owners love to dine: fun and vibrant, super sleek but comfortable
          design and the feeling that you’re welcome anytime.
        </p><br/>
        <p>
          Michelin-star trained co-owner and executive chef, Robert Lechowicz,
          brings you a bright, broad and seasonal menu with Mediterranean and
          Asian flavours grounded with French technique, utilising local and
          seasonal produce wherever possible.
        </p>

        <Button button={"book now"} />
      </div>
      <div className={AboutStyles.aboutImg}>
        <img
          src="https://assets.website-files.com/642ba53f12112f4538df2537/65238f73aeeb16df64863d6e_WhatsApp%20Image%202023-10-09%20at%201.26.54%20PM.jpeg"
          alt="Blackwood dish"
          srcset=""
        />
      </div>
    </section>
  );
};

export default About;
