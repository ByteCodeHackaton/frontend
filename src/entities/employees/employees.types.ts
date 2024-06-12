export interface RootInterface {

    document: Document;
  
  }
  
  
  export interface Document {
    total_count: number;
    page_count: number;
    details: Detail[];
  }
  
  
  export interface Detail {
    date: string;
    time_work: string;
    id: string;
    fio: string;
    uchastok: string;
    smena: string;
    rank: string;
    sex: string;
    phone_work: string;
    phone_personal: string;
    tab_number: string;
    type_work: string;
  }

  export interface IRanksRoot {
    document: IRanksDocument;
  }
  
  
  export interface IRanksDocument {
    details: IRanksDetail[];
  }
  
  
  export interface IRanksDetail {
    id: string;
    rank: string;
  }