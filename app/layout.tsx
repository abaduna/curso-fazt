
import NavBar from "../componets/Navbar"
import"./global.css"
export const metadata = {
  title: 'Curso de next',
  description: 'curso de next de fazt',
  keywords:["nose","react","js"]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
       <NavBar/>
        {children}
        </body>
    </html>
  )
}
