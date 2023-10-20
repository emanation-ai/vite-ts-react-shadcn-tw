import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { adapt } from "@/a-adapters/adapter"

const backendResponse = {
  api_name: "Stripe",
  payload: {
    object: "list",
    data: [
      {
        id: "123",
        object: "charge",
        amount: "$1USD",
      },
      {
        id: "456",
        object: "charge",
        amount: "$2USD",
      },
    ],
    has_more: true,
    url: "/v1/charges",
  },
}

export const TableWrapper = () => {
  // convert payload to known shape (TODO: define data shape/type)
  const data = adapt(backendResponse)
  // improve how object keys are defined, this assumes all are the same shape
  const keys = Object.keys(data[0])
  return (
    <Table>
      <TableCaption>Adaptable component</TableCaption>
      <TableHeader>
        <TableRow>
          {keys.map((key) => (
            <TableHead key={key}>{key}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((value, i) => (
          <TableRow key={`row-${i}`}>
            {Object.entries(value).map(([key, value]) => (
              <TableCell key={key}>{value}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
