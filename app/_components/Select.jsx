import styles from '@/scss/components/Select.module.scss'

const Select = ({ label, options, value, onChange }) => {
	return (
		<div className={styles.select}>
			<span className={styles.select__label}>{label}</span>
			<span className={styles.select__box}>
				{options.map(({ label, value: optionValue }) => (
					<span
						className={`${styles.select__tab} ${optionValue === value && styles.isActive}`}
						onClick={() => onChange(optionValue)}>{label}</span>
				))}
			</span>
		</div>
	)
}

export default Select