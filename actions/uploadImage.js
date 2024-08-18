'use client'


//
// uploadImage
// 
// @description uploadImage
// @param upload an image to noise api
// @returns image url
//

const uploadImage = async (formData) => {

	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_CATALOGUE_API_URL}/upload`, {
			method: 'POST',
			body: formData,
			cache: 'no-store'
		})

		const { url } = await res.json()

		return url
	} catch (e) {
		return console.log(e)
	}
}

export default uploadImage