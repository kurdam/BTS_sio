<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="LIRE ageDuGosse"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2etat="inactif" F2para="" F2defaut="" F2lignes=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param totalAffichages="1000" nbDecimales="8" epaisseurPoint="2" totalBoucles="5000000" maxBoucle="500000" epaisseurLigne="2" arrondiAuto="vrai"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#ageDuGosse" algoitem="ageDuGosse EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Entre ton âge gamin#0" algoitem="AFFICHER &quot;Entre ton âge gamin&quot;"/>
        <item code="2#ageDuGosse#pasliste" algoitem="LIRE ageDuGosse"/>
        <item code="6#ageDuGosse > 5 ET ageDuGosse &lt;8" algoitem="SI (ageDuGosse > 5 ET ageDuGosse &lt;8) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="4#Poussin#0" algoitem="AFFICHER &quot;Poussin&quot;"/>
            <item code="8#finsi" algoitem="FIN_SI"/>
        </item>
        <item code="6#ageDuGosse > 7 ET ageDuGosse &lt; 10" algoitem="SI (ageDuGosse > 7 ET ageDuGosse &lt; 10) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="4#Pupille#0" algoitem="AFFICHER &quot;Pupille&quot;"/>
            <item code="8#finsi" algoitem="FIN_SI"/>
        </item>
        <item code="6#ageDuGosse > 9 ET ageDuGosse &lt; 12" algoitem="SI (ageDuGosse > 9 ET ageDuGosse &lt; 12) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="4#Minime#0" algoitem="AFFICHER &quot;Minime&quot;"/>
            <item code="8#finsi" algoitem="FIN_SI"/>
        </item>
        <item code="6#ageDuGosse > 11" algoitem="SI (ageDuGosse > 11) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="4#Cadet#0" algoitem="AFFICHER &quot;Cadet&quot;"/>
            <item code="8#finsi" algoitem="FIN_SI"/>
        </item>
        <item code="103#commentaire" algoitem=""/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
