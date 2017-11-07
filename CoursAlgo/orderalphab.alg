<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="SI (Nom2.substr(0, 5) &lt; Nom3.substr(0, 5)) ALORS"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2etat="inactif" F2para="" F2defaut="" F2lignes=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param totalAffichages="1000" nbDecimales="8" epaisseurPoint="2" totalBoucles="5000000" maxBoucle="500000" epaisseurLigne="2" arrondiAuto="vrai"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#CHAINE#Nom1" algoitem="Nom1 EST_DU_TYPE CHAINE"/>
        <item code="1#CHAINE#Nom2" algoitem="Nom2 EST_DU_TYPE CHAINE"/>
        <item code="1#CHAINE#Nom3" algoitem="Nom3 EST_DU_TYPE CHAINE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Entrez 3 prénoms#0" algoitem="AFFICHER &quot;Entrez 3 prénoms&quot;"/>
        <item code="2#Nom1#pasliste" algoitem="LIRE Nom1"/>
        <item code="2#Nom2#pasliste" algoitem="LIRE Nom2"/>
        <item code="2#Nom3#pasliste" algoitem="LIRE Nom3"/>
        <item code="103#commentaire" algoitem=""/>
        <item code="103#commentaire" algoitem=""/>
        <item code="103#commentaire" algoitem=""/>
        <item code="103#commentaire" algoitem=""/>
        <item code="6#Nom1.substr(0, 5) &lt; Nom2.substr(0, 5)" algoitem="SI (Nom1.substr(0, 5) &lt; Nom2.substr(0, 5)) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="6#Nom2.substr(0, 5) &lt; Nom3.substr(0, 5)" algoitem="SI (Nom2.substr(0, 5) &lt; Nom3.substr(0, 5)) ALORS">
                <item code="7#debutsi" algoitem="DEBUT_SI"/>
                <item code="4#Ils sont dans le bon ordre gamin#0" algoitem="AFFICHER &quot;Ils sont dans le bon ordre gamin&quot;"/>
                <item code="8#finsi" algoitem="FIN_SI"/>
            </item>
            <item code="8#finsi" algoitem="FIN_SI"/>
            <item code="9#sinon" algoitem="SINON">
                <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                <item code="4#Ils sont pas dans le bon ordre...#0" algoitem="AFFICHER &quot;Ils sont pas dans le bon ordre...&quot;"/>
                <item code="11#finsinon" algoitem="FIN_SINON"/>
            </item>
        </item>
        <item code="103#commentaire" algoitem=""/>
        <item code="103#commentaire" algoitem=""/>
        <item code="103#commentaire" algoitem=""/>
        <item code="103#commentaire" algoitem=""/>
        <item code="103#commentaire" algoitem=""/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
