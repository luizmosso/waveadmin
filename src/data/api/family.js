/* eslint-disable no-undef */
import { getDefaultRequestData, refreshToken } from './shared';

const apiPath = `${process.env.REACT_APP_API_PATH}/familia`;

export async function fetchFamilies(instituicao) {
  await refreshToken();
  const options = getDefaultRequestData('GET', null, true);

  const url = new URL(`${apiPath}/byInstitution/${instituicao}`);
  const response = await fetch(url, options);
  return await response.json();
}
