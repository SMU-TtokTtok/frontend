import { http, HttpResponse } from 'msw';
import gradeCount from './gradeCount.json';
import searchMembers from './searchResult.json';

export const getGradeCount = http.get('/admin/api/members/grade-count', () => {
  return HttpResponse.json(gradeCount);
});

export const getSearchMembers = http.get('/admin/api/members/search', () => {
  return HttpResponse.json(searchMembers);
});
