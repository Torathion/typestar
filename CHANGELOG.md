## [1.3.0] 02-27-2025

### Added

-   `Table<T>` to reduce type duplication of `Record<string, T>`
-   `AnyArray` to allow algorithms and function to utilize any kind of array structure.

### Changed

-   Reduced type definitions to use `Table<T>`
-   Extended `exports` of `PackageJson` with `PackageJsonExportsEntry` to uniform projects supporting both ESM and CJS builds.

## [1.2.0] 01-23-2025

### Added

-   `ElectronProcess` to use the type for environment check tools
-   `PackageJsonPublishConfig` to extend `PackageJson` with extra publish configurations

### Changed

-   Adjusted the documentation of `Values` to be more clear.

## [1.1.0] 01-11-2025

### Added

-   Added `PromiseCallback` to have a general type for a callback function of a Promise

### Changed

-   Changed the `Rejector` reason to `Error` as this is the most recommended type.
-   Renamed `OnFulFilled` to `OnFulfilled`

### Removed

-   Removed type `undefined` from `Resolver` to actually mimic a Promise resolver function
-   Removed `RejectedValue` as it didn't serve any purpose
