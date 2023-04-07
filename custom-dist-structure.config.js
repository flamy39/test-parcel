module.exports = {
    // Custom configuration
    getConfig: (config) => {
        return {
            ...config,
            css: {
                path: './', // Define the path without the leading '/'
            },
            js: {
                path: './', // Define the path without the leading '/'
            },
        };
    },
};