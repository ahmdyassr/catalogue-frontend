'use server'

const getProducts = async (query) => {

	// get all products
	const response = await fetch(`${process.env.CATALOGUE_API_URL}/products${query ? `?query=${query}` : ''}`, {
		cache: 'no-cache',
		next: { tags: ['products'] }
	})
	const data = await response.json()
	return data

}

export default getProducts