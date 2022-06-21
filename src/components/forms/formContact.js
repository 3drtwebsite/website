import React from "react"
import styled from "styled-components"

import { Section, Container, Flex, FlexMobileOpp } from "../layoutComponents"
import { Label, Input, TextArea, Submit } from "./formItems"
import Map from "../map"

export default function FormContact() {
  return (
    <Section>
      <Container>
        <h3 className="title center">
          <span className="italics accent">send us your project details!</span>
        </h3>
        <Flex className="spacing-lg">
          {/* flex item 1 */}
          <div>
            <form
              name="contact"
              className="spacing"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </p>
              <Flex>
                <div className="spacing-sm">
                  <Label htmlFor="name">* Name:</Label>
                  <Input
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="spacing-sm">
                  <Label htmlFor="email">* Email:</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </Flex>
              <div className="spacing-sm">
                <Label htmlFor="phone">* Phone:</Label>
                <Input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div className="spacing-sm">
                <Label htmlFor="subject">* Subject:</Label>
                <Input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </div>

              <div className="spacing-sm">
                <Label htmlFor="msg">Message:</Label>
                <TextArea
                  name="msg"
                  id="msg"
                  cols="30"
                  rows="10"
                  placeholder="How can we help?"
                />
              </div>
              <div className="spacing-sm">
                <Label htmlFor="subject">
                  Upload Your Part File: (max number of files: 1)
                </Label>
                <input type="file" name="file" id="file" />
              </div>
              <Submit type="submit" id="submit" value="send" />
            </form>
          </div>
          {/* flex item 2 */}
          <Map className="stretch" />
        </Flex>
      </Container>
    </Section>
  )
}
