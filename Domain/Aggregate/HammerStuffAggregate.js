class HammerStuffAggregate{
    constructor(engineer){
        this.engineer = engineer;
    }

    hammerStuff(){
        var hammer = this.engineer.toolbox.find(function(tool){
            return tool.name === "Hammer";
        });
        hammer.use();
    }
}