import React from "react";
import styled from 'styled-components';
import Layout from "../../components/layout";
import Content from "../../components/content";
import Text from "../../components/text";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faComment } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';

import Box from "../../components/Box";
import Hero from "../../components/Hero";
import { H1, H2 } from '../../components/Headings';
import { FullRow, FullColumn } from '../../components/FullLayout';
import { DeliveryPipelineIcon, ParallelizationIcon, ArchitectureIcon } from '../../components/Icons';

import Section from '../../components/Section';

import illya from "../../img/illya-busigin.jpg";
import benji from "../../img/benji-shine.jpg";
import jason from "../../img/jason-jaynes.jpg";

import logoHoneywell from '../../img/clients/honeywell-logo.svg';
import logoDell from '../../img/clients/dell-logo.svg';
import logoConde from '../../img/clients/conde-nast-logo.svg';
import logoEbsco from '../../img/clients/ebsco-logo.svg';
import logoSxsw from '../../img/clients/sxsw-logo.svg';
import logoStandard from '../../img/clients/standard-chartered-logo.svg';

import PlatformIcon from '../../img/custom-icons/platform-icon.svg';

const ServiceIcon = styled.div`
  color: ${({ theme }) => theme.colors.contrast};
  width: 100%;
  max-width: 130px;
`;

const IconColumn = styled(FullColumn)`
  display: flex;
  flex-flow: column nowrap;
  text-align: center;
  align-items: center;

  ${ServiceIcon} {
    order: 1;
  }
  ${H2} {
    order: 2;
  }

`;

const ServiceText = styled(Text)`
  /* max-width: 600px; */
`;

const DeliveryIconColumn = styled(IconColumn)`
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    padding-top: ${({ theme }) => theme.space.xxLarge};
    padding-bottom: ${({ theme }) => theme.space.xxLarge};
  }
`;

const DeliveryH2 = styled(H2)`
  margin: ${({ theme }) => theme.space.medium} 0 0 0;
`;

