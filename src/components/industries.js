import React from "react"
import styled from "styled-components"
import { Section, Container, GridTwo } from "./layoutComponents"
import { ButtonPrimary, ButtonInline } from "./buttons"

import Engineers from "../images/industries/calgary-3d-printing-services-engineers.jpg"
import Fabricators from "../images/industries/calgary-3d-printing-services-fabricators.jpg"
import MachineShops from "../images/industries/calgary-3d-printing-services-machine-shops.jpg"
import Manufacturers from "../images/industries/calgary-3d-printing-services-manufacturers.jpg"

const IndustryImg = styled.div`
  color: var(--txt-light);
  background: ${props => `url(${props.img})`}, var(--clr-overlay);
  background-blend-mode: overlay;
  background-position: center;
  box-shadow: var(--shadow-light);
  padding: 4em 2em;
`

const Industry = props => {
  return (
    <IndustryImg img={props.img}>
      <h3 className="upper">{props.industry}</h3>
      <p>{props.description}</p>
      <ButtonPrimary to="/contact">get quote &#8594;</ButtonPrimary>
    </IndustryImg>
  )
}

export default function Industries() {
  return (
    <Section>
      <Container className="spacing">
        <center className="spacing">
          <h2 className="title">industries we serve</h2>
          <p>
            With our revolutionary{" "}
            <ButtonInline to="/services/3d-printing">3D printing</ButtonInline>{" "}
            and <ButtonInline>3D Fusion</ButtonInline> technology, we are
            unlimited to the industries we are able to provide solutions for.
          </p>
        </center>
        <GridTwo>
          <Industry
            img={Engineers}
            industry="engineers"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus volutpat senectus eros, curabitur bibendum nibh ullamcorper egestas dui. Tortor vulputate neque eget lorem felis facilisi."
          />
          <Industry
            img={Manufacturers}
            industry="manufacturers"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus volutpat senectus eros, curabitur bibendum nibh ullamcorper egestas dui. Tortor vulputate neque eget lorem felis facilisi."
          />
          <Industry
            img={MachineShops}
            industry="machine shops"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus volutpat senectus eros, curabitur bibendum nibh ullamcorper egestas dui. Tortor vulputate neque eget lorem felis facilisi."
          />
          <Industry
            img={Fabricators}
            industry="fabricators"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus volutpat senectus eros, curabitur bibendum nibh ullamcorper egestas dui. Tortor vulputate neque eget lorem felis facilisi."
          />
        </GridTwo>
      </Container>
    </Section>
  )
}
