const dataStorage = 'dataStorage';

const getLocalStorage = (keyName) => localStorage.getItem(keyName);
const setLocalStorage = (keyName, value) =>
  localStorage.setItem(keyName, value);

  //Convertir a JSON
const dataObj = (string) => JSON.parse(string);

//Convertir a string
const dataString = (obj) => JSON.stringify(obj);

const getDataFromApi = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/photos');
    const dataBaseStorage = await dataString(data);
    setLocalStorage(dataStorage, dataBaseStorage);
    return;
}
getDataFromApi();
export const getDataFromStorage = (keyname) => {
    const getData = getLocalStorage(keyname)
    const data = dataObj(getData);
    return data;
}