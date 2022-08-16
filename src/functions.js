function init(option) {
    switch (option) {
        case 1:
            reviewHours(document.getElementById('hours').value, [2, 3, 8, 1, 4]);
            break;
        case 2:
            reviewHours(document.getElementById('hours').value, [2, 10, 4, 1])
            break;
    }
    
}
function reviewHours(hours, result) {
    pairs = []
    for (let index = 0; index < result.length; index++) {
        for (let subindex = 0; subindex < result.length; subindex++) {
            if(index!=subindex && (result[index]+result[subindex])<=hours){
                pairs[(result[index]+result[subindex])] = [index, subindex].sort(function(a, b) {
                    return a - b;
                })
            }
            
        }
        
    }
    const iterator = pairs.keys();
    maxHours = 0;
    for (const key of iterator) {
        if(maxHours<key && pairs[key])
            maxHours = key;
    }
    alert('Los cursos en ['+pairs[maxHours].toString()+'] son '+maxHours+' horas, es la mejor opción.');
}