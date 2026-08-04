import { Metadata } from 'next';
import { getClubInfo } from '@/components/clubInfo/api/getClubInfo';
import ClubInfoPage from '@/components/clubInfo';

interface PageProps {
  params: Promise<{ clubId: string }>;
}

const getFallbackMetadata = (clubId: string): Metadata => ({
  title: '똑똑 - 동아리 소개',
  description: '동아리 소개 페이지',
  openGraph: {
    title: '동아리 소개',
    description: '동아리 소개 페이지',
    url: `https://www.ddock-ddock-smu.com/club/${clubId}`,
    images: [
      {
        url: 'https://www.ddock-ddock-smu.com/mainlogo.png',
        width: 600,
        height: 330,
        alt: '동아리 대표 이미지',
      },
    ],
  },
});

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { clubId } = await params;

  try {
    const club = await getClubInfo(clubId);

    return {
      title: `똑똑 - ${club.name} 동아리 소개`,
      description: club.summary || `${club.name} 동아리를 소개합니다.`,
      openGraph: {
        title: `${club.name} - 동아리 소개`,
        description: club.summary || `${club.name} 동아리를 소개합니다.`,
        url: `https://www.ddock-ddock-smu.com/club/${clubId}`,
        images: [
          {
            url: 'https://www.ddock-ddock-smu.com/mainlogo.png',
            width: 600,
            height: 330,
            alt: `${club.name} 대표 이미지`,
          },
        ],
      },
    };
  } catch {
    return getFallbackMetadata(clubId);
  }
}

export default function Page() {
  return <ClubInfoPage />;
}
