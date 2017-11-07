<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="moy PREND_LA_VALEUR moy/i"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2defaut="" F2para="" F2etat="inactif" F2lignes=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param totalBoucles="5000000" arrondiAuto="vrai" maxBoucle="500000" totalAffichages="1000" epaisseurPoint="2" epaisseurLigne="2" nbDecimales="8"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="tab EST_DU_TYPE LISTE" code="1#LISTE#tab"/>
        <item algoitem="max EST_DU_TYPE NOMBRE" code="1#NOMBRE#max"/>
        <item algoitem="i EST_DU_TYPE NOMBRE" code="1#NOMBRE#i"/>
        <item algoitem="moy EST_DU_TYPE NOMBRE" code="1#NOMBRE#moy"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="LIRE tab[0]" code="2#tab#0"/>
        <item algoitem="LIRE tab[1]" code="2#tab#1"/>
        <item algoitem="LIRE tab[2]" code="2#tab#2"/>
        <item algoitem="LIRE tab[3]" code="2#tab#3"/>
        <item algoitem="LIRE tab[4]" code="2#tab#4"/>
        <item algoitem="max PREND_LA_VALEUR tab[0]" code="5#max#tab[0]#pasliste"/>
        <item algoitem="POUR i ALLANT_DE 0 A 4" code="12#i#0#4">
            <item algoitem="DEBUT_POUR" code="13#debutpour"/>
            <item algoitem="SI (max &lt; tab[i]) ALORS" code="6#max &lt; tab[i]">
                <item algoitem="DEBUT_SI" code="7#debutsi"/>
                <item algoitem="max PREND_LA_VALEUR tab[i]" code="5#max#tab[i]#pasliste"/>
                <item algoitem="FIN_SI" code="8#finsi"/>
            </item>
            <item algoitem="moy PREND_LA_VALEUR moy + tab[i]" code="5#moy#moy + tab[i]#pasliste"/>
            <item algoitem="FIN_POUR" code="14#finpour"/>
        </item>
        <item algoitem="AFFICHER max" code="3#max#1#pasliste"/>
        <item algoitem="moy PREND_LA_VALEUR moy/i" code="5#moy#moy/i#pasliste"/>
        <item algoitem="AFFICHER moy" code="3#moy#1#pasliste"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
