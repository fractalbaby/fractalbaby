import Link from 'next/link'
import React, { FC, useState } from 'react'
import styled from '@xstyled/emotion'

import * as S from './navbar.styled'
import * as Config from './navbar.config'

const DropDownMenu: FC<Config.MenuItemProps> = ({title, path, items}) => {

	return (
		<S.DropDown>
			<MenuItem {...{title, path}} />
			<S.SubMenu>
				{items?.map(({title, path}) => (
					<MenuItem {...{title, path}} key={title} />
				))}
			</S.SubMenu>
		</S.DropDown>
	)
}

const MenuItem: FC<Config.MenuItemProps> = ({title, path}) => (
	<S.MenuItem >
		{ path !== undefined ?
			<Link
				href={path}
				passHref
				aria-current="page"
			>
				<a className="text-white hover:text-red-500 py-3">
					{title}
				</a>
	 		</Link> :
			<div className="text-white hover:text-red-500 py-3">
				{title}
		 	</div>	
		}
	</S.MenuItem>
)



const Navbar: FC = () => {
	const [mobileExpanded, setMobileExpanded] = useState(false)

	const toggleMobile = () => setMobileExpanded((prev) => !prev)

	return (
		<S.Navbar className="w-full border-gray-200 px-2 sm:px-4 bg-gray-900">
			<div className="container flex justify-between items-center mx-auto">
					<Link href="/" passHref>
						<a className="flex">
							<span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">FractalBaby</span>
						</a>
					</Link>
					<button onClick={toggleMobile} type="button" className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
						<span className="sr-only">Open main menu</span>
						<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
						<svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
					</button>
					<div className={`${mobileExpanded ? '' : 'hidden'} w-full md:block md:w-auto`} id="mobile-menu">
						<ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
							{Config.MenuItems.map(({title, path, items}) => (
								items !== undefined ?
									<DropDownMenu  title={title} path={path} items={items} key={title} /> :
									<MenuItem title={title} path={path} key={title} />
							))}
						</ul>
					</div>
			</div>
		</S.Navbar>
	)
}
	


export default Navbar