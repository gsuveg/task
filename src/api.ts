import { AppState } from "./state/appStateReducer"

export const save = (payload: AppState) => {
  return fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/storeAnswer`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload.answer),
  })
    .then((response) => {
      if (response.ok){
        return response.json()
      } else {
        throw new Error("Error while saving the state.")
      }
    })
}

export const load = async () => { 
  console.log(`${process.env.REACT_APP_API_ENDPOINT}/api/getflow`)
  const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/getflow`)
  if (response.ok) {
    return response.json() as Promise<AppState>
  } else {
    throw new Error("Error while loading the state.")
  }
}
