import React from "react"
import styled from "styled-components"
import { Section, Container, Flex } from "../layoutComponents"

import Check from "../../images/check.svg"
import { StaticImage } from "gatsby-plugin-image"

const Wrapper = styled.div`
  padding: 4em 0;
  background: ${props => `url(${props.img})`}, var(--clr-overlay);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: grid;
  place-items: center;
`

const Content = styled.div`
  padding: 2em 0;

  h2 {
    text-shadow: -3px 3px 3px #fff;
    color: var(--txt-dark);
  }
`

const FlexItem = styled.div`
  background: rgba(255, 255, 255, 0.8);
  box-shadow: var(--shadow-light);
  padding: 1em;
`

export default function ProductionBenefits(props) {
  return (
    <Wrapper img={props.img}>
      <Container>
        <Content className="spacing">
          <h2 className="title bold">
            primary <span className="italics accent">production benefits</span>{" "}
            of 3D fusion
          </h2>
          <Flex>
            <FlexItem className="spacing">
              <StaticImage
                src="../../images/3d-printing-process-physical.jpg"
                height={100}
              />
              <h3 className="body body--large caps bold">consistency</h3>
              <p>
                Combining 3D Fusion with 3D Printing elevates part consistency
                to Certifiable Standards.
              </p>
            </FlexItem>
            <FlexItem className="spacing">
              <StaticImage
                src="../../images/3d-printing-process-strong.jpg"
                height={100}
              />
              <h3 className="body body--large caps">enhanced strength</h3>
              <p>
                3D Fusion enhances part strength across all axis and fuses all
                as-built structures into one.
              </p>
            </FlexItem>
            <FlexItem className="spacing">
              <StaticImage
                src="../../images/3d-printing-process-work.jpg"
                height={100}
              />
              <h3 className="body body--large caps">air & watertight</h3>
              <p>
                3D Fusion creates airtight and watertight qualities among the 3D
                printed parts (verified in process).{" "}
              </p>
            </FlexItem>
          </Flex>
        </Content>
      </Container>
    </Wrapper>
  )
}
