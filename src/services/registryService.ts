import { Registry } from "../entities/Registry";
import { findRegistryDataMock } from "./registryMock";
import { fetchData } from "./fetch/fetchService"

export function findRegistryData(url: string, onSuccess: (applications: Registry) => void) {
    fetchData(url, registry =>  onSuccess(registry), findRegistryDataMock);
}



