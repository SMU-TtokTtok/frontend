export function formatDateToDot(dateStr: string): string {
  // "2025-03-01" → "2025.03.01"
  return dateStr.replace(/-/g, '.');
}

export function formatDateToMonthDay(dateStr: string): string {
  // "2025-01-03" → "01.03"
  const [, month, day] = dateStr.split('-');
  return `${month}.${day}`;
}

export function formatDateToDot2(input: string): string {
  // "2025-03-01T14:43:20.180Z" → "2025.03.01"
  const date = new Date(input);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 0-indexed
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}.${month}.${day}`;
}

export function formatToMonthDay2(input: string): string {
  // "2025-03-01T14:43:20.180Z" → "03.01"
  const date = new Date(input);
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${month}.${day}`;
}
