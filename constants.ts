
import { LevelData, JournalType } from './types';

export const PLAN_COMPTABLE = [
    { account: "1000", label: "Capital souscrit" }, { account: "1010", label: "Capital non appelé (-)" }, { account: "1020", label: "Capital amorti" }, 
    { account: "1100", label: "Primes d'émission" }, { account: "1200", label: "Plus-values de réévaluation sur im. incorporelles" }, { account: "1210", label: "Plus-values de réévaluation sur im. corporelles" }, { account: "1211", label: "Quotité non amortie de la plus-value" }, { account: "1212", label: "Quotité amortie de la plus-value" }, { account: "1220", label: "Plus-values de réévaluation sur im. financières" }, { account: "1230", label: "Plus-values de réévaluation sur stocks" }, { account: "1240", label: "Reprises de réd. de valeur sur placement de trésor" }, { account: "1300", label: "Réserve légale" }, { account: "1310", label: "Réserves indisponibles pour actions propres" }, { account: "1311", label: "Autres réserves indisponibles" }, { account: "1320", label: "Réserves immunisées" }, { account: "1330", label: "Réserves disponibles" }, { account: "1400", label: "Bénéfice reporté" }, { account: "1410", label: "Perte reportée (-)" }, { account: "1500", label: "Subsides en capital" }, { account: "1600", label: "Provisions pour pensions et obligations similaires" }, { account: "1610", label: "Provisions pour charges fiscales" }, { account: "1620", label: "Provisions grosses réparations et gros entretiens" }, { account: "1630", label: "Provisions pour autres risques et charges" }, { account: "1680", label: "Impôts différés" }, { account: "1700", label: "Emprunts subordonnés convertibles" }, { account: "1701", label: "Emprunts subordonnés non convertibles" }, { account: "1710", label: "Emprunts obligataires non subordonnés convertibles" }, { account: "1711", label: "Emprunts obligataires non sub. non convertibles" }, { account: "1720", label: "Dettes de location-financement et assimilées" }, { account: "1730", label: "Dettes en compte" }, { account: "1731", label: "Promesses" }, { account: "1732", label: "Crédits d'acceptation" }, { account: "1740", label: "Autres emprunts" }, { account: "1750", label: "Dettes commerciales (Fournisseurs)" }, { account: "1751", label: "Effets à payer" }, { account: "1760", label: "Acomptes reçus sur commandes" }, { account: "1780", label: "Cautionnements reçus en numéraire" }, { account: "1790", label: "Dettes diverses" }, { account: "2000", label: "Frais de constitution et d'augmentation de capital" }, { account: "2009", label: "Amortissements actés sur frais de constit. (-)" }, { account: "2010", label: "Frais d'émission d'emprunts" }, { account: "2020", label: "Autres frais d'établissement" }, { account: "2029", label: "Amortissements actés s/ autres frais d'établis.(-)" }, { account: "2040", label: "Frais de restructuration" }, { account: "2049", label: "Amortissements actés s/ frais de restructurat. (-)" }, { account: "2100", label: "Frais de recherche et développement" }, { account: "2109", label: "Amortissements ou réductions de valeur actés (-)" }, { account: "2110", label: "Concessions, brevets, licences, savoir-faire etc." }, { account: "2119", label: "Amortissements ou réductions de valeur actés (-)" }, { account: "2120", label: "Goodwill" }, { account: "2129", label: "Amort. ou réduc. de valeur actés s/ Goodwill (-)" }, { account: "2130", label: "Acomptes versés" }, { account: "2139", label: "Amort. ou réduc. de valeur actés s/ acomptes (-)" }, { account: "2200", label: "Terrains" }, { account: "2201", label: "Frais d'acquisition et de mise en état" }, { account: "2202", label: "Intérêts intercalaires" }, { account: "2208", label: "Plus-values actées sur terrains" }, { account: "2209", label: "Amort. ou réduc. de valeur actés s/ terrains (-)" }, { account: "2210", label: "Constructions" }, { account: "2218", label: "Plus-values actées sur constructions" }, { account: "2219", label: "Amortissements actés sur constructions (-)" }, { account: "2220", label: "Terrains bâtis" }, { account: "2228", label: "Plus-values actées sur terrain bâtis" }, { account: "2229", label: "Amortissements actés sur terrain bâtis (-)" }, { account: "2230", label: "Autres droits réels sur des immeubles" }, { account: "2238", label: "Plus-values actées autres dr.réel s/ des immeubles" }, { account: "2239", label: "Amort. actés sur autre droit réel s/ des immeub(-)" }, { account: "2300", label: "Installations techniques et machines" }, { account: "2308", label: "Plus-values actées s/ inst.techniques et machines" }, { account: "2309", label: "Amort. actés sur inst.techniques et machines (-)" }, { account: "2320", label: "Outillage" }, { account: "2328", label: "Plus-values actées sur outillage" }, { account: "2329", label: "Amortissements actés sur outillage (-)" }, { account: "2400", label: "Mobilier et matériel de bureau" }, { account: "2408", label: "Plus-values actées sur mobilier et mat. de bureau" }, { account: "2409", label: "Amortissements sur mobilier et mat. de bureau (-)" }, { account: "2410", label: "Matériel roulant" }, { account: "2418", label: "Plus-values actées sur matériel roulant" }, { account: "2419", label: "Amortissements sur matériel roulant (-)" }, { account: "2500", label: "Terrains et constructions" }, { account: "2508", label: "Plus-values actées sur terrains et constructions" }, { account: "2509", label: "Amortissements sur terrains et constructions (-)" }, { account: "2510", label: "Installations, machines et outillage" }, { account: "2518", label: "Plus-values actées s/ instal., mach.et outillage" }, { account: "2519", label: "Amortissements sur inst.,mach.et outillage (-)" }, { account: "2520", label: "Mobilier et matériel roulant" }, { account: "2528", label: "Plus-values actées s/ mobilier et matériel roulant" }, { account: "2529", label: "Amortissements sur matériel roulant (-)" }, { account: "2600", label: "Val. d'acquisition des autres immo. corporelles" }, { account: "2608", label: "Plus-values actées s/ autres immo. corporelles" }, { account: "2609", label: "Amortissements sur autres immo. corporelles (-)" }, { account: "2700", label: "Valeur d'acquisition" }, { account: "2790", label: "Investissements de l'exercice" }, { account: "2800", label: "Participation dans des entreprises liées" }, { account: "2801", label: "Montants non appelés (-)" }, { account: "2808", label: "Plus-values actées" }, { account: "2809", label: "Réductions de valeur actées (-)" }, { account: "2810", label: "Créances sur des entreprises liées" }, { account: "2811", label: "Effets à recevoir" }, { account: "2812", label: "Titres à revenu fixe" }, { account: "2817", label: "Créances douteuses" }, { account: "2819", label: "Réductions de valeur actées (-)" }, { account: "2820", label: "Participation dans entr. avec lien de particip." }, { account: "2821", label: "Montants non appelés (-)" }, { account: "2828", label: "Plus-values actées" }, { account: "2829", label: "Réductions de valeur actées (-)" }, { account: "2830", label: "Créances sur entr. avec lien de participation" }, { account: "2831", label: "Effets à recevoir" }, { account: "2832", label: "Titres à revenu fixe" }, { account: "2837", label: "Créances douteuses" }, { account: "2838", label: "Plus-values actées" }, { account: "2839", label: "Réductions de valeur actées (-)" }, { account: "2840", label: "Autres actions et parts" }, { account: "2841", label: "Montants non appelés (-)" }, { account: "2848", label: "Plus-values actées" }, { account: "2849", label: "Réductions de valeur actées (-)" }, { account: "2850", label: "Autres créances" }, { account: "2851", label: "Effets à recevoir" }, { account: "2852", label: "Titres à revenu fixe" }, { account: "2857", label: "Créances douteuses" }, { account: "2859", label: "Réductions de valeur actées (-)" }, { account: "2880", label: "Cautionnements versés en numéraire" }, { account: "2900", label: "Créances commerciales" }, { account: "2901", label: "Effets à recevoir" }, { account: "2906", label: "Acomptes versés" }, { account: "2907", label: "Créances douteuses" }, { account: "2909", label: "Réductions de valeur actées (-)" }, { account: "2910", label: "Autres créances" }, { account: "2911", label: "Effets à recevoir" }, { account: "2917", label: "Créances douteuses" }, { account: "2919", label: "Réductions de valeur actées (-)" }, { account: "3000", label: "Valeur d'acquisition - matières premières" }, { account: "3090", label: "Réductions de valeur actées (-)" }, { account: "3100", label: "Valeur d'acquisition - fournitures" }, { account: "3190", label: "Réductions de valeur actées (-)" }, { account: "3200", label: "Valeur d'acquisition - En-cours de fabrication" }, { account: "3290", label: "Réductions de valeur actées (-)" }, { account: "3300", label: "Valeur d'acquisition - Produits finis" }, { account: "3390", label: "Réductions de valeur actées (-)" }, { account: "3400", label: "Valeur d'acquisition - Marchandises" }, { account: "3490", label: "Réductions de valeur actées (-)" }, { account: "3500", label: "Valeur d'acquisition - Imm. destinés à la vente" }, { account: "3590", label: "Réductions de valeur actées (-)" }, { account: "3600", label: "Acomptes versés" }, { account: "3690", label: "Réductions de valeur actées (-)" }, { account: "3700", label: "Valeur d'acquisition - Comm.en cours d'exécution" }, { account: "3710", label: "Bénéfice pris en compte" }, { account: "3790", label: "Réductions de valeur actées (-)" }, { account: "4000", label: "Clients" }, { account: "4010", label: "Effets à recevoir" }, { account: "4011", label: "Effets remis à l'encaissement" }, { account: "4012", label: "Effets remis à l'escompte" }, { account: "4040", label: "Produits à recevoir" }, { account: "4050", label: "Créances pour emballages à rendre" }, { account: "4051", label: "Fournisseurs débiteurs" }, { account: "4052", label: "Factures à étalir" }, { account: "4060", label: "Acomptes versés" }, { account: "4070", label: "Créances douteuses" }, { account: "4090", label: "Réductions de valeur actées (-)" }, { account: "4100", label: "Capital appelé, non versé (Appels de fonds)" }, { account: "4101", label: "Actionnaires défaillants" }, { account: "4110", label: "T.V.A. à récupérer sur achat" }, { account: "4111", label: "T.V.A. déductible intracommunautaire" }, { account: "4114", label: "T.V.A. à récupérer pour régularisation s/ NCV" }, { account: "4115", label: "T.V.A. déductible import + report" }, { account: "4117", label: "T.V.A. sur Acomptes versés" }, { account: "4119", label: "Compte Courant de l'administration T.V.A." }, { account: "4120", label: "Impôts belges sur le résultat" }, { account: "4125", label: "Autres impôts et taxes belges" }, { account: "4128", label: "Impôts et taxes étrangers" }, { account: "4140", label: "Produits à recevoir" }, { account: "4160", label: "Créances diverses" }, { account: "4170", label: "Créances douteuses" }, { account: "4180", label: "Cautionnements versés en numéraire" }, { account: "4190", label: "Réductions de valeur actées (-)" }, { account: "4200", label: "Emprunts subordonnés convertibles" }, { account: "4201", label: "Emprunts subordonnés non convertibles" }, { account: "4210", label: "Emprunts obligataires non subordonnés convertibles" }, { account: "4211", label: "Emprunts obligataires non subor. non convertibles" }, { account: "4220", label: "Dettes de location - financement et assimilées" }, { account: "4230", label: "Etablissement de crédit (Dette en compte)" }, { account: "4231", label: "Promesses" }, { account: "4232", label: "Crédits d'acceptation" }, { account: "4240", label: "Autres emprunts" }, { account: "4250", label: "Fournisseurs" }, { account: "4251", label: "Effets à payer" }, { account: "4260", label: "Acomptes reçus sur commandes" }, { account: "4280", label: "Cautionnements reçus en numéraire" }, { account: "4290", label: "Dettes diverses" }, { account: "4300", label: "Établis. de crédit - emprunts en cpte à terme fixe" }, { account: "4310", label: "Établissements de crédit - promesses" }, { account: "4320", label: "Établissements de crédit - crédits d'acceptation" }, { account: "4330", label: "Établissements de crédit - dettes en cpte courant" }, { account: "4340", label: "Warrants à payer" }, { account: "4390", label: "Autres emprunts" }, { account: "4400", label: "Fournisseurs" }, { account: "4410", label: "Effets à payer" }, { account: "4440", label: "Factures à recevoir" }, { account: "4450", label: "Dettes pour emballages consignés" }, { account: "4451", label: "Clients créditeurs" }, { account: "4452", label: "Notes de crédit à établir" }, { account: "4500", label: "Impôts belges sur le résultat" }, { account: "4505", label: "Autres impôts et taxes belges" }, { account: "4508", label: "Impôts et taxes étrangers" }, { account: "4510", label: "T.V.A. à payer s/ ventes & prestations de services" }, { account: "4511", label: "T.V.A. à payer intracommunautaire" }, { account: "4512", label: "T.V.A. à payer import + report" }, { account: "4513", label: "T.V.A. due (par le cocontractant) sur trav. immob." }, { account: "4514", label: "T.V.A. due pour régularisations s/ NCA" }, { account: "4519", label: "Compte courant de l'administration T.V.A." }, { account: "4520", label: "Impôts belges sur le résultat" }, { account: "4525", label: "Autres impôts et taxes belges" }, { account: "4528", label: "Impôts et taxes étrangers" }, { account: "4530", label: "Précompte professionnel retenu" }, { account: "4531", label: "Précompte mobilier retenu" }, { account: "4540", label: "O.N.S.S." }, { account: "4550", label: "Rémunérations" }, { account: "4560", label: "Pécule de vacances employés - provisions" }, { account: "4590", label: "Autres dettes sociales" }, { account: "4600", label: "Acomptes reçus sur commandes" }, { account: "4700", label: "Dividendes et tantièmes d'exercices antérieurs" }, { account: "4710", label: "Dividendes de l'exercice" }, { account: "4720", label: "Tantièmes de l'exercice" }, { account: "4730", label: "Autres allocataires" }, { account: "4740", label: "Actions à rembourser" }, { account: "4800", label: "Obligations et coupons échus" }, { account: "4810", label: "Versements anticipés sur capital non-appelé" }, { account: "4880", label: "Cautionnements reçus en numéraire" }, { account: "4890", label: "Autres dettes diverses" }, { account: "4900", label: "Charges à reporter" }, { account: "4910", label: "Produits acquis" }, { account: "4920", label: "Charges à imputer" }, { account: "4930", label: "Produits à reporter" }, { account: "4960", label: "Ecarts défavorables de conversion des devises" }, { account: "4970", label: "Ecarts favorables de conversion des devises" }, { account: "4990", label: "Comptes d'attente" }, { account: "5000", label: "Valeur d'acquisition - Actions propres" }, { account: "5100", label: "Valeur d'acquisition - Actions et parts" }, { account: "5110", label: "Montants non appelés (-)" }, { account: "5190", label: "Réductions de valeur actées (-)" }, { account: "5200", label: "Valeur d'acquisition - Titres à revenu fixe" }, { account: "5290", label: "Réductions de valeur actées (-)" }, { account: "5300", label: "Dépôts à terme - De plus d'un an" }, { account: "5310", label: "Dépôts à terme - De + d'un mois et à un an au plus" }, { account: "5320", label: "Dépôts à terme - D'un mois au plus" }, { account: "5390", label: "Réductions de valeur actées (-)" }, { account: "5400", label: "Valeurs échues à l'encaissement" }, { account: "5500", label: "Banques - compte courant" }, { account: "5501", label: "Banques - chèques émis" }, { account: "5509", label: "Banques - réductions de valeur actées (-)" }, { account: "5600", label: "Compte courant" }, { account: "5610", label: "Chèques émis (-)" }, { account: "5700", label: "Caisses - espèces - EUR" }, { account: "5780", label: "Caisses - timbres - EUR" }, { account: "5800", label: "Virements internes" }, { account: "6000", label: "Achats de matières premières" }, { account: "6010", label: "Achats de fournitures" }, { account: "6020", label: "Achats de services, travaux et études" }, { account: "6030", label: "Sous-traitances générales" }, { account: "6040", label: "Achats de marchandises" }, { account: "6050", label: "Achats d'immeubles destinés à la vente" }, { account: "6080", label: "Remises, ristournes et rabais obtenus (-)" }, { account: "6090", label: "Variation des stocks de matières premières" }, { account: "6091", label: "Variation des stocks de fournitures" }, { account: "6094", label: "Variation des stocks de marchandises" }, { account: "6095", label: "Var. des stocks d'imm. achetés destinés à la vente" }, { account: "6100", label: "Charges locatives terrains" }, { account: "6101", label: "Charges locatives constructions" }, { account: "6102", label: "Charges locatives machines, matériel, outillage" }, { account: "6103", label: "Charges locatives matériel roulant (voitures etc.)" }, { account: "6104", label: "Charges locatives matériel roulant (utilitaires)" }, { account: "6105", label: "Entretien et réparations - terrains" }, { account: "6106", label: "Entretien et réparations - constructions" }, { account: "6107", label: "Entretien et réparations - machines et outillage" }, { account: "6108", label: "Entretien et réparations - matériel roulant (voit)" }, { account: "6109", label: "Entretien et réparations - matériel roulant (util)" }, { account: "6110", label: "Fournitures de bureau et imprimés" }, { account: "6111", label: "Livres, prospectus et documentation" }, { account: "6112", label: "Petit matériel" }, { account: "6113", label: "Produits d'entretien" }, { account: "6114", label: "Produits de consommation non repris en 60" }, { account: "6115", label: "Consommation eau" }, { account: "6116", label: "Consommation gaz" }, { account: "6117", label: "Consommation électricité" }, { account: "6118", label: "Consommation mazout" }, { account: "6120", label: "Secrétariats sociaux" }, { account: "6121", label: "Prestations informatives" }, { account: "6122", label: "Services factors" }, { account: "6123", label: "Bureaux d'études" }, { account: "6124", label: "Organismes financiers" }, { account: "6125", label: "Contrôle technique (voitures, etc.)" }, { account: "6126", label: "Contrôle technique (utilitaires)" }, { account: "6127", label: "Redevances et royalties sur brevets" }, { account: "6128", label: "Redevances et royalties sur licences" }, { account: "6130", label: "Assurance incendie" }, { account: "6131", label: "Assurance vol" }, { account: "6132", label: "Assurance perte de bénéfice" }, { account: "6133", label: "Assurance tempête, grêle, intempéries" }, { account: "6134", label: "Assurance matériel roulant (voitures)" }, { account: "6135", label: "Assurance matériel roulant (utilitaires)" }, { account: "6136", label: "Assurance responsabilité risques civils" }, { account: "6137", label: "Assurance responsabilité risques professionnels" }, { account: "6138", label: "Assurance transport de marchandises" }, { account: "6139", label: "Assurance crédit" }, { account: "6140", label: "Transport sur vente (opération générale)" }, { account: "6141", label: "Transport maritime" }, { account: "6142", label: "Transport voie d'eau" }, { account: "6143", label: "Transport ferroviaire" }, { account: "6144", label: "Transport par route" }, { account: "6145", label: "Transport par air" }, { account: "6146", label: "Autres frais de transport" }, { account: "6147", label: "Transport à l'intérieur de l'entreprise" }, { account: "6148", label: "Prestation d'appareils de levage" }, { account: "6149", label: "Transport en dehors de l'entreprise" }, { account: "6150", label: "Commissions sur ventes" }, { account: "6151", label: "Commissions sur achats" }, { account: "6152", label: "Honoraires comptables" }, { account: "6153", label: "Honoraires architectes" }, { account: "6154", label: "Honoraires médecins" }, { account: "6155", label: "Honoraires vétérinaires" }, { account: "6156", label: "Honoraires experts" }, { account: "6157", label: "Honoraires avocats" }, { account: "6160", label: "Frais postaux" }, { account: "6161", label: "Frais de port" }, { account: "6162", label: "Téléphone, GSM" }, { account: "6163", label: "Télex, fax, Internet" }, { account: "6165", label: "Frais de déplacement (partie carburant)" }, { account: "6166", label: "Frais de déplacement (autres frais)" }, { account: "6167", label: "Frais de déplacement à l'étranger" }, { account: "6168", label: "Frais de réception limités" }, { account: "6169", label: "Frais de réception non limités" }, { account: "6170", label: "Personnes intérimaires" }, { account: "6171", label: "Personnes mises à disposition" }, { account: "6180", label: "Rémunérations, primes, pensions de retraite etc." }, { account: "6190", label: "Publicité et annonces" }, { account: "6191", label: "Affiches, imprimés, catalogues, échantillons etc." }, { account: "6192", label: "Participation aux foires, expositions, missions" }, { account: "6193", label: "Frais d'étalage de démonstration" }, { account: "6194", label: "Cadeaux et fleurs limités" }, { account: "6195", label: "Cadeaux et fleurs non limités" }, { account: "6196", label: "Cotisations" }, { account: "6197", label: "Dons et libéralités" }, { account: "6200", label: "Rémunérations des dirigeants d'entreprise" }, { account: "6201", label: "Personnel de direction - temps plein" }, { account: "6202", label: "Personnel de direction - temps partiel" }, { account: "6203", label: "Personnel employé - administratif à temps plein" }, { account: "6204", label: "Personnel employé - administratif à temps partiel" }, { account: "6205", label: "Personnel ouvrier à temps plein" }, { account: "6206", label: "Personnel ouvrier à temps partiel" }, { account: "6207", label: "Autres membres du personnel" }, { account: "6210", label: "Cotisations patronales d'assurances sociales" }, { account: "6220", label: "Primes patronales pour assurances extra-légales" }, { account: "6230", label: "Autres frais de personnel" }, { account: "6240", label: "Pensions de retraite et de survie admin. et gérant" }, { account: "6241", label: "Pensions de retraite et de survie personnel" }, { account: "6250", label: "Dotations" }, { account: "6251", label: "Utilisations et reprises (-)" }, { account: "6260", label: "Dotations" }, { account: "6261", label: "Utilisations et reprises (-)" }, { account: "6300", label: "Dot. aux amort. sur frais d'établissement" }, { account: "6301", label: "Dot. aux amort. sur immobilisations incorporelles" }, { account: "6302", label: "Dot. aux amort. sur immobilisations corporelles" }, { account: "6308", label: "Dot. aux réduc. de valeur sur immob. incorporelles" }, { account: "6309", label: "Dot. aux réduc. de valeur sur immob. corporelles" }, { account: "6310", label: "Dot. aux réductions de valeur sur stocks" }, { account: "6311", label: "Reprises de réductions de val. sur stocks (-)" }, { account: "6320", label: "Dot. aux réd. val. sur commandes en cours d'exéc." }, { account: "6321", label: "Reprises de réd. val. sur com. en cours d'exéc.(-)" }, { account: "6330", label: "Dot. aux réd. val. sur créanc. com. à plus d'un an" }, { account: "6331", label: "Reprises de réd. val. sur cr. com. à + d'un an (-)" }, { account: "6340", label: "Dot. aux réd. val. sur créances à moins d'un an" }, { account: "6341", label: "Reprises de réd. val. sur cr. com. < un an (-)" }, { account: "6350", label: "Dotations aux provisions pour pensions" }, { account: "6351", label: "Utilisations et rep. des prov. pour pensions (-)" }, { account: "6360", label: "Dot. aux prov. pour grosses réparat. & entretiens" }, { account: "6361", label: "Util.&rep.des prov.pour grosses répar.& entret.(-)" }, { account: "6370", label: "Dot. aux provisions pour autres risques et charges" }, { account: "6371", label: "Util.&rep.des prov. pr autres risques et charg (-)" }, { account: "6400", label: "Charges fiscales d'exploitation" }, { account: "6405", label: "Droits d'enregistrement et publication légale" }, { account: "6410", label: "Moins-values sur réal. courantes d'immob. corp." }, { account: "6420", label: "Moins-values sur réal. de créances commerciales" }, { account: "6430", label: "Charges d'exploitation diverses" }, { account: "6490", label: "Charg.d'expl.portée à l'actif (fr.restructur.) (-)" }, { account: "6500", label: "Intérêts, commissions - frais afférents aux dettes" }, { account: "6501", label: "Amort.des frais d'émis.d'emprunts & primes de remb" }, { account: "6502", label: "Autres charges des dettes" }, { account: "6503", label: "Intérêts intercalaires portés à l'actif (-)" }, { account: "6510", label: "Dotations aux réd. val. sur actifs circulants" }, { account: "6511", label: "Reprises de réd. de val. sur actifs circulants (-)" }, { account: "6520", label: "Moins-values sur réalisation d'actifs circulants" }, { account: "6530", label: "Charges d'escompte de créances" }, { account: "6540", label: "Différences de change" }, { account: "6550", label: "Écarts de conversion des devises" }, { account: "6560", label: "Dotations aux provisions à caractère financier" }, { account: "6561", label: "Utilisations et repr. de prov. à caract. fin. (-)" }, { account: "6570", label: "Frais d'acquisition et de vente de titres" }, { account: "6580", label: "Frais de banque et de règlement" }, { account: "6590", label: "Charges financières diverses" }, { account: "6600", label: "Dot. aux amort. except. s/ frais d'établissement" }, { account: "6601", label: "Dot. aux amort. except. s/ immo. Incorp." }, { account: "6602", label: "Dot. aux amort. except. s/ immo. Corp." }, { account: "6610", label: "Dot. aux réd. val. sur immo. financières" }, { account: "6620", label: "Dot. aux prov. pour risques et charges exception." }, { account: "6621", label: "Util. de prov. pour risques et charges except. (-)" }, { account: "6630", label: "Moins-values sur réalisation d'actifs immobilisés" }, { account: "6640", label: "Autres charges exceptionnelles" }, { account: "6690", label: "Charges excep. portées à l'actif (fr.restruc) (-) " }, { account: "6700", label: "Impôts ou précomptes dus ou versés" }, { account: "6701", label: "Exc.de vers.d'imp. & de préc.portés à l'actif (-)" }, { account: "6702", label: "Charges fiscales estimées" }, { account: "6710", label: "Suppléments d'impôts dus ou versés" }, { account: "6711", label: "Suppléments d'impôts estimés" }, { account: "6712", label: "Provisions fiscales constituées" }, { account: "6713", label: "Impôts contestés (-)" }, { account: "6720", label: "Impôts étrangers sur le résultat de l'exercice" }, { account: "6730", label: "Impôts étrangers sur le résultat d'ex. antérieurs" }, { account: "6800", label: "Transferts aux impôts différés" }, { account: "6890", label: "Transferts aux réserves immunisées" }, { account: "6900", label: "Perte reportée de l'exercice précédent" }, { account: "6910", label: "Affectations au capital et à la prime d'émission" }, { account: "6920", label: "Dotation à la réserve légale" }, { account: "6921", label: "Dotation aux autres réserves" }, { account: "6930", label: "Bénéfice à reporter" }, { account: "6940", label: "Rémunération du capital" }, { account: "6950", label: "Administrateurs ou gérants" }, { account: "6960", label: "Autres allocataires" }, { account: "6970", label: "Actions à rembourser" }, { account: "7000", label: "Ventes de marchandises" }, { account: "7010", label: "Ventes de produits finis" }, { account: "7020", label: "Ventes d'immeubles acquis en vue de leur revente" }, { account: "7030", label: "Ventes sur commandes" }, { account: "7040", label: "Ventes d'emballages récupérables" }, { account: "7070", label: "Prestations de services" }, { account: "7080", label: "Remises, ristournes et rabais accordés (-)" }, { account: "7120", label: "Des en-cours de fabrication" }, { account: "7130", label: "Des produits finis" }, { account: "7150", label: "Des immeubles construits destinés à la vente" }, { account: "7170", label: "Des commandes en cours d'exécution" }, { account: "7171", label: "Bénéfice pris en compte des comm.en cours d'ex." }, { account: "7200", label: "Production immobilisée" }, { account: "7400", label: "Subsides d'exploitation et montants compensatoires" }, { account: "7410", label: "Plus-values sur réal. courantes d'immo. corporel." }, { account: "7420", label: "Plus-values sur réal. de créances commerciales" }, { account: "7430", label: "Commissions et courtages" }, { account: "7440", label: "Prestations de services" }, { account: "7450", label: "Redevances pour brevets et licences" }, { account: "7460", label: "Revenus des immeubles" }, { account: "7470", label: "Revenus d'autres locations" }, { account: "7480", label: "Récupérations de frais auprès de tiers" }, { account: "7490", label: "Produits d'exploitation divers" }, { account: "7500", label: "Produits des immobilisations financières" }, { account: "7510", label: "Produits des actifs circulants" }, { account: "7520", label: "Plus-values sur réalisation d'actifs circulants" }, { account: "7530", label: "Subsides en capital et en intérêts" }, { account: "7540", label: "Différences de change" }, { account: "7550", label: "Écarts de conversion des devises" }, { account: "7560", label: "Escomptes obtenus des fournisseurs" }, { account: "7570", label: "Écarts de paiement" }, { account: "7580", label: "Récupérations de frais auprès de tiers" }, { account: "7590", label: "Produits financiers divers" }, { account: "7600", label: "Rep.d'amort. & de réd.val. sur immo. incorporelles" }, { account: "7601", label: "Rep.d'amort. & de réd.val. sur immo. corporelles" }, { account: "7610", label: "Reprises de réd. de valeur sur immo. financières" }, { account: "7620", label: "Reprises de prov. pour risques et charges except." }, { account: "7630", label: "Plus-values sur réalisation d'actifs immobilisés" }, { account: "7640", label: "Autres produits exceptionnels" }, { account: "7710", label: "Régularisation d'impôts dus ou versés" }, { account: "7711", label: "Régularisation d'impôts estimés" }, { account: "7712", label: "Reprises de provisions fiscales" }, { account: "7730", label: "Impôts étrangers sur le résultat" }, { account: "7800", label: "Prélèvements sur les impôts différés" }, { account: "7890", label: "Prélèvements sur réserves immunisées" }, { account: "7900", label: "Bénéfice reporté de l'exercice précédent" }, { account: "7910", label: "Prélèvement sur le capital & les primes d'émission" }, { account: "7920", label: "Prélèvement sur les réserves" }, { account: "7930", label: "Perte à reporter" }, { account: "7940", label: "Intervention d'associés dans la perte" }
];

