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

export const postMessage = async (body: postMessageBody, clubId: string, kind: string) => {
  let data;
  if (kind === 'interview') {
    data = await adminClient.post(`/applies/${clubId}/send-email?kind=INTERVIEW`, body);
  } else {
    data = await adminClient.post(`/applies/${clubId}/send-email?kind=DOCUMENT`, body);
  }

  return data;
};
