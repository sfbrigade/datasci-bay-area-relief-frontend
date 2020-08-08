/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from "axios";
import {Result} from "../types";
import mapKeys from "lodash/mapKeys";
import camelCase from "lodash/camelCase";

const API = "http://ec2-54-151-87-134.us-west-1.compute.amazonaws.com:8000/";

export const getResults = async (): Promise<Result[]> => {
  try {
    const {data} = await axios.get(API);

    return data.results.map((result: Result) =>
      mapKeys(result, (_, key) => camelCase(key))
    );
  } catch (error) {
    console.error("Error", error);
    return [] as Result[];
  }
};
