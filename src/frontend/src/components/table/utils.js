// ----------------------------------------------------------------------

export function rowInPage(data, page, rowsPerPage) {
  return data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}

// ----------------------------------------------------------------------

export function emptyRows(page, rowsPerPage, arrayLength) {
  return page ? Math.max(0, (1 + page) * rowsPerPage - arrayLength) : 0;
}

// ----------------------------------------------------------------------

const extractNumber = (str) => {
  return typeof str === 'string' && !isNaN(str) ? parseFloat(str) : NaN;
};

function descendingComparator(a, b, orderBy) {
  const valueA = a[orderBy];
  const valueB = b[orderBy];

  if (orderBy === 'createdAt') {
    const dateA = new Date(valueA);
    const dateB = new Date(valueB);
    return dateB - dateA;
  }

  if (valueA === null) return 1;
  if (valueB === null) return -1;

  const numberA = extractNumber(valueA);
  const numberB = extractNumber(valueB);

  if (!isNaN(numberA) && !isNaN(numberB)) {
    return numberB - numberA;
  }

  return String(valueA).localeCompare(String(valueB), undefined, {numeric: true});
}


// ----------------------------------------------------------------------

export function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => -descendingComparator(a, b, orderBy)
    : (a, b) => descendingComparator(a, b, orderBy);
}
