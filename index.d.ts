declare module 'typestar' {
    /*
     *			BASIC
     */
    /**
     * 	Type describing that the value can be any primitive type
     */
    export type Primitive = string | number | boolean | bigint | symbol
    /**
     * 	Type describing that the value can be any primitive read data type.
     */
    export type PrimitiveData = string | number | boolean
    /**
     *  Type describing the possibility of a value not being defined.
     */
    export type Nullish<T> = T | null | undefined
    /**
     * 	Type that combines the overarching concept of the JavaScript global object.
     */
    export type GlobalObject = Window & typeof globalThis
    /*
     *			HELPER
     */
    /**
     *  Ensures you can only omit keys that exist in the original type.
     *
     *  Helps avoid accidental key omissions.
     */
    export type OmitStrict<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
    /**
     *  Converts a union (|) of types to an intersection (&).
     *
     *  Useful for merging multiple types into one.
     */
    export type IntersectUnion<U> = (U extends any ? (x: U) => any : never) extends (x: infer I) => any ? I : never
    /**
     *  Converts the types of an array of elements to an intersection (&).
     */
    export type ArrayToIntersect<T extends unknown[]> = IntersectUnion<T[number]>
    /**
     *  Converts the types of an array of elements to an union (|).
     */
    export type ArrayToUnion<T extends unknown[]> = T[number]
    /**
     *  Creates a union of a literal type (L) and a broader base type (B).
     *
     *  Useful for adding specific literal values to a generic type.
     */
    export type LiteralUnion<L, B> = L | (B & {})
    /**
     *  Enforces that an object has exactly the keys defined in the type.
     *
     *  Useful for stricter API typings.
     */
    export type Exact<T> = { [K in keyof T]: T[K] } & {
        [K in Exclude<keyof any, keyof T>]?: never
    }
    /**
     *  Picks keys from `T` whose values are of type `ValueType`.
     */
    export type PickByValue<T, ValueType> = {
        [P in keyof T as T[P] extends ValueType ? P : never]: T[P]
    }
    /**
     *  Excludes keys from `T` whose values are of type `ValueType`.
     */
    export type ExcludeByValue<T, ValueType> = {
        [P in keyof T as T[P] extends ValueType ? never : P]: T[P]
    }
    /**
     *  Converts all properties of `T` to their string representation.
     */
    export type Stringified<T> = {
        [P in keyof T]: string
    }
    /**
     *  Helper type describing a given object with given keys to be present.
     */
    export type Required<T, Keys extends keyof T = keyof T> = Partial<T> & { [K in Keys]-?: Pick<T, K> }[Keys]
    /**
     *  Converts a tuple type to a union of its element types.
     */
    export type TupleToUnion<T extends any[]> = T[number]
    /**
     *  Converts a union type to a tuple.
     */
    export type UnionToTuple<U> = (U extends any ? (arg: U) => void : never) extends (arg: infer T) => void ? [...UnionToTuple<Exclude<U, T>>, T] : []
    /**
     *  Swaps keys and values of an object type.
     */
    export type Invert<T extends Table<string | number>> = {
        [P in keyof T as `${T[P]}`]: P
    }
    /**
     *  Extracts the first element from a tuple type.
     */
    export type Head<T extends any[]> = T extends [infer H, ...any[]] ? H : never
    /**
     *  Removes the first element from a tuple type.
     */
    export type Tail<T extends any[]> = T extends [any, ...infer Rest] ? Rest : never
    /**
     *  Extracts the last element of a tuple type.
     */
    export type Last<T extends any[]> = T extends [...any[], infer L] ? L : never

    /**
     *  Creates a new type by excluding certain keys from the original type.
     */
    export type Without<T, Keys extends keyof T> = {
        [Prop in keyof T as Exclude<Prop, Keys>]: T[Prop]
    }
    /**
     *  Excludes index signatures (string and number keys) from a type.
     *
     *  @template T - The type to filter.
     */
    export type NotIndexable<T> = {
        [P in keyof T as string extends P ? never : number extends P ? never : P]: T[P]
    }
    /**
     *  A utility type to check if two types `X` and `Y` are exactly the same.
     *  Returns `A` if the types are equal, and `B` if they are not.
     *
     *  @template X - The first type to compare.
     *  @template Y - The second type to compare.
     *  @template A - The type to return if `X` and `Y` are equal. Defaults to `X`.
     *  @template B - The type to return if `X` and `Y` are not equal. Defaults to `never`.
     */
    export type IfEquals<X, Y, A = X, B = never> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? A : B
    /*
     *			OBJECTS
     */
    /**
     * 	Type describing any object. The sole purpose of this type is to get rid of type "any" warnings.
     */
    export type AnyObject = Record<any, any>
    /**
     *  Type describing a lookup table like structure.
     */
    export type Table<T> = Record<string, T>
    /**
     * 	Type describing any type that can be used as an index key of an object.
     */
    export type IndexKey = string | symbol | number
    /**
     *  Helper type extracting all types of an interface as a union.
     */
    export type Values<T extends AnyObject> = T[keyof T]
    /**
     * 	Type specifying an entry from `Object.property.entries`.
     */
    export type Entry<T extends AnyObject> = [keyof T, Values<T>]
    /**
     * 	Type specifying all entries from `Object.property.entries`
     */
    export type Entries<T extends AnyObject> = Entry<T>[]
    /**
     * 	Type describing a dictionary data structure like object.
     */
    export type Dict = Table<string>
    /**
     *   Helper type that cleans up a lot of object types.
     */
    export type Prettify<T> = {
        [K in keyof T]: T[K]
    }
    /**
     * 	Type that marks every property, even deep ones, as partial.
     */
    export type DeepPartial<T> = T extends any ? (T extends any[] ? T : T extends object ? { [P in keyof T]?: DeepPartial<T[P]> } : T) : never
    /**
     *  Recursively makes all properties of an object type readonly.
     *
     *  Useful for ensuring immutability in state management.
     */
    export type DeepReadonly<T> = {
        readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P]
    }
    /**
     * 	Type that marks every property as present with a valid value.
     */
    export type Asserted<T> = {
        [P in keyof T]-?: NonNullable<T[P]>
    }
    /**
     *  Converts all readonly properties of a type into mutable properties.
     */
    export type Mutable<T> = {
        -readonly [Prop in keyof T]: T[Prop]
    }
    /**
     *  Converts all properties of a type into readonly properties.
     */
    export type Immutable<T> = {
        readonly [Prop in keyof T]: T[Prop]
    }
    /**
     *  Converts all properties of a type into boolean flags.
     */
    export type OptionFlags<T> = {
        [Prop in keyof T]: boolean
    }
    /**
     *  Generates getter methods for all properties of a type.
     */
    export type Getters<T> = {
        [Prop in keyof T as `get${Capitalize<Prop & string>}`]: () => T[Prop]
    }
    /**
     *  Generates setter methods for all properties of a type.
     */
    export type Setters<T> = {
        [Prop in keyof T as `set${Capitalize<Prop & string>}`]: (value: T[Prop]) => void
    }
    /**
     *  Extracts the keys of `T` that are optional.
     */
    export type OptionalKeys<T> = {
        [K in keyof T]-?: {} extends Pick<T, K> ? K : never
    }[keyof T]
    /**
     *  Extracts the keys of `T` that are required.
     */
    export type RequiredKeys<T> = {
        [K in keyof T]-?: {} extends Pick<T, K> ? never : K
    }[keyof T]
    /**
     * ReadonlyKeys<T>
     * Extracts the readonly keys from an object type.
     *
     * Useful for differentiating mutable and immutable properties.
     */
    export type ReadonlyKeys<T> = {
        [K in keyof T]: IfEquals<{ [P in K]: T[K] }, { -readonly [P in K]: T[K] }, never, K>
    }[keyof T]
    /**
     * Extracts the mutable keys from an object type.
     */
    export type MutableKeys<T> = {
        [K in keyof T]: IfEquals<{ [P in K]: T[K] }, { -readonly [P in K]: T[K] }, K, never>
    }[keyof T]
    /**
     *  Extracts keys of `T` whose values match the type `V`.
     */
    export type KeysMatching<T, V> = {
        [K in keyof T]: T[K] extends V ? K : never
    }[keyof T]
    /**
     *  Helper type describing an object that can be safely converted to a JSON string.
     */
    export type Jsonfyable<T> = T & { toJSON: (...args: any[]) => string }
    /**
     *  Helper type describing an object that can be safely stringified.
     */
    export type Stringifyable<T> = T & { toString: (...args: any[]) => string }

    /**
     * Extends a type to ensure it includes a `valueOf` method that is often used for internal javascript processes.
     */
    export type HasValue<T> = T & { valueOf: (...args: any[]) => number }
    /*
     *			ARRAY
     */
    /**
     * 	Type describing any typed array
     */
    export type TypedArray =
        | Int8Array
        | Int16Array
        | Int32Array
        | Uint8Array
        | Uint16Array
        | Uint32Array
        | Float32Array
        | Float64Array
        | Uint8ClampedArray
    /**
     * 	Type describing any bigint typed array
     */
    export type BigTypedArray = BigInt64Array | BigUint64Array
    /**
     *  Type describing any kind of array like structure for algorithms allowing any kind of array to be able to perform certain actions.
     */
    export type AnyArray<T> = T[] | TypedArray | BigTypedArray
    /**
     *  Type describing an arbitrary array holding numbers.
     */
    export type AnyNumberArray = TypedArray | number[]
    /**
     *  Type describing any argument that can be used to instantiate a TypedArray.
     */
    export type TypedArrayArgs = TypedArray | ArrayBuffer | MaybeArray<number>
    /**
     *  Stricter type variant of `TypedArrayArgs` that forbids instantiating a new TypedArray from another kind, like `Uint8Array` -> `Float64Array`.
     */
    export type StrictTypedArrayArgs<T> = T | ArrayBuffer | MaybeArray<number>
    /**
     *  Utility type that wraps other array types to include `readonly` arrays.
     */
    export type WithReadonly<T> = T extends (infer U)[] ? T | readonly U[] : T
    /**
     *  Fixed TypedArray constructor supporting every argument without type errors caused by TypeScript's overload limitation.
     */
    export type TypedArrayConstructor<T extends TypedArray> = new (
        buffer?: ArrayBuffer | TypedArray | MaybeArray<number>,
        byteOffset?: number,
        length?: number
    ) => T
    /**
     * Represents various ArrayBuffer views including typed arrays and DataView.
     */
    export type View = ArrayBufferLike | DataView | TypedArray
    /**
     * Represents constructors for ArrayBuffer-related views.
     */
    export type ViewConstructor = ArrayBufferConstructor | DataViewConstructor | TypedArrayConstructor<any>
    /**
     * 	Type describing the possibility of an value being an array or not.
     */
    export type MaybeArray<T> = T | T[]
    /**
     *  Flattens an array type into its element type or leaves the type unchanged if it's not an array.
     */
    export type Flat<T> = T extends unknown[] ? T[number] : T

    /**
     *  Wraps a type in an array.
     */
    export type AsArray<T> = T extends unknown ? T[] : never
    /**
     *  Ensures the type is wrapped as an array, preserving union behavior.
     */
    export type AsJointArray<T> = [T] extends [unknown] ? T[] : never
    /**
     * Split<S, D>
     * Splits a string `S` into substrings separated by `D`. This literal types the `string.split()` result.
     */
    export type Split<S extends string, D extends string> = S extends `${infer T}${D}${infer U}` ? [T, ...Split<U, D>] : [S]
    /**
     *  Combines two tuples `T1` and `T2` into a tuple of pairs.
     */
    export type Zip<T1 extends any[], T2 extends any[]> = T1 extends [infer H1, ...infer R1]
        ? T2 extends [infer H2, ...infer R2]
            ? [[H1, H2], ...Zip<R1, R2>]
            : []
        : []
    /*
     *			FUNCTION
     */
    /**
     *  Type describing an arbitrary function.
     */
    export type AnyFn = (...args: any[]) => any
    /**
     *  Type describing an argument that can easy be a static value or the result of a dynamically calculated function.
     */
    export type MaybeFn<T> = T | (() => T)
    /**
     *  Type describing a function with arbitrary arguments but with a defined result type.
     */
    export type TypedFn<T> = (...args: any[]) => T
    /**
     * 	Type describing a function with arbitrary arguments and result of the same defined type.
     */
    export type LinearMapperFn<T> = (...args: T[]) => T
    /**
     * 	Type describing a function with arbitrary arguments of one type and a result of another type.
     */
    export type MapperFn<R, A = any> = (...args: A[]) => R
    /**
     * 	Type describing a function that runs asynchronously.
     */
    export type AsyncFn<R = unknown, A = any> = (...args: A[]) => Promise<R>
    /**
     *  Type describing a function with no return value an no arguments.
     */
    export type VoidFn<T = any> = (...args: any[]) => T
    /**
     *  Type specifying the arguments of a function.
     */
    export type Args<T> = T extends (...args: infer A) => any ? A : never
    /**
     *  Type describing the function inside a `setTimeout` function.
     */
    export type TimeoutFn = (handler: TimerHandler, timeout?: number | undefined, ...args: any[]) => number
    /**
     *  Type describing a function that clears a timeout.
     */
    export type ClearTimeoutFn = (timeoutId: string | number | Timeout | undefined) => void
    /**
     *  Type describing the function inside a `setInterval` function.
     */
    export type IntervalFn = (handler: TimerHandler, timeout?: number, ...args: any[]) => number
    /**
     *   Type describing a variable to store a timeout inside. (i.e. the timeout id.)
     */
    export type Timeout = ReturnType<typeof setTimeout>
    /**
     *   Type describing a variable to store an interval inside. (i.e. the interval id.)
     */
    export type Interval = ReturnType<typeof setInterval>
    /**
     *  Type describing a function that acts as a decorator to a class method.
     */
    export type Decorator = (target: unknown, propertyKey: string, descriptor: PropertyDescriptor) => void
    /**
     *  Represents a function that maps a single argument to another value.
     */
    export type SingleMap<T> = (x: T) => T
    /**
     *  Represents a function that maps two arguments to a value.
     */
    export type DoubleMap<T> = (x: T, y: T) => T
    /*
     *			PROMISE
     */
    /**
     *  A function that resolves a promise with a given value or another promise.
     *
     *  @template T - The type of the value being resolved.
     */
    export type Resolver<T> = (value: T | PromiseLike<T>) => void
    /**
     *  A function that rejects a promise with a given reason.
     */
    export type Rejector = (reason?: Error | PromiseLike<Error>) => void
    /**
     *  General type of an ECMAScript Promise.
     *
     *  @template T - The resolved value
     */
    export type PromiseCallback<T> = (resolve: Resolver<T>, reject: Rejector) => void
    /**
     *  Extracts the resolved value type of a promise, including chained promises.
     *
     *  @template T - The promise type.
     */
    export type ResolvedValue<T> = T extends PromiseLike<infer U> ? U | T : never
    /**
     *  Represents a handler function for a resolved promise, returning a value or another promise.
     *
     *  @template TValue - The type of the resolved value.
     *  @template TResult - The type of the return value or the next promise in the chain.
     */
    export type OnResolved<TValue, TResult = TValue> = Nullish<(value: TValue) => TResult | PromiseLike<TResult>>
    /**
     *  Represents a handler function for a rejected promise, returning a value or another promise.
     *
     *  @template T - The type of the return value or the next promise in the chain.
     */
    export type OnRejected<T = never> = Nullish<(reason?: Error | PromiseLike<Error>) => T | PromiseLike<T>>
    /*
     *			CLASS
     */
    /**
     *  Represents a class type, combining both the static and instance sides of a class.
     *
     *  @template T - The instance type of the class.
     */
    export type Class<T> = { prototype: T } & T
    /**
     *  sRepresents a type that can be instantiated, such as a class or constructor function.
     *
     *  The `Instantiable` interface ensures that the type includes:
     *  - A `prototype` object, which defines the properties and methods available on instances.
     *  - A `constructor` function, which is used to create new instances of the type.
     */
    export interface Instantiable {
        /** The prototype object associated with the instantiable type. */
        prototype: {}
        /** The constructor function used to create instances of the type. */
        constructor: Function
    }
    /**
     *  Represents any constructor type.
     */
    export type AnyConstructor = new (...args: any[]) => any
    /**
     * Represents a constructor of a specific Instantiable `T` with any arguments.
     */
    export type Constructor<T> = new (...args: any[]) => T
    /**
     *  Represents a constructor for a specific class or type with specific arguments.
     *
     *  @template T - The class or type the constructor creates.
     */
    export type ClassConstructor<T, A extends any[] = any[]> = new (...args: A) => T
    /**
     *  Extracts the return type of a constructor of a class `T`.
     */
    export type ConstructorReturnType<T> = T extends new (...args: any[]) => infer C ? C : any
    /**
     *  Extracts names of methods and properties from a class prototype `T`.
     */
    export type PrototypeKey<T> = T extends { prototype: any } ? keyof T['prototype'] : never
    /**
     *  Excludes a set of reserved types or values from a given type.
     *
     *  The resulting type excludes any overlap between `TType` and `TReserved`.
     *  This is useful for filtering out specific reserved values or types while retaining the rest of the base type.
     *
     *  @template TType - The base type from which reserved types will be excluded.
     *  @template TReserved - The types or values to be excluded from `TType`.
     *
     *  This type works symmetrically to ensure that:
     *  - If `TReserved` extends `TType`, it is excluded.
     *  - If `TType` extends `TReserved`, it is excluded.
     */
    export type ExcludeReserved<TType, TReserved> = (TReserved extends TType ? never : TType) & (TType extends TReserved ? never : TType)
    /*
     *			WEB
     */
    /**
     * Represents a value that an HTML or SVG element property can take.
     * These are commonly primitive types or `undefined`.
     */
    export type ElementValue = boolean | number | string | undefined
    /**
     * Represents an attribute value for an SVG element, which can be a string, number, or null.
     */
    export type SVGAttr = null | number | string
    /**
     * Represents a dictionary of properties where keys are strings
     * and values conform to the `ElementValue` type.
     */
    export type Props = Table<ElementValue>
    /**
     * Represents all valid SVG elements used for rendering.
     */
    export type SVGRenderElement =
        | SVGAElement
        | SVGCircleElement
        | SVGDefsElement
        | SVGGElement
        | SVGGeometryElement
        | SVGGraphicsElement
        | SVGImageElement
        | SVGLineElement
        | SVGPathElement
        | SVGPolygonElement
        | SVGRectElement
        | SVGSVGElement
        | SVGTSpanElement
        | SVGTextContentElement
        | SVGTextElement
        | SVGTextPathElement
        | SVGTextPositioningElement
    /**
     * Represents SVG elements that deal with gradient or pattern painting.
     */
    export type PainterElement = SVGLinearGradientElement | SVGPatternElement | SVGRadialGradientElement
    /**
     * Represents the subset of SVG tags used for rendering.
     */
    export type RenderTag = 'a' | 'circle' | 'g' | 'line' | 'path' | 'rect' | TextTag
    /**
     * Represents the SVG tags associated with painting, such as gradients and patterns.
     */
    export type PainterTag = 'linearGradient' | 'pattern' | 'radialGradient'
    /**
     * Represents the SVG tags used for text-related operations.
     */
    export type TextTag = 'text' | 'tspan'
    /**
     * Represents all valid SVG tags, including painter-specific and render-specific tags.
     */
    export type SVGTag = 'defs' | 'stop' | 'svg' | PainterTag | RenderTag
    /**
     *  Type holding all the different states of the cursor.
     */
    export type CursorType = 'default' | 'auto' | 'crosshair' | 'pointer' | 'move' | 'text' | 'wait'
    /**
     * 	Type holding all the different font design css values.
     */
    export type FontDesign = 'inherit' | 'initial' | 'italic' | 'normal' | 'oblique'
    /**
     * 	Type holding all the different font type css values.
     */
    export type FontType = 'normal' | 'italic' | 'bold' | 'bold italic'
    /**
     * 	Type holding all the different string font weight css values.
     */
    export type FontWeight = 'inherit' | 'auto' | 'lighter' | 'normal' | 'bold' | 'bolder'
    /**
     * Represents font variant values for text rendering.
     */
    export type FontVariant =
        | 'all-petite-caps'
        | 'all-small-caps'
        | 'historical-forms'
        | 'none'
        | 'normal'
        | 'petite-caps'
        | 'ruby'
        | 'slashed-zero'
        | 'small-caps'
        | 'titling-case'
        | 'unicase'
        | null
    /**
     * Represents the alignment of text within an SVG text element.
     */
    export type TextAnchor = 'end' | 'inherit' | 'middle' | 'start' | null
    /**
     * Represents the dominant baseline alignment of text in SVG.
     */
    export type DominantBaseline =
        | 'alphabetic'
        | 'auto'
        | 'central'
        | 'hanging'
        | 'ideographic'
        | 'inherit'
        | 'mathematical'
        | 'middle'
        | 'no-change'
        | 'reset-size'
        | 'text-after-edge'
        | 'text-before-edge'
        | 'use-script'
        | null
    /**
     * Represents the alignment baseline values for SVG text elements.
     */
    export type AlignmentBaseline =
        | 'after-edge'
        | 'auto'
        | 'baseline'
        | 'before-edge'
        | 'central'
        | 'hanging'
        | 'ideographic'
        | 'inherit'
        | 'mathematical'
        | 'middle'
        | 'text-after-edge'
        | 'text-before-edge'
        | null
    /**
     * Represents possible stroke line cap styles for svg paths.
     */
    export type StrokeLineCap = 'butt' | 'round' | 'square' | null
    /**
     * Represents the order in which painting operations occur.
     */
    export type PaintOrder = 'fill' | 'stroke' | null
    /**
     * Represents gradient directions in an SVG context.
     */
    export type GradientDirection = 'bottom' | 'bottomLeft' | 'bottomRight' | 'left' | 'right' | 'top' | 'topLeft' | 'topRight' | null
    /**
     *  Represents a map of standard CSS properties and their possible values.
     */
    export type CSSProperties = {
        [P in keyof CSSStyleDeclaration]?: string | number
    }
    /**
     *  Extends a style object with pseudo-classes and pseudo-elements.
     */
    export type StyleWithPseudo<T> = T & {
        [P in `:${string}` | `::${string}`]?: T
    }
    /**
     * 	Type holding all the possible event listener type strings
     */
    export type EventType =
        | 'blur'
        | 'change'
        | 'click'
        | 'contextmenu'
        | 'devicemotion'
        | 'deviceorientation'
        | 'dblclick'
        | 'dragend'
        | 'dragover'
        | 'keydown'
        | 'keypress'
        | 'keyup'
        | 'mousedown'
        | 'mousemove'
        | 'mouseout'
        | 'mouseover'
        | 'mouseup'
        | 'resize'
        | 'touchend'
        | 'touchmove'
        | 'touchstart'
        | 'wheel'
    /**
     * EventMap<T>
     * Represents a map of event types for a DOM element.
     *
     * Useful for strongly typing event listeners.
     */
    export type EventMap<T extends HTMLElement> = T extends HTMLBodyElement
        ? HTMLBodyElementEventMap
        : T extends HTMLMediaElement
        ? HTMLMediaElementEventMap
        : T extends HTMLVideoElement
        ? HTMLVideoElementEventMap
        : T extends HTMLFrameElement | HTMLFrameSetElement
        ? HTMLFrameSetElementEventMap
        : HTMLElementEventMap
    /**
     *	Type holding all the different html canvas blend mode strings.
     */
    export type BlendMode =
        | GlobalCompositeOperation
        | 'alpha'
        | 'add'
        | 'subtract'
        | 'threshold'
        | 'gray'
        | 'opaque'
        | 'invert'
        | 'posterize'
        | 'dilate'
        | 'erode'
        | 'blur'
    /*
     *			OTHER
     */
    /**
     *  Represents a JSON object with string keys and values that are valid JSON types.
     */
    export type JsonObject = { [Key in string]?: JsonValue }
    /**
     *  Represents a JSON array where each element is a valid JSON value.
     */
    export type JsonArray = JsonValue[]
    /**
     *  Represents a JSON primitive value.
     */
    export type JsonPrimitive = string | number | boolean | null
    /**
     *  Represents any valid JSON value.
     */
    export type JsonValue = JsonPrimitive | JsonObject | JsonArray
    /**
     *  Type describing the source type of a JavaScript project.
     */
    export type SourceType = 'commonjs' | 'module' | 'script'
    /**
     * Specifies subdirectories within the package.
     * Useful for organizational purposes or for tooling.
     */
    export interface PackageJsonDirectories {
        /** The location of library files. */
        lib?: string
        /** The location of executable binaries. */
        bin?: string
        /** The location of manual pages. */
        man?: string
        /** The location of documentation files. */
        doc?: string
        /** The location of example files. */
        example?: string
        /** The location of test files. */
        test?: string
    }
    /**
     * Interface representing information about the repository hosting the package's source code.
     */
    export interface PackageJsonRepo {
        /** The type of the repository (e.g., "git"). */
        type?: 'git'
        /** The URL of the repository. */
        url?: string
        /** The subdirectory within the repository containing the package. */
        directory?: string
    }
    /**
     * Represents a person or organization in the `package.json` file.
     */
    export interface PackageJsonPerson {
        /** The name of the person or organization. */
        name: string
        /** The email address of the person or organization. */
        email?: string
        /** The URL of the person or organization's website. */
        url?: string
    }
    /**
     * Represents a bug reporting address in the `package.json` file.
     */
    export interface PackageJsonAddress {
        /** The URL where bugs can be reported. */
        url?: string
        /** The email address to report bugs to. */
        email?: string
    }

    /**
     *  Configuration options for publishing a package to a registry.
     *  These settings are applied during the `npm publish` process.
     */
    export interface PackageJsonPublishConfig {
        /**
         *  The URL of the registry where the package should be published.
         *  If not specified, the default npm registry (`https://registry.npmjs.org`) is used.
         */
        registry?: string
        /**
         *  The access level for the published package.
         *  - `public`: The package is visible to everyone.
         *  - `restricted`: The package is private and requires authentication to access.
         */
        access?: 'public' | 'restricted'
        /**
         *  The distribution tag for the published package.
         *  Common tags include `latest`, `beta`, `alpha`, etc.
         *
         *  @default 'latest'
         */
        tag?: string
        /**
         *  Whether to enable provenance for the published package.
         *  Provenance provides verifiable metadata about the package's origin and build process,
         *  enhancing security and trust. This is used for CI purposes.
         */
        provenance?: boolean
    }
    /**
     * Represents an exports entry to define fine grained exports for ESM and CJS type projects.
     */
    export interface PackageJsonExportsEntry {
        /** Types used for both CJS and ESM imports. */
        types: string
        /** Path to the file used for ESM projects. */
        import: string
        /** Path to the file used for CJS projects. */
        require: string
    }

    /**
     * Represents the structure of a `package.json` file in a javascript project.
     */
    export interface PackageJson {
        /** The name of the package. */
        name: string
        /** The version of the package, following semantic versioning. */
        version: string
        /** A short description of the package's purpose. */
        description?: string
        /** A space-separated list of keywords describing the package. */
        keywords?: string
        /** The URL of the package's homepage. */
        homepage?: string
        /** Information about where to report bugs related to the package. */
        bugs?: PackageJsonAddress
        /** The license under which the package is distributed (e.g., "MIT"). */
        license?: string
        /** The author of the package. Can be a string or an object with detailed information. */
        author?: string | PackageJsonPerson
        /** A list of contributors to the package. Each entry can be a string or an object with detailed information. */
        contributors?: (string | PackageJsonPerson)[]
        /** A list of files to include when publishing the package. */
        files?: string[]
        /** The entry point of the package for Node.js. */
        main?: string
        /** The entry point for browser environments, if different from `main`. */
        browser?: string
        /** A map of command-line executables provided by the package. */
        bin?: Dict
        /** The path to the package's manual pages. */
        man?: string
        /** The entry point for TypeScript type declarations. */
        types?: string
        /** Specifies whether the package uses ES modules or CommonJS. */
        type: SourceType
        /**
         * Indicates whether the package has side effects during tree-shaking.
         *
         * - `true`: All files have side effects.
         * - `false`: No files have side effects.
         * - `string[]`: An array of file paths that should be considered as having side effects.
         */
        sideEffects?: boolean | string[]
        /** A map of module export paths to their corresponding files. */
        exports: Table<PackageJsonExportsEntry>
        /** Specifies the package manager and version used to install dependencies for the project. */
        packageManager?: string
        /**
         * Specifies subdirectories within the package.
         * Useful for organizational purposes or for tooling.
         */
        directories?: PackageJsonDirectories
        /** Information about the repository hosting the package's source code. */
        repository?: PackageJsonRepo
        /** Information about how to publish the project. */
        publishConfig?: PackageJsonPublishConfig
        /** A set of custom scripts defined for the package. */
        scripts?: Dict
        /** A configuration object for custom settings. */
        config?: Dict
        /** The package's runtime dependencies and their versions. */
        dependencies?: Dict
        /** Development dependencies used only during development. */
        devDependencies?: Dict
        /** Peer dependencies expected to be provided by the consuming project. */
        peerDependencies?: Dict
        /** Optional dependencies that do not cause installation failure if unavailable. */
        optionalDependencies?: Dict
        /** A list of dependencies to include in the package bundle. */
        bundledDependencies?: string[]
        /**
         *  Resolutions for specific versions of dependencies in the dependency tree.
         *  Used to enforce or override specific dependency versions in monorepos or projects with nested dependencies.
         */
        resolutions?: Dict
        /** Specifies the versions of Node.js required to run the package. */
        engines?: Dict
        /** A list of operating systems supported by the package. */
        os?: string[]
        /** A list of CPU architectures supported by the package. */
        cpu?: string[]
    }
    /**
     *  Extensions to the Node.js `process` object in Electron.
     *  This interface only includes additional properties specific to Electron's main and renderer processes.
     */
    export interface ElectronProcess {
        /**
         *  When the app is started by being passed as a parameter to the default Electron executable,
         *  this property is `true` in the main process, otherwise it is `undefined`.
         */
        defaultApp?: boolean
        /**
         *  A `boolean`, `true` when the current renderer context is the "main" renderer frame.
         *  If you want the ID of the current frame, use `webFrame.routingId`.
         */
        isMainFrame?: boolean
        /**
         *  For Mac App Store build, this property is `true`, for other builds it is `undefined`.
         */
        mas?: boolean
        /**
         *  A `boolean` that controls ASAR support inside your application.
         *  Setting this to `true` will disable the support for `asar` archives in Node's built-in modules.
         */
        noAsar?: boolean
        /**
         *  A `boolean` that controls whether deprecation warnings are printed to `stderr`.
         *  Setting this to `true` will silence deprecation warnings.
         */
        noDeprecation?: boolean
        /**
         * A `string` representing the path to the resources directory.
         */
        resourcesPath?: string
        /**
         *  When the renderer process is sandboxed, this property is `true`, otherwise it is `undefined`.
         */
        sandboxed?: boolean
        /**
         *  A `boolean` that indicates whether the current renderer context has `contextIsolation` enabled.
         *  It is `undefined` in the main process.
         */
        contextIsolated?: boolean
        /**
         *  A `boolean` that controls whether deprecation warnings will be thrown as exceptions.
         *  Setting this to `true` will throw errors for deprecations.
         */
        throwDeprecation?: boolean
        /**
         *  A `boolean` that controls whether deprecations printed to `stderr` include their stack trace.
         *  Setting this to `true` will print stack traces for deprecations.
         */
        traceDeprecation?: boolean
        /**
         *  A `boolean` that controls whether process warnings printed to `stderr` include their stack trace.
         *  Setting this to `true` will print stack traces for process warnings (including deprecations).
         */
        traceProcessWarnings?: boolean
        /**
         *  A `string` representing the current process's type. Possible values:
         *  - `browser` - The main process
         *  - `renderer` - A renderer process
         *  - `worker` - In a web worker
         *  - `utility` - In a node process launched as a service
         */
        type?: 'browser' | 'renderer' | 'worker' | 'utility'
        /**
         *  An object containing version strings for Electron and Chrome.
         */
        versions: {
            /**
             *  A `string` representing Chrome's version string.
             */
            chrome: string
            /**
             *  A `string` representing Electron's version string.
             */
            electron: string
        }
        /**
         *  If the app is running as a Windows Store app (appx), this property is `true`,
         *  otherwise it is `undefined`.
         */
        windowsStore?: boolean
        /**
         *  A `string` (optional) representing a globally unique ID of the current JavaScript context.
         *  Each frame has its own JavaScript context. When contextIsolation is enabled, the isolated
         *  world also has a separate JavaScript context.
         *  This property is only available in the renderer process.
         */
        contextId?: string
    }
}
