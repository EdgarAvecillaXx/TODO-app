
//* fecth method for retrieving placeholder data
//* the method is exported to list_task component
export const getAllData = async () => {
  let response = await fetch(
    'https://jsonplaceholder.typicode.com/users/1/todos'
  );
  console.log('Response:', response);
  // We return the json

  return response.json();
};


