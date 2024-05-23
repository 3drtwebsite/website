import React from "react";
import SEO from "../components/seo";
import styled from "styled-components";
import HeaderBasic from "../components/headers/headerBasic";
import Footer from "../components/footers/footer";
import BannerBlogDetails from "../components/banners/bannerBlogDetails";
import { Container, Flex } from "../components/layoutComponents";
import { Link, graphql } from "gatsby";
import * as styles from '../styles/blog-details.module.css';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { renderRichText } from "gatsby-source-contentful/rich-text"

const Section = styled.section`
  padding: 1rem 0;

  @media screen and (max-width: 450px) {
    padding: 1em 0;
  }

  .title {
    font-weight: var(--fw-500);
  }
`

export default function Blog({ data }) {
    const { title, date, content } = data.contentfulBlog

    return (
        <>
            <SEO />
            <HeaderBasic />
            <BannerBlogDetails
                breadCrumbLink1="/blog"
                breadCrumb1="Back"
            />
            <Section>
                <Container>
                    <Flex>
                        <div className="spacing">
                            <div className="spacing">
                                <h1 className="title">{title}</h1>
                                <hr />
                                <h5>{date}</h5>
                                <div className={styles.img}>
                                    <GatsbyImage image={data.contentfulBlog.image.gatsbyImageData} alt="Blog Post Image" />
                                </div>
                                <div className={styles.html} dangerouslySetInnerHTML={{ __html: content.childMarkdownRemark.html }} />
                            </div>
                        </div>
                    </Flex>
                </Container>
            </Section>
            <Footer />
        </>
    )
}

export const query = graphql`
  query Blog($slug: String) {
    contentfulBlog(slug: {eq: $slug}) {
      title
      date(formatString: "MMMM D, YYYY")
      content {
        childMarkdownRemark {
          html
        }
      }
      image {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`
