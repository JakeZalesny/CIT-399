import pop from "./pop/index.js";
import Sprite from "./pop/Sprite.js";
const { TileSprite, Texture, math } = pop;

const idle = new Texture("./res/Meow-Knight/Meow-Knight/Meow-Knight_idle.png");
const run = new Texture("./res/Meow-Knight/Meow-Knight/Meow-Knight_Run.png");
const attack_1 = new Texture("./res/Meow-Knight/Meow-Knight/Meow-Knight_Attack_1.png");
const attack_2 = new Texture("./res/Meow-Knight/Meow-Knight/Meow-Knight_Attack_2.png");
const attack_3 = new Texture("./res/Meow-Knight/Meow-Knight/Meow-Knight_Attack_3.png");
const attack_4 = new Texture("./res/Meow-Knight/Meow-Knight/Meow-Knight_Attack_4.png");
const dodge = new Texture("./res/Meow-Knight/Meow-Knight/Meow-Knight_Dodge.png");
const jump = new Texture("./res/Meow-Knight/Meow-Knight/Meow-Knight_Jump.png");
const damaged = new Texture("./res/Meow-Knight/Meow-Knight/Meow-Knight_Take_Damage.png");
const death = new Texture("./res/Meow-Knight/Meow-Knight/Meow-Knight_Death.png");

const animations = {
    "idle":idle, 
    "run":run,
    "attack_1":attack_1,
    "attack_2":attack_2,
    "attack_3":attack_3,
    "attack_4":attack_4,
    "dodge":dodge,
    "jump":jump,
    "damaged":damaged,
    "death":death
}

class Player extends TileSprite {
    constructor(controls) {
        super(animations["idle"], 16, 16);
        this.pos = {x:0, y: 0};
        this.anchor = { x: 0, y: 0 };
        this.scale = { x: 2, y: 2 };
        this.pivot = { x: 0, y: 0 };
        this.rotation = 0;
        this.controls = controls
    }

    update() {
        const {x, y} = this.controls;
        if(x) {
            this.texture = animations["run"];
        }
    }
}

export default Player; 