export default function Services() {
  return (
    <Layout>
      <Hero>
        <Box width={[1, 1, 1, 2/3]}>
          <H1>
            We provide services to teams experiencing the challenges of software at scale
          </H1>
          <Text fontSize="large">
            Through extensive research and decades of experience, we have designed patterns and strategies that bring sustainable engineering growth across organizations.
          </Text>
        </Box>
      </Hero>

      <FullRow>
        <DeliveryIconColumn as='header' largeWidth={1/3} backgroundColor='subtleBackground'>
          <DeliveryH2>
            Delivery Pipeline <br /> Optimization
          </DeliveryH2>
          <ServiceIcon>
            <DeliveryPipelineIcon />
          </ServiceIcon>
        </DeliveryIconColumn>
        <FullColumn largeWidth={2/3} backgroundColor='subtleBackground'>
          <ServiceText>
            The time it takes you to incorporate customer feedback and industry trends into production is critical. We help teams develop processes and provide them with custom-tailored tooling so they can deliver quality software consistently. 
          </ServiceText>
          <Link to='/'>
            How we help teams ship great applications
          </Link>
        </FullColumn>
      </FullRow>

      <FullRow>
        <FullColumn largeWidth={1/3} backgroundColor='primary' as='aside'>
          <Text>
            We don’t give abstract advice to our clients: we work with them to achieve their goals and make sure they can continue thriving after our engagement.
          </Text>
          <Link to='/'>
            Learn about Our Approach
          </Link>
        </FullColumn>
        <FullColumn largeWidth={2/3}>
          <H2>
            Development Parallelization
          </H2>
          <ServiceIcon>
            <ParallelizationIcon />
          </ServiceIcon>
          <ServiceText>
            Frontend teams blocked by backend features is a common problem that slows down organizations. Making sure every team is effective in doing meaningful work can play a crucial role in deliveries and talent retention. We specialize in making teams move smoothly through contract management, simulation, and automated visibility.
          </ServiceText>
          <Link to='/'>
            How we speed up teams through decoupling
          </Link>
        </FullColumn>
      </FullRow>

      <FullRow>
        <FullColumn largeWidth={2/3} backgroundColor='subtleBackground' columnOrder={2}>
          <H2>
            Architecture for new technologies 
          </H2>
          <ServiceIcon>
            <ArchitectureIcon />
          </ServiceIcon>
          <ServiceText>
            Cutting-edge technologies can bring competitive advantages but also introduce a higher risk on the project. It is essential not to compromise in quality or software durability when choosing new tools and libraries. We help you architect your software to minimize risk and empower your team for experimentation.
          </ServiceText>
          <Link to='/'>
            How we future-proof projects using new technologies
          </Link>
        </FullColumn>
        <FullColumn largeWidth={1/3} backgroundColor='contrast' as='aside' columnOrder={1}>
          <Text>
            We are a boutique engineering studio with decades of experience pushing the boundaries of the web in partnership with large organizations.
          </Text>
          <Link to='/'>
            Why choose Frontside
          </Link>
        </FullColumn>
        
        
      </FullRow>

      {/* <Content>
        <Text tag="p">
        We help organizations architect and implement long lasting platforms at scale. Our leadership will provide you with a robust toolkit and optimized workflow so your teams can deliver features with confidence.
        </Text>
 
        <div className="service-thumb service-thumb__consulting">
          <div className="service-thumb--content">
            <h2>
              Development Parallelization
            </h2>
            <p>
              Maximize your teams' velocity by enabling them to work in parallel. We specialize in keeping your teams unblocked from each other through contract management, simulation, and automated visibility. 
            </p>
          </div>
        </div>

        <div className="service-thumb service-thumb__coaching">
          <div className="service-thumb--content">
            <h2>
              Inter-team Collaboration 
            </h2>
            <p>
              We help your teams across cities—or continents—and departments to collaborate as they co-develop business value in your applications. Through custom-tailored tools and processes around your codebase, we allow you to keep real track of expectations and progress across Engineering, Product, UX, and Leadership. 
            </p>
          </div>
        </div>

        <div className="service-thumb service-thumb__architecture">
          <div className="service-thumb--content">
            <h2>
              Architecture for new technologies
            </h2>
            <p>
              Do not compromise in quality or software durability when choosing cutting-edge technologies. We help you architect your software to minimize risk and empower your team for experimentation.
            </p>

          </div>
        </div>

        <div className="service-thumb service-thumb__staffing">
          <div className="service-thumb--content">
            <h2>
              Elite Staffing
            </h2>
            <p>
              We help you identify which parts of your software are best suited to be built by specialized engineers in intricate fields. We facilitate collaboration with the best engineers from around the world for the tasks you need.
            </p>

          </div>
        </div>

        <div className="service-thumb service-thumb__experience">
          <div className="service-thumb--content">
            <h2>
              Development Experience
            </h2>
            <p>
              We help you make sure your engineers stay motivated and productive by perfecting their tools and processes. A great developer experience will help you retain talented engineers, onboard new hires and contractors, and get more results faster. 
            </p>
          </div>
        </div>
      </Content>

      <Content>
        <h2 className="frontside-separator">
          <span className="frontside-separator--text">
            The Frontside way
          </span>
        </h2>

        <p className="our-way--intro-parragraph">
          We make your projects predictable with tried‑and‑true processes.
        </p>

        <div className="our-way--row">
          <div className="our-way--pilar">
            <h3>
              Framework agnostic approach
            </h3>
            <p>
              Every framework has its best use cases and its limitations. With deep experience in frameworks such as Ember, Angular, React, and Vue, we can help you identify the right solution for your organization’s specific goals.
            </p>
            <h3>
              Automated Testing
            </h3>
            <p>
              Every project begins with a comprehensive test plan so we can automate the testing process. This greatly reduces the load on QA and eliminates feedback cycles between them and your development team. It’s common for our clients to see a 4x increase in the number of releases that they can do in a month.
            </p>
          </div>
          <aside>
            <blockquote className="our-way--quote">
              <p>
                We had engineers with no previous web development or frontend experience, and, at the end of our engagement, those engineers were fully capable of taking over from where Frontside left us and moving the product forward.
              </p>
              <footer  className="our-way--quote-footer">
                <img src={illya} alt="Ilya Busigin" />
                <div>
                  <strong>
                    Ilya Busigin
                  </strong>
                  <br />
                  CEO at iNGAGED.
                </div>
              </footer>
            </blockquote>
          </aside>
        </div>

        <div className="our-way--row our-way--row__alt">
          <div className="our-way--pilar">
            <h3>
              Automated deployment
            </h3>
            <p>
              Because everything is run through test suites and bugs are caught before they exist, you’ll be able to write, integrate, and deploy software continuously. That means no more resource-intensive release events. We’ll help you implement this system across your department so you can release safely and efficiently throughout all future projects.
            </p>
            <h3>
              Zero regressions—really
            </h3>
            <p>
              Sure, it sounds radical. But we’ve been able to do it again and again. Our process helps you deploy products that are bug‑free, guaranteed.
            </p>
          </div>
          <aside>
            <blockquote className="our-way--quote">
              <p>
                They introduced us to a new way of thinking about and working with our forms, which is a core part of our application. We’ve adopted that philosophy across the board. The quality of their work was far higher than what we’ve seen before. They intensely tested their work, and their tech support was fantastic.
              </p>
              <footer  className="our-way--quote-footer">
                <img src={benji} alt="Benjamin Shine" />
                <div>
                  <strong>
                    Benjamin Shine
                  </strong>
                  <br />
                  Staff Front-end Engineer, AltSchool
                </div>
              </footer>
            </blockquote>
          </aside>
        </div>

        <div className="cta-box">
          <header className="cta-box--header">
            <h2>
              <Link to="/contact">
                Let's talk
              </Link>
            </h2>
            <FontAwesomeIcon icon={faComment} />
          </header>
          <div className="cta-box--body">
            <p>
              Reach out today to learn how we can help your organization move faster, without compromising quality.
            </p>
            <Link className="cta-box--contact" to="/contact">
              Contact us <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </Content>

      <Content>
        <h2 className="frontside-separator">
          <span className="frontside-separator--text">
            Success stories
          </span>
        </h2>

        <div className="success-stories">
          <div className="success-stories--content">
            <p>
             We have collaborated with well established clients to help their teams move with confidence. 
            </p>
            <ul className="success-stories--logos">
              <li className="success-stories--logo"><img src={logoHoneywell} alt="Honeywell logo" /></li>
              <li className="success-stories--logo"><img src={logoConde} alt="Conde Nast logo" /></li>
              <li className="success-stories--logo"><img src={logoEbsco} alt="EBSCO logo" /></li>
              <li className="success-stories--logo"><img src={logoSxsw} alt="SXSW logo" /></li>
              <li className="success-stories--logo"><img src={logoStandard} alt="Standard Chartered Bank logo"/></li>
              <li className="success-stories--logo success-stories--logo__square"><img src={logoDell} alt="Dell logo" /></li>
            </ul>
          </div>
          <aside>
            <blockquote className="our-way--quote">
              <p>
              Everything was well documented, well tested and followed the well-known conventions for working with JavaScript. It was evident they were interested in giving us a software base that we could evolve on our own.
              </p>
              <footer  className="our-way--quote-footer">
                <img src={jason} alt="Jason Jaynes" />
                <div>
                  <strong>
                    Jason Jaynes
                  </strong>
                  <br />
                  CTO at Kasita.
                </div>
              </footer>
            </blockquote>
          </aside>
        </div>
      </Content> */}
    </Layout>
  );
}
