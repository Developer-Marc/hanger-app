const KEY_PERSON = "person";
const KEY_SAVED_PEOPLE = "prevSavedPeople";

export const useLocalStorage = () => {
    const savePersonDetails = (num, value) => {
      try {
        localStorage.setItem(KEY_PERSON + num, JSON.stringify(value));
      } catch (error) {
        console.log(error);
      }
    };

    const savePeopleTotal = (num) => {
        try {
          localStorage.setItem(KEY_SAVED_PEOPLE, JSON.stringify(num));
        } catch (error) {
          console.log(error);
        }
      };
  
    const loadPeopleTotal = () => {
      try {
        const item = window.localStorage.getItem(KEY_SAVED_PEOPLE);
        return item ? Number(JSON.parse(item)) + 1 : 0;
      } catch (error) {
        console.log(error);
      }
    };
  
    return { savePersonDetails, savePeopleTotal, loadPeopleTotal };
  };