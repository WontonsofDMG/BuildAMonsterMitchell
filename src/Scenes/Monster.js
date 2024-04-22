class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.rightleg = this.add.sprite(this.bodyX+60, this.bodyY+130, "monsterParts", "leg_greenA.png");
        my.sprite.leftleg = this.add.sprite(this.bodyX-60, this.bodyY+130, "monsterParts", "leg_greenA.png");
        my.sprite.leftleg.flipX = true;
        my.sprite.righthorn = this.add.sprite(this.bodyX+50, this.bodyY-70, "monsterParts", "detail_green_horn_small.png");
        my.sprite.lefthorn = this.add.sprite(this.bodyX-50, this.bodyY-70, "monsterParts", "detail_green_horn_small.png");
        my.sprite.lefthorn.flipX = true;
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");
        my.sprite.eye = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "eye_human_blue.png");
        my.sprite.rightarm = this.add.sprite(this.bodyX+90, this.bodyY+60, "monsterParts", "arm_greenA.png");
        my.sprite.leftarm = this.add.sprite(this.bodyX-90, this.bodyY+60, "monsterParts", "arm_greenA.png");
        my.sprite.leftarm.flipX = true;
        my.sprite.smile = this.add.sprite(this.bodyX, this.bodyY+50, "monsterParts", "mouth_closed_happy.png");
        my.sprite.fangs = this.add.sprite(this.bodyX, this.bodyY+50, "monsterParts", "mouthB.png");
        my.sprite.fangs.visible = false;
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        if (this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A).isDown) {
        my.sprite.rightleg.x -= 1;
        my.sprite.leftleg.x -= 1;
        my.sprite.righthorn.x -= 1;
        my.sprite.lefthorn.x -= 1;
        my.sprite.body.x -= 1;
        my.sprite.eye.x -= 1;
        my.sprite.rightarm.x -= 1;

        my.sprite.smile.x -= 1;
        my.sprite.fangs.x -= 1;
    }
    if (this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D).isDown) {
        my.sprite.rightleg.x += 1;
        my.sprite.leftleg.x += 1;
        my.sprite.righthorn.x += 1;
        my.sprite.lefthorn.x += 1;
        my.sprite.body.x += 1;
        my.sprite.eye.x += 1;
        my.sprite.rightarm.x += 1;
        my.sprite.leftarm.x += 1;
        my.sprite.smile.x += 1;
        my.sprite.fangs.x += 1;
    }
        
        this.input.keyboard.on('keydown-S', function () {
            my.sprite.smile.visible = true;
            my.sprite.fangs.visible = false;
        });
        this.input.keyboard.on('keydown-F', function () {
            my.sprite.smile.visible = false;
            my.sprite.fangs.visible = true;
        });
    }

}