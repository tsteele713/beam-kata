export interface Patient {
  id: number,
  name: string,
  brush_color: string,
  primary_insured_id?: number,
  contract_effective_date: string
}
