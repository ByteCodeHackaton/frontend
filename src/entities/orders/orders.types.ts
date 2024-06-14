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
  id_pas: string;
  datetime: string;
  time3: string;
  time4: string;
  cat_pas: string;
  status: string;
  tpz: string;
  insp_sex_m: string;
  insp_sex_f: string;
  time_over: string;
  id_st1: string;
  id_st2: string;
}

export interface IStatusesRootInterface {
    document: IStatusesDocument;
  }
  
  
  export interface IStatusesDocument {
    details: IStatusesDetail[];
  }
  
  
  export interface IStatusesDetail {
    id: string;
    state: string;
  }

  export interface ICategoryRootInterface {
    document: ICategoryDocument;
  }
  
  export interface ICategoryDocument {
    details: ICategoryDetail[];
  }
  
  export interface ICategoryDetail {
    id: string;
    category: string;
  }
