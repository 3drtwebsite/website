import React from "react"
import { StaticImage } from "gatsby-plugin-image"
// import { Link } from "gatsby"
import styled from "styled-components"
import { Section, Container } from "./layoutComponents"

const device = {
  md: "48em",
}

const MaterialLink = styled.a`
  text-decoration: none;
  color: var(--txt-dark);

  &:hover {
    cursor: pointer;
    color: var(--txt-dark);
  }
`

const Flex = styled.div`
  display: flex;
  img {
    /* width: 100%; */
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

const Plastics = styled.div`
  background: url("../images/materials/plastic.jpg"), rgba(255, 255, 255, 0.5);
  background-blend-mode: overlay;
  background-position: center;
  padding: 4em 2em;
  background-size: contain;
  background-repeat: no-repeat;
`
const Composites = styled.div`
  background: url("../images/materials/composite.jpg"), rgba(255, 255, 255, 0.5);
  background-blend-mode: overlay;
  background-position: center;
  padding: 4em 2em;
  background-size: cover;
  background-repeat: no-repeat;
`
const Metals = styled.div`
  background: url("../images/materials/metal.jpg"), rgba(255, 255, 255, 0.5);
  background-blend-mode: overlay;
  background-position: center;
  padding: 4em 2em;
  background-size: cover;
  background-repeat: no-repeat;
`

const ImageStyle = {
  border: "4px solid #fff",
}

export default function MaterialsBanner2() {
  return (
    <Section>
      <Container className="spacing">
        <center className="">
          <h2 className="title">materials & 3D platforms</h2>
        </center>
        <MaterialLink
          href="https://www.3drtinc.com/services/3d-printing#plastic"
          target="_blank"
        >
          <Plastics className="spacing">
            <h3 className="title bold">
              standard plastics - thermoplastic filaments and photoreactive
              resins
            </h3>
            <p className="body--large">
              Thermoplastic filaments and photoreactive resins for
              cost-effective 3D modeling, design, and form-fit testing
              applications on FDM, SLA, SLs platforms.
            </p>
            <Flex>
              <p className="body--large">
                Platforms: <br /> FDM, SLA, SLS
              </p>

              <StaticImage
                src="../images/materials/plastic-2.jpg"
                alt="plastic printing"
                className="stretch"
                height={400}
                style={ImageStyle}
              />
            </Flex>
          </Plastics>
        </MaterialLink>
        <MaterialLink
          href="https://www.3drtinc.com/services/3d-printing#composite"
          target="_blank"
        >
          <Composites className="spacing">
            <h3 className="title bold">
              composites - continuous fiber and engineered plastics
            </h3>
            <p className="body--large">
              Continuous fiber and engineered composites for 3D parts that are
              required to have dimensional stability, strength, and stiffness on
              CFF, FDM, SLA, SLS platforms.
            </p>
            <Flex>
              <p className="body--large">
                Platforms: <br /> CFF, FDM, SLA, SLS
              </p>
              <StaticImage
                src="../images/materials/composite-2.jpg"
                alt="composite printing"
                className="stretch"
                height={400}
                style={ImageStyle}
              />
            </Flex>
          </Composites>
        </MaterialLink>
        <MaterialLink
          href="https://www.3drtinc.com/services/3d-printing#metal"
          target="_blank"
        >
          <Metals className="spacing">
            <h3 className="title bold">metals and alloys</h3>
            <p className="body--large">
              For 3D parts that must be strong and functional with specific
              attributes only found in metals and alloys. Using ADM, DMP
              platforms.
            </p>
            <Flex>
              <p className="body--large">
                Platforms: <br /> ADM, DMP
              </p>
              <StaticImage
                src="../images/materials/metal-2.jpg"
                alt="plastic printing"
                className="stretch"
                height={400}
                style={ImageStyle}
              />
            </Flex>
          </Metals>
        </MaterialLink>
      </Container>
    </Section>
  )
}
