export default class KeyControls {
    constructor () {
        this.keys = {};
      // Bind event handlers
        document.addEventListener("keydown", e => {
        if ([37,38,39,40].indexOf(e.which) >= 0) {
            e.preventDefault();
        }
        this.keys[e.which] = true;
        }, false);
  
    document.addEventListener("keyup", e => {
        this.keys[e.which] = false;
    }, false); 
    }
    // Handle key actions
    get action() {
        return this.keys[/*32*/"Space"];
    }

    get x () {
        // left arrow or A key
        if (this.keys[/*37*/"ArrowLeft"] || this.keys[/*65*/ "KeyA"]) {
          return -1;
        }
        // right arrow or D key
        if (this.keys[/*39*/"ArrowRight"] || this.keys[/*68*/"KeyD"]) {
          return 1;
        }
        return 0;
      }
      
      get y () {
        // up arrow or W key
        if (this.keys[/*38*/"ArrowUp"] || this.keys[/*87*/"KeyW"]) {
          return -1;
        }
        // down arrow or S key
        if (this.keys[/*40*/"ArrowDown"] || this.keys[/*83*/"KeyS"]) {
          return 1;
        }
        return 0;
      }

  }

  // export default KeyControls;