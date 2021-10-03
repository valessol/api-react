
// const dataStorage = 'dataStorage';

// const getLocalStorage = (keyName) => localStorage.getItem(keyName);
// const setLocalStorage = (keyName, value) =>
//   localStorage.setItem(keyName, value);

//   //Convertir a JSON
// const dataObj = (string) => JSON.parse(string);

// //Convertir a string
// const dataString = (obj) => JSON.stringify(obj);

export const getData = async () => {
  const dataResponse = await fetch ('https://jsonplaceholder.typicode.com/photos')
  const data = await dataResponse.json()
  return data
}