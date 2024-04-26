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

// Function that uses binary search algorithm to find the object index at which targetID is
const findImageById = (data: Image[], targetId: number): number => {
  let left = 0;
  let right = data.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    // If the targetId is found at the mid index, return mid
    if (data[mid].id === targetId) {
      return mid;
    }
    // If the targetId is less than the id at mid, search the left half
    else if (targetId < data[mid].id) {
      right = mid - 1;
    }
    // If the targetId is greater than the id at mid, search the right half
    else {
      left = mid + 1;
    }
  }
  // If the targetId is not found in the array, return -1
  return -1;
};

// Function to get random whole number
const getRandomWholeNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Call fetch data then call findImageById function, logging out at which index the Image id is found in the array
fetchData().then((data) => {
  for (let i = 0; i < 11; i++) {
    console.log(findImageById(data, getRandomWholeNumber(1, 5000)));
  }
});
