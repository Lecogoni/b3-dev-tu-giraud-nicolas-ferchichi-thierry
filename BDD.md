# BDD : "Behavior Driven Development"

`L'objectif de cette application est de générer une calculatrice`

---
<br>

## Lancement de l'application

<br>

> Quand un utilisateur lance le programme<br>
> Alors une ligne de commande en console l'invite à entrer une opération<br>


---
<br>


### Utilisation de la calculatrice 

<br>

> Étant donné un utilisateur souhaite utiliser la calculatrice<br>
> Quand l'utilisateur saisies des caractères à l'aide de clavier dans la console<br>
> Alors les charactères saisies s'affiche en console<br>

<br>

### Affichage du résultat

<br>

> Étant donné un utilisateur souhaite afficher le résultat de l'expression entrée<br>
> Quand l'utilisateur à saisie une chaine de caractère<br>  
> Alors le résultat s'affiche en console lorsque qu'il valide sa saisie en appuyant sur la touche entréee.<br>

<br>

> Dès lors que l'expression saisie est une opération mathématique valide<br>
> Alors le résultat de cette expression s'affiche en console<br>

### Qu'entend t-on par opération mathématique valide

<br>

> A ce stade de developpement, dans notre cas une opération est dite valide correspond les règles suivantes :

*règles de gestion :*

```
- l'oparation doit avoir la forme un goupe de nombre, un opérateur (+, -, *, /), un groupe de nombre
- l'opération ne peux pas commencer par un opérateur, elle doit commencer par un groupe de nombre, entier ou decimal
- l'opération à évaluée doit se terminer par un groupe de nombre, entier ou decimal, elle ne peut pas se terminer par un opérateur
- il n'est pas possible que deux opérateurs se suivent ; a ce stade la calculatrice ne gère pas les nombres négatifs.
- Pour entrer un nombre décimal il faut utiliser le carctères . (et on ,)
```

<br>

*exemple d'opérations valides:*

```
- 3 + 7
- 4 + 6
- 2 x 6
- 25.3 - 8
- 10 / 5
- 9.3 * 5.4
```

<br>


### Qu'entend t-on par opération mathématique non valide

<br>

> Une expression mathématique est considéré comme non valide lorsque celle-ci :
    > L'expression ne doit pas contenir de caractère alphabétique
    > L'expression ne doit pas avoir plus de 1 opérateurs entre chaque nombre (exemple : +-, +*)
    > L'expression ne doit pas ce finir un caractère autre qu'un nombre (exemple : 3+2., 1+1+1*, 1R)
    > L'expression ne doit pas avoir un nombre avec plusieurs vigule ou point

*exemple d'opérations non valides:*

```
- + 3 - 7 
- 4 + 6 - 
- 2 x+ 4  
- a + 5
- 4.2 + ui
```

<br>

### Résultat d'une opération non valide

<br>

> Étant donné un utilisateur qui entrerait des données rendant l'opération mathématique non valide<br>
> alors le résultat affiché en console sera : NaN


<br>

## Listes des opérateurs mathématiques de base

<br>

### Addition

> Étant donné un utilisateur qui souhaite réaliser une addition entre deux nombres<br>
> Quand il saisie une expression composé de 2 nombres séparés par l'opérateur +<br>  
> Alors quand il clic sur la touche entrée le résultat de l'addition s'affiche <br>

<br>

### Soutraction 
> Étant donné un utilisateur qui souhaite réaliser une soustraction entre deux nombres<br>
> Quand il saisie une expression composé de 2 nombres séparés par l'opérateur - <br>  
> Alors quand il clic sur la touche entrée le résultat de la soustraction s'affiche <br>

<br>

### Multiplication
> Étant donné un utilisateur qui souhaite réaliser une multiplication entre deux nombres<br>
> Quand il saisie une expression composé de 2 nombres séparés par l'opérateur * <br>  
> Alors quand il clic sur la touche entrée le résultat de la multiplication s'affiche <br>

<br>

### Division 
> Étant donné un utilisateur qui souhaite réaliser une division entre deux nombres<br>
> Quand il saisie une expression composé de 2 nombres séparés par l'opérateur / <br>  
> Alors quand il clic sur la touche entrée le résultat de la division s'affiche <br>

<br>



<br>

### Pourcentage 

<br>

> Étant donné un utilisateur qui souhaite réalise des opérations mathématique de base<br>
> Quand il souhaite faire un pourcentage a d'une valeur b, il saisie suivante "a%b"<br>  
> Alors le résultat de cette expression s'affiche dans la console <br>

<br>

## Autres opérateurs mathématiques