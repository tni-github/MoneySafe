export const reformatDate = (dateString) => {
    const [year, month, day] = dateString.split('-');
    return `${day.padStart(2, '0')}.${month.padStart(2, '0')}.${year}`;
}