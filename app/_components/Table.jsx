import styles from '@/scss/components/Table.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const Table = ({ data }) => {
	return (
		<div className={styles.table}>

			<div className={styles.table__search}>
				<input className={styles.table__searchInput} type='text' placeholder='Search all products...' />
			</div>

			<div className={styles.table__header}>
				<span className={styles.table__headerItem}>Image</span>
				<span className={styles.table__headerItem}>Name</span>
				<span className={styles.table__headerItem}>Status</span>
				<span className={styles.table__headerItem}>Category</span>
				<span className={styles.table__headerItem}>Price</span>
			</div>

			<div className={styles.table__body}>

				{data.map(({ _id, name, status, category, price, images }) => (
					<div key={_id} className={styles.table__row}>
						<Link className={styles.product} href={`/products/${_id}`}>
							<span className={styles.product__image}>
								<Image src={images[0]} fill={true} />
							</span>
							<span className={styles.product__name}>{name}</span>
							<span className={styles.product__status}>{status}</span>
							<span className={styles.product__category}>{category}</span>
							<span className={styles.product__price}>
								<span className={styles.product__priceCurrency}>$</span>
								<span className={styles.product__priceNumber}>{price}</span>
							</span>
						</Link>
					</div>
				))}
			</div>

			<div className={styles.table__footer}>
				<div className={styles.table__footerCounter}>
					Showing 8 out of 24 products
				</div>
				<div className={styles.table__footerNav}>
					<button className={styles.table__footerNavButton}>Prev</button>
					<button className={styles.table__footerNavButton}>Next</button>
				</div>
			</div>

		</div>
	)
}

export default Table