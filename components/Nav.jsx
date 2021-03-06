import Link from 'next/link'
import Image from 'next/image'

const Nav = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/logo.png" width={225} height={90} />
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/posts"><a>Posts</a></Link>
        </nav>
    );
}
 
export default Nav;