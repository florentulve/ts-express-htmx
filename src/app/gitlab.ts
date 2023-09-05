import { Gitlab } from "@gitbeaker/rest";

class GitlabClient {
    constructor() {}
}
export function getAllProjects() {
    const api = new Gitlab({
        host: "https://gitlab.com/",
        token: `${process.env["GIT_TOKEN"]}`,
    });
    const p = api.Projects.all({
        archived: false,
        pagination: "offset",
        perPage: 40,
        maxPages: 2,
        showExpanded: true,
    });

    p.then(({ data, paginationInfo }) => {
        data.forEach((e) => {
            console.log(e.name);
        });
    });
}
