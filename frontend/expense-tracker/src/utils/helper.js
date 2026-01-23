import moment from 'moment';
export function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
export function getInitials(fullName) {
    if (!fullName) return '';
    const words = fullName.split(" ");
    let initials = "";
    for (let i = 0; i < Math.min(2, words.length); i++) {
        initials += words[i][0];
    }
    return initials.toUpperCase();
}
export function addThousandSeparators(number) {
    if (number === null || isNaN(number)) return "";
    const [integerPart, fractionalPart] = number.toString().split(".");
    const  formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return fractionalPart ? `${formattedInteger}.${fractionalPart}` : formattedInteger;
}
export function prepareExpenseBarCharData(data = []) {
    const charData = data.map(item => ({
        category : item?.category,
        amount : item?.amount
    }));
    return charData;
}
export function prepareChartData(data = []) {
    // Group by date (day granularity)
    const grouped = {};
    data.forEach(item => {
        // Defensive: skip if date or amount is missing/invalid
        if (!item?.date || isNaN(new Date(item.date)) || typeof item.amount !== 'number') return;
        const key = moment(item.date).format('YYYY-MM-DD');
        if (!grouped[key]) {
            grouped[key] = {
                month: moment(item.date).format('Do MMM'),
                amount: 0,
                category: [],
                source: [],
                date: new Date(item.date)
            };
        }
        grouped[key].amount += item.amount;
        if (item.category) grouped[key].category.push(item.category);
        if (item.source) grouped[key].source.push(item.source);
    });
    // Convert to array, sort by date ascending, and join sources/categories for tooltip
    return Object.values(grouped)
        .sort((a, b) => a.date - b.date)
        .map(item => ({
            month: item.month,
            amount: item.amount,
            category: item.category.length > 0 ? item.category.join(', ') : undefined,
            source: item.source.length > 0 ? item.source.join(', ') : undefined,
        }));
}