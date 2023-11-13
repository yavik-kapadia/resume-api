// app/layout.tsx
import { Navi } from "@/components/navi"

import { Providers } from "./providers"

import "@/styles/globals.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>
          <Navi />
          {children}
        </Providers>
      </body>
    </html>
  )
}
