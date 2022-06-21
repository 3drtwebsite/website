import React, { useState } from "react"
import styled from "styled-components"
import { Section, Container } from "../layoutComponents"
import { ButtonUnderline } from "../buttons"

import ArrowDown from "../../images/arrow-down.svg"
import FdmImg from "../../images/technologies/fdm-3d-printing-calgary.jpg"
import AdmImg from "../../images/technologies/adm-3d-printing-calgary.jpg"
import CffImg from "../../images/technologies/cff-3d-printing-calgary.jpg"
import CjpImg from "../../images/technologies/cjp-3d-printing-calgary.jpg"
import DmpImg from "../../images/technologies/dmp-3d-printing-calgary.jpg"
import MjpImg from "../../images/technologies/mjp-3d-printing-calgary.jpg"
import SlaImg from "../../images/technologies/sla-3d-printing-calgary.jpg"
import SlsImg from "../../images/technologies/sls-3d-printing-calgary.jpg"

const device = {
  md: "48em",
}

export const Flex = styled.div`
  display: flex;

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

  img {
    width: 100%;
    margin-bottom: var(--spacer);
  }

  div p:nth-child(1) {
    margin-bottom: 0;
  }
`

const ArrowImg = styled.img`
  width: 25px;
  transform: ${({ item }) => (item ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.25s;
`

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
        <img src={props.img} alt={props.alt} />
        <Flex>
          <p>{props.description}</p>
          <div className="spacing">
            <div>
              <p className="bold">Materials</p>
              <p>{props.materials}</p>
            </div>
            <div>
              <p className="bold">Post-processing</p>
              <p>{props.postP}</p>
            </div>
            <div>
              <p className="bold">3D Printers</p>
              <p>{props.printers}</p>
            </div>
          </div>
        </Flex>
        <ButtonUnderline to="/contact">
          contact us for your {props.title} needs &#8594;
        </ButtonUnderline>
        <Spacer />
      </AccordionContent>
    </AccordionWrapper>
  )
}

