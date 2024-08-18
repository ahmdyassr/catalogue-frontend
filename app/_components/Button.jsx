'use client'

import styles from '@/scss/components/Button.module.scss'

const Button = ({ text, type, isDisabled, onClick }) => {
	return (
		<button
			className={`
				${styles.button} 
				${type === 'secondary' && styles.secondary}
				${type === 'danger' && styles.danger}`}
			disabled={isDisabled}
			onClick={onClick}>
			{text}
		</button>
	)
}

export default Button