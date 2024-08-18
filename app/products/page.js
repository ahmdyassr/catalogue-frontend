import getProducts from '@/actions/getProducts'
import Header from '../_components/Header'
import Table from '../_components/Table'

const Page = async () => {

	const products = await getProducts()

	return (
		<>
			<Header />
			<div style={{
				padding: '16px'
			}}>
				<Table data={products} />
			</div>
		</>
	)
}

export default Page