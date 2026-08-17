import * as S from './clubItemSkeleton.css';

interface ClubItemSkeletonProps {
  className?: string;
}

function ClubItemSkeleton({ className = '' }: ClubItemSkeletonProps) {
  return (
    <li className={`${S.container} ${className}`} aria-hidden="true">
      <div className={S.headerWrapper}>
        <span className={`${S.skeletonBlock} ${S.type}`} />
        <span className={`${S.skeletonBlock} ${S.star}`} />
      </div>
      <span className={`${S.skeletonBlock} ${S.name}`} />
      <div className={S.tagWrapper}>
        <span className={`${S.skeletonBlock} ${S.tag}`} />
        <span className={`${S.skeletonBlock} ${S.tag}`} />
        <span className={`${S.skeletonBlock} ${S.status}`} />
      </div>
    </li>
  );
}

export default ClubItemSkeleton;