export const DECLARATION_TVA = {
  cadreII: [
    { code: "01", label: "6%" },
    { code: "02", label: "12%" },
    { code: "03", label: "21%" },
    { code: "45", label: "COCONTRACTANT" },
    { code: "46", label: "INTRACOMMUNAUTAIRE" },
    { code: "47", label: "EXPORTATION" },
    { code: "48", label: "NC s/Ventes IC" },
    { code: "49", label: "NC s/Autres" }
  ],
  cadreIII: [
    { code: "81", label: "Marchandises, matières premières" },
    { code: "82", label: "SBD" },
    { code: "83", label: "Investissements" },
    { code: "84", label: "NC s/IC" },
    { code: "85", label: "NC autres" },
    { code: "86", label: "Achats IC" },
    { code: "87", label: "Achats Cocontractant (+ PS intracommunautaire)" }
  ],
  cadreIV: [
    { code: "54", label: "TVA s/ventes" },
    { code: "55", label: "TVA IC" },
    { code: "56", label: "TVA Cocontractant" },
    { code: "57", label: "TVA Import" },
    { code: "63", label: "NC s/achats" },
    { code: "xx", label: "TOTAL" }
  ],
  cadreV: [
    { code: "59", label: "TVA déductible (s/achats)" },
    { code: "64", label: "TVA s/NC s/ventes" },
    { code: "YY", label: "TOTAL" }
  ],
  cadreVI: [
    { code: "71", label: "TVA due à l'état (à payer)" },
    { code: "72", label: "TVA due par l'état (à récupérer)" }
  ]
};

