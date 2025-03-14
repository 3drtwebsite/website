import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSlider from "../components/heros/heroSlider"
import ReviewSlider from "../components/ReviewSlider"
import MaterialsBanner2 from "../components/materialsBanner2"
import ServicesFull from "../components/servicesFull"
import FeaturedGallery from "../components/featuredGallery"
import Summary2Rpt from "../components/3dfusionservices/summary2Rpt"
import Process from "../components/process"
import PrintingBenefits from "../components/benefits/PrintingBenefits"
import Industries from "../components/industries"
import CallToAction from "../components/callToActions/callToAction"
import CtaBg from "../images/ph.png"

export default function Index() {
  return (
    <Layout>
      <SEO />
      <HeroSlider />
      <ReviewSlider />
      <MaterialsBanner2 />
      <ServicesFull />
      {/* <FeaturedGallery /> */}
      <Process />
      <CallToAction img={CtaBg} />
    </Layout>
  )
}
