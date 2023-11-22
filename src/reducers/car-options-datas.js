export const versions = [
    {name: 'Pure', price: 54700, image: 'pure.png'},
    {name: 'Legende', price: 58500, image: 'legende.png'},
]

export const colors = [
    {name: 'Teinte spéciale Bleu Alpine', price: 1800, image: 'bleu.jpg', for: ['all']},
    {name: 'Teinte métallisée Noir Profond', price: 840, image: 'noir.jpg', for: ['all']},
    {name: 'Peinture opaque Blanc Glacier', price: 0, image: 'blanc.jpg', for: ['all']},
]

export const rims = [
    {name: 'standard', price: 0, for: ['pure']},
    {name: 'serac', price: 1000, for: ['pure']},
    {name: 'legende', price: 0, for: ['legende']},
]

export const sealing = [
    {name: 'Sièges baquets en cuir noir et Dinamica', price: 0, image: 'cuir-noir_dinamica.jpg', for: ['pure']},
    {name: 'Sièges Confort en cuir noir perforé', price: 800, image: 'cuir-noir_perfore.jpg', for: ['pure']},
    {name: 'Sièges Confort en cuir noir', price: 0, image: 'cuir-noir.jpg', for: ['legende']},
    {name: 'Sièges Confort en cuir brun', price: 800, image: 'cuir-brun.jpg', for: ['legende']},
]

// For equipments

const design = [
    {name: 'Pack héritage', price: 180, for: ['all']},
    {name: 'Repose-pieds passager en aluminium', price: 96, for: ['all']},
]

const medias = [
    {name: 'Alpine Télémétrics', price: 204, for: ['all']},
    {name: 'Système Audio Focal', price: 600, for: ['all']},
    {name: 'Système Audio Focal Premium', price: 1200, for: ['all']},
    {name: 'Système Audio standard', price: 0, for: ['all']},
]

const comfort = [
    {name: 'Retroviseur intérieur électrochrome', price: 0, for: ['all']},
    {name: 'Rétroviseurs ext. chauf. rabattables élec.', price: 504, for: ['all']},
    {name: 'Pack de rangement', price: 504, for: ['all']},
    {name: 'Régulateur / limiteur de vitesse', price: 0, for: ['all']},
]

const driving = [
    {name: 'Aide au stationnement AR', price: 420, for: ['all']},
    {name: 'Aide au stationnement AV et AR', price: 750, for: ['all']},
    {name: 'Aide au stationnement AV AR et caméra de recul', price: 1200, for: ['all']},
    {name: 'Echappement Sport actif', price: 1500, for: ['all']},
]

const security = [
    {name: 'Système de freinage Haute-Perf 320mm', price: 1000, for: ['all']},
    {name: 'Assistance au freinage d\'urgence', price: 0, for: ['all']},
    {name: 'Airbags frontaux conducteur et passager', price: 0, for: ['all']},
]

const equipmentsCustoms = {
    extern: [
        {name: 'Etriers de frein couleur Bleu Alpine', price: 384, for: ['all']},
        {name: 'Logo Alpine sur les ailes avant', price: 120, for: ['all']},
        {name: 'Etriers de frein couleur Gris Anthracite', price: 0, for: ['all']},
    ],
    intern: [
        {name: 'Pédalier en aluminium', price: 120, for: ['all']},
        {name: 'Harmonie carbone mat', price: 0, for: ['all']},
        {name: 'Logo au centre du volant en Bleu Alpine', price: 84, for: ['all']},
        {name: 'Sièges chauffants', price: 400, for: ['all']},
    ]
}

export const equipments = { design, medias, comfort, driving, security, customs: equipmentsCustoms }

// For accessories

