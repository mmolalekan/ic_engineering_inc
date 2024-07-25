import { useState, useEffect } from "react";
// components 
import Navbar from "../crumbs/Navbar";
import Footer from "../crumbs/Footer";
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faHammer, faHelmetSafety, faCompassDrafting, faDownload, faCogs, faCog } from '@fortawesome/free-solid-svg-icons';
// slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//Images
import Banner from "../Images/banner.jpg";
import About from "../Images/about.jpg";
import ProjectManagement from '../Images/project management.jpg';
import Structural from '../Images/structural design.jpg';
import RealEstate from '../Images/real estate.jpg';
import RealEstate2 from '../Images/real estate2.jpg';
import Modification from '../Images/modifications.jpg';
import Pic from '../Images/pic.jpg';
import Contact from '../Images/contact.jpg';
import Description from "../Images/description.jpg";


const Home = () => {
  const [displayedText, setDisplayedText] = useState('');

  const paragraph = "For 30 years, IC Engineering Inc. has led with innovation and quality across energy, technology, and real estate sectors. We are dedicated to delivering cutting-edge, sustainable solutions while maintaining our legacy of engineering excellence.";
  const tagline = "30 Years of Engineering Excellence";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(prev => prev + tagline[index]);
      index += 1;
      if (index >= tagline.length) clearInterval(interval);
    }, 200);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [paragraph]);

  const services = [
    { icon: faCog, title: "Project Management" },
    { icon: faCompassDrafting, title: "Structural Design" },
    { icon: faHouse, title: "Real Estate" },
    { icon: faHammer, title: "Design & Modifications" },
  ];

  const projects = [
    {
      image: ProjectManagement,
      type: "Project Management",
      description: "The Layhill development is set on a 14-acre site at 5429 Yates Mill Pond Rd., Raleigh, NC. The land, divided by a creek and governed by the Swift Creek Land Management Plan, offers 35% usable area, accommodating the construction of four estate-type houses."
    },
    {
      image: Structural,
      type: "Structural Engineering",
      description: "The Layhill development is set on a 14-acre site at 5429 Yates Mill Pond Rd., Raleigh, NC. The land, divided by a creek and governed by the Swift Creek Land Management Plan, offers 35% usable area, accommodating the construction of four estate-type houses."
    },
    {
      image: RealEstate,
      type: "Real Estate",
      description: "The Layhill development is set on a 14-acre site at 5429 Yates Mill Pond Rd., Raleigh, NC. The land, divided by a creek and governed by the Swift Creek Land Management Plan, offers 35% usable area, accommodating the construction of four estate-type houses."
    },
    {
      image: RealEstate2,
      type: "Real Estate",
      description: "The Layhill development is set on a 14-acre site at 5429 Yates Mill Pond Rd., Raleigh, NC. The land, divided by a creek and governed by the Swift Creek Land Management Plan, offers 35% usable area, accommodating the construction of four estate-type houses."
    },
    {
      image: Modification,
      type: "Modification and Renovation",
      description: "The Layhill development is set on a 14-acre site at 5429 Yates Mill Pond Rd., Raleigh, NC. The land, divided by a creek and governed by the Swift Creek Land Management Plan, offers 35% usable area, accommodating the construction of four estate-type houses."
    },
  ];

  const testimonials = [
    {
      name: 'John Doe',
      image: Pic,
      review: 'This is a great product! Highly recommend to everyone.',
      position: 'CEO',
      company: 'IC Engineering Inc.'
    },
    {
      name: 'Jane Smith',
      image: Pic,
      review: 'Fantastic service and support. Will use again.',
      position: 'Marketing Manager',
      company: 'Tech Solutions'
    },
    {
      name: 'Samuel Green',
      image: Pic,
      review: 'Very easy to integrate and use. Saves a lot of time.',
      position: 'Developer',
      company: 'WebWorks'
    },
    {
      name: 'Lisa Wong',
      image: Pic,
      review: 'Beautifully designed and very functional.',
      position: 'Designer',
      company: 'Creative Co.'
    },
    {
      name: 'Paul White',
      image: Pic,
      review: 'Makes project management a breeze.',
      position: 'Project Manager',
      company: 'BuildIt'
    }
  ];

  // slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div>
      <Navbar />

      {/* Intro */}
      <section className="relative">
        <img src={Banner} alt="banner" className="inset-0 w-full h-full object-cover aspect-w-16 aspect-h-9" />
        <p className="inline-block text-sm font-extrabold leading-loose md:text-2xl text-black absolute top-5 left-5 bg-opacity-10 bg-black rounded-3xl p-4 text-justify">
          {/* {displayedText} */}{tagline}
        </p>
      </section>

      <div className="flex flex-col justify-center items-center gap-20 py-16 px-10">
        {/* About us */}
        <div className="flex flex-col-reverse md:flex-row-reverse justify-center items-center gap-10">
          <img src={Description} alt="About IC Engineering" className="rounded-3xl inset-0 w-full md:w-1/2 object-cover aspect-w-16 aspect-h-9" />
          <div className="flex flex-col gap-3 justify-center items-center">
            <h2 className="text-black text-2xl font-extrabold uppercase">About IC Engineering</h2>
            <p className="w-full md:w-full text-[18px] font-sans text-justify text-cyan leading-normal">{paragraph}</p>
            {/* <hr className="border-l-1 border-slate-700" /> */}
            <a href="" className="uppercase bg-black text-white py-2 px-5 rounded-full w-1/2 text-center">Read more</a>
          </div>
        </div>

        {/* Company profile */}
        <section className="bg-cyan text-white flex flex-col gap-8 justify-center items-center mx-10 w-full py-10 rounded-tl-[50px] rounded-br-[50px]">
          <p className="px-5 text-center font-light">Download our Company profile today to find the best service for your needs!</p>
          <div className="flex flex-col md:flex-row gap-5 justify-center items-center px-10">
            <input className="bg-white rounded-xl p-2 w-full text-cyan text-center" type="text" placeholder="Name" />
            <input className="bg-white rounded-xl p-2 w-full text-cyan text-center" type="email" placeholder="Email" />
            <a href="/" className="bg-black text-white py-2 px-5 rounded-full w-min">
              <FontAwesomeIcon icon={faDownload} size="2x" className="text-white" />
            </a>
          </div>
        </section>

        {/* Services */}
        <section className="flex flex-col justify-center items-center gap-10">
          <h2 className="text-black text-2xl font-extrabold uppercase">Services</h2>
          <div className="w-full flex flex-wrap justify-center items-center gap-10">
            {services.map((service, index) => (
              <div key={index} className="flex h-72 w-72 flex-col justify-center items-center border-2 rounded-3xl gap-10">
                <div className="bg-cyan rounded-full p-4">
                  <FontAwesomeIcon icon={service.icon} size="4x" className="text-white" />
                </div>
                <h3>{service.title}</h3>
              </div>
            ))}
          </div>
          <a href="" className="uppercase bg-black text-white py-2 px-5 rounded-full w-72 text-center">View all services</a>
        </section>

        {/* Projects */}
        <section className="flex flex-col justify-center items-center gap-10">
          <h2 className="text-black text-2xl font-extrabold uppercase">Projects</h2>
          <div className="flex flex-wrap gap-8 justify-center">
            {projects.map((project, index) => (
              <div key={index} className="flex flex-col justify-center items-center w-96 border-double border-4 rounded-4xl p-5 gap-5 bg-cyan">
                <h3 className="text-xl font-bold font-merriweather py-2 text-white text-center">
                  <span className="font-inter text-slate-400 font-thin">Category: </span>
                  <br />{project.type}</h3>
                <img src={project.image} alt={project.type} className="inset-0 w-full h-full object-cover aspect-w-16 aspect-h-9" />
                <p className="text-justify text-white text-xl font-extralight">{project.description}</p>
              </div>
            ))}
          </div>
          <a href="" className="uppercase bg-black text-white py-2 px-5 rounded-full w-72 text-center">View more projects</a>
        </section >
      </div>

      {/* testimonials */}
      <section className="p-10">
        <h2 className="text-black text-2xl font-extrabold uppercase w-full text-center">Testimonials</h2>
        <div className="my-10">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white max-w-[300px] border text-cyan rounded-xl">
                <div className="h-40 bg-white flex justify-center items-center rounded-t-xl">
                  <img src={testimonial.image} alt={testimonial.name} className="h-28 w-28 rounded-full" />
                </div>

                <div className="flex flex-col items-center justify-center gap-4 p-4">
                  <p className="text-sm font-light ">{testimonial.name}</p>
                  <p className="text-center italic font-extralight text-black">"{testimonial.review}"</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Call to action */}
      <section className="relative h-56">
        <img src={Contact} alt="banner" className="inset-0 w-full h-full object-cover aspect-w-16 aspect-h-9" />
        <div className="text-sm text-white w-1/2 absolute bottom-5 md:bottom-10 right-5 bg-opacity-75 bg-cyan p-4 text-left flex flex-col gap-2 justify-center items-start">
          <h1 className="text-[10px] md:text-sm font-semibold">IC Engineering Inc.</h1>
          <p className="text-[10px] md:text-sm italic font-light">We always take pride in quality over quantity and built the company slowly so we could earn a reputation for good work.</p>
          <a href="" className="text-[10px] md:text-sm uppercase bg-black hover:bg-white hover:text-black text-white py-2 px-2 rounded-full w-1/2 text-center">Call now</a>
        </div>
      </section>

      <Footer />
    </div >
  );
}

export default Home;
