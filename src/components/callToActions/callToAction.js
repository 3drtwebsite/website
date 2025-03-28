import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import styled from "styled-components"

import { Section, Container } from "../layoutComponents"
import { ButtonPrimary } from "../buttons"

const TopP = styled.p`
  margin-bottom: 0;
`

const Background = styled.div`
  min-height: 600px;
  background: url("../images/3d-printing-lambo.jpg"),
    rgba(28, 109, 208, 0.5);
  background-blend-mode: overlay;
  background-position: left;
  padding: 12em 0 4em 0;
  background-size: cover;
  background-repeat: no-repeat;
`

const TextOverlay = styled.div`
  color: var(--txt-light);
  text-shadow: -3px 3px 3px #000000;
  padding: 2em;
`

export default function CallToAction() {
  return (
    <Section>
      <Background>
        <Container>
          <TextOverlay>
            <div>
              <TopP className="upper">got a project?</TopP>
              <h2 className="title italics bold">make IT real!</h2>
            </div>
            <p className="bold body--large">
              We use 3D Printing combined with other novel and specialized AM methods to  
              <b><br/>make just about anything you can imagine!</b>
            </p>
            {/* <p className="bold">
              3’D Revolution Technologies (3DRT) specializes in using economical
              hybrid AM techniques, combined with our inhouse 3D printer
              ecosystem and post-processing methods, for rapid prototyping and
              commercial manufacturing. Our 4 step process and production
              methods provide clients with a 100% digital pathway throughout the
              New Product Development process, from design/conception to mass
              production. Whatever you can imagine, we can help you Make it
              Real!{" "}
            </p> */}
            {/* <p>
                3’D Revolution Technologies (3DRT) specializes in using
                economical hybrid AM techniques, combined with our inhouse 3D
                printer ecosystem and post-processing methods, for rapid
                prototyping and commercial manufacturing.
              </p>
            <p>
              Our 4 step process and production methods provide clients with a
              100% digital pathway throughout the New Product Development
              process, from design/conception to mass production.
            </p>
            <p>Whatever you can imagine, we can help you Make it Real! </p> */}
            <ButtonPrimary to="/contact">get a quote &#8594;</ButtonPrimary>
          </TextOverlay>
        </Container>
      </Background>
    </Section>
  )
}
