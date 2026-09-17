/**
 * Function: countdownTimer
 * Description: Creates a countdown timer that logs the remaining time at regular intervals and stops at 0.
 */

function countdownTimer(startTime, interval) {
  // Initialize the remaining time
  let remainingTime = startTime;

  // Set up a timer using setInterval
  const timerId = setInterval(() => {
    // Log the remaining time
    console.log(remainingTime);

    // Decrement the remaining time
    remainingTime--;

    // Stop the timer when time reaches 0
    if (remainingTime === 0) {
      clearInterval(timerId);
    }
  }, interval);

  // Return the timer ID for validation
  return timerId;
}

module.exports = { countdownTimer };