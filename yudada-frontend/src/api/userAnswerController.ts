// @ts-ignore
/* eslint-disable */
import request from '@/request';

/** addUserAnswer POST /api/userAnswer/add */
export async function addUserAnswerUsingPost(
  body: API.UserAnswerAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/userAnswer/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteUserAnswer POST /api/userAnswer/delete */
export async function deleteUserAnswerUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/userAnswer/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** editUserAnswer POST /api/userAnswer/edit */
export async function editUserAnswerUsingPost(
  body: API.UserAnswerEditRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/userAnswer/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** generateUserAnswerId GET /api/userAnswer/generate/id */
export async function generateUserAnswerIdUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseLong_>('/api/userAnswer/generate/id', {
    method: 'GET',
    ...(options || {}),
  });
}

/** getUserAnswerVOById GET /api/userAnswer/get/vo */
export async function getUserAnswerVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserAnswerVOByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseUserAnswerVO_>('/api/userAnswer/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listUserAnswerByPage POST /api/userAnswer/list/page */
export async function listUserAnswerByPageUsingPost(
  body: API.UserAnswerQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageUserAnswer_>('/api/userAnswer/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listUserAnswerVOByPage POST /api/userAnswer/list/page/vo */
export async function listUserAnswerVoByPageUsingPost(
  body: API.UserAnswerQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageUserAnswerVO_>('/api/userAnswer/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listMyUserAnswerVOByPage POST /api/userAnswer/my/list/page/vo */
export async function listMyUserAnswerVoByPageUsingPost(
  body: API.UserAnswerQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageUserAnswerVO_>('/api/userAnswer/my/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateUserAnswer POST /api/userAnswer/update */
export async function updateUserAnswerUsingPost(
  body: API.UserAnswerUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/userAnswer/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
