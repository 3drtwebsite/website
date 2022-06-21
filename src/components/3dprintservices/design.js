import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Section, Container, Flex } from "../layoutComponents"
import { ButtonInline } from "../buttons"
const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin-left: 0;
  li {
    display: flex;
    align-items: center;

    &::before {
      content: url("../../../images/check.svg");
      margin-right: 0.2em;
    }
  }
`

const Text = styled.div``

export default function Design() {
  return (
    <Section>
      <Container>
        <Flex>
          <div className="spacing">
            <h2 className="title ">
              <span className="italics accent">3D digital design</span> services
              calgary
            </h2>
            <p className="">
              We offer a variety of digital design and production services in
              Calgary, including:
            </p>
            <List>
              <li>Parametric (CAD) modeling</li>
              <li>Design for additive manufacturing (DFAM)</li>
              <li>Hybrid additive manufacturing</li>
              <li>3D production consulting</li>
              <li>
                <ButtonInline to="/services/3d-fusion">
                  3D Fusion Manufacturing
                </ButtonInline>
              </li>
            </List>
            <p>
              Digital design goes hand in hand with 3D printing. You can't print
              without a digital model and the geometry of that model, although
              unlimited in complexity and potential, has to made in such a way
              as to take advantage of the benefits of 3D Printing without
              inadvertely incorporating it's main drawbacks (eg. supports).
            </p>
          </div>
          <StaticImage
            className="stretch"
            src="../../images/3d-printing-banner.jpg"
            alt="3D printing design services Calgary"
            height={500}
          />
        </Flex>
      </Container>
    </Section>
  )
}
