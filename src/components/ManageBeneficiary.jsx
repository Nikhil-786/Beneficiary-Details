import React, { useState } from "react";
import AddBeneficiary from "./AddBeneficiary";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeDetails } from "../todos/todoSlice";
import { Link } from "react-router";
const ManageBeneficiary = () => {
  const [displayForm, setdisplay] = useState(false);

  const benificaryDetails = useSelector((state) => state.beneficiaryDetail);
  const dispatch = useDispatch();

  function handleAddBenificiary() {
    setdisplay(true);
  }
  // function handleDelete(id){
  //   dispatch(removeDetails(id));
  // }
  return (
    <>
      <div className="relative h-full">
        <span className=" inline-block ml-[66%] my-[5y%] mt-7 h-30 w-[30%] ">
          <button
            className=" h-[30%] w-[30%] rounded-2xl bg-green-400"
            onClick={handleAddBenificiary}
          >
            Add Beneficiary
          </button>
        </span>
        <div className="w-[50%] flex justify-center mt-[2%]  ml-[25%]">
          <table className="w-full">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
              <tr>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  #
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  FullName
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Address
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Country
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  PinCode
                </th>
              </tr>
            </thead>

            {benificaryDetails?.map((data, index) => {
              return (
                <tr key={data.id}>
                  <td className="p-3 text-sm text-gray-700">{index}</td>
                  <td className="p-3 text-sm text-gray-700">
                    {data?.firstName}
                  </td>
                  <td className="p-3 text-sm text-gray-700">{data?.Address}</td>
                  <td className="p-3 text-sm text-gray-700">{data?.Country}</td>
                  <td className="p-3 text-sm text-gray-700">{data?.pinCode}</td>

                  <td>
                    <Link to={`/Home/ManageBeneficiary/Update/${data.id}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        />
                      </svg>
                    </Link>
                  </td>

                  <td>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                      onClick={() => dispatch(removeDetails(data.id))}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </td>
                  <td>
                    <Link to={`/Home/ManageBeneficiary/ViewDetails/${data.id}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
        {displayForm && <AddBeneficiary setdisplay={setdisplay} />}
      </div>
    </>
  );
};

export default ManageBeneficiary;
