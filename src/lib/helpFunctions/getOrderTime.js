const getOrderTime = () => {
  const month = () => {
    if ((new Date().getMonth() + 1).toString().length < 2) {
      return `0${(new Date().getMonth() + 1).toString()}`;
    } else {
      return (new Date().getMonth() + 1).toString();
    }
  };
  const year = new Date().getFullYear().toString().slice(2);
  const day = new Date().getDate().toString();
  const time = Math.floor(new Date().getTime() / 1000).toString();

  return `${year}${month()}${day}${time}`;
};

export default getOrderTime;
