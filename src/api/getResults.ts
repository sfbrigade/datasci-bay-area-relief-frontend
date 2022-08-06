import {Result, ResultResponse, SortOptionType} from "../types";
import {standardizeFormat} from "./responseFormatter";
import data from "../assets/data/results.json";
import sortListBy from "../components/results/sort/sortListBy";

export const getResults = async (): Promise<Result[]> => {
  try {
    // @ts-ignore
    const results = data.results.map((result: ResultResponse) =>
      standardizeFormat(result)
    );
    // @ts-ignore
    return sortListBy(results, SortOptionType.DueDateNewToOld);
  } catch (error) {
    console.error("Error", error);
    return [] as Result[];
  }
};
