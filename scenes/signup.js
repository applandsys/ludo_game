class signup extends Phaser.Scene{


    constructor(){
        super('signup');
    }

    preload(){
        this.load.html('signupform', 'assets/signup.html');
    }

    create(){

        var text = this.add.text(10, 10, 'Please login to play', { color: 'white', fontFamily: 'Arial', fontSize: '32px '});

        var element = this.add.dom(400, 600).createFromCache('signupform');
    
        element.setPerspective(800);
    
        element.addListener('click');
    }


}