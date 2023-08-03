import './styles/globals.scss';
import './styles/variables.scss';
import './styles/reset.scss';

import type { Metadata } from 'next'

import { Montserrat, Russo_One } from 'next/font/google'

const mainFont = Russo_One({
   weight: '400',
   style: 'normal',
   variable: '--main-font',
   subsets: ['latin'],
   display: 'swap',
})

const secondFont = Montserrat({
   weight: ['300', '400', '500', '600', '700'],
   style: ['normal', 'italic'],
   variable: '--second-font',
   subsets: ['latin'],
   display: 'swap',
})


export const metadata: Metadata = {
   title: 'Théo Perrin - Portfolio',
   description: 'Portfolio de Théo Perrin, Chef de projet digitale',
}

export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <html lang="fr">
         <body className={`${mainFont.variable} ${secondFont.variable}`}>{children}</body>
      </html>
   )
}
