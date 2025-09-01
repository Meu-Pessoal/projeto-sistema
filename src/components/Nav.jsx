import { Link } from "react-router-dom"
import Logo from "../assets/image.png"

const Nav = () => {
  return (
    <header className="bg-orange-900 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <img className="w-20" src={ Logo } alt="Logo" />
        <ul className="flex gap-2">
          <li className="list-none"><Link to="/" className="hover:text-gray-400 transition-colors duration-300 hover:underline">Home</Link></li>
          <li className="list-none"><Link to="/cliente" className="hover:text-gray-400 transition-colors duration-300 hover:underline">Cliente</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav