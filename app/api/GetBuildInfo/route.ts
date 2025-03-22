export async function getBuildingAddress() {
  try {
    const response = await fetch('https://building.com/api/building-address', {
      method: 'GET',
    });

    if (response.ok) {
      const data = await response.json();
      return data.address;
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error("Failed to fetch building address:", error);
    throw error;
  }
}
