'use client';

import { usePathname } from 'next/navigation';
import HeaderTop from './Header/HeaderTop';
import HeaderBottom from './Header/HeaderBottom';

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
          <HeaderTop />
          <HeaderBottom />
        </>
      )}
      <main className="flex-1">{children}</main>
    </>
  );
}
