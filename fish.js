AFRAME .registerComponent('fish',{
    init: function(){
        for(var i=1; i<=10;i++){
            const id=`fish${i}`;

            const posX= Math.random()*100+ -50;
            const posY= Math.random()*5 +5 ;
            const posZ= Math.random()*60 + -40;
            const position={x:posX, y:posY, z:posZ};
            this.createFish(id,position);
        }
    },
    createFish: function(id,position){
        const fishesModel= document.querySelector('#fishModel');
        const fish1= document.createElement("a-entity");

        fish1.setAttribute('id',id);
        fish1.setAttribute('position', position);
        fish1.setAttribute('rotation', {x:0, y:180, z:0});
        fish1.setAttribute('scale',{x:0.33, y:0.3, z:0.3});
        fish1.setAttribute('gltf-model','fish/scene.gltf');
        fish1.setAttribute('animation',{
            property: "position",
            to:"100 10 -20",
            dur: 20000,
            loop:"true"
        });
        fish1.setAttribute("animation-mixer",{});
        // fish1.setAttribute('static-body',{
        //     shape:"sphere",
        //     sphereRadius:2
        // });
        // fish1.setAttribute("game-play", {
        //     elementId: `#${id}`,
        // });
        fishesModel.appendChild(fish1);
    }
});