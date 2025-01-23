## [1.2.0] 2025-1-23

### Added

-   `ElectronProcess` to use the type for environment check tools
-   `PackageJsonPublishConfig` to extend `PackageJson` with extra publish configurations

### Changed

-   Adjusted the documentation of `Values` to be more clear.

## [1.1.0] 2025-1-11

### Added

-   Added `PromiseCallback` to have a general type for a callback function of a Promise

### Changed

-   Changed the `Rejector` reason to `Error` as this is the most recommended type.
-   Renamed `OnFulFilled` to `OnFulfilled`

### Removed

-   Removed type `undefined` from `Resolver` to actually mimic a Promise resolver function
-   Removed `RejectedValue` as it didn't serve any purpose
