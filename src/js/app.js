export default function orderByProps(item, paramOrder) {
	let result = [];
	const azOrder = [];
	for (const param of paramOrder) {
		if (param in item) {
			result.push({ key: param, value: item[param] });
		} else {
			throw new Error('PARAM error');
		}
	}
	for (const param in item) {
		if (!paramOrder.includes(param)) {
			azOrder.push({ key: param, value: item[param] });
		}
	}
	azOrder.sort((a, b) => (a.key > b.key ? 1 : -1));
	result = result.concat(azOrder);
	return result;
}
