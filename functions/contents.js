import { cards } from '../cards';
const contents = cards;

exports.handler = async function (event, context) {
	return {
		statusCode: 200,
		body: JSON.stringify(contents, null, 2)
	};
};
