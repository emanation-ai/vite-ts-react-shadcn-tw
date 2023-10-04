import React, { useEffect, useState } from 'react'
import Stripe from 'stripe'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  let [balanceTrans, setBalanceTrans] = useState<Stripe.BalanceTransaction[]>(
    [],
  )
  const stripe = new Stripe(import.meta.env.VITE_STRIPE_API_KEY, {
    apiVersion: '2023-08-16',
  })

  const getBalanceTransactions = async () => {
    setIsLoading(true)
    try {
      if (!import.meta.env.VITE_STRIPE_API_KEY) {
        setIsLoading(false)
        return
      }
      const balanceTransactions = await stripe.balanceTransactions.list()
      setBalanceTrans((balanceTrans = balanceTransactions.data))
      setIsLoading(false)
    } catch (e) {
      setBalanceTrans((balanceTrans = []))
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getBalanceTransactions()
  }, [import.meta.env.VITE_STRIPE_API_KEY])

  return (
    <main className="p-10">
      {isLoading ? (
        <>
          <svg
            id="infinite-indicator"
            width="200"
            height="200"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              r="40"
              cx="50"
              cy="50"
              fill="none"
              strokeWidth={10}
              stroke="#000"
              strokeOpacity={0.6}
            ></circle>
            <path
              d="M10 50 A40 40 0 1 1 90 50"
              fill="none"
              stroke="#000"
              strokeWidth={10}
            >
              <animateTransform
                attributeType="xml"
                attributeName="transform"
                type="rotate"
                from="0 50 50"
                to="360 50 50"
                dur="1s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </>
      ) : (
        <Table>
          <TableCaption>A list of your balance transactions.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>status</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {balanceTrans.map((transaction) => {
              return (
                <React.Fragment key={transaction.id}>
                  <TableRow>
                    <TableCell className="font-medium capitalize">
                      {transaction.object.split('_').join(' ')}
                    </TableCell>
                    <TableCell>{transaction.description}</TableCell>
                    <TableCell className="capitalize">
                      {transaction.status}
                    </TableCell>
                    <TableCell className="text-right">
                      ${transaction.amount}
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              )
            })}
          </TableBody>
        </Table>
      )}
    </main>
  )
}

export default App
