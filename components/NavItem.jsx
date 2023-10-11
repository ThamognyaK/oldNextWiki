import Link from "next/link";

const NavItem = (
  {text, externalRoot,homeBtn, dd, mainButton, rootButton,rootHref, 
  ddItem1, ddItem2, ddItem3, ddItem4, ddItem5, ddItem6, ddItem7, ddItem8,
  ddHref1, ddHref2, ddHref3, ddHref4, ddHref5, ddHref6, ddHref7, ddHref8,
  text1, text2, text3, text4, text5, text6, text7, text8 
}) => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    
    <div>
      <div class="dropdown">
        
        <div class={mainButton}>
          <button class="nav__link dropbtn">{text}</button>
        </div>

        <div class={rootButton}>
          <Link href={rootHref}>
            <a class = "nav__link">{text}</a>
          </Link>
        </div>

        <div class={externalRoot}>
          <button class="nav__link dropbtn">
            <a class="nav__link dropbtn" href={rootHref}>{text}</a>
          </button>
        </div>
          {/* ------------------------dropdown items---------------------- */}
        <div class={dd}>

          <div class={ddItem1}>
            <Link href={ddHref1}>
              <a class="ddItem">{text1}</a>
            </Link>
          </div>
          
          <div class={ddItem2}>
            <Link href={ddHref2}>
              <a class="ddItem">{text2}</a>
            </Link>
          </div>

          <div class={ddItem3}>
            <Link href={ddHref3}>
              <a class="ddItem">{text3}</a>
            </Link>
          </div>

          <div class={ddItem4}>
            <Link href={ddHref4}>
              <a class="ddItem">{text4}</a>
            </Link>
          </div>

          <div class={ddItem5}>
            <Link href={ddHref5}>
              <a class="ddItem">{text5}</a>
            </Link>
          </div>

          <div class={ddItem6}>
            <Link href={ddHref6}>
              <a class="ddItem">{text6}</a>
            </Link>
          </div>

          <div class={ddItem7}>
            <Link href={ddHref7}>
              <a class="ddItem">{text7}</a>
            </Link>
          </div>

          <div class={ddItem8}>
            <Link href={ddHref8}>
              <a class="ddItem">{text8}</a>
            </Link>
          </div>

        </div>
      </div>
    </div>
  
  
  
  );
};

export default NavItem;
