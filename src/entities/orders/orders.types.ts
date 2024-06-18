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

  export interface IActiveRootInterface {
    success: boolean;
    message: string;
    responseObject: IActiveResponseObject;
  }

  export interface IActiveGetRootInterface {
    success: boolean;
    message: string;
    responseObject: IActiveResponseObject[];
  }
  
  
  export interface IActiveResponseObject {
    id: string;
    fio: string;
    request_date: string;
    path_from: string;
    path_to: string;
    average_path_time: number;
    note: string;
    place?: any;
    start_work: string;
    end_work: string;
    employess: string[];
  }

  export interface IBodyRootInterface {

    id: string;
  
    fio: string;
  
    path_from: string;
  
    path_to: string;
  
    request_date: string;
  
    note: string;
  
    employees_count: number;
  
  }