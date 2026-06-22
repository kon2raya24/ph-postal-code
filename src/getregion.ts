
// Type exports for consumers
// Add specific types as needed
/**
 * getRegion
 * @param code
 */
export function getRegion(code: string): string {
  const prefix = parseInt(code.slice(0, 2));
  if (prefix >= 0 && prefix <= 9) return "Metro Manila";
  if (prefix >= 10 && prefix <= 19) return "Metro Manila";
  if (prefix >= 20 && prefix <= 29) return "Rizal / Calabarzon";
  if (prefix >= 30 && prefix <= 39) return "Central Luzon";
  if (prefix >= 40 && prefix <= 49) return "Calabarzon";
  if (prefix >= 50 && prefix <= 59) return "Bicol Region";
  return "Other";
}
