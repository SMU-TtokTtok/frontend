import * as S from './form.css';

function FormSkeleton() {
  return (
    <div className={S.wrapper} aria-busy="true" aria-label="지원폼을 불러오는 중입니다">
      <div className={S.contentContainer}>
        <div className={S.FormHeader}>
          <span className={`${S.skeletonBlock} ${S.formTitleSkeleton}`} />
          <span className={`${S.skeletonBlock} ${S.formSubTitleSkeleton}`} />
        </div>

        <section className={S.FormBasicContainer}>
          <span className={`${S.skeletonBlock} ${S.sectionTitleSkeleton}`} />
          <div className={S.skeletonFieldGrid}>
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className={S.skeletonFieldGroup}>
                <span className={`${S.skeletonBlock} ${S.fieldLabelSkeleton}`} />
                <span className={`${S.skeletonBlock} ${S.inputSkeleton}`} />
              </div>
            ))}
          </div>
        </section>

        {Array.from({ length: 3 }).map((_, index) => (
          <section key={index} className={S.questionContainer}>
            <div className={S.questionHeader}>
              <span className={`${S.skeletonBlock} ${S.questionTitleSkeleton}`} />
              <span className={`${S.skeletonBlock} ${S.questionSubTitleSkeleton}`} />
            </div>
            <span className={`${S.skeletonBlock} ${S.answerSkeleton}`} />
          </section>
        ))}
      </div>

      <aside className={S.rightSideContainer}>
        <div className={S.BoxFlex}>
          <span className={`${S.skeletonBlock} ${S.sidebarTitleSkeleton}`} />
          <div className={S.BoxContentContainer}>
            {Array.from({ length: 4 }).map((_, index) => (
              <span key={index} className={`${S.skeletonBlock} ${S.sidebarItemSkeleton}`} />
            ))}
          </div>
        </div>
        <span className={`${S.skeletonBlock} ${S.sidebarButtonSkeleton}`} />
        <span className={`${S.skeletonBlock} ${S.sidebarButtonSkeleton}`} />
      </aside>
    </div>
  );
}

export default FormSkeleton;
