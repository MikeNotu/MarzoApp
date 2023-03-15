export const BASE_URL = 'https://6222994f666291106a29f999.mockapi.io/api/v1';

export const COLORS = {
  TRUE_BLACK: '#000000',
  ARROW_BLACK: '#070707',
  BLACK: '#020202',
  BLUE: '#334FFA',
  GRAY: '#9B9898',
  WHITE: '#FFFFFF',
};

type NavigationParam = {
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
