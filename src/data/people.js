import people from "./people.json";

// Highest rank first. A rank not listed here sorts to the bottom. Someone
// whose place isn't their current rank sets `sortAs` to one of these: a
// retired officer serving as a CI sits under the OC rather than with the CIs.
export const STAFF_RANKS = [
  "Sqn Ldr",
  "Flt Lt",
  "Wg Cdr (Ret'd)",
  "Fg Off",
  "Plt Off",
  "WO",
  "FS",
  "Sgt",
  "Cpl",
  "CI",
];

// Each NCO rank gets its own section on the page, in this order.
export const NCO_RANKS = [
  { rank: "CWO", label: "Cadet Warrant Officer" },
  { rank: "FS", label: "Flight Sergeants" },
  { rank: "Sgt", label: "Sergeants" },
  { rank: "Cpl", label: "Corporals" },
];

const rankIndex = (order, rank) => {
  const i = order.indexOf(rank);
  return i === -1 ? order.length : i;
};

// By rank, then by name. Staff names start with a first name and NCO names
// with an initial, so a plain compare gives alphabetical order within a rank.
const sortPeople = (list, order) =>
  [...list].sort((a, b) => rankIndex(order, a.sortAs ?? a.rank) - rankIndex(order, b.sortAs ?? b.rank) || a.name.localeCompare(b.name));

export const staff = sortPeople(people.staff, STAFF_RANKS);
export const ncos = sortPeople(people.ncos, NCO_RANKS.map((r) => r.rank));
