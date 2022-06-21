import React from "react"
import styled from "styled-components"

const MapFrame = styled.iframe`
  width: 100%;
  height: 450px;
  border: 0;
`

export default function Map() {
  return (
    <div>
      <MapFrame
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d321202.8248724545!2d-114.36869964915894!3d51.027286688465416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716e4812315555%3A0x17ea31937f1b282!2s3&#39;D%20Revolution%20Technologies!5e0!3m2!1sen!2sca!4v1646933749733!5m2!1sen!2sca"
        allowFullScreen
        loading="lazy"
      />
    </div>
  )
}
