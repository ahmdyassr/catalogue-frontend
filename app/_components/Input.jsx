import styles from '@/scss/components/Input.module.scss'

const Input = ({ label, placeholder, value, onChange }) => {
	return (
		<div className={styles.input}>
			<label className={styles.input__label}>{label}</label>
			<input
				type='text'
				className={styles.input__box}
				placeholder={placeholder}
				value={value}
				onChange={onChange} />
		</div>
	)
}

export default Input