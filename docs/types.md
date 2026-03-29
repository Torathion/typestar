# Types

Reference list for all types in this library.

| Type                       | Description                                                                    |
|----------------------------|--------------------------------------------------------------------------------|
| `Primitive`                | All JS primitive types                                                         |
| `JSONPrimitive`            | All JSON primitive types                                                       |
| `Nullish<T>`               | A type that can be `null` or `undefined`                                       |
| `Global`                   | Shortcut type for `Window & typeof globalThis`                                 |
| `Omit<T, K>`               | Patch type to built-in `Omit` allowing only existing keys to be omitted        |
| `IntersectUnion<T>`        | Converts a Union type to an Intersect type                                     |
| `Intersect<T>`             | Converts an array of multiple types into an intersection type                  |
| `Union<T>`                 | Converts an array of multiple types into an union type                         |
| `Exact<T>`                 | Forbids any extra properties as extension on an object                         |
| `PickByValue<T, V`>        | Picks all properties of an object with type `V`                                |
| `ExcludeByValue<T, V>`     | Pick all properties of an object except those of type `V`                      |
| `DictObj<T>`               | Obtain a dictionary version of an object type                                  |
| `Required<T, K>`           | Makes all given properties of an object type required to be present            |
| `Inverted<T>`              | Obtain an object type from a constant type where values and keys are switched  |
| `Without<T>`               | Obtain an object type without the properties of the base object type           |
| `Table<T>`                 | Shortcut type for `Record<string, T>`                                          |
| `Obj`                      | Any object type                                                                |
| `Index`                    | Any valid object key type                                                      |
| `Values<T>`                | All value types of an object                                                   |
| `Entry<T>`                 | An object entry(key-value-pair)                                                |
| `Dict`                     | A simple dictionary object                                                     |
| `DeepPartial<T>`           | Partial type that makes properties of nested objects also partial              |
| `DeepReadonly<T>`          | Readonly type that makes properties of nested objects also readonly            |
| `Asserted<T>`              | Makes all properties of an object required and not null.                       |
| `Mutable<T>`               | Makes all properties of an object mutable.                                     |
| `Immutable<T>`             | Makes all properties of an object immutable.                                   |
| `JSONable<T>`              | Generic object type for objects having the method `toJSON()`                   |
| `Stringifyable<T>`         | Generic object type for objects having the method `toString()`                 |
| `HasValue<T>`              | Generic object type for objects having the method `valueOf()`                  |
| `TypedArray`               | Type including all non-big typed arrays.                                       |
| `BigTypedArray`            | Type including all big typed arrays.                                           |
| `Arr<T>`                   | Any array type including typed arrays.                                         |
| `NumArray`                 | Any array type for all arrays with number values.                              |
| `TypedArrayArgs`           | Any arguments for typed arrays.                                                |
| `StrictTypedArrayArgs<T>`  | Like `TypedArrayArgs` with a defined restriction of which `TypedArray`to allow |
| `WithReadonly<T>`          | Helper type to define generic arguments allowing `readonly T[]`                |
| `TypedArrayConstructor<T>` | Constructor type of a typed array                                              |
| `View`                     | Any array buffer data view                                                     |
| `ViewConstructor`          | Any data view constructor                                                      |
| `MaybeArray<T>`            | Type that can also appear as an array of that type.                            |
| `Fn`                       | Any function                                                                   |
| `MaybeFn`                  | Type that can also appear as a return type of a function                       |
| `AsyncFn<R>`               | Any `async` function                                                           |
| `VoidFn`                   | Any `void` function                                                            |
| `Args<T>`                  | The arguments of a function                                                    |
| `TimeoutFn`                | A function used inside `setTimeout`                                            |
| `ClearTimeoutFn`           | `clearTimeout` as function                                                     |
| `IntervalFn`               | A function used inside `setInterval`                                           |
| `Timeout`                  | Robust timeout id type                                                         |
| `Interval`                 | Robust interval id type                                                        |
| `Decorator`                | Generic decorator function                                                     |
| `SingleMap`                | A 1:1 mapper function                                                          |
| `DoubleMap`                | A 2:1 mapper function                                                          |
| `Resolver<T>`              | The `resolve` function from a `Promise` callback.                              |
| `Rejector<T>`              | The `reject` function from a `Promise` callback.                               |
| `PromiseCallback<T>`       | The function used inside a `Promise`                                           |
| `ResolvedValue<T>`         | The resolved promise function return value.                                    |
| `OnResolved<V, R>`         | Handler callback for a resolved value.                                         |
| `OnRejected<T>`            | Handler callback for a rejected value.                                         |
| `Class<T>`                 | Any class                                                                      |
| `Instantiable`             | Interface describing any object type that can be instantiated                  |
| `Constructor`              | Any constructor function                                                       |
| `ClassConstructor<T, A>`   | Generic constructor function of an actual class.                               |
| `ElementValue`             | Primitive data types that can be a value of an HTMLElement                     |
| `SVGAttr`                  | Primitive data types that can be a value of an SVG element                     |
| `SVGRenderElement`         | Any SVG element that can be directly rendered                                  |
| `PainterElement`           | Any SVG element that paints other svg elements                                 |
| `RenderTag`                | Any SVG element tag of an `SVGRenderElement`                                   |
| `PainterTag`               | Any SVG element tag of an `PainterElement`                                     |
| `TextTag`                  | Any SVG element tag of svg text elements                                       |
| `SVGTag`                   | Any SVG element tag                                                            |
| `CursorType`               | Any browser cursor type                                                        |
| `FontDesign`               | Any browser font design                                                        |
| `FontType`                 | Any string font type                                                           |
| `FontWeight`               | Any string font weight                                                         |
| `FontVariant`              | Any font variant string                                                        |
| `TextAnchor`               | Any text anchoring string                                                      |
| `DominantBaseLine`         | Any dominant baseline alignment string                                         |
| `AlignmentBaseLine`        | Any baseline alignment string                                                  |
| `StrokeLineCap`            | Any SVG path stroke line cap string                                            |
| `PaintOrder`               | Any SVG painter element paint order                                            |
| `GradientDirection`        | Any SVG painter gradient direction                                             |
| `CSSProperties`            | Object to hold any css style properties                                        |
| `StylePseudo`              | Helper object allowing to hold pseudo selector properties                      |
| `EventType`                | Any event type                                                                 |
| `EventMap<T>`              | Generic type for any event map of an html element                              |
| `JSONObj`                  | Generic JSON object                                                            |
| `JSONArray`                | Generic JSON array value                                                       |
| `JSONValue`                | Generic JSON value                                                             |
| `PackageJson`              | Complete, deeply typed and documented `package.json` type.                     |