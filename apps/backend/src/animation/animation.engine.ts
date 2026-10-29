import type {
  AnimationTimeline,
  AnimationStep,
} from "./animation.types.js";

export class AnimationEngine {
  renderStyles(
    timeline: AnimationTimeline,
  ): string {
    return timeline.steps
      .map((step) =>
        this.renderStep(step),
      )
      .join("\n");
  }

  renderStep(
    step: AnimationStep,
  ): string {
    const name =
      `anim-${this.safeId(step.id)}`;

    const from =
      this.propertyValue(
        step.property,
        step.from,
      );

    const to =
      this.propertyValue(
        step.property,
        step.to,
      );

    return `
      @keyframes ${name} {
        from {
          ${step.property}: ${from};
        }

        to {
          ${step.property}: ${to};
        }
      }

      ${step.selector} {
        animation:
          ${name}
          ${step.duration}ms
          ${step.easing}
          ${step.delay}ms
          ${step.iterationCount ?? 1}
          both;
      }
    `;
  }

  private propertyValue(
    _property: string,
    value: string,
  ): string {
    return value;
  }

  private safeId(
    value: string,
  ): string {
    return value.replace(
      /[^a-zA-Z0-9_-]/g,
      "-",
    );
  }
}