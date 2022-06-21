import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Section, Container } from "../layoutComponents"
import { ButtonSecondary, ButtonInline } from "../buttons"
import { MdDesignServices, MdAttachMoney, MdSpeed } from "react-icons/md"
import { BiBuilding } from "react-icons/bi"
import { FiMinimize2 } from "react-icons/fi"
import { BsGraphUp } from "react-icons/fi"
import Ph from "../../images/ph.png"

const device = {
  md: "48em",
}

const Flex = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: ${device.md}) {
    .img {
      display: none;
    }
  }

  & > * {
    width: 100%;
  }

  & > * + * {
    margin-left: 2em;

    @media screen and (max-width: ${device.md}) {
      margin-left: 0;
      margin-top: var(--spacer);
    }
  }
`

const List = styled.ul`
  margin: var(--spacer-md) 0;
  padding: 0;
  list-style-type: none;
  list-style-position: inside;
  li {
    text-transform: capitalize;
    display: flex;
    align-items: center;
    margin-top: var(--spacer-sm);
    & > * + * {
      margin-left: 5px;
    }
  }
`

export default function PrintingBenefits() {
  return (
    <Section>
      <Container>
        <Flex>
          <div>
            <div className="spacing-md">
              <h2 className="title">
                <span className="italics accent">accelerate</span> your business
                with 3D printing
              </h2>
              <p className="heading">
                Our{" "}
                <ButtonInline to="/services/3d-printing">
                  3D printing services
                </ButtonInline>{" "}
                will...
              </p>
            </div>
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
            <ButtonSecondary to="/contact">talk to an expert</ButtonSecondary>
          </div>
          <StaticImage
            className="stretch img"
            src="../../images/accelerate-business-with-3d-printing.jpg"
            alt="our 3D printing services will accelerate your business"
            objectFit="cover"
          />
        </Flex>
      </Container>
    </Section>
  )
}
