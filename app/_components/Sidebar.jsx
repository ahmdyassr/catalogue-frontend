'use client'

import styles from '@/scss/components/Sidebar.module.scss'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Logo from './Logo'
import TagIcon from './icons/Tag'
import CartIcon from './icons/Cart'
import UsersIcon from './icons/Users'
import StatsIcon from './icons/Stats'
import IntegrationsIcon from './icons/Integration'

const Sidebar = () => {
	const pathname = usePathname()

	const ITEMS = [
		{ href: '/products', Icon: TagIcon, text: 'Products' },
		{ href: '/orders', Icon: CartIcon, text: 'Orders' },
		{ href: '/customers', Icon: UsersIcon, text: 'Customers' },
		{ href: '/analytics', Icon: StatsIcon, text: 'Analytics' },
		{ href: '/integrations', Icon: IntegrationsIcon, text: 'Integrations' }
	]

	return (
		<aside className={styles.sidebar}>

			<div className={styles.sidebar__logo}>
				<Link className={styles.sidebar__logoLink} href='/'><Logo /></Link>
			</div>

			<nav className={styles.sidebar__nav}>
				{ITEMS.map(({ href, Icon, text }) => (
					<Link
						key={text}
						className={`${styles.sidebar__navItem} ${pathname === href ? styles.isActive : ''}`}
						href={href}
					>
						<span className={styles.sidebar__navItemIcon}>
							<Icon fill={pathname === href ? 'var(--dark-500)' : 'var(--light-500)'} />
						</span>
						<span className={styles.sidebar__navItemText}>{text}</span>
					</Link>
				))}
			</nav>

			<div className={styles.sidebar__profile}>
				<div className={styles.sidebar__profileImage}>
					<Image
						src='/images/avatar.jpg'
						width={48}
						height={48}
						alt='Adam Sandler' />
				</div>
				<div className={styles.sidebar__profileContent}>
					<span className={styles.sidebar__profileStore}>Ugmonk</span>
					<span className={styles.sidebar__profileName}>Adam Sandler</span>
				</div>
			</div>
		</aside>
	)
}

export default Sidebar