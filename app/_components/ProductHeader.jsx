import styles from '@/scss/components/Header.module.scss'
import Link from 'next/link'
import Button from './Button'
import BackIcon from './icons/Back'

const ProductHeader = ({ label, title }) => {
	return (
		<header className={styles.header}>
			<div className={styles.header__left}>
				<Link href='/products' className={styles.header__backIcon}>
					<BackIcon fill='var(--dark-100)' />
				</Link>

				<div className={styles.header__text}>
					<span className={styles.header__label}>{label}</span>
					<h3 className={styles.header__title}>{title}</h3>
				</div>
			</div>

			<div className={styles.header__right}>
				<Button text='Delete' />
				<Button text='Save' />
			</div>
		</header>
	)
}

export default ProductHeader