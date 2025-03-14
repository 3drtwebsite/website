import React from "react"
import styled from "styled-components"

const Section = styled.section`
  padding: 4rem 2rem;
  background: #f8f8f8;
  text-align: center;
`

const ReviewCard = styled.div`
  background: #fff;
  padding: 2rem;
  margin: 1rem auto;
  max-width: 600px;
  border-radius: var(--br);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`

export default function ReviewSlider() {
  const reviews = [
    {
      name: "John Doe",
      rating: 5,
      text: "Amazing service, highly recommend!",
    },
    {
      name: "Jane Smith",
      rating: 5,
      text: "Fast turnaround, excellent quality.",
    },
    // Add more reviews as needed
  ]

  return (
    <Section>
      <h2>What Our Customers Say</h2>
      {reviews.map((review, index) => (
        <ReviewCard key={index}>
          <p>{`⭐`.repeat(review.rating)}</p>
          <p>{review.text}</p>
          <p>
            <strong>{review.name}</strong>
          </p>
        </ReviewCard>
      ))}
    </Section>
  )
}