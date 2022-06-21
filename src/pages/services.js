import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ServicesFull from "../components/servicesFull"

export default function Services() {
  return (
    <Layout>
      <SEO
        title="Services · 3D Printing and 3D Fusion"
        description="We offer an extensive list of 3D printing services. Our 3D Fusion technology can make your 3D printed parts real! Call us to learn more at 403-874-3131."
      />
      <div className="spacer"></div>
      <ServicesFull />
    </Layout>
  )
}
