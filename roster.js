document.addEventListener('DOMContentLoaded', () => {


    const grid = document.getElementById('rosterGrid')

    const render = list => {
        grid.innerHTML = ''
        list. forEach(p => {
            const col = document.createElement('div')
            col.className = 'col-6 col-lg-2 mt-5'

            col.innerHTML =`
            <div class="card h-100 shadow-sm">
              <div class="card border-primary">
                <div class="card-header">
                    <img src="${p.photo}" alt="${p.species} ${p.nickname}" class="card-img-top"
                    <div class="card-body text-center"></div>
                    <h3 class="card-title mb-1">${p.species} ${p.nickname}</h5>
                    <div class="badge badge-position badge-pos-${p.elements}">${p.elements}</div>
                    <p class="small text-muted mb-0"> ${p.stability}</p>
                    ${p.button}
          </div>
          </div>

            ` 
            grid.appendChild(col)
        })
    }




    render(players)
    grid.addEventListener('click', function (e) {
  if (e.target.classList.contains('show-info-btn')) {
    const index = e.target.getAttribute('data-player-index')
    const player = players[index]
    showPlayerModal(player)
  }
})
function showPlayerModal(player) {
  document.getElementById('modalPhoto').src = player.photo
  document.getElementById('modalName').textContent = `${player.species} ${player.nickname}`
  document.getElementById('modalPosition').textContent = player.elements
  document.getElementById('modalAge').textContent = player.stability
}


})

 