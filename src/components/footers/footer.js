import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { Info } from "../info"
import { Container } from "../layoutComponents"
import { ButtonInline } from "../buttons"

import { FaPhoneAlt, FaRegClock } from "react-icons/fa"
import { SiMailDotRu } from "react-icons/si"
import { IoLocationSharp } from "react-icons/io5"

import Logo from "../../images/logo.svg"
import AaronTonnerWebSolutionsLogo from "../../images/aaron-tonner-web-solutions-logo.svg"
import Facebook from "../../images/socials/facebook.svg"
import Instagram from "../../images/socials/instagram.svg"
import Twitter from "../../images/socials/twitter.svg"
import Linkedin from "../../images/socials/linkedin.svg"
import Youtube from "../../images/socials/youtube.svg"
import CalgaryBestRated from "../../images/CalgaryBestRatedLogo_Red.png"

const device = {
  sm: "43em",
  md: "48em",
  lg: "57em",
}

const FooterWrapper = styled.footer`
  padding: 4em 0 1em 0;
  background: var(--clr-light-secondary);
  color: var(--txt-dark);
`

export const Flex = styled.div`
  display: flex;
  img {
    width: 100%;
  }
  @media screen and (max-width: ${device.md}) {
    flex-direction: column;
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

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 500px;
  }
`

const Socials = styled.div`
  display: flex;
  & > * + * {
    margin-left: 15px;
  }
  div {
    display: flex;
    & > * + * {
      margin-left: 5px;
    }
  }
  img {
    width: 25px;
  }
`

const FlexContact = styled.div`
  display: flex;
  align-items: center;
  & > * + * {
    margin-left: 5px;
  }
  a {
    color: var(--clr-accent);
    text-decoration: none;
  }
  p {
    margin-bottom: 0;
  }
`

const FlexItem = styled.div`
  ul {
    list-style-type: none;
    padding: 0;
    margin: var(--spacer) 0;
    li {
      a {
        color: var(--txt-dark);
        font-weight: var(--fw-500);
      }
    }
  }
  .calgary-best-badge {
    width: 100px;
    padding-top: 15px;"
  }
`

const Copyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  @media screen and (max-width: ${device.lg}) {
    flex-direction: column;
    align-items: flex-start;
  }
  ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
    @media screen and (max-width: ${device.md}) {
      flex-direction: column;
    }
    & > * + * {
      margin-left: 1em;
      @media screen and (max-width: ${device.md}) {
        margin-left: 0;
      }
    }
    li {
      a {
        text-transform: capitalize;
        color: var(--txt-dark);
        font-weight: var(--fw-500);
      }
    }
  }
`

const StyledLink = styled(props => <Link {...props} />)`
  text-transform: capitalize;
  color: var(--txt-dark);
  font-weight: var(--fw-400);
  &:hover,
  &:focus {
    cursor: pointer;
    opacity: 0.7;
  }
`

const Author = styled.div`
  color: var(--txt-dark-secondary);
  div {
    display: flex;
    gap: 0.5em;
    justify-content: flex-end;
    align-items: center;
    text-align: right;
  }
  a {
    display: inline;
    color: var(--txt-dark-secondary);
  }
  img {
    width: 250px;
  }
`

export default function Footer() {
  return (
    <div className="spacing-lg">
      <FooterWrapper className="spacing">
        <Container className="spacing-lg">
          <LogoContainer>
            <img src={Logo} alt="" />
          </LogoContainer>
          <hr />
          <Flex>
            <FlexItem>
              <p className="heading">contact us</p>
              <ul>
                <li>
                  <FlexContact>
                    <a href="tel: 403-874-3131">{Info.tel1}</a>
                  </FlexContact>
                </li>
                <li>
                  <FlexContact>
                    <a href="mailto: info@3drtinc.com">{Info.mail1}</a>
                  </FlexContact>
                </li>
                <li>
                  <FlexContact>
                    <p>{Info.hours}</p>
                  </FlexContact>
                </li>
              </ul>
              <ul>
                <li>{Info.street1}</li>
                <li>{Info.city1}</li>
                <li>Canada</li>
              </ul>
              <Socials>
                <div>
                  <a
                    target="black"
                    href="https://www.facebook.com/3D-Revolution-Technologies-Inc-727291710761198/"
                  >
                    <img
                      src={Facebook}
                      alt="3'D revolution technologies - 3d printing services in calgary"
                    />
                  </a>
                  <a
                    target="blank"
                    href="https://ca.linkedin.com/in/rob-thiessen-9619484?challengeId=AQGMUZPaOsPYoQAAAX_Su4HbwqhkjFdTDQ5V28jcKKu9goqmuyFO52L8CihDRE0UiwLGrZ6H-ekUcHoWt35XzutC0A7S5F6mKw&submissionId=58cb0091-45ad-e016-926c-7efcaeeb6234"
                  >
                    <img
                      src={Linkedin}
                      alt="3'D revolution technologies - 3d printing company calgary"
                    />
                  </a>
                </div>
              </Socials>
              <div class="calgary-best-badge">
                <a target="blank" href="https://calgarybestrated.com/best-3d-printing-in-calgary/">
                <img src={CalgaryBestRated} alt="Calgary's Best Rated Log Badge Red" />
                </a>
              </div>
            </FlexItem>
            <FlexItem>
              <p className="heading">quick links</p>
              <ul>
                <li>
                  <StyledLink to="/">home</StyledLink>
                </li>

                <li>
                  <StyledLink to="/services">services</StyledLink>
                </li>
                <li>
                  <StyledLink to="/services/3d-printing">
                    3D printing
                  </StyledLink>
                </li>
                <li>
                  <StyledLink to="/services/3d-fusion">3D fusion</StyledLink>
                </li>
                <li>
                  <StyledLink to="/gallery">gallery</StyledLink>
                </li>
                <li>
                  <StyledLink to="/about">about</StyledLink>
                </li>
                <li>
                  <StyledLink to="/contact">contact</StyledLink>
                </li>
              </ul>
            </FlexItem>
            <FlexItem className="spacing">
              <p className="heading">about us</p>
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
                redefining the industrial landscape.
              </p>
            </FlexItem>
          </Flex>
          <hr />
          <Copyright>
            <ul>
              <li>Copyright&#169; 2022</li>
              <li>{Info.name}</li>
              <li>All Rights Reserved</li>
              <li>
                <a target="blank" href="https://www.3drtinc.com/terms-of-use">
                  Terms of use
                </a>
              </li>
              <li>
                <a target="blank" href="https://www.3drtinc.com/privacy-policy">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </Copyright>
          <hr />
        </Container>
        <Author>
          <Container>
            <div>
              <p>website by: </p>
              <a target="blank" href="https://www.aarontonner.com">
                <img src={AaronTonnerWebSolutionsLogo} alt="" />
              </a>
            </div>
          </Container>
        </Author>
      </FooterWrapper>
    </div>
  )
}
