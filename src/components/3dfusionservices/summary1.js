import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Section, Container, Flex } from "../layoutComponents"
import { ButtonInline } from "../buttons"

export default function Summary1() {
  return (
    <Section>
      <Container className="spacing">
        <h2 className="title center">
          <span className="italics accent">unlimited possibilities</span> with
          our 3D fusion technology
        </h2>
        <Flex>
          <StaticImage
            className="stretch"
            src="../../images/3d-fusion-summary-1.jpg"
            alt="3d fusion summary"
            objectFit="cover"
          />
          <div className="spacing">
            <div>
              <h3 className="bold italics upper accent">what is 3D fusion?</h3>
              <p>
                3D Fusion processes are poised to elevate 3D printed parts
                (particularly{" "}
                <ButtonInline to="/services/3d-printing">
                  FDM parts
                </ButtonInline>
                ) to a new level of success in real world applications, well
                beyond that which the 3D printer platforms themselves are able
                to achieve (economically) on their own. 3D Fusion is
                complementary to the interests of both 3D print Users (Maker’s),
                and 3D Printer Manufacturer’s, as it will complement the
                hardware capabilities and help to define a path to expanded
                commercial use of{" "}
                <ButtonInline to="/services/3d-printing">
                  3D printed parts
                </ButtonInline>{" "}
                more generally. Finally, Manufacturing itself will ultimately
                benefit from the new fabrication methodology prescribed here,
                because it opens the door to new production potential which is
                virtually unlimited in use, highly accessible, broadly
                distributed, and ultimately sustainable.
              </p>
            </div>
            <div>
              <h3 className="bold italics upper accent">
                how does 3D fusion work?
              </h3>
              <p>
                3D Fusion consists of 3 (additive) processes which are applied
                to parts after they have been 3D printed: freezing, casing,
                loading. 3D Fusion bolsters the as-built structure of{" "}
                <ButtonInline to="/services/3d-printing">
                  3D printed parts
                </ButtonInline>
                , elevating them to a new level physically, and chemically. 3D
                printed parts treated with these processes are enhanced with
                benefits and qualities not present in the original prints. These
                benefits are outlined more clearly in the descriptions below.
              </p>
            </div>
          </div>
        </Flex>
      </Container>
    </Section>
  )
}
