import people from "./people.json";

// Rank hierarchy, highest first. Used to order the staff/NCO photo grids by
// rank, then alphabetically by first name (NCOs use an initial). Anything not
// listed here is pushed to the bottom (in its given order).
export const STAFF_RANK_ORDER = [
  "Sqn Ldr",
  "Flt Lt",
  "Fg Off",
  "Plt Off",
  "WO",
  "FS",
  "Sgt",
  "Cpl",
  "CI",
];

export const NCO_RANK_ORDER = ["CWO", "MWO", "WO", "CFS", "FS", "Sgt", "Cpl", "Cdt"];

function rankIndex(order, rank) {
  const i = order.indexOf(rank);
  return i === -1 ? order.length : i;
}

// Sort by rank (per the given order) then alphabetically by name. The name's
// leading token is the first name (staff) or initial (NCOs), so a plain string
// compare orders them correctly.
export function sortPeople(list, rankOrder) {
  return [...list].sort((a, b) => {
    const r = rankIndex(rankOrder, a.rank) - rankIndex(rankOrder, b.rank);
    if (r !== 0) return r;
    return a.name.localeCompare(b.name);
  });
}

export const staff = sortPeople(people.staff, STAFF_RANK_ORDER);
export const ncos = sortPeople(people.ncos, NCO_RANK_ORDER);
