export interface iApplication {
  id: string;
  name: string;
  price: number;
  status: string;
  client: string;
  company: string;
  requestDate: string;
  estimationDate: string;
}

export interface iMeeting {
  id: string;
  client: string;
  company: string;
  date: Date;
}