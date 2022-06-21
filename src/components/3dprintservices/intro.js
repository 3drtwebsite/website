import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { ButtonSecondary } from "../buttons"
import { Container, Section } from "../layoutComponents"

export default function Intro() {
  return (
    <Section>
      <Container className="spacing">
        <h1 className="title">3D Printing Calgary</h1>
        <StaticImage
          src="../../images/3d-printing-calgary.png"
          alt="3D printing Calgary"
        />
        <p>
          3'D Revolution Technologies offers an extensive list of affordable 3D
          printing services Calgary. We've also developed some of our own
          innovative processes to help you Make It Real!
        </p>
        <p>
          Our 3D printing services include Rapid Prototyping and Production
          printing on FDM, ADM, CFF, CJP, DMP, MJP, SLA, SLS printer platforms.
        </p>
        <ButtonSecondary to="/contact">talk to an expert</ButtonSecondary>
      </Container>
    </Section>
  )
}
