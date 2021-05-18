import pickRandom from '../utils/array';
import { getBetween } from '../utils/number';

function getRandomExpense() {
  const items = new Set([
    {
      category: '🫐 Fruit',
      description: pickRandom(['Strawberries', 'Bananas', 'Avocado', 'Apples']),
    },
    {
      category: '🫑 Vegetables',
      description: pickRandom(['Leek', 'Eggplant', 'Bell pepper', 'Carrots']),
    },
    {
      category: '🍻 Drinks',
      description: pickRandom(['Stella Artois', 'Omer', 'Hapkin', 'Champagne', 'Wine']),
    },
    {
      category: '🥤 Soda',
      description: pickRandom(['Coca-Cola', 'Fritz Cola', 'Club Mate', 'Sprite', 'San Pellegrino']),
    },
    {
      category: '🍽 Dinner',
      description: pickRandom(['Golden Gai', 'Amour', 'Zola', 'Hallesches Haus']),
    },
    {
      category: '🍬 Sweets',
      description: pickRandom(['Candy', 'Snickers', 'Lollipops']),
    },
    {
      category: '🥐 Baked goods',
      description: pickRandom([
        'Waffles',
        'Quiche',
        'Sourdough bread',
        'Croissant',
        'Olive ciabatta',
      ]),
    },
    {
      category: '✂️ Office supplies',
      description: pickRandom(['Fineliners', 'Ruler', 'Office paper', 'Glue', 'Scissors']),
    },
    {
      category: '🪥 Bathroom utilities',
      description: pickRandom(['Cotton pads', 'Makeup remover', 'Deodorant', 'Toothpaste']),
    },
  ]);

  const item = pickRandom([...items]);

  return {
    price: getBetween(3, 300),
    unit: '€',
    ...item,
  };
}

export default function getExpenses(amount = 50) {
  return Array.from({ length: amount }).map(getRandomExpense);
}
