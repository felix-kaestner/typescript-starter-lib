/**
 * Get the next lunch time
 *
 * @param hours - The hour of the current time
 * @param minutes - The minutes of the current time
 * @returns The next lunch time
 * @public
 */
export default function getNextLunchtime(hours: number, minutes: number): Date {
  const lunchtime = new Date()

  lunchtime.setHours(hours)
  lunchtime.setMinutes(minutes)
  lunchtime.setSeconds(0)
  lunchtime.setMilliseconds(0)

  // if we've already had lunch today, start planning
  // tomorrow's lunch
  if (lunchtime.getTime() < Date.now())
    lunchtime.setDate(lunchtime.getDate() + 1)

  return lunchtime
}
