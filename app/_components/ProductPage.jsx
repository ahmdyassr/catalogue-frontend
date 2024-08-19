'use client'

import styles from '@/scss/components/Product.module.scss'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Button from './Button'
import Input from './Input'
import Textarea from './Textarea'
import Dropzone from './Dropzone'
import Select from './Selectbar'
import BackIcon from './icons/Back'
import updateProduct from '@/actions/updateProduct'
import uploadImage from '@/actions/uploadImage'
import deleteProduct from '@/actions/deleteProduct'
import refreshProducts from '@/actions/refreshProducts'

const Page = ({ data }) => {
	const router = useRouter()
	const [isUploading, setIsUploading] = useState(false)
	const [isSaving, setIsSaving] = useState(false)
	const [isDeleting, setIsDeleting] = useState(false)
	const [product, setProduct] = useState({
		name: data?.name,
		description: data?.description,
		category: data?.category,
		status: data?.status,
		price: data?.price,
		images: data?.images
	})

	const updateProductState = (update) => {
		setProduct(prev => ({
			...prev,
			...update
		}))
	}

	const handleImageChange = async (e) => {

		// set state
		setIsUploading(true)

		// get image
		const image = e.target.files[0]

		// construct form
		const formData = new FormData()
		formData.append('image', image)

		// upload
		const url = await uploadImage(formData)

		// update product image
		updateProduct({
			images: [url]
		})

		// update state
		setIsUploading(false)
	}

	const handleUpdateProduct = async () => {

		// update state
		setIsSaving(true)

		// update product
		await updateProduct(data?._id, product)

		// refresh
		router.refresh()
	}

	const handleDeleteProduct = async () => {

		// update state
		setIsDeleting(true)

		// delete
		const deletedProduct = await deleteProduct(data?._id)

		// refresh
		refreshProducts()

		// redirect
		router.push('/products')
		router.refresh()
	}


	return (
		<>

			<header className={styles.header}>
				<div className={styles.header__left}>
					<Link href='/products' className={styles.header__backIcon}>
						<BackIcon fill='var(--dark-100)' />
					</Link>

					<div className={styles.header__text}>
						<span className={styles.header__label}>Products</span>
						<h3 className={styles.header__title}>{data?.name}</h3>
					</div>
				</div>

				<div className={styles.header__right}>
					<Button
						text='Delete'
						loadingText='Deleting...'
						isLoading={isDeleting}
						type='danger'
						onClick={handleDeleteProduct} />
					<Button
						text='Save'
						loadingText='Saving...'
						isLoading={isSaving}
						onClick={handleUpdateProduct} />
				</div>
			</header>

			<div style={{
				padding: '16px'
			}}>

				<div className={styles.form}>
					<div className={styles.form__row}>
						<Input
							label='Name'
							value={product?.name}
							onChange={e => updateProductState({ name: e.target.value })} />
					</div>
					<div className={styles.form__row}>
						<Textarea
							label='Description'
							value={product?.description}
							onChange={e => updateProductState({ description: e.target.value })} />
					</div>
					<div className={styles.form__row}>
						<Select
							label='Status'
							options={[{
								value: 'active',
								label: 'Active'
							}, {
								value: 'draft',
								label: 'Draft'
							}]}
							value={product?.status}
							onChange={value => updateProductState({ status: value })} />
					</div>
					<div className={styles.form__row}>
						<Input
							label='Category'
							value={product?.category}
							onChange={e => updateProductState({ category: e.target.value })} />
					</div>
					<div className={styles.form__row}>
						<Input
							label='Price'
							value={product?.price}
							onChange={e => updateProductState({ price: e.target.value })} />
					</div>
					<div className={styles.form__row}>
						<Dropzone
							label='Image'
							image={product?.images[0]}
							isLoading={isUploading}
							onChange={e => handleImageChange(e)} />
					</div>
				</div>

			</div>
		</>
	)
}

export default Page