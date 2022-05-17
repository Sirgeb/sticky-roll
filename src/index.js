import React from "react";
import ReactDOM from "react-dom";
import { Stickyroll } from "@stickyroll/stickyroll";
import { Pagers } from "@stickyroll/pagers";
import { Inner } from "@stickyroll/inner";
import { indigo } from "@stickyroll/themes";
import RParticles from "react-particles-js";
import "./styles.css";
import config from "./config.json";
import theme from "./primaryTheme";
import { ThemeProvider } from "styled-components";
import Process from "./Process";
import Slider from "./Slider";

const headlines = [
  "Hello World!",
  "Hello React!",
  "Hello Stickyroll!",
  "Let's continue with the next lesson!"
];

const Page = ({ page, pageIndex, pages, progress }) => {
  if (pageIndex === 1) {
    return (
      <div className="particle-root">
        <RParticles
          className="particles"
          width="100vw"
          height="100vh"
          params={config}
        />
        <div
          className="content-container"
          style={{
            opacity: `calc(1 - 1 * ${progress})`,
            transform: `translateY(calc(-50vh * ${progress})`
          }}
        >
          <h1>Hello world</h1>
          <h3>Some other text</h3>
          <input />
        </div>
      </div>
    );
  } else if (pageIndex === 2) {
    return <Process />;
  } else if (pageIndex === 0) {
    return <Slider />;
  }
  return (
    <>
      <strong>{page}</strong> of <strong>{pages}</strong>
      <br />
      Progress: <strong>{progress}</strong>
      <h1>{headlines[pageIndex]}</h1>
    </>
  );
};

const App = () => {
  console.log(indigo);
  return (
    <Stickyroll pages={headlines} factor={2} anchors="">
      {(props) => (
        <Inner theme={theme} withPagers="right">
          <div className="custom-trigger">
            <Page {...props} />
          </div>
          <Pagers theme={theme} position="right" useContext />
        </Inner>
      )}
    </Stickyroll>
  );
};

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
