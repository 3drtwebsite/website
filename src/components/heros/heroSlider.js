import React from "react"
import styled from "styled-components"
import { ButtonPrimary, ButtonSecondaryLight } from "../buttons"
import "bootstrap/dist/css/bootstrap.min.css"
import videoSrc from "../videos/BackgroundVideo_3DRT.mp4"
import { Link } from "gatsby"

import CanadaFlag from "../../images/canada.png"

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: 70vh;
  overflow: hidden;
`

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`

const Overlay = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 8rem 2rem 2rem 2rem;
  color: #fff;
  background: rgba(0, 0, 0, 0.3);
    text-shadow: -3px 3px 3px #000000;
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

const HeroTitle = styled.h1`
  font-size: var(--fs-title);
  margin-bottom: 0rem;
`

const HeroUndertitle = styled.h1`
  font-size: var(--fs-2);
  margin-bottom: 1rem;
`

const HeroSubtitle = styled.p`
  font-size: var(--fs-3);
  margin-bottom: 1.5rem;
`

export default function HeroSlider() {
  return (
    <Wrapper>
      <VideoBackground
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>
      <Overlay>
        <HeroTitle>Step into the Third Industrial Revolution!</HeroTitle>
        <HeroUndertitle>Advanced 3D Printing, Digital Design, and 3D Fusion Manufacturing</HeroUndertitle>
        <HeroSubtitle>
        Want to build a functional prototype or replacement part?  ...We can help with that!
        <br></br> 
        Want to make it real in Canada? ...We make everything in Canada! 
        </HeroSubtitle>
        <img src={CanadaFlag} alt="Canadian Flag" style={{ width: "3.8em", height: "2.2em", marginBottom: "1.5rem"}}/>
        <div style={{ display: "flex", gap: "1rem" }}>
        <ButtonPrimary as={Link} to="/contact">Contact Us</ButtonPrimary>
        <ButtonSecondaryLight as="a" href="tel:403-874-3131">Call Us</ButtonSecondaryLight>
        </div>
      </Overlay>
    </Wrapper>
  )
}