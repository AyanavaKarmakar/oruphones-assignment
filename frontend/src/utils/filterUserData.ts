/* eslint-disable @typescript-eslint/no-explicit-any */
export const filterUserData = (data: any) => {
  // only keep the required data
  const filteredArray = data.map((obj: any) => {
    return {
      id: obj.id,
      first_name: obj.first_name,
      last_name: obj.last_name,
      email: obj.email,
      gender: obj.gender,
      income: obj.income,
      city: obj.city,
      car: obj.car,
      quote: obj.quote,
      phone_price: obj.phone_price,
    };
  });

  const finalArray = filteredArray.filter((obj: any) => {
    return (
      obj.id &&
      obj.first_name &&
      obj.last_name &&
      obj.email &&
      obj.gender &&
      obj.income &&
      obj.city &&
      obj.car &&
      obj.quote &&
      obj.phone_price
    );
  });

  return finalArray;
};
