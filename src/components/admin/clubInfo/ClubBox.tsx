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
import { useRecruitmentToggle } from '@/hooks/useClubInfo';
import ConfirmModal from '@/common/components/confirmModal';
import { useModal } from '@/hooks/useModal';

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
  const { isOpen, handleModalClose, handleModalOpen } = useModal();
  const { handleRecruitmentToggle } = useRecruitmentToggle(handleModalOpen);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCloseRecruit = (isRecruiting: boolean) => {
    handleRecruitmentToggle(!isRecruiting);
  };

  return (
    <>
      <div className={S.container}>
        <div className={S.headerflex}>
          {props.isEditing ? (
            <DropDown
              toggleButton={
                <DropDownButton variant="gray" className={S.dropDownStyle2}>
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
            <Tag variant="default" className={S.selectedTypeText({ position: 'header' })}>
              {type}
            </Tag>
          )}
          {props.isEditing ? (
            <DropDown
              toggleButton={
                <DropDownButton variant="gray" className={S.dropDownStyle2Wide}>
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
            <Tag variant="default" className={S.selectedTypeText({ position: 'header' })}>
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
              size={14}
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
        <div className={S.desText({ isEditing: props.isEditing })}>
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
                  <DropDownButton variant="gray" className={S.dropDownStyle}>
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
              <Tag variant="default" className={S.selectedTypeText({ position: 'footer' })}>
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
              <Tag variant="default" className={S.selectedTypeText({ position: 'footer' })}>
                {detailField}
              </Tag>
            )}

            <Tag
              variant={isRecruiting ? 'secondary' : 'tertiary'}
              className={S.selectedTypeText({ position: 'footer' })}
            >
              {isRecruiting ? '모집중' : '모집마감'}
            </Tag>
          </div>
          <Button
            variant="secondary"
            onClick={() => {
              handleCloseRecruit(isRecruiting);
            }}
            className={S.finishedButton}
          >
            {isRecruiting ? '지원 마감하기' : '모집 시작하기'}
          </Button>
        </div>
      </div>
      <ConfirmModal isOpen={isOpen} onClose={handleModalClose}>
        {isRecruiting ? '지원마감이 완료되었습니다' : '모집이 시작되었습니다'}
      </ConfirmModal>
    </>
  );
}
