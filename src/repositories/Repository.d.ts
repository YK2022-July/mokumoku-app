import Repositories from "RepositoryFactory";

declare module "@vue/runtime-core" {
    export interface ComponentCustomProperties
{
    $repository: Repositories;
}}