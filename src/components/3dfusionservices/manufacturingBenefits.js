import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Section, Container, Flex } from "../layoutComponents"
import { ButtonUnderline, ButtonInline } from "../buttons"

const BenefitItem = styled.div`
  padding: 2em;
  box-shadow: var(--shadow-light-accent);
`

const Text = styled.div`
  /* padding: 2em 2em 0 2em; */
`

export default function ManufacturingBenefits() {
  return (
    <Section>
      <Container className="spacing">
        <center className="spacing">
          <h2 className="title">
            <span className="italics accent">manufacturing benefits</span> of 3D
            fusion
          </h2>
          <p>
            In a broader sense, there are{" "}
            <span className="accent">two very significant benefits that</span>{" "}
            arise from this novel method of manufacturing. These are more subtle
            and less tangible than the benefits which 3D Fusion provides
            regarding part quality, cost, accessibility. That is:
          </p>
        </center>
        <Flex>
          <BenefitItem className="spacing">
            <Text>
              <h3 className="upper">functional parts</h3>
              <p>
                3D Parts which are treated with 3D Fusion processes are
                functional in both the “positive” and “negative” space, of which
                they are composed. In other words, both the part surfaces, and
                3D interior spaces between surfaces can be manufactured to
                specifications, and could even perform separate functions.
              </p>
            </Text>
            <div>
              <StaticImage
                src="../../images/3d-fusion-functional-parts.jpg"
                alt="3D fusion makes parts functional"
              />
              <center>
                <p className="italics bold body body--small">
                  A fully functioning prosthetic arm using 3D Fusion.
                </p>
              </center>
            </div>
          </BenefitItem>
          <BenefitItem className="spacing">
            <Text>
              <h3 className="upper">fuse & assemble</h3>
              <p>
                3D Fusion processes can be used to fuse & assemble component
                parts.{" "}
                <ButtonInline to="/services/3d-printing">
                  3D printed parts
                </ButtonInline>{" "}
                can be both 3D Fusion-Manufactured and 3D Fusion-Assembled, in
                one step, producing a “single body”, composed of separate but
                mechanically combined components. This 3D Fusion-Assembly method
                can eliminate, or greatly reduce the need for fastening
                hardware, or the welding together of pieces in the assembly
                process. In a very tangible way, it is the assembly process, and
                it’s infinitely customizable, and accessible.
              </p>
            </Text>
            <div>
              <StaticImage
                src="../../images/3d-fusion-fuse-assemble.jpg"
                alt="3D fusion to fuse and assemble parts"
              />
              <center>
                <p className="bold italics body body--small">
                  Increased usability by fusing and assembling parts with 3D
                  Fusion.
                </p>
              </center>
            </div>
          </BenefitItem>
        </Flex>
      </Container>
    </Section>
  )
}
