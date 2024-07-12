import { cards } from '../cards';
const contents = cards;

exports.handler = async function (event, context) {
	return {
		statusCode: 200,
		headers: {
			'Access-Control-Allow-Origin': '*', // Allow all origins
			'Access-Control-Allow-Headers': 'Content-Type' // Allow specific headers
		},
		body: JSON.stringify(contents, null, 2)
	};
};
