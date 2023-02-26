import { colors } from './data-colors';

export function generateData(size: number) {
  const data = [];
  for (let i = 0; i < size; i++) {
    data.push({
      id: i + 1,
      int: Math.floor(Math.random() * 100),
      float: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      child: {
        id: `${i + 1}`,
        color: colors[Math.floor(Math.random() * colors.length)],
      },
    });
  }
  return data;
}
