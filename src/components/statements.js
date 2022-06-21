import React from "react"
import styled from "styled-components"
import { Section, Container, Flex } from "./layoutComponents"

const device = {
  md: "48em",
}

const Line = styled.div`
  background-color: var(--clr-accent);
  height: 100px;
  width: 2px;

  @media screen and (max-width: ${device.md}) {
    display: none;
  }
`

const Statement = props => {
  return (
    <div className="spacing">
      <p className="italics upper accent">{props.title}</p>
      <p>{props.description}</p>
    </div>
  )
}

export default function Statements() {
  return (
    <Section>
      <Container>
        <Flex>
          <Statement
            title="our mission"
            description="Our mission is to produce cost effective & functional commercial quality parts for our clients by using sustainable manufacturing methods with unlimited possibility."
          />
          <Line />
          <Statement
            title="our pursuit"
            description="We accelerate business productivity, and provide manufacturing freedom through the adoption of 3D technologies."
          />
          <Line />
          <Statement
            title="our vision"
            description="Our vision is to promote freedom through innovation, the power of creation, and helping others to make it real with our 3D Fusion and 3D Printing technology."
          />
        </Flex>
      </Container>
    </Section>
  )
}
