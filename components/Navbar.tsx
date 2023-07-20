import React from 'react'

interface NavItems {
    name: string
    href: string
    label: string
}

const navItems: NavItems[] = [
    {
        name: 'home',
        href: '/',
        label: 'Home',
    },
    {
        name: 'my-projects',
        href: '/my-projects',
        label: 'My Projects',
    },
    {
        name: 'about',
        href: '/about',
        label: 'About',
    },

]


const Navbar = () => {
  return (
    <header className=' mx-auto w-full px-4 shadow bg-white fixed top-0 z-50 dark:border-stone-500'>
        <div className=' justify-between md:items-center md:flex text-black'>
            <div className=' md:py-5 md:block'>
                <h2 className=' text-2xl font-bold'>Ramicevic</h2>
            </div>
            <div className=' md:flex space-x-4'>
                {navItems.map((item) => (
                    <a key={item.name} href={item.href}>
                        {item.label}
                    </a>
                ))    
                }
            </div>
        </div>
    </header>
  )
}

export default Navbar