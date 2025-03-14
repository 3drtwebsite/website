import React from "react"
import styled from "styled-components"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Section = styled.section`
  padding: 4rem 2rem;
  background: #f8f8f8;
  text-align: center;

  .slick-list {
    margin: 0 -1rem;
  }
  .slick-slide > div {
    margin: 0 1rem;
  }

  .slick-dots {
    bottom: -30px;
  }
`

const Card = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`

const Stars = styled.div`
  margin-bottom: 1rem;
  font-size: 1.2rem;
`

const Author = styled.p`
  margin-top: 1rem;
  font-weight: bold;
`

export default function ReviewSlider() {
  const reviews = [
    {
      name: "Sam Hallows",
      rating: 5,
      text: "3'D Revolution Technologies helped us on a short-lead time part, and Rob was very helpful in providing feedback and suggestions on the design and material selections. The final part was high quality, and met all of our needs. We will look to use Rob again in the future!",
    },
    {
      name: "Philippe Lapierre",
      rating: 5,
      text: "3DRT responded quickly to our enquiry and we got our prototypes amazingly fast. Rob offered great design help to improve our part for additive manufacturing.",
    },
    {
      name: "Brendan French",
      rating: 5,
      text: "Rob at 3D Revolutions is kind, exact and helpful. He produced film-quality items in a ridiculous time-constraint and was a pleasure to work with.",
    },
    {
      name: "May Chou",
      rating: 5,
      text: "Rob is really passionate about his work and takes pride in providing exceptional results and customer service. Highly recommend!",
    },
    {
      name: "Harlow Allen",
      rating: 5,
      text: "My grandson accidently broke a plastic piece of a fairly expensive toy I tried to purchase the part from it's distributor in the UK but they don't sell parts, found Robs site on the internet and he took me in right away engineered the part and made it twice as strong as the original with two extra pieces just in case, and this took one day.",
    },
    {
      name: "Paul Giorgi",
      rating: 5,
      text: "I'm not a designer, but I came to Rob with an idea to work on a challenge, not only did Rob's design work flawlessly, it also was produced ahead of schedule and under budget. thanks to 3'D Revolution Technologies we have a project that is moving forward faster than anticipated.",
    },
      
  ]

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  }

  return (
    <Section>
      <h2>What Our Customers Say</h2>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <Card key={index}>
            <Stars>{`⭐`.repeat(review.rating)}</Stars>
            <p>{review.text}</p>
            <Author>{review.name}</Author>
          </Card>
        ))}
      </Slider>
    </Section>
  )
}