import * as S from './clubBox.css';
import DropDownButton from '@/common/ui/dropdownButton';
import Tag from '@/common/ui/tag/index';
import Button from '@/common/ui/button';
import person from '@/assets/person.svg';
import Image from 'next/image';
import { useState, useRef, useLayoutEffect } from 'react';
import editIcon from '@/assets/edit.svg';
import { ClubIntro } from '@/common/model/clubIntro';
import DropDown from '@/common/components/dropdown/index';
import { typeItems, categoryItems, recruitItems } from '@/common/constants/adminOptions';

const handleCloseRecruit = async () => {
  try {
    const res = await fetch('/api/club-info/recruiting', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isRecruiting: false }),
    });
    const data = await res.json();
    if (data.success) {
      alert('모집이 마감되었습니다!');
    } else {
      alert('모집 마감에 실패했습니다.');
    }
  } catch {
    alert('오류가 발생했습니다.');
  }
};

interface ClubBoxProps extends ClubIntro {
  onChange?: (updated: Partial<ClubIntro>) => void;
  isEditing?: boolean;
}

export default function ClubBox(props: ClubBoxProps) {
  const { name, shortDescription, type, category, detailField, isRecruiting, peopleCount } = props;

  // 선택된 동아리 분류 상태 및 항목
  const [selectedType, setSelectedType] = useState<'중앙' | '학과' | '연합'>(
    type as '중앙' | '학과' | '연합',
  );

  // 카테고리 드롭다운 상태 및 항목
  const [selectedCategory, setSelectedCategory] = useState(category);

  // 모집상태 드롭다운 상태 및 항목
  const [selectedRecruit, setSelectedRecruit] = useState<'모집중' | '모집마감'>(
    isRecruiting ? '모집중' : '모집마감',
  );

  // 사용자입력 세부분야 인라인 수정 상태
  const [customField, setCustomField] = useState(detailField);
  const [isEditingCustomField, setIsEditingCustomField] = useState(false);
  // input width 동기화용
  const spanRef = useRef<HTMLSpanElement>(null);
  const [inputWidth, setInputWidth] = useState(0);
  useLayoutEffect(() => {
    if (spanRef.current) {
      setInputWidth(spanRef.current.offsetWidth + 2);
    }
  }, [customField, isEditingCustomField]);

  // 동아리명, 한줄설명 인라인 수정 상태
  const [editingName, setEditingName] = useState(false);
  const [editingDesc, setEditingDesc] = useState(false);
  const [clubName, setClubName] = useState(name);
  const [clubDesc, setClubDesc] = useState(shortDescription);

  return (
    <div className={S.container}>
      <div className={S.headerflex}>
        {props.isEditing ? (
          <DropDown
            toggleButton={
              <DropDownButton variant="default" className={S.dropDownStyle2}>
                {selectedType}
              </DropDownButton>
            }
            panelClassName={S.panelContainer}
          >
            {typeItems.map((item: '중앙' | '학과' | '연합') => (
              <li
                key={item}
                onClick={() => {
                  setSelectedType(item as '중앙' | '학과' | '연합');
                  // props.onChange?.({ type: item });
                }}
                className={S.panelItem}
              >
                {item}
              </li>
            ))}
          </DropDown>
        ) : (
          <Tag variant="default" className={S.selectedTypeText + ' ' + S.border4}>
            {type}
          </Tag>
        )}
      </div>
      <div className={S.clubName} onDoubleClick={() => props.isEditing && setEditingName(true)}>
        {editingName ? (
          <input
            value={clubName}
            autoFocus
            onChange={(e) => {
              setClubName(e.target.value);
              props.onChange?.({ name: e.target.value });
            }}
            onBlur={() => setEditingName(false)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') setEditingName(false);
            }}
            className={S.clubNameInput + ' ' + S.underlineInput}
            style={{ width: Math.max(60, clubName.length * 18) }}
          />
        ) : clubName.trim() === '' ? (
          '이곳에는 동아리명이 들어갑니다.'
        ) : (
          clubName
        )}
      </div>
      <div className={S.numberFlex}>
        <Image src={person} alt="사람" width={21} height={21} />
        <span className={S.numberText}>{peopleCount}</span>
      </div>
      <div className={S.desText} onDoubleClick={() => props.isEditing && setEditingDesc(true)}>
        {editingDesc ? (
          <input
            value={clubDesc}
            autoFocus
            onChange={(e) => {
              setClubDesc(e.target.value);
              props.onChange?.({ shortDescription: e.target.value });
            }}
            onBlur={() => setEditingDesc(false)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') setEditingDesc(false);
            }}
            className={S.desTextInput + ' ' + S.underlineInput}
            style={{ width: Math.max(80, clubDesc.length * 12) }}
          />
        ) : clubDesc.trim() === '' ? (
          '이곳에는 한줄소개 정도의 간략한 동아리 소개가 들어갑니다.'
        ) : (
          clubDesc
        )}
      </div>
      <div className={S.footerFlex}>
        <div className={S.dropDownFlex}>
          {props.isEditing ? (
            <DropDown
              toggleButton={
                <DropDownButton variant="default" className={S.dropDownStyle}>
                  {selectedCategory}
                </DropDownButton>
              }
              panelClassName={S.panelContainer}
            >
              {categoryItems.map((item: string) => (
                <li
                  key={item}
                  onClick={() => {
                    setSelectedCategory(item);
                    // props.onChange?.({ category: item });
                  }}
                  className={S.panelItem2}
                >
                  {item}
                </li>
              ))}
            </DropDown>
          ) : (
            <Tag variant="default" className={S.selectedTypeText + ' ' + S.border100}>
              {category}
            </Tag>
          )}

          <div
            className={
              S.userInputTag + ' ' + (isEditingCustomField ? S.cursorText : S.cursorPointer)
            }
            onDoubleClick={() => props.isEditing && setIsEditingCustomField(true)}
          >
            {isEditingCustomField ? (
              <>
                <input
                  value={customField}
                  autoFocus
                  onChange={(e) => {
                    setCustomField(e.target.value);
                    props.onChange?.({ detailField: e.target.value });
                  }}
                  onBlur={() => setIsEditingCustomField(false)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') setIsEditingCustomField(false);
                  }}
                  className={S.customFieldInput + ' ' + S.underlineInput}
                  style={{ width: inputWidth }}
                />
                <span ref={spanRef} className={S.customFieldSpan}>
                  {customField || ' '}
                </span>
              </>
            ) : (
              <span className={S.customFieldText}>
                {customField.trim() === '' ? '사용자입력 세부분야' : customField}
              </span>
            )}
            <Image
              src={editIcon}
              alt="edit"
              width={21}
              height={21}
              onClick={() => props.isEditing && setIsEditingCustomField(true)}
            />
          </div>

          {props.isEditing ? (
            <DropDown
              toggleButton={
                <DropDownButton
                  variant={selectedRecruit === '모집마감' ? 'default' : 'tertiary'}
                  className={S.dropDownStyle}
                >
                  {selectedRecruit}
                </DropDownButton>
              }
              panelClassName={S.panelContainer}
            >
              {recruitItems.map((item: '모집중' | '모집마감') => (
                <li
                  key={item}
                  onClick={() => {
                    setSelectedRecruit(item as '모집중' | '모집마감');
                    // props.onChange?.({ isRecruiting: item === '모집중' });
                  }}
                  className={S.panelItem2}
                >
                  {item}
                </li>
              ))}
            </DropDown>
          ) : (
            <Tag
              variant={isRecruiting ? 'secondary' : 'tertiary'}
              className={S.selectedTypeText + ' ' + S.border100}
            >
              {isRecruiting ? '모집중' : '모집마감'}
            </Tag>
          )}
        </div>
        <Button variant="secondary" onClick={handleCloseRecruit} className={S.finishedButton}>
          지원 마감하기
        </Button>
      </div>
    </div>
  );
}
