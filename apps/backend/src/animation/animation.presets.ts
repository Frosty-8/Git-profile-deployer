import {
  AnimationTimelineBuilder,
} from "./animation.timeline.js";

import type {
  AnimationPreset,
  AnimationTimeline,
} from "./animation.types.js";

export function createAnimationPreset(
  preset: AnimationPreset,
): AnimationTimeline {
  switch (preset) {
    case "none":
      return {
        duration: 0,
        steps: [],
      };

    case "minimal-fade":
      return createMinimalFade();

    case "cinematic-reveal":
      return createCinematicReveal();

    case "retro-boot":
      return createRetroBoot();

    case "terminal":
      return createTerminal();

    case "pixel-reveal":
      return createPixelReveal();
  }
}

function createMinimalFade(): AnimationTimeline {
  return new AnimationTimelineBuilder()
    .add({
      id: "fade",
      selector: ".motion-root",
      property: "opacity",
      from: "0",
      to: "1",
      duration: 700,
      delay: 0,
      easing: "ease-out",
    })
    .build();
}

function createCinematicReveal(): AnimationTimeline {
  const timeline =
    new AnimationTimelineBuilder();

  timeline
    .add({
      id: "background",
      selector: ".motion-background",
      property: "opacity",
      from: "0",
      to: "1",
      duration: 900,
      delay: 0,
      easing: "ease-out",
    })

    .add({
      id: "portrait",
      selector: ".motion-portrait",
      property: "opacity",
      from: "0",
      to: "1",
      duration: 700,
      delay: 250,
      easing: "ease-out",
    })

    .add({
      id: "portrait-scale",
      selector: ".motion-portrait",
      property: "transform",
      from: "scale(0.92)",
      to: "scale(1)",
      duration: 900,
      delay: 250,
      easing: "spring",
    })

    .add({
      id: "identity",
      selector: ".motion-identity",
      property: "opacity",
      from: "0",
      to: "1",
      duration: 600,
      delay: 550,
      easing: "ease-out",
    })

    .add({
      id: "stats",
      selector: ".motion-stats",
      property: "opacity",
      from: "0",
      to: "1",
      duration: 600,
      delay: 850,
      easing: "ease-out",
    })

    .add({
      id: "projects",
      selector: ".motion-projects",
      property: "opacity",
      from: "0",
      to: "1",
      duration: 700,
      delay: 1100,
      easing: "ease-out",
    });

  return timeline.build();
}

function createRetroBoot(): AnimationTimeline {
  const timeline =
    new AnimationTimelineBuilder();

  timeline
    .add({
      id: "retro-background",
      selector: ".retro-background",
      property: "opacity",
      from: "0",
      to: "1",
      duration: 800,
      delay: 0,
      easing: "ease-out",
    })

    .add({
      id: "retro-grid",
      selector: ".retro-grid",
      property: "opacity",
      from: "0",
      to: "0.7",
      duration: 900,
      delay: 150,
      easing: "ease-out",
    })

    .add({
      id: "retro-portrait",
      selector: ".retro-portrait",
      property: "transform",
      from: "scale(0.8)",
      to: "scale(1)",
      duration: 1000,
      delay: 350,
      easing: "spring",
    })

    .add({
      id: "retro-portrait-opacity",
      selector: ".retro-portrait",
      property: "opacity",
      from: "0",
      to: "1",
      duration: 500,
      delay: 350,
      easing: "ease-out",
    })

    .add({
      id: "retro-identity",
      selector: ".retro-identity",
      property: "opacity",
      from: "0",
      to: "1",
      duration: 500,
      delay: 700,
      easing: "ease-out",
    })

    .add({
      id: "retro-stats",
      selector: ".retro-stats",
      property: "opacity",
      from: "0",
      to: "1",
      duration: 500,
      delay: 1000,
      easing: "ease-out",
    })

    .add({
      id: "retro-projects",
      selector: ".retro-projects",
      property: "opacity",
      from: "0",
      to: "1",
      duration: 700,
      delay: 1250,
      easing: "spring",
    });

  return timeline.build();
}

function createTerminal(): AnimationTimeline {
  const timeline =
    new AnimationTimelineBuilder();

  timeline
    .add({
      id: "terminal-background",
      selector: ".terminal-background",
      property: "opacity",
      from: "0",
      to: "1",
      duration: 500,
      delay: 0,
      easing: "ease-out",
    })

    .add({
      id: "terminal-shell",
      selector: ".terminal-shell",
      property: "opacity",
      from: "0",
      to: "1",
      duration: 400,
      delay: 250,
      easing: "ease-out",
    })

    .add({
      id: "terminal-identity",
      selector: ".terminal-identity",
      property: "opacity",
      from: "0",
      to: "1",
      duration: 450,
      delay: 550,
      easing: "ease-out",
    })

    .add({
      id: "terminal-identity-slide",
      selector: ".terminal-identity",
      property: "transform",
      from: "translateY(8px)",
      to: "translateY(0)",
      duration: 550,
      delay: 550,
      easing: "spring",
    })

    .add({
      id: "terminal-stats",
      selector: ".terminal-stats",
      property: "opacity",
      from: "0",
      to: "1",
      duration: 450,
      delay: 850,
      easing: "ease-out",
    })

    .add({
      id: "terminal-projects",
      selector: ".terminal-projects",
      property: "opacity",
      from: "0",
      to: "1",
      duration: 600,
      delay: 1100,
      easing: "ease-out",
    });

  return timeline.build();
}

function createPixelReveal(): AnimationTimeline {
  const timeline =
    new AnimationTimelineBuilder();

  timeline
    .add({
      id: "pixel-background",
      selector: ".pixel-background",
      property: "opacity",
      from: "0",
      to: "1",
      duration: 500,
      delay: 0,
      easing: "linear",
    })

    .add({
      id: "pixel-portrait",
      selector: ".pixel-portrait",
      property: "opacity",
      from: "0",
      to: "1",
      duration: 500,
      delay: 250,
      easing: "linear",
    })

    .add({
      id: "pixel-portrait-scale",
      selector: ".pixel-portrait",
      property: "transform",
      from: "scale(0.85)",
      to: "scale(1)",
      duration: 650,
      delay: 250,
      easing: "spring",
    })

    .add({
      id: "pixel-identity",
      selector: ".pixel-identity",
      property: "opacity",
      from: "0",
      to: "1",
      duration: 400,
      delay: 600,
      easing: "linear",
    })

    .add({
      id: "pixel-stack",
      selector: ".pixel-stack",
      property: "opacity",
      from: "0",
      to: "1",
      duration: 400,
      delay: 850,
      easing: "linear",
    })

    .add({
      id: "pixel-stats",
      selector: ".pixel-stats",
      property: "opacity",
      from: "0",
      to: "1",
      duration: 400,
      delay: 1050,
      easing: "linear",
    })

    .add({
      id: "pixel-projects",
      selector: ".pixel-projects",
      property: "opacity",
      from: "0",
      to: "1",
      duration: 500,
      delay: 1250,
      easing: "spring",
    });

  return timeline.build();
}