import localFont from "next/font/local"
import "./globals.css";

const atypBLText = localFont({
  src: [
    {
      path: './../fonts/AtypBLText-Regular.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './../fonts/AtypBLText-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './../fonts/AtypBLText-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './../fonts/AtypBLText-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-atyp',
  adjustFontFallback: false
})

export const metadata = {
  title: "Codeboost Blog",
  description: "Blog do Codeboost",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={atypBLText.className}>
        {children}
      </body>
    </html>
  );
}
