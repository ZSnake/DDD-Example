class WrenchStuffAggregate{
    constructor(engineer){
        this.engineer = engineer;
    }

    wrenchStuff(){
        var wrench = this.engineer.find(function(tool){
            return tool.name === "Wrench";
        });
        wrench.use();
    }
}