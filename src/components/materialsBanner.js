import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import styled from "styled-components"
import { Section, Container } from "./layoutComponents"

const device = {
  md: "48em",
}

const MaterialLink = styled.a`
  text-decoration: none;
  color: var(--txt-dark);
  background: var(--clr-light);
  box-shadow: var(--shadow-light-accent);

  &:hover {
    cursor: pointer;
  }
`

const Flex = styled.div`
  display: flex;
  align-items: center;
  img {
    /* width: 100%; */
  }
  @media screen and (max-width: ${device.md}) {
    flex-direction: column;
  }

  & > * {
    width: 100%;
  }
`

const Text = styled.div`
  padding: 2em;
`

export default function MaterialsBanner() {
  return (
    <Section>
      <Container className="spacing-lg">
        <center className="">
          <h2 className="title">materials & 3D platforms</h2>
          <hr className="accent" />
        </center>

        <MaterialLink
          href="https://www.3drtinc.com/services/3d-printing#plastic"
          target="_blank"
          className="spacing"
        >
          <Flex>
            <StaticImage
              src="../images/materials/plastic.jpg"
              alt="plastic printing"
              className="stretch"
            />
            <StaticImage
              src="../images/materials/plastic-2.jpg"
              alt="plastic printing"
              className="stretch"
            />
          </Flex>

          <Text className="spacing">
            <h3 className="body--large bold">plastics</h3>
            <p>
              Thermoplastic filaments and photoreactive resins for
              cost-effective 3D modeling, design, and form-fit testing
              applications on FDM, SLA, SLs platforms.
            </p>
          </Text>
        </MaterialLink>
        <MaterialLink
          href="https://www.3drtinc.com/services/3d-printing#composite"
          target="_blank"
          className="spacing"
        >
          <Flex>
            <StaticImage
              src="../images/materials/composite.jpg"
              alt="composite printing"
              className="stretch"
            />
            <StaticImage
              src="../images/materials/composite-2.jpg"
              alt="composite printing"
              className="stretch"
            />
          </Flex>
          <Text className="spacing">
            <h3 className="body--large bold">composites</h3>
            <p>
              Continuous fiber and engineered composites for 3D parts that are
              required to have dimensional stability, strength, and stiffness on
              CFF, FDM, SLA, SLS platforms.
            </p>
          </Text>
        </MaterialLink>
        <MaterialLink
          href="https://www.3drtinc.com/services/3d-printing#metal"
          target="_blank"
          className="spacing"
        >
          <Flex>
            <StaticImage
              src="../images/materials/metal.jpg"
              alt="metal printing"
              className="stretch"
            />
            <StaticImage
              src="../images/materials/metal-2.jpg"
              alt="metal printing"
              className="stretch"
            />
          </Flex>
          <Text className="spacing">
            <h3 className="body--large bold">metals</h3>
            <p>
              For 3D parts that must be strong and functional with specific
              attributes only found in metals and alloys. Using ADM, DMP
              platforms.
            </p>
          </Text>
        </MaterialLink>
      </Container>
    </Section>
  )
}
