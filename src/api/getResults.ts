import {Result, ResultResponse} from "../types";
import {standardizeFormat} from "./responseFormatter";
import data from "../assets/data/results.json";
import _ from "lodash";

export const getResults = async (): Promise<Result[]> => {
  try {
    // @ts-ignore
    const results =  data.results.map((result: ResultResponse) => standardizeFormat(result) );
    // @ts-ignore
    return _.orderBy(results, [(element) => {
      return element.deadline;
    }], ['desc']);
  } catch (error) {
    console.error("Error", error);
    return [] as Result[];
  }
};
