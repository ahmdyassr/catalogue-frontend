'use server'

import { revalidateTag } from 'next/cache'

const refreshProducts = () => {
	revalidateTag('products')
}

export default refreshProducts