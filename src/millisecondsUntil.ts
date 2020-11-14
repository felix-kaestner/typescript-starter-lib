/**
 * Calculate the number of milliseconds until the given date
 *
 * @param date - The date to get the milliseconds until
 * @returns The number of of milliseconds until the given Date
 * @public
 */
export default function millisecondsUntil(date: Date): number {
  return date.getTime() - Date.now()
}
