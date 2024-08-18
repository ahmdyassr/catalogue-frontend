'use server'

const deleteProduct = async (id) => {

	// delete the product
	const response = await fetch(`${process.env.CATALOGUE_API_URL}/products/${id}`, {
		method: 'DELETE',
		cache: 'no-cache'
	})
	const data = await response.json()
	return data

}

export default deleteProduct