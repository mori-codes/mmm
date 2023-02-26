/** 
 * Vaya friki poniendo JSDOC
 */
function formatToTwoDigitString(digit: number) {
  if (digit / 10 < 1) {
    return `0${digit}`
  }

  return `${digit}`
}

/**
 * Calculate duration between two dates in milliseconds
 * @param date1: Date
 * @param date2: Date
 *
 * @return number: duration in milliseconds
 */
export function getDurationBetweenDates(date1: Date, date2: Date) {
  return Math.abs(date1.setMilliseconds(0) - date2.setMilliseconds(0))
}

/**
 * Format milliseconds to transform them into days, hours, minutes and seconds
 * @param milliseconds: number
 *
 * @return object{days, hours, minutes, seconds}: non-accumulated time
 */
export function formatMillisecondsToExtendedTime(milliseconds: number) {
  const seconds = Math.floor(milliseconds / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  return {
    days: formatToTwoDigitString(days),
    hours: formatToTwoDigitString(hours % 24),
    minutes: formatToTwoDigitString(minutes % 60),
    seconds: formatToTwoDigitString(seconds % 60),
  }
}
