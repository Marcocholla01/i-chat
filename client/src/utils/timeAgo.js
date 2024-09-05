// // src/utils/timeAgo.js

// import moment from "moment";

// /**
//  * Formats a date to a human-readable string indicating time ago.
//  * @param {Date|string} date - The date to format. Can be a Date object or an ISO date string.
//  * @returns {string} - A string representing the time elapsed.
//  */
// export function timeAgo(date) {
//   return moment(date).fromNow();
// }

// src/utils/timeAgo.js

/**
 * Formats a date to a human-readable string indicating time ago.
 * @param {Date|string} date - The date to format. Can be a Date object or an ISO date string.
 * @returns {string} - A string representing the time elapsed.
 */
export function timeAgo(date) {
  const now = new Date();
  const pastDate = typeof date === "string" ? new Date(date) : date;
  const seconds = Math.floor((now - pastDate) / 1000);

  const intervals = [
    { label: "second", seconds: 60 },
    { label: "minute", seconds: 3600 },
    { label: "hour", seconds: 86400 },
    { label: "day", seconds: 604800 },
    { label: "week", seconds: 2419200 },
    { label: "month", seconds: 2592000 },
    { label: "year", seconds: 31536000 },
  ];

  for (let i = 0; i < intervals.length; i++) {
    const interval = intervals[i];
    if (seconds < interval.seconds) {
      const count = Math.floor(
        seconds / (interval.seconds / (interval.label === "second" ? 1 : 60))
      );
      return `${count} ${interval.label}${count > 1 ? "s" : ""} ago`;
    }
  }

  return "just now";
}
