import ProductPage from '../../_components/ProductPage'
import getProduct from '@/actions/getProduct'

const Page = async ({ params }) => {

	const product = await getProduct(params?.id)

	return (
		<ProductPage data={product} />
	)
}

export default Page