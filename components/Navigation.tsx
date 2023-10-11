'use client';
import {Dropdown, Navbar, Avatar} from 'flowbite-react';


interface meep {
name: string;
}
const Navigation = ({name}: meep) => {
return (
  <main>
    <Navbar
      fluid
      className="bg-Avocado fixed top-0 w-full z-50 text-white py-4"
    >
      <Navbar.Brand href="/austin-utexas/">
        <img
          alt="iGEM Logo"
          className="mr-3 h-10 sm:h-9"
          src="https://static.igem.wiki/teams/4579/wiki/logo-removebg-preview.png"
        />
        <span className="self-center whitespace-nowrap text-2xl font-bold dark:text-white">
          {name}
        </span>
      </Navbar.Brand>
      
      <Navbar.Collapse>

      <Navbar.Link href="/austin-utexas/" className="text-white md:hover:text-slate-300 font-semibold">
          Home
        </Navbar.Link>

      <div className="flex">
        <Dropdown
          arrowIcon={true}
          inline
          label={<p className="md:hover:text-slate-300">Project</p>}
        >
          <Dropdown.Item href="/austin-utexas/description">
            Description
          </Dropdown.Item>
          <Dropdown.Item href="/austin-utexas/engineering">
            Engineering Success
          </Dropdown.Item>
          <Dropdown.Item href="/austin-utexas/contribution">
            Contribution
          </Dropdown.Item>
          <Dropdown.Item href="/austin-utexas/sustainable">
            Sustainable Development
          </Dropdown.Item>
          <Dropdown.Item href="/austin-utexas/safety">
            Safety
          </Dropdown.Item>
          <Dropdown.Item href="/austin-utexas/medals">
            Medal Requirements
          </Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>

      <div className="flex">
        <Dropdown
          arrowIcon={true}
          inline
          label={<p className="md:hover:text-slate-300">Lab</p>}
        >
          <Dropdown.Item href="/austin-utexas/experiments">
            Experiments
          </Dropdown.Item>
          <Dropdown.Item href="/austin-utexas/parts">
            Parts
          </Dropdown.Item>
          <Dropdown.Item href="/austin-utexas/results">
            Results
          </Dropdown.Item>
          <Dropdown.Item href="/austin-utexas/notebook">
            Notebook
          </Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>

        <Navbar.Link href="/austin-utexas/human-practices" className="text-white md:hover:text-slate-300">
          Human Practices
        </Navbar.Link>

        <div className="flex">
        <Dropdown
          arrowIcon={true}
          inline
          label={<p className="md:hover:text-slate-300">Team</p>}
        >
          <Dropdown.Item href="/austin-utexas/team">
            Team
          </Dropdown.Item>
          <Dropdown.Item href="/austin-utexas/attributions">
            Attributions
          </Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>

        </Navbar.Collapse>
    </Navbar>
    <div className="bg-transparent py-7"></div>
  </main>
)
}

export default Navigation;