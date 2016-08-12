class Engineer{
    constructor(id, name, area, toolbox){
        this.id = id;
        this.name = name;
        this.area = area;
        this.toolbox = toolbox;
    };

    addTool(tool){
        this.toolbox.push(tool);
    }
}