/**
 * This is the default configuration file for the Superdesk application. By default,
 * the app will use the file with the name "superdesk.config.js" found in the current
 * working directory, but other files may also be specified using relative paths with
 * the SUPERDESK_CONFIG environment variable or the grunt --config flag.
 */
module.exports = function(grunt) {
    return {
        apps: [
            'superdesk-planning'
        ],
        importApps: [
            'superdesk-planning'
        ],
        defaultRoute: '/workspace/monitoring',

        publisher: {
            protocol: 'https',
            tenant: process.env.PUBLISHER_API_SUBDOMAIN || '',
            domain: process.env.PUBLISHER_API_DOMAIN || 'localhost',
            base: 'api/v1'
        },

        langOverride: {
            'en': {
                'ANPA Category': 'Category',
                'ANPA CATEGORY': 'CATEGORY'
            }
        },

        view: {
            timeformat: 'HH:mm',
            dateformat: 'DD.MM.YYYY',
        },

        features: {
            preview: 1,
            customAuthoringTopbar: {
                toDesk: true,
                publish: true,
                publishAndContinue: false,
            },
            hideCreatePackage: true,
            swimlane: {defaultNumberOfColumns: 4},
            editor3: true,
            validatePointOfInterestForImages: true,
            editorHighlights: true
        },
        workspace: {
            analytics: true
        },
        enabledExtensions: {
            planning: 1,
            // extensionFolderName: 1,
        },
    };
};
