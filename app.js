const grid = document.querySelector('#grid');

for(let i = 0; i < 100; i++){
    const box = document.createElement('div');
    if(i !== 20){
        box.className = 'box'
    }else{
        box.className = 'apple'
    }
    // box.append(i);
    grid.append(box);
}