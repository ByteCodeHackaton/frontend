export interface RootInterface {
  document: Document;
}

export interface Document {
  total_count: number;
  page_count: number;
  details: Detail[];
}

export interface Detail {
  id: string;
  fio: string;
  phone: string;
  category: string;
  sex: string;
  description: string;
  eks: string;
}
