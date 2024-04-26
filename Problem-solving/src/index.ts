// Type interface for data being fetched, which in this case is image data
interface Image {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

// Function to fetch data from a Rest API endpoint via a get request
const fetchData = async (): Promise<Image[]> => {
  // Try to fetch data from rest API, if error is thrown, log the error and return empty data array
  try {
    // Send the request to the API endpoint
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos`);
    // If the response from the request is okay (Status code 200), set response data to data variable and return it
    if (res.ok) {
      const data: Image[] = await res.json();
      // console.log(data);
      return data;
    }
    // If response is not okay (Not status code 200), log the response status code, print something went wrong, return empty data array
    else {
      console.log(
        res.status,
        "Something went wrong with data fetching from API"
      );
      return [];
    }
  } catch (e: any) {
    console.error(e);
    return [];
  }
};

fetchData().then((data) => {
  console.log(data);
});
