import React from "react"
import styled from "styled-components"
import { ButtonPrimary, ButtonSecondaryLight } from "../buttons"
import "bootstrap/dist/css/bootstrap.min.css"
import videoSrc from "../videos/BackgroundVideo_3DRT.mp4"

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
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
        <HeroTitle>3D Printing</HeroTitle>
        <HeroSubtitle>
          Our in-house rapid prototyping and digital production capabilities are
          ready to meet your unique manufacturing challenges!
        </HeroSubtitle>
        <div style={{ display: "flex", gap: "1rem" }}>
          <ButtonPrimary>Form Button</ButtonPrimary>
          <ButtonSecondaryLight>Phone Button</ButtonSecondaryLight>
        </div>
      </Overlay>
    </Wrapper>
  )
}