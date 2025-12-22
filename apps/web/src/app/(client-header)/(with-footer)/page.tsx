import HomePage from '@/components/home/page';

type filter = Record<string, string | string[] | undefined>;

export default async function Page({ searchParams }: { searchParams: Promise<filter> }) {
  const filter = await searchParams;
  return <HomePage filter={filter} />;
}