export const CODES_POPSY = {
  achats: [
    { code: "6CM", tva: "6%", label: "Marchandises Cocontractant" },
    { code: "6CS", tva: "6%", label: "Services Cocontractant" },
    { code: "6CV", tva: "6%", label: "Investissements Cocontractant" },
    { code: "6IM", tva: "6%", label: "Marchandises Intracommunautaires" },
    { code: "6IS", tva: "6%", label: "Services Intracommunautaires" },
    { code: "6IV", tva: "6%", label: "Investissements Intracommunautaires" },
    { code: "6M", tva: "6%", label: "Marchandises" },
    { code: "6S", tva: "6%", label: "Services" },
    { code: "6V", tva: "6%", label: "Investissements" },
    { code: "6XM", tva: "6%", label: "Marchandises Importations" },
    { code: "6XS", tva: "6%", label: "Services Importations" },
    { code: "6XV", tva: "6%", label: "Investissements Importations" },
    { code: "21CM", tva: "21%", label: "Marchandises Cocontractant" },
    { code: "21CS", tva: "21%", label: "Services Cocontractant" },
    { code: "21CV", tva: "21%", label: "Investissements Cocontractant" },
    { code: "21IM", tva: "21%", label: "Marchandises Intracommunautaires" },
    { code: "21IS", tva: "21%", label: "Services Intracommunautaires" },
    { code: "21IV", tva: "21%", label: "Investissements Intracommunautaires" },
    { code: "21M", tva: "21%", label: "Marchandises - 60" },
    { code: "21S", tva: "21%", label: "Services - 61" },
    { code: "21V", tva: "21%", label: "Investissements - 2" },
    { code: "21XM", tva: "21%", label: "Marchandises Importations" },
    { code: "21XS", tva: "21%", label: "Services Importations" },
    { code: "21XV", tva: "21%", label: "Investissements Importations" }
  ],
  ventes: [
    { code: "0", tva: "0%", label: "TVA 0%" },
    { code: "6", tva: "6%", label: "TVA 6%" },
    { code: "12", tva: "12%", label: "TVA 12%" },
    { code: "21", tva: "21%", label: "TVA 21%" },
    { code: "C0", tva: "0%", label: "TVA 0% Cocontractant" },
    { code: "EX", tva: "", label: "Exonéré" },
    { code: "I0", tva: "0%", label: "TVA 0% Intracommunautaire" },
    { code: "X0", tva: "0%", label: "TVA 0% Exportations" }
  ],
  divers: [
    { code: "21ND", label: "TVA SUR FRAIS DE VOITURE (50% TVA RECUP) = sbd (case 82 décl tva)" },
    { code: "EX", label: "Pour les loyers, timbres, taxes, assurances et emballages consignés" }
  ]
};

