import React from "react"
import styled from "styled-components"
// import { ButtonPrimary, ButtonSecondaryLight } from "../buttons"
// import { Actions } from "../layoutComponents"
// import { StaticImage } from "gatsby-plugin-image"
import "bootstrap/dist/css/bootstrap.min.css"
import { Carousel } from "react-bootstrap"
// import { Autoplay } from "swiper"

const Wrapper = styled.div`
  padding-bottom: 4em;
  p {
    margin-bottom: 0;
  }

  video {
    height: 500px;
    object-fit: cover;
  }
`

const Content = styled.div`
  position: relative;

  &:before {
    content: "";
    position: absolute;
    background: rgba(0, 0, 0, 0.1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`

const Content1 = styled.div`
  background: url("../../images/slider-1.jpg");
  /* background-blend-mode: overlay; */
  background-position: center;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
`
const Content2 = styled.div`
  background: url("../../images/slider-2.jpg");
  /* background-blend-mode: overlay; */
  background-position: center;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
`
const Content3 = styled.div`
  background: url("../../images/slider-3.jpg");
  /* background-blend-mode: overlay; */
  background-position: center;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
`

const HeroTitle = styled.h2`
  font-size: var(--fs-title);
`

const CaptionInner = styled.div`
  // background: rgba(0, 0, 0, 0.3);
  // padding: 1em;
  // border-radius: var(--br);
`

const captionStyle = {
  textAlign: "left",
  display: "flex",
  alignItems: "center",
  height: "90%",
  left: "12%",
  color: "var(--txt-light)",
  textShadow: "-3px 3px 3px #000000",
  fontSize: "var(--fs-3)",
}

export default function HeroSlider(props) {
  return (
    <Wrapper>
      <Carousel>
        <Carousel.Item interval={5000}>
          <Content>
            <Content1 className="d-block w-100" />
          </Content>
          <Carousel.Caption style={captionStyle} className="spacing">
            <div>
              <HeroTitle className="upper">3D Printing</HeroTitle>
              <p className="upper">
                Our in-house rapid prototyping and digital production
                capabilities are ready to meet your unique manufacturing
                challenges!
              </p>
              <hr />
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <Content>
            <Content2 className="d-block w-100" />
          </Content>
          <Carousel.Caption style={captionStyle} className="spacing">
            <div>
              <HeroTitle className="upper">Digital Design</HeroTitle>
              <p className="upper">
                We specialize in Design for Additive Manufacturing (DFAM), and
                optimizing geometries for 3D print and digital production.
              </p>
              <hr />
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <Content>
            <Content3 className="d-block w-100" />
          </Content>
          <Carousel.Caption style={captionStyle} className="spacing">
            <CaptionInner>
              <HeroTitle className="upper">3D Fusion Manufacturing</HeroTitle>
              <p className="upper">
                Combined with 3D Printing, 3D Fusion Manufacturing opens doors
                to cost effective, scalable, just-in-time production!
              </p>{" "}
              <hr />
            </CaptionInner>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Wrapper>
  )
}
