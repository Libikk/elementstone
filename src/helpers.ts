
export const sortAlphabetically = (a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (nameA < nameB) return -1; //sort string ascending
    if (nameA > nameB) return 1; //default return value (no sorting)
    return 0;
}
