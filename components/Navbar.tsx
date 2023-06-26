import Link from "next/link";
import Image from "next/image"
import { NavLinks } from "@/constants"; 
import { AuthProviders } from "./"         

const Navbar = () => {

  const session = {};
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/" className="mr-auto">
          <Image
            src="/eller-logo.svg"
            width={60}
            height={18}
            alt="Eller"
          />
        </Link>
        <ul className="lg:flex hidden text-sm gap-7">
          {NavLinks.map((navlink) => (
            <Link
              href={navlink.href}
              key={navlink.key}
            >
              <li>{navlink.text}</li>
            </Link>
          ))}
        </ul>

        <div className="flexCenter gap-4">
          {session ? (
            <>
            UserPhoto
            <Link href="/create-project">
              Share work
            </Link>
            </>
          ) : (
             <AuthProviders />
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar;