/**
* @file sentry.js
* @fileOverview This module contains all sentry functions
* @author yafp
* @module sentry
* @exports enableSentry
* @exports disableSentry
*/

'use strict'

const utils = require('./utils.js')

// ----------------------------------------------------------------------------
// Error Handling using: sentry (see #106)
// ----------------------------------------------------------------------------
//
// https://sentry.io/organizations/yafp/
// https://docs.sentry.io/platforms/javascript/electron/
//
const Sentry = require('@sentry/electron')
Sentry.init({
    dsn: 'https://bbaa8fa09ca84a8da6a545c04d086859@sentry.io/1757940',
    debug: true
})

// simple way to force a crash:
// myUndefinedFunction();


/**
* @name enableSentry
* @summary Enables Sentry
* @description Enables Sentry. Is is enabled by default.
*/
function enableSentry () {
    Sentry.getCurrentHub().getClient().getOptions().enabled = true
    utils.writeConsoleMsg('info', 'enableSentry ::: Sentry is now enabled')
}

/**
* @name disableSentry
* @summary Disable Sentry
* @description Disable Sentry. Is is enabled by default.
*/
function disableSentry () {
    Sentry.getCurrentHub().getClient().getOptions().enabled = false
    utils.writeConsoleMsg('warn', 'disableSentry ::: Sentry is now enabled')
}

// export both functions
//
module.exports.enableSentry = enableSentry
module.exports.disableSentry = disableSentry
