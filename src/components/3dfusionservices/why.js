import React from "react"
import styled from "styled-components"
import { Section, Container } from "../layoutComponents"
import { ButtonInline } from "../buttons"

const device = {
  md: "48em",
}

export const Flex = styled.div`
  display: flex;
  align-items: center;

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

const FlexItem = styled.div`
  @media screen and(max-width: ${device.md}) {
    border-bottom: 1px solid var(--clr-accent);
  }
`

const Line = styled.div`
  background-color: var(--clr-accent);
  height: 100px;
  width: 2px;

  @media screen and (max-width: ${device.md}) {
    display: none;
  }
`

export default function Why() {
  return (
    <Section>
      <Container className="spacing-md">
        <div className="spacing">
          <h2 className="title">
            <span className="italics accent">why</span> alter or process 3D
            parts after printing?
          </h2>
          <p>
            Because as-built{" "}
            <ButtonInline to="/services/3d-printing">
              3D printed parts
            </ButtonInline>{" "}
            suffer from 3 common drawbacks:
          </p>
        </div>{" "}
        <Flex>
          <FlexItem>
            <p className="body body--large upper">
              &#8594; they are <span className="accent">weak</span>
            </p>
            <p>
              Due to porosity and micro-fractures present in virtually all
              exterior and interior surfaces.
            </p>
          </FlexItem>
          <Line />
          <FlexItem>
            <p className="body body--large upper">
              &#8594; they are <span className="accent">unusable</span>
            </p>
            <p>
              Due to unstable and faulty bonding of as-built structures, as well
              as the potential for non-isometric strength due to specific
              geometries and print orientation.
            </p>
          </FlexItem>
          <Line />
          <FlexItem>
            <p className="body body--large upper">
              &#8594; they are <span className="accent">inconsistent</span>
            </p>
            <p>
              Inconsistencies between platforms, processes, printers, materials,
              users, print conditions result in unreliable printed parts.
            </p>
          </FlexItem>
        </Flex>
      </Container>
    </Section>
  )
}
