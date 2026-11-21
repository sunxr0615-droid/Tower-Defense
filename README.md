# Kingdom Defenders — extension cartoon et stratégie (v2)

Mise à jour du jeu existant : mêmes cinq tours, sauvegarde et boucle de vingt vagues, avec économie revue, spécialisations et nouveaux adversaires. Le rendu reste en relief 2,5D sur Canvas, sans bibliothèque ni installation de moteur.

## Jouer

Ouvrir **Jouer.html** dans un navigateur. Si le fichier est déjà ouvert, actualiser la page pour charger la mise à jour. Il contient tous les scripts et styles, sans dépendance réseau.

Pour développer : `npm start`, puis http://localhost:4173. Le serveur utilise Python 3. `npm run build` régénère le fichier autonome et vérifie sa syntaxe. Ne pas modifier directement Jouer.html : sa source est dans dist/.

Dans le jeu, le bouton de difficulté ouvre le choix **Normal / Difficile / Extrême**. Choisir ensuite une carte démarre une nouvelle bataille. Les anciennes parties sont restaurées en Normal ; leurs tours, or, vies et royaumes débloqués sont conservés. Les tours déjà améliorées reçoivent la branche Puissance correspondante. Les nouveaux réglages d’économie s’appliquent aux nouvelles vagues.

## Terminé

- Trois difficultés : budget initial 320 / 290 / 275, revenus décroissants, groupes plus nombreux, accélération progressive. Les PV progressent modérément ; les capacités et résistances font la différence.
- Cinq tours conservées ; trois améliorations par tour, deux spécialisations permanentes par tour, trois priorités de ciblage et cinq pouvoirs actifs au niveau 3. Recharge de 32 secondes de combat, suspendue en pause et entre les vagues.
- Synergies : gel + éclairs (+35 %), marque des chasseurs + sniper (+30 %), canon brise-armure + dégâts physiques (+25 %). La glace interrompt les soins et les sprints ; les éclairs perturbent les invocations.
- Ninja, tank blindé, fantôme, guérisseur, invocateur, lutins et dragon. Le dragon a trois phases : protection, souffle annoncé 2 secondes avant impact, puis rage et renforts. L’invocateur est limité à deux invocations de trois lutins, sans gain d’or.
- Cinq royaumes avec chemins propres : forêt enchantée (socles féeriques), royaume des glaces (verglas), volcan (geysers annoncés), désert magique (mirages), château final (protection des escortes). L’ordre des trois premières cartes est conservé pour ne pas altérer les anciennes sauvegardes.
- Vagues surprises déterministes et annoncées, pluie d’étoiles avec prime, choix de récompense après chaque vague et préparation avant les boss (bouclier royal par défaut au lancement).
- Score, étoiles, records séparés par difficulté, déverrouillage des cartes et sauvegarde automatique locale.
- Palette claire, arbres ronds, cactus, maisons fantastiques, grands yeux animés, ailes et foulards mobiles, projectiles lumineux, explosions et effets d’amélioration. Interface arrondie et adaptative.
- Pause, vitesses ×1/×2/×3, revente à 70 %, commandes souris, tactiles et clavier conservées.

## Commandes

1–5 : choisir une tour ; puis 1–9 ou 0 : choisir le socle. Cliquer une tour pour ses réglages. U : améliorer après le choix de spécialisation. A : pouvoir actif de la tour sélectionnée. Espace : pause. Échap : annuler.

## Vérification

`npm test` lance **50 tests** : 15 campagnes complètes (5 cartes × 3 difficultés), anciennes mécaniques, migration, nouvelles résistances, soins, invocations, phases du dragon, ciblage, pouvoirs, bonus et terrains.

Les stratégies gagnantes d’Extrême et leur journal d’achats sont dans `tests/balance-witnesses.json`. Elles n’utilisent ni or supplémentaire ni santé illimitée. Les tests vérifient aussi cinq stratégies de spam mono-tour : chacune échoue en Extrême sur la forêt. Une même stratégie de forêt ne gagne pas automatiquement les cinq cartes. Ces résultats démontrent la faisabilité et quelques contre-exemples, pas l’absence mathématique de toute stratégie dominante.

`npm run balance` recherche des stratégies reproductibles avec un générateur déterministe. Les pouvoirs sont activés automatiquement dans les simulations ; le joueur doit en gérer le timing. Des parties humaines supplémentaires restent utiles pour affiner la difficulté ressentie.

Contrôles navigateur : choix de difficulté, construction, spécialisation, ciblage, vague surprise, récompenses, bonus temporaire, capacité et recharge, restauration après rechargement, galerie des personnages et décors. Voir `TESTS.md` pour le bilan.

## Organisation

- `dist/data.js` : paramètres, ennemis, spécialisations, cartes et compositions des vagues.
- `dist/engine.js` : simulation, états, économie, combat et migration.
- `dist/render.js` : dessin et animations ; décors mis en cache.
- `dist/app.js` : interface, entrées, progression et sauvegarde.
- `scripts/build.mjs` : génération autonome et validation syntaxique.
- `tests/` : mécanique, campagnes et stratégies reproductibles.
- `backups/avant-mise-a-jour.zip` : copie des sources et du jeu avant cette mise à jour.

Le stockage reste propre au navigateur et à l’adresse du jeu. Un fichier local et le serveur localhost ne partagent pas automatiquement leur progression. Aucune publication distante n’a été effectuée pour cette mise à jour.

## Finition cartoon du 21 novembre

Tours entièrement redessinées (guetteur, lunette de sniper, canon arrondi, cristal flottant et orbe électrique), bastion pastel, ambiances animées et effets « POUF ! ». Le fichier Jouer.html inclut cette finition. Actualiser la page déjà ouverte pour la voir.

## Correctif de lancement des vagues

Le bouton de lancement reste accessible après une vague. Si aucune récompense n’a été sélectionnée, il prend la bourse de +28 or, indiquée sur le bouton. Avant un boss, il prépare le bouclier royal si aucun autre avantage n’a été choisi. Les choix explicites sont conservés.
