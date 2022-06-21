import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Section, Flex } from "../layoutComponents"
import { ButtonInline, ButtonPrimary } from "../buttons"

const Wrapper = styled.div`
  background: url("../images/3d-fusion-functional-parts.jpg"),
    rgba(255, 255, 255, 0.7);
  background-blend-mode: overlay;
  background-position: center;
  padding: 10em 0 4em 0;
  background-size: cover;
  background-repeat: no-repeat;
`

const List = styled.ol`
  font-size: var(--fs-3);
  font-weight: var(--fw-600);
`

export default function PrimaryBenefits() {
  return (
    <Wrapper>
      <Section>
        <Container className="spacing">
          <h2 className="title bold">
            3D fusion
            <span className="italics accent"> primary benefits</span> include:
          </h2>
          <List>
            <li>Dramatically enhanced part strength across all axis</li>
            <li>
              Air and watertight qualities (verified in 3D fusion process)
            </li>
            <li>
              Scalable, economic, digital production with elevated part
              consistency (to Certifiable Standards)
            </li>
          </List>
        </Container>
      </Section>
    </Wrapper>
  )
}
