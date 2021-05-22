import axios, {AxiosError, AxiosResponse} from "axios";
import {AddReliefBody, Result, ResultResponse} from "../types";
import {standardizeFormat} from "./responseFormatter";

// const API = "https://api-sfbayrelief.org/";
const API = "http://localhost:8081";

export const getResults = async (): Promise<Result[]> => {
  try {
    const {data} = await axios.get(API);
    return data.results.map((result: ResultResponse) =>
      standardizeFormat(result)
    );
  } catch (error) {
    console.error("Error", error);
    return [] as Result[];
  }
};

export const addResult = async (addReliefBody: AddReliefBody): Promise<any> => {
  const {
    firstName,
    lastName,
    phoneNumber,
    email,
    url,
    orgType,
    reliefType,
    comments
  } = addReliefBody;
  try {
    const postBody = {
      firstName: (firstName) ? firstName : "Not supplied",
      lastName: (lastName) ? lastName : "Not supplied",
      phoneNumber: (phoneNumber) ? phoneNumber : "Not supplied",
      email,
      url,
      orgType: (orgType) ? orgType : "Not supplied",
      reliefType: (reliefType) ? reliefType : "Not supplied",
      comments: (comments) ? comments : "Not supplied"
    };
    const response: AxiosResponse = await axios.post(API + "/add", postBody)
    return {
      status: response.status,
      data: response.data
    }
  } catch (error) {
    const axiosError: AxiosError = error as AxiosError;
    return {status: axiosError.response.status};
  }
};
