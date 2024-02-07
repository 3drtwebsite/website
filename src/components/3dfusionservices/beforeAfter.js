import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
// import { Section, Container } from "../layoutComponents"

const device = {
  md: "48em",
}

const Flex = styled.div`
  display: flex;

  @media screen and (max-width: ${device.md}) {
    flex-direction: column;
  }
`

export default function BeforeAfter() {
  return (
    <div className="spacing">
      <div>
        <h2>Before using 3D Fusion</h2>
        <Flex>
          <StaticImage
            src="../../images/before-3d-fusion-1.jpg"
            alt="before 3D fusion"
            className="stretch"
          />
          <StaticImage
            src="../../images/before-3d-fusion-2.jpg"
            alt="before 3D fusion"
            className="stretch"
          />
        </Flex>
      </div>
      <div>
        <h2>After using 3D Fusion</h2>
        <Flex>
          <StaticImage
            src="../../images/after-3d-fusion-1.jpg"
            alt="after 3D fusion"
            className="stretch"
          />
          <StaticImage
            src="../../images/after-3d-fusion-2.jpg"
            alt="after 3D fusion"
            className="stretch"
          />
        </Flex>
      </div>
    </div>
  )
}
