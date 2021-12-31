import ms from 'ms'
import lunchtime from './lunchtime'
import millisecondsUntil from './millisecondsUntil'

/**
 * Calculate the time until lunch
 *
 * @public
 * @param hours - Hours until lunch
 * @param minutes - Minutes until lunch
 * @returns The time until lunch
 */
export default function howLongUntilLunch(hours = 12, minutes = 30): string {
  const millisecondsUntilLunchTime = millisecondsUntil(lunchtime(hours, minutes))
  return ms(millisecondsUntilLunchTime, {long: true})
}
