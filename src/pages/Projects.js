import React from 'react';

import Layout from '../components/Layout';

import app01 from '../assets/images/app01.png';
import id1 from '../assets/images/ideation01.jpg';
import id2 from '../assets/images/ideation02.jpg';
import id3 from '../assets/images/ideation03.jpg';
import pro1 from '../assets/images/proto01.png';
import pro2 from '../assets/images/proto02.png';
import pro3 from '../assets/images/proto03.png';
import ui1 from '../assets/images/ui01.png';
import ui2 from '../assets/images/ui02.png';
import ui3 from '../assets/images/ui03.png';
import fin1 from '../assets/images/final01.jpg';
import fin2 from '../assets/images/final02.jpg';
import rep from '../assets/images/report.jpg';
import rep2 from '../assets/images/report02.jpg';
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
						<h4>Spaces Reorganization</h4>
						<p>An internal CMS/CRM application known as Spaces was restructured, redesigned, and launched in June 2020.</p>
					</header>
					<h5>Overview</h5>
					<p>The Spaces application serves Gallup associates whose mission is to impact every inidividual passing through our internal strengths-based system with a much needed restructure and visual update. The legacy system was built using .NET web forms, 35 CSS files referenced individually plus inline CSS, jQuery/jQuery UI, 260 colors, hundreds of unused images, 12 web fonts, outdated plugins and controls, and a huge backlog of user complaints, bug fixes, and slated improvements. The average page load time was 28 seconds with several outstanding times at 120+ seconds. Since the applications are for internal use only, our team does not have access to the usability lab or user testing apps, and limited UX designer resources. This is the main reason I was brought in as a lead UX developer.</p>
					<p>As illustrated below, hierarchial elements do not flow well especially with pages that contained a primary, secondary and often tertiary navigation, all separated by buttons or content from each other causing a lot content to fall below browser height resulting in up and down scrolling. There was a lot of spacial mouse movements, often endless scrolling on large tabular data, and no vertical ryhthym, with baseline font set at 13 pixels.</p>
					<div className="box alt">
						<div className="row gtr-50 gtr-uniform">
							<div className="col-12"><span className="image fit"><img src={banner} alt="screenshot of a legacy CMS application" /></span></div>
						</div>
					</div>
					<hr />
					<h5>Challenge</h5>
					<p>The Software Architect challenged our team with a common situation - to rethink, reorganize, and rebuild the Spaces application providing a more intuitive, modern experience with an overall site load goal of 5 seconds or less for our internal audience consisting of: software developers, editors, copywriters, marketers, technical project administrators and managers. The underlying back-end processes were to remain as close to the original as possible so as not to disrupt or cause a lot of relearning for our user base. Mobile device was limited to tablet landscape. As of March 2020, internal browser support consisted of the latest Chrome, Firefox, and Chromium Edge and is strictly enforced within the company.</p>
					<hr />
					<h5>Approach</h5>
					<p>Over the course of the engagement, I worked in 2-week sprints beginning with a discovery phase documenting analysis, user research, page flows, scope (<em>must have, nice to have, follow up</em>) and creating a checklist of problem areas resulting in recommendations and goals. The team lead advocated for making the transition to .NET MVC from Web Forms, which ultimately ended up being Blazor WebAssembly. Worked progressively with the Scrum Master to begin task strategy and team member assignments.</p>
					<div className="box alt">
						<div className="row gtr-50 gtr-uniform">
							<div className="col-12"><span className="image fit"><img src={app01} alt="page flow example" /></span></div>
						</div>
					</div>
					<p>Moved on to ideation after approvals, sketched out rough mockups often brainstorming with the Software Architect or team leading into low-fidelity prototypes with an eye on technical feasibility and accessibility. Design principles followed clarity over abundance of choices, maintaining a touch target size of 42-48 pixels for future tablet use, and aiming to keep the complexity of choices down to ease the cognitive load users had constantly complained about.</p>
					<div className="box alt">
						<div className="row gtr-50 gtr-uniform">
							<div className="col-4"><span className="image fit"><img src={id1} alt="sketchbooks with ideas" /></span></div>
							<div className="col-4"><span className="image fit"><img src={id2} alt="first version of home page low-fidelity prototype" /></span></div>
							<div className="col-4"><span className="image fit"><img src={id3} alt="second version of home page low-fidelity prototype" /></span></div>
						</div>
					</div>
					<p>At the high-fidelity prototype stage, user testing began on a regular basis in code reviews or quick demos with a chosen group of target audience members. The goal was less clicks, less scrolling, and with each iteration, the UI became more refined while building an inventory of reusable components. A UX designer was brought in at this point to outline branding expectations. I spent a significant amount of time on the aesthetic-usability effect moving from a grayscale color palette while staying within brand color and standards.</p>
					<div className="box alt">
						<div className="row gtr-50 gtr-uniform">
							<div className="col-4"><span className="image fit"><img src={pro1} alt="high-fidelity of home page" /></span></div>
							<div className="col-4"><span className="image fit"><img src={pro2} alt="high-fidelity of add category page" /></span></div>
							<div className="col-4"><span className="image fit"><img src={pro3} alt="high-fidelity of ui components" /></span></div>
						</div>
					</div>
					<p>Once I reached the UI Design step, parallel work was completed for the front-end workflow setup in Visual Studio and Github. Proof-of-concepts began in <a href="https://codepen.io/plugo/">CodePen</a> while waiting on a private Sandbox environment. As I completed coding and testing tickets, the final output was then integrated into the .NET Blazor framework. Collaboration began with the .NET developers to build out an extensive library of components and to make sure the visual aspect remained pixel perfect.</p>
					<div className="box alt">
						<div className="row gtr-50 gtr-uniform">
							<div className="col-4"><span className="image fit"><img src={ui1} alt="bootstrap 4 setup" /></span></div>
							<div className="col-4"><span className="image fit"><img src={ui2} alt="dropdown test code" /></span></div>
							<div className="col-4"><span className="image fit"><img src={ui3} alt="visual studio example of development code" /></span></div>
						</div>
					</div>
					<h5>Final Product</h5>
					<p>Through the evolution of retooling our front-end workflow using Bootstrap 4, Sass, SVG Sprites, opting to use C# over JavaScript, Node/NPM modules and scripting, the team successfully transitioned over to .NET Blazor with an API named Shuttle. The final product uses: 2 web fonts, 14 colors, 2 SVG sprites, 6 images, 1 CSS file compiled from Sass, semantic HTML, and meets the guidelines for WCAG 2.1 AA. Site performance optimization measured 1.27 seconds.</p>
					<div className="box alt">
							<div className="col-12"><span className="image fit"><img src={fin1} alt="production page for add events" /></span></div>
							<div className="col-12"><span className="image fit"><img src={fin2} alt="production page for home page" /></span></div>
					</div>
					<hr />
				</section>
				<section>
					<header>
						<h4>Gallup Reports</h4>
						<p>One page and in-depth research reports</p>
					</header>
					<h5>Report Direct Download</h5>
					<p>During my time on the DotCom team, I was responsible for redesigning the report pages configured through a series of tabs containing SEO tags, related items, a content editor, tile generator, and asset management in the CMS. Editors and copywriters published their reports and articles here and I was their developer support.</p>
					<p>Since these reports were pre-existing and simply outdated, the redesign started with sketch work and moved directly to prototyping in HTML/CSS. Several original pages were printed out and taped to the wall for reference as pages were refined. This particular report is immediately downloadable simply by selecting one of the buttons.</p>
					<p>Live example: <a href="https://www.gallup.com/education/267449/creativity-learning-transformative-technology-gallup-report-2019.aspx">Creativity in Learning</a></p>
					<div className="box alt">
						<div className="row gtr-50 gtr-uniform">
							<div className="col-12"><span className="image fit"><img src={rep} alt="creativity in learning report" /></span></div>
						</div>
					</div>
					<hr />
					<h5>Two-part Report Download Request</h5>
					<p>This type of report takes considerable more research and is usually a larger document. The trade-off is capturing user information in a form to gain acess to download the report, and a potential sales lead. A form webpart template was created so all the editor is required to do is attach this module as a related item.</p>
					<p>Live example: <a href="https://www.gallup.com/education/269648/state-america-schools-report.aspx">State of America's Schools</a></p>
					<div className="box alt">
						<div className="row gtr-50 gtr-uniform">
							<div className="col-12"><span className="image fit"><img src={rep2} alt="state of america's schools report" /></span></div>
						</div>
					</div>
					<hr />
				</section>
			</div>
		</section>
	</article>

</Layout>;

export default IndexPage;
