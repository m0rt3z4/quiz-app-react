export const imaginationCueTypes = {
  RED: 'RED',
  GREEN: 'GREEN',
  MIXED_HORIZENTAL: 'MIXED_HORIZENTAL',
  MIXED_VERTICAL: 'MIXED_VERTICAL',
  MIXED: 'MIXED',
}

export const recallTypes = {
  RG: [imaginationCueTypes.RED, imaginationCueTypes.GREEN],
  GR: [imaginationCueTypes.GREEN, imaginationCueTypes.RED],
  VH: [
    imaginationCueTypes.MIXED_VERTICAL,
    imaginationCueTypes.MIXED_HORIZENTAL,
  ],
  HV: [
    imaginationCueTypes.MIXED_HORIZENTAL,
    imaginationCueTypes.MIXED_VERTICAL,
  ],
}
