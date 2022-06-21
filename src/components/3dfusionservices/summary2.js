import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Section, Container, Flex } from "../layoutComponents"
import { ButtonPrimary, ButtonInline } from "../buttons"

const Wrapper = styled.div`
  // background: url("../../images/3d-fusion-putter-summary.jpg");
`

export default function Summary2() {
  return (
    <Section>
      <Wrapper>
        <Container className="spacing">
          <h2 className="title center">
            our <span className="italics accent">3D fusion technology</span> at
            a glance
          </h2>
          <Flex>
            <StaticImage
              className="stretch"
              src="../../images/3d-fusion-putter-summary.jpg"
              alt="3D fusion summary"
              objectFit="cover"
            />
            <div className="spacing">
              <div>
                <h3 className="bold italics upper accent">
                  elevating 3d printed parts
                </h3>
                <p>
                  It should be clear that the immediate benefits which flow from
                  3D Fusion are poised to elevate{" "}
                  <ButtonInline to="/services/3d-printing">
                    3D printed parts
                  </ButtonInline>{" "}
                  (particularly FDM parts) to a new level of success in real
                  world applications, well beyond that which the 3D printer
                  platforms themselves are able to achieve (economically) on
                  their own.
                </p>
              </div>
              <div>
                <h3 className="bold italics upper accent">
                  expanding commercial use of 3d printing
                </h3>
                <p>
                  3D Fusion is complementary to the interests of both 3D print
                  Users (Maker’s), and 3D Printer Manufacturer’s, as it will
                  complement the hardware capabilities and help to define a path
                  to expanded commercial use of 3D printed parts more generally.
                </p>
              </div>
              <div>
                <h3 className="bold italics upper accent">
                  sustainable manufacturing, unlimited possibilities
                </h3>
                <p>
                  Finally,{" "}
                  <ButtonInline to="/services/3d-printing">
                    manufacturing
                  </ButtonInline>{" "}
                  itself will ultimately benefit from the new fabrication
                  methodology prescribed here, because it opens the door to new
                  production potential which is virtually unlimited in use,
                  highly accessible, broadly distributed, and ultimately
                  sustainable.
                </p>
              </div>
            </div>
          </Flex>
        </Container>
      </Wrapper>
    </Section>
  )
}
