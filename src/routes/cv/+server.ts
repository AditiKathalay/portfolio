// import type { RequestHandler } from "@sveltejs/kit";

// export const GET: RequestHandler = async() => {
//     return new Response(null, {
//         status: 302,
//         headers: {
//             Location: '/Aditi_Kathalay_Resumè.pdf'
//         }
//     });
// };

import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = () => {
	return new Response(null, {
		status: 302,
		headers: {
			Location: '/Aditi Kathalay Resume.pdf'
		}
	});
};