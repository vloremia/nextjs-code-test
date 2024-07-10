import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from '@headlessui/react';
import {ChevronDownIcon} from '@heroicons/react/20/solid';

type FAQBlock = {
	question: string;
	answer: string;
};

type FAQAccordionProps = {
	faq: FAQBlock;
};

const FAQAccordion: React.FC<FAQAccordionProps> = ({faq}) => {
	return (
		<Disclosure>
			<DisclosureButton className="group flex items-center gap-2 data-[open]:border-b-0 border-b border-b-gray-300 max-w-xl w-full justify-between text-start py-4 font-medium hover:bg-gray-100 transition-all ease-in-out duration-300">
				{faq.question}
				<ChevronDownIcon className="w-5 group-data-[open]:rotate-180"/>
			</DisclosureButton>
			<DisclosurePanel
				transition
				className="text-gray-500 origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0 max-w-xl w-full"
			>
				{faq.answer}
			</DisclosurePanel>
		</Disclosure>
	);
};

export default FAQAccordion;