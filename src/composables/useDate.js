const date = new Date();


const useDate = () => {
  // const date = new Date();

  const getDay = () => {
    return date.getDay();
  };

  const getMonth = () => {
    return date.getMonth();
  };

  const addDay = (numberOfDays) => {
    // const date = new Date();
    date.setDate(date.getDate() + numberOfDays);
  };

  const addMonth = (numberOfMonths) => {
    // let date = new Date();
    date.setDate(date.getMonth() + numberOfMonths);
  };
  return { date, getDay, getMonth, addDay, addMonth };
};

export default useDate;
