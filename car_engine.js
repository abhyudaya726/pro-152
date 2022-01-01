AFRAME.registerComponent("car",{
    schema:{
        clickCounter:{type:"number",default:0}
    },
    update:function(){
        window.addEventListener("click", e =>{
            this.data.clickCounter += 1
            if(this.data.clickCounter === 1){
                const position = {x:-15,y:1.5,z:0}
                this.el.setAttribute("position",position)
            }
            else if(this.data.clickCounter === 2){
                const position = {x:-30,y:1.5,z:0}
                this.el.setAttribute("position",position)
            }
            else if(this.data.clickCounter === 3){
                const position = {x:0,y:1.5,z:0}
                this.el.setAttribute("position",position)
            }
            else if(this.data.clickCounter === 4){
                this.data.clickCounter = 0
            }
        });
    }
}
)