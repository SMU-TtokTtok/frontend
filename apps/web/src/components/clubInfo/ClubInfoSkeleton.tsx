import * as S from './index.css';
import BackButton from './BackButton';

function ClubInfoSkeleton() {
  return (
    <div className={S.wrapper} aria-busy="true" aria-label="동아리 정보를 불러오는 중입니다">
      <div className={S.container}>
        <div className={S.leftcontainer}>
          <BackButton />
          <section className={S.profileSkeleton}>
            <span className={`${S.skeletonBlock} ${S.profileImageSkeleton}`} />
            <div className={S.profileTextSkeleton}>
              <span className={`${S.skeletonBlock} ${S.clubNameSkeleton}`} />
              <span className={`${S.skeletonBlock} ${S.clubSummarySkeleton}`} />
              <div className={S.profileTagsSkeleton}>
                <span className={`${S.skeletonBlock} ${S.tagSkeleton}`} />
                <span className={`${S.skeletonBlock} ${S.tagSkeleton}`} />
              </div>
            </div>
          </section>
          <section className={S.introSkeleton}>
            <span className={`${S.skeletonBlock} ${S.introTitleSkeleton}`} />
            <span className={`${S.skeletonBlock} ${S.introLineSkeleton}`} />
            <span className={`${S.skeletonBlock} ${S.introLineSkeleton}`} />
            <span className={`${S.skeletonBlock} ${S.introLineShortSkeleton}`} />
          </section>
        </div>
        <aside className={S.rightSkeleton}>
          <span className={`${S.skeletonBlock} ${S.sideTitleSkeleton}`} />
          <span className={`${S.skeletonBlock} ${S.sideButtonSkeleton}`} />
          <span className={`${S.skeletonBlock} ${S.sideLineSkeleton}`} />
          <span className={`${S.skeletonBlock} ${S.sideLineSkeleton}`} />
        </aside>
      </div>
    </div>
  );
}

export default ClubInfoSkeleton;
