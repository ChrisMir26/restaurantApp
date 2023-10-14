import React from "react";
import eventStyle from "./Events.module.css";
import Button from "../Button/Button";
import blacwoodCron from "../../assets/images/blacwoodCron.jpg";
import videoBar from "../../assets/video/video.mp4";

const Events = () => {
  return (
    <div className={eventStyle.eventContainer}>
      <div className={eventStyle.topBox}>
        <div className={eventStyle.eventVideo}>
          <video
/*             className={eventStyle.eventVid}
 */            
            className={`${eventStyle.eventVid} video-responsive`}
            src={videoBar}
            autoPlay
            loop
            muted
            playsInline
            controls
            controlsList="nodownload" // Evita la descarga del video
          ></video>
        </div>
        <div className={eventStyle.eventForm}>
          <h2>FUNCTIONS AND EVENTS</h2>
          <div className={eventStyle.eventText}>
            <p>
              Looking for a Special event or Christmas party venue in Bondi that
              is sure to impress?
            </p>
            <p>
              Host your next social or staff Christmas function at one of
              Bondi’s best new locations.
            </p>
            <p>· Groups from 30-95</p>
            <p>· Packages to suit every budget</p>
            <p>· World-class food & beverage</p>
            <p>· Daytime & evening functions</p>

            <p className={eventStyle.inTouch}>Get in touch!</p>
          </div>
          <form>
            <div className={eventStyle.formTop}>
              <input type="text" name="name" placeholder="Name" />
              <input type="email" name="email" placeholder="Email" />
            </div>
            <div className={eventStyle.formBottom}>
              <input type="text" name="phone" placeholder="Phone" />
              <select name="event_type" id="event_type">
                <option value="" disabled selected>
                  Event Type
                </option>
                <option value="Birthday">Birthday</option>
                <option value="Work Party">Work Party</option>
                <option value="Whole Venue">Whole Venue</option>
              </select>
            </div>
            <div className={eventStyle.btn}>
              <Button button={"Submit"} />
            </div>
          </form>
        </div>
      </div>
      <div className={eventStyle.bottomBox}>
        <div className={eventStyle.bottomBoxLeft}>
          <h2>BOOKINGS</h2>
          <p>
            Opening in Cronulla in 2016 by three mates Daniel Sorridimi, Robert
            Lechowicz and Paul Pisani, Blackwood has quickly become a favourite
            meeting place for locals and a must-visit brunch destination for
            visitors from around Sydney.
          </p>
          <p>
            Expanding to include a Bondi location in early 2022, blurring the
            lines between café, restaurant and bar, Blackwood now offers two
            distinct venues with the focus firmly on the essence of the way the
            owners love to dine: fun and vibrant, super sleek but comfortable
            design and the feeling that you’re welcome anytime
          </p>
          <p>
            Michelin-star trained co-owner and executive chef, Robert Lechowicz,
            brings you a bright, broad and seasonal menu with Mediterranean and
            Asian flavours grounded with French technique, utilising local and
            seasonal produce wherever possible.
          </p>
          <div>
            <Button button={"book now"} />
          </div>
        </div>
        <div className={eventStyle.bottomBoxRight}>
          <img src={blacwoodCron} alt="restaurant image" />
        </div>
      </div>
    </div>
  );
};

export default Events;
