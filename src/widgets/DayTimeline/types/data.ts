export interface IData {
  document: IDocument;
}

export interface IDocument {
  date: string;
  order: IOrder[];
}

export interface IOrder {
  number: number;
  startTime: string;
  endTime: string;
  personscount?: number;
  person: IPerson[];
  stationend: string;
  stationstart: string;
}

export interface IPerson {
  fio: string;
  station: string;
}
