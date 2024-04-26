// Function to fetch data from a Rest API endpoint via a get request
const fetchData = async () => {
  // Try to fetch data from rest API, if error is thrown, log the error
  try {
    // Send the request to the API endpoint
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos`);
    // If the response from the request is okay (Status code 200), set response to data variable
    if (res.ok) {
      const data = await res.json();
      // console.log(data);
    }
    // If response is not okay (Not status code 200), log the response status code and print something went wrong
    else {
      console.log(
        res.status,
        "Something went wrong with data fetching from API"
      );
    }
  } catch (e: any) {
    console.error(e);
  }
};

fetchData()