const transport = [
    {name: 'Extincteur 1kg avec manomètre', price: 22, for: ['all']},
    {name: 'Chaine à neige Premium Grip', price: 336, for: ['all']},
    {name: 'Alarme', price: 543, for: ['all']},
    {name: 'Protection Prise OBD', price: 99, for: ['all']},
    {name: 'Kit de sécurité', price: 20, for: ['all']},
    {name: 'Fixation extincteur', price: 72, for: ['all']},
]

const multimedia = [
    {name: 'Support caméra sport', price: 89, for: ['all']},
    {name: 'Support smartphone magnétique - Fixation sur tableau de bord', price: 21, for: ['all']},
]

const materials = [
    {name: 'Chargeur batterie', price: 240, for: ['all']},
    {name: 'Kit Outils Alpine', price: 398, for: ['all']},
]

const accessoriesCustoms = {
    extern: [
        {name: 'Cabochons Alpine - Métalisés', price: 24, for: ['all']},
        {name: 'Housse de protection Alpine', price: 216, for: ['all']},
        {name: 'Antivols pour jante - Noirs', price: 51, for: ['all']},
    ],
    intern: [
        {name: 'Tapis de coffre', price: 83, for: ['all']},
        {name: 'Filet de rangement - Horizontal', price: 59, for: ['all']},
    ]
}

export const accessories = { transport, multimedia, materials, customs: accessoriesCustoms }

const legende = [
    'modele_legende-couleur_blanc-jante_legende-1.jpg',
    'modele_legende-couleur_blanc-jante_legende-2.jpg',
    'modele_legende-couleur_blanc-jante_legende-3.jpg',
    'modele_legende-couleur_blanc-jante_legende-4.jpg',
    'modele_legende-couleur_bleu-jante_legende-1.jpg',
    'modele_legende-couleur_bleu-jante_legende-2.jpg',
    'modele_legende-couleur_bleu-jante_legende-3.jpg',
    'modele_legende-couleur_bleu-jante_legende-4.jpg',
    'modele_legende-couleur_noir-jante_legende-1.jpg',
    'modele_legende-couleur_noir-jante_legende-2.jpg',
    'modele_legende-couleur_noir-jante_legende-3.jpg',
    'modele_legende-couleur_noir-jante_legende-4.jpg',
]

const pure = [
    'modele_pure-couleur_blanche-jante_serac-1.jpg',
    'modele_pure-couleur_blanche-jante_serac-2.jpg',
    'modele_pure-couleur_blanche-jante_serac-3.jpg',
    'modele_pure-couleur_blanche-jante_serac-4.jpg',
    'modele_pure-couleur_blanche-jante_standard-1.jpg',
    'modele_pure-couleur_blanche-jante_standard-2.jpg',
    'modele_pure-couleur_blanche-jante_standard-3.jpg',
    'modele_pure-couleur_blanche-jante_standard-4.jpg',
    'modele_pure-couleur_bleu-jante_serac-1.jpg',
    'modele_pure-couleur_bleu-jante_serac-2.jpg',
    'modele_pure-couleur_bleu-jante_serac-3.jpg',
    'modele_pure-couleur_bleu-jante_serac-4.jpg',
    'modele_pure-couleur_bleu-jante_standard-1.jpg',
    'modele_pure-couleur_bleu-jante_standard-2.jpg',
    'modele_pure-couleur_bleu-jante_standard-3.jpg',
    'modele_pure-couleur_bleu-jante_standard-4.jpg',
    'modele_pure-couleur_noire-jante_serac-1.jpg',
    'modele_pure-couleur_noire-jante_serac-2.jpg',
    'modele_pure-couleur_noire-jante_serac-3.jpg',
    'modele_pure-couleur_noire-jante_serac-4.jpg',
    'modele_pure-couleur_noire-jante_standard-1.jpg',
    'modele_pure-couleur_noire-jante_standard-2.jpg',
    'modele_pure-couleur_noire-jante_standard-3.jpg',
    'modele_pure-couleur_noire-jante_standard-4.jpg',
]

export const models = { pure, legende }