import "../styles/globals.css";
import Header from "./header";
import Providers from "./Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
        <body>
      <Providers>
          <Header />
          <div>{children}</div>
      </Providers>
        </body>
    </html>
  );
}
