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

export const postMessage = async (body: postMessageBody, clubId: string) => {
  const data = await adminClient.post(`/applies/${clubId}/send-emai`, body);
  console.log(data);
  return data;
};
