export type AccellerationFn = (p: number, v?: number) => number;

export const linearAcelleration: AccellerationFn = (p) => p;

export type AnimHandlerFn = (
  value: number,
  percent: number,
  anim: AnimationEntity,
) => void;

export interface AnimationEntity {
  name: string;
  time: number;
  from: number;
  to: number;
  start: number;
  stop: number;
  handler: AnimHandlerFn;
  accelleration: AccellerationFn;
}

export class Animation {
  animations = new Map<string, AnimationEntity>();
  counter: number = 0;

  start = (
    name: string,
    from: number,
    to: number,
    time: number,
    handler: AnimHandlerFn,
    accelleration: AccellerationFn = linearAcelleration,
  ) => {
    if (!this.animations.has(name)) {
      const start = +new Date();
      this.animations.set(name, {
        name,
        time,
        handler,
        accelleration,
        from,
        to,
        start,
        stop: start + time,
      });
      this.counter += 1;
      if (this.counter === 1) {
        window.requestAnimationFrame(this.tickHandler);
      }
    }
  };

  stop = (name: string) => {
    if (this.animations.has(name)) {
      this.animations.delete(name);
      this.counter -= 1;
    }
  };

  tickHandler = () => {
    const now = +new Date();
    for (const animation of Array.from(this.animations.values())) {
      let percent = (now - animation.start) / animation.time;
      percent = Math.min(1, Math.max(0, percent));
      percent = animation.accelleration(percent);
      const value = animation.from + (animation.to - animation.from) * percent;

      animation.handler(value, percent, animation);
      if (now > animation.stop) {
        this.stop(animation.name);
      }
    }
    if (this.counter > 0) {
      window.requestAnimationFrame(this.tickHandler);
    }
  };
}
