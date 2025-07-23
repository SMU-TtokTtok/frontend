import * as S from '../createform.css';
interface SelectBoxGroupProps {
  withInterview: boolean | null;
  handleSelect: (isInterview: boolean) => void;
}

function SelectBoxGroup({ withInterview, handleSelect }: SelectBoxGroupProps) {
  return (
    <div className={S.selectButtonContainer}>
      <div
        className={`${S.selectButton({ isSelected: withInterview === false })} `}
        onClick={() => handleSelect(false)}
      >
        <p className={S.selectTypeLabel({ isSelected: withInterview === false })}>서류전형만</p>
        <p className={S.selectButtonDescription({ isSelected: withInterview === false })}>
          별도의 면접 없이 <br /> 지원서만 보고 뽑을래요
        </p>
      </div>

      <div
        className={`${S.selectButton({ isSelected: withInterview === true })}`}
        onClick={() => handleSelect(true)}
      >
        <p className={S.selectTypeLabel({ isSelected: withInterview === true })}>
          서류전형 + 면접전형
        </p>
        <p className={S.selectButtonDescription({ isSelected: withInterview === true })}>
          지원서와 면접 <br /> 둘 다 진행해서 뽑을래요
        </p>
      </div>
    </div>
  );
}

export default SelectBoxGroup;
