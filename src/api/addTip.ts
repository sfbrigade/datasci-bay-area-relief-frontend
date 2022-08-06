import axios, {AxiosError, AxiosResponse} from "axios";
import { AddReliefBody, AddTipResponse } from "../types";

// const API = "https://api-sfbayrelief.org";
const API = "http://localhost:8001";

export const addTip = async (addReliefBody: AddReliefBody): Promise<AddTipResponse> => {
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
    const response: AxiosResponse = await axios.post(API + "/add", postBody);
    console.log({data: response.data});
    return {
      status: response.status,
      data: response.data
    };
  } catch (error) {
    const axiosError: AxiosError = error as AxiosError;
    return {status: axiosError.response.status};
  }
};