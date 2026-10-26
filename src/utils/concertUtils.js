/**
 * Determines if a concert date has passed based on the current local time / date.
 * Supports explicit dateISO (e.g. "2026-09-22"), or parses "DD Month" string.
 */
export const isConcertPassed = (concert, referenceDate = new Date()) => {
  if (!concert) return false;

  // 1. If explicit ISO date is provided
  if (concert.dateISO) {
    const concertDate = new Date(`${concert.dateISO}T23:59:59`);
    if (!isNaN(concertDate.getTime())) {
      return referenceDate > concertDate;
    }
  }

  // 2. Parse "DD Month" or "DD Month YYYY" from concert.date
  if (concert.date) {
    const defaultYear = concert.year || 2026;
    const match = concert.date.match(/(\d{1,2})\s+([A-Za-z]+)(?:\s+(\d{4}))?/);
    if (match) {
      const day = parseInt(match[1], 10);
      const monthStr = match[2].toLowerCase();
      const concertYear = match[3] ? parseInt(match[3], 10) : defaultYear;

      const months = {
        january: 0, jan: 0,
        february: 1, feb: 1,
        march: 2, mar: 2,
        april: 3, apr: 3,
        may: 4,
        june: 5, jun: 5,
        july: 6, jul: 6,
        august: 7, aug: 7,
        september: 8, sep: 8, sept: 8,
        october: 9, oct: 9,
        november: 10, nov: 10,
        december: 11, dec: 11,
      };

      if (monthStr in months) {
        // End of the concert day (23:59:59)
        const concertEndDate = new Date(concertYear, months[monthStr], day, 23, 59, 59);
        return referenceDate > concertEndDate;
      }
    }
  }

  return false;
};

/**
 * Extracts day and month for calendar-style date display.
 */
export const parseConcertDateParts = (dateStr) => {
  if (!dateStr) return { day: "", month: "", monthFull: "" };
  const match = dateStr.match(/(\d{1,2})\s+([A-Za-z]+)/);
  if (match) {
    return {
      day: match[1],
      month: match[2].slice(0, 3).toUpperCase(),
      monthFull: match[2],
    };
  }
  return { day: dateStr, month: "", monthFull: "" };
};

/**
 * Parses concert data into clean title, admission badge, and event details.
 * Handles patterns such as "Event Title — Free entry" or private events,
 * and calculates date parts and passed status.
 */
export const parseConcertInfo = (concert, referenceDate = new Date()) => {
  let title = "";
  let admission = "";

  if (concert?.description) {
    // Split on em-dash (—), en-dash (–), pipe (|), or hyphen surrounded by whitespace
    const parts = concert.description.split(/\s*[—–|]\s*|\s+-\s+/);
    if (parts.length > 1) {
      title = parts[0].trim();
      admission = parts.slice(1).join(" — ").trim();
    } else {
      title = concert.description.trim();
    }
  }

  if (concert?.private) {
    admission = "Private Event";
  } else if (!admission) {
    admission = "Free Entry";
  }

  if (!title) {
    title = concert?.city ? `${concert.city} Concert` : "Concert";
  }

  const isFree = admission.toLowerCase().includes("free");
  const isPrivate = Boolean(concert?.private || admission.toLowerCase().includes("private"));
  const isPassed = isConcertPassed(concert, referenceDate);
  const dateParts = parseConcertDateParts(concert?.date);

  return {
    title,
    admission,
    isFree,
    isPrivate,
    isPassed,
    day: dateParts.day,
    month: dateParts.month,
    monthFull: dateParts.monthFull,
  };
};
