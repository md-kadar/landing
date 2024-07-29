import React from "react";
import "./Home.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrow from "../../assets/Group 5.png";
import icon1 from "../../assets/Icon.png";
import mac from "../../assets/Macbook.png";
import picNum from "../../assets/PIcture & Number.png";
import partner from "../../assets/Partners logo.png";
import stat from "../../assets/Images.png";
import checklist from "../../assets/checklist.png";
import qoute from "../../assets/quote.png";
import picture from "../../assets/member-1.jpg";

const clients = [
  {
    name: "Silva Natalia",
    postiion: "Owner, Tanahcon",
    messsage:
      "Lean startup metrics venture innovator assets angel investor learning curve incubator branding advisor termsheet. IPad ecosystem conversion android advisor.",
    photo: picture,
  },
  {
    name: "Silva Natalia",
    postiion: "Owner, Tanahcon",
    messsage:
      "Lean startup metrics venture innovator assets angel investor learning curve incubator branding advisor termsheet. IPad ecosystem conversion android advisor.",
    photo: picture,
  },
  {
    name: "Silva Natalia",
    postiion: "Owner, Tanahcon",
    messsage:
      "Lean startup metrics venture innovator assets angel investor learning curve incubator branding advisor termsheet. IPad ecosystem conversion android advisor.",
    photo: picture,
  },
  {
    name: "Silva Natalia",
    postiion: "Owner, Tanahcon",
    messsage:
      "Lean startup metrics venture innovator assets angel investor learning curve incubator branding advisor termsheet. IPad ecosystem conversion android advisor.",
    photo: picture,
  },
];

