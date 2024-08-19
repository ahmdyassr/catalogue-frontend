'use client'

import styles from '@/scss/components/Button.module.scss'

const Button = ({ text, loadingText, type, isLoading, isDisabled, onClick }) => {
	return (
		<button
			className={`
				${styles.button} 
				${type === 'secondary' && styles.secondary}
				${type === 'danger' && styles.danger}`}
			disabled={isDisabled || isLoading}
			onClick={onClick}>
			{isLoading ? loadingText : text}
		</button>
	)
}

export default Button