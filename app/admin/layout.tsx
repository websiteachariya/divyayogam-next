import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Console & SEO Manager | Divya Yogam',
  description: 'Divya Yogam internal administration, subscriber database management, and SEO audit panel.',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
