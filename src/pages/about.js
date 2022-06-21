import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import { Section, Container } from "../components/layoutComponents"
import { ButtonPrimary, ButtonInline } from "../components/buttons"
import SEO from "../components/seo"
import BannerAbout from "../components/banners/bannerAbout"
import Bio from "../components/bio"
import Statements from "../components/statements"
import CallToAction from "../components/callToActions/callToAction"

import BannerImg from "../images/digital-revolution.jpg"
import AboutImg from "../images/rob-thiessen-headshot.jpg"
import CtaImg from "../images/ph.png"

export default function About() {
  return (
    <Layout>
      <SEO
        title="About Us"
        description="We accelerate business productivity, and provide manufacturing freedom through the adoption of best in class 3D printing technologies."
      />
      <BannerAbout
        breadCrumbLink1="/"
        breadCrumbLink2="/about"
        breadCrumb1="Home"
        breadCrumb2="About"
        textPrimary="About 3’D Revolution Technologies"
        textSecondary="We produce cost effective & functional commercial quality parts for our clients by using sustainable manufacturing methods that create unlimited possibilities."
        to="/contact"
        buttonText="get instant quote"
        img={BannerImg}
      />
      <Bio
        textPrimary="3’D revolution Technologies"
        textSecondary="3’D Revolution Technologies provides best in class 3D Printing, 3D design, production consulting, and technology sales. We recognize that the Third Industrial Revolution, which began with the digital age, is accelerating and we want to assist others in their efforts to engage and embrace the technologies currently redefining the industrial landscape.We believe these technologies offer abundant opportunity for sustainable, distributed, and democratic growth."
        li1="Increase your design freedom"
        li2="Increase the value of your products"
        li3="Reduce production turnaround time"
        li4="Enable mass customization"
        li5="make it real"
        to="/contact"
        buttonText="see how we can help today"
        img={AboutImg}
        imgAlt="about 3'D Revolution Technologies"
      />

      <Section>
        <Container className="spacing">
          <h2 className="title">post industrial manufacturing</h2>
          <div>
            <StaticImage
              src="../images/digital-revolution.jpg"
              alt="digital revolution"
            />
            <p className="italics body body--small">
              <ButtonInline to="/services/3d-printing">
                3D printing
              </ButtonInline>{" "}
              is turning manufacturing on its head “as it sails”!
            </p>
          </div>
          <div className="spacing">
            <p>
              The Third Industrial Revolution, as described by Jeremy Rifkin in
              his book of the same title, is well represented in the 26 foot
              sculpture by Hung-Chih Peng from Taiwan. The sculpture is built of
              100,000 individual parts, each 3D printed and assembled into the
              boat by hand. The work is called “The Deluge: Noah’s Ark.” Peng
              says it is a comment on the inability of humans to solve the
              crises that lay before them, including climate change.
            </p>
            <p>
              Some believe that in order to solve the issues of our day, we must
              chart a “new course”, or “turn the ship around”! Consider
              this…Peng is using the technology of our day, not to reproduce,
              reposition, or re-design the Ark. He’s using it to turn the Ark on
              its head as it sails!
            </p>
          </div>
        </Container>
      </Section>
      <Statements />
      <CallToAction img={CtaImg} />
    </Layout>
  )
}
