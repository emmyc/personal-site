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
          className="about-text"
        >
          Hello! I'm Emmy, a cognitive science student at UCLA hailing from
          Ellicott City, Maryland. I was first tricked into programming while
          creating a script for my favorite video game so that I could send
          random animal facts to the server. <br />
          <br /> Since then, I've found myself venturing into front end
          development, creating things that people (hopefully) enjoy interacting
          with.
        </p>
      </div>
    </Layout>
  )
}
