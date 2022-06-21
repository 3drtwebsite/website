import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { Container } from "../layoutComponents"
import { BannerWrapper, BannerText } from "./bannerItems"

export default function Banner(props) {
  return (
    <BannerWrapper img={props.img}>
      <Container>
        <BannerText className="spacing">
          <h2 className="title">{props.title}</h2>
          <ul>
            <li>benefit</li>
            <li>benefit</li>
          </ul>
        </BannerText>
      </Container>
    </BannerWrapper>
  )
}
