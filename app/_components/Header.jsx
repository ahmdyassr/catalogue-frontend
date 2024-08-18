import styles from '@/scss/components/Header.module.scss'
import Link from 'next/link'
import Button from './Button'

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.header__left}>
				<h3 className={styles.header__title}>Products</h3>
			</div>

			<div className={styles.header__right}>
				<Link href='/products/add'>
					<Button text='Add Product' />
				</Link>
			</div>
		</header>
	)
}

export default Header