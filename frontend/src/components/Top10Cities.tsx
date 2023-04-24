/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { filterCitiesData } from "../utils/filterCitiesData";

export const Top10Cities = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [iserror, setIsError] = useState(false);

  const FetchTop10Cities = useQuery({
    queryKey: ["FetchTop10Cities"],
    queryFn: async () => {
      setIsError(false);
      setIsLoading(true);

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/cities/top-10-cities`
      );

      if (!response.ok) {
        setIsError(true);
      }

      const data = await response.json();
      console.log(data);
      return filterCitiesData(data);
    },
    enabled: true,
    onError: () => setIsError(true),
    onSettled: () => setIsLoading(false),
  });

  if (isLoading) return <div>Loading...</div>;
  if (iserror) return <div>Something went wrong! Please try again!</div>;

  console.log(FetchTop10Cities?.data);

  return (
    <div>
      <div>
        Top 10 cities which have the highest number of users and their average
        income
      </div>

      {FetchTop10Cities?.data?.length === 0 && !isLoading ? (
        <div>No data found!</div>
      ) : (
        <table className="table-auto border-x border-b">
          <thead>
            <tr>
              <th className="font-bold p-1 lg:p-2 border-b border-l border-gray-700 text-left bg-gray-700 text-white">
                ID
              </th>
              <th className="font-bold p-1 lg:p-2 border-b border-l border-gray-700 text-left bg-gray-700 text-white">
                Average Income
              </th>
              <th className="font-bold p-1 lg:p-2 border-b border-l border-gray-700 text-left bg-gray-700 text-white">
                User Count
              </th>
            </tr>
          </thead>

          <tbody>
            {FetchTop10Cities?.data?.map((data: any, index: any) => (
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
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
