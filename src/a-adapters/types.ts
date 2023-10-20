export namespace Stripe {
  export interface Charge {
    id: string
    object: "charge"
    amount: number
    amount_captured: number
    amount_refunded: number
    // NOTE: MISSING FIELDS
  }
}
