'use client'

import styles from '@/scss/components/Table.module.scss'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import getProducts from '@/actions/getProducts'

const Table = ({ data }) => {
	const [products, setProducts] = useState(data)
	const [searchQuery, setSearchQuery] = useState(null)
	const [isLoading, setIsLoading] = useState(false)

	const fetchProducts = async () => {
		const fetchedProducts = await getProducts(searchQuery)
		setProducts(fetchedProducts)
	}

	// use effect to fetch filtered products everytime the input changes
	useEffect(() => {
		if (searchQuery !== null) {
			setIsLoading(true)
			const delayDebounceFn = setTimeout(async () => {
				await fetchProducts()
				setIsLoading(false)
			}, 2000)

			return () => clearTimeout(delayDebounceFn)
		}
	}, [searchQuery])

	return (
		<div className={styles.table}>

			<div className={styles.table__search}>
				<input
					className={styles.table__searchInput}
					type='text'
					placeholder='Search all products...'
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)} />
			</div>

			<div className={styles.table__header}>
				<span className={styles.table__headerItem}>Image</span>
				<span className={styles.table__headerItem}>Name</span>
				<span className={styles.table__headerItem}>Status</span>
				<span className={styles.table__headerItem}>Category</span>
				<span className={styles.table__headerItem}>Price</span>
			</div>

			<div className={styles.table__body}>

				{products.map(({ _id, name, status, category, price, images }) => (
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

				{products.length === 0 && (<p className={styles.table__hint}>No products found!</p>)}

				{isLoading && (<span className={styles.table__loader}></span>)}
			</div>

			<div className={styles.table__footer}>
				<div className={styles.table__footerCounter}>
					Showing {data.length} products
				</div>
			</div>

		</div>
	)
}

export default Table