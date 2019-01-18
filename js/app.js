function myFirstComponent(fn,ln,ag){
    this.firstName = fn;
    this.lastName = ln;
    this.age = ag;
    this.ele = document.createElement("div");
    document.querySelector(".wrapper").appendChild(this.ele);
}

myFirstComponent.prototype.write = function() {
    this.ele.innerHTML =  "My name is " + this.firstName + " " + this.lastName + " and I am " + this.age + " years old.";
};

var dood = new myFirstComponent("Dood", "Brodia", 35);

dood.write();