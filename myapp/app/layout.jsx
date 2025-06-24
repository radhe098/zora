import './globals.css';
import Providers from './providers';

export const metadata = {
  title: 'Privy + Next.js App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
