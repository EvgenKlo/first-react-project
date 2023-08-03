export const getPageCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit)
}

export const getPagesArray = (totalPages) => {
  return Array(totalPages).fill().map((item, i) => i + 1);
}