import React, { useState, useEffect, ReactElement } from "react";
import { getBalanceTransactions } from "@/api/stripe";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
// import { adapt } from "@/a-adapters/adapter";

const ApiTableComponent: React.FC = (): ReactElement => {
  const [apiData, setApiData] = useState<Array<unknown>>([]);
  const getApiData = async () => {
    const response = await getBalanceTransactions();
    // const data = adapt(response);

    setApiData(modifyData(response.data));
  };

  //Modify Data to output
  const modifyData = (data: Array<unknown>): Array<unknown> => {
    const timestampKeys = ["available_on", "created"];

    const temp = data.map((item: any, i: number) => {
      for (const key in item) {
        if (Array.isArray(item[key]) || typeof item[key] === "object") {
          delete item[key];
        }
        if (timestampKeys.includes(key)) {
          item[key] = new Date(item[key] * 1000).toLocaleDateString("en-US");
        }
        if (key === "id") {
          item[key] = i + 1;
        }
      }
      return item;
    });
    return temp;
  };

  useEffect(() => {
    getApiData();
  }, []);
  return apiData.length ? (
    <Table>
      <TableCaption>Adaptable component</TableCaption>
      <TableHeader>
        <TableRow>
          {Object.keys(apiData[0]).map((keyItem) => (
            <TableHead key={keyItem}>
              {keyItem === "id" ? "No" : keyItem.toUpperCase()}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {apiData.map((trItem) => (
          <TableRow key={trItem.id}>
            {Object.entries(trItem).map(([key, value]) => (
              <TableCell key={key}>{value}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ) : (
    <></>
  );
};

export default ApiTableComponent;
