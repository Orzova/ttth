/**
* @file userServiceConfigUpdater.js
* @fileOverview This module contains contains all functions to update the user service configurations after ttth updates
* @author yafp
* @module userServiceConfigUpdater
*/

'use strict'

const utils = require('./utils.js')

/**
* @function  updateAllUserServiceConfigurations
* @summary Patches the user service configration files on version changes if needed.
* @description Patches the user service configration files on version changes if needed.
*/
function updateAllUserServiceConfigurations () {
    updateAllUserServiceConfigurationsForM1M8P0() // updates needed since 1.8.0
    updateAllUserServiceConfigurationsForM1M9P0() // updates needed since 1.9.0
}

/**
* @function  updateAllUserServiceConfigurationsForM1M8P0
* @summary Patches the user service configration files on version changes if needed.
* @description Patches the user service configration files on version changes if needed.
*/
function updateAllUserServiceConfigurationsForM1M8P0 () {
    // changes from 1.7.0 to 1.8.0:
    // - inject files got re-structured. Path & names are stored in the user-services configuration files
    //
    const storage = require('electron-json-storage')

    utils.writeConsoleMsg('info', 'updateAllUserServiceConfigurationsForM1M8P0 ::: Starting to validate all user service configurations')

    // loop over all json files - and see if we need to patch something
    storage.getAll(function (error, data) {
        if (error) {
            utils.writeConsoleMsg('error', 'updateAllUserServiceConfigurationsForM1M8P0 ::: Got error while trying to fetch all service configs. Error: ' + error)
            throw error
        }

        // show object which contains all config files
        // utils.writeConsoleMsg("info", "loadEnabledUserServices ::: Object: " + data);
        // console.error(data);

        var shouldConfigBeUpdated = false
        var newInjectCodePath

        // loop over upper object
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                utils.writeConsoleMsg('info', 'updateAllUserServiceConfigurationsForM1M8P0 ::: ' + key + ' -> ' + data[key])

                if (data[key].injectCode !== '') {
                    switch (data[key].injectCode) {
                    // gitter
                    case './js/ttth/services/Gitter_inject.js':
                        newInjectCodePath = './js/ttth/services/gitter/gitter_inject.js'
                        shouldConfigBeUpdated = true
                        break

                        // googleMail
                    case './js/ttth/services/GoogleMail_inject.js':
                        newInjectCodePath = './js/ttth/services/googleMail/googleMail_inject.js'
                        shouldConfigBeUpdated = true
                        break

                        // googleMessages
                    case './js/ttth/services/GoogleMessages_inject.js':
                        newInjectCodePath = './js/ttth/services/googleMessages/googleMessages_inject.js'
                        shouldConfigBeUpdated = true
                        break

                        // icq
                    case './js/ttth/services/ICQ_inject.js':
                        newInjectCodePath = './js/ttth/services/icq/icq_inject.js'
                        shouldConfigBeUpdated = true
                        break

                        // mattermost
                    case './js/ttth/services/Mattermost_inject.js':
                        newInjectCodePath = './js/ttth/services/mattermost/mattermost_inject.js'
                        shouldConfigBeUpdated = true
                        break

                        // messenger
                    case './js/ttth/services/Messenger_inject.js':
                        newInjectCodePath = './js/ttth/services/messenger/messenger_inject.js'
                        shouldConfigBeUpdated = true
                        break

                        // microsoftOffice365
                    case './js/ttth/services/MicrosoftOffice365_inject.js':
                        newInjectCodePath = './js/ttth/services/microsoftOffice365/microsoftOffice365_inject.js'
                        shouldConfigBeUpdated = true
                        break

                        // microsoftOutlook
                    case './js/ttth/services/MicrosoftOutlook_inject.js':
                        newInjectCodePath = './js/ttth/services/microsoftOoutlook/microsoftOutlook_inject.js'
                        shouldConfigBeUpdated = true
                        break

                        // microsoftTeams
                    case './js/ttth/services/MicrosoftTeams_inject.js':
                        newInjectCodePath = './js/ttth/services/microsoftTeams/microsoftTeams_inject.js'
                        shouldConfigBeUpdated = true
                        break

                        // Riot
                    case './js/ttth/services/Riot_inject.js':
                        newInjectCodePath = './js/ttth/services/riot/riot_inject.js'
                        shouldConfigBeUpdated = true
                        break

                        // skype
                    case './js/ttth/services/Skype_inject.js':
                        newInjectCodePath = './js/ttth/services/skype/skype_inject.js'
                        shouldConfigBeUpdated = true
                        break

                        // slack
                    case './js/ttth/services/Slack_inject.js':
                        newInjectCodePath = './js/ttth/services/slack/slack_inject.js'
                        shouldConfigBeUpdated = true
                        break

                        // steam
                    case './js/ttth/services/SteamChat_inject.js':
                        newInjectCodePath = './js/ttth/services/steam/steam_inject.js'
                        shouldConfigBeUpdated = true
                        break

                        // telegram
                    case './js/ttth/services/Telegram_inject.js':
                        newInjectCodePath = './js/ttth/services/telegram/telegram_inject.js'
                        shouldConfigBeUpdated = true
                        break

                        // threema
                    case './js/ttth/services/Threema_inject.js':
                        newInjectCodePath = './js/ttth/services/threema/threema_inject.js'
                        shouldConfigBeUpdated = true
                        break

                        // twitter
                    case './js/ttth/services/Twitter_inject.js':
                        newInjectCodePath = './js/ttth/services/twitter/twitter_inject.js'
                        shouldConfigBeUpdated = true
                        break

                        // whatsapp
                    case './js/ttth/services/WhatsApp_inject.js':
                        newInjectCodePath = './js/ttth/services/whatsapp/whatsapp_inject.js'
                        shouldConfigBeUpdated = true
                        break

                        // xing
                    case './js/ttth/services/Xing.js':
                        newInjectCodePath = './js/ttth/services/xing/xing_inject.js'
                        shouldConfigBeUpdated = true
                        break

                    default:
                        utils.writeConsoleMsg('info', 'updateAllUserServiceConfigurationsForM1M8P0 ::: Skipping to next service configuration')
                        newInjectCodePath = ''
                        shouldConfigBeUpdated = false
                        break
                    }
                }

                // Update this property - if needed
                if (shouldConfigBeUpdated === true) {
                    utils.writeConsoleMsg('info', 'updateAllUserServiceConfigurationsForM1M8P0 ::: Updating config of service: _' + key + '_.')

                    storage.set(key,
                        {
                            type: data[key].type, // old value
                            name: data[key].name, // old value
                            icon: data[key].icon, // old value
                            url: data[key].url, // old value
                            injectCode: newInjectCodePath, // NEW VALUE
                            serviceEnableStatus: data[key].serviceEnableStatus // old value
                        }, function (error) {
                            if (error) {
                                utils.writeConsoleMsg('error', 'updateAllUserServiceConfigurationsForM1M8P0 ::: Error while trying to update a service configuration. Service: _' + key + '_. Error: ' + error)
                                utils.showNoty('error', 'Failed to update a user service configuration to 1.8.0 format. Error: ' + error)
                                throw error
                            }
                        })
                }
            }
        }
        utils.writeConsoleMsg('info', 'updateAllUserServiceConfigurationsForM1M8P0 ::: Finished.')
    })
}

