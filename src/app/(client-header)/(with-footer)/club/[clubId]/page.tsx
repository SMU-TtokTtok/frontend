import { Metadata } from 'next';
import { getClubInfo } from '@/components/clubInfo/api/getClubInfo';
import ClubInfoPage from '@/components/clubInfo';
interface PageProps {
  params: Promise<{ clubId: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { clubId } = await params;
  const club = await getClubInfo(clubId);

  return {
    title: `똑똑 - ${club.name}동아리 소개`,
    description: club.summary || `${club.name} 동아리를 소개합니다.`,
    openGraph: {
      title: `${club.name} - 동아리 소개`,
      description: club.summary || `${club.name} 동아리를 소개합니다.`,
      url: `https://www.ddock-ddock-smu.com/club/${clubId}`,
      images: [
        {
          url: `https://www.ddock-ddock-smu.com/mainlogo.png`,
          width: 600,
          height: 330,
          alt: `${club.name} 대표 이미지`,
        },
      ],
    },
  };
}

export default function Page() {
  return <ClubInfoPage />;
}
