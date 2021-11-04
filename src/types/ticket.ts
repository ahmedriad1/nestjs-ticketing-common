export type Ticket = {
  id: string;
  title: string;
  price: number;
  ownerId: string;
  version: number;
  orderId?: string;
};
