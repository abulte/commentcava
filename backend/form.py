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

})

why = [
    "L'objectif principal de ce questionnaire est de mieux appréhender le moral à Etalab pendant le confinement, semaine par semaine. Un autre objectif est de permettre à chacun et chacune de s'exprimer de manière anonyme si il ou elle le souhaite.",
    "A travers les résultats, nous cherchons notamment à identifier d'éventuelles baisses de moral collectives, voire individuelles à travers le champ texte libre.",
    "Idéalement, les résultats du questionnaire peuvent servir de base de discussion pour identifier des actions concrètes à mettre en oeuvre.",
    "<a href=\"/report\">Une visualisation des réponses agrégées est accessible à tous.</a> Les données quantitatives sont anonymes et les demandes d'aides ou problèmes qui pourraient réidentifier les répondants ne sont pas intégrés dans les résultats agrégés publics.",
    "Les résultats seront lus par la <em>task force</em> animation interne, actuellement composée de Alexandre, Soizic et Olivier. Des éléments précis peuvent être partagés avec Perica en cas de besoin.",
]

form_structure = {
    "top": top,
    "below": below,
    "why": why,
    "title": title,
}

fields = [*top.keys(), *below.keys()]
