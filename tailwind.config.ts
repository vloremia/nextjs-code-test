/* eslint-disable @typescript-eslint/naming-convention */

import type {Config} from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';
import {withTV} from 'tailwind-variants/transformer';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		container: {
			center: true,
			padding: '1rem',
		},
		extend: {},
	},
	plugins: [
		tailwindcssAnimate,
	],
};

export default withTV(config);
