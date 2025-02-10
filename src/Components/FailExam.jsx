import React from 'react'
import { HandThumbDownIcon } from '@heroicons/react/16/solid'
const FailExam = () => {
  return (
    <div className="bg-white p-3 rounded-lg flex justify-between mb-3">

        <div className="flex gap-4 items-center">
        <span className=" flex items-center justify-center rounded-full w-[40px] h-[40px] bg-[#F2383A]">
        <HandThumbDownIcon className="pointer-events-none  size-7  text-white sm:size-4 " />
      </span>

      <span>
        Exam Fail
      </span>
        </div>
      


      <div>
        <button className="bg-[#F2383A] text-white font-medium rounded-md py-2 px-4">
            Try Again
        </button>
      </div>
    </div>
  )
}

export default FailExam