import '@mantine/core/styles.css';

import type { ReactNode } from "react";

import { ColorSchemeScript, MantineProvider } from '@mantine/core';

type RootLayoutProps = { children: ReactNode };

export default async function RootLayout({ children }: RootLayoutProps) {
  const data = await getData();

  return (
      <>
        <meta property="description" content={data.description} />
        <link rel="icon" type="image/png" href={data.icon} />
        <ColorSchemeScript />
        <main>
          <MantineProvider>{children}</MantineProvider>
        </main>
      </>
  );
}

const getData = async () => {
  return {
    description: 'An internet website!',
    icon: '/images/favicon.png',
  };
};

export const getConfig = async () => {
  return {
    render: 'static',
  };
};
