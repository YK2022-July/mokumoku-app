import type { Events } from "@/models/Events";
import Repository from "./Repository";
import type { AxiosPromise } from "axios";

const resource = "action/datastore_search?resource_id=278639b4-8f7f-4bda-b36d-55711f19552b";

export default class EventsRepository{
    public getTopFive(): AxiosPromise<Events> {
        return Repository.get(`${resource}&limit=5`);
    }
};