export function formatDateToDot(dateStr: string): string {
  // "2025-03-01" → "2025.03.01"
  return dateStr.replace(/-/g, '.');
}

export function formatDateToMonthDay(dateStr: string): string {
  // "2025-01-03" → "01.03"
  const [, month, day] = dateStr.split('-');
  return `${month}.${day}`;
}
