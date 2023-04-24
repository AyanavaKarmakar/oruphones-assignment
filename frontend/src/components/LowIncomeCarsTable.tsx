/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { filterUserData } from "../utils/filterUserData";

export const LowIncomeCarsTable = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [iserror, setIsError] = useState(false);

  const FetchUsersWithLowIncomeAndLuxuryCar = useQuery({
    queryKey: ["FetchUsersWithLowIncomeAndLuxuryCar"],
    queryFn: async () => {
      setIsError(false);
      setIsLoading(true);

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/users/low-income-cars`
      );

      if (!response.ok) {
        setIsError(true);
      }

      const data = await response.json();
      return filterUserData(data);
    },
    enabled: true,
    onError: () => setIsError(true),
    onSettled: () => setIsLoading(false),
  });

  if (isLoading) return <div>Loading...</div>;
  if (iserror) return <div>Something went wrong! Please try again!</div>;

  return (
    <div>
      <div>
        Users which have income lower than $5 USD and have a car of brand "BMW"
        or "Mercedes"
      </div>

      {FetchUsersWithLowIncomeAndLuxuryCar?.data.length === 0 && !isLoading ? (
        <div>No data found!</div>
      ) : (
        <table className="table-auto border-x border-b">
          <thead>
            <tr>
              <th className="font-bold p-1 lg:p-2 border-b border-l border-gray-700 text-left bg-gray-700 text-white">
                ID
              </th>
              <th className="font-bold p-1 lg:p-2 border-b border-l border-gray-700 text-left bg-gray-700 text-white">
                First Name
              </th>
              <th className="font-bold p-1 lg:p-2 border-b border-l border-gray-700 text-left bg-gray-700 text-white">
                Last Name
              </th>
              <th className="font-bold p-1 lg:p-2 border-b border-l border-gray-700 text-left bg-gray-700 text-white">
                Email
              </th>
              <th className="font-bold p-1 lg:p-2 border-b border-l border-gray-700 text-left bg-gray-700 text-white">
                Gender
              </th>
              <th className="font-bold p-1 lg:p-2 border-b border-l border-gray-700 text-left bg-gray-700 text-white">
                Income
              </th>
              <th className="font-bold p-1 lg:p-2 border-b border-l border-gray-700 text-left bg-gray-700 text-white">
                City
              </th>
              <th className="font-bold p-1 lg:p-2 border-b border-l border-gray-700 text-left bg-gray-700 text-white">
                Car
              </th>
              <th className="font-bold p-1 lg:p-2 border-b border-l border-gray-700 text-left bg-gray-700 text-white">
                Quote
              </th>
              <th className="font-bold p-1 lg:p-2 border-b border-l border-gray-700 text-left bg-gray-700 text-white">
                Phone Price
              </th>
            </tr>
          </thead>

          <tbody>
            {FetchUsersWithLowIncomeAndLuxuryCar?.data?.map(
              (data: any, index: any) => (
                <tr
                  key={index}
                  className="odd:bg-gray-100 hover:!bg-stone-200 cursor-pointer"
                >
                  {Object.keys(data).map((key) => (
                    <td
                      key={key}
                      className="p-1 lg:p-2 border-b border-l text-left"
                    >
                      {data[key]}
                    </td>
                  ))}
                </tr>
              )
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};
