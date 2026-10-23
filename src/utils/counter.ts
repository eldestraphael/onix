/**
 * Pure interpolation calculation for 1-second count-up animations.
 */

export function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export function interpolateValue(start: number, end: number, progress: number): number {
  const eased = easeOutExpo(Math.min(1, Math.max(0, progress)));
  return start + (end - start) * eased;
}

export function formatMetricNumber(
  id: string,
  progress: number
): string {
  if (progress <= 0) {
    if (id === 'tier4') return 'Tier IV';
    if (id === 'sla') return '0.000%';
    if (id === 'carriers') return '0+';
    if (id === 'solar') return '0 kW';
    if (id === 'operating') return '2000';
  }

  if (progress >= 1) {
    if (id === 'tier4') return 'Tier IV';
    if (id === 'sla') return '99.995%';
    if (id === 'carriers') return '12+';
    if (id === 'solar') return '640 kW';
    if (id === 'operating') return '2019';
  }

  switch (id) {
    case 'tier4':
      return 'Tier IV';
    case 'sla': {
      const val = interpolateValue(0, 99.995, progress);
      return `${val.toFixed(3)}%`;
    }
    case 'carriers': {
      const val = Math.floor(interpolateValue(0, 12, progress));
      return `${val}+`;
    }
    case 'solar': {
      const val = Math.floor(interpolateValue(0, 640, progress));
      return `${val} kW`;
    }
    case 'operating': {
      const val = Math.floor(interpolateValue(2000, 2019, progress));
      return `${val}`;
    }
    default:
      return '';
  }
}
