export interface MenuItemProps {
	title: string
	path?: string
	items?: MenuItemProps[]
}

export const MenuItems: MenuItemProps[] = [
	{
		title: 'Music',
		path: '/music',
	},
	{
		title: 'Artists',
		path: '/artists',
		items: [
			{
				title: 'Lučko',
				path: '/artists/lucko',	
			},
			{
				title: 'Space Ape',
				path: '/artists/space-ape',	
			},
			{
				title: 'Trippyverse',
				path: '/artists/trippyverse',	
			},
		]
	},
	{
		title: 'Artwork',
		path: '/artwork',
	},
	{
		title: 'Stuff',
		items: [
			{
				title: 'Presets',
				path: '/stuff/presets'
			},
			{
				title: 'Samples',
				path: '/stuff/samples'
			}
		]
	},
	{
		title: 'Contact',
		path: '/contact',
	},
]
