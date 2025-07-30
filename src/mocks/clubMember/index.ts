import { http, HttpResponse } from 'msw';
import gradeCount from './gradeCount.json';
import searchMembers from './searchResult.json';

export const getGradeCount = http.get('/api/admin/members/:clubId/total-count', () => {
  return HttpResponse.json(gradeCount);
});

export const getSearchMembers = http.get('/api/admin/club/members/search', () => {
  return HttpResponse.json(searchMembers);
});
