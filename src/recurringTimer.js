/**
 * Function: recurringTimer
 * Description: Starts a recurring timer that logs a message at fixed intervals.
 */

function recurringTimer(message, interval) {
  // Set up a timer using setInterval to log the message
  const timerId = setInterval(() => {
    console.log(message);
  }, interval);

  // Return the timer ID
  return timerId;
}

/**
 * Function: stopRecurringTimer
 * Description: Stops a recurring timer using its ID.
 */

function stopRecurringTimer(timerId) {
  // Stop the timer using clearInterval
  clearInterval(timerId);
}

module.exports = { recurringTimer, stopRecurringTimer };