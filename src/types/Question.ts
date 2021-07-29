
export interface IValueOption {
    nextId: number,
    value: boolean,
    text: string
}
  
export interface IQuestion {
    id: number,
    name?: string,
    text?: string,
    uiType?: string,
    valueType?: string,
    valueOptions?: IValueOption[]
}