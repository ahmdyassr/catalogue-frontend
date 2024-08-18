'use server'

const getProducts = async () => {

	// get all products
	const response = await fetch(`${process.env.CATALOGUE_API_URL}/products`, {
		cache: 'no-cache',
		next: { tags: ['products'] }
	})
	const data = await response.json()
	return data

}

export default getProducts