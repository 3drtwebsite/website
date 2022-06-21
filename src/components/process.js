import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Container, Section, GridTwo } from "./layoutComponents"
import { ButtonInline } from "./buttons"

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 1em;
  box-shadow: var(--shadow-light-accent); */
`

const Wrapper = styled.div`
  background: url("../images/process-bg.jpg"), rgba(255, 255, 255, 0.75);
  background-blend-mode: overlay;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -100;
`

export default function Process() {
  return (
    <Wrapper>
      <Section>
        <Container className="spacing">
          <h2 className="title">
            our proven{" "}
            <span className="italics accent">3D printing process</span>
          </h2>
          <p>
            To make a physical part or component “real” using 3D printing, you
            will need to do at least the first 2 of the 4 things prescribed
            below, depending on your usecase (application).
          </p>
          <GridTwo>
            <Flex className="spacing">
              <div>
                <StaticImage
                  src="../images/3d-printing-process-digital.jpg"
                  alt=""
                  height={150}
                  className="br"
                />
              </div>
              <div>
                <h3 className="upper heading bold">1. make it digital</h3>
                <p>
                  All our{" "}
                  <ButtonInline to="/services/3d-printing">
                    3D printing services
                  </ButtonInline>{" "}
                  require a digital model to begin and we are here to help every
                  step of the way.
                </p>
                <ul>
                  <li>Get 3D model (STEP or STL formats) of part(s)</li>
                  <li>Part Analysis and Cost Estimates based on your model </li>
                  <li>
                    Optimize model using{" "}
                    <ButtonInline to="/services/3d-printing">
                      Design for Additive Manufacturing
                    </ButtonInline>{" "}
                    (DFAM) principles.
                  </li>
                </ul>
              </div>
            </Flex>
            <Flex className="spacing">
              <div>
                <StaticImage
                  src="../images/3d-printing-process-physical.jpg"
                  alt=""
                  height={150}
                  className="br"
                />
              </div>
              <div>
                <h3 className="upper heading bold">2. make it physical</h3>
                <p>
                  Generating a physical part from a digital model is a{" "}
                  <ButtonInline to="/services/3d-printing">
                    prototyping
                  </ButtonInline>{" "}
                  process that we have perfected in our 10 years of experience.
                </p>
                <ul>
                  <li>Print cost effective prototypes</li>
                  <li>
                    Validate physical outcomes and attributes associated with
                    design
                  </li>
                  <li>Iterate as required to achieve optimized outcomes</li>
                  <li>
                    Develop project plan and budget (from prototype to fully
                    scaled production)
                  </li>
                </ul>
              </div>
            </Flex>
            <Flex className="spacing">
              <div>
                <StaticImage
                  src="../images/3d-printing-process-strong.jpg"
                  alt=""
                  height={150}
                  className="br"
                />
              </div>
              <div>
                <h3 className="upper heading bold">3. make it strong</h3>
                <p>
                  Our innovative{" "}
                  <ButtonInline to="/services/3d-fusion">
                    3D Fusion
                  </ButtonInline>{" "}
                  process helps improve the strength in 3D printed parts.
                </p>
                <ul>
                  <li>
                    Select appropriate materials, platforms, and printer
                    settings for fabrication
                  </li>
                  <li>Post Processing of 3D printed parts </li>
                </ul>
              </div>
            </Flex>
            <Flex className="spacing">
              <div>
                <StaticImage
                  src="../images/3d-printing-process-work.jpg"
                  alt=""
                  height={150}
                  className="br"
                />
              </div>
              <div>
                <h3 className="upper heading bold">4. make it work</h3>
                <p>
                  We use functional testing of the finished parts and iterate
                  the design as needed to help make it real!
                </p>
                <ul>
                  <li>
                    Iterate process of design, print, and testing as required
                  </li>
                  <li>Develop strategies for scaled production</li>
                </ul>
              </div>
            </Flex>
          </GridTwo>
          <center>
            <p>
              What is “it” you may ask? <span className="italics">it</span> is
              anything you can imagine! And we specialize in moving all kinds of
              “anythings” through the New Product Development Cycle. Let us
              apply our current, professional, and specialized knowledge of 3D
              printing and Hybrid AM to your unique manufacturing challenges. We
              can help you through any steps and stages of the process as you
              require, in order to Make It Real!
            </p>
          </center>
        </Container>
      </Section>
    </Wrapper>
  )
}
