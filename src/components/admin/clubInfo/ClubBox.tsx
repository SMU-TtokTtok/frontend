import * as S from './clubBox.css';
import DropDownButton from '@/common/ui/dropdownButton';
import Tag from '@/common/ui/tag/index';
import Button from '@/common/ui/button';
import person from '@/assets/person.svg';
import Image from 'next/image';
import { useRef } from 'react';
import editIcon from '@/assets/edit.svg';
import { AdminClubIntro } from '@/common/model/clubIntro';
import DropDown from '@/common/components/dropdown/index';
import {
  typeItems,
  categoryItems,
  recruitItems,
  departmentItems,
} from '@/common/constants/adminOptions';

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

type ClubType = (typeof typeItems)[number];
type ClubCategory = (typeof categoryItems)[number];
type ClubRecruit = (typeof recruitItems)[number];
type ClubDepartment = (typeof departmentItems)[number];
interface ClubBoxProps extends AdminClubIntro {
  onChange?: (updated: Partial<AdminClubIntro>) => void;
  isEditing?: boolean;
}

export default function ClubBox(props: ClubBoxProps) {
  const {
    name,
    shortDescription,
    type,
    category,
    detailField,
    isRecruiting,
    peopleCount,
    department,
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={S.container}>
      <div className={S.headerflex}>
        {props.isEditing ? (
          <DropDown
            toggleButton={
              <DropDownButton variant="default" className={S.dropDownStyle2}>
                {type}
              </DropDownButton>
            }
            panelClassName={S.panelContainer}
          >
            {typeItems.map((item: ClubType) => (
              <li
                key={item}
                onClick={() => {
                  props.onChange?.({ type: item });
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
        {props.isEditing ? (
          <DropDown
            toggleButton={
              <DropDownButton variant="default" className={S.dropDownStyle2}>
                {department}
              </DropDownButton>
            }
            panelClassName={S.panelContainer}
          >
            {departmentItems.map((item: ClubDepartment) => (
              <li
                key={item}
                onClick={() => {
                  props.onChange?.({ department: item });
                }}
                className={S.panelItem}
              >
                {item}
              </li>
            ))}
          </DropDown>
        ) : (
          <Tag variant="default" className={S.selectedTypeText + ' ' + S.border4}>
            {department}
          </Tag>
        )}
      </div>
      <div className={S.clubName}>
        {props.isEditing ? (
          <input
            value={name}
            autoFocus
            onChange={(e) => {
              props.onChange?.({ name: e.target.value });
            }}
            className={S.clubNameInput}
            size={20}
          />
        ) : name.trim() === '' ? (
          '동아리명을 입력해주세요'
        ) : (
          name
        )}
      </div>
      <div className={S.numberFlex}>
        <Image src={person} alt="사람" width={21} height={21} />
        <span className={S.numberText}>{peopleCount}</span>
      </div>
      <div className={S.desText}>
        {props.isEditing ? (
          <input
            value={shortDescription}
            // autoFocus
            onChange={(e) => {
              props.onChange?.({ shortDescription: e.target.value });
            }}
            className={S.desTextInput}
          />
        ) : shortDescription.trim() === '' ? (
          '한줄소개 가능한 동아리 소개를 입력해주세요'
        ) : (
          shortDescription
        )}
      </div>
      <div className={S.footerFlex}>
        <div className={S.dropDownFlex}>
          {props.isEditing ? (
            <DropDown
              toggleButton={
                <DropDownButton variant="default" className={S.dropDownStyle}>
                  {category}
                </DropDownButton>
              }
              panelClassName={S.panelContainer}
            >
              {categoryItems.map((item: ClubCategory) => (
                <li
                  key={item}
                  onClick={() => {
                    props.onChange?.({ category: item });
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

          {props.isEditing ? (
            <div className={S.detailFlex}>
              <input
                ref={inputRef}
                value={detailField}
                onChange={(e) => props.onChange?.({ detailField: e.target.value })}
                className={S.detailInput}
                type="text"
                size={6}
              />
              <Image
                src={editIcon}
                alt="edit"
                width={20}
                height={20}
                onClick={() => inputRef.current?.focus()}
                style={{ cursor: 'pointer' }}
              />
            </div>
          ) : (
            <Tag variant="default" className={S.selectedTypeText + ' ' + S.border100}>
              {detailField}
            </Tag>
          )}

          {props.isEditing ? (
            <DropDown
              toggleButton={
                <DropDownButton
                  variant={isRecruiting ? 'tertiary' : 'default'}
                  className={S.dropDownStyle}
                >
                  {isRecruiting ? '모집중' : '모집마감'}
                </DropDownButton>
              }
              panelClassName={S.panelContainer}
            >
              {recruitItems.map((item: ClubRecruit) => (
                <li
                  key={item}
                  onClick={() => {
                    // setSelectedRecruit(item as ClubRecruit);
                    props.onChange?.({ isRecruiting: item === '모집중' });
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
