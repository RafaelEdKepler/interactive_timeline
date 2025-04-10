export function computeItemDimensions(start, end, timelineStart, dayWidth, minWidth) {
  const oneDayMs = 1000 * 60 * 60 * 24;
  const startDate = new Date(start);
  const endDate = new Date(end);
  const timelineStartDate = new Date(timelineStart);

  const durationInDays = Math.floor((endDate - startDate) / oneDayMs) + 1;
  const offsetInDays = Math.floor((startDate - timelineStartDate) / oneDayMs);

  const actualWidth = durationInDays * dayWidth;
  const width = Math.max(actualWidth, minWidth);

  const left = offsetInDays * dayWidth;

  return { left, width };
}

export function getTimelineStartDate(lanes) {
  let minDate = lanes[0][0]?.start;
  for (const lane of lanes) {
    for (const item of lane) {
      if (new Date(item.start) < new Date(minDate)) {
        minDate = item.start;
      }
    }
  }
  return minDate;
}

export function getRandomHexColor() {
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += Math.floor(Math.random() * 16).toString(16);
  }
  return color;
}