import React from "react"
import SEO from "./seo"
import HeaderBasic from "./headers/headerBasic"
import FormContact from "../components/forms/formContact"
import Footer from "./footers/footer"

export default function Layout({ children }) {
  return (
    <>
      <SEO />
      <HeaderBasic />
      <main>{children}</main>
      <FormContact />
      <Footer />
    </>
  )
}
