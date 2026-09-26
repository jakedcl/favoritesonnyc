const OPEN_DAYS = new Set(["Mon", "Wed", "Thu", "Fri", "Sat", "Sun"]);

export type ServiceStatus = {
  live: string;
  quiet: string;
};

export function serviceStatus(now = new Date()): ServiceStatus {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(now);

  const read = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? "";

  const weekday = read("weekday");
  const minutes = Number(read("hour")) * 60 + Number(read("minute"));
  const opens = 17 * 60;
  const closes = 22 * 60;

  if (!OPEN_DAYS.has(weekday)) {
    return { live: "5–10", quiet: "opens wednesday at 5" };
  }

  if (minutes >= opens && minutes < closes) {
    return { live: "open until 10", quiet: "walk-ins welcome" };
  }

  if (minutes < opens) {
    return { live: "opens at 5", quiet: "walk-ins from 5" };
  }

  if (weekday === "Mon") {
    return { live: "5–10", quiet: "opens wednesday at 5" };
  }

  return { live: "5–10", quiet: "opens tomorrow at 5" };
}
