import Link from "next/link";
import React, { FC } from "react";

interface MenuItemProps {
	title: string
	path: string
}

const MenuItem: FC<MenuItemProps> = ({title, path}) => (
	<li>
		<Link
		 	href={path}
			passHref
			aria-current="page"
		>
			<a className="block py-2 pr-4 pl-3 text-white hover:text-blue-200 rounded md:bg-transparent md:p-0">
				{title}
			</a>
		</Link>
</li>
)

const MenuItems: MenuItemProps[] = [
	{
		title: 'Lučko',
		path: '/lucko',	
	},
	{
		title: 'Space Ape',
		path: '/space-ape',	
	},
	{
		title: 'Trippyverse',
		path: '/trippyverse',	
	},
]

const Navbar: FC = () => 
	<nav className="w-full border-gray-200 px-2 sm:px-4 py-2.5 bg-gray-800">
    <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/" passHref>
					<a className="flex">
        		<span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">FractalBaby</span>
					</a>
        </Link>
        <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
					<span className="sr-only">Open main menu</span>
					<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
					<svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
					<ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
						{MenuItems.map(({title, path}) => (
							<MenuItem title={title} path={path} key={title} />
						))}
					</ul>
        </div>
    </div>
	</nav>


export default Navbar