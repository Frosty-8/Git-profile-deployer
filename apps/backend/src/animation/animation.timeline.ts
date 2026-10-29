import type {
  AnimationStep,
  AnimationTimeline,
  Easing,
} from "./animation.types.js";

export class AnimationTimelineBuilder {
  private readonly steps: AnimationStep[] = [];

  private duration = 0;

  add(
    step: AnimationStep,
  ): this {
    this.steps.push(step);

    const end =
      step.delay + step.duration;

    this.duration = Math.max(
      this.duration,
      end,
    );

    return this;
  }

  sequence(
    steps: AnimationStep[],
    gap = 0,
  ): this {
    let cursor = 0;

    for (const step of steps) {
      const nextStep = {
        ...step,
        delay: cursor,
      };

      this.add(nextStep);

      cursor += step.duration + gap;
    }

    return this;
  }

  build(): AnimationTimeline {
    return {
      duration: this.duration,
      steps: [...this.steps],
    };
  }
}