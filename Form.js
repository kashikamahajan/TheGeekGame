class Form
{
    constructor()
    {
        this.nameInput=createInput('Enter Geek Name');
        this.button=createButton('Start Quiz');
        this.greeting=createElement('h2');
        this.title=createElement('h2');

    }

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.nameInput.hide();
        this.title.hide();
    }

    display()
    {
       
        this.title.html("The Geek Game");
        this.title.position(400,50);

        this.nameInput.position(400,200);
        this.button.position(400,235);

        
        this.button.mousePressed(()=>{
            
            
            this.nameInput.hide();
            this.button.hide();
            geekName=this.nameInput.value();
            playerCount+=1;
            geek.index = playerCount;
            var cfr=frameCount;
            geek.updateCount(playerCount);
            geek.update();
            this.greeting.html("Hello " +geekName+" !!")
            this.greeting.position(350,150);
            
          });

    }
    

    
    
}