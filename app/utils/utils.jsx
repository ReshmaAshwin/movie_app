export function getYear(dateString) {
    const date = new Date(dateString);
    return date.getFullYear();
}

export function convertMinutesToHours(minutes) {
    const hours = Math.floor(minutes / 60); 
    const remainingMinutes = minutes % 60; 
    return { hours, minutes: remainingMinutes };
  }

