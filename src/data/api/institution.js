/* eslint-disable no-undef */
import { getDefaultRequestData, refreshToken } from './shared';

const apiPath = `${process.env.REACT_APP_API_PATH}/instituicao`;

export async function fetchInstitution(id) {
  await refreshToken();
  const options = getDefaultRequestData('GET', null, true);

  const url = new URL(`${apiPath}/${id}`);
  const response = await fetch(url, options);
  return await response.json();
}

export async function updateInstitution({ _id, ...institution }) {
  await refreshToken();
  const options = getDefaultRequestData(
    'PUT',
    JSON.stringify(institution),
    true
  );

  const url = new URL(`${apiPath}/${_id}`);
  const response = await fetch(url, options);
  return await response.json();
}
