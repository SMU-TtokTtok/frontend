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
import { typeItems, categoryItems, univItems } from '@/common/constants/adminOptions';
import { useRecruitmentToggle } from '@/hooks/useClubInfo';
import ConfirmModal from '@/common/components/confirmModal';
import { useModal } from '@/hooks/useModal';
import { getKoreanType } from '@/common/util/getKoreanType';
import { getKoreanUniv } from '@/common/util/getKoreanUniv';
import { getKoreanCategory } from '@/common/util/getKoreanCategory';
import { useAuthStore } from '@/common/store/adminAuthStore';

type ClubType = (typeof typeItems)[number];
type ClubCategory = (typeof categoryItems)[number];
type ClubDepartment = (typeof univItems)[number];
interface ClubBoxProps extends AdminClubIntro {
  onChange?: (updated: Partial<AdminClubIntro>) => void;
  isEditing?: boolean;
}

export default function ClubBox(props: ClubBoxProps) {
  const { profile } = useAuthStore();
  const {
    name,
    summary,
    clubType,
    clubCategory,
    customCategory,
    recruiting,
    clubMemberCount,
    clubUniv,
  } = props;
  const { isOpen, handleModalClose, handleModalOpen } = useModal();
  const { handleRecruitmentToggle } = useRecruitmentToggle(handleModalOpen, profile?.clubId ?? '');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCloseRecruit = () => {
    handleRecruitmentToggle();
  };

  return (
    <>
      <div className={S.container}>
        <div className={S.headerflex}>
          {props.isEditing ? (
            <DropDown
              toggleButton={
                <DropDownButton variant="gray" className={S.dropDownStyle2}>
                  {getKoreanType(clubType)}
                </DropDownButton>
              }
              panelClassName={S.panelContainer}
            >
              {typeItems.map((item: ClubType) => (
                <li
                  key={item}
                  onClick={() => {
                    props.onChange?.({ clubType: item });
                  }}
                  className={S.panelItem}
                >
                  {getKoreanType(item)}
                </li>
              ))}
            </DropDown>
          ) : (
            <Tag variant="default" className={S.selectedTypeText({ position: 'header' })}>
              {getKoreanType(clubType)}
            </Tag>
          )}
          {props.isEditing ? (
            <DropDown
              toggleButton={
                <DropDownButton variant="gray" className={S.dropDownStyle2Wide}>
                  {getKoreanUniv(clubUniv)}
                </DropDownButton>
              }
              panelClassName={S.panelContainer}
            >
              {univItems.map((item: ClubDepartment) => (
                <li
                  key={item}
                  onClick={() => {
                    props.onChange?.({ clubUniv: item });
                  }}
                  className={S.panelItem}
                >
                  {getKoreanUniv(item)}
                </li>
              ))}
            </DropDown>
          ) : (
            <Tag variant="default" className={S.selectedTypeText({ position: 'header' })}>
              {getKoreanUniv(clubUniv)}
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
          ) : (
            name || '동아리명을 입력해주세요'
          )}
        </div>

        <div className={S.divider} />
        <div className={S.desText({ isEditing: props.isEditing })}>
          {props.isEditing ? (
            <input
              value={summary}
              // autoFocus
              onChange={(e) => {
                props.onChange?.({ summary: e.target.value });
              }}
              className={S.desTextInput}
            />
          ) : (
            summary || '한줄소개 가능한 동아리 소개를 입력해주세요'
          )}
        </div>
        <div className={S.footerFlex}>
          <div className={S.dropDownFlex}>
            {props.isEditing ? (
              <DropDown
                toggleButton={
                  <DropDownButton variant="gray" className={S.dropDownStyle}>
                    {getKoreanCategory(clubCategory)}
                  </DropDownButton>
                }
                panelClassName={S.panelContainer}
              >
                {categoryItems.map((item: ClubCategory) => (
                  <li
                    key={item}
                    onClick={() => {
                      props.onChange?.({ clubCategory: item });
                    }}
                    className={S.panelItem2}
                  >
                    {getKoreanCategory(item)}
                  </li>
                ))}
              </DropDown>
            ) : (
              <Tag variant="default" className={S.selectedTypeText({ position: 'footer' })}>
                {getKoreanCategory(clubCategory)}
              </Tag>
            )}

            {props.isEditing ? (
              <div className={S.detailFlex}>
                <input
                  ref={inputRef}
                  value={customCategory}
                  onChange={(e) => props.onChange?.({ customCategory: e.target.value })}
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
                {customCategory.trim() === '' ? '없음' : customCategory}
              </Tag>
            )}

            <Tag
              variant={recruiting ? 'secondary' : 'tertiary'}
              className={S.selectedTypeText({ position: 'footer' })}
            >
              {recruiting ? '모집중' : '모집마감'}
            </Tag>
          </div>
          <Button
            variant="secondary"
            onClick={() => {
              handleCloseRecruit();
            }}
            className={S.finishedButton}
          >
            {recruiting ? '지원 마감하기' : '모집 시작하기'}
          </Button>
        </div>
      </div>
      <ConfirmModal isOpen={isOpen} onClose={handleModalClose}>
        {recruiting ? '모집이 시작되었습니다' : '지원마감이 완료되었습니다'}
      </ConfirmModal>
    </>
  );
}
