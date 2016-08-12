const ADDDEAL = 'ADDDEAL';

export function addDeal(data) {
    return { state : data, type : ADDDEAL };
}