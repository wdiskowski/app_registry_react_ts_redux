import { RegistryCollection } from "../entities/RegistryCollection";
import { findRegistryDataMock } from "./registryMock";
import { fetchData } from "./fetch/fetchService"

export function findRegistryData(url: string, onSuccess: (applications: RegistryCollection) => void) {
    fetchData(url, registry =>  onSuccess(registry), findRegistryDataMock);
}



