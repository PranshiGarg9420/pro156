AFRAME .registerComponent('coins',{
    init: function(){
        for(var i=1; i<=10;i++){
            const id=`coin${i}`;

            const posX= Math.random()*100+ -50;
            const posY= Math.random()*5 +5 ;
            const posZ= Math.random()*60 + -40;
            const position={x:posX, y:posY, z:posZ};
            this.createCoin(id,position);
        }
    },
    createCoin: function(id,position){
        const coinsModel= document.querySelector('#coinModel');
        const coin1= document.createElement("a-entity");

        coin1.setAttribute('id',id);
        coin1.setAttribute('position', position);
        coin1.setAttribute('material','color',"#ff9100");
        coin1.setAttribute('geometry',{primitive:'circle', radius:1});
        coin1.setAttribute('animation',{
            property: "rotation",
            to:"0 360 0",
            dur: 1000,
            loop:"true"
        });
        // coin1.setAttribute('static-body',{
        //     shape:"sphere",
        //     sphereRadius:2
        // });
        // coin1.setAttribute("game-play", {
        //     elementId: `#${id}`,
        // });
        coinsModel.appendChild(coin1);
    }
});