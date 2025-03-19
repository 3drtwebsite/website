import React from "react"
import styled from "styled-components"
import { ButtonPrimary, ButtonSecondaryLight } from "../buttons"
import "bootstrap/dist/css/bootstrap.min.css"
import videoSrc from "../videos/BackgroundVideo_3DRT.mp4"
import { Link } from "gatsby"

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
  padding: 2rem;
  color: #fff;
  text-shadow: -2px 2px 4px rgba(0, 0, 0, 0.7);
  background: rgba(0, 0, 0, 0.3);
`

const HeroTitle = styled.h1`
  font-size: var(--fs-title);
  margin-bottom: 1rem;
  text-transform: uppercase;
`

const HeroSubtitle = styled.p`
  font-size: var(--fs-3);
  margin-bottom: 1.5rem;
  text-transform: uppercase;
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
        <HeroTitle>Step into the Third Industrial Revolution</HeroTitle>
        <HeroSubtitle>
        Empower your vision with advanced 3D printing, fusion manufacturing, and digital consulting and unlocking limitless 
        design freedom and streamlined production for a sustainable, innovative future. Share your vision with us.
        </HeroSubtitle>
        <div style={{ display: "flex", gap: "1rem" }}>
        <ButtonPrimary as={Link} to="/contact">Contact Us</ButtonPrimary>
        <ButtonSecondaryLight as="a" href="tel:403-874-3131">Call Us</ButtonSecondaryLight>
        </div>
      </Overlay>
    </Wrapper>
  )
}