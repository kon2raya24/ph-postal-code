
// Type exports for consumers
// Add specific types as needed
/**
 * validatePostalCode
 * @param code
 */
export function validatePostalCode(code: string): boolean {
  return /^\d{4}$/.test(code.trim());
}
