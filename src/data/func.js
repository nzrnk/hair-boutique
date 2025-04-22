const getSession = (arr) => {
    for(const element of arr) {
      if (element.name === 'PHPSESSID'){
        return `${element.name}=${element.value}`;
      }
    }
  }

  const findElement = (arr, city) => {
      const result = arr.find((element) => element.address.city === city);
      return result;
  }

  export { getSession, findElement };