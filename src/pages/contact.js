import React from "react"
import HeaderBasic from "../components/headers/headerBasic"
import Footer from "../components/footers/footer"
import SEO from "../components/seo"
import BannerContact from "../components/banners/bannerContact"
import FormContact from "../components/forms/formContact"
import BenefitsWithBody from "../components/benefits/benefitsWithBody"
import CallToAction from "../components/callToActions/callToAction"
import ServicesFull from "../components/servicesFull"

import BannerImg from "../images/3d-printing-lambo.jpg"
import BenefitsImg from "../images/mf-sample-parts.jpg"
import CtaBg from "../images/ph.png"

export default function Contact() {
  return (
    <>
      <HeaderBasic />
      <SEO
        title="Contact Us"
        description="Need a quote on your next 3D printing project? Need a way to make your 3D printed parts more useable? Call us or fill out our online form to quickly and easily get a quote!"
      />
      <BannerContact
        breadCrumbLink1="/"
        breadCrumbLink2="/contact"
        breadCrumb1="Home"
        breadCrumb2="Contact"
        img={BannerImg}
      />
      <FormContact />
      <BenefitsWithBody
        textPrimary="... or give us a call!"
        textSecondary="Contact us to get help on your next 3D printing project. Ask about our 3D Fusion technology to learn how to elevate your 3D printed parts and make them real!"
        li1="Increase your design freedom"
        li2="Increase the value of your products"
        li3="Reduce turnaround time on your machined parts"
        li4="Enable mass customization"
        li5="make your parts reals"
        to="/contact"
        buttonText="403-874-3131 &#8594;"
        img={BenefitsImg}
        imgAlt="3D printing calgary"
      />
      <Footer />
    </>
  )
}
