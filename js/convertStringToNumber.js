export const convertStringToNumber = (text) => {
    const noSpaceInText = text.replace(/\s+/g, '');
    const num = parseFloat(noSpaceInText);
    
    if (!isNaN(num) && isFinite(num)) {
        return num;
    } else {
        return false;
    }
}