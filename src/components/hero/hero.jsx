import React, { useEffect } from "react";
import { useRef } from "react";
import "react-toastify/dist/ReactToastify.css";
import "./hero.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Typewriter } from "react-simple-typewriter";
import Carousel from "react-bootstrap/Carousel";
import astrotalk from "../../assets/hero/Metabizz24.png";
import astrotalk1 from "../../assets/hero/1c.png";
import hundredhrs from "../../assets/nmd.png";
function Hero() {
  const linkRef = useRef(null);

  const left = {
    hidden: { x: -500, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, delay: 0.2 } },
  };
  const top = {
    hidden: { y: -500, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };
  const right = {
    hidden: { x: 500, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, delay: 0.8 } },
  };
  const smaller_top = {
    hidden: { y: -90, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  const hoverontext = () => {
    const textContainer = document.querySelector(".herotext");
    const gradientSize = 450 / 2;

    textContainer.addEventListener("mousemove", (e) => {
      const rect = textContainer.getBoundingClientRect();
      const x = e.clientX - rect.left - gradientSize;
      const y = e.clientY - rect.top - gradientSize;

      textContainer.style.backgroundPosition = `${x}px ${y}px`;
    });
  };

  return (
    <div
      className="text-white border-red-700  font-serif flex flex-wrap overflow-x-hidden herocontain"
      style={{
        background: "radial-gradient(rgb(82 27 88) 0.5%, rgb(00 00 00)",
      }}

    >
      <div className="border-0 border-green-600 w-full md:w-1/2 order-1 md:order-2">
        <motion.div
          id="heading"
          className="text-4xl md:text-7xl my-[5vh] mx-[5vh] mb-[3vh]"
          variants={smaller_top}
          animate={control}
          initial="hidden"
          whileInView="visible"
          style={{ fontFamily: "Trebuchet MS" }}
        >
          Welcome to 
          <br/>
          <span style={{ color: "rgb(199, 152, 223)" }} className="text-3xl md:text-5xl "> The MetaCryst Club</span>
          <div className="lg:block my-2 py-2 hidden font-bold text-3xl bg-gradient-to-r from-green-600 via-black-500 to-indigo-400 text-transparent bg-clip-text">
            <Typewriter className=""
              words={[
                "Materials science ...",
                "Metallurgy ...",
                "Metal Forming...",
              ]}
              loop={0}
              cursor
              cursorStyle={<span className="text-5xl">•</span>}
              cursorColor="rgb(37,99,235)"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1200}
            />
          </div>
        </motion.div>
        <motion.div
          className="w-[70%] text-xl mx-[5vh] herotext"
          variants={smaller_top}
          animate={control}
          initial="hidden"
          whileInView="visible"
          style={{ fontFamily: "Trebuchet MS" }}
          onMouseMove={hoverontext}
        >
          Metacryst is a dynamic club dedicated to advancing material science
          and metallurgy. It conducts engaging sessions on cutting-edge
          research and diverse activities, fostering innovation and knowledge
          sharing. Members explore the latest advancements, collaborate on
          projects, and contribute to the evolving field of material science
          and engineering.
        </motion.div>
      </div>

      <div className="w-full md:w-2/5 m-5 h-100 rounded-md shadow-slate-50 border-2 order-2 md:order-1 carousel1">
        <Carousel fade className="borderglow">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={astrotalk}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Material sciences</h3>
              <p>wonderful experience for having such a great session</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={astrotalk1}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Material sciences</h3>
              <p>wonderful experience for having such a great session</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={hundredhrs}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Material sciences</h3>
              <p>wonderful session</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Hero;
