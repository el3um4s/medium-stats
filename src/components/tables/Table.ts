export interface Table_Labels {
  key: string;
  title: string;
  type: string;
  width?: string;
  align?: string;
}

export interface Table_Totals {
  key: string;
  title: string;
  type: string;
  width?: string;
  align?: string;
  value: number | string;
}

export interface Table_Orders {
  key: string;
  functionOrderASC: Function;
  functionOrderDESC: Function;
}
