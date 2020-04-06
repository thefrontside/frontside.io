import React from "react";
import styled, { css } from "styled-components";
import { Link } from "gatsby";

import Layout from "../../components/layout";
import { Text, Strong, Emphasis } from "../../components/Text";
import Box from "../../components/Box";
import Hero from "../../components/Hero";
import Section from "../../components/Section";
import { H1, H2, H3, H4 } from "../../components/Headings";
import { FullRow, FullColumn } from "../../components/FullLayout";
import {
  DeliveryPipelineIcon,
  ParallelizationIcon,
  ArchitectureIcon
} from "../../components/Icons";
import ArrowLink from "../../components/ArrowLink";

import jorge from "../../img/team/jorge.png";
import taras from "../../img/team/taras.png";

const ServiceIcon = styled.div`
  color: ${({ theme }) => theme.colors.contrast};
  width: 100%;
  max-width: 130px;
`;

interface TitleOptions {
  correctIconLeft?: true;
}

const SideIconTitle = css`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space.large};
  text-align: left;

  ${ServiceIcon} {
    order: 1;
    max-width: 100px;
    margin-left: 0;
  }
  ${H2} {
    order: 2;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: ${({ theme }) => theme.space.medium};
  }
`;

const VerticalTitle = css<TitleOptions>`
  display: flex;
  flex-flow: column nowrap;
  text-align: center;
  align-items: center;

  ${ServiceIcon} {
    order: 1;
    margin-left: ${({ correctIconLeft }) => (correctIconLeft ? "-1rem;" : 0)};
  }
  ${H2} {
    margin-top: ${({ theme }) => theme.space.medium};
    order: 2;
  }
`;

const DeliveryTitle = styled.header`
  ${VerticalTitle}
  ${H2} {
    margin-bottom: 0;
  }
`;

const ServiceTitle = styled.header<TitleOptions>`
  ${VerticalTitle}
  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    ${SideIconTitle}
  }
`;

const ServiceText = styled(Text)`
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    padding-right: ${({ theme }) => theme.space.xLarge};
  }
`;

const VerticalCenteredColumn = styled(FullColumn)`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
`;

const AsideText = styled.p`
  color: ${({ theme }) => theme.colors.overDark};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: ${({ theme }) => theme.lineHeights.body};
  padding-right: ${({ theme }) => theme.space.large};
  font-size: ${({ theme }) => theme.fontSizes.large};
  margin-bottom: ${({ theme }) => theme.space.medium};
`;

const AsideLink = styled(Link)`
  color: ${({ theme }) => theme.colors.overDark};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.xSmall};
  padding-bottom: ${({ theme }) => theme.space.xSmall};
  border-bottom: 1px dotted ${({ theme }) => theme.colors.overDark};
`;

