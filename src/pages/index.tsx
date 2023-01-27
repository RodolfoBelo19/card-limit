import {Card} from "../components/Card";
import {api} from "../api";
import React, {useEffect, useState} from "react";
import {ICard} from "./interfaces/Card";

export function Index() {
  const [data, setData] = useState<ICard[]>([])

  const fetchData = async () => {
    try {
      const response = await api.get('card')
      setData(response.data)
      console.log(response.data, 'success ')
    } catch (error) {
      console.log(error, 'error')
    }
  }

  useEffect( () => {
     fetchData()
  }, [])

  return <Card data={data}/>
}