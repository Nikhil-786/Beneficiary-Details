import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
const ViewDetails = () => {
  const benificaryDetails = useSelector((state) => state.beneficiaryDetail);
  const param = useParams();
  const filterdata = benificaryDetails?.filter((Data) => Data.id === param.id);
    console.log(filterdata)
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Id</th>
              <th>FUll Name</th>
              <th>Address</th>
              <th>Country</th>
              <th>PinCode</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {filterdata.map((data, index) => {
              return (
                <tr>
                  <th>{index}</th>
                  <td>{data.firstName}</td>
                  <td>{data.Address}</td>
                  <td>{data.Country}</td>
                  <td>{data.pinCode}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewDetails;
