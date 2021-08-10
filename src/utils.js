const empty = (val) => {
    return (val == 0) || (val === 0) || (val.length === 0) || (typeof val === undefined) || (val == null);
}

export default empty;
