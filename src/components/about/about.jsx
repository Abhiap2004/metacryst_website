import React from "react";
import "./about.css";
import Dhruvjain from "../../assets/team/DhruvJain.png";
import founder1 from "../../assets/Founder1.png";
import founder2 from "../../assets/Founder2.png";
function About() {
  return (
    <>
      <div className="aboutusname">About Us</div>
      <div className="card">
        <h5 className="text-3xl font-bold"> Our Vision </h5>
        <div className="card-body" id="body1">
          {/* <h5 className="card-title">Special title treatment</h5> */}
          <p className="text-xs md:text-lg">
            The MetaCryst Club at IIT Indore is a student community focused on
            material science and metallurgy. As part of the Science and
            Technology Council, we offer a platform for students to engage in
            these fields through workshops, seminars, guest lectures, and
            hands-on projects. We facilitate connections with the college's labs
            and provide opportunities for practical learning and research.
            Collaborations with experts and academic organizations enhance our
            members' experiences and broaden their knowledge. Join the MetaCryst
            Club to explore and contribute to the future of material science and
            metallurgy. Be part of a community that encourages
            curiosity and innovation.
          </p>
        </div>
      </div>
      <div id="msgheading">Message from Founders</div>
      <div className="containermain">
        <div className="messagecontainer flex justify-center items-center ">
          <div className="headphoto">
            <img src={founder1} alt="" />
          </div>
          <div className="headmessage">
            <div className="text-xs md:text-sm ">
              Sitting at Shiru Cafe, brainstorming about arbitrary points, was
              when framing a new materials science club came into the image. 
              Metallurgical Engineering and Materials Science (MEMS)
              at IIT Indore has been one of the most encouraging fields for more
              than quite a long while. To give the department an open arbiter as
              a specialized club, We, alongside the first graduating bunch of
              MEMS, raised a club, to be specific 'MetaCryst', with the help of
              a goal-oriented arrangement of resources.In a mission to advance
              redistribution of the branch and fabricate shared relations with
              industries, the club was set up to consistently address society's
              issues, tending to points that incorporate quality of life,
              vitality, manageability, and data innovation.We trust 'MetaCryst'
              evolves while seeking after these subjects at the most elevated
              level, while at the same time keeping up a collegial and
              profoundly community air.
            </div>
          </div>
          <div className="headphoto">
            <img src={founder2} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
