import React, { useEffect } from 'react';
import {
    LiveboardEmbed,
    AuthType,
    init,
} from '@thoughtspot/visual-embed-sdk';

const ThoughtSpotLiveboard = () => {
    useEffect(() => {
        // Initialize the SDK
        init({
            thoughtSpotHost: 'https://team2.thoughtspot.cloud',
            authType: AuthType.None, // Adjust the auth type as needed
        });
    }, []);

    const liveboardId = '22e79c21-eec4-40bf-997b-7454c6e3a2a5'; // Replace with your liveboard ID

    return (
        <div className="liveboard-container">
            {/* Embed the liveboard */}
            <LiveboardEmbed
                liveboardId={liveboardId}
                frameParams={{
                    width: '100%',
                    height: '100vh',
                }}
            />
        </div>
    );
};

export default ThoughtSpotLiveboard;
