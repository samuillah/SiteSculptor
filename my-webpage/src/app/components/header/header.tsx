import Link from "next/link";
import Styles from "../header/header.module.css"
const Header = ()=>{
    return(
        <>
        <div className={Styles.container}>
        <h1 className={Styles.heading}>This is Header Component </h1>
        </div>
        <div className={Styles.container1}>
        <ul>
          <li><Link href= "/">Home</Link>
          </li>
          <li><Link href ="/about">About</Link>
          </li>
          <li><Link href = "/contact">Contact</Link>
          </li>
        </ul>
        </div>
        </>
    )
};
export default Header;
