import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Section, Container } from "../layoutComponents"
import { ButtonInline } from "../buttons"

const Wrapper = styled.div`
  background: url("../../images/commercial-3d-printing-1.jpg");
  background-size: cover;
  background-postition: center;
`
const Text = styled.div`
  text-shadow: -3px 3px 3px #000000;
  color: var(--txt-light);
  padding: 10em 2em;
`
export default function Commercial() {
  return (
    <Section>
      <Container>
        <Wrapper className="spacing">
          <Text>
            <h2 className="title bold">
              commercial 3D printing services Calgary
            </h2>
            <div className="spacing">
              <p>
                3’D Revolution Technologies offers cost-effective commercial 3D
                printing services. We have developed our in-house 3D printing
                ecosystem based on an ideal combination of 3D printing
                capabilities for engineers, machine shops, service bureaus,
                custom fabricators, and small manufacturers looking for
                functional commercial 3D printing parts.
              </p>
            </div>
          </Text>
        </Wrapper>
      </Container>
    </Section>
  )
}
