// borrowed from Jeremias Menichelli's codesandbox project, react-view-transition-example
import gsap from "gsap";

const getDefaultTimeline = (node, delay) => {
  const timeline = gsap.timeline({ paused: true });
  const content = node.querySelectorAll("#content");
  const contentInner = node.querySelectorAll("#content--inner");
  const footer = node.querySelector("#footer");

  if (content) {
    timeline
      .from(node, {
        duration: 0.3,
        display: "none",
        autoAlpha: 0,
        delay,
        ease: "power1.in",
      })
      .staggerFrom(content, 0.15, {
        duration: 0.15,
        autoAlpha: 0,
        y: 25,
        ease: "power1.inOut",
      }, 0.15)
      .staggerFrom(contentInner, 0.15, {
        duration: 0.15,
        autoAlpha: 0,
        ease: "power1.in",
      }, 0.1)
      .from(footer, {
        duration: 0.15,
        autoAlpha: 0,
        delay: 0.15,
        ease: "power1.in",
      });
  } else {
    timeline.from(node, {
      duration: 0.3,
      display: "none",
      autoAlpha: 0,
      delay,
      ease: "power1.in",
    });
  }
  return timeline;
};

const getHomeTimeline = (node, delay) => {
  const timeline = gsap.timeline({ paused: true });
  const texts = node.querySelectorAll("div > h1 > div,.home-scroll-to");
  const divs = node.querySelectorAll(".content-block");
  const footer = node.querySelector(".footer");

  timeline
    .from(node, { duration: 0.3, display: "none", autoAlpha: 0, delay })
    .staggerFrom(texts, 0.375, { autoAlpha: 0, x: -25, ease: "power1" }, 0.125)
    .staggerFrom(divs, 0.375, { autoAlpha: 0, y: 25, ease: "power1" }, 0.125)
    .from(footer, 0.357, { autoAlpha: 0, ease: "power1"}, 0.125);

  return timeline;
};

export const play = (pathname, node, appears) => {
  const delay = appears ? 0 : 0.5;
  let timeline;

  if (pathname === "/") timeline = getHomeTimeline(node, delay);
  else timeline = getDefaultTimeline(node, delay);

  window.loadPromise = new Promise((resolve) => {
    requestAnimationFrame(() => timeline.play());
  });
};

export const exit = (node) => {
  var timeline = gsap.timeline({ paused: true });

  timeline.to(node, { duration: 0.25, autoAlpha: 0, ease: "power1.out" });
  timeline.play();
};
