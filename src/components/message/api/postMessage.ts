import { adminClient } from '@/common/apis/ttockTtockClient';

export interface postMessageBody {
  pass: {
    title: string;
    body: string;
  };
  fail: {
    title: string;
    body: string;
  };
}

export const postMessage = async (body: postMessageBody) => {
  //나중에 세션스토리지에서 추출
  const clubId = 1;
  const data = await adminClient.post(`/applies/${clubId}/send-email`, body);

  return data;
};
