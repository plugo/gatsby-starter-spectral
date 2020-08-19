import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.png';
import pic4 from '../assets/images/pic04.png';
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
          <img src={pic1} alt="lightbulb represents a discovery phase" aria-hidden="true" />
        </div>
        <div className="content">
          <h2>
            Product Discovery
          </h2>
          <p>
            Working in the context of a CMS and CRM using an agile approach, we use short discovery phases and bring the entire team in early with initial user and business requirements. From here, the responsibility falls on me to be an advocate for the user to understand the problem and define it before ideation begins. In other words, "Show me the data!" helps to back up the design path.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="wireframe represents ideation phase" />
        </div>
        <div className="content">
          <h2>
            Ideation
          </h2>
          <p>
            From the product discovery step comes clear goals. Information architecture begins as quick sketches leading to wireframes or low-fidelity prototypes. Ideation is a fine line between user and business needs. This is a balancing act, leaning more towards customer loyalty and satisfaction while keeping an eye on growing the business.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="high-fidelity represents prototype phase" />
        </div>
        <div className="content">
          <h2>
            Prototyping
          </h2>
          <p>
            From ideation comes the high-fidelity vision prototype. I use Adobe XD for wireframes, quick mockups, and prototyping. During prototype development, testing becomes the norm in peer reviews to show progress and gather feedback from members of our audience when available. Once high-fidelity prototype is complete, the team presents it to the stakeholders and a handful of users as a pre-development check.
          </p>
        </div>
      </section><section className="spotlight">
        <div className="image">
          <img src={pic4} alt="code sample represents ui design phase" />
        </div>
        <div className="content">
          <h2>
            Interaction Testing
          </h2>
          <p>
            The interaction testing step isn't really sequential, and in reality, none of these steps follow a specific order but they are all part of the process whether it's repeated in an interative manner or developed in parallel. The interactive part of it is simply testing the high-fidelity prototype to improve on ideas and bring out insights for refinements if needed.
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
             employed by Oriental Trading with on-request references.
          </p>
        </header>
        <ul className="features">
          <li className="icon solid fa-football-ball">
            <h3><a href="https://www.orientaltrading.com/vertical-four-image-graduation-photo-door-custom-banner-a2-13667953.fltr?categoryId=551269+1256+18">Personalized Products</a></h3>
            <p>In 2012, managed a distributed team of 6 to design and develop the first phase of a web-to-print personalized product viewer for the Team Spirt category. By 2015, after significant advancements in discovery, development, and scalability across thousands of products, conversion continued to exceed customer satisfaction and business expectations.
            </p>
          </li>
          <li className="icon solid fa-award">
            <h3>Top CX Score</h3>
            <p>
              From 2012 to 2013, the UX team was the driving force behind the achievement for the company's highest customer experience score of 80, ranking number 31 out of the top 50 in ForeSee's Experience Index, U.S. Retail Edition.
            </p>
          </li>
          <li className="icon solid fa-magic">
            <h3><a href="https://orientaltrading.com/">Mega Menu</a></h3>
              <p>
                The main navigation was launched in 2008, dubbed the mega menu modeled after Amazon's flyout navigation at that time. I performed the competitive analysis and user research with iterative enhancements through 2014. I am surprised to see it's still in use today.
              </p>
            </li>
          <li className="icon solid fa-chess">
          <h3>UX Team Creation</h3>
            <p>
              In 2007, was hired as the first of two UX Designers for improving landing pages, email templates, and designing marketing ads. By 2008, advocated for and interviewed candidates to build a dedicated team, including a UX Director referral who was eventually hired.
            </p>
          </li>
        </ul>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>words to design by</h2>
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
