import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Section, Container } from "../layoutComponents"
import { ButtonUnderline, ButtonInline } from "../buttons"

import ArrowDown from "../../images/arrow-down.svg"

const device = {
  md: "48em",
}

const Flex = styled.div`
  display: flex;
  align-items: center;
  img {
    /* width: 100%; */
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

  img {
    width: 100%;
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
        <p className="bold">{props.description}</p>
        <ul>
          <li>{props.li1}</li>
          <li>{props.li2}</li>
          <li>{props.li3}</li>
        </ul>
        <Spacer />
      </AccordionContent>
    </AccordionWrapper>
  )
}

export default function Process() {
  return (
    <Section>
      <Container className="spacing-lg">
        <center className="spacing">
          <h2 className="title">
            3D fusion post-printing{" "}
            <span className="italics accent">processes</span>
          </h2>
          <p>
            3D Fusion consists of 3 additive processes which are applied to
            parts after they have been 3D printed:
          </p>
        </center>
        <div>
          <AccordionItem
            title="Freezing (frēziNG)"
            description="To hold at a fixed level or in a fixed state for a period of time. "
            li1="Generally speaking, Freezing increases the quality, consistency, and usability of 3D printed parts for home, industrial and commercial use, by fusing the plastic connections present in 3D printed parts, wherever they are. This bolsters and strengthens the as-built part, which likely harbors inconsistencies and flaws in the bonded plastic ribbons laid down during the 3D printing process. "
            li2="Not only is the part made strong across all axes (isotropic strength), but Freezing actually gives the part added stiffness when placed under low stress loads, and added flexibility under high stress loads. These are highly desirable characteristics. "
            li3="Freezing fills small gaps and fissures in the outer surface of the part making it smoother, more durable, and more attractive, without noticeably impacting dimensional accuracy. Freezing increases air and watertight qualities. Various other qualities may be added to parts in the Freezing process by simply changing the chemical formulation of the materials used ie. add UV Blocking, fire retardant, food safe, etc."
          />
          <AccordionItem
            title="Casing (kāsiNG)"
            description="A cover or shell that protects or encloses something."
            li1="The Casing process seals the outer surface of as-built 3D printed parts, and ensures air & watertight qualities. It does so by addressing flaws in the outer walls, ceiling, and floor surfaces which are left behind by the 3D printing process. It’s these flaws which are primarily responsible for porosity, and a lack of consistent strength in as-built parts."
            li2="Casing strengthens the outer shell and improves adhesion between surface layers wherever flaws may exist."
            li3="The Casing process measurably verifies air & watertight finish."
          />
          <AccordionItem
            title="Loading (lōdiNG)"
            description="The application of an extra amount of something to balance some other factor."
            li1="Loading of as-built 3D printed parts boosts the isotropic strength of those parts substantially. *The level of strength added is heavily dependent on the geometry and materials used in Loading the parts. Nevertheless, the results are nothing short of extraordinary!"
            li2="Mass, density, stiffness, and strength of (sparse-filled) 3D printed parts can be bolstered, manipulated, or customized to whatever degree is afforded by the part’s as-built geometry"
            li3="Loaded parts are air & watertight."
          />
        </div>
        <Flex>
          <div>
            <StaticImage
              className="stretch"
              src="../../images/3d-fusion-elevates-3d-parts.jpg"
              alt="3D fusion elevates parts"
              objectFit="cover"
            />
            <center>
              <p className="italics bold body body--small">
                A fully functioning 3D printed part (brake handle) using our 3D
                Fusion technology.
              </p>
            </center>
          </div>
          <div className="spacing">
            <h3 className="upper accent italics">
              3D fusion elevates printed parts
            </h3>
            <p>
              3D Fusion bolsters the as-built structure of 3D printed parts,
              elevating them to a new level physically, and chemically.{" "}
              <ButtonInline to="/services/3d-printing">
                3D printed parts
              </ButtonInline>{" "}
              treated with these processes are enhanced with benefits and
              qualities not present in the original prints, as outlined in the
              descriptions above.{" "}
            </p>
          </div>
        </Flex>
      </Container>
    </Section>
  )
}
