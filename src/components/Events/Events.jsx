import React, { useState, useEffect } from "react";
import eventStyle from "./Events.module.css";
import Button from "../Button/Button";
import blacwoodCron from "../../assets/images/blacwoodCron.jpg";
import videoBar from "../../assets/video/video.mp4";
import Message from "../Message/Message";

const Events = () => {
  const [msg, setMsg] = useState({message:"",error:true})
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
  });

  useEffect(()=>{
    console.log("soi messageeee",msg)
    setTimeout(()=>{
        setMsg({
            message:"",
            error:true
        })
        
    },3000)
  },[msg.message])

  const handleChange = (e) => {
    const regexPhone = /^\d*$/
    const regexEmail = /^[a-zA-Z0-9._%+-]{1,64}@([a-zA-Z0-9.-]{1,4})\.[a-zA-Z]{1,8}$/;
    const { name, value } = e.target;

    if (name === "name" && value.length > 20) return setMsg({message:"Name cannot be longer than 20 characters",error:true})

    if (name === "phone" && value.length > 12) return setMsg({message:"Phone cannot be longer than 12 characters",error:true})
    if (name === "phone" && !regexPhone.test(value)) return setMsg({message:"Only numbers",error:true})

    if (name === "email" && regexEmail.test(value)) return setMsg({message:"Insert a valid email",error:true})
    if (name === "email" && value.length > 30) return setMsg({message:"Email cannot be longer than 30 characters",error:true})
    
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });

    
  };


  const handleSubmit = (e) =>{
    e.preventDefault()

    if(data.name === "" || data.email === "" || data.phone === "") return setMsg({message:"Please fill all the fields",error:true})
    if (data.phone.length < 8) return setMsg({message:"Phone should be at least 8 characters",error:true})
    if(data.eventType === "") return setMsg({message:"Event type cannot be empty",error:true})

    setMsg({message:"Message sent, thank you!", error:false})
    setData({name: "",
    email: "",
    phone: "",
    eventType: ""})

  }

  return (
    <div className={eventStyle.eventContainer}>
      <div className={eventStyle.topBox}>
        <div className={eventStyle.eventVideo}>
          <video
           
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
          <form onSubmit={handleSubmit}>
            <div className={eventStyle.formTop}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={data.name}
                onChange={(e) => handleChange(e)}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={data.email}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className={eventStyle.formBottom}>
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={data.phone}
                onChange={(e) => handleChange(e)}
              />
              <select
                name="eventType"
                id="eventType"
                onChange={(e) => handleChange(e)}
                value={data.eventType}
              >
                <option value="" selected disabled>Event Type</option>{" "}
                <option value="Birthday">Birthday</option>
                <option value="Work Party">Work Party</option>
                <option value="Whole Venue">Whole Venue</option>
              </select>
            </div>
            <div className={eventStyle.btn}>
              <Button button={"Submit"} />
              <Message msg={msg}/>
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
