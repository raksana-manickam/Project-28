class Stone{
    constructor(x,y,r){
        var opt = {
            isStatic:false,
            friction : 1,
            density : 1.2
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body = Bodies.circle(this.x,this.y,this.r/2,opt);
        this.image = loadImage("images/stone.png");
        World.add(world,this.body)
        
    }
    display(){
        var stonepos = this.body.position;
        push()
        translate(stonepos.x,stonepos.y)
        ellipseMode(RADIUS)
        imageMode(CENTER);
        image(this.image,0, 0,this.r*2,this.r*2);
        pop()
    }
}