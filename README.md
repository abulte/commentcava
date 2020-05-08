# commentcava

Cet outil a été développé dans le cadre de la crise sanitaire du COVID-19 afin de permettre une remontée hebdomadaire simple, anonyme et sur la base du volontariat du moral de l'équipe chez [Etalab](https://www.etalab.gouv.fr).

Il peut être adapté [facilement](#configuration) pour d'autres besoins et [déployé](#installation) sur n'importe quel serveur supportant Python3 et/ou Docker.

![capture](images/capture.png)

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
# L'emplacement `bottom` peut être utilisé pour les champs facultatifs ou moins importants
# L'emplacement `bottom` est facultatif
position = "top"
# Le nom technique du champ, doit être unique pour chaque champ
name = "mood"
# Le type (`radio` ou `textarea` pour l'instant)
type = "radio"
# Le nom du champ pour les humains
label = "Mon moral"
# Dans le cas d'un champ "radio", les différentes options
# Sous la forme ["{clé_technique}", "{nom_humain}"]
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

## Installation

### Développement

```shell
cd backend
pip install -r backend/requirements.txt
FLASK_DEBUG=1 FLASK_APP=app flask run
```

L'app python sera disponible sur http://localhost:5000.

Une base de données sqlite stockée dans `backend/commentcava.db` sera utilisée. Vous pouvez changer ça grâce à la variable d'environnement `DB_DSN`, par exemple pour utiliser une base postgres : `DB_DSN=postgresql://postgres@db:5432/postgres`.

```shell
cd frontend
yarn install && yarn serve
```

L'app javascript sera disponible sur http://localhost:8080 et utilisera l'API ci-dessus.

### Docker

Un `docker-compose` tout-en-un est disponible. Une base postgres sera utilisée.

```shell
docker-compose up
```

L'application sera disponible sur `http://{docker-host}:8000`.

## Exploitation des données

### Interface web

Une interface de consultation des résultats agrégés par intervalle de dates est disponible sur `/report`.

Un export CSV est disponible via la commande suivante :

```shell
$ cd backend
$ python cli.py export-csv --help
Usage: cli.py export-csv [OPTIONS]

Options:
  --start TEXT  Start date (eg 2012-12-01)
  --end TEXT    End date (eg 2012-12-31)
  --help        Show this message and exit.
```

Le CSV sera disponible sur la sortie standard. Vous pouvez utiliser la commande suivante pour exporter les résultats dans un fichier :

```shell
pyton cli.py export-csv > monfichier.csv
```
