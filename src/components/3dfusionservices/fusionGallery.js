import React from "react"
import styled from "styled-components"
import { Section, Container } from "../layoutComponents"
import { ButtonUnderline, ButtonInline } from "../buttons"

import GalleryImg1 from "../../images/3d-fusion-enhancing-part-strength.jpg"
import GalleryImg2 from "../../images/3d-fusion-creating-air-water-tight.jpg"
import GalleryImg3 from "../../images/3d-fusion-part-consistency.jpg"

const device = {
  md: "48em",
}

const Flex = styled.div`
  background: var(--clr-light-secondary);
  display: flex;
  align-items: center;

  @media screen and (max-width: ${device.md}) {
    flex-direction: column;
  }

  & > * {
    width: 100%;
  }
`

const Img = styled.img`
  max-height: 400px;
  height: 100%;
  width: 100%;
  object-fit: cover;
`

const Text = styled.div`
  padding: 2em;
`

const GalleryItem = props => {
  return (
    <Flex>
      <div>
        <Img src={props.img} alt={props.alt} />
      </div>
      <Text className="spacing">
        <h3 className="upper">{props.title}</h3>
        <ButtonUnderline to="/contact">
          get your 3D parts enhanced &#8594;
        </ButtonUnderline>
      </Text>
    </Flex>
  )
}

export default function FusionGallery() {
  return (
    <Section>
      <Container className="spacing">
        <center>
          <p className="bold upper accent">
            elevating parts to new levels of usability
          </p>
          <h2 className="title">our real word applications of 3D fusion</h2>
        </center>
        <center>
          <p>
            As-built{" "}
            <ButtonInline to="/services/3d-printing">
              3D printed parts
            </ButtonInline>{" "}
            suffer from being too weak, unusable, and inconsistent. We have
            applied our{" "}
            <ButtonInline to="/services/3d-fusion">
              3D Fusion processes
            </ButtonInline>{" "}
            to enhance the strength of 3D printed parts while making them air &
            watertight, and more consistent and reliable in real world
            applications.
          </p>
        </center>
        <div className="spacing">
          <GalleryItem
            img={GalleryImg1}
            alt="3D fusion services Calgary"
            title="enhancing part strength"
            description="lorem"
          />
          <GalleryItem
            img={GalleryImg2}
            alt="3D fusion services Calgar"
            title="creating air & watertight qualities"
            description="lorem"
          />
          <GalleryItem
            img={GalleryImg3}
            alt="3D fusion services Calgar"
            title="improving part consistency"
            description="lorem"
          />
        </div>
      </Container>
    </Section>
  )
}
