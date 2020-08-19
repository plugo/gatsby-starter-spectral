import React from 'react';

import Layout from '../components/Layout';

import app1 from '../assets/images/app01.png';
import id1 from '../assets/images/ideation01.jpg';
import id2 from '../assets/images/ideation02.png'
import id6 from '../assets/images/ideation06.png';
import id7 from '../assets/images/ideation07.png';
import pro1 from '../assets/images/proto04.png';
import pro2 from '../assets/images/proto05.png';
import pro3 from '../assets/images/proto06.png';
import fin1 from '../assets/images/final01.png';
import fin2 from '../assets/images/final02.png';
import fin3 from '../assets/images/final03.png';
import gar1 from '../assets/images/gar01.jpg';
import banner from '../assets/images/legacy.png';
const IndexPage = () => <Layout>
	<article id="main">
		<header>
			<h2>Gallup Projects</h2>
			<p>Never forget the ultimate goal: Solving your user's problems</p>
		</header>
		<section className="wrapper style5">
			<div className="inner">
				<section>
					<header>
						<h4>Spaces Redesign</h4>
						<p>A proprietary .NET Content Management System known as Gallup Spaces</p>
					</header>
					<h5>Overview</h5>
					<p>The Spaces application serves Gallup associates whose mission is to impact every individual passing through our internal strengths-based system from the sales funnel, email marketing campaigns, new site wizard, and configurations for password-protected client sites and public-facing pages. There was a huge backlog of user complaints, bug fixes and slated improvements. Since the application is for employee use only, the Spaces team does not have access to the usability lab or user testing apps with limited UX team resources. I took on the role as a UX team of one. The screenshot below depicts the legacy application built in 2008.</p>
					<div className="box alt">
						<div className="row gtr-50 gtr-uniform">
							<div className="col-12"><span className="image fit"><img src={banner} alt="screenshot of a legacy .NET CMS application" /></span></div>
						</div>
					</div>
					<hr />
					<h5>Challenge</h5>
					<p>The Software Architect challenged our team with a common situation - to rethink, reorganize, and redesign Spaces to replace the business-critical legacy .NET web forms CMS. The dev team ultimately got the approval to upgrade to the latest cutting-edge .NET Blazor WebAssembly framework.</p>
					<div className="row">
						<div className="col-6 col-12-medium">
							<h5>Our internal audience consists of:</h5>
							<ul>
								<li>Application developers</li>
								<li>Editors</li>
								<li>Copywriters</li>
								<li>Email marketers</li>
								<li>Technical project managers</li>
								<li>Technical project administrators</li>
							</ul>
						</div>
					</div>
					<hr />
					<h5>Approach</h5>
					<p>Over the course of the engagement, I worked in 2-week sprints beginning with a discovery and strategy phase gathering requirements, observing user behavior, building user stories, and creating user/task flows, and page flows. Performed a heuristic evaluation, and several audits including accessilibity, site performance, images, colors, and fonts. My user testing method was an email questionnaire followed by in-person observations of these audience participants completing a number of tasks specific to their role. Documented task analyses, page flows, recommendations based on user insights, and scope (<em>must have, nice to have, follow-up</em>). Researched and documented vertical form standards based on user insights. Created a matrix-style excel spreadsheet for reference and collaborated with the Scrum Master to flesh out a strategic roadmap in Confluence. I was tasked with redesigning 28 Spaces, roughly 4-24 pages per space and suggested we focus on a Prospects and a Coaching space as the top priority due to a marketing automation tool that was being developed in parallel.</p>
					<div className="box alt">
						<div className="row gtr-50 gtr-uniform">
							<div className="col-12"><span className="image fit"><img src={app1} alt="minimal pages outline" /></span></div>
						</div>
					</div>
					<p>Moved on to ideation after approvals to business requirements and user goals were met. Sketched out numerous wireframes often brainstorming with the Architect or team leading into low-fidelity prototypes with an eye on technical feasibility and accessibility. Design principles followed clarity over abundance of choices, maintaining a touch target size of 42 pixels for future tablet use, and aiming to keep the complexity of choices down to ease the cognitive load users had constantly complained about. There were many times I revisited the discovery phase for clarity and to understand some questions that came up.</p>
					<div className="box alt">
						<div className="row gtr-50 gtr-uniform">
							<div className="col-4"><span className="image fit"><img src={id1} alt="pen and paper sketch notebook" /></span></div>
							<div className="col-4"><span className="image fit"><img src={id6} alt="homepage alternate low fidelity" /></span></div>
							<div className="col-4"><span className="image fit"><img src={id7} alt="prospects timeline concept low fidelity" /></span></div>
						</div>
					</div>
					<div className="box alt">
						<div className="row gtr-50 gtr-uniform">
							<div className="col-12"><span className="image fit"><img src={id2} alt="first version of home page low-fidelity prototype" /></span></div>
						</div>
					</div>
					<p>At this point, I worked with a brand designer to approve standards making the swtich from a 206-color palette to a 12-color palette while adhering to WCAG 2.0 guidelines. After I created a high-fidelity Adobe XD interactive prototype, user testing began on a regular basis with small groups of target audience members. The prototype was also used to provide guidance to the dev team, QA, and to gather insights on peer and stakeholder reviews. With each iteration, the interface became more refined. The end result was less clicks, less scrolling, leaning towards sensible, consistent, and meaningful design principles. </p>
					<div className="box alt">
						<div className="row gtr-50 gtr-uniform">
							<div className="col-4"><span className="image fit"><img src={pro1} alt="high-fidelity of page filters" /></span></div>
							<div className="col-4"><span className="image fit"><img src={pro2} alt="high-fidelity of user interface elements" /></span></div>
							<div className="col-4"><span className="image fit"><img src={pro3} alt="high-fidelity of homepage" /></span></div>
						</div>
					</div>
					<p>Immediately following the approval of the high-fidelity prototypes, I was tasked to complete the front-end workflow setup in Visual Studio and Github, again, due to the lack of front-end developer resource. Proof-of-concepts began in <a href="https://codepen.io/plugo/">CodePen</a> while waiting on a dedicated Sandbox environment. As I completed HTML/CSS tickets, collaboration began with the .NET developers to build out an extensive library of reusable and scalable modules making sure all of the site elements and components matched the final prototypes.</p>
					<div className="box alt">
						<div className="row gtr-50 gtr-uniform">
							<div className="col-6"><span className="image fit"><img src={fin1} alt="coach list event collection on production" /></span></div>
							<div className="col-6"><span className="image fit"><img src={fin2} alt="spaces homepage on production" /></span></div>
						</div>
					</div>
					<h5>Final Product</h5>
					<p>Once the initial redesign of two Spaces was implemented succesfully, the remaining 26 were converted to the new design upgrading 1-3 sites per sprint depending on complexity. Some were relatively easy, simply moving straight to code, or at least, creating quick prototypes for testing prior to coding. Others were more involved where new components required wireframing to prototyping and testing. There was one Space where I needed to jump back into research and go through the entire process again, but it progressed at a much faster rate. Updated the Gallup Spaces Style Guide and Web Accessibility Standards Confluence docs.</p>
					<div className="row">
						<div className="col-6 col-12-medium">
							<h5>Updated technologies used:</h5>
							<ul>
								<li>.NET Blazor WebAssembly</li>
								<li>Core MVC API</li>
								<li>Google Analytics</li>
								<li>1 CSS file compiled from Sass</li>
								<li>12 brand colors with 2 validation colors</li>
								<li>2 SVG sprites and 6 png images</li>
								<li>2 web fonts</li>
								<li>Lighthouse score is 85 with an average load time of 1.27 seconds</li>
							</ul>
						</div>
					</div>
					<div className="box alt">
						<div className="row gtr-50 gtr-uniform">
							<div className="col-12"><span className="image fit"><img src={fin3} alt="coach list add events on production" /></span></div>
						</div>
					</div>
					<hr />
				</section>
				<section>
					<header>
						<h4>Gallup Analytics and Reporting</h4>
						<p>Data Visualization</p>
					</header>
					<p>Collaborated with Ember front-end developers to bring design leadership and creative thinking to data-driven analytics and content for desktop and mobile applications.</p>
					<div className="box alt">
						<div className="row gtr-50 gtr-uniform">
							<div className="col-12"><span className="image fit"><img src={gar1} alt="desktop and mobile data visualization examples" /></span></div>
						</div>
					</div>
					<hr />
				</section>
				<section>
					<header>
						<h4>Gallup Reports</h4>
						<p>Research reports</p>
					</header>
					<h5>Report Direct Download</h5>
					<p>During my time on the DotCom team, I was responsible for redesigning the report pages configured through a series of tabs containing SEO tags, related items, a content editor, tile generator, and asset management in the CMS. Editors and copywriters published their reports and articles here and I was their designer/developer support.</p>
					<p>Since these reports were pre-existing and simply outdated, the redesign started with some quick sketch work and moved directly to high-fidelity prototypes. Several original pages were printed out and taped to the wall for reference as designs were refined. This particular report is immediately downloadable simply by selecting one of the buttons.</p>
					<p>Live example: <a href="https://www.gallup.com/education/267449/creativity-learning-transformative-technology-gallup-report-2019.aspx">Creativity in Learning</a></p>
					<hr />
					<h5>Two-part Report Download Request</h5>
					<p>This type of report takes considerable more research and is usually a larger document. The trade-off is capturing user information in a form to gain acess to download the report, and a potential sales lead. A form webpart template was created so all the editor is required to do is attach this module as a related item.</p>
					<p>Live example: <a href="https://www.gallup.com/education/269648/state-america-schools-report.aspx">State of America's Schools</a></p>
					<hr />
				</section>


			</div>
		</section>
	</article>

</Layout>;

export default IndexPage;
