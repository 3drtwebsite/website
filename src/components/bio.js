import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Section, Container, Flex } from "./layoutComponents"
import { ButtonSecondary, ButtonInline } from "./buttons"

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

  @media screen and (max-width: 21.5em) {
    li {
      align-items: flex-start;
    }
  }
`

const ImgWrapper = styled.div`
  img {
    object-fit: cover;
    height: 350px;
  }

  p {
    margin-bottom: 0;
  }
`

export default function Bio(props) {
  return (
    <Section>
      <Container>
        <Flex>
          <div className="spacing">
            <div className="spacing">
              <h1 className="title">{props.textPrimary}</h1>
              <p>
                3’D Revolution Technologies provides{" "}
                <ButtonInline to="/services/3d-printing">
                  3D Printing & Design
                </ButtonInline>
                ,{" "}
                <ButtonInline to="/services/3d-fusion">
                  3D Fusion Manufacturing
                </ButtonInline>
                , digital production consulting, and technology sales. We
                recognize that the Third Industrial Revolution, which began with
                the digital age, is accelerating and we want to assist others in
                their efforts to engage and embrace the technologies currently
                redefining the industrial landscape. We believe these
                technologies offer abundant opportunity for sustainable,
                distributed, and democratic growth.
              </p>
            </div>
            <List className="spacing-sm">
              <li className="caps">
                <StaticImage
                  src="../images/check.svg"
                  alt="calgary 3D printing increases design freedom"
                  placeholder="tracedSVG"
                  width={20}
                  height={20}
                />
                <span>{props.li1}</span>
              </li>
              <li className="caps">
                <StaticImage
                  src="../images/check.svg"
                  alt="calgary 3D printing increases design freedom"
                  placeholder="tracedSVG"
                  width={20}
                  height={20}
                />
                <span>{props.li2}</span>
              </li>
              <li className="caps">
                <StaticImage
                  src="../images/check.svg"
                  alt="calgary 3D printing increases product value"
                  placeholder="tracedSVG"
                  width={20}
                  height={20}
                />
                <span>{props.li3}</span>
              </li>
              <li className="caps">
                <StaticImage
                  src="../images/check.svg"
                  alt="calgary 3D printing increases production rates"
                  placeholder="tracedSVG"
                  width={20}
                  height={20}
                />
                <span>{props.li4}</span>
              </li>
              <li className="caps">
                <StaticImage
                  src="../images/check.svg"
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
          <ImgWrapper className="spacing">
            <img src={props.img} alt={props.alt} className="" />
            <div>
              <p className="bold italics upper">rob thiessen</p>
              <p className="italics upper body--small">
                president of 3'D revolution technologies Inc
              </p>
            </div>
          </ImgWrapper>
        </Flex>
      </Container>
    </Section>
  )
}
