// Firebase Configuration for GitHub Pages deployment
// Config is Base64 encoded to obfuscate keys from casual viewing
(function() {
    // Encoded Firebase configuration 
    const encodedConfig = "eyJhcGlLZXkiOiJBSXphU3lDLVYyRUZkeXJfNnBCUFpNVjR1ZVRkT0N6Y1h2Yk5hMkkiLCJhdXRoRG9tYWluIjoiY2lyY2xlZ2FtZS1jNDAxMy5maXJlYmFzZWFwcC5jb20iLCJwcm9qZWN0SWQiOiJjaXJjbGVnYW1lLWM0MDEzIiwic3RvcmFnZUJ1Y2tldCI6ImNpcmNsZWdhbWUtYzQwMTMuZmlyZWJhc2VzdG9yYWdlLmFwcCIsIm1lc3NhZ2luZ1NlbmRlcklkIjoiMTAwMTA2MjI1MDM4MiIsImFwcElkIjoiMToxMDAxMDYyMjUwMzgyOndlYjpiMTljZWRmMzI3ZjQwYzExZDM1NmRmIiwibWVhc3VyZW1lbnRJZCI6IkctRFQ4WU5RWkRFWiJ9";
    
    try {
        // Decode the configuration
        const configJson = atob(encodedConfig);
        window.firebaseConfig = JSON.parse(configJson);
    } catch (error) {
        console.error('Failed to load Firebase configuration:', error);
        window.firebaseConfig = null;
    }
})();