const ContactPerson = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin-top: ${({ theme }) => theme.space.large};

  > img {
    max-width: 120px;
    flex-grow: none;
    flex-shrink: none;
    margin-right: ${({ theme }) => theme.space.medium};
  }
  ${Strong} {
    display: block;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
  ${Emphasis} {
    display: block;
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: ${({ theme }) => theme.fontWeights.light};
    font-size: ${({ theme }) => theme.fontSizes.xSmall};
    margin-bottom: ${({ theme }) => theme.space.medium};
    font-style: normal;
  }
  a {
    display: block;
  }
`;

export default function Services() {
  return (
    <Layout>
      <Hero>
        <Box width={[1, 1, 1, 2 / 3]}>
          <H1>
            We provide services to teams experiencing the challenges of software
            at scale
          </H1>
          <Text fontSize="large">
            Through extensive research and decades of experience, we have
            designed patterns and strategies that bring sustainable engineering
            growth across organizations.
          </Text>
        </Box>
      </Hero>

      <FullRow>
        <VerticalCenteredColumn
          largeWidth={1 / 3}
          backgroundColor="subtleBackground"
        >
          <DeliveryTitle>
            <H2>
              Delivery Pipeline <br /> Optimization
            </H2>
            <ServiceIcon>
              <DeliveryPipelineIcon />
            </ServiceIcon>
          </DeliveryTitle>
        </VerticalCenteredColumn>
        <VerticalCenteredColumn
          largeWidth={2 / 3}
          backgroundColor="subtleBackground"
        >
          <ServiceText>
            The time it takes you to incorporate customer feedback and industry
            trends into production is critical. We help teams develop processes
            and provide them with custom-tailored tooling so they can deliver
            quality software consistently.
          </ServiceText>
          <ArrowLink to="/services/delivery-pipeline-optimization">
            How we help teams ship great applications
          </ArrowLink>
        </VerticalCenteredColumn>
      </FullRow>

      <FullRow>
        <FullColumn largeWidth={1 / 3} backgroundColor="primary" as="aside">
          <AsideText>
            We don’t give abstract advice to our clients: we work with them to
            achieve their goals and make sure they can continue thriving after
            our engagement.
          </AsideText>
          <AsideLink to="/">Learn about Our Approach</AsideLink>
        </FullColumn>
        <FullColumn largeWidth={2 / 3}>
          <ServiceTitle correctIconLeft={true}>
            <H2>
              Development <br /> Parallelization
            </H2>
            <ServiceIcon>
              <ParallelizationIcon />
            </ServiceIcon>
          </ServiceTitle>

          <ServiceText>
            Frontend teams blocked by backend features is a common problem that
            slows down organizations. Making sure every team is effective in
            doing meaningful work can play a crucial role in deliveries and
            talent retention. We specialize in making teams move smoothly
            through contract management, simulation, and automated visibility.
          </ServiceText>
          <ArrowLink to="/">How we speed up teams through decoupling</ArrowLink>
        </FullColumn>
      </FullRow>

      <FullRow>
        <FullColumn
          largeWidth={2 / 3}
          backgroundColor="subtleBackground"
          columnOrder={2}
        >
          <ServiceTitle>
            <H2>
              Architecture for <br /> new technologies
            </H2>
            <ServiceIcon>
              <ArchitectureIcon />
            </ServiceIcon>
          </ServiceTitle>
          <ServiceText>
            Cutting-edge technologies can bring competitive advantages but also
            introduce a higher risk on the project. It is essential not to
            compromise in quality or software durability when choosing new tools
            and libraries. We help you architect your software to minimize risk
            and empower your team for experimentation.
          </ServiceText>
          <ArrowLink to="/">
            How we future-proof projects using new technologies
          </ArrowLink>
        </FullColumn>
        <FullColumn
          largeWidth={1 / 3}
          backgroundColor="contrast"
          as="aside"
          columnOrder={1}
        >
          <AsideText>
            We are a boutique engineering studio with decades of experience
            pushing the boundaries of the web in partnership with large
            organizations.
          </AsideText>
          <AsideLink to="/">Why choose Frontside</AsideLink>
        </FullColumn>
      </FullRow>

      <Section marginTop={["medium", "large", "xLarge"]}>
        <Box width={[1, 1, 2 / 3]}>
          <H3>Sounds interesting? Have questions?</H3>
          <Text fontSize="large" fontFamily="heading">
            Let’s get in touch and find opportunities <br /> for working
            together.
          </Text>
          <ArrowLink to="/">Let's talk</ArrowLink>
        </Box>
        <Box width={[1, 1 / 3, 1 / 3]}>
          <H4>We're here for you</H4>
          <ContactPerson>
            <img src={taras} alt="Taras' headshot" />
            <address>
              <Strong>Taras Mankovski</Strong>
              <Emphasis>CEO</Emphasis>
              <a href="mailto:taras@frontside.com">taras@frontside.com</a>
              <a href="tel:+19632509169">+1 (963) 250-9169</a>
            </address>
          </ContactPerson>
          <ContactPerson>
            <img src={jorge} alt="Jorge's headshot" />
            <address>
              <Strong>Jorge Lainfiesta</Strong>
              <Emphasis>Developer Advocate</Emphasis>
              <a href="mailto:jorge@frontside.com">jorge@frontside.com</a>
              <a href="tel:+14242292083">+1 (424) 229-2083</a>
            </address>
          </ContactPerson>
        </Box>
      </Section>
    </Layout>
  );
}
