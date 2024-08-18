'use client'

import styles from '@/scss/components/Button.module.scss'

const Button = ({ text, type, onClick }) => {
	return (
		<button
			className={`
				${styles.button} 
				${type === 'secondary' && styles.secondary}
				${type === 'danger' && styles.danger}`}
			onClick={onClick}>
			{text}
		</button>
	)
}

export default Button