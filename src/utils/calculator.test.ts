import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateIndicativeBudget, calculateInHouseRiskComparison } from './calculator.ts';

test('calculateIndicativeBudget calculates single rack 3kW properly', () => {
  const result = calculateIndicativeBudget({
    racks: 1,
    powerPerRackKw: 3,
    crossConnects: 2,
    remoteHandsTier: 'standard',
    contractMonths: 12,
  });

  assert.equal(result.totalPowerKw, 3);
  assert.equal(result.monthlyBasePowerKwh, 3 * 720);
  assert.equal(result.rackTierDescription, 'Single Rack Colocation');
  assert.ok(result.estimatedMonthlyLowUsd > 0);
  assert.ok(result.estimatedMonthlyHighUsd > result.estimatedMonthlyLowUsd);
  assert.equal(result.discountPercent, 0);
});

test('calculateIndicativeBudget applies discount for 36 months and pod naming', () => {
  const result = calculateIndicativeBudget({
    racks: 30,
    powerPerRackKw: 5,
    crossConnects: 4,
    remoteHandsTier: 'premium',
    contractMonths: 36,
  });

  assert.equal(result.totalPowerKw, 150);
  assert.equal(result.rackTierDescription, 'Pod of 30 Racks (Module 1)');
  assert.equal(result.discountPercent, 15);
  assert.ok(result.solarContributionKwhPerMonth > 0);
});

test('calculateInHouseRiskComparison yields higher downtime hours for in-house room', () => {
  const comparison = calculateInHouseRiskComparison(2);
  assert.ok(comparison.downtimeHoursDifference > 100);
  assert.ok(comparison.annualDieselCostUsd > 5000);
});
