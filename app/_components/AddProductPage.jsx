'use client'

import styles from '@/scss/components/Product.module.scss'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Button from './Button'
import Input from './Input'
import PriceInput from './PriceInput'
import Textarea from './Textarea'
import Dropzone from './Dropzone'
import Selectbar from './Selectbar'
import Select from './Select'
import BackIcon from './icons/Back'
import addProduct from '@/actions/addProduct'
import uploadImage from '@/actions/uploadImage'


const Page = () => {
	const router = useRouter()
	const [isUploading, setIsUploading] = useState(false)
	const [isSaving, setIsSaving] = useState(false)
	const [product, setProduct] = useState({
		name: '',
		description: '',
		category: 'clothing',
		status: 'active',
		price: '',
		images: []
	})

	const updateProduct = (update) => {
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

	const handleAddProduct = async () => {

		// update state
		setIsSaving(true)

		// add product
		const newProduct = await addProduct(product)

		// all good?
		const { _id } = newProduct

		// redirect
		router.push(`/products/${_id}`)

	}

	const isFormFilled = () => {
		// Check if all required fields are filled
		return !Object.entries(product).some(([key, value]) => {

			// Check if 'images' is empty array
			if (key === 'images') return value.length === 0;

			// Check if the value is null, undefined, or an empty string
			return value === null || value === undefined || value === ''
		})
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
						<h3 className={styles.header__title}>Add Product</h3>
					</div>
				</div>

				<div className={styles.header__right}>
					<Button
						text='Cancel'
						type='secondary'
						onClick={() => router.push('/products')} />
					<Button
						text='Save'
						loadingText='Saving...'
						isLoading={isSaving}
						isDisabled={!isFormFilled()}
						onClick={handleAddProduct} />
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
							placeholder='Long sleeve dress'
							onChange={e => updateProduct({ name: e.target.value })} />
					</div>

					<div className={styles.form__row}>
						<Textarea
							label='Description'
							value={product?.description}
							onChange={e => updateProduct({ description: e.target.value })} />
					</div>

					<div className={styles.form__row}>
						<Selectbar
							label='Status'
							options={[{
								value: 'active',
								label: 'Active'
							}, {
								value: 'draft',
								label: 'Draft'
							}]}
							value={product?.status}
							onChange={value => updateProduct({ status: value })} />
					</div>

					<div className={styles.form__row}>
						<Select
							label='Category'
							options={[
								{
									label: 'Clothing',
									value: 'clothing'
								},
								{
									label: 'Electronics',
									value: 'electronics'
								},
								{
									label: 'Home & Garden',
									value: 'home-garden'
								},
								{
									label: 'Beauty & Personal Care',
									value: 'beauty-personal-care'
								},
								{
									label: 'Sports & Outdoors',
									value: 'sports-outdoors'
								}
							]}
							value={product?.category}
							onChange={value => updateProduct({ category: value })}
						/>
					</div>

					<div className={styles.form__row}>
						<PriceInput
							label='Price'
							placeholder='0'
							value={product?.price}
							onChange={e => updateProduct({ price: e.target.value })} />
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