import * as S from '../createform.css';
interface SelectBoxGroupProps {
  withInterview: boolean | null;
  handleSelect: (isInterview: boolean) => void;
}

function SelectBoxGroup({ withInterview, handleSelect }: SelectBoxGroupProps) {
  return (
    <div className={S.selectButtonContainer}>
      <div
        className={`${S.selectButton()} ${withInterview === false ? S.selected : ''}`}
        onClick={() => handleSelect(false)}
      >
        <p className={S.selectTypeLabel}>서류전형만</p>
        <p className={S.selectButtonDescription}>
          별도의 면접 없이 <br /> 지원서만 보고 뽑을래요
        </p>
      </div>

      <div
        className={`${S.selectButton()} ${withInterview === true ? S.selected : ''}`}
        onClick={() => handleSelect(true)}
      >
        <p className={S.selectTypeLabel}>서류전형 + 면접전형</p>
        <p className={S.selectButtonDescription}>
          지원서와 면접 <br /> 둘 다 진행해서 뽑을래요
        </p>
      </div>
    </div>
  );
}

export default SelectBoxGroup;
