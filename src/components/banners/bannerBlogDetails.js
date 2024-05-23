import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { Container } from "../layoutComponents"
import * as styles from '../../styles/blog-details.module.css';

const Breadcrumb = styled.div`
  margin-bottom: 0;
  padding-bottom: 0;
`

const BannerText = styled.div`
  width: 100%;
  p {
    color: var(--txt-light);
  }
  h1,
  h2,
  h3 {
    line-height: 1.1;
  }

  ul {
    padding: 0;
    margin: var(--spacer) 0;
    list-style-type: none;
    li {
      font-size: var(--fs-sm);
      text-transform: uppercase;

      &::before {
        content: "✓";
        color: var(--clr-accent);
        font-size: 1.2em;
        margin-right: 0.8rem;
      }
    }
  }
`

const BannerWrapper = styled.div`
  display: flex;
  justify-content: center;
  color: var(--txt-dark);
  background: ${props => `url(${props.img})`};
  background-position: center;
  padding: 10em 0 0 0;

  background-size: cover;
  background-repeat: no-repeat;
`

const BreadcrumbLink = styled(props => <Link {...props} />)`
  display: inline-block;
  color: var(--txt-dark);
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
    <BannerWrapper>
      <Container className="spacing">
        <BannerText className="spacing">
          <div>
            <Breadcrumb>
              <BreadcrumbLink to={props.breadCrumbLink1}>
                {props.breadCrumb1}
              </BreadcrumbLink>
              {/* {'>'}
              <BreadcrumbLink to={props.breadCrumbLink2}>
                {props.breadCrumb2}
              </BreadcrumbLink> */}
            </Breadcrumb>
            <hr class={styles.hrTag} />
          </div>
        </BannerText>
      </Container>
    </BannerWrapper>
  )
}
