/**
 * Tile-grid coordinates for the interactive state map. This is a schematic
 * cartogram (the same "grid map" pattern used by NPR, Bloomberg, and most
 * US election-results sites) — every state gets equal visual weight and a
 * generous click target, which a geographically precise map can't offer for
 * small Northeastern states. Position is approximate by design, not a
 * literal projection.
 */
export const STATE_GRID: Record<string, { col: number; row: number }> = {
  AK: { col: 1, row: 1 },
  HI: { col: 1, row: 8 },

  WA: { col: 2, row: 2 },
  OR: { col: 2, row: 3 },
  CA: { col: 2, row: 4 },

  ID: { col: 3, row: 2 },
  NV: { col: 3, row: 3 },
  AZ: { col: 3, row: 4 },

  MT: { col: 4, row: 1 },
  WY: { col: 4, row: 2 },
  UT: { col: 4, row: 3 },
  NM: { col: 4, row: 4 },

  ND: { col: 5, row: 1 },
  SD: { col: 5, row: 2 },
  CO: { col: 5, row: 3 },

  MN: { col: 6, row: 1 },
  NE: { col: 6, row: 2 },
  KS: { col: 6, row: 3 },
  OK: { col: 6, row: 4 },
  TX: { col: 6, row: 5 },

  IA: { col: 7, row: 2 },
  MO: { col: 7, row: 3 },
  AR: { col: 7, row: 4 },
  LA: { col: 7, row: 5 },

  WI: { col: 8, row: 1 },
  IL: { col: 8, row: 2 },
  MS: { col: 8, row: 5 },

  MI: { col: 9, row: 1 },
  IN: { col: 9, row: 2 },
  KY: { col: 9, row: 3 },
  TN: { col: 9, row: 4 },
  AL: { col: 9, row: 5 },

  OH: { col: 10, row: 2 },
  WV: { col: 10, row: 3 },
  GA: { col: 10, row: 5 },
  FL: { col: 10, row: 6 },

  NY: { col: 11, row: 1 },
  PA: { col: 11, row: 2 },
  VA: { col: 11, row: 3 },
  NC: { col: 11, row: 4 },
  SC: { col: 11, row: 5 },

  VT: { col: 12, row: 1 },
  MA: { col: 12, row: 2 },
  NJ: { col: 12, row: 3 },
  MD: { col: 12, row: 4 },

  NH: { col: 13, row: 1 },
  RI: { col: 13, row: 2 },
  CT: { col: 13, row: 3 },
  DE: { col: 13, row: 4 },

  ME: { col: 14, row: 1 },
};

export const GRID_COLS = 14;
export const GRID_ROWS = 8;
