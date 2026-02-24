import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'], // 영문/숫자 서브셋 최적화 (한글 폰트의 경우 일반적으로 latin 포함)
  display: 'swap',
  variable: '--font-outfit', //tailwind와 연동할 css 변수명 지정
});

export const metadata: Metadata = {
  title: 'nft-preview-card-component',
  description: 'frontend mentor challenge',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={outfit.variable}>
      <body className="antialiased w-dvw h-dvh bg-blue-950 flex justify-center items-center">{children}</body>
    </html>
  );
}
