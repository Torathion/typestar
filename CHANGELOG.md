## [1.6.0] 03-01-2025

### Added

-   `StrictTypedArray<T>` as a stricter variant of `TypedArrayArgs` to specify the exact `TypedArray` used and needed inside the scope.

### Changed

-   Optimized typings of `TypedArrayArgs`
-   Replaced the categorical type of `TypedArrayConstructor` with a new actual constructor that fixes TypeScript's limitation of detecting errors from overload type definitions. To "fix" the `TypedArray` constructors, add aliases for the existing, native ones:

```typescript
export const F64: TypedArrayConstructor<Float64Array> = Float64Array
// ...
```

## [1.5.0] 03-01-2025

### Added

-   `TypedArrayArgs` to describe any kind of argument used to instantiate a `TypedArray`.

### Removed

-   `ArrayBuffer` from `AnyNumberArray` as it caused type errors when trying to call array only properties like `length`.

## [1.4.0] 02-28-2025

### Added

-   `AnyNumberArray` to generalize types for algorithms that work with numbers inside array structures.
-   `Constructor<T>` a more leaner and generalized type compared to `ClassConstructor<T>` that can hold any arguments.

### Changed

-   Fixed type errors in `AnyArray` and added a generic to provide more detailed type definitions.

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
