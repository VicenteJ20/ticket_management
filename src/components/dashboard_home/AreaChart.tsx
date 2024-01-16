'use client'

import { AREACHARTDATA, CHART_OPTIONS } from '@/constants/Dashboard'
import { Bar } from 'react-chartjs-2'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  BarController,
  BarElement,
} from 'chart.js'



const AreaChart = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    BarController,
    BarElement,
  )
  
  return (
    <Bar data={AREACHARTDATA} height={40} width={100} suppressHydrationWarning={true} />
  )
}

export default AreaChart