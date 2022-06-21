import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Section, Container, Flex, GridAuto } from "./layoutComponents"

const ReviewCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2em;
  min-height: 600px;

  a {
    color: var(--txt-light);
  }

  &:nth-child(1) {
    background: url("../images/review-1.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    color: var(--txt-dark);
    text-shadow: -3px 3px 3px #fff;
  }
  &:nth-child(2) {
    background: url("../images/review-2.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    color: var(--txt-light);
    text-shadow: -3px 3px 3px #000;
  }
`

export default function Reviews() {
  return (
    <Section className="spacing">
      <h2 className="title center">customer reviews</h2>
      <Container className="spacing">
        <Flex>
          <ReviewCard>
            <p className="italics body--large">
              "My company and I have used 3D prints from here many times at this
              point. Always impressed by the professionalism and willingness to
              take the extra step. Great source of 3D printing experience if
              you're not familiar with the intricacies of designing using
              additive manufacturing."
            </p>
            <p className="bold body--small upper">NICHOLAS SIMIN</p>
          </ReviewCard>
          <ReviewCard>
            <p className="italics body--large">
              "I needed to develop a prosthetic foot that could be subjected to
              loads of 225 lbf for &gt;500k cycles. I tried to develop an
              exclusively 3D printed solution but the the FDM & SLA solutions
              regularly failed 50k cycles. The hybrid print & fill strategy Rob
              employs substantially increased the durability of the prosthetic.
              To underscore the durability of the final design of the
              prosthetics, some of the metallic components (bolts & spring
              steel) had to be replaced while the PLA/polyurethane components
              are still going strong (&gt;1M cycles)."
            </p>
            <p className="bold body--small upper">VINCENT CASTONGUAY-SIU</p>
          </ReviewCard>
        </Flex>
        <a
          href="https://www.google.com/search?q=3d+revolution+techonlogies&rlz=1C5CHFA_enCA662CA663&oq=3d+revolution+techonlogies&aqs=chrome..69i57.2541j0j7&sourceid=chrome&ie=UTF-8#lrd=0x53716e4812315555:0x17ea31937f1b282,1,,,"
          target="_popup"
        >
          Read more reviews &#8594;
        </a>
      </Container>
    </Section>
  )
}
