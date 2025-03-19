import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";

// Grid container for thumbnails
const GridAuto = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

// Modal overlay for the lightbox
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

// Modal content container with flex layout
const ModalContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 90%;
  max-height: 90%;
  overflow: visible; /* Allow arrows and close button to appear outside */
`;

// Wrapper for the enlarged image
const ImageWrapper = styled.div`
  position: relative;
  z-index: 1; /* Ensures the image is behind the buttons */
`;

// Styled GatsbyImage for the enlarged image
const StyledGatsbyImage = styled(GatsbyImage)`
  max-height: 90vh;
  display: block;
`;

// Close button, positioned outside the top-right corner
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

// Shared styling for arrow buttons
const ArrowButton = styled.button`
  background: transparent;
  border: none;
  color: #fff;
  font-size: 3rem;
  cursor: pointer;
  z-index: 999;
  padding: 0.5rem;
`;

// Left arrow, shifted to appear outside the left edge
const LeftArrow = styled(ArrowButton)`
  margin-right: 1rem;
  transform: translateX(-3rem);
`;

// Right arrow, shifted to appear outside the right edge
const RightArrow = styled(ArrowButton)`
  margin-left: 1rem;
  transform: translateX(3rem);
`;

export default function GalleryFull() {
  // GraphQL query to fetch images from src/images/gallery
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
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

  // State to manage lightbox visibility and current image index
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Open the lightbox modal for the given image index
  const openModal = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  // Close the lightbox modal
  const closeModal = () => {
    setIsOpen(false);
  };

  // Show the previous image
  const showPrev = (e) => {
    e.stopPropagation();
    setPhotoIndex((photoIndex + images.length - 1) % images.length);
  };

  // Show the next image
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
                style={{ backgroundColor: "transparent" }}
                imgStyle={{ backgroundColor: "transparent" }}
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
                image={getImage(
                  images[photoIndex].childImageSharp.gatsbyImageData
                )}
                alt={`Gallery image ${images[photoIndex].name}`}
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
