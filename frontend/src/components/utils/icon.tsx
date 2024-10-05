import React, { useEffect, useState } from 'react';
import { CheckIcon, XIcon, HomeIcon, InformationCircleIcon } from '@heroicons/react/24/solid';

interface IconProps {
	icon: 'CheckIcon' | 'XIcon' | 'HomeIcon' | 'InformationCircleIcon'; // Restricting to known icon names
}

const Icon: React.FC<IconProps> = ({ icon }) => {
	const [stateIconKey, setIconKey] = useState<IconProps['icon']>('HomeIcon'); // Default to HomeIcon

	useEffect(() => {
		setIconKey(icon);
	}, [icon]);

	const renderIcon = () => {
		switch (stateIconKey) {
			case 'CheckIcon':
				return <CheckIcon className="h-6 w-6 text-green-500" />;
			case 'XIcon':
				return <XIcon className="h-6 w-6 text-red-500" />;
			case 'HomeIcon':
				return <HomeIcon className="h-6 w-6 text-blue-500" />;
			case 'InformationCircleIcon':
				return <InformationCircleIcon className="h-6 w-6 text-gray-500" />;
			default:
				return <HomeIcon className="h-6 w-6 text-gray-500" />; // Fallback icon
		}
	};

	return renderIcon();
};

export default Icon;
