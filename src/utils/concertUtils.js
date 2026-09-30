/**
 * Parses concert data into clean title, admission badge, and event details.
 * Handles patterns such as "Event Title — Free entry" or private events.
 */
export const parseConcertInfo = (concert) => {
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

  return {
    title,
    admission,
    isFree,
    isPrivate,
  };
};
