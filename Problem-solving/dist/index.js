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
fetchData().then((data) => {
    console.log(data);
});
