import { Link, graphql } from "gatsby";
import React from "react";
import SEO from "../components/seo";
import HeaderBasic from "../components/headers/headerBasic";
import Footer from "../components/footers/footer";
import BannerBlog from "../components/banners/bannerBlog";
import { Section, Container, Flex } from "../components/layoutComponents";
import * as styles from '../styles/blog.module.css';
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import BannerImg from "../images/calgary-3d-fusion.jpg";

export default function Blog({ data }) {
    const blogs = data.allContentfulBlog.nodes

    return (
        <>
        <SEO />
        <HeaderBasic />
        <BannerBlog
            breadCrumbLink1="/"
            breadCrumbLink2="/blog"
            breadCrumb1="Home"
            breadCrumb2="Blog"
            img={BannerImg}
        />
        <Section>
            <Container>
                    <div className="spacing">
                        <h1 className="title center mb-5">Blog Posts</h1>
                        <Flex>
                            <div className={styles.blogPost}>
                                {blogs.map(blog => (
                                    <Link to={blog.slug} key={data.id}>
                                        <div className={styles.blog}>
                                            <div>
                                                <GatsbyImage image={blog.image.gatsbyImageData} alt="Blog Post Image" />
                                            </div>
                                            <h2>{ blog.title }</h2>
                                            <h4>{ blog.date }</h4>
                                            <p>{ blog.description }</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </Flex>
                    </div>
            </Container>
        </Section>
        <Footer />
    </>
    )
}

export const query = graphql`
    query BlogPost {
        allContentfulBlog(sort: {date: DESC}) {
            nodes {
                date(formatString: "MMMM D, YYYY")
                title
                slug
                id
                description
                image {
                    gatsbyImageData(
                        layout: CONSTRAINED
                        placeholder: BLURRED
                        width: 424
                        height: 212
                      )
                }
            }
        }
    } 
`
