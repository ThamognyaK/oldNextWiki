import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./NavItem";

const MENU_LIST = [
  {
    text: "Team",
    externalRoot: "displayNone",
    homeBtn: "displayNone",
    dd: "dropdown-content",
    mainButton: "dropdownbtn",
    rootButton: "displayNone",
    rootHref: "",
    ddItem1: "",
    ddItem2: "",
    ddItem3: "displayNone",
    ddItem4: "displayNone",
    ddItem5: "displayNone",
    ddItem6: "displayNone",
    ddItem7: "displayNone",
    ddItem8: "displayNone",
    ddHref1: "/members",
    ddHref2: "/attributions",
    ddHref3: "",
    ddHref4: "",
    ddHref5: "",
    ddHref6: "",
    ddHref7: "",
    ddHref8: "",
    text1: "Members",
    text2: "Attributions",
    text3: "3",
    text4: "4",
    text5: "5",
    text6: "6",
    text7: "7",
    text8: "8",
  },

  {
    text: "Project",
    externalRoot: "displayNone",
    homeBtn: "displayNone",
    dd: "dropdown-content",
    mainButton: "dropdownbtn",
    rootButton: "displayNone",
    rootHref: "",
    ddItem1: "",
    ddItem2: "",
    ddItem3: "",
    ddItem4: "",
    ddItem5: "",
    ddItem6: "",
    ddItem7: "",
    ddItem8: "",
    ddHref1: "/description",
    ddHref2: "/design",
    ddHref3: "engineering",
    ddHref4: "/notebook",
    ddHref5: "/results",
    ddHref6: "/contribution",
    ddHref7: "/implementation",
    ddHref8: "/safety",
    text1: "Description",
    text2: "Design",
    text3: "Engineering",
    text4: "Notebook",
    text5: "Results",
    text6: "Contribution",
    text7: "Proposed Implementation",
    text8: "Safety",
  },

  {
    text: "Human Practices",
    externalRoot: "displayNone",
    homeBtn: "displayNone",
    dd: "dropdown-content",
    mainButton: "dropdownbtn",
    rootButton: "displayNone",
    rootHref: "",
    ddItem1: "",
    ddItem2: "",
    ddItem3: "displayNone",
    ddItem4: "displayNone",
    ddItem5: "displayNone",
    ddItem6: "displayNone",
    ddItem7: "displayNone",
    ddItem8: "displayNone",
    ddHref1: "/human-practices",
    ddHref2: "inclusivity",
    ddHref3: "",
    ddHref4: "",
    ddHref5: "",
    ddHref6: "",
    ddHref7: "",
    ddHref8: "",
    text1: "Integrated Human Practices",
    text2: "Inclusivity",
    text3: "",
    text4: "4",
    text5: "5",
    text6: "6",
    text7: "7",
    text8: "8",
  },

  {
    text: "Judging Form",
    externalRoot: "",
    homeBtn: "displayNone",
    dd: "displayNone",
    mainButton: "displayNone",
    rootButton: "displayNone",
    rootHref: "https://www.rism.ac.th/",
    ddItem1: "displayNone",
    ddItem2: "displayNone",
    ddItem3: "displayNone",
    ddItem4: "displayNone",
    ddItem5: "displayNone",
    ddItem6: "displayNone",
    ddItem7: "displayNone",
    ddItem8: "displayNone",
    ddHref1: "",
    ddHref2: "",
    ddHref3: "",
    ddHref4: "",
    ddHref5: "",
    ddHref6: "",
    ddHref7: "",
    ddHref8: "",
    text1: "",
    text2: "Inclusivity",
    text3: "",
    text4: "4",
    text5: "5",
    text6: "6",
    text7: "7",
    text8: "8",
  },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
        <Link href={"/"}>
          <img
            class="logo"
            src="https://static.igem.wiki/teams/4629/wiki/teamlogo.png"
            alt="TRIS logo"
            style={{ height: "40px" }}
          />
        </Link>

        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
