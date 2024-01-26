export const formatUpdatedAt = (inputDate) => {
  const date = new Date(inputDate);
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
    timeZone: 'UTC',
  };

  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

  return `Updated at ${formattedDate}`;
};
