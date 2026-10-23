import test from 'node:test';
import assert from 'node:assert/strict';
import { formatMetricNumber, interpolateValue } from './counter.ts';

test('formatMetricNumber returns proper values at 0 progress', () => {
  assert.equal(formatMetricNumber('sla', 0), '0.000%');
  assert.equal(formatMetricNumber('carriers', 0), '0+');
  assert.equal(formatMetricNumber('solar', 0), '0 kW');
  assert.equal(formatMetricNumber('tier4', 0), 'Tier IV');
});

test('formatMetricNumber returns exact target values at 1 progress', () => {
  assert.equal(formatMetricNumber('sla', 1), '99.995%');
  assert.equal(formatMetricNumber('carriers', 1), '12+');
  assert.equal(formatMetricNumber('solar', 1), '640 kW');
  assert.equal(formatMetricNumber('operating', 1), '2019');
  assert.equal(formatMetricNumber('tier4', 1), 'Tier IV');
});

test('formatMetricNumber interpolates intermediate values correctly', () => {
  const halfSla = formatMetricNumber('sla', 0.5);
  assert.ok(halfSla.includes('%'));
  const num = parseFloat(halfSla.replace('%', ''));
  assert.ok(num > 50 && num < 100);
});
