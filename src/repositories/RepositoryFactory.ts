import EventsRepository from "./eventsRepository";

export interface Repositories {
    events: EventsRepository;
    // other repositories
};

function getRepositories(): Repositories {
    const events = new EventsRepository();
    const repositories: Repositories = {
        events,
    };
    return repositories;
};

export default getRepositories;