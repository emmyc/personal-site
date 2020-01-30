import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function About({ data }) {
  return (
    <Layout>
      <SEO title="About" />
      <div className="about section" id="about">
        <h2>
          <span
            className="underline"
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-duration="700"
            data-sal-easing="ease-in-out"
          >
            About Me.
          </span>
        </h2>
        <p
          data-sal="slide-up"
          data-sal-delay="500"
          data-sal-duration="700"
          data-sal-easing="ease-in-out"
        >
          Hello! I'm Emmy, a cognitive science student at UCLA hailing from
          Ellicott City, Maryland. I was first tricked into programming while
          creating a script for my favorite video game so that I could send
          random animal facts to the server. <br />
          <br /> When "work-life balance" makes sense contextually, I spend my
          free time playing too many video games, watching coming-of-age movies,
          and reading editorials.
        </p>
      </div>
    </Layout>
  )
}
