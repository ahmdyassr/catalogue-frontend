'use server'

const addProduct = async (product) => {

	// add a product
	const response = await fetch(`${process.env.CATALOGUE_API_URL}/products`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(product),
	})

	const data = await response.json()
	return data

}

export default addProduct