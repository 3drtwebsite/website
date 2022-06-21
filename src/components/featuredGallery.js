import React from "react"
import { Section, Container, Flex } from "./layoutComponents"
import Ph from "../images/ph2.png"

export default function FeaturedGallery() {
  return (
    <Section>
      <Container>
        <h2 className="title">
          <span className="italics accent">digital manufacturing</span> with 3D
          printing and 3D fusion
        </h2>
        <Flex>
          <div>
            <img src={Ph} alt="" />
            <p>3D printing</p>
          </div>
          <div>
            <img src={Ph} alt="" />
            <p>3D design</p>
          </div>
          <div>
            <img src={Ph} alt="" />
            <p>3D fusion</p>
          </div>
        </Flex>
      </Container>
    </Section>
  )
}
