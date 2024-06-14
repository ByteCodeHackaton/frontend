export interface IUser {
    id: string
    login: string
    pass: string
}


export interface RootInterface {
    document: Document;
  }
  
  
  export interface Document {
    details: Detail[];
  }
  
  
  export interface Detail {
    id: string;
    role: string;
