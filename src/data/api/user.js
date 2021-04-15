/* eslint-disable no-undef */
import { getDefaultRequestData, refreshToken } from './shared';

const apiPath = `${process.env.REACT_APP_API_PATH}/usuario`;

export async function fetchUsers(instituicao) {
  await refreshToken();
  const options = getDefaultRequestData('GET', null, true);

  const url = new URL(`${apiPath}/byInstituicao/${instituicao}`);
  const response = await fetch(url, options);
  return await response.json();
}

export async function fetchUser(id, instituicao) {
  await refreshToken();
  const options = getDefaultRequestData('GET', null, true);

  const url = new URL(`${apiPath}/${id}/byInstituicao/${instituicao}`);
  const response = await fetch(url, options);
  return await response.json();
}

export async function createUser(user) {
  const { instituicao, ...rest } = user;
  await refreshToken();
  const body = JSON.stringify({
    ...rest,
    instituicao,
  });
  const options = getDefaultRequestData('POST', body, true);

  const url = new URL(`${apiPath}`);
  const response = await fetch(url, options);
  return await response.json();
}

export async function updateUser({ _id, ...user }) {
  await refreshToken();
  const options = getDefaultRequestData('PUT', JSON.stringify(user), true);

  const url = new URL(`${apiPath}/${_id}`);
  const response = await fetch(url, options);
  return await response.json();
}

export async function deleteUser(id, instituicao) {
  await refreshToken();
  const options = getDefaultRequestData(
    'DELETE',
    JSON.stringify({ instituicao }),
    true
  );

  const url = new URL(`${apiPath}/${id}`);
  const response = await fetch(url, options);
  return await response.json();
}

export async function associateUser(user) {
  await refreshToken();
  const options = getDefaultRequestData('PUT', JSON.stringify(user), true);

  const url = new URL(`${apiPath}`);
  const response = await fetch(url, options);
  return await response.json();
}

export async function login(email, pwd) {
  const options = getDefaultRequestData('POST', JSON.stringify({ email, pwd }));
  const url = new URL(`${apiPath}/login`);
  const response = await fetch(url, options);

  if (!response.ok || response.status === 204) throw Error(response.statusText);
  return await response.json();
}

export async function refreshUserToken(_id, refreshToken) {
  const options = getDefaultRequestData(
    'POST',
    JSON.stringify({ _id, refreshToken })
  );
  const url = new URL(`${apiPath}/refreshToken`);
  const response = await fetch(url, options);

  if (!response.ok || response.status === 204) throw Error(response.statusText);
  return await response.json();
}