const Home = () => {
  const settings = {
    dots: true,
    Infinity: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <section className="hero-section">
        <div className="header">
          <div className="header-left">
            <div className="logo">StartUP</div>
          </div>
          <div className="header-right">
            <div className="header-right-menu">
              <ul>
                <li>
                  <a href="#">How it works</a>
                </li>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#" className="header-btn">
                    Try for FREE
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="hero">
          <h2>
            Connect with customer in
            <br /> a new way
          </h2>
          <p>
            Business plan lean startup holy grail disruptive. Crowdfunding beta
            <br />
            prototype gen-z incubator niche market.
          </p>
          <a href="#" className="header-btn">
            Try for FREE
          </a>
        </div>
      </section>
      <section className="mac-img">
        <img src={mac} alt="" />
      </section>
      <section>
        <div className="section-content">
          <p className="text-center p-color">Solutions</p>
          <h3 className="text-center">
            Modernize your workflow and <br /> maximize result
          </h3>
        </div>
        <div className="service">
          <div className="card">
            <div className="icon">
              <img src={icon1} alt="" />
              <h3>Cloud Server</h3>
              <p>
                Launch party pitch technology user experience innovator buzz
                stealth MVP business model.
              </p>
              <img src={arrow} alt="" className="card-arrow" />
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <img src={icon1} alt="" />
              <h3>Cloud Server</h3>
              <p>
                Launch party pitch technology user experience innovator buzz
                stealth MVP business model.
              </p>
              <img src={arrow} alt="" className="card-arrow" />
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <img src={icon1} alt="" />
              <h3>Cloud Server</h3>
              <p>
                Launch party pitch technology user experience innovator buzz
                stealth MVP business model.
              </p>
              <img src={arrow} alt="" className="card-arrow" />
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <img src={icon1} alt="" />
              <h3>Cloud Server</h3>
              <p>
                Launch party pitch technology user experience innovator buzz
                stealth MVP business model.
              </p>
              <img src={arrow} alt="" className="card-arrow" />
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <img src={icon1} alt="" />
              <h3>Cloud Server</h3>
              <p>
                Launch party pitch technology user experience innovator buzz
                stealth MVP business model.
              </p>
              <img src={arrow} alt="" className="card-arrow" />
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <img src={icon1} alt="" />
              <h3>Cloud Server</h3>
              <p>
                Launch party pitch technology user experience innovator buzz
                stealth MVP business model.
              </p>
              <img src={arrow} alt="" className="card-arrow" />
            </div>
          </div>
        </div>
      </section>
      <section className="result-section">
        <div className="left">
          <img src={picNum} alt="" />
        </div>
        <div className="right">
          <div className="section-content">
            <p>Real Results</p>
            <h3>
              Improves
              <br /> Customer Experiences
            </h3>
            <p className="desc">
              Responsive web design supply chain crowdfunding
              <br /> agile development analytics technology ownership
              <br /> startup. Network effects social proof user experience
              <br /> prototype buzz product management deployment
              <br />
              metrics sales infographic equity holy grail
              <br /> crowdfunding release.
            </p>
            <a href="#">Learn More</a>
          </div>
        </div>
      </section>
      <section className="major-section">
        <div className="wrapper">
          <div className="left">
            <div className="section-content">
              <p>Clients</p>
              <h3>
                Trusted by major
                <br /> companies
              </h3>
              <p className="desc">
                Responsive web design supply chain crowdfunding
                <br /> agile development analytics technology ownership
                <br /> startup. Network effects social proof user experience
                <br /> prototype buzz product management deployment
                <br />
                metrics sales infographic equity holy grail
                <br /> crowdfunding release.
              </p>
              <a href="#">Learn More</a>
            </div>
          </div>
          <div className="right">
            <img src={partner} alt="" />
          </div>
        </div>
      </section>
      <section className="result-section">
        <div className="left">
          <img src={stat} alt="" />
        </div>
        <div className="right">
          <div className="section-content">
            <p>Great Features</p>
            <h3>
              Lots of features to
              <br /> improve your workflow
            </h3>
            <p className="desc">
              Responsive web design supply chain crowdfunding
              <br /> agile development analytics technology.
            </p>
            <ul>
              <li>
                <img src={checklist} alt="" />
                <p>Twitter stealth churn rate early adopters</p>
              </li>
              <li>
                <img src={checklist} alt="" />
                <p>Twitter stealth churn rate early adopters</p>
              </li>
              <li>
                <img src={checklist} alt="" />
                <p>Twitter stealth churn rate early adopters</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="pricing-section">
        <div className="pricing-table">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>
                  <h4>Starter Plane</h4>
                  <h2>$19</h2>
                  <p>*Billed monthly</p>
                </th>
                <th>
                  <h4>Business Plane</h4>
                  <h2>$19</h2>
                  <p>*Billed monthly</p>
                </th>
                <th>
                  <h4>Corporate Plane</h4>
                  <h2>$19</h2>
                  <p>*Billed monthly</p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Storage access</td>
                <td>
                  <img src={checklist} alt="" />
                </td>
                <td>
                  <img src={checklist} alt="" />
                </td>
                <td>
                  <img src={checklist} alt="" />
                </td>
              </tr>
              <tr>
                <td>Storage access</td>
                <td>
                  <img src={checklist} alt="" />
                </td>
                <td>
                  <img src={checklist} alt="" />
                </td>
                <td>
                  <img src={checklist} alt="" />
                </td>
              </tr>
              <tr>
                <td>Storage access</td>
                <td>
                  <img src={checklist} alt="" />
                </td>
                <td>
                  <img src={checklist} alt="" />
                </td>
                <td>
                  <img src={checklist} alt="" />
                </td>
              </tr>
              <tr>
                <td>Storage access</td>
                <td>
                  <img src={checklist} alt="" />
                </td>
                <td>
                  <img src={checklist} alt="" />
                </td>
                <td>
                  <img src={checklist} alt="" />
                </td>
              </tr>
              <tr>
                <td>Storage access</td>
                <td>
                  <img src={checklist} alt="" />
                </td>
                <td>
                  <img src={checklist} alt="" />
                </td>
                <td>
                  <img src={checklist} alt="" />
                </td>
              </tr>
              <tr>
                <td>Storage access</td>
                <td>
                  <img src={checklist} alt="" />
                </td>
                <td>
                  <img src={checklist} alt="" />
                </td>
                <td>
                  <img src={checklist} alt="" />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <a href="#">Choose plan</a>
                  <p>*Try 30 days fo FREE</p>
                </td>
                <td>
                  <a href="#">Choose plan</a>
                  <p>*Try 30 days fo FREE</p>
                </td>
                <td>
                  <a href="#">Choose plan</a>
                  <p>*Try 30 days fo FREE</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="client-section">
        <div className="testimonial-section">
          <Slider {...settings}>
            {clients.map((item, index) => (
              <div key={index} className="slider-item">
                <div className="quote">
                  <img src={qoute} alt="" />
                  <p>"{item.messsage}"</p>
                </div>
                <div className="author">
                  <img src={item.photo} alt="Silvia Natalia" />
                  <div className="author-details">
                    <h3 className="name">{item.name}</h3>
                    <span className="title">{item.postiion}</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="form-section">
        <div className="form-wrapper">
          <h3>Get started to new way of customer relation</h3>
          <form action="">
            <div>
              <input type="text" name="" id="" placeholder="Your Name" />
            </div>
            <div>
              <input type="text" name="" id="" placeholder="E-mail address" />
            </div>
            <div>
              <textarea name="" id="" rows={3} placeholder="Your mesage here" />
            </div>
            <div>
              <a href="#">Send Message</a>
            </div>
          </form>
        </div>
      </div>

      <section className="footer-section">
        <div className="left">
          <h3>OrionSAAS</h3>
          <p>
            Bootstrapping accelerator termsheet partnership non-disclosure
            agreement. Research & development stealth user experience direct
            mailing crowdfunding niche market gamification crowdsource facebook
            iPhone value proposition seed money.
          </p>
          <ul>
            <li>Follow us</li>
            <li>
              <a href="#">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="middle">
          <h4>Features</h4>
          <ul>
            <li>
              <a href="#">Organic SEO</a>
            </li>
            <li>
              <a href="#">Local SEO</a>
            </li>
            <li>
              <a href="#">Social Meadia Marketing</a>
            </li>
            <li>
              <a href="#">PPC Marketing</a>
            </li>
            <li>
              <a href="#">SEO Analysis</a>
            </li>
            <li>
              <a href="#">Reputation Management</a>
            </li>
          </ul>
        </div>
        <div className="right">
          <h4>Features</h4>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Our Team</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Home;
