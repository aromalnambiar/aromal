import { useEffect, useState } from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/solid'; // Import the ArrowUpIcon from Heroicons

// This will show a "Back to Top" button when the user scrolls down from the top of the page
const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show the "Back to Top" button when the user scrolls
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            {isVisible && (
                <button className="back-to-top" onClick={scrollToTop}>
                    <ArrowUpIcon className="h-6 w-6" /> {/* Use Heroicon with height and width */}
                </button>
            )}
        </>
    );
};

export default BackToTop;
