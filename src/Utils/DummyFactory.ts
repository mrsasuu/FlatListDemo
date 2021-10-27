interface Item {
  id: number
  title?: string
  name?: string
  description?: string
  link?: string
}

const possibleLinks: string[] = [
  'http://google.com',
  'beast.rent',
  'non valid link',
  'https://www.tesla.com/',
]

export const createDummyDataSet = (): string => {
  const data = []

  for (let i = 1; i < 101; i++) {
    data.push(generateItem(i))
  }
  return JSON.stringify(data)
}

const generateItem = (index: number): Item => {
  const item: Item = {
    id: index,
  }

  if (getRandomValue()) {
    item.title = `Title ${index}`
  }

  if (getRandomValue()) {
    item.name = `Name ${index}`
  }

  if (getRandomValue()) {
    item.description = `Description`
  }

  if (getRandomValue()) {
    item.link = possibleLinks[getRandomIndexPosition(0, possibleLinks.length)]
  }

  return item
}

const getRandomValue = (): boolean => {
  return Math.floor(Math.random() * 2) === 0
}

const getRandomIndexPosition = (max: number, min: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
