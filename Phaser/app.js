var game = new Phaser.Game(800, 600, Phaser.AUTO,'',{preload:preload, create:create, update:update});
var score = 0;
var lives = 3;

function preload(){
       game.load.image('sky','assets/sky.png');
       game.load.image('ground','assets/platform.png');
       game.load.image('star', 'assets/star.png');
       game.load.spritesheet('dude','assets/dude.png',32,48)
       game.load.spritesheet('baddie','assets/baddie.png',32,32);
}

function create(){
//turn on physics
game.physics.startSystem(Phaser.Physics.ACRADE);

//create sky 
game.add.sprite(0,0,'sky');
//create a group of platforms
platforms = game.add.physicsGroup();
platforms.enableBody = true;
//create ground
var ground = platforms.create(0,550, 'ground');
ground.scale.setTo(2,2);
ground.body.imovable = true;
//create ledges
var ledge = platforms.create(400, 400, 'ground');
platforms.enableBody = true;
ledge = platforms.create();
ledge.body.imovable = true;

//setup text
var style = {font: "bold 32px Arial ", fill:  "#fff"};

//create and position score
scorelabel = game.add.text(300,560,"Score:",style);
scoretext = game.add.text(420,560,score,style);
lifelabel = game.add.text(10,5,"Lives:",style);
lifelabel = game.add.text(120,5,lives,style);



//lesson 8
player = game.add.sprite(32,400, 'dude')
    player.animations.add('left',[0,1,2,3],10,true);
    player.animations.add('right',[5,6,7,8],10,true);
    game.physics.arcade.enable(player);
    player.body.gravity.y= 300;
    player.body.bounce.y= 0.5;
    player.body.collideWorldBounds = true;

enemy1 = game.add.sprite(32,400, 'baddie')
    enemy1.animations.add('left',[0,1],10,true);
    enemy1.animations.add('right',[2,3],10,true);
    game.physics.arcade.enable(enemy1);
    enemy1.body.gravity.y= 300;
    enemy1.body.bounce.y= 0.5;
    enemy1.body.collideWorldBounds = true;

      //create stars
      stars = game.add.physicsGroup();
      stars.enableBody = true;
      //use a loop to  create 12 stars
      for(var i = 0; i< 12; i ++){
      	var star = stars.create(i * 70,0, 'star');
      	star.body.gravity.y = 200;
      	star.body.bounce.y =0.7 + Math.random()* 0.2;
      }

      //create keyboard entries
      cursors = game.input.keyboard.createCursorKeys();


}



function update(){
   game.physics.acrade.collide(player,platforms);
   game.physics.acrade.collide(stars,platforms);
    game.physics.acrade.collision(enemy1,platforms);

    //set player velocity to  if no events
    player.body.velocity.x = 0;

    if(cursors.left.isDown){
    	//move left
    	player.animation.play('left');
    	player.body.velocity.x = 150;
    }else{
     player.animations.stop();
     player.frame = 4;
    }
if(cursors.up.isDown && player.body.touching.down){
	player.body.velocity.y = -300
    }

}