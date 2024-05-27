import Image from "next/image";
import React from "react";

export default function Home() {
  return (
      <div className="bg-black h-[200vh]">
        <header className="header">
          <a href="logo" className="logo">
            Benjamin <span>Eboh</span>
          </a>

        {/* inputing menu bar for screensize */}
        <button>
       <i className="fa fa-bars" id="menu-icon"></i>
       </button>

          <nav className="navbar flex">
            <a href="home" className="active">Home</a>
            <a href="education">Education</a>
            <a href="services">Services</a>
            <a href="testimonals">Testimonials</a>
            <a href="contacts">Contacts</a>
          </nav>
        </header>

        <section className="home" id="home">
          <div className="home-content">
              <h1>Hi, Its <span>Benjamin</span>
              </h1>
              <h3 className="text-animation">I'm a <span></span></h3>
              <p> 
               A passionate front-end developer with expertise in building modern, responsive web applications using Next.js, React, and other cutting-edge technologies, ensuring performance optimization, seamless user experiences, and accessibility.
              </p>

              <div className="social-icons">
                <a href=""> <i className="fab fa-linkedin"></i>
                    </a>
                <a href=""><i className="fab fa-instagram"></i>
                </a>
                <a href=""><i className="fab fa-twitter"></i></a>
                <a href=""><i className="fab fa-github"></i></a>
              </div>

              <div className="btn-group">
                <a href="#" className="btn">Hire</a>
                <a href="#contact" className="btn">Contact</a>
              </div>
            </div>

              <div className="home-img">
                <img src="/Eboh.jpg" alt="" className="h-[300px] w-[2200px]"/>
              </div>
        </section>

        <section id="education" className="bg-black text-white h-[200vh]">
            <h2 className="text-[4rem] text-center m-[3rem 0] font-bold">Education</h2>

            <div className="timeline-items">

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                  <div className="timeline-date">2017</div>

                  <div className="timeline-content">
                    <h3>High School</h3>
                    <p>Attended the Milatary School of Nigeria and attained the West African and National School Certificate</p>
                  </div>
                
              </div>


              <div className="timeline-item">
                <div className="timeline-dot"></div>
                  <div className="timeline-date">2023</div>

                  <div className="timeline-content">
                    <h3>University</h3>
                    <p>Attended University of Cross River State Calabar and attained a double Honoured Bachelor Degree in Human Anatomy and Forensic Anthropology </p>
                  </div>
                
              </div>


              <div className="timeline-item">
                <div className="timeline-dot"></div>
                  <div className="timeline-date">2021</div>

                  <div className="timeline-content">
                    <h3>Internship</h3>
                    <p>Attended the Milatary School of Nigeria and attained the West African and National School Certificate</p>
                  </div>
                
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                  <div className="timeline-date">2021</div>

                  <div className="timeline-content">
                    <h3>Job 1</h3>
                    <p>Attended the Milatary School of Nigeria and attained the West African and National School Certificate</p>
                  </div>
                
              </div>
            </div>
        </section>

        <section id="services" className="services  bg-black text-white">
          <h2 className="text-[4rem] text-center my-[3rem] font-bold">Services</h2>

          <div className="service-container">
            <div className="service-box">
              <div className="service-info">
                <h4>Web Design</h4>
                <p>render services for web development and create responsive designs</p>
              </div>
            </div>

            <div className="service-box">
              <div className="service-info">
                <h4>Frontend Development</h4>
                <p>render services for web development and create responsive designs</p>
              </div>
            </div>

            <div className="service-box">
              <div className="service-info">
                <h4>Testing</h4>
                <p>render services for web development and create responsive designs</p>
              </div>
            </div>

            <div className="service-box">
              <div className="service-info">
                <h4>Frontend Development</h4>
                <p>render services for web development and create responsive designs</p>
              </div>
            </div>
          </div>  
        </section>

        <section id="testimonials" className="testimonials  bg-black text-white">
          <div className="testimonial-box">
            <h2 className="text-[4rem] text-center my-[3rem] font-bold">Testimonials</h2>

            <div className="wrapper">
              <div className="testimonial-item">
                <img src="/campbell.jpg" alt="" />
                <h2>Campbell</h2>
                <div className="rating">
                <i className="fa fa-star" id="stars"></i>
                <i className="fa fa-star" id="stars"></i>
                <i className="fa fa-star" id="stars"></i>
                <i className="fa fa-star" id="stars"></i>
                <i className="fa fa-star" id="stars"></i>
                </div>
                <p>Produced my first website with so much good designs and a better responsive design, he is good at his work. </p> 
              </div>

              <div className="testimonial-item">
                <img src="/mathias.jpg" alt="" className="h-[100px]"/>
                <h2>Mathias</h2>
                <div className="rating">
                <i className="fa fa-star" id="stars"></i>
                <i className="fa fa-star" id="stars"></i>
                <i className="fa fa-star" id="stars"></i>
                <i className="fa fa-star" id="stars"></i>
                <i className="fa fa-star" id="stars"></i>
                </div>
                <p>Produced my first website with so much good designs and a better responsive design, he is good at his work. </p>
              </div>

              <div className="testimonial-item">
                <img src="/tamara.jpg" alt=""/>
                <h2>Tamara</h2>
                <div className="rating">
                <i className="fa fa-star" id="stars"></i>
                <i className="fa fa-star" id="stars"></i>
                <i className="fa fa-star" id="stars"></i>
                <i className="fa fa-star" id="stars"></i>
                <i className="fa fa-star" id="stars"></i>
                </div>
                <p>Produced my first website with so much good designs and a better responsive design, he is good at his work. </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact  bg-black text-white mb-[px]">
          <h2 className="text-[4rem] text-center my-[3rem] font-bold">Contact <span>Me</span></h2>

          <form action="" className="bg-black">
            <div className="input-group">
              <div className="input-box">
                <input type="text" name="" id=""
                placeholder="Full Name" />
                <input type="email" name="" id="" 
                placeholder="Email"/>
              </div>

              <div className="input-box">
                <input type="text" name="" id=""
                placeholder="Phone Number" />
                <input type="text" name="" id="" 
                placeholder="Subject"/>
              </div>
            </div>

            <div className="input-group2">
              <textarea name="" id="" placeholder="Your Message"></textarea>
              <input type="submit" value="Send Message" className="btn" />
            </div>
          </form>
        </section>

        <footer className="footer bg-black text-white">
          <div className="social">
          <a href=""> <i className="fab fa-linkedin"></i>
                    </a>
                <a href=""><i className="fab fa-instagram"></i>
                </a>
                <a href=""><i className="fab fa-twitter"></i></a>
                <a href=""><i className="fab fa-github"></i></a>
          </div>

          <ul>
            <li><a href="">FAQ</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">About Me</a></li>
            <li><a href="">Contacts</a></li>
            <li><a href="">Testimonials</a></li>
          </ul>
        </footer>
        {/* last div for container*/}
      </div>
  );
}
