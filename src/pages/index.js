import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.png';
import pic3b from '../assets/images/pic03b.png';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                Explore
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Giddy-up!
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            A Proven 4-step UX process
          </h2>
          <p>
            What comes first? Creative thinking or critical thinking?
          </p>
        </header>
        <ul className="icons major">
          <li>
            <i className="icon solid fa-bolt major style1">
              <span className="label">Lightning bolt</span>
            </i>
          </li>
          <li>
            <i className="icon solid fa-lightbulb major style2">
              <span className="label">Light bulb</span>
            </i>
          </li>
          <li>
            <span className="icon solid fa-atom major style3">
              <span className="label">Atom</span>
            </span>
          </li>
        </ul>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>
            Product Discovery
          </h2>
          <p>
            Working in the context of a CMS and CRM using an agile approach, we use short discovery phases and bring the entire team in early with initial user and business requirements. From here, the responsibility falls on me to be an advocate for the user and to fully understand what the problem is before ideation begins. In other words, "Show me the data!" helps to back up the design path.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>
            Ideation
          </h2>
          <p>
            From the product discovery step comes clear goals. Information architecture begins as sketches leading to wireframes or low-fidelity mockups. Ideation is a fine line between user and business needs. This is a balancing act, leaning more towards customer loyalty and satisfaction while keeping an eye on growing the business.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>
            Prototyping
          </h2>
          <p>
            From ideation comes the high-fidelity vision prototype. I use Adobe XD for wireframes, quick mockups, and prototyping. During prototype development, testing becomes the norm in weekly code reviews to show progress and gather feedback from members of our internal audience when available. Once an interactive prototype is complete, the team presents it to the stakeholders and a handful of users as a pre-development check.
          </p>
        </div>
      </section><section className="spotlight">
        <div className="image">
          <img src={pic3b} alt="" />
        </div>
        <div className="content">
          <h2>
            UI Design
          </h2>
          <p>
            From a high-fidelity vision prototype comes the proof-of-concept used to skin the prototype and build out the components having solid skills in semantic HTML, CSS, RWD, and WCAG. This is handed over to and collaborated with the .NET developers for integration into the production app and tested in pre-production environments.
          </p>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Pre-Gallup Projects</h2>
          <p>
            The following are several accomplishments that I am especially proud of when
             employed by Oriental Trading with on-request references to back me up.
          </p>
        </header>
        <ul className="features">
          <li className="icon solid fa-football-ball">
            <h3><a href="https://www.orientaltrading.com/vertical-four-image-graduation-photo-door-custom-banner-a2-13667953.fltr?categoryId=551269+1256+18">Personalized Products</a></h3>
            <p>In 2013, managed a team of 4 as UX Architect and developed the first phase for web-to-print and image upload that resulted in 5% incremental revenue lift over 2 quarters. By 2015, after significant advancements in discovery, development, and scalability, revenue hit $65K per week. Today, it's roughly $2.2M for the year.
            </p>
          </li>
          <li className="icon solid fa-award">
            <h3>Top Score</h3>
            <p>
              Around 2011, the UX team was the driving force behind the achievement for the top customer satisfaction score in the specialty retail category in the nation's top 100 internet retailers.
            </p>
          </li>
          <li className="icon solid fa-magic">
            <h3><a href="https://orientaltrading.com/">Mega Menu</a></h3>
              <p>
                Provided the user research for the main navigation, dubbed the mega menu, launched in 2008 with enhancements up to 2014. It's still in use today.
              </p>
            </li>
          <li className="icon solid fa-chess">
          <h3>UX Team Creation</h3>
            <p>
              In 2007, hired as the first of two UX developers for optimizing landing pages and email campaigns. By 2008, contributed as decision maker for the hiring of a 6-person team, including a referral for the UX Director from Hayneedle who led our team.
            </p>
          </li>
         {/* <li className="icon fa-heart">
            <h3></h3>
            <p>

            </p>
          </li>
          <li className="icon fa-flag">
            <h3>UX Team Creation</h3>
            <p>
              In 2007, hired as the first of two UX developers for optimizing landing pages and email campaigns. By 2008, contributed as decision maker for the hiring of a 6-person team, including a referral for the UX Director.
            </p>
          </li>*/}
        </ul>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>words to develop by</h2>
          <p>
            Always judge the design by the results that it causes in human behavior.
          </p>
        </header>
        <ul className="actions stacked">
          <li>
            <a href="/Projects" className="button fit primary">
              Projects
            </a>
          </li>
          <li>
            <a href="/About" className="button fit">
              About Me
            </a>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
