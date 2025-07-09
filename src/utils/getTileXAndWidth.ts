import { dayWidth, minutesInHour, singleDayWidth, zoom2ColumnWidth } from "@/constants";
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
    const dayDiff = visibleStart.diff(range.startDate, "day");

    const fullDays = visibleEnd.startOf("day").diff(visibleStart.startOf("day"), "day");
    const endsLaterInDay = visibleEnd.diff(visibleEnd.clone().startOf("day"), "minute") > 0;
    const totalDays = fullDays + (endsLaterInDay ? 1 : 0);

    x = dayDiff * cellWidth;
    width = totalDays * cellWidth;
  }

  return {
    x: Math.max(0, x),
    width
  };
};
