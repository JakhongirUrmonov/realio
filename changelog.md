# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## UNRELEASED

### Changed
- Stellar API authorized count adjusted to match the new API response [16](https://github.com/realiotech/realio-network-frontend/pull/16)
- Cosmos supply cap added to the statistics as a static value [20](https://github.com/realiotech/realio-network-frontend/pull/20)
- Move API calls to server side and remove client exposure of API keys [20](https://github.com/realiotech/realio-network-frontend/pull/20)
- SSE stream added to the statistics to update the data in real time every 30 seconds [20](https://github.com/realiotech/realio-network-frontend/pull/20)
- Adjustments on the grid to make sure the stats titles doesn't collapse on resizing. [21](https://github.com/realiotech/realio-network-frontend/pull/21)

### Fixed
- Adjustments on Algorand to go over the API pages result to get the total number of holders. [21](https://github.com/realiotech/realio-network-frontend/
- Adjustments over the API for Stellar to get only the funded accounts.[21](https://github.com/realiotech/realio-network-frontend/pull/21)pull/21)


### Added
- Added account holders from BSC [20](https://github.com/realiotech/realio-network-frontend/pull/20)
- Added account holders from Native chain [20](https://github.com/realiotech/realio-network-frontend/pull/20)
- CryptoCompare API key added to the statistics as a static value as datasource for volume and price [20](https://github.com/realiotech/realio-network-frontend/pull/20)
- Basic unit tests configuration for route [20](https://github.com/realiotech/realio-network-frontend/pull/20)


## [1.0.0]

### Added
- Created blog posts [6](https://github.com/realiotech/realio-network-frontend/pull/6)
- Stats datasources fetching to match current network site.[9](https://github.com/realiotech/realio-network-frontend/pull/9)

### Fixed
- Fix issues with statistics, created blog posts, fixed header hovering bugs, fixed responsiveness [6](https://github.com/realiotech/realio-network-frontend/pull/6)
- add domain for image access [13](https://github.com/realiotech/realio-network-frontend/pull/13)

### Changed
- Changed number formatting to use more precise and readable format and avoid decimals on round numbers [9](https://github.com/realiotech/realio-network-frontend/pull/9)

### Removed
- Removed unused component [9](https://github.com/realiotech/realio-network-frontend/pull/9)

