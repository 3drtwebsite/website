import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { Container, Actions } from "../layoutComponents"
import { BannerText } from "./bannerItems"
import { AnchorPrimary } from "../buttons"
import { BsArrowRight } from "react-icons/bs"

const BannerWrapper = styled.div`
  display: flex;
  justify-content: center;
  color: var(--txt-light);
  background: url("../../images/3d-printing-lambo.jpg"), rgba(28, 109, 208, 0.5);
  background-blend-mode: overlay;
  background-position: top;
  padding: 10em 0 4em 0;

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

export default function BannerContact(props) {
  return (
    <BannerWrapper>
      <Container className="spacing">
        <BannerText className="spacing">
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
          <p className="title bold">easily contact us</p>
          <p className="body--large">
            Start elevating your 3D printed parts to new levels of usabiltiy by
            getting in touch with our dedicated team.
          </p>
          <AnchorPrimary href="tel: 403-874-3131">403-874-3131</AnchorPrimary>
        </BannerText>
      </Container>
    </BannerWrapper>
  )
}
