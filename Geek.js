class Geek
{
    constructor()
    {
        this.index = null;        
        this.name = null;       
      }
      getCount(){
        var playerCountRef = database.ref('PlayerCount');
        playerCountRef.on('value',(data)=>{
          playerCount = data.val();
        })
      }
    
      updateCount(count){
        database.ref('/').update({
            PlayerCount: count
        });
      }

      update(){
        var playerInfo = "Geeks/Geek"+playerCount;
        database.ref(playerInfo).set({
          Name:geekName         
        });
      }

      static getPlayerInfo(){
        var playerInfoRef = database.ref('Geeks');
        playerInfoRef.on("value",(data)=>{
          allGeeks = data.val();
        })
      }
}