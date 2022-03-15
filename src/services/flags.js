import { checkError, client } from './client';

export async function getFlags() {
  const resp = await client.from('countries').select('*');
  return checkError(resp);
}
