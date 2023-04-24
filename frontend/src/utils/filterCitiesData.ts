/* eslint-disable @typescript-eslint/no-explicit-any */
export const filterCitiesData = (data: any) => {
  // only keep the required data
  const filteredArray = data.map((obj: any) => {
    return {
      id: obj._id,
      avgIncome: obj.avgIncome,
      userCount: obj.userCount,
    };
  });

  const finalArray = filteredArray.filter((obj: any) => {
    return obj.id && obj.userCount && (obj.avgIncome === null || obj.avgIncome);
  });

  return finalArray;
};
