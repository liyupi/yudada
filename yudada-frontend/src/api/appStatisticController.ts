// @ts-ignore
/* eslint-disable */
import request from '@/request';

/** getAppAnswerCount GET /api/app/statistic/answer_count */
export async function getAppAnswerCountUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseListAppAnswerCountDTO_>('/api/app/statistic/answer_count', {
    method: 'GET',
    ...(options || {}),
  });
}

/** getAppAnswerResultCount GET /api/app/statistic/answer_result_count */
export async function getAppAnswerResultCountUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAppAnswerResultCountUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListAppAnswerResultCountDTO_>(
    '/api/app/statistic/answer_result_count',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}
