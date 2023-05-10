export interface IRoom {
  roomName: String;
  roomAmount: Number | undefined;
  numberOfRooms: Number | undefined;
}

export interface IAccomodation {
  destinationName: string;
  address: string;
  contact: string;
  description: string;
  websiteUrl: string;
}

export interface ICombined extends IAccomodation {
  centerImage: any;
  rooms: IRoom[];
}

export interface ISearchBody {
  departure_time?: string;
  arrival_time?: string;
  departure_location?: string;
  arrival_location?: string;
  hotel?: string;
}

export interface IResponse {
  success: boolean;
  message: string;
  data: any;
  accomodations?: any;
}
