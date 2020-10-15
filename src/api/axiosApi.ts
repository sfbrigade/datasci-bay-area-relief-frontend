import axios from "axios";
import {Result, ResultResponse} from "../types";
import {standardizeFormat} from "./responseFormatter";

const API = "http://localhost:8080/";

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
