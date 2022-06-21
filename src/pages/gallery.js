import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerGallery from "../components/banners/bannerGallery"
import FusionGallery from "../components/3dfusionservices/fusionGallery"
import GalleryFull from "../components/galleryFull"

export default function Gallery() {
  return (
    <Layout>
      <SEO
        title="Gallery · Our 3D Printing and 3D Fusion Projects"
        description="Check out our project gallery to see how we're helping various industries make their parts real with our 3D printing and 3D fusion technology. Call us at 403-874-3131 to Make it Real!"
      />
      <BannerGallery
        breadCrumbLink1="/"
        breadCrumbLink2="/gallery"
        breadCrumb1="Home"
        breadCrumb2="Gallery"
        textPrimary="our 3D printing & 3D fusion project gallery"
        textSecondary="Our vision is to promote freedom through innovation, the power of creation, and making it real with our 3D Fusion and 3D Printing technology."
        to="/contact"
        buttonText="get a quote"
      />
      <GalleryFull />
    </Layout>
  )
}
