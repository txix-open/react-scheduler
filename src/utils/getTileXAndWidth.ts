import { dayWidth, minutesInHour, singleDayWidth, zoom2ColumnWidth, hoursInDay } from "@/constants";
import { DatesRange } from "./getDatesRange";

export const getTileXAndWidth = (item: DatesRange, range: DatesRange, zoom: number) => {
  const cellWidth = zoom === 0 ? singleDayWidth : zoom === 2 ? zoom2ColumnWidth : dayWidth;

  const visibleStart = item.startDate.isBefore(range.startDate) ? range.startDate : item.startDate;
  const visibleEnd = item.endDate.isAfter(range.endDate) ? range.endDate : item.endDate;

  if (visibleStart.isSameOrAfter(visibleEnd)) {
    return { x: 0, width: 0 };
  }

  let x = 0;
  let width = 0;

  if (zoom === 2) {
    const minutesFromStart = visibleStart.diff(range.startDate, "minute");
    const durationMinutes = visibleEnd.diff(visibleStart, "minute");

    x = (minutesFromStart / minutesInHour + 1) * cellWidth - cellWidth / 2;
    width = (durationMinutes / minutesInHour) * cellWidth;
  } else {
    const s1 = visibleStart.startOf("day");
    const s2 = range.startDate.startOf("day");
    const dayDiff = s1.diff(s2, "day");

    const totalDays = visibleEnd.startOf("day").diff(visibleStart.startOf("day"), "day") + 1;

    x = dayDiff * cellWidth;
    width = totalDays * cellWidth;
  }

  return {
    x: Math.max(0, x),
    width
  };
};
