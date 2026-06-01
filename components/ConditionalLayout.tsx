'use client';

import { usePathname } from 'next/navigation';
import HeaderBottom from './Header/Header';

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAuthPage = pathname.startsWith('/auth');

  return (
    <>
      {!isAuthPage && (
        <>
          {/* <HeaderTop /> */}
          <HeaderBottom />
        </>
      )}
      <main className="flex-1">{children}</main>
    </>
  );
}
