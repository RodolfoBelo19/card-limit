import {Card} from "../components/Card";

const card = [
  {
    id: 1,
    name: 'Nubank',
    limit: 1.000,
    available: 800,
    used: 200,
    type: 'mastercard',
  },
  {
    id: 2,
    name: 'Pão de açucar',
    limit: 2.000,
    available: 1.500,
    used: 500,
    type: 'visa',
  },
]

export function Index() {
  return <Card data={card} />
}

