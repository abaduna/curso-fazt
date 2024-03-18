import Link from "next/link"
import "./Navbar.css"
export default function NavBar() {
    return(
        <nav className="navbar">
          <h1><Link href="/">Next.js curso </Link></h1>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </nav>
    )
}