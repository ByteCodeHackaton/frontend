export interface RootInterface {
    success: boolean;
    message: string;
    responseObject: ResponseObject[];
  }
  
  
  export interface ResponseObject {
    node_id: string;
    station_id: string;
    station_name: string;
  }

  export interface IPathRootInterface {
    success: boolean;
    message: string;
    responseObject: IPathResponseObject;
  }
  
  
  export interface IPathResponseObject {
    time: number;
    stations: IPathStation[];
  }
  
  
  export interface IPathStation {
    node_id: string;
    station_id: string;
    station_name: string;
  }