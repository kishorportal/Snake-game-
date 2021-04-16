class Snake{
    constructor(){
        this.snakeBody =[
            [4,1],
            [4,2],
            [4,3],
            [4,4],
        ]
    }
    move(direction){
        const delta ={
            up:[-1,0],
            down:[1,0],
            right:[0,1],
            left:[0,-1]
        };
        const currentHead = this.snakeBody[this.snakeBody.length-1];
        const [currentRow,currentColumn] = currentHead;
        const[changeRow,changeColumn] = delta[direction];
        const newHead = [currentRow+changeRow,currentColumn+changeColumn];
        this.snakeBody.push(newHead);
        this.snakeBody.shift();

    }
    draw(){
        const grid = [];
        for(var i = 0;i < 10;i++){
            const row = [];
            for(var j = 0;j<10;j++){
                row.push(' ');
            }
            grid.push(row);
        }
        this.snakeBody.forEach(pos =>{
            const [row,col] = pos;
            grid[row][col] = 'O'
        });
        console.clear();
        grid.forEach((row)=> console.log(row.join('|')))
        // console.log(grid);
    }
    play(){
        const stdin = process.stdin;
        stdin.setRawMode(true);
        stdin.resume();
        stdin.setEncoding("utf8");
        stdin.on("data",(keypress)=>{
            if(keypress === 'w') this.move('up');
            if(keypress === 'a') this.move('left');
            if(keypress === 's') this.move('right');
            if(keypress === 'd') this.move('down');
            if(keypress === '\u0003') process.exit();
            this.draw();
        });
    }
}
const game = new Snake();
game.play();


