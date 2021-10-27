export interface ItemProps {
  id: number
  isChecked: boolean
  [key: string]: string | number | boolean | Function | undefined
}
