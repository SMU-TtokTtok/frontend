import { http, HttpResponse } from 'msw';
import gradeCount from './gradeCount.json';
import searchMembers from './searchResult.json';
import clubMemberList from './clubMemberList.json';

export const getGradeCount = http.get('/api/admin/members/:clubId/total-count', () => {
  return HttpResponse.json(gradeCount);
});

export const getSearchMembers = http.get('/api/admin/members/:clubId/search', () => {
  return HttpResponse.json(searchMembers);
});

export const deleteClubMember = http.delete('/api/admin/members/:clubId/:memberId', () => {
  return HttpResponse.json({ success: true }, { status: 200 });
});

export const patchClubMember = http.patch('/api/admin/members/:clubId/:memberId/role', () => {
  return HttpResponse.json({ success: true }, { status: 200 });
});

export const postClubMember = http.post('/api/admin/members/:clubId/add', () => {
  return HttpResponse.json({ success: true }, { status: 200 });
});

export const getClubMember = http.get('/api/admin/members/:clubId', () => {
  return HttpResponse.json(clubMemberList, { status: 200 });
});
