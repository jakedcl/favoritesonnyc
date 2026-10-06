/** Clean geometric tubes. Arcs and straight lines only, stroked at a uniform width. */
export const PIE_TUBE = {
  ring: { d: "M249.05 140.48 A126.26 126.26 0 1 1 140.81 62.07", width: 10 },
  slice: { d: "M132.28 195.77 L241.69 126.61 A130.10 130.10 0 0 0 151.60 55.19 Z", width: 9.5 },
  crust: { d: "M166.19 4.13 A148.53 148.53 0 0 1 277.29 97.20 L257.21 113.59 A152.20 152.20 0 0 0 159.31 36.17 Z", width: 11 },
} as const;
