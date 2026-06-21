export function formatPostalCode(code: string): string {
  const cleaned = code.replace(/[^0-9]/g, "");
  if (cleaned.length > 4) throw new Error("Postal code must be 4 digits");
  return cleaned.padStart(4, "0");
}
