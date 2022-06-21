import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Section, Flex } from "../layoutComponents"
import { ButtonInline, ButtonPrimary } from "../buttons"

const Wrapper = styled.div`
  background: url("../images/accelerate-business-with-3d-printing.jpg"),
    rgba(255, 255, 255, 0.6);
  background-blend-mode: overlay;
  background-position: center;
  padding: 10em 0 4em 0;
  background-size: cover;
  background-repeat: no-repeat;
`

const List = styled.ul`
  margin: var(--spacer-md) 0;
  padding: 0;
  list-style-type: none;
  list-style-position: inside;
  li {
    font-size: var(--fs-3);
    font-weight: var(--fw-600);
    text-transform: capitalize;
    display: flex;
    align-items: center;
    margin-top: var(--spacer-sm);
    & > * + * {
      margin-left: 5px;
    }
  }
`

export default function Accelerate() {
  return (
    <Wrapper>
      <Section>
        <Container>
          <div>
            <div className="spacing-md">
              <h2 className="title bold">
                <span className="italics accent">accelerate</span> your business
                with 3D printing
              </h2>
              <p className="body--large bold">
                Our{" "}
                <ButtonInline to="/services/3d-printing">
                  3D printing services
                </ButtonInline>{" "}
                will...
              </p>
            </div>
            <Flex>
              <List>
                <li>
                  <StaticImage
                    src="../../images/icons/3d-printing-design-freedom.svg"
                    alt="calgary 3D printing increases design freedom"
                    placeholder="tracedSVG"
                    width={20}
                    height={20}
                  />
                  <span>increase design freedom</span>
                </li>
                <li>
                  <StaticImage
                    src="../../images/icons/3d-printing-product-value.svg"
                    alt="calgary 3D printing services improve product value"
                    placeholder="tracedSVG"
                    width={20}
                    height={20}
                  />
                  <span>increase product value</span>
                </li>
                <li>
                  <StaticImage
                    src="../../images/icons/3d-printing-production-rate.svg"
                    alt="3D printing calgary increases production rate"
                    placeholder="tracedSVG"
                    width={20}
                    height={20}
                  />
                  <span>increase throughput</span>
                </li>
                <li>
                  <StaticImage
                    src="../../images/icons/3d-printing-improve.svg"
                    alt="3D printing services calgary that improve infrastructure"
                    placeholder="tracedSVG"
                    width={20}
                    height={20}
                  />
                  <span>increase productivity</span>
                </li>
              </List>
              <List>
                <li>
                  <StaticImage
                    src="../../images/icons/3d-printing-reduce.svg"
                    alt="our 3D printing services will reduce your requirements"
                    placeholder="tracedSVG"
                    width={20}
                    height={20}
                  />
                  <span>reduce turnaround time</span>
                </li>
                <li>
                  <StaticImage
                    src="../../images/icons/3d-printing-reduce.svg"
                    alt="our 3D printing services will reduce your requirements"
                    placeholder="tracedSVG"
                    width={20}
                    height={20}
                  />
                  <span>reduce assembly cost</span>
                </li>
                <li>
                  <StaticImage
                    src="../../images/icons/3d-printing-reduce.svg"
                    alt="our 3D printing services will reduce your requirements"
                    placeholder="tracedSVG"
                    width={20}
                    height={20}
                  />
                  <span>reduce inventory</span>
                </li>
                <li>
                  <StaticImage
                    src="../../images/icons/3d-printing-mass-customization.svg"
                    alt="mass customization with calgary 3D printing company"
                    placeholder="tracedSVG"
                    width={20}
                    height={20}
                  />
                  <span>enable customization</span>
                </li>
              </List>
            </Flex>
            <ButtonPrimary to="/contact">talk to an expert</ButtonPrimary>
          </div>
        </Container>
      </Section>
    </Wrapper>
  )
}
