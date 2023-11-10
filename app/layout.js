// app/layout.tsx
import {Providers} from "./providers";
import { Navi } from "@/components/navi";
import "@/styles/globals.css";
export default function RootLayout({children}) {
  return (
    <html lang="en" className='dark'>
      <body>
        <Providers>
        <Navi/>
          {children}
        </Providers>
      </body>
    </html>
  );
}