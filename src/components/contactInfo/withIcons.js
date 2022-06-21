import React from "react"
import styled from "styled-components"

import { Info } from "../info"

import { FaPhoneAlt, FaRegClock } from "react-icons/fa"
import { SiMailDotRu } from "react-icons/si"
import { IoLocationSharp } from "react-icons/io5"

const List = styled.ul`
  padding: 0;
  margin: var(--spacer) 0 0 0;
  list-style-type: none;
`

const Flex = styled.div`
  display: flex;
  align-items: center;

  & > * + * {
    margin-left: 5px;
  }
`

export default function WithIcons() {
  return (
    <div>
      <p className="body--large">{Info.name}</p>
      <List className="spacing">
        <li>
          <Flex>
            <IoLocationSharp className="accent" />
            <p>
              {Info.street1} {Info.city1}
            </p>
          </Flex>
        </li>
        <li>
          <Flex>
            <FaPhoneAlt className="accent" />
            <a className=" italics" href="tel: ">
              {Info.tel1}
            </a>
          </Flex>
        </li>
        <li>
          <Flex>
            <SiMailDotRu className="accent" />
            <a className=" italics" href="mailto:">
              {Info.mail1}
            </a>
          </Flex>
        </li>
        <li>
          <Flex>
            <FaRegClock className="accent" />
            <p>{Info.hours}</p>
          </Flex>
        </li>
      </List>
    </div>
  )
}
