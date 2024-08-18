'use server'

const getProduct = async (id) => {

	// get all products
	const response = await fetch(`${process.env.CATALOGUE_API_URL}/products/${id}`, { cache: 'no-cache' })
	const data = await response.json()
	return data

}

export default getProduct