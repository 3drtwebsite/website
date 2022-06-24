import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { ButtonPrimary } from "./buttons"
import { Container, Section } from "./layoutComponents"

const GridItem = styled.div`
  box-shadow: var(--shadow-light-accent);
`

const Bg1 = styled.div`
  background: url("../images/printing-service-bg.png");
  background-size: cover;
  background-position: center;
`
const Bg2 = styled.div`
  background: url("../images/digital-design.jpg");
  background-size: cover;
  background-position: center;
`
const Bg3 = styled.div`
  background: url("../images/3d-fusion-bike-1.jpg");
  background-size: cover;
  background-position: center;
`

const Text = styled.div`
  padding: 10em 2em;
  color: var(--txt-light);
  text-shadow: -3px 3px 3px #000000;
  // @media screen and (max-width: )

  p {
    font-size: var(--fs-2);
  }
`

export default function ServicesFull() {
  return (
    <Section>
      <Container className="spacing-lg">
        <div className="spacing">
          <h2 className="title center">
            our <span className="italics accent">3D printing services</span>{" "}
          </h2>
          <div className="spacing">
            <Bg1>
              <Text className="spacing">
                <h3 className="caps bold title">3D printing</h3>
                <p className="bold">
                  We offer a host of 3D Printing, Rapid Prototyping, and Digital
                  Production capabilities that are ready to meet your unique
                  manufacturing challenges!
                </p>
                <ButtonPrimary to="/services/3d-printing">
                  learn more &#8594;
                </ButtonPrimary>
              </Text>
            </Bg1>
            <Bg2>
              <Text className="spacing">
                <h3 className="caps bold title">digital design</h3>
                <p className="bold">
                  Optimized geometry and bespoke digital design. We specialize
                  in design for additive manufacturing (DFAM).
                </p>
                <ButtonPrimary to="/services/3d-printing">
                  learn more &#8594;
                </ButtonPrimary>
              </Text>
            </Bg2>
            <Bg3>
              <Text className="spacing">
                <h3 className="caps bold title">3D fusion</h3>
                <p className="bold">
                  3D Fusion is a novel additive manufacturing method used to
                  improve the isotropic strength, quality, and structural
                  consistency of as-built 3D printed parts.
                </p>
                <ButtonPrimary to="/services/3d-fusion">
                  learn more &#8594;
                </ButtonPrimary>
              </Text>
            </Bg3>
          </div>
        </div>
      </Container>
    </Section>
  )
}
