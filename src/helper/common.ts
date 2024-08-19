interface Product {
  productId: number
  qty: number
}

export function convertDate(value: string | undefined) {
  if (value) {
    const date = new Date(value)
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Asia/Jakarta',
    }

    const formattedDateTime = date.toLocaleString('id-ID', options)
    const formattedTime = formattedDateTime.replace(' pukul', '')

    return formattedTime
  }
  return null
}

export function convertRupiah(value: number | undefined) {
  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  })

  if (value) return formatter.format(value)
  return null
}

export const accumulatedProducts = (products: Product[]) => {
  const accumulated: { [key: number]: number } = {}
  // Mengakumulasi qty berdasarkan productId
  for (const product of products) {
    const { productId, qty } = product
    if (accumulated[productId]) {
      accumulated[productId] += qty
    } else {
      accumulated[productId] = qty
    }
  }
  return Object.keys(accumulated).map((productId: string) => ({
    productId: parseInt(productId),
    qty: accumulated[+productId],
  }))
}
export const accumulatedItemCartPurchaseChange = (products: Product[]) => {
  const accumulated: { [key: number]: number } = {}
  // Mengakumulasi qty berdasarkan productId
  for (const product of products) {
    const { productId, qty } = product
    accumulated[productId] = qty
  }
  return Object.keys(accumulated).map((productId: string) => ({
    productId: parseInt(productId),
    qty: accumulated[+productId],
  }))
}

export function accumulateRemoveItemCartPurchase(
  products: Product[],
  removeId: number,
): Product[] {
  const accumulated: { [key: number]: number } = {}

  for (const product of products) {
    const { productId, qty } = product
    if (accumulated[productId]) {
      accumulated[productId] += qty
    } else {
      accumulated[productId] = qty
    }
  }

  const accumulatedProducts: Product[] = Object.keys(accumulated)
    .filter((productId) => parseInt(productId) !== removeId)
    .map((productId) => ({
      productId: parseInt(productId),
      qty: accumulated[+productId],
    }))

  return accumulatedProducts
}
