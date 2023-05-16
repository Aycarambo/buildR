# Buildr
BuildR est le résultat d'un hackathon React à la licence professionelle MIAW de La Rochelle. Il s'agit d'une app de rencontre entre professionnels du batîment et particuliers en besoin de travaux.

---



Url du back directus : http://localhost:8055/

## Connexion

login `admin@example.com`
mdp `testpass`

## Parametrer le back

### Permissions

Penser à modifier les permissions de l'appli pour le groupe "Public".
Mettre tout les permissions basiques en `all`
Dans system collections, mettre directus_files et directus_users en `all`

### Adapter jobs

rajouter le champ image <File>

### Adapter directus_users

Créer les champs suivants :

- searchingForJobs <manyToMany>
- budgetMin <int>
- budgetMax <int>
- projectDescription <textarea>
