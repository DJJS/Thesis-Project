var Collider = pc.createScript('collider');

// initialize code called once per entity
Collider.prototype.initialize = function () {
    this.entity.collision.on('collisionstart', this.onCollisionStart, this);
    this.entity.collision.on('collisionstart', this.onBump, this);
};

Collider.prototype.onCollisionStart = function (result) {
<<<<<<< HEAD

    if (result.other.name === 'Other') {
        console.log('playing collision sound!');
        this.entity.sound.play("collide");



=======
    if (result.other.rigidbody) {
        // console.log('playing collision sound!');
        // console.log('RESULT >>>>>>>>>', result.other);
        this.entity.sound.play("collide");

    }
>>>>>>> Add collision tracking
};

Collider.prototype.onBump = function (result) {
  if (result.other.name === "Other") {
    // console.log('RESULT.OTHER >>>>>', result.other);
    // console.log('THIIIIIS', this);
    this.entity.lastCollision = result.other.id;
    console.log('LAST COLLISION >>>>', this.entity.lastCollision);
  }
}