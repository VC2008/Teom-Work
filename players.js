const players = [
    {
        species: 'Ghazt',
        nickname: '(Astral)',
        elements: 'IMGS/Plasma_Element.png',
        stability: '1',
        photo: 'IMGS/Ghazt.webp',
         button: '<button onclick="showProfile(\'Ghazt\')" class="btn btn-primary">View Profile</button>'
     },
     {
        species: 'Grumpyre',
        nickname: '(Darr)',
        elements: 'Shadow',
        stability: '2',
        photo: 'IMGS/Grumpyre.webp',
        button: '<button onclick="showProfile(\'Grumpyre\')" class="btn btn-primary">View Profile</button>'
    },
     {
        species: 'Reebro',
        nickname: '(Flonk)',
        elements: 'Mech',
        stability: '3',
        photo: 'IMGS/Reebro.webp',
        button: '<button onclick="showProfile(\'Reebro\')" class="btn btn-primary">View Profile</button>'
    },
     {
        species: 'Jeeode',
        nickname: '(Ekko)',
        elements: 'Crystal',
        stability: '4',
        photo: 'IMGS/Jeeode.webp',
        button: '<button onclick="showProfile(\'Jeeode\')" class="btn btn-primary">View Profile</button>'
    },
     {
        species: 'Humbug',
        nickname: '(Skrooj)',
        elements: 'IMGS/Poison_Element.webp',
        stability: '5',
        photo: 'IMGS/Humbug (2).webp',
         button: '<button onclick="showProfile(\'Humbug\')" class="btn btn-primary">View Profile</button>'
    },

//Double Elementals
    {
        species: 'Whisp',
        nickname: '(Rayth)',
        elements: 'Plasma + Shadow',
        stability: '6',
        photo: 'IMGS/Whisp.webp',
         button: '<button onclick="showProfile(\'Whisp\')" class="btn btn-primary">View Profile</button>'
    },
    {
        species: 'Nebulob',
        nickname: '(Cosmo)',
        elements: 'Plasma + Mech',
        stability: '8',
        photo: 'IMGS/Nebulob.webp',
         button: '<button onclick="showProfile(\'Nebulob\')" class="btn btn-primary">View Profile</button>'
    },
    {
        species: 'Sox',
        nickname: '(Todd)',
        elements: 'Plasma + Crystal',
        stability: '10',
        photo: 'IMGS/Sox.webp',
         button: '<button onclick="showProfile(\'Sox\')" class="btn btn-primary">View Profile</button>'
    },
    {
        species: 'Jellbilly',
        nickname: '(Cnid)',
        elements: 'Plasma + Poison',
        stability: '12',
        photo: 'IMGS/Jellbilly.webp',
         button: '<button onclick="showProfile(\'Jellbilly\')" class="btn btn-primary">View Profile</button>'
    },
    {
        species: 'Arackulele',
        nickname: '(Acktagon)',
        elements: 'Shadow + Mech',
        stability: '10',
        photo: 'IMGS/Arackulele.webp',
         button: '<button onclick="showProfile(\'Arackulele\')" class="btn btn-primary">View Profile</button>'
    },
    {
        species: 'BooDoo',
        nickname: '(Bonez)',
        elements: 'Shadow + Crystal',
        stability: '12',
        photo: 'IMGS/Boodoo.webp',
         button: '<button onclick="showProfile(\'BooDoo\')" class="btn btn-primary">View Profile</button>'
    },
    {
        species: 'Kazellion',
        nickname: '(Brady)',
        elements: 'Shadow + Poison',
        stability: '14',
        photo: 'IMGS/Kazilleon.webp',
         button: '<button onclick="showProfile(\'Kazellion\')" class="btn btn-primary">View Profile</button>'
    },
    {
        species: 'Bellowfish',
        nickname: '(Sawl)',
        elements: 'Mech + Crystal',
        stability: '14',
        photo: 'IMGS/Bellowfish.webp',
         button: '<button onclick="showProfile(\'Bellowfish\')" class="btn btn-primary">View Profile</button>'
    },
    {
        species: 'Dragong',
        nickname: '(Lither)',
        elements: 'Mech + Poison',
        stability: '16',
        photo: 'IMGS/Dragong.webp',
         button: '<button onclick="showProfile(\'Dragong\')" class="btn btn-primary">View Profile</button>'
    },
    {
        species: 'Fungpray',
        nickname: '(Bow)',
        elements: 'Crystal + Poison',
        stability: '18',
        photo: 'IMGS/Fung_Pray.webp',
         button: '<button onclick="showProfile(\'Fungpray\')" class="btn btn-primary">View Profile</button>'
    },

//Triple Elementals

    {
        species: 'Yooreek',
        nickname: '(Tunks)',
        elements: 'Plasma + Shadow + Mech',
        stability: '18',
        photo: 'IMGS/Yooreek_Playing.webp',
         button: '<button onclick="showProfile(\'Yooreek\')" class="btn btn-primary">View Profile</button>'
    },
    {
        species: 'Meebkin',
        nickname: '(Eugly)',
        elements: 'Plasma + Shadow + Crystal',
        stability: '21',
        photo: 'IMGS/Meebkin_with_meeb.webp',
         button: '<button onclick="showProfile(\'Meebkin\')" class="btn btn-primary">View Profile</button>'
    },
    {
        species: 'Blarret',
        nickname: '(Otta)',
        elements: 'Plasma + Shadow + Poison',
        stability: '24',
        photo: 'IMGS/Blarret.webp',
         button: '<button onclick="showProfile(\'Blarret\')" class="btn btn-primary">View Profile</button>'
    },
    {
        species: 'Gaddzooks',
        nickname: '(Fooey)',
        elements: 'Plasma + Mech + Crystal',
        stability: '24',
        photo: 'IMGS/Gaddzooks.webp',
         button: '<button onclick="showProfile(\'Gaddzooks\')" class="btn btn-primary">View Profile</button>'
    },
    {
        species: 'Auglur',
        nickname: '(J)',
        elements: 'Plasma + Mech + Poison',
        stability: '27',
        photo: 'IMGS/Auglur_Playing.webp',
         button: '<button onclick="showProfile(\'Auglur\')" class="btn btn-primary">View Profile</button>'
    },
    {
        species: 'Flasque',
        nickname: '(Clakblu)',
        elements: 'Plasma + Crystal + Poison',
        stability: '30',
        photo: 'IMGS/Flasque_Open_Mouth.webp',
         button: '<button onclick="showProfile(\'Flasque\')" class="btn btn-primary">View Profile</button>'
    },
    {
        species: 'Nitebear',
        nickname: '(Ben)',
        elements: 'Shadow + Mech + Crystal',
        stability: '27',
        photo: 'IMGS/Nitebear.webp',
         button: '<button onclick="showProfile(\'Nitebear\')" class="btn btn-primary">View Profile</button>'
    },
    {
        species: 'Piplash',
        nickname: '(Ozzy)',
        elements: 'Shadow + Mech + Poison',
        stability: '30',
        photo: 'IMGS/Piplash.webp',
         button: '<button onclick="showProfile(\'Piplash\')" class="btn btn-primary">View Profile</button>'
    },
    {
        species: 'X-rt',
        nickname: 'Mehgrun',
        elements: 'Shadow + Crystal + Poison',
        stability: '33',
        photo: 'IMGS/X%27rt.webp',
         button: '<button onclick="showProfile(\'X-rt\')" class="btn btn-primary">View Profile</button>'
    },
    {
        species: 'Teeter-Tauter',
        nickname: 'Matt & Shawn',
        elements: 'Mech + Crystal + Poison',
        stability: '36',
        photo: 'IMGS/Teeter-Tauter.webp',
         button: '<button onclick="showProfile(\'Teeter-Tauter\')" class="btn btn-primary">View Profile</button>'
    },

//Quad Elementals

    {
        species: 'Whaill',
        nickname: '(Mouf)',
        elements: 'Plasma + Shadow + Mech + Crystal',
        stability: '40',
        photo: 'IMGS/Whaill.webp',
         button: '<button onclick="showProfile(\'Whaill\')" class="btn btn-primary">View Profile</button>'
    },
    {
        species: 'Vhenshun',
        nickname: '(Wizsl)',
        elements: 'Plasma + Shadow + Mech + Poison',
        stability: '44',
        photo: 'IMGS/Vhenshun.webp',
         button: '<button onclick="showProfile(\'Vhenshun\')" class="btn btn-primary">View Profile</button>'
    },
    {
        species: 'Pentumbra',
        nickname: '(Akhuhoth)',
        elements: 'Plasma + Shadow + Crystal + Poison',
        stability: '48',
        photo: 'IMGS/Pentumbra.webp',
         button: '<button onclick="showProfile(\'Pentumbra\')" class="btn btn-primary">View Profile</button>'
    },
    {
        species: 'Rhysmuth',
        nickname: '(Endarblox)',
        elements: 'Plasma + Mech + Crystal + Poison',
        stability: '52',
        photo: 'IMGS/Rhysmuth.webp',
         button: '<button onclick="showProfile(\'Rhysmuth\')" class="btn btn-primary">View Profile</button>'
    },
    {
        species: 'Oogiddy',
        nickname: '(Murkas)',
        elements: 'Shadow + Mech + Crystal + Poison',
        stability: '56',
        photo: 'IMGS/Oogiddy.webp',
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
    <p><strong>nickname:</strong> ${player.nickname}</p>
    <p><strong>elements:</strong> ${player.elements}</p>
    <p><strong>stability:</strong> ${player.stability}</p>
    <p>${getBio(player.species)}</p>
  `;

  // Show modal using Bootstrap JS
  const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
  modal.show();
}

function getBio(name) {
  const bios = {
        "Ghazt": "A ghostly Plasma Elemental known for its feline-like behaviors and sounds",
        "Grumpyre": "A flying Shadow Elemental that has reversed emotions from what its actually feeling",
        "Reebro": "A Mechanical Ethereal delicately crafted to support itself",
        "Jeeode": "The dazling Crystal Ethereal known for its soothing melodies",
        "Humbug": "An interesting Poison Ethereal capable of generating immense power with its wings"
     };
  return bios[name] || "This Ethereal Bio is unavailable.";
}