import orderByProps from '../app';

test('testing orderByProps func', () => {
	const obj = {
		name: 'мечник',
		health: 10,
		level: 2,
		attack: 80,
		defence: 40,
	};
	const sortingPass = ['name', 'level'];
	const sortingFail = ['error'];
	expect(orderByProps(obj, sortingPass)).toEqual([
		{ key: 'name', value: 'мечник' },
		{ key: 'level', value: 2 },
		{ key: 'attack', value: 80 },
		{ key: 'defence', value: 40 },
		{ key: 'health', value: 10 },
	]);
	expect(() => {
		orderByProps(obj, sortingFail);
	}).toThrow('PARAM error');
});
