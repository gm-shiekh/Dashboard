import React from 'react'
import { ExclamationTriangleIcon } from '@heroicons/react/16/solid'

const PendingExam = () => {
  return (
    <div className="bg-white p-3 rounded-lg flex justify-between mb-3">

        <div className="flex gap-4 items-center">
        <span className=" flex items-center justify-center rounded-full w-[40px] h-[40px] bg-[#FFBB28]">
        <ExclamationTriangleIcon className="pointer-events-none  size-7  text-white sm:size-4 " />
      </span>

      <span>
        Pending
      </span>
        </div>
      


      <div>
        <button className="bg-[#FFBB28] text-white font-medium rounded-md py-2 px-4">
            Buy Credits
        </button>
      </div>
    </div>
  )
}

export default PendingExam