import React from "react"
import styled from "styled-components"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import BannerFusion from "../../components/banners/bannerFusion"
import Summary1 from "../../components/3dfusionservices/summary1"
import Why from "../../components/3dfusionservices/why"
import ProductionBenefits from "../../components/3dfusionservices/productionBenefits"
import FusionGallery from "../../components/3dfusionservices/fusionGallery"
import CallToAction from "../../components/callToActions/callToAction"
import Process from "../../components/3dfusionservices/process"
import PrimaryBenefits from "../../components/3dfusionservices/primaryBenefits"
import Industries from "../../components/industries"
import Summary2 from "../../components/3dfusionservices/summary2"

import BannerImg from "../../images/3d-fusion-bike.jpg"
import ProductionBenefitsImg from "../../images/3d-fusion-functional-parts.jpg"
import CtaBg from "../../images/ph.png"
import { Container, Section } from "../../components/layoutComponents"
import { StaticImage } from "gatsby-plugin-image"
import BeforeAfter from "../../components/3dfusionservices/beforeAfter"

const Flex = styled.div`
  display: flex;
  align-items: center;

  ul {
    li {
      font-size: var(--fs-2);

      & > * + * {
        margin-left: 5px;
      }
    }
  }

  & > * + * {
    margin-left: 2em;

    @media screen and (max-width: 52.5em) {
      margin-left: 0;
    }
  }

  @media screen and (max-width: 52.5em) {
    flex-direction: column;
  }
`

const List = styled.ul`
  list-style-type: none;

  li {
    display: flex;
    align-items: center;
  }
`

export default function Fusion() {
  return (
    <Layout>
      <SEO
        title="3D Fusion to Elevate 3D Printed Parts"
        description="Make your 3D printed parts real with you 3D Fusion technology by enhancing part strength, making your 3D parts air & watertight and more consistent. Call us to learn more at 403-874-3131."
      />
      <BannerFusion
        breadCrumbLink1="/"
        breadCrumbLink2="/services"
        breadCrumbLink3="/services/3d-fusion"
        breadCrumb1="Home"
        breadCrumb2="Services"
        breadCrumb3="3D Fusion"
        img={BannerImg}
        buttonText="get a quote"
      />
      <Section>
        <Container className="spacing">
          <h3 className="title bold">So why alter, or process 3D parts?</h3>
          <p className="caps bold body--large">
            As-built 3D printed parts typically suffer from 3 common
            drawbacks...
          </p>
          <Flex>
            <List>
              <li>
                {" "}
                <StaticImage
                  src="../../images/3d-printing-process-strong.jpg"
                  height={100}
                />{" "}
                <span>Lack of (isotropic) strength</span>
              </li>
              <li>
                {" "}
                <StaticImage
                  src="../../images/3d-printing-process-work.jpg"
                  height={100}
                />{" "}
                <span> Pourosity, and part inconsistencies</span>
              </li>
              <li>
                <StaticImage
                  src="../../images/3d-printing-process-econ.jpg"
                  height={100}
                />{" "}
                <span> Issues with scaling production economically</span>
              </li>
            </List>
            <StaticImage
              src="../../images/3d-fusion-lack-strength.jpg"
              alt="3D parts suffer from lack of strength"
            />
          </Flex>
          <p className="bold caps body--large">
            3D Fusion addresses each of these and more!
          </p>
        </Container>
      </Section>
      <Section>
        <Container>
          <BeforeAfter />
        </Container>
      </Section>
      <Process />
      <ProductionBenefits img={ProductionBenefitsImg} />
      <CallToAction img={CtaBg} />
      <Summary2 />
    </Layout>
  )
}
