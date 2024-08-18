import styles from '@/scss/components/PriceInput.module.scss'

const PriceInput = ({ label, placeholder, value, onChange }) => {
	return (
		<div className={styles.input}>
			<label className={styles.input__label}>{label}</label>

			<div className={styles.input__wrapper}>
				<input
					type='text'
					className={styles.input__box}
					placeholder={placeholder}
					value={value}
					onChange={onChange} />
			</div>

		</div>
	)
}

export default PriceInput