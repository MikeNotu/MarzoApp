export const BASE_URL = 'https://6222994f666291106a29f999.mockapi.io/api/v1';

export const COLORS = {
  TRUE_BLACK: '#000000',
  ARROW_BLACK: '#070707',
  BLACK: '#020202',
  BLUE: '#334FFA',
  GRAY: '#9B9898',
  WHITE: '#FFFFFF',
  GREEN: '#00B833',
  RED: '#FF0000',
  PINK: '#CFD6FF',
  TURQUOISE: '#40E0D0',
};

export type NavigationParam = {
  navigate: (route: string) => void;
};

export type PossibleMonths =
  | 'Enero'
  | 'Febrero'
  | 'Marzo'
  | 'Abril'
  | 'Mayo'
  | 'Junio'
  | 'Julio'
  | 'Agosto'
  | 'Septiembre'
  | 'Octubre'
  | 'Noviembre'
  | 'Diciembre';

export const months = {
  '01': 'enero',
  '02': 'febrero',
  '03': 'marzo',
  '04': 'abril',
  '05': 'mayo',
  '06': 'junio',
  '07': 'julio',
  '08': 'agosto',
  '09': 'septiembre',
  '10': 'octubre',
  '11': 'noviembre',
  '12': 'diciembre',
};
