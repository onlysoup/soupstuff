export default function toDateTime(date: string): string {
  return new Date(date).toISOString().slice(0, 10);
}