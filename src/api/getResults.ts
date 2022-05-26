import {Result, ResultResponse} from "../types";
import {standardizeFormat} from "./responseFormatter";
import data from "../assets/data/results.json";

export const getResults = async (): Promise<Result[]> => {
  try {
    // @ts-ignore
    return data.results.map((result: ResultResponse) => standardizeFormat(result) );
  } catch (error) {
    console.error("Error", error);
    return [] as Result[];
  }
};
