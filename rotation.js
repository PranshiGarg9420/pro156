AFRAME .registerComponent('diver-rotation-reader',{
    schema:{
        speedOfRotation:{type:"number", default:0},
        speedOfAscent:{type:'number',default:0}
    },
    init: function(){
        window.addEventListener("keydown", (e)=>{
            this.data.speedOfRotation=this.el.getAttribute("rotation");
            this.data.speedOfAscent=this.el.getAttribute("position");

            var rotation_diver=  this.data.speedOfRotation;
            var pos_diver= this.data.speedOfAscent;

            if(e.key === "ArrowRight"){
                if(rotation_diver.x < 10){
                    rotation_diver.x += 0.5;
                    this.el.setAttribute("rotation",rotation_diver);
                }
            }
            if(e.key === "ArrowLeft"){
                if(rotation_diver.x > -10){
                    rotation_diver.x -= 0.5;
                    this.el.setAttribute("rotation",rotation_diver);
                }
            }
            if(e.key === "ArrowUp"){
                if(rotation_diver.z > -360){
                    rotation_diver.z += 0.01;
                    this.el.setAttribute("rotation",rotation_diver);
                }
                if(rotation_diver.y < 20){
                    pos_diver.y += 0.01;
                    this.el.setAttribute("position",pos_diver);
                }
            }
            if(e.key === "ArrowDown"){
                if(rotation_diver.z < 360){
                    rotation_diver.z -= 0.5;
                    this.el.setAttribute("rotation",rotation_diver);
                }
                if(pos_diver.y > -20){
                    pos_diver.y -= 0.01;
                    this.el.setAttribute("position",pos_diver);
                }
            }
        });
    }
});