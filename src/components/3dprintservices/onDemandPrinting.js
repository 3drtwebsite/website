import React from "react"
import styled from "styled-components"
import { Section, Container, GridAuto } from "../layoutComponents"
import { ButtonUnderline } from "../buttons"

import ItemImg1 from "../../images/3d-fusion-elevates-3d-parts.jpg"
import ItemImg2 from "../../images/3d-printing-who-we-help.jpg"
import ItemImg3 from "../../images/3d-printing-finishing-touches.jpg"
import ItemImg4 from "../../images/unlocking-3d-printing-potential.jpg"

const device = {
  md: "48em",
}

const Flex = styled.div`
  display: flex;
  img {
    width: 100%;
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

const ItemWrapper = styled.div`
  box-shadow: var(--shadow-light);

  img {
    height: 200px;
    object-fit: cover;
    margin-bottom: var(--spacer);
  }

  p {
    padding: 0 2em;
  }
`

const Item = props => {
  return (
    <ItemWrapper className="spacing">
      <img src={props.img} alt={props.alt} />
      <p className="bold upper">{props.title}</p>
      <p>{props.description}</p>
    </ItemWrapper>
  )
}

export default function OnDemandPrinting() {
  return (
    <Section>
      <Container className="spacing">
        <h2 className="title center">
          <span className="italics accent">affordable</span> on-demand 3D
          printing
        </h2>
        <Flex>
          <Item
            img={ItemImg1}
            alt=""
            title="5+ years delivering excellence"
            description="3'D Revolution Technologies has been providing the best 3D printing Calgary has to offer for over 5 years now. Whatever your innovation or manufacturing strategy includes, 3D printing can enhance and accelerate your product development, and move you quickly to commercial production."
          />
          <Item
            img={ItemImg2}
            alt=""
            title="who we help"
            description="3’D Revolution Technologies helps engineers, machine shops, service bureaus, custom fabricators, and small manufacturers meet their 3D printing service needs every day! Asking yourself “where can I 3D print professionally?”, well you’ve come to the right place. Contact your 3D printing services Calgary experts today for a free quote on your next project!"
          />
          <Item
            img={ItemImg3}
            alt=""
            title="finishing touches"
            description="Additionally, we offer several post-print processing services to make your 3D printed components function and look their best. This includes: 3D Fusion - for strength and functionality, painted finish - for showroom quality, heat-set inserts - for durable use and function."
          />
          <Item
            img={ItemImg4}
            alt=""
            title="unlocking 3D potential"
            description="Our 3D print shop in Calgary started up in 2016 with one objective in mind: Help our clients develop the unlimited possibilities and potential for sustainable digital manufacturing, today! We see no need to change courses at this point."
          />
        </Flex>
      </Container>
    </Section>
  )
}
