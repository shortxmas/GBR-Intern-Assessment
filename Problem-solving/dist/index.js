"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Function to fetch data from a Rest API endpoint via a get request
const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
    // Try to fetch data from rest API, if error is thrown, log the error and return empty data array
    try {
        // Send the request to the API endpoint
        const res = yield fetch(`https://jsonplaceholder.typicode.com/photos`);
        // If the response from the request is okay (Status code 200), set response data to data variable and return it
        if (res.ok) {
            const data = yield res.json();
            // console.log(data);
            return data;
        }
        // If response is not okay (Not status code 200), log the response status code, print something went wrong, return empty data array
        else {
            console.log(res.status, "Something went wrong with data fetching from API");
            return [];
        }
    }
    catch (e) {
        console.error(e);
        return [];
    }
});
// Function that uses binary search algorithm to find the object index at which targetID is
const findImageById = (data, targetId) => {
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
const getRandomWholeNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
// Call fetch data then call findImageById function, logging out at which index the Image id is found in the array
fetchData().then((data) => {
    for (let i = 0; i < 11; i++) {
        console.log(findImageById(data, getRandomWholeNumber(1, 5000)));
    }
});
