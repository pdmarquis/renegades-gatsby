import { Link } from "gatsby"
import React from "react"
import { Component } from 'react';
import HeaderImage from "../components/header-image"
import SwooshImage from "../components/swoosh-image"
import DefaultFeaturedImage from "../components/default-featured-image"

class Header extends Component {
  constructor(props){
    super(props)
    this.toggleMenu = this.toggleMenu.bind(this)
    this.state = { showMenu: false }
  }
  
  

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }
 
  render() {
    const menuActive = this.state.showMenu ? 'is-active' : ''
    const burgerActive = this.state.showMenu ? 'is-active' : ''
     //const propTypes = { siteTitle: PropTypes.string, }
    //const defaultProps = { siteTitle: ``, }
      return (   
         <header style={{ background: `#000080` }} >
            <div style={{ position: `relative`, zIndex: `300` , width: `100%`, overflow: `hidden`, background: `#000080` }} >
              <div style={{ position: `relative`, overflow: `hidden`, width: `100%`,  background: `#000080`, padding: `.5rem`, }} >
                <div style={{ float: `left`, width: `4rem`, overflow: `hidden`, margin: `0 0 0 0` }} >
                  <Link to="/"><DefaultFeaturedImage /></Link>
                </div>
                <div className="team-name" style={{ float: `left`,  padding: `0 .5rem .5rem 2rem`, overflow: `hidden` }} >
                 <h1 style={{ display: `inline`, margin: `0`, verticalAlign: `top` }} ><Link to="/" style={{ color: `white`, textDecoration: `none` }} >{this.props.siteTitle}</Link></h1>
                </div>
                <button id="menu-btn" style={{ float: `right`, border: `1px solid white`, borderRadius: `5px`, backgroundColor: `#000080`, color: `white`, padding: `.5rem` }} onClick={this.toggleMenu} >Menu</button>
              </div>
              <nav id="nav-main">
                <ul id="nav-main-ul" className={ `${menuActive}` } style={{ background: `#000080`, width: `100%` }}>
                  {this.props.menuLinks.map(link => (
                    <li key={link.name} style={{ listStyleType: `none`, }} onClick={this.toggleMenu} >
                      <Link style={{ textDecoration: `none`, color: `white` }} to={link.link}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </nav>  
            </div>
            <div style={{ position: `relative`, overflow: `hidden` }} >
              <div  style={{margin: `0 0 0 0`, zIndex: `10`, width: `100%`, height: `100%`}} >
                <HeaderImage />
              </div>
              <div  style={{position: `absolute`, bottom: `0`, left: `0`, zIndex: `50`, width: `100%` }} >
                <SwooshImage />
              </div>
            </div>
          </header>
      )
  }
};

// const Header = ({ siteTitle, menuLinks}) => (
//   <header style={{ background: `#000080` }} >
//     <div style={{ position: `relative`, zIndex: `300` , width: `100%`, overflow: `hidden`, background: `#000080` }} >
//       <div style={{ position: `relative`, overflow: `hidden`, width: `100%`,  background: `#000080`, padding: `.5rem`, }} >
//         <div style={{ float: `left`, width: `4rem`, overflow: `hidden`, margin: `0 0 0 0` }} >
//           <DefaultFeaturedImage />
//         </div>
//         <div className="team-name" style={{ float: `left`,  padding: `0 .5rem .5rem 2rem`, overflow: `hidden` }} >
//          <h1 style={{ display: `inline`, margin: `0`, verticalAlign: `top` }} ><Link to="/" style={{ color: `white`, textDecoration: `none` }} >{siteTitle}</Link></h1>
//         </div>
//         <MenuBtn />
//       </div>
//       <nav id="nav-main">
//         <ul id="nav-main-ul" style={{ background: `#000080`, width: `100%` }}>
//           {menuLinks.map(link => (
//             <li key={link.name} style={{ listStyleType: `none`, }} >
//               <Link style={{ textDecoration: `none`, color: `white` }} to={link.link}>{link.name}</Link>
//             </li>
//           ))}
//         </ul>
//       </nav>  
//     </div>
//     <div style={{ position: `relative`, overflow: `hidden` }} >
//       <div  style={{margin: `0 0 0 0`, zIndex: `10`, width: `100%`, height: `100%`}} >
//         <HeaderImage />
//       </div>
//       <div  style={{position: `absolute`, bottom: `0`, left: `0`, zIndex: `50`, width: `100%` }} >
//         <SwooshImage />
//       </div>
//     </div>
//   </header>
// )

//   Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }



export default Header
