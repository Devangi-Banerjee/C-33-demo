class Snow
{
    constructor(x,y)
    {
        var options={
            restitution: 0.1,
            friction: 0.001,
            isStatic: false

        }
        this.snow = Bodies.circle(x,y,5,options);
        this.radius = 5;

        var rand= Math.round(random(1,2));
        var img;

        if(rand === 1)
        {
            img = "snow4.webp";
        }
        else
        {
            img = "snow5.webp";
        }

        this.image = loadImage(img);
        World.add(World, this.snow);

    }

    updateY()
    {
        if(this.snow.position.y > height)
        {
              Matter.Body.setPosition(this.snow , {x:random(0,500) , y:random(0,500)})
        }
    }

    showDrop()
    {
        fill("white");
        imageMode(CENTER);
        image(this.image , this.snow.position.x, this.snow.position.y , 10 , 10);
    }
    
}