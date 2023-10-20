// TODO: Define data shape.
export interface StripeCharges {
  object: string
  data: Record<string, any>[]
  has_more: boolean
  url: string
}
export interface SpotifySongs {
  songs: Record<string, any>[]
}
export interface OpenWeather {
  weather: Record<string, any>[]
}
export type Response = {
  api_name: string
  payload: Record<string, any>
}
export type ValidResponse =
  | {
      api_name: "Stripe"
      payload: StripeCharges
    }
  | {
      api_name: "Spotify"
      payload: SpotifySongs
    }
  | {
      api_name: "OpenWeather"
      payload: OpenWeather
    }
const validApiNames = {
  Stripe: "Stripe",
  Spotify: "Spotify",
  OpenWeather: "OpenWeather",
}
export type ValidApiNames = keyof typeof validApiNames
// typeguard to check that api_name is one of the valid keys
export const isValid = (response: Response): response is ValidResponse => {
  // TODO: Validate payload shape with Zod
  return validApiNames.hasOwnProperty(response.api_name)
}
/** Adapts the response to the shape expected by the client.
 * @param data - The response from the API.
 * @returns The data in the shape expected by the client.
 */
export const adapt = (data: Response) => {
  if (!isValid(data)) {
    throw new Error("Invalid response")
  }
  switch (data.api_name) {
    case "Stripe":
      return data.payload.data
    case "Spotify":
      return data.payload.songs
    case "OpenWeather":
      return data.payload.weather
  }
}
