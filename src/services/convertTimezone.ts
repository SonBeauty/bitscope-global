import { format, utcToZonedTime } from "date-fns-tz";

export function convertCreatedAt(createdAt: Date) {
  const gmtTime = new Date(createdAt);
  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const zonedTime = utcToZonedTime(gmtTime, userTimezone);

  return format(zonedTime, "yyyy.MM.dd 'at' HH:mm:ss");
}
