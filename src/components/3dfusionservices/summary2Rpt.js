import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import {
  Section,
  Container,
  Flex,
  FlexMobileOpp,
  Actions,
} from "../layoutComponents"
import { ButtonSecondary, ButtonInline } from "../buttons"
import BeforeAfter from "./beforeAfter"

export default function Summary2Rpt() {
  return (
    <Section>
      <Container className="spacing">
        <h2 className="title center bold">3D fusion</h2>
        <Flex>
          <StaticImage
            className="stretch"
            src="../../images/3d-fusion-bike.jpg"
            alt="3D fusion summary"
            objectFit="cover"
          />
          <div>
            <h3 className="bold italics upper accent">
              elevating 3d printed parts
            </h3>
            <p>
              3D Fusion is a novel additive manufacturing method used to improve
              the isotropic strength, quality, and structural consistency of
              as-built 3D printed parts.
            </p>
          </div>
        </Flex>
        <FlexMobileOpp>
          <div>
            <h3 className="bold italics upper accent">
              expanding commercial use of 3d printing
            </h3>

            <p>
              So why alter or process 3D parts after they’ve been printed?
              Because as-built 3D printed parts typically suffer from 3 common
              drawbacks…
            </p>
            <ul>
              <li>Lack of (isotropic) strength </li>
              <li>Pourosity and inherent inconsistencie</li>
              <li>Issues with (economically) scaling production</li>
            </ul>
          </div>
          <StaticImage
            className="stretch"
            src="../../images/3d-fusion-lack-strength.jpg"
            alt="3D fusion summary"
            objectFit="cover"
          />
        </FlexMobileOpp>
        <Flex>
          <StaticImage
            className="stretch"
            src="../../images/3d-fusion-functional-parts.jpg"
            alt="3D fusion summary"
            objectFit="cover"
          />
          <div>
            <h3 className="bold italics upper accent">
              sustainable manufacturing, unlimited possibilities
            </h3>
            <p>3D Fusion primary benefits include:</p>
            <ul>
              <li>Dramatically enhanced part strength across all axis</li>
              <li>
                Air and Watertight qualities (verified in 3D Fusion process)
              </li>
              <li>
                Scalable, economic, digital production with elevated part
                consistency (Certifiable Standards)
              </li>
            </ul>
          </div>
        </Flex>
        <BeforeAfter />
        <Actions>
          <ButtonSecondary to="/services/3d-fusion">
            learn more about 3D fusion &#8594;
          </ButtonSecondary>
        </Actions>
      </Container>
    </Section>
  )
}
