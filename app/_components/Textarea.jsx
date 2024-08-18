import styles from '@/scss/components/Textarea.module.scss'

const Textarea = ({ label, value, onChange }) => {
	return (
		<div className={styles.textarea}>
			<label className={styles.textarea__label}>{label}</label>
			<textarea className={styles.textarea__box} value={value} onChange={onChange}></textarea>
		</div>
	)
}

export default Textarea