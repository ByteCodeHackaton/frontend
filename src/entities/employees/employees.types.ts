export interface RootInterface {

    document: Document;
  
  }
  
  
  export interface Document {
  
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