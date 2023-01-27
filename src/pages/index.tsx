import {Card} from "../components/Card";
import {api} from "../api";
import React, {useEffect} from "react";

const card = [
  {
    id: 1,
    name: 'Nubank',
    limit: 1000,
    available: 800,
    used: 200,
    type: 'mastercard',
  },
  {
    id: 2,
    name: 'Pão de açucar',
    limit: 2000,
    available: 1500,
    used: 500,
    type: 'visa',
  },
]

api.get('card').then(response => {
  console.log(response.data, 'success ')
}).catch(error => {
  console.log(error, 'error')
})

export function Index() {
  // return <Card data={card} />
}

