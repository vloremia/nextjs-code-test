'use client';

import getFAQData from '@app/data/faq-data';
import {FAQButton, FAQHeading} from '../atoms';
import {useState} from 'react';
import {FAQAccordion} from '../molecules';

const FAQContainer: React.FC = () => {
	const faqData = getFAQData();

	const [activeFAQ, setActiveFAQ] = useState(faqData.panels[0].label);
	const [activeFAQBlocks, setActiveFAQBlocks] = useState(
		faqData.panels[0].blocks,
	);

	const onHandleActiveFAQ = (label: string): void => {
		setActiveFAQ(label);
		const activeFAQ = faqData.panels.find((faq) => faq.label === label);

		if (activeFAQ) {
			setActiveFAQBlocks(activeFAQ.blocks);

			const buttons = document.querySelectorAll(
				'button[data-headlessui-state="open"]',
			);

			// eslint-disable-next-line unicorn/no-array-for-each
			buttons.forEach((button) => {
				//@ts-expect-error: Unreachable code error
				// eslint-disable-next-line @typescript-eslint/no-unsafe-call
				button.click();
			});
		}
	};

	const faqBlocksGrid1 = activeFAQBlocks.slice(0, activeFAQBlocks.length / 2);
	const faqBlocksGrid2 = activeFAQBlocks.slice(activeFAQBlocks.length / 2);

	return (
		<div>
			<FAQHeading/>
			<div className="flex flex-wrap justify-center items-center mt-5 gap-4">
				{faqData.panels.map((faq) => (
					<div key={faq.label}>
						<FAQButton
							label={faq.label}
							isActive={activeFAQ == faq.label}
							onClick={onHandleActiveFAQ}
						/>
					</div>
				))}
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 mt-5 md:gap-4">
				<div className="flex flex-col md:items-center">
					{faqBlocksGrid1.map((faqBlock) => (
						<FAQAccordion key={faqBlock.id} faq={faqBlock}/>
					))}
				</div>
				<div className="flex flex-col md:items-center">
					{faqBlocksGrid2.map((faqBlock) => (
						<FAQAccordion key={faqBlock.id} faq={faqBlock}/>
					))}
				</div>
			</div>
		</div>
	);
};

export default FAQContainer;