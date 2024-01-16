'use client'

import { useEffect, useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { DashboardCardProps } from "@/interfaces/Dashboard";

const DashboardCard = ({ title, icon, value, oldValue }: DashboardCardProps) => {

  const [difference, setDifference] = useState(0)

  useEffect(() => {
    const difference = ((value - oldValue) / oldValue) * 100
    if (difference === Infinity) {
      setDifference(0)
    } else {
      setDifference(Math.round(difference))
    }

  }, [oldValue, value])
  return (
    <Card className='bg-white w-auto'>
      <CardHeader className='flex flex-row gap-8 items-center w-full justify-between'>
        <CardTitle className='text-gray-700'>{title}</CardTitle>
        <span className='pb-1.5 text-xl'>{icon}</span>
      </CardHeader>
      <CardContent>
        <span className='text-4xl font-bold text-gray-800'>{value}</span>
      </CardContent>
      <CardFooter>
        <span className='text-sm text-zinc-500 max-w-52'>{difference !== 0 ? `${difference}%` : 'Sin variación'} respecto al mes anterior</span>
      </CardFooter>
    </Card>
  )
}

export { DashboardCard }