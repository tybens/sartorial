// borrowed from Jeremias Menichelli's codesandbox project, react-view-transition-example
import gsap from "gsap";

const getDefaultTimeline = (node, delay) => {
  const timeline = gsap.timeline({ paused: true });
  const content = node.querySelector(".content");
  const contentInner = node.querySelector(".content--inner");

  if (content) {
    timeline
      .from(node, {
        duration: 0.3,
        display: "none",
        autoAlpha: 0,
        delay,
        ease: "power1.in",
      })
      .from(content, {
        duration: 0.15,
        autoAlpha: 0,
        y: 25,
        ease: "power1.inOut",
      })
      .from(contentInner, {
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

  timeline
    .from(node, { duration: 0.3, display: "none", autoAlpha: 0, delay })
    .staggerFrom(texts, 0.375, { autoAlpha: 0, x: -25, ease: "power1" }, 0.125)
    .staggerFrom(divs, 0.375, { autoAlpha: 0, y: 25, ease: "power1" }, 0.125);

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
