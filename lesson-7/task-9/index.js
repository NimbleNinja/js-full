export const withdraw = (clients, balances, client, amount) => {
  const index = clients.indexOf(client);

  return balances[index] >= amount ? (balances[index] -= amount) : -1;
};
