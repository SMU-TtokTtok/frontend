import * as S from './rightSide.css';
import { useGradeCount } from '@/hooks/useClubMember';

export default function RightSide() {
  const { data } = useGradeCount();
  return (
    <div className={S.container}>
      <div className={S.ItemFlex}>
        <div className={S.GradeText}>총 인원</div>
        <div className={S.NumberText}>{data?.totalCount || 0}명</div>
      </div>
      <div className={S.ItemFlex}>
        <div className={S.GradeText}>ㄴ1학년</div>
        <div className={S.NumberText}>총 {data?.firstGradeCount || 0}명</div>
      </div>
      <div className={S.ItemFlex}>
        <div className={S.GradeText}>ㄴ2학년</div>
        <div className={S.NumberText}>총 {data?.secondGradeCount || 0}명</div>
      </div>
      <div className={S.ItemFlex}>
        <div className={S.GradeText}>ㄴ3학년</div>
        <div className={S.NumberText}>총 {data?.thirdGradeCount || 0}명</div>
      </div>
      <div className={S.ItemFlex}>
        <div className={S.GradeText}>ㄴ4학년</div>
        <div className={S.NumberText}>총 {data?.fourthGradeCount || 0}명</div>
      </div>
    </div>
  );
}
