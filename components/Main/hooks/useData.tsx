import axios from 'axios';

export async function getItemData(year: string, month: string) {
  const { data } = await axios.get(`/appointments/${year}/${month}`);
  return data;
}
