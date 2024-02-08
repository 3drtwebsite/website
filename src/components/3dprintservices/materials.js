import React, { useState } from "react"
import styled from "styled-components"
import { Section, Container } from "../layoutComponents"
import { ButtonUnderline } from "../buttons"

import ArrowDown from "../../images/arrow-down.svg"
import MetalImg1 from "../../images/materials/metal-3d-printing-calgary-bracket-adm.jpg"
import MetalImg2 from "../../images/materials/metal-3d-printing-calgary-sprocket-adm.jpg"
import MetalPrinterImg from "../../images/materials/markforged-metal-x-3d-printer-1.jpg"
import CompositeImg1 from "../../images/materials/composite-3d-printing-1.jpg"
import CompositeImg2 from "../../images/materials/composite-3d-printing-2.jpg"
import CompositePrinterImg from "../../images/materials/3d-composite-printer.jpg"
import PlasticImg1 from "../../images/materials/plastic-3d-printing-1.jpg"
import PlasticImg2 from "../../images/materials/plastic-3d-printing-2.jpg"
import PlasticPrinterImg from "../../images/materials/3d-plastic-printer.jpg"

const device = {
  md: "48em",
}

export const Flex = styled.div`
  display: flex;

  img {
    width: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: ${device.md}) {
    flex-direction: column;
  }

  & > * {
    width: 100%;
  }

  & > * + * {
    margin-left: 2em;

    @media screen and (max-width: ${device.md}) {
      margin-left: 0;
      margin-top: var(--spacer);
    }
  }
`

const AccordionWrapper = styled.div`
  border-top: ${({ item }) => (item ? "none" : "1px solid var(--clr-accent)")};
`

const TitleFlex = styled.div`
  padding: var(--spacer);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: ${({ item }) => (item ? "4px solid #9ecaed" : "none")};

  &:hover {
    cursor: pointer;
    background: var(--clr-light-secondary);
    transition: 0.25s ease-in;
  }
`

const AccordionContent = styled.div`
  display: ${({ item }) => (item ? "block" : "none")};
`

const ArrowImg = styled.img`
  width: 25px;
  transform: ${({ item }) => (item ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.25s;
`

const PrinterImg = styled.img``

const Spacer = styled.div`
  margin-bottom: var(--spacer);
`

const AccordionItem = props => {
  const [item, itemOpen] = useState(false)

  function toggleItem() {
    itemOpen(!item)
  }
  return (
    <AccordionWrapper item={item}>
      <TitleFlex item={item} onClick={toggleItem}>
        <h2 className="heading">{props.title}</h2>
        <ArrowImg item={item} src={ArrowDown} alt="" />
      </TitleFlex>
      <AccordionContent className="spacing" item={item}>
        <div className="spacing">
          <Flex>
            <div>
              <img src={props.materialImg1} alt={props.materialAlt1} />
            </div>
            <div>
              <img src={props.materialImg2} alt={props.materialAlt2} />
            </div>
          </Flex>
          <Spacer />
          <p>{props.materialDescription}</p>
        </div>
        <div className="spacing">
          <p className="bold">Printers We Use:</p>
          <PrinterImg src={props.printerImg} alt={props.printerAlt} />
          <Spacer />
          <p>{props.printerDescription}</p>
        </div>
        <Spacer />
      </AccordionContent>
    </AccordionWrapper>
  )
}

export default function Materials() {
  return (
    <Section>
      <Container className="spacing-lg">
        <h2 className="title center">
          our <span className="italics accent">3D printing materials</span>
        </h2>
        <div>
          <AccordionItem
            id="metal"
            title="metal 3D printing"
            materialImg1={MetalImg1}
            materialImg2={MetalImg2}
            materialAlt1="metal 3D printing services Calgary"
            materialAlt2="metal 3D printing Calgary"
            materialDescription="3D metal printing is poised to become mainstream with the introduction of the ADM 3D metal printing platform. ADM printing technology is making high quality, cost effective metal 3D printing Calgary accessible to businesses and professionals that require strong, functional, end use parts with the specific attributes found only in alloys."
            printerImg={MetalPrinterImg}
            printerAlt="3D metal printing company Calgary"
            printerDescription="The Markforged MetalX has redefined our online 3D printing services with respect to metal. This office and workshop friendly system offers cost effective, accessible, high quality results which have set the stage for widespread commercialization and professional use of metal 3D printing. The best attributes of this 3D metal printer are strength, quality/finish, and usability. It is best used for fully functional, lightweight, complex machine parts that are cast quality and ready for end use."
          />
          <AccordionItem
            id="composite"
            title="composite 3D printing"
            materialImg1={CompositeImg1}
            materialImg2={CompositeImg2}
            materialAlt1="composite 3D printing company Calgary"
            materialAlt2="composite 3D printing services Calgary"
            materialDescription="In 3D composite printing, continuous (engineered) fibers such as Carbon Fiber, Kevlar and Fiberglass are added to plastic substrate layers in order to give parts specific characteristics such as dimensional stability, strength, stiffness, heat deflection, insulation, abrasion resistance, flexibility, etc."
            printerImg={CompositePrinterImg}
            printerAlt="3D composite printing company Calgary"
            printerDescription="Markforged Composite Printers transcend the realm of our 3D prototyping service. We use this 3D printing technology to print amazing composite and continuous fiber parts (CFF) that can be reinforced for metal-strength."
          />
          <AccordionItem
            id="plastic"
            title="plastic 3D printing"
            materialImg1={PlasticImg1}
            materialImg2={PlasticImg2}
            materialAlt1="plastic 3D printing company Calgary"
            materialDescription="3D plastic printing represents the bulk of the current marketplace in 3D printing Calgary technologies. Current available platforms essentially fall into 1 of 2 categories based on the type of plastic they use ie. Thermoplastics (filaments), or Photo Reactive (resins). 3D plastic printing generally produces the most cost effective and high quality results with respect to 3D modeling, design, and form-fit testing applications, as well as large format 3D printing services Calgary, and low volume, high value production use cases."
            printerImg={PlasticPrinterImg}
            printerAlt="3D plastic printing company Calgary"
            printerDescription="Want to print big? With Modix large format 3D printers, printing volume is no longer an issue which makes this our go-to technology for commercial 3D printing services in Calgary. These printers feature top brand name components, open platform, and open materials with compatibility for most filament plastics (1.75 & 2.85 mm) up to 300 degrees C."
          />
        </div>
      </Container>
    </Section>
  )
}
