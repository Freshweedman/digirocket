import { LucideIcon } from "lucide-react";

export enum NicheType {
  BURGER = 'burger',
  BARBER = 'barber',
  MODA = 'moda',
  FARMA = 'farma',
  PIZZA = 'pizza',
  PET = 'pet',
  ACADEMIA = 'academia',
  SALAO = 'salao',
  ADVOGADO = 'advogado',
  IMOVEIS = 'imoveis',
  CLINICA = 'clinica',
  SUSHI = 'sushi'
}

export interface NicheOption {
  id: NicheType;
  label: string;
  icon: LucideIcon;
  color: string;
}