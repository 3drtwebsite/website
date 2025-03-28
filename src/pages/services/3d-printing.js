import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import BannerActions from "../../components/banners/bannerActions"
import BenefitsWithBody from "../../components/benefits/benefitsWithBody"
import OnDemandPrinting from "../../components/3dprintservices/onDemandPrinting"
import Intro from "../../components/3dprintservices/intro"
import CallToAction from "../../components/callToActions/callToAction"
import Technologies from "../../components/3dprintservices/technologies"
import Commercial from "../../components/3dprintservices/commercial"
import Materials from "../../components/3dprintservices/materials"
import Design from "../../components/3dprintservices/design"
import Process from "../../components/process"
import PrintingBenefits from "../../components/benefits/PrintingBenefits"
import Accelerate from "../../components/3dprintservices/accelerate"
import Industries from "../../components/industries"

import BannerImg from "../../images/3d-printing-calgary.png"
import BenefitsImg from "../../images/calgary-3d-printing.jpg"
import CtaImg from "../../images/ph.png"


export default function Printing() {
  return (
    <Layout>
      <SEO
        title="Affordable and On-Demand 3D Printing Calgary Services"
        description="We have 10+ years of experience providing 3D printing services in Calgary, and we specialize in Hybrid AM and 3D Fusion. Call for a quote today: 403-874-3131."
      />
      <BannerActions
        breadCrumbLink1="/"
        breadCrumbLink2="/services"
        breadCrumbLink3="/services/3d-printing"
        breadCrumb1="Home"
        breadCrumb2="Services"
        breadCrumb3="3D Printing"
        img={BannerImg}
        textPrimary="3D printing calgary"
        textSecondary="We combine a variety of Open Source and Industrial 3D Printing platforms, with Hybrid AM
        techniques such as 3D Fusion Manufacturing, to achieve results that are remarkable, and yet
        affordable!"
        to="/contact"
        buttonText="get a quote"
      />
      <BenefitsWithBody
        textPrimary="3D printing services"
        textSecondary=""
        li1="Rapid Prototyping and Production printing"
        li2="Printing on FDM, ADM, CFF, CJP, DMP, MJP, SLA, SLS platforms"
        li3="Commercial Printing"
        li4="Composite, Plastic, Metal printing"
        li5="3D Digital Design"
        to="/contact"
        buttonText="see how we can help &#8594;"
        img={BenefitsImg}
        imgAlt="3D printing calgary"
      />
      <OnDemandPrinting />
      <Technologies />
      <Commercial />

      <Materials />
      <Design />
      <Process />
      <Accelerate />
      <CallToAction img={CtaImg} />
      {/* <Industries /> */}
    </Layout>
  )
}
