import type {FC} from 'react';
import './globals.css';

type RootLayoutProps = {
	children: React.ReactNode;
};

const RootLayout: FC<RootLayoutProps> = ({children}): React.ReactElement => (
	<html lang="en">
		<body>
			{children}
		</body>
	</html>
);

export default RootLayout;
