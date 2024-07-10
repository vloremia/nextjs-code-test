type FAQButtonProps = {
	onClick: (label: string) => void;
	label: string;
	isActive: boolean;
};

const FAQButton: React.FC<FAQButtonProps> = ({label, onClick, isActive}) => {
	const onHandleCLick = (): void => {
		onClick(label);
	};

	return (
		<button
			className={`${isActive ? 'bg-black text-white hover:bg-black/70' : 'bg-gray-200 text-black hover:bg-gray-300'} font-medium px-4 py-2 rounded-full transition-all duration-500 ease-in-out`}
			type="button"
			onClick={onHandleCLick}
		>
			{label}
		</button>
	);
};

export default FAQButton;