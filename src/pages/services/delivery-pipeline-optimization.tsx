import React from "react";
import styled, { css } from "styled-components";
import { Link } from "gatsby";

import Layout from "../../components/layout";
import { Text, Strong, Emphasis } from "../../components/Text";
import Box from "../../components/Box";
import Hero from "../../components/Hero";
import Section from "../../components/Section";
import { H1, H2, H3, H4 } from "../../components/Headings";
import { List, ListItem } from "../../components/List";
import { FullRow, FullColumn } from "../../components/FullLayout";
import {
  DeliveryPipelineIcon,
  ParallelizationIcon,
  ArchitectureIcon
} from "../../components/Icons";
import ArrowLink from "../../components/ArrowLink";

const BackLink = styled(Link)`
  display: block;
  color: ${({ theme }) => theme.colors.contrast};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.small};
  line-height: ${({ theme }) => theme.lineHeights.heading};
  margin-bottom: ${({ theme }) => theme.space.medium};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ServiceIconContainer = styled(Box)`
  text-align: center;
  svg {
    max-width: 200px;
  }
`;

const WhenSection = styled(Section)`
  flex-flow: column nowrap;
`;

const WhenList = styled(List)`
  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    display: flex;
    flex-flow: row wrap;

    ${ListItem} {
      width: 50%;
      box-sizing: border-box;
      padding-right: ${({ theme }) => theme.space.xxxLarge};
    }
  }
`;

const OfferSection = styled(Section)`
  flex-flow: row wrap;
  margin-top: ${({ theme }) => theme.space.large};
  margin-bottom: ${({ theme }) => theme.space.large};
`;

const OfferTitle = styled(H2)`
  display: block;
  width: 100%;
`;

const OfferBox = styled(Box)`
  margin-top: ${({ theme }) => theme.space.large};
  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 50%;
    padding-right: ${({ theme }) => theme.space.xLarge};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    padding-right: ${({ theme }) => theme.space.xxxLarge};
  }
`;

const OtherService = styled(Link)`
  color: ${({ theme }) => theme.colors.overDark};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.large};
  display: flex;
  color: ${({ theme }) => theme.colors.secondary};
  margin-top: ${({ theme }) => theme.space.large};

  ${Strong} {
    font-weight: ${({ theme }) => theme.fontWeights.light};
    color: ${({ theme }) => theme.colors.overDark};
  }

  svg {
    width: 60px;
    margin-right: ${({ theme }) => theme.space.large};
    flex-shrink: 0;
  }
`;

export default function Services() {
  return (
    <Layout>
      <Section paddingY={["large", "large", "xLarge"]}>
        <Box
          as="header"
          width={[1, 1, 2 / 3]}
          paddingRight={[0, 0, "medium", "large"]}
        >
          <BackLink to="/services">Services</BackLink>
          <H1>Delivery Pipeline Optimization</H1>
          <Text fontSize="large">
            The time it takes you to incorporate customer feedback and industry
            trends into production is critical. We help teams develop processes
            and provide them with custom-tailored tooling so they can deliver
            quality software consistently.
          </Text>
        </Box>
        <ServiceIconContainer
          as="aside"
          width={[1, 1, 1 / 3]}
          padding={["medium", "medium", "medium", "large"]}
          color="contrast"
        >
          <DeliveryPipelineIcon />
        </ServiceIconContainer>
      </Section>
      <Box backgroundColor="subtleBackground" paddingY="large">
        <WhenSection>
          <H2>When we can help:</H2>
          <WhenList>
            <ListItem>
              Your team is taking too long to ship changes—large or small—to the
              users.
            </ListItem>
            <ListItem>
              Developers spend more time in processes than developing features.
            </ListItem>
            <ListItem>
              Low confidence and high anxiety when making public releases.
            </ListItem>
            <ListItem>
              Setting up a demo of your application takes effort and time.
            </ListItem>
            <ListItem>
              The code quality is not consistently high across your codebases.
            </ListItem>
            <ListItem>
              Broken master builds have become routinary for your team.
            </ListItem>
          </WhenList>
        </WhenSection>
      </Box>
      <OfferSection>
        <OfferTitle color="contrast">What we offer</OfferTitle>
        <OfferBox>
          <H3>Resilient Continuous Delivery</H3>
          <Text>
            We work with your team to resolve the bottlenecks and weak points of
            your delivery process. The objective is to automate and safety-guard
            your process such that releasing to Production becomes a mundane
            task.
          </Text>
        </OfferBox>
        <OfferBox>
          <H3>Increased release confidence</H3>
          <Text>
            We enable teams to assess their progress continually through
            automatic testing and demo generation. By the time you make a
            release to Production, the application would have been experienced
            by many people and automatically checked, numerous times, in real
            environments. No more surprises when making a release.
          </Text>
        </OfferBox>
        <OfferBox>
          <H3>Automated Visibility</H3>
          <Text>
            We enable all stakeholders—technical or not—to take part in the
            development process from the early stages. Via automatic demo
            applications, leadership can make course-corrections while it's
            inexpensive, and designers can adjust experiences as they're being
            developed.
          </Text>
        </OfferBox>
        <OfferBox>
          <H3>Great Developer Experience</H3>
          <Text>
            Rusy tools and baroque processes make developers less productive and
            motivated. We put a strong emphasis on helping your teams feel
            comfortable and confident as they work on your application. We
            develop ergonomics that are easy to follow based on your team's
            existing tools and technologies.
          </Text>
        </OfferBox>
      </OfferSection>
      <FullRow>
        <FullColumn backgroundColor="subtleBackground" largeWidth={2 / 3}>
          <H3 color="contrast">Sounds interesting? Have questions?</H3>
          <Text fontSize="large" fontFamily="heading">
            Let’s get in touch and discuss how we can help you implement the
            best strategies to optimize your delivery pipeline.
          </Text>
          <ArrowLink to="/contact">Let's talk</ArrowLink>
        </FullColumn>
        <FullColumn largeWidth={1 / 3} backgroundColor="primary" as="aside">
          <H4 color='overDark'>Other services</H4>
          <OtherService to="/">
            <ParallelizationIcon />
            <Strong>
              Development Parallelization
            </Strong>
          </OtherService>
          <OtherService to="/">
            <ArchitectureIcon />
            <Strong> 
              Architecture for new technologies
            </Strong>
          </OtherService>
        </FullColumn>
      </FullRow>
    </Layout>
  );
}
