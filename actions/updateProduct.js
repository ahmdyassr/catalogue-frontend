'use server'

const updateProduct = async (id, product) => {

	// add a product
	const response = await fetch(`${process.env.CATALOGUE_API_URL}/products/${id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(product),
	})

	const data = await response.json()
	return data

}

export default updateProduct