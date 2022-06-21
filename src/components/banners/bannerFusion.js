import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { Container, Actions } from "../layoutComponents"
import { BannerText } from "./bannerItems"
import {
  ButtonPrimary,
  ButtonSecondaryLight,
  ButtonUnderline,
} from "../buttons"
import { BsArrowRight } from "react-icons/bs"

const BannerWrapper = styled.div`
  display: flex;
  justify-content: center;
  color: var(--txt-light);
  background: ${props => `url(${props.img})`};
  background-position: center;
  padding: 12em 0 4em 0;

  background-size: cover;
  background-repeat: no-repeat;
`

const Breadcrumb = styled.div`
  margin-bottom: 0;
  padding-bottom: 0;
`

const BreadcrumbLink = styled(props => <Link {...props} />)`
  display: inline-block;
  color: var(--txt-light);
  font-weight: var(--fw-600);
  text-decoration: none;
  margin: 0 0.5em 0 0.5em;

  &:nth-child(1) {
    margin-left: 0;
  }

  &:hover {
    cursor: pointer;
    color: var(--clr-accent);
  }
`

const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin-left: 0;
  li {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-weight: var(--fw-500);

    &::before {
      content: url("../../../images/check.svg");
      margin-right: 0.2em;
    }
  }
`

export default function BannerFusion(props) {
  return (
    <BannerWrapper img={props.img}>
      <Container className="spacing">
        <BannerText className="spacing">
          <div>
            <Breadcrumb>
              <BreadcrumbLink to={props.breadCrumbLink1}>
                {props.breadCrumb1}
              </BreadcrumbLink>
              >
              <BreadcrumbLink to={props.breadCrumbLink2}>
                {props.breadCrumb2}
              </BreadcrumbLink>
              >
              <BreadcrumbLink to={props.breadCrumbLink3}>
                {props.breadCrumb3}
              </BreadcrumbLink>
            </Breadcrumb>
            <hr />
            <p className="title bold">3D fusion</p>
            <p className="body--large">
              3D Fusion is a novel additive manufacturing method used to improve
              the isotropic strength, quality, and structural consistency of
              as-built 3D printed parts.
            </p>
          </div>
          <ButtonPrimary to={props.to}>
            <div>
              {props.buttonText} <BsArrowRight size={22} />{" "}
            </div>
          </ButtonPrimary>
        </BannerText>
      </Container>
    </BannerWrapper>
  )
}