// EXERCICES (31 Niveaux, Ex 25 supprimé)
export const RAW_LEVELS: LevelData[] = [
  // 1. Réouverture
  {
    id: 1, title: "Exercice de réouverture", description: "Écriture d'ouverture au 1er Janvier.",
    documents: [{ type: 'NOTE', title: "Situation au 01/01", content: { text: "Au 1er janvier, la société possède 25.000 Eur en banque et 2.000 Eur en caisse.\nCapital : 27.000 Eur." } }],
    requiredJournals: [{ type: JournalType.OD, defaultDate: "01/01/N", solution: [{ id: 's1', accountNumber: '5500', debit: '25.000', credit: '', declTva: '', codePopsy: '', label: '' }, { id: 's2', accountNumber: '5700', debit: '2.000', credit: '', declTva: '', codePopsy: '', label: '' }, { id: 's3', accountNumber: '1000', debit: '', credit: '27.000', declTva: '', codePopsy: '', label: '' }] }]
  },
  // 2. Achat Simple
  {
    id: 2, title: "Achat Marchandises (Liquide)", description: "Achat marchandises paiement liquide.",
    documents: [{ type: 'INVOICE', title: "Facture 105", content: { sender: { name: "BRICO WORLD", vat: "BE 0424.850.991" }, receiver: { name: "SPRL OUTISUD", vat: "BE 0415.776.939" }, details: { number: "105", date: "02/01/N" }, lines: [{ desc: "Produit B", total: "2500" }, { desc: "RRR", total: "-250" }], totals: { toPay: "2722,50", totalVat: "472,50", totalExcl: "2250,00", bases: [{ rate: "21%", base: "2250", tax: "472,50" }] } } }],
    requiredJournals: [
      { type: JournalType.ACHAT, defaultDate: "02/01/N", solution: [{ id: 's1', accountNumber: '6040', debit: '2250', credit: '', declTva: '81', codePopsy: '21M', label: '' }, { id: 's2', accountNumber: '4110', debit: '472,50', credit: '', declTva: '59', codePopsy: '', label: '' }, { id: 's3', accountNumber: '4400', credit: '2722,50', debit: '', declTva: '', codePopsy: '', label: '' }] },
      { type: JournalType.CAISSE, defaultDate: "02/01/N", solution: [{ id: 's1', accountNumber: '4400', debit: '2722,50', credit: '', declTva: '', codePopsy: '', label: '' }, { id: 's2', accountNumber: '5700', credit: '2722,50', debit: '', declTva: '', codePopsy: '', label: '' }] }
    ]
  },
  // 3. Chèque
  {
    id: 3, title: "Paiement par Chèque", description: "Facture électricité payée par chèque.",
    documents: [
        { type: 'INVOICE', title: "Fac 204", content: { sender: { name: "TOTAL ENERGIES" }, receiver: { name: "OUTISUD" }, details: { number: "204", date: "03/01/N" }, lines: [{ desc: "Facture", total: "4500" }], totals: { toPay: "5445", totalVat: "945", totalExcl: "4500", bases: [{ rate: "21%", base: "4500", tax: "945" }] } } },
        { type: 'BANK_EXTRACT', title: "Extrait 31", content: { account: "068-...", transactions: [{ date: "05/01/N", desc: "Chèque", amount: "-5.445,00" }] } }
    ],
    requiredJournals: [
        { type: JournalType.ACHAT, defaultDate: "03/01/N", solution: [{ id: 's1', accountNumber: '6117', debit: '4500', credit: '', declTva: '82', codePopsy: '21S', label: '' }, { id: 's2', accountNumber: '4110', debit: '945', credit: '', declTva: '59', codePopsy: '', label: '' }, { id: 's3', accountNumber: '4400', credit: '5445', debit: '', declTva: '', codePopsy: '', label: '' }] },
        { type: JournalType.OD, defaultDate: "03/01/N", solution: [{ id: 's1', accountNumber: '4400', debit: '5445', credit: '', declTva: '', codePopsy: '', label: '' }, { id: 's2', accountNumber: '5501', credit: '5445', debit: '', declTva: '', codePopsy: '', label: '' }] },
        { type: JournalType.FINANCIER, defaultDate: "05/01/N", solution: [{ id: 's1', accountNumber: '5501', debit: '5445', credit: '', declTva: '', codePopsy: '', label: '' }, { id: 's2', accountNumber: '5500', credit: '5445', debit: '', declTva: '', codePopsy: '', label: '' }] }
    ]
  },
  // 4. Virement
  {
    id: 4, title: "Achat Mobilier", description: "Achat mobilier et virement.",
    documents: [
        { type: 'INVOICE', title: "Fac 110", content: { sender: { name: "OFFICE DEPOT" }, receiver: { name: "OUTISUD" }, details: { number: "110", date: "04/01/N" }, lines: [{ desc: "Bureau", total: "6000" }], totals: { toPay: "7260", totalVat: "1260", totalExcl: "6000", bases: [{ rate: "21%", base: "6000", tax: "1260" }] } } },
        { type: 'BANK_EXTRACT', title: "Extrait 32", content: { transactions: [{ date: "06/01/N", desc: "Virement", amount: "-7.260,00" }] } }
    ],
    requiredJournals: [
        { type: JournalType.ACHAT, defaultDate: "04/01/N", solution: [{ id: 's1', accountNumber: '2400', debit: '6000', credit: '', declTva: '83', codePopsy: '21V', label: '' }, { id: 's2', accountNumber: '4110', debit: '1260', credit: '', declTva: '59', codePopsy: '', label: '' }, { id: 's3', accountNumber: '4400', credit: '7260', debit: '', declTva: '', codePopsy: '', label: '' }] },
        { type: JournalType.OD, defaultDate: "04/01/N", solution: [{ id: 's1', accountNumber: '4400', debit: '7260', credit: '', declTva: '', codePopsy: '', label: '' }, { id: 's2', accountNumber: '5501', credit: '7260', debit: '', declTva: '', codePopsy: '', label: '' }] },
        { type: JournalType.FINANCIER, defaultDate: "06/01/N", solution: [{ id: 's1', accountNumber: '5501', debit: '7260', credit: '', declTva: '', codePopsy: '', label: '' }, { id: 's2', accountNumber: '5500', credit: '7260', debit: '', declTva: '', codePopsy: '', label: '' }] }
    ]
  },
  // 5. Vente
  {
    id: 5, title: "Ex 1 - Vente Marchandises", description: "Facture de vente et paiement reçu.",
    documents: [
        { type: 'INVOICE', title: "Fac 505", content: { sender: { name: "OUTISUD" }, receiver: { name: "GENERAL CONSTRUCTION" }, details: { number: "505", date: "05/01/N" }, lines: [{ desc: "Produit B", total: "8000" }], totals: { toPay: "9680", totalVat: "1680", totalExcl: "8000", bases: [{ rate: "21%", base: "8000", tax: "1680" }] } } },
        { type: 'BANK_EXTRACT', title: "Extrait 33", content: { transactions: [{ date: "12/01/N", desc: "Virement Client", amount: "9.680,00" }] } }
    ],
    requiredJournals: [
        { type: JournalType.VENTE, defaultDate: "05/01/N", solution: [{ id: 's1', accountNumber: '7000', credit: '8000', debit: '', declTva: '03', codePopsy: '21', label: '' }, { id: 's2', accountNumber: '4510', credit: '1680', debit: '', declTva: '54', codePopsy: '', label: '' }, { id: 's3', accountNumber: '4000', debit: '9680', credit: '', declTva: '', codePopsy: '', label: '' }] },
        { type: JournalType.FINANCIER, defaultDate: "12/01/N", solution: [{ id: 's1', accountNumber: '5500', debit: '9680', credit: '', declTva: '', codePopsy: '', label: '' }, { id: 's2', accountNumber: '4000', credit: '9680', debit: '', declTva: '', codePopsy: '', label: '' }] }
    ]
  },
  // 6. Prestation
  {
    id: 6, title: "Ex 2 - Prestation Service", description: "Prestation de service avec RRR.",
    documents: [{ type: 'INVOICE', title: "Fac 510", content: { sender: { name: "OUTISUD" }, receiver: { name: "IMMO PLUS" }, details: { number: "510", date: "06/01/N" }, lines: [{ desc: "Prestation", total: "3000" }, { desc: "RRR 10%", total: "-300" }], totals: { toPay: "3267,00", totalVat: "567,00", totalExcl: "2700,00", bases: [{ rate: "21%", base: "2700", tax: "567" }] } } }],
    requiredJournals: [{ type: JournalType.VENTE, defaultDate: "06/01/N", solution: [{ id: 's1', accountNumber: '7070', credit: '2700', debit: '', declTva: '03', codePopsy: '21', label: '' }, { id: 's2', accountNumber: '4510', credit: '567', debit: '', declTva: '54', codePopsy: '', label: '' }, { id: 's3', accountNumber: '4000', debit: '3267', credit: '', declTva: '', codePopsy: '', label: '' }] }]
  },
  // 7. Achat Intra (CLEAN)
  {
    id: 7, title: "Ex 3 - Achat Intra-comm", description: "Acquisition intra-communautaire.",
    documents: [{ type: 'INVOICE', title: "Fac 1569", content: { sender: { name: "RENAULT FRANCE" }, receiver: { name: "OUTISUD" }, details: { number: "1569", date: "07/01/N" }, lines: [{ desc: "Produit B", total: "15000" }, { desc: "RRR", total: "-1500" }], totals: { toPay: "13500", totalVat: "0", totalExcl: "13500" } } }],
    requiredJournals: [{ type: JournalType.ACHAT, defaultDate: "07/01/N", solution: [{ id: 's1', accountNumber: '6040', debit: '13500', credit: '', declTva: '81', codePopsy: '21IM', label: '' }, { id: 's2', accountNumber: '4110', debit: '2835', credit: '', declTva: '59', codePopsy: '', label: '' }, { id: 's3', accountNumber: '4511', credit: '2835', debit: '', declTva: '55', codePopsy: '', label: '' }, { id: 's4', accountNumber: '4400', credit: '13500', debit: '', declTva: '', codePopsy: '', label: '' }] }]
  },
  // 8. Vente Intra (CLEAN)
  {
    id: 8, title: "Ex 4 - Vente Intra-comm", description: "Livraison intra-communautaire.",
    documents: [{ type: 'INVOICE', title: "Fac 550", content: { sender: { name: "OUTISUD" }, receiver: { name: "SPORT 2000 FR" }, details: { number: "550", date: "07/01/N" }, lines: [{ desc: "Produit B", total: "8500" }], totals: { toPay: "8500", totalVat: "0", totalExcl: "8500" } } }],
    requiredJournals: [{ type: JournalType.VENTE, defaultDate: "07/01/N", solution: [{ id: 's1', accountNumber: '7000', credit: '8500', debit: '', declTva: '46', codePopsy: 'I0', label: '' }, { id: 's2', accountNumber: '4000', debit: '8500', credit: '', declTva: '', codePopsy: '', label: '' }] }]
  },
  // 9. Import
  {
    id: 9, title: "Ex 5 - Importation", description: "Achat hors UE (Suisse).",
    documents: [{ type: 'INVOICE', title: "Fac 150", content: { sender: { name: "WATCHES CH" }, receiver: { name: "OUTISUD" }, details: { number: "150", date: "08/01/N" }, lines: [{ desc: "Produit B", total: "10000" }], totals: { toPay: "10000", totalVat: "0", totalExcl: "10000" } } }],
    requiredJournals: [{ type: JournalType.ACHAT, defaultDate: "08/01/N", solution: [{ id: 's1', accountNumber: '6040', debit: '10000', credit: '', declTva: '81', codePopsy: '21XM', label: '' }, { id: 's2', accountNumber: '4110', debit: '2100', credit: '', declTva: '59', codePopsy: '', label: '' }, { id: 's3', accountNumber: '4512', credit: '2100', debit: '', declTva: '57', codePopsy: '', label: '' }, { id: 's4', accountNumber: '4400', credit: '10000', debit: '', declTva: '', codePopsy: '', label: '' }] }]
  },
  // 10. Export
  {
    id: 10, title: "Ex 6 - Exportation", description: "Vente hors UE (Suisse).",
    documents: [{ type: 'INVOICE', title: "Fac 600", content: { sender: { name: "OUTISUD" }, receiver: { name: "CHOCOLATE CH" }, details: { number: "600", date: "09/01/N" }, lines: [{ desc: "Produit B", total: "12000" }], totals: { toPay: "12000", totalVat: "0", totalExcl: "12000" } } }],
    requiredJournals: [{ type: JournalType.VENTE, defaultDate: "09/01/N", solution: [{ id: 's1', accountNumber: '7000', credit: '12000', debit: '', declTva: '47', codePopsy: 'X0', label: '' }, { id: 's2', accountNumber: '4000', debit: '12000', credit: '', declTva: '', codePopsy: '', label: '' }] }]
  },
  // 11. Cocontractant Achat
  {
    id: 11, title: "Ex 7 - Achat Cocontractant", description: "Travaux immobiliers (Nettoyage).",
    documents: [{ type: 'INVOICE', title: "Fac 789", content: { sender: { name: "CLEAN PRO" }, receiver: { name: "OUTISUD" }, details: { number: "789", date: "10/01/N" }, lines: [{ desc: "Nettoyage", total: "1000" }], totals: { toPay: "1000", totalVat: "0", totalExcl: "1000" } } }],
    requiredJournals: [{ type: JournalType.ACHAT, defaultDate: "10/01/N", solution: [{ id: 's1', accountNumber: '6106', debit: '1000', credit: '', declTva: '82', codePopsy: '21CS', label: '' }, { id: 's2', accountNumber: '4110', debit: '210', credit: '', declTva: '59', codePopsy: '', label: '' }, { id: 's3', accountNumber: '4513', credit: '210', debit: '', declTva: '56', codePopsy: '', label: '' }, { id: 's4', accountNumber: '4400', credit: '1000', debit: '', declTva: '', codePopsy: '', label: '' }] }]
  },
  // 12. Cocontractant Vente
  {
    id: 12, title: "Ex 8 - Vente Cocontractant", description: "Travaux fournis.",
    documents: [{ type: 'INVOICE', title: "Fac 620", content: { sender: { name: "OUTISUD" }, receiver: { name: "BUILD PRO" }, details: { number: "620", date: "11/01/N" }, lines: [{ desc: "Travaux", total: "3000" }], totals: { toPay: "3000", totalVat: "0", totalExcl: "3000" } } }],
    requiredJournals: [{ type: JournalType.VENTE, defaultDate: "11/01/N", solution: [{ id: 's1', accountNumber: '7070', credit: '3000', debit: '', declTva: '45', codePopsy: 'C0', label: '' }, { id: 's2', accountNumber: '4000', debit: '3000', credit: '', declTva: '', codePopsy: '', label: '' }] }]
  },
  // 13. NC Achat
  {
    id: 13, title: "Ex 9 - NC Achat", description: "Retour de marchandises.",
    documents: [{ type: 'INVOICE', title: "NC 30", content: { sender: { name: "IT WORLD" }, receiver: { name: "OUTISUD" }, details: { number: "NC 30", date: "12/01/N" }, lines: [{ desc: "Retour", total: "800" }], totals: { toPay: "968", totalVat: "168", totalExcl: "800", bases: [{ rate: "21%", base: "800", tax: "168" }] } } }],
    requiredJournals: [{ type: JournalType.ACHAT, defaultDate: "12/01/N", solution: [{ id: 's1', accountNumber: '6040', credit: '800', debit: '', declTva: '81(-)', codePopsy: '21M', label: '' }, { id: 's2', accountNumber: '4514', credit: '168', debit: '', declTva: '63', codePopsy: '', label: '' }, { id: 's3', accountNumber: '4400', debit: '968', credit: '', declTva: '', codePopsy: '', label: '' }] }]
  },
  // 14. NC Vente
  {
    id: 14, title: "Ex 10 - NC Vente", description: "Retour de marchandises client.",
    documents: [{ type: 'INVOICE', title: "NC 200", content: { sender: { name: "OUTISUD" }, receiver: { name: "GENERAL CONSTRUCTION" }, details: { number: "NC 200", date: "13/01/N" }, lines: [{ desc: "Retour", total: "1000" }], totals: { toPay: "1210", totalVat: "210", totalExcl: "1000", bases: [{ rate: "21%", base: "1000", tax: "210" }] } } }],
    requiredJournals: [{ type: JournalType.VENTE, defaultDate: "13/01/N", solution: [{ id: 's1', accountNumber: '7000', debit: '1000', credit: '', declTva: '49', codePopsy: '21', label: '' }, { id: 's2', accountNumber: '4114', debit: '210', credit: '', declTva: '64', codePopsy: '', label: '' }, { id: 's3', accountNumber: '4000', credit: '1210', debit: '', declTva: '', codePopsy: '', label: '' }] }]
  },
  // 15. NC Achat Remise
  {
    id: 15, title: "Ex 11 - NC Achat (Remise)", description: "Remise exceptionnelle obtenue.",
    documents: [{ type: 'INVOICE', title: "NOTE DE CREDIT N°40", content: { sender: { name: "IT WORLD" }, receiver: { name: "OUTISUD" }, details: { number: "NC 40", date: "14/01/N" }, lines: [{ desc: "Remise", total: "200" }], totals: { toPay: "242", totalVat: "42", totalExcl: "200", bases: [{ rate: "21%", base: "200", tax: "42" }] } } }],
    requiredJournals: [{ type: JournalType.ACHAT, defaultDate: "14/01/N", solution: [{ id: 's1', accountNumber: '6080', debit: '', credit: '200', declTva: '81(-)', codePopsy: '21M', label: '' }, { id: 's2', accountNumber: '4514', debit: '', credit: '42', declTva: '63', codePopsy: '', label: '' }, { id: 's3', accountNumber: '4400', debit: '242', credit: '', declTva: '', codePopsy: '', label: '' }] }]
  },
  // 16. NC Vente Remise
  {
    id: 16, title: "Ex 12 - NC Vente (Remise)", description: "Remise exceptionnelle accordée.",
    documents: [{ type: 'INVOICE', title: "NOTE DE CREDIT N°220", content: { sender: { name: "SPRL OUTISUD" }, receiver: { name: "GENERAL CONSTRUCTION" }, details: { number: "NC 220", date: "15/01/N" }, lines: [{ desc: "Remise", total: "500" }], totals: { toPay: "605", totalVat: "105", totalExcl: "500", bases: [{ rate: "21%", base: "500", tax: "105" }] } } }],
    requiredJournals: [{ type: JournalType.VENTE, defaultDate: "15/01/N", solution: [{ id: 's1', accountNumber: '7080', debit: '500', credit: '', declTva: '49', codePopsy: '21', label: '' }, { id: 's2', accountNumber: '4114', debit: '105', credit: '', declTva: '64', codePopsy: '', label: '' }, { id: 's3', accountNumber: '4000', debit: '', credit: '605', declTva: '', codePopsy: '', label: '' }] }]
  },
  // 17. NC Achat Emballage
  {
    id: 17, title: "Ex 13 - NC Achat (Emballage)", description: "Retour emballages consignés.",
    documents: [{ type: 'INVOICE', title: "NC 12", content: { sender: { name: "BRICO WORLD" }, receiver: { name: "OUTISUD" }, details: { number: "NC 12", date: "16/01/N" }, lines: [{ desc: "Retour consignes", total: "120" }], totals: { toPay: "120", totalVat: "0", totalExcl: "120", bases: [] } } }],
    requiredJournals: [{ type: JournalType.ACHAT, defaultDate: "16/01/N", solution: [{ id: 's1', accountNumber: '4050', debit: '', credit: '120', declTva: 'EX', codePopsy: '', label: '' }, { id: 's2', accountNumber: '4400', debit: '120', credit: '', declTva: '', codePopsy: '', label: '' }] }]
  },
  // 18. NC Vente Emballage
  {
    id: 18, title: "Ex 14 - NC Vente (Emballage)", description: "Retour emballages consignés.",
    documents: [{ type: 'INVOICE', title: "NC 4", content: { sender: { name: "OUTISUD" }, receiver: { name: "CLIENT BELGE" }, details: { number: "NC 4", date: "17/01/N" }, lines: [{ desc: "Retour consignes", total: "150" }], totals: { toPay: "150", totalVat: "0", totalExcl: "150", bases: [] } } }],
    requiredJournals: [{ type: JournalType.VENTE, defaultDate: "17/01/N", solution: [{ id: 's1', accountNumber: '4450', debit: '150', credit: '', declTva: 'EX', codePopsy: '', label: '' }, { id: 's2', accountNumber: '4000', debit: '', credit: '150', declTva: '', codePopsy: '', label: '' }] }]
  },
  // 19. Achat Escompte
  {
    id: 19, title: "Ex 15 - Achat + Escompte", description: "Achat avec escompte 2% (conditionnel).",
    documents: [
      { type: 'INVOICE', title: "Facture 600", content: { sender: { name: "TECH STORE" }, receiver: { name: "OUTISUD" }, details: { number: "600", date: "18/01/N" }, lines: [{ desc: "Matériel", total: "2000" }], totals: { bases: [{ rate: "21%", base: "1960", tax: "411,60" }], totalExcl: "2000", totalVat: "411,60", toPay: "2411,60" } } },
      { type: 'NOTE', title: "Info", content: { text: "Paiement immédiat carte bancaire (escompte déduit)." } },
      { type: 'BANK_EXTRACT', title: "Extrait 7", content: { transactions: [{ date: "18/01", desc: "Paiement carte", amount: "-2371,60" }] } }
    ],
    requiredJournals: [
      { type: JournalType.ACHAT, defaultDate: "18/01/N", solution: [{ id: 's1', accountNumber: '6040', debit: '2000', credit: '', declTva: '81', codePopsy: '21M', label: '' }, { id: 's2', accountNumber: '4110', debit: '411,60', credit: '', declTva: '59', codePopsy: '', label: '' }, { id: 's3', accountNumber: '4400', credit: '2411,60', debit: '', declTva: '', codePopsy: '', label: '' }] },
      { type: JournalType.OD, defaultDate: "18/01/N", solution: [{ id: 's1', accountNumber: '4400', debit: '2411,60', credit: '', declTva: '', codePopsy: '', label: '' }, { id: 's2', accountNumber: '7560', credit: '40', debit: '', declTva: '', codePopsy: '', label: '' }, { id: 's3', accountNumber: '5501', credit: '2371,60', debit: '', declTva: '', codePopsy: '', label: '' }] },
      { type: JournalType.FINANCIER, defaultDate: "18/01/N", solution: [{ id: 's1', accountNumber: '5501', debit: '2371,60', credit: '', declTva: '', codePopsy: '', label: '' }, { id: 's2', accountNumber: '5500', credit: '2371,60', debit: '', declTva: '', codePopsy: '', label: '' }] }
    ]
  },
  // 20. Vente Escompte
  {
    id: 20, title: "Ex 16 - Vente + Escompte", description: "Vente avec escompte 2% (conditionnel).",
    documents: [
      { type: 'INVOICE', title: "Facture 150", content: { sender: { name: "OUTISUD" }, receiver: { name: "CLIENT PRO" }, details: { number: "150", date: "19/01/N" }, lines: [{ desc: "Marchandises", total: "3000" }], totals: { bases: [{ rate: "21%", base: "2940", tax: "617,40" }], totalExcl: "3000", totalVat: "617,40", toPay: "3617,40" } } },
      { type: 'BANK_EXTRACT', title: "Extrait 8", content: { transactions: [{ date: "19/01", desc: "Virement reçu", amount: "3557,40" }] } }
    ],
    requiredJournals: [
      { type: JournalType.VENTE, defaultDate: "19/01/N", solution: [{ id: 's1', accountNumber: '7000', credit: '3000', debit: '', declTva: '03', codePopsy: '21', label: '' }, { id: 's2', accountNumber: '4510', credit: '617,40', debit: '', declTva: '54', codePopsy: '', label: '' }, { id: 's3', accountNumber: '4000', debit: '3617,40', credit: '', declTva: '', codePopsy: '', label: '' }] },
      { type: JournalType.OD, defaultDate: "19/01/N", solution: [{ id: 's1', accountNumber: '4000', credit: '3617,40', debit: '', declTva: '', codePopsy: '', label: '' }, { id: 's2', accountNumber: '6530', debit: '60', credit: '', declTva: '', codePopsy: '', label: '' }, { id: 's3', accountNumber: '5500', debit: '3557,40', credit: '', declTva: '', codePopsy: '', label: '' }] }
    ]
  },
  // 21. Achat Escompte Ferme
  {
    id: 21, title: "Ex 17 - Achat Escompte Ferme", description: "Escompte déduit sur facture.",
    documents: [{ type: 'INVOICE', title: "Facture 601", content: { sender: { name: "TECH STORE" }, receiver: { name: "OUTISUD" }, details: { number: "601", date: "20/01/N" }, lines: [{ desc: "Matériel", total: "3000" }, { desc: "Escompte Ferme", total: "-100" }], totals: { bases: [{ rate: "21%", base: "2900", tax: "609" }], totalExcl: "2900", totalVat: "609", toPay: "3509" } } }],
    requiredJournals: [{ type: JournalType.ACHAT, defaultDate: "20/01/N", solution: [{ id: 's1', accountNumber: '6040', debit: '3000', credit: '', declTva: '81', codePopsy: '21M', label: '' }, { id: 's2', accountNumber: '7560', credit: '100', debit: '', declTva: '81(-)', codePopsy: '21S', label: '' }, { id: 's3', accountNumber: '4110', debit: '609', credit: '', declTva: '59', codePopsy: '', label: '' }, { id: 's4', accountNumber: '4400', credit: '3509', debit: '', declTva: '', codePopsy: '', label: '' }] }]
  },
  // 22. Vente Escompte Ferme
  {
    id: 22, title: "Ex 18 - Vente Escompte Ferme", description: "Escompte déduit sur facture.",
    documents: [{ type: 'INVOICE', title: "Facture 160", content: { sender: { name: "OUTISUD" }, receiver: { name: "CLIENT PRO" }, details: { number: "160", date: "21/01/N" }, lines: [{ desc: "Marchandises", total: "5000" }, { desc: "Escompte Ferme", total: "-200" }], totals: { bases: [{ rate: "21%", base: "4800", tax: "1008" }], totalExcl: "4800", totalVat: "1008", toPay: "5808" } } }],
    requiredJournals: [{ type: JournalType.VENTE, defaultDate: "21/01/N", solution: [{ id: 's1', accountNumber: '7000', credit: '5000', debit: '', declTva: '03', codePopsy: '21', label: '' }, { id: 's2', accountNumber: '6530', debit: '200', credit: '', declTva: '03(-)', codePopsy: '21', label: '' }, { id: 's3', accountNumber: '4510', credit: '1008', debit: '', declTva: '54', codePopsy: '', label: '' }, { id: 's4', accountNumber: '4000', debit: '5808', credit: '', declTva: '', codePopsy: '', label: '' }] }]
  },
  // 23. Achat Emballages
  {
    id: 23, title: "Ex 19 - Achat + Emballages", description: "Achat avec frais de transport et emballages consignés.",
    documents: [{ type: 'INVOICE', title: "Facture 700", content: { sender: { name: "LOGISTIX" }, receiver: { name: "OUTISUD" }, details: { number: "700", date: "22/01/N" }, lines: [{ desc: "Marchandises", total: "3000" }, { desc: "Transport", total: "200" }, { desc: "Consignes", total: "100" }], totals: { bases: [{ rate: "21%", base: "3200", tax: "672" }], totalExcl: "3300", totalVat: "672", toPay: "3972" } } }],
    requiredJournals: [{ type: JournalType.ACHAT, defaultDate: "22/01/N", solution: [{ id: 's1', accountNumber: '6040', debit: '3200', credit: '', declTva: '81', codePopsy: '21M', label: '' }, { id: 's2', accountNumber: '4050', debit: '100', credit: '', declTva: 'EX', codePopsy: '', label: '' }, { id: 's3', accountNumber: '4110', debit: '672', credit: '', declTva: '59', codePopsy: '', label: '' }, { id: 's4', accountNumber: '4400', credit: '3972', debit: '', declTva: '', codePopsy: '', label: '' }] }]
  },
  // 24. Vente Emballages
  {
    id: 24, title: "Ex 20 - Vente + Emballages", description: "Vente avec frais de transport et emballages consignés.",
    documents: [{ type: 'INVOICE', title: "Facture 170", content: { sender: { name: "OUTISUD" }, receiver: { name: "CLIENT LOCAL" }, details: { number: "170", date: "23/01/N" }, lines: [{ desc: "Marchandises", total: "6000" }, { desc: "Transport", total: "300" }, { desc: "Consignes", total: "150" }], totals: { bases: [{ rate: "21%", base: "6300", tax: "1323" }], totalExcl: "6450", totalVat: "1323", toPay: "7773" } } }],
    requiredJournals: [{ type: JournalType.VENTE, defaultDate: "23/01/N", solution: [{ id: 's1', accountNumber: '7000', credit: '6300', debit: '', declTva: '03', codePopsy: '21', label: '' }, { id: 's2', accountNumber: '4510', credit: '1323', debit: '', declTva: '54', codePopsy: '', label: '' }, { id: 's3', accountNumber: '4450', credit: '150', debit: '', declTva: 'EX', codePopsy: '', label: '' }, { id: 's4', accountNumber: '4000', debit: '7773', credit: '', declTva: '', codePopsy: '', label: '' }] }]
  },
  // 26. Achat Emballages Vendus (Ex 21 renamed logic)
  {
    id: 26, title: "Ex 21 - Achat Emballages Vendus", description: "Emballages comptés comme marchandise.",
    documents: [{ type: 'INVOICE', title: "Facture 702", content: { sender: { name: "PACK CO" }, receiver: { name: "OUTISUD" }, details: { number: "702", date: "24/01/N" }, lines: [{ desc: "Marchandises", total: "1100" }, { desc: "Emballages perdus", total: "50" }], totals: { bases: [{ rate: "21%", base: "1150", tax: "241,50" }], totalExcl: "1150", totalVat: "241,50", toPay: "1391,50" } } }],
    requiredJournals: [{ type: JournalType.ACHAT, defaultDate: "24/01/N", solution: [{ id: 's1', accountNumber: '6040', debit: '1150', credit: '', declTva: '81', codePopsy: '21M', label: '' }, { id: 's2', accountNumber: '4110', debit: '241,50', credit: '', declTva: '59', codePopsy: '', label: '' }, { id: 's3', accountNumber: '4400', credit: '1391,50', debit: '', declTva: '', codePopsy: '', label: '' }] }]
  },
  // 27. Vente Emballages Vendus (Ex 22 renamed logic)
  {
    id: 27, title: "Ex 22 - Vente Emballages Vendus", description: "Emballages facturés.",
    documents: [{ type: 'INVOICE', title: "Facture 180", content: { sender: { name: "OUTISUD" }, receiver: { name: "PETIT MAGASIN" }, details: { number: "180", date: "25/01/N" }, lines: [{ desc: "Marchandises", total: "850" }, { desc: "Emballages", total: "50" }], totals: { bases: [{ rate: "21%", base: "900", tax: "189" }], totalExcl: "900", totalVat: "189", toPay: "1089" } } }],
    requiredJournals: [{ type: JournalType.VENTE, defaultDate: "25/01/N", solution: [{ id: 's1', accountNumber: '7000', credit: '900', debit: '', declTva: '03', codePopsy: '21', label: '' }, { id: 's2', accountNumber: '4510', credit: '189', debit: '', declTva: '54', codePopsy: '', label: '' }, { id: 's3', accountNumber: '4000', debit: '1089', credit: '', declTva: '', codePopsy: '', label: '' }] }]
  },
  // 28. Achat Voiture (Ex 23)
  {
    id: 28, title: "Ex 23 - Achat Voiture", description: "Achat BMW Série 1. Déductibilité TVA 50%.",
    documents: [{ type: 'INVOICE', title: "Facture 999", content: { sender: { name: "GARAGE BMW" }, receiver: { name: "OUTISUD" }, details: { number: "999", date: "26/01/N" }, lines: [{ desc: "BMW Série 1", total: "30000" }], totals: { bases: [{ rate: "21%", base: "30000", tax: "6300" }], totalExcl: "30000", totalVat: "6300", toPay: "36300" } } }],
    requiredJournals: [{ type: JournalType.ACHAT, defaultDate: "26/01/N", solution: [{ id: 's1', accountNumber: '2410', debit: '33150', credit: '', declTva: '83', codePopsy: '21ND', label: '' }, { id: 's2', accountNumber: '4110', debit: '3150', credit: '', declTva: '59', codePopsy: '', label: '' }, { id: 's3', accountNumber: '4400', credit: '36300', debit: '', declTva: '', codePopsy: '', label: '' }] }]
  },
  // 29. Entretien Voiture (Ex 24)
  {
    id: 29, title: "Ex 24 - Entretien Voiture", description: "Entretien BMW. Déductibilité TVA 50%.",
    documents: [{ type: 'INVOICE', title: "Facture 1000", content: { sender: { name: "GARAGE BMW" }, receiver: { name: "OUTISUD" }, details: { number: "1000", date: "27/01/N" }, lines: [{ desc: "Entretien", total: "800" }], totals: { bases: [{ rate: "21%", base: "800", tax: "168" }], totalExcl: "800", totalVat: "168", toPay: "968" } } }],
    requiredJournals: [{ type: JournalType.ACHAT, defaultDate: "27/01/N", solution: [{ id: 's1', accountNumber: '6108', debit: '884', credit: '', declTva: '82', codePopsy: '21ND', label: '' }, { id: 's2', accountNumber: '4110', debit: '84', credit: '', declTva: '59', codePopsy: '', label: '' }, { id: 's3', accountNumber: '4400', credit: '968', debit: '', declTva: '', codePopsy: '', label: '' }] }]
  },
  // 30. Vente Comptoir (Ex 26)
  {
    id: 30, title: "Ex 26 - Vente Comptoir", description: "Vente au comptoir.",
    documents: [{ type: 'NOTE', title: "Ticket Caisse", content: { text: "Vente comptoir (21%). Total TVAC: 242 EUR.\nPaiement en liquide." } }],
    requiredJournals: [
      {
        type: JournalType.VENTE, defaultDate: "28/01/N",
        solution: [
          { id: 's1', accountNumber: '4000', debit: '242', credit: '', declTva: '', codePopsy: '', label: 'Client comptoir' },
          { id: 's2', accountNumber: '4510', credit: '42', debit: '', declTva: '54', codePopsy: '', label: '' },
          { id: 's3', accountNumber: '7000', credit: '200', debit: '', declTva: '03', codePopsy: '21', label: '' },
        ]
      },
      {
        type: JournalType.FINANCIER, defaultDate: "28/01/N",
        solution: [
          { id: 's1', accountNumber: '5700', debit: '242', credit: '', declTva: '', codePopsy: '', label: '' },
          { id: 's2', accountNumber: '4000', credit: '242', debit: '', declTva: '', codePopsy: '', label: '' },
        ]
      }
    ]
  },
  // 31. Achat Whisky (Ex 27)
  {
    id: 31, title: "Ex 27 - Achat Whisky", description: "Frais de réception (TVA non déd).",
    documents: [{ type: 'INVOICE', title: "Facture 55", content: { sender: { name: "DRINK MARKET" }, receiver: { name: "OUTISUD" }, details: { number: "55", date: "29/01/N" }, lines: [{ desc: "Whisky", total: "200" }], totals: { bases: [{ rate: "21%", base: "200", tax: "42" }], totalExcl: "200", totalVat: "42", toPay: "242" } } }],
    requiredJournals: [{ type: JournalType.ACHAT, defaultDate: "29/01/N", solution: [{ id: 's1', accountNumber: '6168', debit: '242', credit: '', declTva: '82', codePopsy: '21ND100S', label: '' }, { id: 's2', accountNumber: '4400', credit: '242', debit: '', declTva: '', codePopsy: '', label: '' }] }]
  },
  // 32. Loyer (Ex 28)
  {
    id: 32, title: "Paiement Loyer", description: "Extrait bancaire.",
    documents: [{ type: 'BANK_EXTRACT', title: "Extrait 10", content: { account: "068-...", transactions: [{ date: "30/01/N", desc: "Loyer", amount: "-1000" }] } }],
    requiredJournals: [{ type: JournalType.FINANCIER, defaultDate: "30/01/N", solution: [{ id: 's1', accountNumber: '6101', debit: '1000', credit: '', declTva: '', codePopsy: '', label: '' }, { id: 's2', accountNumber: '5500', credit: '1000', debit: '', declTva: '', codePopsy: '', label: '' }] }]
  }
];
