/** Extends Navigator with User Agent Client Hints. Note: `userAgentData` may be undefined in unsupported browsers. */
interface NavigatorUA {
    readonly userAgentData?: NavigatorUAData
}

interface Navigator extends globalThis.Navigator, NavigatorUA {}
interface WorkerNavigator extends NavigatorUA, globalThis.WorkerNavigator {}

/** https://wicg.github.io/ua-client-hints/#dictdef-navigatoruabrandversion */
interface NavigatorUABrandVersion {
    readonly brand: string
    readonly version: string
}

/** Valid high-entropy hint values for `getHighEntropyValues`. */
type UAHighEntropyHint = 'architecture' | 'bitness' | 'formFactor' | 'fullVersionList' | 'model' | 'platformVersion' | 'uaFullVersion' | 'wow64'

/** https://wicg.github.io/ua-client-hints/#navigatoruadata */
interface NavigatorUAData extends UALowEntropyJSON {
    /** Retrieves high-entropy UA data for the specified hints. */
    getHighEntropyValues: (hints: UAHighEntropyHint[]) => Promise<UADataValues>
    /** Returns low-entropy UA data as JSON. */
    toJSON: () => UALowEntropyJSON
}

/** https://wicg.github.io/ua-client-hints/#dictdef-uadatavalues */
interface UADataValues {
    readonly architecture?: string
    readonly bitness?: string
    readonly brands?: readonly NavigatorUABrandVersion[]
    readonly formFactor?: readonly string[]
    readonly fullVersionList?: readonly NavigatorUABrandVersion[]
    readonly mobile?: boolean
    readonly model?: string
    readonly platform?: string
    readonly platformVersion?: string
    /** @deprecated in favour of fullVersionList */
    readonly uaFullVersion?: string
    readonly wow64?: boolean
}

/** https://wicg.github.io/ua-client-hints/#dictdef-ualowentropyjson */
interface UALowEntropyJSON {
    readonly brands: readonly NavigatorUABrandVersion[]
    readonly mobile: boolean
    readonly platform: string
}
