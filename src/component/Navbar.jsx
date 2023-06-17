// import React, { useRef, useState } from "react";
// import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fab, faTwitter } from "@fortawesome/free-brands-svg-icons";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { TweenMax, Power3 } from "gsap";
// import styles from "../App.css";

// library.add(fab, faBars);

// const Navbar = ({
//   width,
//   logoUrl,
//   background,
//   navLinks,
//   socialIcon,
//   sticky,
// }) => {
//   let nav = useRef(null);
//   const [click, setClick] = useState(false);
//   const socialLinks = socialIcon.map((icon, index) => (
//     <li key={index}>
//       <a target="_blank" href={icon.url}>
//         <FontAwesomeIcon icon={icon.icon} />
//       </a>
//     </li>
//   ));
//   const handelExpand = () => {
//     if (click === false) {
//       TweenMax.to(nav, 0.8, { height: 300, ease: Power3.easeOut });
//       setClick(true);
//     } else {
//       TweenMax.to(nav, 0.8, { height: 0, ease: Power3.easeOut });
//       setClick(false);
//     }
//   };

//   return (
//     <div style={{ minHeight: "100vh", width: "100%" }}>
//       <Router>
//         <div
//           className={styles.MoNavContainer}
//           style={{
//             background: background,
//             position: sticky ? "sticky" : "unset",
//           }}
//         >
//           <div className={styles.mobileNav} style={{ background: background }}>
//             <div className={styles.navBars}>
//               <FontAwesomeIcon icon={faBars} onClick={handelExpand} />
//             </div>
//             <div className={styles.MoNavLogo}>
//               <img src={logoUrl} alt="logo" />
//             </div>

//             <div className={styles.MoNavSocial}>
//               {width > 700 ? <ul>{socialLinks}</ul> : null}
//             </div>
//           </div>
//           <div
//             className={styles.MoNavLinks}
//             ref={(el) => {
//               nav = el;
//             }}
//           >
//             <ul>
//               {navLinks.map((link, i) => (
//                 <li key={i}>
//                   <Link to={link.to}>{link.name}</Link>
//                 </li>
//               ))}
//             </ul>
//             {width < 700 ? (
//               <div className={styles.mobileNavII}>
//                 <div className={styles.MoNavSocialII}>
//                   <ul>{socialLinks}</ul>
//                 </div>
//               </div>
//             ) : null}
//           </div>
//         </div>

//         <Switch>
//           {navLinks.map((link, i) => (
//             <Route
//               key={i}
//               exact
//               path={`/${link.to}`}
//               component={link.component}
//             />
//           ))}
//         </Switch>
//       </Router>
//     </div>
//   );
// };

// export default Navbar;




//-----


import React, { useState } from "react";
import Logo from '../asset/LOGO.png'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Routes,
} from "react-router-dom";
import "../App.css"; // Import the CSS file for styling

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className={`navbar ${isNavOpen ? "open" : ""}`}>
      <div className="navbar-toggle" onClick={toggleNav}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul
        className="navbar-items" style={{zIndex:1}}
      >
        <img src={Logo} alt="No Logo" style={{ position: "relative", left: "60px" ,bottom:'50px', width:'150px'}} />
        <li>
          <a href="/" style={{position: "relative",left:'1020px'}}>Home</a>
        </li>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <li>
          <a href="/movies" style={{position: "relative",left:'1020px'}}>Movies</a>
        </li>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <li>
          <a href="/contact" style={{position: "relative",left:'1020px'}}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
