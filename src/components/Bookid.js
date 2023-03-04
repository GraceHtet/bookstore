const Bookid = async () => {
  const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
  const action = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(),
  };

  const resp = await fetch(url, action);
  const data = await resp.text();
  //   console.log(data);
  return data;
};

export default Bookid;
