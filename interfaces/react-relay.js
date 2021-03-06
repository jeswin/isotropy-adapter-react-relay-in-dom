declare module "react-relay" {
  declare function injectNetworkLayer(networkLayer: Object) : void

  declare class DefaultNetworkLayer {
    constructor(graphqlUrl: string) : void;
  }

  declare class Environment {
    constructor() : void;
    injectNetworkLayer(layer: any): void;
  }
}


declare module "react-relay/lib/RelayStoreData" {
  declare function getDefaultInstance(): any
}
