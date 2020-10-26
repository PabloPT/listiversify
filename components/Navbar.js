import Link from 'next/link';

const Navbar = (props)  => (
  
  <nav className="navbar navbar-expand navbar-dark bg-primary mb-4">
    <div className="container">
      
    <Link href="/"><a class="navbar-brand">Listiversify</a></Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/"><a className={`nav-link ${props.activeNode === 'Home' ? 'active' : ''}`}>Home</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/about"><a className={`nav-link ${props.activeNode === 'About' ? 'active' : ''}`}>About</a></Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;

{/* <div> */}
    {/* <style jsx>{`
      ul {
        background: #333;
        color: #fff;
        list-style: none;
        display: flex;
      }

      ul li {
        font-size: 18px;
        margin-right: 20px;
      }

      ul li a {
        color: #fff;
        text-decoration: none;
      }

      `}</style> */}