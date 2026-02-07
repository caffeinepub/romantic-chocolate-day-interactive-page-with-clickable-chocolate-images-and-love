export interface Chocolate {
  id: string;
  name: string;
  image: string;
  message: string;
  isFavorite?: boolean;
}

export const chocolates: Chocolate[] = [
  {
    id: 'fruit-nut',
    name: 'Dairy Milk Fruit & Nut',
    image: '/assets/generated/chocolate-fruit-nut.dim_768x768.png',
    message: 'This is your most favorite chocolate! Every bite of Dairy Milk Fruit & Nut reminds me of the sweetness you bring to my life. The perfect blend of creamy chocolate, crunchy nuts, and fruity surprises - just like our perfect moments together. You always light up when you have this, and seeing you happy is my favorite thing in the world. 💝',
    isFavorite: true
  }
];
