import styles from '@/scss/components/Dropzone.module.scss'
import Image from 'next/image'

const Dropzone = ({ label, image, isLoading, onChange }) => {
	return (
		<div className={styles.dropzone}>
			<label className={styles.dropzone__label}>{label}</label>

			<div className={styles.dropzone__box}>
				{image && (
					<div className={styles.dropzone__image}>
						<Image src={image} fill={true} />
					</div>
				)}

				<input
					className={styles.dropzone__input}
					id='file'
					type='file'
					accept='image/png, image/jpeg, image/jpg'
					disabled={isLoading ? true : false}
					onChange={onChange} />

				{!image && (
					<span className={styles.dropzone__text}>
						{isLoading ? 'Uploading...' : 'Click to upload your image'}
					</span>
				)}

				{isLoading && <span className={styles.dropzone__loader}></span>}
			</div>
		</div>
	)
}

export default Dropzone