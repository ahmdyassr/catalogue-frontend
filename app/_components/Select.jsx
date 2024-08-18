import styles from '@/scss/components/Select.module.scss'

const Select = ({ label, options, value, onChange }) => {

	// selected option
	const selectedOption = options.find(option => option.value === value) || options[0]

	return (
		<div className={styles.select}>
			<label className={styles.select__label}>{label}</label>

			<div className={styles.select__box}>
				<span className={styles.select__value}>{selectedOption.label}</span>

				<span className={styles.select__icon}>
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="var(--light-500)" viewBox="0 0 256 256"><path d="M184.49,167.51a12,12,0,0,1,0,17l-48,48a12,12,0,0,1-17,0l-48-48a12,12,0,0,1,17-17L128,207l39.51-39.52A12,12,0,0,1,184.49,167.51Zm-96-79L128,49l39.51,39.52a12,12,0,0,0,17-17l-48-48a12,12,0,0,0-17,0l-48,48a12,12,0,0,0,17,17Z"></path></svg>
				</span>

				<select
					className={styles.select__input}
					value={value}
					onChange={(e) => onChange(e.target.value)}
				>
					{options.map(({ label, value: optionValue }) => (
						<option
							key={optionValue}
							value={optionValue}
							className={styles.select__option}
						>
							{label}
						</option>
					))}
				</select>
			</div>
		</div>
	)
}

export default Select