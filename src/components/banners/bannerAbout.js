import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { Container, Actions } from "../layoutComponents"
import { BannerWrapper, BannerText } from "./bannerItems"
import { ButtonPrimary, ButtonSecondary, ButtonUnderline } from "../buttons"
import { BsArrowRight } from "react-icons/bs"

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

export default function BannerAbout(props) {
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
            </Breadcrumb>
            <hr />
            <p className="title bold">{props.textPrimary}</p>
          </div>
          <p className="body--large">{props.textSecondary}</p>
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
