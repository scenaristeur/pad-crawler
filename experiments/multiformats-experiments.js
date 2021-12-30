#!/usr/bin/env node


import { CID } from 'multiformats/cid'
import * as json from 'multiformats/codecs/json'
import { sha256 } from 'multiformats/hashes/sha2'

let data = {
  "date": 1640823236310,
  "root": {
    "url": "https://fr.wikipedia.org/wiki/Sp%C3%A9cial:Page_au_hasard",
    "name": "Wikipedia Fr Page au hasard",
    "title": "5 janvier 1964 — Wikipédia",
    "redirect": "https://fr.wikipedia.org/wiki/5_janvier_1964"
  },
  "links": [
    {
      "url": "https://fr.wikipedia.org/wiki/5_janvier_1964#content",
      "text": "Aller au contenu",
      "order": 1
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal",
      "text": "",
      "order": 2
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Sp%C3%A9cial:Recherche",
      "text": "",
      "order": 3
    },
    {
      "url": "https://fr.wikipedia.org/w/index.php?title=Sp%C3%A9cial:Cr%C3%A9er_un_compte&returnto=5+janvier+1964",
      "text": "Créer un compte",
      "order": 4
    },
    {
      "url": "https://fr.wikipedia.org/w/index.php?title=Sp%C3%A9cial:Cr%C3%A9er_un_compte&returnto=5+janvier+1964",
      "text": "",
      "order": 5
    },
    {
      "url": "https://fr.wikipedia.org/w/index.php?title=Sp%C3%A9cial:Connexion&returnto=5+janvier+1964",
      "text": "",
      "order": 6
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Aide:Introduction",
      "text": "",
      "order": 7
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Sp%C3%A9cial:Mes_discussions",
      "text": "",
      "order": 8
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Sp%C3%A9cial:Mes_contributions",
      "text": "",
      "order": 9
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal",
      "text": "Accueil",
      "order": 10
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Portail:Accueil",
      "text": "Portails thématiques",
      "order": 11
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Sp%C3%A9cial:Page_au_hasard",
      "text": "Article au hasard",
      "order": 12
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Contact",
      "text": "Contact",
      "order": 13
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Aide:D%C3%A9buter",
      "text": "Débuter sur Wikipédia",
      "order": 14
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Aide:Accueil",
      "text": "Aide",
      "order": 15
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_de_la_communaut%C3%A9",
      "text": "Communauté",
      "order": 16
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Sp%C3%A9cial:Modifications_r%C3%A9centes",
      "text": "Modifications récentes",
      "order": 17
    },
    {
      "url": "https://donate.wikimedia.org/wiki/Special:FundraiserRedirector?utm_source=donate&utm_medium=sidebar&utm_campaign=C13_fr.wikipedia.org&uselang=fr",
      "text": "Faire un don",
      "order": 18
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Sp%C3%A9cial:Pages_li%C3%A9es/5_janvier_1964",
      "text": "Pages liées",
      "order": 19
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Sp%C3%A9cial:Suivi_des_liens/5_janvier_1964",
      "text": "Suivi des pages liées",
      "order": 20
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Aide:Importer_un_fichier",
      "text": "Téléverser un fichier",
      "order": 21
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Sp%C3%A9cial:Pages_sp%C3%A9ciales",
      "text": "Pages spéciales",
      "order": 22
    },
    {
      "url": "https://fr.wikipedia.org/w/index.php?title=5_janvier_1964&oldid=188474523",
      "text": "Lien permanent",
      "order": 23
    },
    {
      "url": "https://fr.wikipedia.org/w/index.php?title=5_janvier_1964&action=info",
      "text": "Informations sur la page",
      "order": 24
    },
    {
      "url": "https://fr.wikipedia.org/w/index.php?title=Sp%C3%A9cial:Citer&page=5_janvier_1964&id=188474523&wpFormIdentifier=titleform",
      "text": "Citer cette page",
      "order": 25
    },
    {
      "url": "https://www.wikidata.org/wiki/Special:EntityPage/Q69286475",
      "text": "Élément Wikidata",
      "order": 26
    },
    {
      "url": "https://www.wikidata.org/wiki/Special:EntityPage/Q69286475#sitelinks-wikipedia",
      "text": "Ajouter des liens interlangues",
      "order": 27
    },
    {
      "url": "https://fr.wikipedia.org/w/index.php?title=Sp%C3%A9cial:Livre&bookcmd=book_creator&referer=5+janvier+1964",
      "text": "Créer un livre",
      "order": 28
    },
    {
      "url": "https://fr.wikipedia.org/w/index.php?title=Sp%C3%A9cial:DownloadAsPdf&page=5_janvier_1964&action=show-download-screen",
      "text": "Télécharger comme PDF",
      "order": 29
    },
    {
      "url": "https://fr.wikipedia.org/w/index.php?title=5_janvier_1964&printable=yes",
      "text": "Version imprimable",
      "order": 30
    },
    {
      "url": "https://commons.wikimedia.org/wiki/Category:1964-01-05",
      "text": "Wikimedia Commons",
      "order": 31
    },
    {
      "url": "https://fr.wikipedia.org/wiki/5_janvier_1964",
      "text": "Article",
      "order": 32
    },
    {
      "url": "https://fr.wikipedia.org/w/index.php?title=Discussion:5_janvier_1964&action=edit&redlink=1",
      "text": "Discussion",
      "order": 33
    },
    {
      "url": "https://fr.wikipedia.org/wiki/5_janvier_1964",
      "text": "Lire",
      "order": 34
    },
    {
      "url": "https://fr.wikipedia.org/w/index.php?title=5_janvier_1964&veaction=edit",
      "text": "Modifier",
      "order": 35
    },
    {
      "url": "https://fr.wikipedia.org/w/index.php?title=5_janvier_1964&action=edit",
      "text": "Modifier le code",
      "order": 36
    },
    {
      "url": "https://fr.wikipedia.org/w/index.php?title=5_janvier_1964&action=history",
      "text": "Voir l’historique",
      "order": 37
    },
    {
      "url": null,
      "text": "",
      "order": 38
    },
    {
      "url": "https://commons.wikimedia.org/wiki/File:Circle-icons-calendar.svg?uselang=fr",
      "text": "",
      "order": 39
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Aide:%C3%89bauche",
      "text": "ébauche",
      "order": 40
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Chronologie",
      "text": "chronologie",
      "order": 41
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Date",
      "text": "date",
      "order": 42
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Aide:Comment_modifier_une_page",
      "text": "comment ?",
      "order": 43
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Projet:Accueil",
      "text": "projets correspondants",
      "order": 44
    },
    {
      "url": "https://commons.wikimedia.org/wiki/File:Circle-icons-dev.svg?uselang=fr",
      "text": "",
      "order": 45
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Utilisateur:DickensBot",
      "text": "DickensBot",
      "order": 46
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Cat%C3%A9gorie:Article_cr%C3%A9%C3%A9_automatiquement_ou_semi-automatiquement",
      "text": "catégorie dédiée",
      "order": 47
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Bot/Requ%C3%AAtes",
      "text": "Wikipédia:Bot/Requêtes",
      "order": 48
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Calendrier_gr%C3%A9gorien",
      "text": "Calendrier grégorien",
      "order": 49
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Janvier_1964",
      "text": "janvier 1964",
      "order": 50
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Jour",
      "text": "jour",
      "order": 51
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Dimanche",
      "text": "dimanche",
      "order": 52
    },
    {
      "url": "https://fr.wikipedia.org/wiki/1964",
      "text": "1964",
      "order": 53
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Semaine_1",
      "text": "semaine 1",
      "order": 54
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Astronomie",
      "text": "Astronomie",
      "order": 55
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Phase_de_la_Lune",
      "text": "Phase lunaire",
      "order": 56
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Janvier",
      "text": "janvier",
      "order": 57
    },
    {
      "url": "https://fr.wikipedia.org/wiki/1964",
      "text": "1964",
      "order": 58
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Lundi",
      "text": "Lu",
      "order": 59
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Mardi",
      "text": "Ma",
      "order": 60
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Mercredi",
      "text": "Me",
      "order": 61
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Jeudi",
      "text": "Je",
      "order": 62
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Vendredi",
      "text": "Ve",
      "order": 63
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Samedi",
      "text": "Sa",
      "order": 64
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Dimanche",
      "text": "Di",
      "order": 65
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Semaine_1",
      "text": "1",
      "order": 66
    },
    {
      "url": "https://fr.wikipedia.org/wiki/1er_janvier",
      "text": "1er",
      "order": 67
    },
    {
      "url": "https://fr.wikipedia.org/wiki/2_janvier",
      "text": "2",
      "order": 68
    },
    {
      "url": "https://fr.wikipedia.org/wiki/3_janvier",
      "text": "3",
      "order": 69
    },
    {
      "url": "https://fr.wikipedia.org/wiki/4_janvier",
      "text": "4",
      "order": 70
    },
    {
      "url": "https://fr.wikipedia.org/wiki/5_janvier",
      "text": "5",
      "order": 71
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Semaine_2",
      "text": "2",
      "order": 72
    },
    {
      "url": "https://fr.wikipedia.org/wiki/6_janvier",
      "text": "6",
      "order": 73
    },
    {
      "url": "https://fr.wikipedia.org/wiki/7_janvier",
      "text": "7",
      "order": 74
    },
    {
      "url": "https://fr.wikipedia.org/wiki/8_janvier",
      "text": "8",
      "order": 75
    },
    {
      "url": "https://fr.wikipedia.org/wiki/9_janvier",
      "text": "9",
      "order": 76
    },
    {
      "url": "https://fr.wikipedia.org/wiki/10_janvier",
      "text": "10",
      "order": 77
    },
    {
      "url": "https://fr.wikipedia.org/wiki/11_janvier",
      "text": "11",
      "order": 78
    },
    {
      "url": "https://fr.wikipedia.org/wiki/12_janvier",
      "text": "12",
      "order": 79
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Semaine_3",
      "text": "3",
      "order": 80
    },
    {
      "url": "https://fr.wikipedia.org/wiki/13_janvier",
      "text": "13",
      "order": 81
    },
    {
      "url": "https://fr.wikipedia.org/wiki/14_janvier",
      "text": "14",
      "order": 82
    },
    {
      "url": "https://fr.wikipedia.org/wiki/15_janvier",
      "text": "15",
      "order": 83
    },
    {
      "url": "https://fr.wikipedia.org/wiki/16_janvier",
      "text": "16",
      "order": 84
    },
    {
      "url": "https://fr.wikipedia.org/wiki/17_janvier",
      "text": "17",
      "order": 85
    },
    {
      "url": "https://fr.wikipedia.org/wiki/18_janvier",
      "text": "18",
      "order": 86
    },
    {
      "url": "https://fr.wikipedia.org/wiki/19_janvier",
      "text": "19",
      "order": 87
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Semaine_4",
      "text": "4",
      "order": 88
    },
    {
      "url": "https://fr.wikipedia.org/wiki/20_janvier",
      "text": "20",
      "order": 89
    },
    {
      "url": "https://fr.wikipedia.org/wiki/21_janvier",
      "text": "21",
      "order": 90
    },
    {
      "url": "https://fr.wikipedia.org/wiki/22_janvier",
      "text": "22",
      "order": 91
    },
    {
      "url": "https://fr.wikipedia.org/wiki/23_janvier",
      "text": "23",
      "order": 92
    },
    {
      "url": "https://fr.wikipedia.org/wiki/24_janvier",
      "text": "24",
      "order": 93
    },
    {
      "url": "https://fr.wikipedia.org/wiki/25_janvier",
      "text": "25",
      "order": 94
    },
    {
      "url": "https://fr.wikipedia.org/wiki/26_janvier",
      "text": "26",
      "order": 95
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Semaine_5",
      "text": "5",
      "order": 96
    },
    {
      "url": "https://fr.wikipedia.org/wiki/27_janvier",
      "text": "27",
      "order": 97
    },
    {
      "url": "https://fr.wikipedia.org/wiki/28_janvier",
      "text": "28",
      "order": 98
    },
    {
      "url": "https://fr.wikipedia.org/wiki/29_janvier",
      "text": "29",
      "order": 99
    },
    {
      "url": "https://fr.wikipedia.org/wiki/30_janvier",
      "text": "30",
      "order": 100
    },
    {
      "url": "https://fr.wikipedia.org/wiki/31_janvier",
      "text": "31",
      "order": 101
    },
    {
      "url": "https://fr.wikipedia.org/w/index.php?title=5_janvier_1964&action=edit&section=0",
      "text": "modifier",
      "order": 102
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Mod%C3%A8le:Infobox_Jour",
      "text": "",
      "order": 103
    },
    {
      "url": "https://fr.wikipedia.org/wiki/1964",
      "text": "1964",
      "order": 104
    },
    {
      "url": "https://fr.wikipedia.org/wiki/5_janvier_1964#Naissances",
      "text": "1 Naissances",
      "order": 105
    },
    {
      "url": "https://fr.wikipedia.org/wiki/5_janvier_1964#D%C3%A9c%C3%A8s",
      "text": "2 Décès",
      "order": 106
    },
    {
      "url": "https://fr.wikipedia.org/wiki/5_janvier_1964#%C3%89v%C3%A9nements",
      "text": "3 Événements",
      "order": 107
    },
    {
      "url": "https://fr.wikipedia.org/wiki/5_janvier_1964#Voir_aussi",
      "text": "4 Voir aussi",
      "order": 108
    },
    {
      "url": "https://fr.wikipedia.org/w/index.php?title=5_janvier_1964&veaction=edit&section=1",
      "text": "modifier",
      "order": 109
    },
    {
      "url": "https://fr.wikipedia.org/w/index.php?title=5_janvier_1964&action=edit&section=1",
      "text": "modifier le code",
      "order": 110
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Ahmed_Janka_Nabay",
      "text": "Ahmed Janka Nabay",
      "order": 111
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Corinne_Bouchoux",
      "text": "Corinne Bouchoux",
      "order": 112
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Djamel_Zitouni",
      "text": "Djamel Zitouni",
      "order": 113
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Evi_Gr%C3%BCnenwald-Reimer",
      "text": "Evi Grünenwald-Reimer",
      "order": 114
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Jim_Cooper_(homme_politique_californien)",
      "text": "Jim Cooper (homme politique californien)",
      "order": 115
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Miguel_%C3%81ngel_Jim%C3%A9nez",
      "text": "Miguel Ángel Jiménez",
      "order": 116
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Nicolas_Gros-Verheyde",
      "text": "Nicolas Gros-Verheyde",
      "order": 117
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Olivier_Baroux",
      "text": "Olivier Baroux",
      "order": 118
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Samuel_Chomba",
      "text": "Samuel Chomba",
      "order": 119
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Yoshinori_Sembiki",
      "text": "Yoshinori Sembiki",
      "order": 120
    },
    {
      "url": "https://fr.wikipedia.org/w/index.php?title=5_janvier_1964&veaction=edit&section=2",
      "text": "modifier",
      "order": 121
    },
    {
      "url": "https://fr.wikipedia.org/w/index.php?title=5_janvier_1964&action=edit&section=2",
      "text": "modifier le code",
      "order": 122
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Cecil_Scott",
      "text": "Cecil Scott",
      "order": 123
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Eugen_Grosche",
      "text": "Eugen Grosche",
      "order": 124
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Fran%C3%A7ois_Vermeille",
      "text": "François Vermeille",
      "order": 125
    },
    {
      "url": "https://fr.wikipedia.org/w/index.php?title=5_janvier_1964&veaction=edit&section=3",
      "text": "modifier",
      "order": 126
    },
    {
      "url": "https://fr.wikipedia.org/w/index.php?title=5_janvier_1964&action=edit&section=3",
      "text": "modifier le code",
      "order": 127
    },
    {
      "url": "https://fr.wikipedia.org/wiki/%C3%89lection_pr%C3%A9sidentielle_centrafricaine_de_1964",
      "text": "Élection présidentielle centrafricaine de 1964",
      "order": 128
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Petit_Livre_rouge",
      "text": "Petit Livre rouge",
      "order": 129
    },
    {
      "url": "https://fr.wikipedia.org/wiki/%C3%89glise_catholique",
      "text": "Église catholique",
      "order": 130
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Paul_VI",
      "text": "Paul VI",
      "order": 131
    },
    {
      "url": "https://fr.wikipedia.org/wiki/%C3%89glise_orthodoxe",
      "text": "Église orthodoxe",
      "order": 132
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Patriarcat_orthodoxe_de_J%C3%A9rusalem",
      "text": "patriarche",
      "order": 133
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Beno%C3%AEt_Ier_de_J%C3%A9rusalem",
      "text": "Benoît Ier de Jérusalem",
      "order": 134
    },
    {
      "url": "https://fr.wikipedia.org/w/index.php?title=5_janvier_1964&veaction=edit&section=4",
      "text": "modifier",
      "order": 135
    },
    {
      "url": "https://fr.wikipedia.org/w/index.php?title=5_janvier_1964&action=edit&section=4",
      "text": "modifier le code",
      "order": 136
    },
    {
      "url": "https://fr.wikipedia.org/wiki/5_janvier",
      "text": "5 janvier",
      "order": 137
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Janvier_1964",
      "text": "janvier 1964",
      "order": 138
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Portail:Ann%C3%A9es_1960",
      "text": "",
      "order": 139
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Portail:Ann%C3%A9es_1960",
      "text": "Portail des années 1960",
      "order": 140
    },
    {
      "url": "https://fr.wikipedia.org/w/index.php?title=5_janvier_1964&oldid=188474523",
      "text": "",
      "order": 141
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Cat%C3%A9gorie:Accueil",
      "text": "Catégories",
      "order": 142
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Cat%C3%A9gorie:Date_sp%C3%A9cifique",
      "text": "Date spécifique",
      "order": 143
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Cat%C3%A9gorie:5_janvier",
      "text": "5 janvier",
      "order": 144
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Cat%C3%A9gorie:Janvier_1964",
      "text": "Janvier 1964",
      "order": 145
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Cat%C3%A9gorie:Jour_de_1964",
      "text": "Jour de 1964",
      "order": 146
    },
    {
      "url": null,
      "text": "[+]",
      "order": 147
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Cat%C3%A9gorie:Wikip%C3%A9dia:%C3%A9bauche_chronologie",
      "text": "",
      "order": 148
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Cat%C3%A9gorie:Article_cr%C3%A9%C3%A9_automatiquement_ou_semi-automatiquement_en_d%C3%A9cembre_2021",
      "text": "",
      "order": 149
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Cat%C3%A9gorie:Article_%C3%A0_illustrer_Date",
      "text": "",
      "order": 150
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Cat%C3%A9gorie:Article_utilisant_une_Infobox",
      "text": "",
      "order": 151
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Cat%C3%A9gorie:Portail:Ann%C3%A9es_1960/Articles_li%C3%A9s",
      "text": "",
      "order": 152
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Cat%C3%A9gorie:Portail:XXe_si%C3%A8cle/Articles_li%C3%A9s",
      "text": "",
      "order": 153
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Cat%C3%A9gorie:Portail:%C3%89poque_contemporaine/Articles_li%C3%A9s",
      "text": "",
      "order": 154
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Cat%C3%A9gorie:Portail:Histoire/Articles_li%C3%A9s",
      "text": "",
      "order": 155
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Citation_et_r%C3%A9utilisation_du_contenu_de_Wikip%C3%A9dia",
      "text": "Droit d'auteur",
      "order": 156
    },
    {
      "url": "https://creativecommons.org/licenses/by-sa/3.0/deed.fr",
      "text": "licence Creative Commons attribution, partage dans les mêmes conditions",
      "order": 157
    },
    {
      "url": "https://wikimediafoundation.org/wiki/Conditions_d%27utilisation",
      "text": "conditions d’utilisation",
      "order": 158
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Cr%C3%A9dits_graphiques",
      "text": "crédits graphiques",
      "order": 159
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Sp%C3%A9cial:Citer/5_janvier_1964",
      "text": "comment citer les auteurs et mentionner la licence",
      "order": 160
    },
    {
      "url": "https://wikimediafoundation.org/",
      "text": "Wikimedia Foundation, Inc.",
      "order": 161
    },
    {
      "url": "https://fr.wikipedia.org/wiki/501c",
      "text": "501(c)(3)",
      "order": 162
    },
    {
      "url": "https://meta.wikimedia.org/wiki/Privacy_policy/fr",
      "text": "Politique de confidentialité",
      "order": 163
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:%C3%80_propos_de_Wikip%C3%A9dia",
      "text": "À propos de Wikipédia",
      "order": 164
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Avertissements_g%C3%A9n%C3%A9raux",
      "text": "Avertissements",
      "order": 165
    },
    {
      "url": "https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Contact",
      "text": "Contact",
      "order": 166
    },
    {
      "url": "https://fr.m.wikipedia.org/w/index.php?title=5_janvier_1964&mobileaction=toggle_view_mobile",
      "text": "Version mobile",
      "order": 167
    },
    {
      "url": "https://www.mediawiki.org/wiki/Special:MyLanguage/How_to_contribute",
      "text": "Développeurs",
      "order": 168
    },
    {
      "url": "https://stats.wikimedia.org/#/fr.wikipedia.org",
      "text": "Statistiques",
      "order": 169
    },
    {
      "url": "https://foundation.wikimedia.org/wiki/Cookie_statement",
      "text": "Déclaration sur les témoins (cookies)",
      "order": 170
    },
    {
      "url": "https://fr.wikipedia.org/wiki/5_janvier_1964#",
      "text": "",
      "order": 171
    },
    {
      "url": "https://wikimediafoundation.org/",
      "text": "",
      "order": 172
    },
    {
      "url": "https://www.mediawiki.org/",
      "text": "",
      "order": 173
    }
  ]
}



async function example () {
  const bytes = json.encode(data)

  const hash = await sha256.digest(bytes)
  const cid = CID.create(1, json.code, hash)
  console.log(cid)

}

example().catch((err) => {
  console.error(err)
  process.exit(1)
})
