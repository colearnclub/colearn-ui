const DEFAULT_DURATION = 400;

const solveEpsilon = (duration: number): number => 1.0 / (200.0 * duration);

export function unitBezier(p1x: number, p1y: number, p2x: number, p2y: number) {
  const cx = 3.0 * p1x;
  const bx = 3.0 * (p2x - p1x) - cx;
  const ax = 1.0 - cx - bx;
  const cy = 3.0 * p1y;
  const by = 3.0 * (p2y - p1y) - cy;
  const ay = 1.0 - cy - by;

  const sampleCurveX = (t: number): number => ((ax * t + bx) * t + cx) * t;
  const sampleCurveY = (t: number): number => ((ay * t + by) * t + cy) * t;

  const sampleCurveDerivativeX = (t: number): number =>
    (3.0 * ax * t + 2.0 * bx) * t + cx;

  const solveCurveX = (x: number, epsilon: number): number => {
    let t0;
    let t1;
    let t2;
    let x2;
    let d2;
    let i;

    for (t2 = x, i = 0; i < 8; i += 1) {
      x2 = sampleCurveX(t2) - x;
      if (Math.abs(x2) < epsilon) {
        return t2;
      }
      d2 = sampleCurveDerivativeX(t2);
      if (Math.abs(d2) < 1e-6) {
        break;
      }
      t2 -= x2 / d2;
    }

    // Fall back to the bisection method for reliability.
    t0 = 0.0;
    t1 = 1.0;
    t2 = x;

    if (t2 < t0) {
      return t0;
    }
    if (t2 > t1) {
      return t1;
    }

    while (t0 < t1) {
      x2 = sampleCurveX(t2);
      if (Math.abs(x2 - x) < epsilon) {
        return t2;
      }
      if (x > x2) {
        t0 = t2;
      } else {
        t1 = t2;
      }
      t2 = (t1 - t0) * 0.5 + t0;
    }

    // Failure.
    return t2;
  };

  const solve = (x: number, epsilon: number): number =>
    sampleCurveY(solveCurveX(x, epsilon));

  return (x: number, duration?: number): number =>
    solve(x, solveEpsilon(+(duration ?? DEFAULT_DURATION)));
}

export const linear = unitBezier(0.0, 0.0, 1.0, 1.0);
export const ease = unitBezier(0.25, 0.1, 0.25, 1.0);
export const easeIn = unitBezier(0.42, 0, 1.0, 1.0);
export const easeOut = unitBezier(0, 0, 0.58, 1.0);
export const easeInOut = unitBezier(0.42, 0, 0.58, 1.0);

export function cubicBezier(
  p1x: number,
  p1y: number,
  p2x: number,
  p2y: number,
  x: number,
  duration: number,
): number {
  return unitBezier(p1x, p1y, p2x, p2y)(x, duration);
}
