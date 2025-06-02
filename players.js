const players = [
    {
        species: 'Ghazt',
        nickname: 'template',
        elements: 'IMGS/Plasma_Element.png',
        stability: '1',
        photo: 'IMGS/Ghazt.webp',
         button: '<button onclick="showProfile(\'Ghazt\')" class="btn btn-primary">View Profile</button>'
     },
     {
        species: 'Grumpyre',
        nickname: 'template',
        elements: 'Shadow',
        stability: '2',
        photo: 'https://picsum.photos/300/150',
        button: '<button onclick="showProfile(\'Grumpyre\')" class="btn btn-primary">View Profile</button>'
    },
     {
        species: 'Reebro',
        nickname: 'template',
        elements: 'Mech',
        stability: '3',
        photo: 'https://picsum.photos/300/150',
        button: '<button onclick="showProfile(\'Reebro\')" class="btn btn-primary">View Profile</button>'
    },
     {
        species: 'Jeeode',
        nickname: 'template',
        elements: 'Crystal',
        stability: '4',
        photo: 'https://picsum.photos/300/150',
        button: '<button onclick="showProfile(\'Jeeode\')" class="btn btn-primary">View Profile</button>'
    },
     {
        species: 'Humbug',
        nickname: 'template',
        elements: 'IMGS/Poison_Element.webp',
        stability: '5',
        photo: 'https://picsum.photos/300/150',
         button: '<button onclick="showProfile(\'Humbug\')" class="btn btn-primary">View Profile</button>'
    },

//Double Elementals
    {
        species: 'Whisp',
        nickname: 'template',
        elements: 'Plasma + Shadow',
        stability: '6',
        photo: 'https://picsum.photos/300/150',
         button: '<button onclick="showProfile(\'Whisp\')" class="btn btn-primary">View Profile</button>'
    },
    {
        species: 'Nebulob',
        nickname: 'template',
        elements: 'Plasma + Mech',
        stability: '8',
        photo: 'https://picsum.photos/300/150',
         button: '<button onclick="showProfile(\'Nebulob\')" class="btn btn-primary">View Profile</button>'
    },
    {
        species: 'Sox',
        nickname: 'template',
        elements: 'Plasma + Crystal',
        stability: '10',
        photo: 'https://picsum.photos/300/150',
         button: '<button onclick="showProfile(\'Sox\')" class="btn btn-primary">View Profile</button>'
    },
    {
        species: 'Jellbilly',
        nickname: 'template',
        elements: 'Plasma + Poison',
        stability: '12',
        photo: 'https://picsum.photos/300/150',
         button: '<button onclick="showProfile(\'Jellbilly\')" class="btn btn-primary">View Profile</button>'
    },
    {
        species: 'Arackulele',
        nickname: 'template',
        elements: 'Shadow + Mech',
        stability: '10',
        photo: 'https://picsum.photos/300/150',
         button: '<button onclick="showProfile(\'Arackulele\')" class="btn btn-primary">View Profile</button>'
    },
    {
        species: 'BooDoo',
        nickname: 'template',
        elements: 'Shadow + Crystal',
        stability: '12',
        photo: 'https://picsum.photos/300/150',
         button: '<button onclick="showProfile(\'BooDoo\')" class="btn btn-primary">View Profile</button>'
    },
    {
        species: 'Kazellion',
        nickname: 'template',
        elements: 'Shadow + Poison',
        stability: '14',
        photo: 'https://picsum.photos/300/150',
         button: '<button onclick="showProfile(\'Kazellion\')" class="btn btn-primary">View Profile</button>'
    },
    {
        species: 'Bellowfish',
        nickname: 'template',
        elements: 'Mech + Crystal',
        stability: '14',
        photo: 'https://picsum.photos/300/150',
         button: '<button onclick="showProfile(\'Bellowfish\')" class="btn btn-primary">View Profile</button>'
    },
    {
        species: 'Dragong',
        nickname: 'template',
        elements: 'Mech + Poison',
        stability: '16',
        photo: 'https://picsum.photos/300/150',
         button: '<button onclick="showProfile(\'Dragong\')" class="btn btn-primary">View Profile</button>'
    },
    {
        species: 'Fungpray',
        nickname: 'template',
        elements: 'Crystal + Poison',
        stability: '18',
        photo: 'https://picsum.photos/300/150',
         button: '<button onclick="showProfile(\'Fungpray\')" class="btn btn-primary">View Profile</button>'
    },

//Triple Elementals

    {
        species: 'Yooreek',
        nickname: 'template',
        elements: 'Plasma + Shadow + Mech',
        stability: '18',
        photo: 'https://picsum.photos/300/150',
         button: '<button onclick="showProfile(\'Yooreek\')" class="btn btn-primary">View Profile</button>'
    },
    {
        species: 'Meebkin',
        nickname: 'template',
        elements: 'Plasma + Shadow + Crystal',
        stability: '21',
        photo: 'https://picsum.photos/300/150',
         button: '<button onclick="showProfile(\'Meebkin\')" class="btn btn-primary">View Profile</button>'
    },
    {
        species: 'Blarret',
        nickname: 'template',
        elements: 'Plasma + Shadow + Poison',
        stability: '24',
        photo: 'https://picsum.photos/300/150',
         button: '<button onclick="showProfile(\'Blarret\')" class="btn btn-primary">View Profile</button>'
    },
    {
        species: 'Gaddzooks',
        nickname: 'template',
        elements: 'Plasma + Mech + Crystal',
        stability: '24',
        photo: 'https://picsum.photos/300/150',
         button: '<button onclick="showProfile(\'Gaddzooks\')" class="btn btn-primary">View Profile</button>'
    },
    {
        species: 'Auglur',
        nickname: 'template',
        elements: 'Plasma + Mech + Poison',
        stability: '27',
        photo: 'https://picsum.photos/300/150',
         button: '<button onclick="showProfile(\'Auglur\')" class="btn btn-primary">View Profile</button>'
    },
    {
        species: 'Flasque',
        nickname: 'template',
        elements: 'Plasma + Crystal + Poison',
        stability: '30',
        photo: 'https://picsum.photos/300/150',
         button: '<button onclick="showProfile(\'Flasque\')" class="btn btn-primary">View Profile</button>'
    },
    {
        species: 'Nitebear',
        nickname: 'template',
        elements: 'Shadow + Mech + Crystal',
        stability: '27',
        photo: 'https://picsum.photos/300/150',
         button: '<button onclick="showProfile(\'Nitebear\')" class="btn btn-primary">View Profile</button>'
    },
    {
        species: 'Piplash',
        nickname: 'template',
        elements: 'Shadow + Mech + Poison',
        stability: '30',
        photo: 'https://picsum.photos/300/150',
         button: '<button onclick="showProfile(\'Piplash\')" class="btn btn-primary">View Profile</button>'
    },
    {
        species: 'X-rt',
        nickname: 'template',
        elements: 'Shadow + Crystal + Poison',
        stability: '33',
        photo: 'https://picsum.photos/300/150',
         button: '<button onclick="showProfile(\'X-rt\')" class="btn btn-primary">View Profile</button>'
    },
    {
        species: 'Teeter-Tauter',
        nickname: 'template',
        elements: 'Mech + Crystal + Poison',
        stability: '36',
        photo: 'https://picsum.photos/300/150',
         button: '<button onclick="showProfile(\'Teeter-Tauter\')" class="btn btn-primary">View Profile</button>'
    },

//Quad Elementals

    {
        species: 'Whaill',
        nickname: 'template',
        elements: 'Plasma + Shadow + Mech + Crystal',
        stability: '40',
        photo: 'https://picsum.photos/300/150',
         button: '<button onclick="showProfile(\'Whaill\')" class="btn btn-primary">View Profile</button>'
    },
    {
        species: 'Vhenshun',
        nickname: 'template',
        elements: 'Plasma + Shadow + Mech + Poison',
        stability: '44',
        photo: 'https://picsum.photos/300/150',
         button: '<button onclick="showProfile(\'Vhenshun\')" class="btn btn-primary">View Profile</button>'
    },
    {
        species: 'Pentumbra',
        nickname: 'template',
        elements: 'Plasma + Shadow + Crystal + Poison',
        stability: '48',
        photo: 'https://picsum.photos/300/150',
         button: '<button onclick="showProfile(\'Pentumbra\')" class="btn btn-primary">View Profile</button>'
    },
    {
        species: 'Rhysmuth',
        nickname: 'template',
        elements: 'Plasma + Mech + Crystal + Poison',
        stability: '52',
        photo: 'https://picsum.photos/300/150',
         button: '<button onclick="showProfile(\'Rhysmuth\')" class="btn btn-primary">View Profile</button>'
    },
    {
        species: 'Oogiddy',
        nickname: 'template',
        elements: 'Shadow + Mech + Crystal + Poison',
        stability: '56',
        photo: 'https://picsum.photos/300/150',
         button: '<button onclick="showProfile(\'Oogiddy\')" class="btn btn-primary">View Profile</button>'
    },


]
const quint = [
    {
        species: 'BeMeebEth',
        nickname: 'template',
        elements: 'Plasma + Shadow + Mech + Crystal + Poison',
        stability: 'template',
        photo: 'https://picsum.photos/300/150'
    },
]

function showProfile(name) {
  const player = players.find(p => p.name === name);
  if (!player) return;

  document.getElementById("modalHead").textContent = player.species;
  document.getElementById("modalBody").innerHTML = `
    <img src="${player.photo}" class="img-fluid mb-3" alt="${player.species}">
    <p><strong>Age:</strong> ${player.nickname}</p>
    <p><strong>Country:</strong> ${player.elements}</p>
    <p><strong>Position:</strong> ${player.stability}</p>
    <p>${getBio(player.species)}</p>
  `;

  // Show modal using Bootstrap JS
  const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
  modal.show();
}
