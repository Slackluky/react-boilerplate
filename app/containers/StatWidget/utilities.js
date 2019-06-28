import axios from 'axios';

export const getPeople = (url, people, resolve, reject) => {
  axios.get(url).then(response => {
    const retrivedPeople = people.concat(response.data.results);
    if (response.data.next !== null) {
      getPeople(response.data.next, retrivedPeople, resolve, reject);
    } else {
      resolve(retrivedPeople);
    }
  });
};
