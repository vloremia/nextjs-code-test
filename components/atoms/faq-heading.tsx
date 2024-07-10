import getFAQData from '@app/data/faq-data';

const FAQHeading: React.FC = () => {
	const heading = getFAQData().heading;

	return (
		<div>
			<h3 className="text-center font-medium text-xl">{heading}</h3>
		</div>
	);
};

export default FAQHeading;