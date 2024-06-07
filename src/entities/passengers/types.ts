export interface RootInterface {
  document: Document;
}

export interface Document {
  details: Detail[];
}

export interface Detail {
  id: string;
  fio: string;
  phone: string;
  category: string;
  sex: string;
  description: string;
  eks: number;
}
