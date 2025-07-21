import { http, HttpResponse } from 'msw';
import gradeCount from './gradeCount.json';

export const getGradeCount = http.get('/admin/api/members/grade-count', () => {
  return HttpResponse.json(gradeCount);
});