/**
* @function  updateAllUserServiceConfigurationsForM1M9P0
* @summary Patches the user service configration files on version changes if needed.
* @description Patches the user service configration files on version changes if needed.
*/
function updateAllUserServiceConfigurationsForM1M9P0 () {
    // 1.9.0 introduced userAgents per service. See #158
    // patch all user-services:
    // add: userAgentDefault
    // add: userAgentCustom

    const storage = require('electron-json-storage')

    utils.writeConsoleMsg('info', 'updateAllUserServiceConfigurationsForM1M9P0 ::: Starting to validate all user service configurations')

    // loop over all json files - and see if we need to patch something
    storage.getAll(function (error, data) {
        if (error) {
            utils.writeConsoleMsg('error', 'updateAllUserServiceConfigurationsForM1M9P0 ::: Got error while trying to fetch all service configs. Error: ' + error)
            throw error
        }

        // show object which contains all config files
        // utils.writeConsoleMsg("info", "loadEnabledUserServices ::: Object: " + data);
        // console.error(data);

        var userAgentDefaultMissing
        var newUserAgentDefaultString
        var userAgentCustomMissing
        var userUserAgentCustomString

        // loop over upper object
        for (var key in data) {
            userAgentDefaultMissing = false
            newUserAgentDefaultString = ''
            userAgentCustomMissing = false
            userUserAgentCustomString = ''

            utils.writeConsoleMsg('info', 'updateAllUserServiceConfigurationsForM1M9P0 ::: Current service: _' + key + '_.') // key = name of json file

            if (data.hasOwnProperty(key)) {
                // service: any google service
                if ((data[key].type.startsWith('google')) && (data[key].userAgentDefault === '')) {
                    newUserAgentDefaultString = 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:70.0) Gecko/20100101 Firefox/70.0'
                    userAgentDefaultMissing = true
                }

                // service: whatsapp
                if ((data[key].type.startsWith('whatsapp')) && (data[key].userAgentDefault === '')) {
                    newUserAgentDefaultString = 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:70.0) Gecko/20100101 Firefox/70.0'
                    userAgentDefaultMissing = true
                }

                // general: check if userAgentDefault exists
                if (data[key].userAgentDefault === undefined) {
                    utils.writeConsoleMsg('warn', 'updateAllUserServiceConfigurationsForM1M9P0 ::: Config for service type _' + data[key].type + '_ has no userAgentDefault yet.')
                    userAgentDefaultMissing = true
                }

                // general: check if userAgentCustom exists
                if (data[key].userAgentCustom === undefined) {
                    utils.writeConsoleMsg('warn', 'updateAllUserServiceConfigurationsForM1M9P0 ::: Config for service type _' + data[key].type + '_ has no userAgentCustom yet.')
                    userAgentCustomMissing = true
                }
            }

            // update config if needed
            if ((userAgentDefaultMissing === true) || (userAgentCustomMissing === true)) {
                utils.writeConsoleMsg('warn', 'updateAllUserServiceConfigurationsForM1M9P0 ::: Updating config of service: _' + key + '_.')

                storage.set(key,
                    {
                        type: data[key].type, // old value
                        name: data[key].name, // old value
                        icon: data[key].icon, // old value
                        url: data[key].url, // old value
                        injectCode: data[key].injectCode, // NEW VALUE
                        serviceEnableStatus: data[key].serviceEnableStatus, // old value
                        userAgentDefault: newUserAgentDefaultString,
                        userAgentCustom: userUserAgentCustomString
                    }, function (error) {
                        if (error) {
                            utils.writeConsoleMsg('error', 'updateAllUserServiceConfigurationsForM1M9P0 ::: Error while trinyg to update a user service configuration. Service: _' + key + '_. Error: ' + error)
                            utils.showNoty('error', 'Failed to update a user service configuration to 1.9.0 format. Error: ' + error)
                            throw error
                        }
                    })
            }
        }
        utils.writeConsoleMsg('info', 'updateAllUserServiceConfigurationsForM1M9P0 ::: Finished.')
    })
}

// Export the functions
//
module.exports.updateAllUserServiceConfigurations = updateAllUserServiceConfigurations
