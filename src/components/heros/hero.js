import React from "react"
import styled from "styled-components"
import { Flex, Actions } from "../layoutComponents"
import { ButtonPrimary, ButtonSecondaryDark } from "../buttons"
import { BsArrowRight } from "react-icons/bs"

import HeroImg from "../../images/ph.png"

const device = {
  md: "43em",
}

const HeroWrapper = styled.div`
  padding: 4em 0;
  display: grid;
  grid-template-columns: 1fr 8em 8em 1fr;

  @media screen and (max-width: ${device.md}) {
    grid-template-rows: auto auto;
    padding: 0;
  }
`

const Text = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: ${device.md}) {
    padding-top: 1em;
    grid-column: 1 / -1;
    grid-row: 2 / -1;
  }
  p {
    text-transform: capitalize;
    color: var(--txt-dark-secondary);

    @media screen and (max-width: ${device.md}) {
      display: none;
    }
  }
  /* emulate container using only margin-left auto */
  width: 85%;
  margin: auto;
  max-width: 65rem;
  /* @media screen and (max-width: ${device.md}) {
    margin-right: auto;
  } */
`

const ImgWrapper = styled.div`
  grid-column: 2 / -1;
  grid-row: 1 / -1;
  z-index: -1;
  position: relative;

  @media screen and (max-width: ${device.md}) {
    grid-row: span 1;
    grid-column: 1 / -1;
  }

  > img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`

export default function HeroBasic() {
  return (
    <HeroWrapper>
      <Text className="spacing">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
          quam.
        </p>
        <h1 className="title bold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum,
          voluptates!
        </h1>
        <Actions>
          <ButtonSecondaryDark to="/">secondary</ButtonSecondaryDark>
          <ButtonPrimary to="/">primary</ButtonPrimary>
        </Actions>
      </Text>
      <ImgWrapper>
        <img src={HeroImg} alt="" />
      </ImgWrapper>
    </HeroWrapper>
  )
}
