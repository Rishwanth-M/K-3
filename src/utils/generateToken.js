export function generateToken() {
  const random = Math.floor(100000 + Math.random() * 900000);
  return `KRD${random}`;
}