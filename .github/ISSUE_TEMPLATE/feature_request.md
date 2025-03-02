name: 🚀 Demande de fonctionnalité
about: Propose une amélioration ou une nouvelle fonctionnalité pour le projet.
title: "[Feature] "
labels: enhancement
assignees: ''

body:
  - type: markdown
    attributes:
      value: "Merci de proposer une amélioration pour le projet ! 🚀"

  - type: textarea
    id: description
    attributes:
      label: Description
      description: Décris clairement la fonctionnalité souhaitée.
    validations:
      required: true

  - type: textarea
    id: avantages
    attributes:
      label: Avantages
      description: Explique pourquoi cette fonctionnalité serait utile.
    validations:
      required: false

  - type: textarea
    id: alternatives
    attributes:
      label: Alternatives
      description: As-tu envisagé d'autres solutions ?
    validations:
      required: false

  - type: checkboxes
    id: checklist
    attributes:
      label: Checklist
      options:
        - label: J’ai vérifié que cette idée n'existe pas déjà dans les issues.
          required: true
        - label: Cette idée est réalisable techniquement.
