import React from 'react'
import { sum } from '../../core/utils/sum'
// import { useGetService } from '../api/Service';

const Page = () => {
  const result = sum(1,2)
  return (
    <h1>
        {result}
    </h1>
  )
}

export default Page
