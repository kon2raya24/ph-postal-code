
// Type exports for consumers
// Add specific types as needed
export function validatePostalCode(code: string): boolean {
  return /^\d{4}$/.test(code.trim());
}
