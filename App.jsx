/** @jsxImportSource @emotion/react */
import React from "react";
import ReactDOM from "react-dom/client";
import { css, Global } from "@emotion/react";

const globalStyles = css`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    font-family: sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue";
  }

  a {
    -webkit-tap-highlight-color: transparent;
    color: #0000ff;
    text-decoration: none;
  }

  a:active {
    color: #ff0000;
  }

  a:visited {
    color: mediumpurple;
  }

  a:focus {
    color: #ffff00;
  }

  a:hover {
    color: #ff00ff;
  }

  html {
    scroll-behavior: smooth;
    scrollbar-width: thin;
    scrollbar-color: #0089d0 transparent;
    background-image: url("assets/pattern.svg");
    background-size: 200px;
  }

  body {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    place-content: center;
    max-width: 800px;
    margin-inline: auto;
    background-color: black;
    padding: 2rem 2rem 0 2rem;
    position: relative;
    z-index: -1;
    color: #0f0;
  }

  body::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 10%;
    background-color: #008;
    z-index: -1;
    animation: indicator linear both;
    animation-timeline: scroll();
  }

  img {
    display: block;
    margin-bottom: 0.5rem;
    max-width: 300px;
  }

  @media (max-width: 1111px) {
    img {
      max-width: 200px;
    }
  }

  @keyframes indicator {
    0% {
      height: 0%;
    }
    100% {
      height: 100%;
    }
  }
`;

const headerStyle = css`
  width: 100%;
  margin-bottom: 1rem;

  h1 {
    margin-bottom: 0.5rem;
  }

  nav ul {
    list-style: none;
    padding-left: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  nav li {
    font-weight: 600;
  }
`;

const mainStyle = css`
  width: 100%;

  article section {
    margin-bottom: 2rem;
  }

  h2 {
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 0.75rem;
    line-height: 1.5;
  }

  ul {
    margin-left: 1.25rem;
    margin-bottom: 0.75rem;
  }

  aside {
    background-color: rgba(0, 128, 255, 0.1);
    border-left: 3px solid #008;
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;
    color: #0af;
  }

  blockquote {
    margin: 1rem 0;
    font-style: italic;
    border-left: 3px solid #0f0;
    padding-left: 1rem;
    color: #0f0;
  }

  figure {
    margin: 1rem 0;
    figcaption {
      margin-top: 0.25rem;
      font-size: 0.875rem;
      color: #0f0;
    }
  }
`;

const footerStyle = css`
  width: 100%;
  text-align: center;
  margin-top: 2rem;
  color: #0f0;
`;

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <header css={headerStyle}>
        <h1>Cool Holograms: A Glimpse Into the Future</h1>
        <p>
          The science behind holograms is unlocking new dimensions of reality.
          Discover how these 3D marvels are reshaping industries and our
          imagination.
        </p>
        <nav>
          <ul>
            <li>
              <a href="#what-is-a-hologram">What is a Hologram?</a>
            </li>
            <li>
              <a href="#applications">Practical Applications</a>
            </li>
            <li>
              <a href="#history-of-holograms">History of Holography</a>
            </li>
            <li>
              <a href="#future-of-holograms">The Future of Holograms</a>
            </li>
          </ul>
        </nav>
      </header>
      <main css={mainStyle}>
        <article>
          <section id="what-is-a-hologram">
            <h2>What is a Hologram?</h2>
            <p>
              A hologram is a three-dimensional projection of light that creates
              the illusion of a physical object. Unlike regular images or videos,
              holograms allow viewers to observe depth and perspective by moving
              around them.
            </p>
            <p>
              Holography relies on the interference patterns of laser light to
              record and display these 3D visuals. This technology has evolved
              rapidly, offering stunningly realistic projections.
            </p>
            <figure>
              <img src="assets/hol1.png" alt="Hologram example" width="600" />
              <figcaption>Figure 1: A holographic projection of a 3D object.</figcaption>
            </figure>
          </section>
          <section id="applications">
            <h2>Practical Applications of Holograms</h2>
            <p>
              Holograms are not just science fiction; they are revolutionizing
              multiple fields, from entertainment to medicine. Here are some of
              their most innovative uses:
            </p>
            <ul>
              <li>
                <strong>Entertainment:</strong> Virtual concerts featuring
                holographic performers, such as Tupac's iconic appearance at
                Coachella.
              </li>
              <li>
                <strong>Healthcare:</strong> 3D imaging for surgical planning and
                medical education.
              </li>
              <li>
                <strong>Retail:</strong> Interactive holographic displays for
                showcasing products.
              </li>
              <li>
                <strong>Education:</strong> Immersive teaching tools that bring
                history and science to life.
              </li>
            </ul>
            <aside>
              <p>
                <strong>Fun Fact:</strong> Did you know that holographic technology
                is also used in creating secure credit card designs?
              </p>
            </aside>
          </section>
          <section id="history-of-holograms">
            <h2>The History of Holography</h2>
            <p>
              The concept of holography was first introduced by physicist Dennis
              Gabor in 1947, for which he later won the Nobel Prize in Physics.
              Early holograms were limited to simple shapes and required complex
              setups.
            </p>
            <p>
              The invention of the laser in the 1960s revolutionized the field,
              allowing for more detailed and colorful holographic images. Today,
              advances in computational power and display technology have made
              holograms more accessible and versatile.
            </p>
            <figure>
              <img src="assets/hol2.avif" alt="Historical holograms" width="600" />
              <figcaption>Figure 2: Show holographic</figcaption>
            </figure>
          </section>
          <section id="future-of-holograms">
            <h2>The Future of Holograms</h2>
            <p>
              The future of holography is incredibly promising, with advancements
              expected in portability, realism, and accessibility. Imagine carrying
              a device that projects life-like holograms anywhere, anytime.
            </p>
            <blockquote>
              "Holograms will soon become as common as smartphones, transforming
              the way we communicate, learn, and entertain ourselves." - Leading
              tech futurists.
            </blockquote>
            <p>
              Emerging fields like quantum holography and AI-driven projections
              could redefine how we interact with digital content. Holograms may
              soon replace traditional screens in many scenarios.
            </p>
            <ul>
              <li>
                <strong>In Space Exploration:</strong> Holograms could visualize
                data from other planets in 3D.
              </li>
              <li>
                <strong>In Daily Life:</strong> Virtual meetings with holographic
                avatars of colleagues.
              </li>
              <li>
                <strong>In Art:</strong> Immersive holographic exhibitions
                redefining the art world.
              </li>
            </ul>
          </section>
        </article>
      </main>
      <footer css={footerStyle}>
        <p>2024 Cool Holograms | Designed by 🈂️</p>
      </footer>
    </>
  );
}

const rootId = "root";
let rootElem = document.getElementById(rootId);
if (!rootElem) {
  rootElem = document.createElement("div");
  rootElem.id = rootId;
  document.body.appendChild(rootElem);
}

const root = ReactDOM.createRoot(rootElem);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
