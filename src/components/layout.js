import React from "react"
import SEO from "./seo"
import HeaderBasic from "./headers/headerBasic"
import Reviews from "./reviews"
import FormContact from "../components/forms/formContact"
import Footer from "./footers/footer"

export default function Layout({ children }) {
  return (
    <>
      <SEO />
      <HeaderBasic />
      <main>{children}</main>
      <Reviews />
      <FormContact />
      <Footer />
    </>
  )
}
