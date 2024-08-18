import styles from '@/scss/components/Sidebar.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import Logo from './Logo'
import TagIcon from './icons/Tag'
import CartIcon from './icons/Cart'
import UsersIcon from './icons/Users'
import StatsIcon from './icons/Stats'
import IntegrationsIcon from './icons/Integration'

const Sidebar = () => {
	return (
		<aside className={styles.sidebar}>

			<div className={styles.sidebar__logo}>
				<Link className={styles.sidebar__logoLink} href='/'><Logo /></Link>
			</div>

			<nav className={styles.sidebar__nav}>

				<Link className={`${styles.sidebar__navItem} ${styles.isActive}`} href='/'>
					<span className={styles.sidebar__navItemIcon}>
						<TagIcon fill='var(--dark-500)' />
					</span>
					<span className={styles.sidebar__navItemText}>Products</span>
				</Link>

				<Link className={styles.sidebar__navItem} href='/'>
					<span className={styles.sidebar__navItemIcon}>
						<CartIcon fill='var(--light-500)' />
					</span>
					<span className={styles.sidebar__navItemText}>Orders</span>
				</Link>

				<Link className={styles.sidebar__navItem} href='/'>
					<span className={styles.sidebar__navItemIcon}>
						<UsersIcon fill='var(--light-500)' />
					</span>
					<span className={styles.sidebar__navItemText}>Customers</span>
				</Link>

				<Link className={styles.sidebar__navItem} href='/'>
					<span className={styles.sidebar__navItemIcon}>
						<StatsIcon fill='var(--light-500)' />
					</span>
					<span className={styles.sidebar__navItemText}>Analytics</span>
				</Link>

				<Link className={styles.sidebar__navItem} href='/'>
					<span className={styles.sidebar__navItemIcon}>
						<IntegrationsIcon fill='var(--light-500)' />
					</span>
					<span className={styles.sidebar__navItemText}>Integrations</span>
				</Link>

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