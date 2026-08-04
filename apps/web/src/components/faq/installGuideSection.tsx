'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@ttockttock/ui';
import * as S from './index.css';
import iosInstallGuideImage from './assets/images/ios-install-guide.webp';
import androidInstallGuideImage from './assets/images/android-install-guide.webp';

const INSTALL_GUIDE_OPTIONS = [
  { key: 'ios', label: 'iPhone', image: iosInstallGuideImage },
  { key: 'android', label: 'Android', image: androidInstallGuideImage },
] as const;

type InstallGuidePlatform = (typeof INSTALL_GUIDE_OPTIONS)[number]['key'];

export default function InstallGuideSection() {
  const [platform, setPlatform] = useState<InstallGuidePlatform>('ios');
  const selectedGuide = INSTALL_GUIDE_OPTIONS.find((option) => option.key === platform)!;

  return (
    <div className={S.installGuideWrapper}>
      <div className={S.installGuideTabs} role="tablist" aria-label="기기 선택">
        {INSTALL_GUIDE_OPTIONS.map((option) => {
          const isSelected = option.key === platform;

          return (
            <Button
              key={option.key}
              role="tab"
              aria-selected={isSelected}
              variant={isSelected ? 'primary' : 'none'}
              className={S.installGuideTab({ selected: isSelected })}
              onClick={() => setPlatform(option.key)}
            >
              {option.label}
            </Button>
          );
        })}
      </div>
      <Image
        src={selectedGuide.image}
        alt={`${selectedGuide.label} 앱 설치 가이드 이미지`}
        className={S.answerImage}
      />
    </div>
  );
}
