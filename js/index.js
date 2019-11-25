let areaBasis = [
    ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
    ['wall', 'floor', 'floor', 'floor', 'floor', 'wall', 'floor', 'floor', 'floor', 'floor', 'wall'],
    ['wall', 'floor', 'floor', 'floor', 'floor', 'wall', 'floor', 'floor', 'floor', 'floor', 'wall'],
    ['wall', 'floor', 'floor', 'floor', 'floor', 'wall', 'floor', 'floor', 'floor', 'floor', 'wall'],
    ['wall', 'floor', 'floor', 'floor', 'floor', 'wall', 'floor', 'floor', 'floor', 'floor', 'wall'],
    ['wall', 'wall', 'door', 'wall', 'wall', 'wall', 'wall', 'door', 'wall', 'wall', 'wall'],
    ['wall', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'wall'],
    ['wall', 'hero', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'end-door'],
    ['wall', 'wall', 'door', 'wall', 'wall', 'wall', 'wall', 'door', 'wall', 'wall', 'wall'],
    ['wall', 'floor', 'floor', 'floor', 'floor', 'wall', 'floor', 'floor', 'floor', 'floor', 'wall'],
    ['wall', 'floor', 'floor', 'floor', 'floor', 'wall', 'floor', 'floor', 'floor', 'floor', 'wall'],
    ['wall', 'floor', 'floor', 'floor', 'floor', 'wall', 'floor', 'floor', 'floor', 'floor', 'wall'],
    ['wall', 'floor', 'floor', 'floor', 'floor', 'wall', 'floor', 'floor', 'floor', 'floor', 'wall'],
    ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall']
];

areaDisplay(areaBasis);

function areaDisplay(areaBasis) {
    let preparedArea = '<table id="area">';
    for(let i = 0; i < areaBasis.length; i++) {
        preparedArea += '<tr>';
        for(let j = 0; j < areaBasis[i].length; j++) {
            switch(areaBasis[i][j]) {
                case 'wall':
                    preparedArea += '<td class="td wall"></td>';
                    break;
                case 'floor':
                    preparedArea += '<td class="td floor"></td>';
                    break;
                case 'door':
                    preparedArea += '<td class="td door"></td>';
                    break;
                case 'end-door':
                    preparedArea += '<td class="td door"></td>';
                    break;
                case 'hero':
                    preparedArea += '<td class="td hero"></td>';
                    break;
                default:
                    preparedArea += '<td class="td undefined"></td>';
                    break;
            }
        }
        preparedArea += '</tr>';
    }
    preparedArea += '</table>';
    document.getElementById('dropHere').innerHTML += preparedArea;
}