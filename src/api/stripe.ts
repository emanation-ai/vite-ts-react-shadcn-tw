import axios from "./axios";

export const getBalanceTransactions = async() => {
    const response = await axios.get("/v1/balance_transactions");
    return response.data;
};
