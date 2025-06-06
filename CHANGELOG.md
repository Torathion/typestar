# Changelog

## [2.0.0] 06-06-2025

### BREAKING

#### Renames

-   `RequireAtLeastOne` -> `Require`
-   `ExcludeIndexSignature` -> `NotIndexable`
-   `HasToString` -> `Stringifyable`
-   `AnyFunction` -> `AnyFn`
-   `MaybeFunction` -> `MaybeFn`
-   `TypedResultFunction` -> `TypedFn`
-   `HomogenousFunction` -> `LinearMapperFn`
-   `HeterogenousFunction` -> `MapperFn`
-   `AsyncFunction` -> `AsyncFn`
-   `TypedAsyncFunction` -> `AsyncFn<T>`
-   `SimpleVoidFunction` -> `VoidFn`
-   `AnyVoidFunction` -> `VoidFn`
-   `TypedVoidFunction` -> `VoidFn<T>`
-   `TimeoutFunction` -> `TimeoutFn`
-   `ClearTimeoutFunction` -> `ClearTimeoutFn`
-   `MethodDecorator` -> `Decorator`
-   `SingleNumberMap` -> `SingleMap<number>`
-   `DoubleNumberMap` -> `DoubleMap<number>`
-   `SVGAttribute` -> `SVGAttr`

#### Removed

-   `AnyObject` in favor of `object` (just deactivate the corresponding ESLint Rule)
-   `CartesianProduct` for being too niche.

### Added

-   `Jsonfyable<T>` to define objects that can be safely converted to a JSON string.

### Fixed

-   Incorrect function to check of `HasValue<T>`

## [1.12.0] 06-04-2025

### Added

-   Type `MaybeFunction<T>` as function argument to describe types that can be both static and dynamic.

### Fixed

-   Type `DeepPartial<T>` is more accurate of turning nested objects into partials.

## [1.11.0] 04-28-2025

### Added

-   Type `ArrayToIntersect<T>` to convert an array of different elements to an intersection (&).
-   Type `ArrayToUnion<T>` to convert an array of different elements to an union (|).

## [1.10.1] 04-26-2025

### Changed

-   Fixed `.npmignore` to include all type patch files correctly

## [1.10.0] 04-26-2025

### Added

-   Add type patches for modular styles, glsl files and user agent of `navigator`.

## [1.9.1] 04-22-2025

### Changed

-   Adjusted parameter type of `OnResolved` to fix type misalignment error to `promise.then()`.

## [1.9.0] 04-22-2025

### Changed

-   Fixed `Rejector` and `reject` misalignment by not accepting `PromiseLike<Error>`
-   Adjusted `OnRejected` callback type to reflect changes of `Rejector`
-   Renamed `OnFulfilled` to `OnResolved`

### Misc

-   Added updated issue templates to project

## [1.8.0] 03-09-2025

### Added

-   Utility type `WithReadonly<T>` that wraps around other array types to include `readonly` arrays.

## [1.7.0] 03-09-2025

### Changed

-   Loosened `ClassConstructor` and gave additional generic `A` to define the constructor arguments. This should solve all errors when wrapping constructor. I don't think it's possible to automatically extract the correct arguments from a constructor by how limited TypeScript is.

### Removed

-   Removed `ConstructorArgs<T>` as the builtin type `ConstructorParameters<T>` exist.

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
