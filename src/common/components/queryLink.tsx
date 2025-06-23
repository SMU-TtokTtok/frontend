import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import React, { PropsWithChildren } from 'react';
import { ParsedUrlQueryInput } from 'querystring';
interface QueryLinkProps {
  extraQuery?: ParsedUrlQueryInput;
  preserveQuery?: boolean;
  scroll?: boolean;
}

function QueryLink({
  extraQuery,
  scroll = false,
  preserveQuery = true,
  children,
}: PropsWithChildren<QueryLinkProps>) {
  const pathname = usePathname();

  const searchParmas = useSearchParams();
  const existingQuery = Object.fromEntries(searchParmas.entries());
  if (!preserveQuery) {
    return (
      <Link href={{ pathname, query: extraQuery }} scroll={scroll}>
        {children}
      </Link>
    );
  }

  return (
    <Link href={{ pathname, query: { ...existingQuery, ...extraQuery } }} scroll={scroll}>
      {children}
    </Link>
  );
}

export default QueryLink;
