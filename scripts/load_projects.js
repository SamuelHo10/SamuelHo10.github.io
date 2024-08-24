var projects = [
    { name: "LED Cube", image: "./img/led_cube.png", link: "./projects/led_cube.html", year: 2022, tags: ["Hobby Project", "Electronics"] }

];

function get_column_string(project) {
    if (project !== undefined) {
        tag_str = ""
        for (let i = 0; i < project.tags.length; i++) {
            tag_str += `<span class="tag">${project.tags[i]}</span>`
        }
        return `
        <div class="column">
            <div class="box">
                <a href="${project.link}", style="text-decoration: none; color: black;">
                <img src="${project.image}" style="width: 100%;">
                <div class="text">
                    <h3 style="margin-top: 15px; margin-bottom:15px;">${project.name} - ${project.year}</h3>
                    <div class="tags">
                        ${tag_str}
                    </div>
                </div>
                </a>
            </div>
        </div>
        `
    }
    return `
    <div class="column">
    </div>
    `
}

function generate_project_list() {
    for (let i = 0; i < projects.length; i += 2) {
        let project1 = projects[i];
        let project2 = i + 1 >= projects.length ? undefined : projects[i + 1];
        $("body").append(
            `
            <div class="row">
                ${get_column_string(project1)}
                ${get_column_string(project2)}
            </div>
            `
        )

    }
}

generate_project_list();