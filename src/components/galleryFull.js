import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";


const GridAuto = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;


const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;


const ModalContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 90%;
  max-height: 90%;
  overflow: visible; /* Allow arrows and close button to appear outside */
`;


const ImageWrapper = styled.div`
  position: relative;
  z-index: 1; /* Ensures the image is behind the buttons */
`;


const StyledGatsbyImage = styled(GatsbyImage)`
  max-height: 90vh;
  max-width: 90vw;
  width: auto;
  display: block;
`;


const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: -3rem; /* Shift it outside the container */
  background: transparent;
  border: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
  z-index: 999;
`;


const ArrowButton = styled.button`
  background: transparent;
  border: none;
  color: #fff;
  font-size: 3rem;
  cursor: pointer;
  z-index: 999;
  padding: 0.5rem;
`;

const LeftArrow = styled(ArrowButton)`
  margin-right: 1rem;
  transform: translateX(-3rem);
`;

const RightArrow = styled(ArrowButton)`
  margin-left: 1rem;
  transform: translateX(3rem);
`;

export default function GalleryFull() {
  const data = useStaticQuery(graphql`
    query {
    allFile(
      filter: { 
        relativeDirectory: { eq: "gallery" },
        childImageSharp: { original: { width: { gte: 600 } } }
      }
    ) {
        nodes {
          id
          name
          childImageSharp {
            gatsbyImageData(
              width: 600
              placeholder: NONE
              layout: CONSTRAINED
              backgroundColor: "transparent"
              formats: [AUTO, WEBP]
            )
          }
        }
      }
    }
  `);

  const images = data.allFile.nodes;

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openModal = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setPhotoIndex((photoIndex + images.length - 1) % images.length);
  };

  const showNext = (e) => {
    e.stopPropagation();
    setPhotoIndex((photoIndex + 1) % images.length);
  };

  return (
    <>
      <GridAuto>
        {images.map((file, index) => {
          const imageData = getImage(file.childImageSharp.gatsbyImageData);
          return (
            <div
              key={file.id}
              onClick={() => openModal(index)}
              style={{ cursor: "pointer" }}
            >
              <GatsbyImage
                image={imageData}
                alt={`Gallery image ${file.name}`}
                style={{ backgroundColor: "transparent", height: "auto" }}
                imgStyle={{ backgroundColor: "transparent", objectFit: "contain" }}
              />
            </div>
          );
        })}
      </GridAuto>

      {isOpen && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <LeftArrow onClick={showPrev}>&lt;</LeftArrow>

            <ImageWrapper>
                <StyledGatsbyImage
                  image={getImage(images[photoIndex].childImageSharp.gatsbyImageData)}
                  alt={`Gallery image ${images[photoIndex].name}`}
                  style={{ backgroundColor: "transparent" }}
                  imgStyle={{ objectFit: "contain", backgroundColor: "transparent" }}
                />
            </ImageWrapper>

            <RightArrow onClick={showNext}>&gt;</RightArrow>

            <CloseButton onClick={closeModal}>&times;</CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
}
