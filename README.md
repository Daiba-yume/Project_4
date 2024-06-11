# Projet GameOn

1. Forkez ce repo ;
2. Il est conseillé d'utiliser VisualStudio Code et vous pouvez utiliser Docker, mais ce n'est pas obligatoire ;
3. Il n'y a aucune dépendance ;
4. Vous ne devez utiliser que du CSS personnalisé et du JavaScript pur, sans jQuery, Bootstrap ou autre librairie.

## 🎮 Projet 4

**Objectif :** Ajouter le code JavaScript manquant pour que le formulaire soit pleinement fonctionnel.

### 🌟 Aperçu du Projet

Voici un aperçu du projet :

![GameOn](./starterOnly/asset/HomePage.png)

### 🔧 Issues 🛠️

1. **Ajouter la fonctionnalité au bouton (x)**

2. **Lier les labels aux entrées dans le HTML**

   - Utiliser les attributs "for" et "id" dans le code existant.
   - Corriger le code HTML quand nécessaire.
     **Utiliser du JavaScript pur (pas de jQuery) pour terminer le formulaire**
   - Le formulaire doit être valide quand l'utilisateur clique sur "Submit".
   - Les données doivent être saisies correctement :
     1. Le champ Prénom doit contenir un minimum de 2 caractères et ne doit pas être vide.
     2. Le champ Nom de famille doit contenir un minimum de 2 caractères et ne doit pas être vide.
     3. L'adresse électronique doit être valide.
     4. Pour le nombre de concours, une valeur numérique doit être saisie.
     5. Un bouton radio doit être sélectionné.
     6. La case des conditions générales doit être cochée, l'autre case est facultative.
   - Conserver les données du formulaire (ne pas effacer le formulaire) lorsqu'il ne passe pas la validation.

3. **Afficher des messages d'erreur spécifiques sous les champs incorrects**

   - Exemples de messages d'erreur :
     - "Veuillez entrer 2 caractères ou plus pour le champ du nom."
     - "Vous devez choisir une option."
     - "Vous devez vérifier que vous acceptez les termes et conditions."
     - "Vous devez entrer votre date de naissance."

4. **Afficher un message de confirmation après une validation réussie**

   - Exemple : "Merci ! Votre réservation a été reçue."

5. **Tester l'interface utilisateur**
   - Visualiser et tester dans les dernières versions de Chrome et de Firefox, en version mobile et desktop.
   - Corriger les erreurs d'affichage existantes.
   - Tester toutes les fonctionnalités des boutons et des entrées de formulaire avec des valeurs correctes et incorrectes.

### 🧪 Tests

- **Chrome** : Dernière version (desktop et mobile)
- **Firefox** : Dernière version (desktop et mobile)
