export async function getBuildingAddress() {
  const response = await fetch('https://building.com/api/building-address', {
    method: 'GET',
  });

  if (response.status === 200) {
    const data = await response.json();
    return data.address;
  } else {
    throw new Error("error");
  }
}
