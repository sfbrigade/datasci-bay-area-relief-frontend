import axios from 'axios';
import {Result} from "../types";

const API = 'http://ec2-54-151-87-134.us-west-1.compute.amazonaws.com:8000/';

export const getResults = async (): Promise<Result[]> => {
    try {
        const response = await axios.get(API);
        return response.data.results;
    } catch (error) {
        console.error('Error', error);
        return [] as Result[];
    }
};
