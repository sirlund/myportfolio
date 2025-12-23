import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

// Replace with your actual Measurement ID or use an environment variable
const GA_MEASUREMENT_ID = 'G-6VX4KY88XL';

interface AnalyticsProps {
    debug?: boolean;
}

/**
 * Analytics component to track page views on route changes
 * Should be placed inside BrowserRouter
 */
export function Analytics({ debug = false }: AnalyticsProps) {
    const location = useLocation();

    useEffect(() => {
        // Initialize GA4 once
        if (!window.GA_INITIALIZED) {
            ReactGA.initialize(GA_MEASUREMENT_ID, {
                testMode: debug
            });
            window.GA_INITIALIZED = true;
        }
    }, [debug]);

    useEffect(() => {
        // Send pageview on route change
        ReactGA.send({
            hitType: "pageview",
            page: location.pathname + location.search,
            title: document.title
        });
    }, [location]);

    return null;
}

// Add type definition to avoid TS error for custom window property
declare global {
    interface Window {
        GA_INITIALIZED?: boolean;
    }
}
