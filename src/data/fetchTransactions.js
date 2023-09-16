export const fetchTransactions = async () => {
  const response = await fetch("https://mocki.io/v1/1d902a0e-eacb-42ad-9c64-1290e6483934")
  const data = await response.json()
  return data
}
