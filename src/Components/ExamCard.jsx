import React from "react";
import {
  HandThumbDownIcon,
  
} from "@heroicons/react/24/outline";
import { HandThumbUpIcon } from "@heroicons/react/20/solid";

const ExamCard = () => {
  return (
    <div className="bg-white p-3 rounded-lg flex justify-between mb-3">

        <div className="flex gap-4 items-center">
        <span className=" flex items-center justify-center rounded-full w-[40px] h-[40px] bg-[#00C49F]">
        <HandThumbUpIcon className="pointer-events-none  size-7  text-white sm:size-4 " />
      </span>

      <span>
        Exam Passed
      </span>
        </div>
      


      <div>
        <button className="bg-[#00C49F] text-white font-medium rounded-md py-2 px-4">
            Next Exam
        </button>
      </div>
    </div>
  );
};

export default ExamCard;
