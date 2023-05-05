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
