import '@/scss/base/index.scss'
import styles from '@/scss/components/Dashboard.module.scss'
import localFont from 'next/font/local'
import META from '@/data/meta'
import Sidebar from './_components/Sidebar'

const satoshi = localFont({
	src: '../public/fonts/satoshi/Satoshi-Variable.woff2',
	fallback: ['SF Pro Display', '-apple-system', 'Helvetica Neue', 'sans-serif'],
	weight: '400 700',
	display: 'swap',
	variable: '--satoshi-font'
})

export const metadata = {
	metadataBase: META.url,
	title: META.title,
	description: META.description,
	openGraph: {
		title: META.title,
		description: META.description,
		url: META.url,
		siteName: META.siteName,
		locale: META.locale,
		type: META.type,
		images: [
			{
				url: META.ogImage,
				width: 1200,
				height: 630,
			}
		],
	}
}

export const viewport = {
	themeColor: '#00000',
	width: 'device-width',
	initialScale: 1
}

export default function RootLayout({ children }) {
	return (
		<html lang='en' className={`${satoshi.variable}`}>
			<body>
				<div className={styles.container}>
					<div className={styles.container__sidebar}>
						<Sidebar />
					</div>

					<div className={styles.container__content}>
						{children}
					</div>
				</div>
			</body>
		</html>
	);
}
