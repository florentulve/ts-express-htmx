import { Gitlab as _Gitlab } from "@gitbeaker/rest";

class GitlabApi {
    readonly _gitlab;

    constructor() {
        this._gitlab = new _Gitlab({
            host: "https://gitlab.com/",
            token: `${process.env["GIT_TOKEN"]}`,
        });
    }

    getProjectsWithinGroup() {
        this._gitlab.Groups.allProjects(1, {
            pagination: "offset",
            perPage: 40,
            maxPages: 2,
            showExpanded: true,
        });
    }

    getGroup(search: string) {
        this._gitlab.Groups.all({
            allAvailable: true,
            search: search,
        });
    }
}
