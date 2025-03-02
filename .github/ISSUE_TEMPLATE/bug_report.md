name: 🐛 Signalement de bug
about: Signale un bug ou un problème technique.
title: "[Bug] "
labels: bug
assignees: ''

body:
  - type: markdown
    attributes:
      value: "Merci de signaler un bug ! 🐛"

  - type: textarea
    id: description
    attributes:
      label: Description
      description: Décris clairement le bug.
    validations:
      required: true

  - type: textarea
    id: étapes
    attributes:
      label: Étapes pour reproduire le bug
      description: Liste les étapes nécessaires pour reproduire le problème.
    validations:
      required: true

  - type: textarea
    id: attendu
    attributes:
      label: Résultat attendu
      description: Quel était le comportement attendu ?
    validations:
      required: true

  - type: textarea
    id: obtenu
    attributes:
      label: Résultat obtenu
      description: Quel est le comportement actuel ?
    validations:
      required: true

  - type: checkboxes
    id: checklist
    attributes:
      label: Checklist
      options:
        - label: J’ai vérifié que ce bug n’a pas déjà été signalé.
          required: true
        - label: J’ai essayé plusieurs fois de reproduire le bug.
