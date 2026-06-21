export function validatePostalCode(code: string): boolean {
  return /^\d{4}$/.test(code.trim());
}
