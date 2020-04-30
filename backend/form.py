from collections import OrderedDict

title = "Comment ça va cette semaine&nbsp;?"

top = OrderedDict({
    "mood": {
        "type": "radio",
        "label": "Mon moral",
        "options": [
            ["tres_bien", "😀"],
            ["bien", "🙂"],
            ["moyen", "😐"],
            ["pas_bien", "🙁"],
        ],
        "required": True,
        "size": "lg",
        "hint": "C'est le seul champ obligatoire 😉",
    },
    "thoughts": {
        "label": "Besoin d'aide ? Un problème ? Une suggestion ? Un coup de gueule ? C'est ici !",
        "type": "textarea",
        "required": False,
        "hint": "Ces commentaires ne sont pas publics.",
    }
})

below = OrderedDict({
    "mood_vs_last_week": {
        "type": "radio",
        "label": "Par rapport à la semaine dernière, je vais…",
        "options": [
            ["same", "Pareil"],
            ["better", "Mieux"],
            ["worse", "Moins bien"],
        ],
        "required": False,
    },
    "fatigue": {
        "type": "radio",
        "label": "Mon état de fatigue",
        "options": [
            ["not_tired", "Pas fatigué du tout"],
            ["a_little_tired", "Un peu fatigué"],
            ["tired", "Fatigué"],
            ["very_tired", "Très fatigué"],
        ],
        "required": False,
    },
    "fatigue_vs_last_week": {
        "type": "radio",
        "label": "Par rapport à la semaine dernière, je suis…",
        "options": [
            ["same", "Aussi fatigué"],
            ["better", "Moins fatigué"],
            ["worse", "Plus fatigué"],
        ],
        "required": False,
    },
    "workload": {
        "type": "radio",
        "label": "Ma charge de travail cette semaine a été…",
        "options": [
            ["good", "Adaptée"],
            ["too_much", "Trop importante (je me suis senti dépassé.e)"],
            ["not_enough", "Pas assez importante (je me suis senti désoeuvré.e)"],
        ],
        "required": False,
    },
    "proximity_project": {
        "type": "radio",
        "label": "J’ai l’impression de me sentir proche des autres membres de mon équipe projet",
        "options": [
            ["very_no", "Pas du tout d’accord"],
            ["no", "Pas d’accord"],
            ["yes", "D’accord"],
            ["very_yes", "Tout à fait d’accord"],
        ],
        "required": False,
    },
    "proximity_etalab": {
        "type": "radio",
        "label": "J’ai l’impression de me sentir proche des autres membres de l’équipe Etalab",
        "options": [
            ["very_no", "Pas du tout d’accord"],
            ["no", "Pas d’accord"],
            ["yes", "D’accord"],
            ["very_yes", "Tout à fait d’accord"],
        ],
        "required": False,
    },
    "proximity_etalab_important": {
        "type": "radio",
        "label": "Me sentir proche des autres membres de l’équipe Etalab est important pour moi",
        "options": [
            ["very_no", "Pas du tout d’accord"],
            ["no", "Pas d’accord"],
            ["yes", "D’accord"],
            ["very_yes", "Tout à fait d’accord"],
        ],
        "required": False,
    },
})

why = [
    "L'objectif principal de ce questionnaire est de mieux appréhender le moral à Etalab pendant le confinement, semaine par semaine. Un autre objectif est de permettre à chacun et chacune de s'exprimer de manière anonyme si il ou elle le souhaite.",
    "A travers les résultats, nous cherchons notamment à identifier d'éventuelles baisses de moral collectives, voire individuelles à travers le champ texte libre.",
    "Idéalement, les résultats du questionnaire peuvent servir de base de discussion pour identifier des actions concrètes à mettre en oeuvre.",
    "<a href=\"/report\">Une visualisation des réponses agrégées est accessible à tous.</a> Les données quantitatives sont anonymes et les demandes d'aides ou problèmes qui pourraient réidentifier les répondants ne sont pas intégrés dans les résultats agrégés publics.",
    "Les résultats seront lus par la <em>task force</em> animation interne, actuellement composée de Alexandre, Soizic et Olivier. Des éléments précis peuvent être partagés avec Perica en cas de besoin.",
]

form_structure = {
    # preserve OrderectDict by making a list
    "top": [{"name": k, "data": v} for (k, v) in top.items()],
    "below": [{"name": k, "data": v} for (k, v) in below.items()],
    "why": why,
    "title": title,
}

fields = [*top.keys(), *below.keys()]
