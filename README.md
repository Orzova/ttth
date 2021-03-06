<p align="center">
  <a href="#"><img src="https://raw.githubusercontent.com/yafp/ttth/master/.github/logo/256x256.png" width="256"></a>
</p>

<div align="center">
  <h1>ttth</h1>

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/64a82c2d156f41c1b75431fb6da1c693)](https://www.codacy.com/app/yafp/ttth?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=yafp/ttth&amp;utm_campaign=Badge_Grade)
[![AppVeyor Build status](https://ci.appveyor.com/api/projects/status/rd107p8kbexiot08?svg=true)](https://ci.appveyor.com/project/yafp/ttth)
[![Build Status](https://travis-ci.org/yafp/ttth.svg?branch=master)](https://travis-ci.org/yafp/ttth)
![GitHub Current Release](https://img.shields.io/github/release/yafp/ttth.svg?style=flat)
![GitHub Release Date](https://img.shields.io/github/release-date/yafp/ttth.svg?style=flat)
![GitHub Download All releases](https://img.shields.io/github/downloads/yafp/ttth/total.svg)
![GitHub Last Commit](https://img.shields.io/github/last-commit/yafp/ttth.svg?style=flat)
![GitHub Issues Open](https://img.shields.io/github/issues-raw/yafp/ttth.svg?style=flat)
[![GitHub contributors](https://img.shields.io/github/contributors/yafp/ttth.svg)](https://github.com/yafp//graphs/contributors/)
[![Merged PRs](https://img.shields.io/github/issues-pr-closed-raw/yafp/ttth.svg?label=merged+PRs)](https://github.com/yafp/ttth/pulls?q=is:pr+is:merged)
![GitHub License](https://img.shields.io/github/license/yafp/ttth.svg)

</div>


## table of contents

- [about](#about)
- [services](#services)
- [ui](#ui)
- [changelog](#changelog)
- [download](#download)
- [install](#install)
- [keyboard-shortcuts](#keyboard-shortcuts)
- [privacy](#privacy)
- [faq](#faq)
- [known-issues](#known-issues)
- [discussion](#discussion)
- [build](#build)
- [contributing](#contributing)
- [license](#license)
- [disclosure](#disclosure)


## about
**ttth** (talk to the hand) is an electron based desktop app for online services like WhatsApp, Threema, Telegram, Google and several others.

It is:

* available for ![linux](https://raw.githubusercontent.com/yafp/ttth/master/.github/platform/linux_32x32.png) linux, ![apple](https://raw.githubusercontent.com/yafp/ttth/master/.github/platform/apple_32x32.png) macOS and ![windows](https://raw.githubusercontent.com/yafp/ttth/master/.github/platform/windows_32x32.png) windows.
* inspired by apps like [Franz](https://github.com/meetfranz/franz) and [Rambox](https://github.com/ramboxapp/community-edition). Need to feature [Hamsket](https://github.com/TheGoddessInari/hamsket) here as good looking Rambox fork and [Ferdi](https://github.com/getferdi/ferdi) as Franz fork.
* free and open source



## services
While ttth supports a growing list of pre-configured services, you can as well add custom urls yourself (using the CUSTOM URL type).
Please see the supported [services](docs/SERVICES.md) for more details.


## ui
ttth comes with several themes. The readme shows only exemplary only the default theme.

![ui](https://raw.githubusercontent.com/yafp/ttth/master/.github/screenshots/ui_latest.png)

*Default theme*

Please see the [themes list](docs/THEMES.md) for more details.


## changelog
Please see the [changlog](docs/CHANGELOG.md) for more details.


## download
Download the latest release from [here](https://github.com/yafp/ttth/releases).


## install
Please see the [installation instructions](docs/INSTALL.md) for more details.


## keyboard-shortcuts

| Function                                   | Linux                           | macOS                           | Windows                         |
| ------------------------------------------ | ------------------------------- | ------------------------------- | ------------------------------- |
| Homepage                                   | <kbd>F1</kbd>                   | <kbd>F1</kbd>                   | <kbd>F1</kbd>                   |
| Report issue                               | <kbd>F2</kbd>                   | <kbd>F2</kbd>                   | <kbd>F2</kbd>                   |
| Changelog                                  | <kbd>F3</kbd>                   | <kbd>F3</kbd>                   | <kbd>F3</kbd>                   |
| FAQ                                        | <kbd>F4</kbd>                   | <kbd>F4</kbd>                   | <kbd>F4</kbd>                   |
| Releases                                   | <kbd>F5</kbd>                   | <kbd>F5</kbd>                   | <kbd>F5</kbd>                   |
| Search updates                             | <kbd>F9</kbd>                   | <kbd>F9</kbd>                   | <kbd>F9</kbd>                   |
| Open developer console for current service | <kbd>F10</kbd>                  | <kbd>F10</kbd>                  | <kbd>F10</kbd>                  |
| Toggle Fullscreen mode                     | <kbd>F11</kbd>                  | <kbd>F11</kbd>                  | <kbd>F11</kbd>                  |
| Toggle developer console                   | <kbd>F12</kbd>                  | <kbd>F12</kbd>                  | <kbd>F12</kbd>                  |
| Show Settings                              | <kbd>CTRL</kbd> + <kbd>,</kbd>  | <kbd>CMD</kbd> + <kbd>,</kbd>   | <kbd>CTRL</kbd> + <kbd>,</kbd>  |
| Jump to next service                       | <kbd>CTRL</kbd> + <kbd>🡆</kbd> | <kbd>CMD</kbd> + <kbd>🡆</kbd>   | <kbd>CTRL</kbd> + <kbd>🡆</kbd>  |
| Jump to previous service                   | <kbd>CTRL</kbd> + <kbd>🡄</kbd> | <kbd>CMD</kbd> + <kbd>🡄</kbd>   | <kbd>CTRL</kbd> + <kbd>🡄</kbd>  |
| Jump to service tab 1                      | <kbd>CTRL</kbd> + <kbd>1</kbd>  | <kbd>CMD</kbd> + <kbd>1</kbd>   | <kbd>CTRL</kbd> + <kbd>1</kbd>  |
| Jump to service tab 2                      | <kbd>CTRL</kbd> + <kbd>2</kbd>  | <kbd>CMD</kbd> + <kbd>2</kbd>   | <kbd>CTRL</kbd> + <kbd>2</kbd>  |
| Jump to service tab 3                      | <kbd>CTRL</kbd> + <kbd>3</kbd>  | <kbd>CMD</kbd> + <kbd>3</kbd>   | <kbd>CTRL</kbd> + <kbd>3</kbd>  |
| Jump to service tab ...                    | <kbd>CTRL</kbd> + <kbd>...</kbd>  | <kbd>CMD</kbd> + <kbd>...</kbd>   | <kbd>CTRL</kbd> + <kbd>...</kbd>  |
| Jump to service tab 9                      | <kbd>CTRL</kbd> + <kbd>9</kbd>  | <kbd>CMD</kbd> + <kbd>9</kbd>   | <kbd>CTRL</kbd> + <kbd>9</kbd>  |
| Reload current service                     | <kbd>CTRL</kbd> + <kbd>S</kbd>  | <kbd>CMD</kbd> + <kbd>S</kbd>   | <kbd>CTRL</kbd> + <kbd>S</kbd>  |
| Quit/exit the application                  | <kbd>CTRL</kbd> + <kbd>Q</kbd>  | <kbd>CMD</kbd> + <kbd>Q</kbd>   | <kbd>CTRL</kbd> + <kbd>Q</kbd>  |
| Reload the application                     | <kbd>CTRL</kbd> + <kbd>R</kbd>  | <kbd>CMD</kbd> + <kbd>R</kbd>   | <kbd>CTRL</kbd> + <kbd>R</kbd>  |
| Minimize window                            | <kbd>CTRL</kbd> + <kbd>M</kbd>  | <kbd>CMD</kbd> + <kbd>M</kbd>   | <kbd>CTRL</kbd> + <kbd>M</kbd>  |
| Maximize window                            | <kbd>CTRL</kbd> + <kbd>K</kbd>  | <kbd>CMD</kbd> + <kbd>K</kbd>   | <kbd>CTRL</kbd> + <kbd>K</kbd>  |
| Hide window                                | <kbd>CTRL</kbd> + <kbd>H</kbd>  | <kbd>CMD</kbd> + <kbd>H</kbd>   | <kbd>CTRL</kbd> + <kbd>H</kbd>  |


## privacy
* ttth is using [sentry](https://sentry.io) to collect error reports. This helps heavily finding bugs which might occur only in some specific use-cases. Please see the [sentry privacy policy](https://sentry.io/privacy/) for more details.
* ttth is not tracking it's users (i.e. using Google Analytics or similar)
* All data is stored locally only.
* Sessions will persist using the [partition:persist](https://electronjs.org/docs/api/webview-tag#partition) attribute for electrons webview.

You are always welcome to check and even improve the code.


## faq
Please see the [FAQ](docs/FAQ.md) for more details.


## known-issues
Please see the [known issues](docs/KNOWN_ISSUES.md) for more details.


## discussion

* Github: using the issue function
* Discord: Click [here](https://discord.gg/xHmUNBf)
* Riot: Click [here](https://riot.im/app/#/room/#ttth:matrix.org) to join the public #ttth riot.im room available on matrix.org.


## build
Building ttth yourself is pretty easy. Please see the [building instructions](docs/BUILD.md) for more details.


## contributing
Please see the [contributing informations](docs/CONTRIBUTING.md) for more details.
A list of all contributors can be found [here](docs/CONTRIBUTORS.md).


## license
Please see the [LICENSE](LICENSE) for more details.


## disclosure
ttth is not affiliated with any of the supported apps/services.
