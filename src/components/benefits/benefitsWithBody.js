import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Section, Container, Flex } from "../layoutComponents"
import { ButtonSecondary } from "../buttons"

const List = styled.ul`
  margin: var(--spacer) 0;
  padding: 0;
  list-style-type: none;
  list-style-position: inside;
  li {
    display: flex;
    align-items: center;

    & > * + * {
      margin-left: 5px;
    }
  }

  @media screen and (max-width: 29em) {
    li {
      align-items: flex-start;
    }
  }
`

export default function BenefitsWithBody(props) {
  return (
    <Section>
      <Container>
        <Flex>
          <div className="spacing">
            <div className="spacing">
              <h2 className="title">{props.textPrimary}</h2>
              <p>{props.textSecondary}</p>
            </div>
            <List className="spacing-sm">
              <li className="caps">
                <StaticImage
                  src="../../images/check.svg"
                  alt="calgary 3D printing increases design freedom"
                  placeholder="tracedSVG"
                  width={20}
                  height={20}
                />
                <span>{props.li1}</span>
              </li>
              <li className="caps">
                <StaticImage
                  src="../../images/check.svg"
                  alt="calgary 3D printing increases design freedom"
                  placeholder="tracedSVG"
                  width={20}
                  height={20}
                />
                <span>{props.li2}</span>
              </li>
              <li className="caps">
                <StaticImage
                  src="../../images/check.svg"
                  alt="calgary 3D printing increases product value"
                  placeholder="tracedSVG"
                  width={20}
                  height={20}
                />
                <span>{props.li3}</span>
              </li>
              <li className="caps">
                <StaticImage
                  src="../../images/check.svg"
                  alt="calgary 3D printing increases production rates"
                  placeholder="tracedSVG"
                  width={20}
                  height={20}
                />
                <span>{props.li4}</span>
              </li>
              <li className="caps">
                <StaticImage
                  src="../../images/check.svg"
                  alt="calgary 3D printing enables mass customization"
                  placeholder="tracedSVG"
                  width={20}
                  height={20}
                />
                <span>{props.li5}</span>
              </li>
            </List>
            <ButtonSecondary to={props.to}>{props.buttonText}</ButtonSecondary>
          </div>
          <div>
            <img src={props.img} alt={props.alt} className="stretch" />
          </div>
        </Flex>
      </Container>
    </Section>
  )
}
