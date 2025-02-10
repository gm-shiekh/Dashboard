import React from "react";
import Piechart from "../Components/Piechart";
import Barchart from "../Components/BarChart";
import VerticalBars from "../Components/VerticalBars";
import LineChart from "../Components/LineChart";
import {
  UsersIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
} from "@heroicons/react/16/solid";
import ExamCard from "../Components/ExamCard";
import FailExam from "../Components/FailExam";
import PendingExam from "../Components/PendingExam";
const Dashboard = () => {
  return (
    <div className="px-8">
      <div className=" flex flex-col lg:flex-row gap-9 mb-8">
        <div className="">
          <Piechart />
        </div>

        <div className="flex-1">
          <Barchart />
        </div>
      </div>

      <div className="  flex flex-col lg:flex-row gap-6 mb-8">
        <div className="flex-1">
          <VerticalBars />
        </div>

        <div className="">
          <LineChart />
        </div>
      </div>

      <div className="mt-4 flex justify-between md:gap-9 gap-2 mb-8">
        <div className="mt-2 flex-1">
          <div className="-mr-px grid grow grid-cols-1 focus-within:relative">
            <input
              id="query"
              name="query"
              type="text"
              placeholder="Search Exams"
              className="col-start-1 row-start-1 block w-full rounded-full bg-white py-2 pl-10 pr-3 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:pl-9 sm:text-sm/6"
            />
            <MagnifyingGlassIcon
              aria-hidden="true"
              className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400 sm:size-4"
            />
          </div>
        </div>

        <div className="mt-2 grid grid-cols-1 flex-1">
          <select
            id="location"
            name="location"
            defaultValue="Canada"
            className="col-start-1 row-start-1 w-full appearance-none rounded-full bg-white py-2 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300  sm:text-sm/6"
          >
            <option>Pass</option>
            <option>Pending</option>
            <option>Fail</option>
          </select>
          <ChevronDownIcon
            aria-hidden="true"
            className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
          />
        </div>
      </div>

      <div className="">
        <ExamCard />
        <FailExam />
        <PendingExam />
      </div>
    </div>
  );
};

export default Dashboard;
