# commentcava

Cet outil a été développé dans le cadre de la crise sanitaire du COVID-19 afin de permettre une remontée hebdomadaire simple, anonyme et sur la base du volontariat du moral de l'équipe chez [Etalab](https://www.etalab.gouv.fr).

Il peut être adapté [facilement](Configuration) pour d'autres besoins et hébergé sur n'importe quel serveur supportant Python3.

![capture](capture.png)

## Configuration

La configuration se fait via un fichier [TOML](https://github.com/toml-lang/toml). Le fichier utilisé par défaut est dans `config/config.toml`. Vous pouvez modifier ce fichier ou pointer vers un autre fichier en utilisant la variable d'environnement `CCV_CONFIG_FILE`.

Exemple de fichier de configuration commenté :

```toml
# Le titre du formulaire
title = "Comment ça va cette semaine&nbsp;?"

# Chaque ligne de ce tableau constitue un paragraphe derrière le lien "Pourquoi ce questionnaire"
why = [
    "L'objectif principal de ce questionnaire est de mieux appréhender le moral à Etalab pendant le confinement, semaine par semaine. Un autre objectif est de permettre à chacun et chacune de s'exprimer de manière anonyme si il ou elle le souhaite.",
    "A travers les résultats, nous cherchons notamment à identifier d'éventuelles baisses de moral collectives, voire individuelles à travers le champ texte libre.",
]

# Chaque champ du formulaire est introduit par [[fields]]
[[fields]]
# Le formulaire a deux emplacement : `top` et `bottom`
# L'emplacement `top` peut être utilisé pour les champs obligatoire et les plus importants
# L'emplacement `bottom` peut être utilisé pour les champs facultatis ou moins importants
# L'emplacement `bottom` est facultatif
position = "top"
# Le nom technique du champ, doit être unique pour chaque champ
name = "mood"
# Le type (`radio` ou `textarea` pour l'instant)
type = "radio"
# Le nom du champ pour les humains
label = "Mon moral"
# Dans le cas d'un champ "radio", les différentes options
options = [
    [ "tres_bien", "😀",],
    [ "bien", "🙂",],
    [ "moyen", "😐",],
    [ "pas_bien", "🙁",],
]
# Champ requis ou non
required = true
# La taille des options radio (facultatif)
size = "lg"
# La description qui s'affiche sous le champ (facultatif)
hint = "C'est le seul champ obligatoire 😉"

[[fields]]
position = "top"
name = "thoughts"
label = "Besoin d'aide ? Un problème ? Une suggestion ? Un coup de gueule ? C'est ici !"
type = "textarea"
required = false
hint = "Ces commentaires ne sont pas publics."
```
