export type TenderStatus = 1 | 2 | 3;

export interface Tender {
  id: string;
  title: string;
  products: number;
  participants: number;
  date: string;
  status: TenderStatus;
}