export default function Technologies() {
  return (
    <Section>
      <Container className="spacing-lg">
        <h2 className="title center">
          our <span className="italics accent">3D printing technologies</span>
        </h2>
        <div>
          <AccordionItem
            title="FDM Printing"
            img={FdmImg}
            alt="FDM 3D printing services Calgary"
            description="Fused Deposition Modeling (FDM Printing), also known as FFF (Fused Filament Fabrication), is a solid thermoplastic based rapid prototyping method that extrudes melted filament, layer by layer, to build a solid or lattice-filled model. Internal structures can contain closed hollow cells which reduces material use and provide parts with high strength to weight ratios. Customers in automotive, medical device, engineering, architecture and other industries rely on FDM 3D printing capabilities for rapid delivery of dimensionally accurate, functional prototypes, as well as small-quantity production parts. The thermoplastic parts are able to resist high temperatures, mechanical stresses and chemical degradation. Our FDM 3D printing Calgary technology is perfect for producing durable jigs, tooling or fixtures used in manufacturing processes. This process does not require special environmental, electrical or safety considerations making it highly accessible to most commercial shops."
            materials="ABS, Nylon, Polycarbonates."
            postP="Parts can be glued, machined, sanded, chemically treated, painted and coated."
            printers="Onyx One, Taz 6, Mini, Ultimaker 3, Ultimaker 3 Extended."
          />
          <AccordionItem
            title="ADM Printing"
            img={AdmImg}
            alt="ADM 3D printing services Calgary"
            description="Atomic Diffusion Manufacturing (ADM) uses metal powder bound by plastic, to print “green” parts in much the same way that FDM Printing platforms do. The parts are then fused across all 3 axes in a sintering oven. The sintering process brings them close to, but not up to the alloys melting point, while vaporizing the plastic medium contained in the part. Shrinkage in the part does occur but is consistent and adjusted for automatically in the build process. The finished parts are fully dense and have virtually the same isotropic strength characteristics as the original alloy. ADM 3D Printing technology is ideal for a wide range of professional and industrial applications, including automotive, aerospace and defense applications, machine shop, supply chain manufacturing, etc. A unique feature of this 3D metal printing process is the ability to create “honeycombed” or hollow enclosed structures which provide very high strength to weight ratios in the finished parts. It allows for the production of complex shapes with no need for tooling, and it permits the production of dramatically different designs which could not be produced from conventional processes like machining, stamping or die casting ie. enclosed honeycomb. This process does not require special environmental, electrical or safety considerations making it highly accessible to most commercial shops."
            materials="Stainless Steel, Tooling Steel, Titanium, Copper, Inconel."
            postP="Parts can be annealed, machined, polished, coated or chemically finished after printing."
            printers="MetalX."
          />
          <AccordionItem
            title="CFF Printing"
            img={CffImg}
            alt="CFF 3D printing services Calgary"
            description="Continuous Fiber Fabrication (CFF) is a solid thermoplastic based fabrication method which utilizes nylon and nylon composite filaments for build material that may also be simultaneously incorporated with various continuous fibers during the 3D fabrication process. In the CFF 3D printing process, the continuous fibers are extruded separately from a second print head directly into the nylon substrate, across any layer(s) on the X,Y axis. As rebar is used to strengthen cement, so too are the continuous fibers used to bolster the thermoplastic substrate. The continuous fibers are pre-engineered and generally unaltered in the printing process. Fibers may be added at specific layers to achieve greater part strength, abrasion resistance, rigidity, and heat deflection wherever needed. This Calgary 3D printing platform is ideal for machine shops, fabricators, service bureaus, and any manufacturers looking for strong, functional, lightweight parts. With these added benefits the CFF printing process is able to build parts with greater functionality and durability and is an ideal choice for many functional 3D prototyping, molding, tooling, production and supply chain applications."
            materials="Nylon composite (Onyx), Carbon Fiber, Kevlar, Fiber Glass. Note: Qualities such as strength, rigidity, abrasion resistance and heat deflection can be added to the build using continuous fiber."
            postP="Parts can be glued, machined, sanded, chemically treated, painted and coated."
            printers="Onyx Pro, Mark 2, X7."
          />
          <AccordionItem
            title="CJP Printing"
            img={CjpImg}
            alt="CJP 3D printing services Calgary"
            description="Color Jet Printing (CJP) is a powder printing process which uses colored or clear resin binders to fuse a talcum-like powder into shape, as it is deposited in consecutive layers onto a print bed, until the bed is filled.
This color 3D printing service is best suited to applications where visualization and full color representation are the priority. Examples include display and concept models, figurines, replicas, artifacts, and reproductions.
Once the parts are printed and post treated, they have a porcelain or ceramic quality and although they will stand up to some handling, they are not intended for functional use.
Whether 3D printed with color, or left natural white, parts can be additionally clear coated to add a smooth surface finish.
"
            materials="Gypsum powder. Note: Plastic resin and cyanoacrylates (superglue) are used to saturate, combine, and reinforce the model geometry."
            postP="Parts can be sanded, coated and/or painted after printing. Machining of parts is not recommended."
            printers="Projet 660 Plus."
          />
          <AccordionItem
            title="DMP Printing"
            img={DmpImg}
            alt="DMP 3D printing services Calgary"
            description="Direct Metal Printing (DMP) uses a powerful laser to spot sinter metal powder into shape, as the powder is deposited in consecutive layers onto a print bed, until the bed is filled.
This process is well suited for producing fully dense and functional 3D metal printing parts with impressive accuracy and resolution. Our Calgary 3D printing technology is ideal for medical, aerospace and defense applications where weight to strength ratios are critical. It allows for the production of small and extremely complex shapes with no need for tooling, and it will allow for dramatically different part designs than those available using conventional processes like machining, stamping or die casting. It bypasses multiple stages of the traditional production process for cast or forged 3D metal parts, thereby saving both time and money in development of functional end use metal parts.
Similar to SLS this process can produce multiple parts simultaneously and offers economies of scale for short run, high value production.
"
            materials="Stainless Steel, Titanium, Aluminum, Inconel."
            postP="Parts can be annealed, machined, polished, coated or chemically finished after printing."
            printers="sPro DMP 320."
          />
          <AccordionItem
            title="MJP Printing"
            img={MjpImg}
            alt="MJP printing services Calgary"
            description="Multi Jet Printing (MJP) is a liquid plastic process that uses jetted droplets of UV reactive plastic deposited in layers, and solidified with light, in order to create intricate and complex geometries with a high degree of accuracy, and fine feature detail.
This 3D plastic printing process is ideal for rapid prototyping and provides a quick turnaround time which is why this is one of our most affordable 3D printing services Calgary.
3D printed parts have good compressive strength, smooth surfaces and exceptional feature detail, as well as mechanical properties suitable for study models, form & fit testing, watertight and pressure applications, as well as limited functional use.
"
            materials="UV reactive acrylics, Rubber-like elastomeric polymers, Wax."
            postP="Parts can be painted, metal coated, glued and machined after printing."
            printers="Projet 2500, Projet 3600, Projet 5500."
          />
          <AccordionItem
            title="SLA Printing"
            img={SlaImg}
            alt="SLA printing services Calgary"
            description="Stereolithography (SLA) is a liquid plastic process that uses laser light to solidify UV reactive resins on a build plate, as it descends into a vat of liquid resin.
Each layer is etched by laser and solidified just below the surface of the liquid, which prevents oxidation and produces exceptional surface quality rivaling that of injection molding.
Our SLA printing service offers the best all-round form/fit 3D prototyping capability for the verification of design elements before committing to your chosen production route. Its high accuracy and good surface finish makes it the preferred choice for 3D design and concept models, engineering verification and master patterns for silicone rubber molds.
Our SLA 3D printing services Calgary offers dimensionally accurate models with good feature detail and is best suited for parts with geometries having relatively low material volumes such as shells, enclosures, meshes and lattices etc.
"
            materials="UV reactive acrylic resin."
            postP="Parts can be painted, metal coated, glued and machined after printing."
            printers="Form 2, Projet 7000."
          />
          <AccordionItem
            title="SLS Printing"
            img={SlsImg}
            alt="SLS printing services Calgary"
            description="Selective Laser Sintering (SLS) uses a laser to sinter powdered thermoplastic into shape as the powder is deposited in consecutive layers onto a print bed until the entire bed is filled.
SLS is the 3D printing service of choice for a range of functional prototype applications, including those with snap fits, living hinges and other mechanical joints.
The ability of SLS 3D printing to build multiple pieces at a time provides some economies of scale for short run, high value production and makes the process a good choice for manufacturing end use products with complex geometries that require isotropic strength, stiffness, and/or heat resistance.
"
            materials="Nylon powder. Note: Additional materials such as carbon, aluminum and fiberglass can be added to this process in order to achieve greater part strength, rigidity, and heat deflection."
            postP="Parts can be dyed, painted, and machined after printing."
            printers="SPro 230."
          />
        </div>
      </Container>
    </Section>
  )
}
