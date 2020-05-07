

export const required = (value) =>{
    if (value) return undefined;
    return 'Field is required'
}

export const maxLengthCreator = (MaxLength) => (value) =>{
    if ( value.length > MaxLength ) return `Max length ${MaxLength} symbols`;
    return undefined
}
