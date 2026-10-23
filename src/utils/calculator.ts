/**
 * Calculation utilities for Onix Data Centres.
 * Decoupled pure logic for indicative colocation estimator & in-house server room comparison.
 */

export interface ColocationConfig {
  racks: number;
  powerPerRackKw: 3 | 5;
  crossConnects: number;
  remoteHandsTier: 'standard' | 'premium';
  contractMonths: 12 | 24 | 36;
}

export interface IndicativeBudget {
  totalPowerKw: number;
  monthlyBasePowerKwh: number;
  rackTierDescription: string;
  solarContributionKwhPerMonth: number;
  estimatedMonthlyLowUsd: number;
  estimatedMonthlyHighUsd: number;
  discountPercent: number;
}

/**
 * Calculates indicative budget range and technical allocations.
 * Note: Actual pricing is provided by quotation per the brief's "What will it cost?" principle.
 */
export function calculateIndicativeBudget(config: ColocationConfig): IndicativeBudget {
  const racks = Math.max(1, config.racks);
  const totalPowerKw = racks * config.powerPerRackKw;
  // Assume ~720 hours/month average
  const monthlyBasePowerKwh = totalPowerKw * 720;
  
  // Onix has a 640 kW solar farm on-site covering daytime load
  // Roughly 35-45% of daytime operational load across the facility
  const solarContributionKwhPerMonth = Math.round(monthlyBasePowerKwh * 0.38);

  let rackTierDescription = 'Single Rack Colocation';
  if (racks >= 30 && racks < 50) {
    rackTierDescription = 'Pod of 30 Racks (Module 1)';
  } else if (racks >= 50 && racks < 100) {
    rackTierDescription = 'Pod of 50 Racks (Module 1)';
  } else if (racks >= 100) {
    rackTierDescription = 'Dedicated Private Cage';
  } else if (racks > 1) {
    rackTierDescription = `${racks} Multi-Rack Suite`;
  }

  // Base pricing indicators (illustrative scale per kW & footprint)
  const powerCostPerKwMonth = config.powerPerRackKw === 3 ? 320 : 290;
  const rackSpaceCostPerMonth = 450;
  const crossConnectCost = config.crossConnects * 110;
  const remoteHandsCost = config.remoteHandsTier === 'premium' ? 350 : 120;

  // Duration discounts
  const discountPercent = config.contractMonths === 36 ? 15 : config.contractMonths === 24 ? 8 : 0;
  const discountMultiplier = (100 - discountPercent) / 100;

  const rawTotal = (racks * (rackSpaceCostPerMonth + (config.powerPerRackKw * powerCostPerKwMonth)) + crossConnectCost + remoteHandsCost) * discountMultiplier;
  
  const estimatedMonthlyLowUsd = Math.round(rawTotal * 0.92);
  const estimatedMonthlyHighUsd = Math.round(rawTotal * 1.08);

  return {
    totalPowerKw,
    monthlyBasePowerKwh,
    rackTierDescription,
    solarContributionKwhPerMonth,
    estimatedMonthlyLowUsd,
    estimatedMonthlyHighUsd,
    discountPercent,
  };
}

/**
 * Calculates in-house server room hidden risks and operational expenses.
 */
export function calculateInHouseRiskComparison(inHouseRacks: number, monthlyDieselLitres = 850) {
  const racks = Math.max(1, inHouseRacks);
  // Ghana commercial diesel approx $1.25 / litre equivalent
  const annualDieselCostUsd = monthlyDieselLitres * 1.25 * 12;
  // UPS battery replacement every 3 years for in-house room (~$3,000 amortized)
  const annualUpsMaintenanceUsd = racks * 1200;
  // Dedicated cooling maintenance & refrigerant refills
  const annualCoolingServiceUsd = 4500;
  // Estimated annual risk of single power disturbance (Ghana grid events average 14-22 hrs/yr)
  const uptimeDifferencePercent = (99.995 - 98.2).toFixed(2); // 99.995% Tier IV vs ~98.2% typical Accra office server room
  const downtimeHoursDifference = ((100 - 98.2) * 87.6) - ((100 - 99.995) * 87.6); // ~157.6 hrs vs ~0.44 hrs

  return {
    annualDieselCostUsd,
    annualUpsMaintenanceUsd,
    annualCoolingServiceUsd,
    uptimeDifferencePercent,
    downtimeHoursDifference: Math.round(downtimeHoursDifference),
  };
}
