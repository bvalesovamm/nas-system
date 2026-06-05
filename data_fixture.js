// ============================================================
// SEED DATA — extrahováno z Plán péče Martin v3 (květen 2026)
// ============================================================

const SEED = {
  meta: {
    version: 4,
    lastUpdate: "2026-05-20",
    sourceDocs: "Tracking_Martin.xlsx (5/2026), ÚBLG FN Motol (4/2026), Antoš"
  },

  patient: {
    name: "Martin Rodina",
    rc: "1710231732",
    birth: "23. 10. 2017",
    age: "8,5 roku (5/2026)",
    height: "128,6 cm (35.–40. percentil, nárůst o 1 cm po stagnaci Q4/Q1)",
    weight: "25,0 kg",
    bmi: "15,1",
    teeth: "Většina mléčných zubů přítomna. Lehké opoždění – zmínit při kontrole u zubaře a endokrinologa.",
    motorika: "Hlavní problém hamstringy (NE Achillova šlacha) dle Antoše. Diastáza břišních svalů (ne pravá kýla) – cvičit, neoperovat. Chůze po špičkách, vtáčení LDK.",
    other: "GER (dříve Omeprazol), vyšší nemocnost HCD, hraničně zvýšený TSH (3/2023), středně vysoké riziko PCD, 1× OMA s paracentézou, slyší dobře.",
    insurance: "111 (VZP)",
    address: "Obec 219, 664 06",
    perinatal: "I. gravidita. Spontánní porod 33+3. týden, porodní hmotnost 1800 g, porodní délka 43 cm. RDS II. stupně, UPV 2 dny (Curosurf), oxygenoterapie 8 dní, 14 dní v inkubátoru. Novorozenecká sepse s ATB 10 dní. UZ mozku PVE max. I. stupně. Z hlavních rizik nedonošenosti se manifestovala periventrikulární leukomalacie (s následkem DMO).",
    psychomotor: "Samostatná chůze v 18 měs., lehce opožděně. Řeč do 3 let jen 10–20 slov; logopedie + pobyt LOGO kliniky vedly k výraznému zlepšení. ADOS nesplňuje PAS. Aktuálně 1. třída soukromé SCIO školy, od 1. 1. 2025 asistent. Adaptace v kolektivu dobrá, má kamarády.",
    dysmorphia: ["Delší řasy", "Plochý kořen nosu", "Antevertované nostrily", "Dlouhé philtrum", "Tenký horní ret", "Početnější dlaňové rýhy", "Pedes planovalgi"]
  },

  diagnoses: [
    { code: "G80.1", name: "Spastická diparetická forma DMO (levostranně)", status: "aktivní", note: "Na podkladě PVL z prematurity. Hlavní diagnóza." },
    { code: "F80.1", name: "Vývojová dysfázie expresivní", status: "aktivní", note: "WES OVŘ (986 genů) negativní. Aktuálně mluví ve větách, slovní zásoba normální." },
    { code: "H50.0", name: "Konvergentní strabismus s amblyopií", status: "aktivní", note: "Brýle + okluzor. Oční Unčovská." },
    { code: "Q34.8", name: "Podezření na primární ciliární dyskinezi (PCD)", status: "otevřené", note: "HSVM 2× nehodnotitelné. Plicní WES panel (253 genů) negativní – ale 30 % PCD bez genetiky." },
    { code: "—", name: "Mírná nespecifická faciální dysmorfie", status: "evidence", note: "Neodpovídá žádnému známému syndromu (WES negativní). Bez aktivního řešení." },
    { code: "—", name: "GER (gastroezofageální reflux)", status: "sledování", note: "Dříve Omeprazol, aktuálně bez léků. Při 9leté prohlídce ověřit klinický klid." }
  ],

  tasks: [
    { num: 1, title: "Žádanka od PLDD: endokrinolog, neurolog, metabolika + sulfatidy v moči, KO, zinek, železo", category: "PLDD", priority: "Vysoká", deadline: "květen 2026", status: "Otevřeno", contact: "9letá prohlídka", completedDate: "", done: false },
    { num: 2, title: "Objednat endokrinologa Magnovou", category: "Endokrino", priority: "Vysoká", deadline: "květen 2026", status: "Otevřeno", contact: "Tel. 000 000 000", completedDate: "", done: false },
    { num: 3, title: "Objednat dětského neurologa FN Brno", category: "Neurologie", priority: "Vysoká", deadline: "květen 2026", status: "Otevřeno", contact: "Tel. 000 000 000 (13–15 h)", completedDate: "", done: false },
    { num: 4, title: "Kontaktovat Dr. Varényiovou – PCD (IF / EM / kultury)", category: "PCD", priority: "Vysoká", deadline: "květen 2026", status: "Otevřeno", contact: "ordinace@nemocnice.cz", completedDate: "", done: false },
    { num: 5, title: "Objednat onkogenetiku pro matku (ÚBLG)", category: "Genetika - matka", priority: "Vysoká", deadline: "květen 2026", status: "Otevřeno", contact: "Tel. 000 000 000", completedDate: "", done: false },
    { num: 6, title: "Předat onkogenetické doporučení sestře matky", category: "Genetika - matka", priority: "Střední", deadline: "květen/červen 2026", status: "Otevřeno", contact: "Stejná zátěž v rodině", completedDate: "", done: false },
    { num: 7, title: "Koupit žebřiny zebrinyahrazdy.cz + bukový nástavec", category: "Pomůcky", priority: "Vysoká", deadline: "květen 2026", status: "Otevřeno", contact: "+000 000 000 000, ~3 420 Kč", completedDate: "", done: false },
    { num: 8, title: "Koupit ocelovou hrazdu (ribstole.cz / SCHUBI) + žíněnka", category: "Pomůcky", priority: "Vysoká", deadline: "květen 2026", status: "Otevřeno", contact: "Dřevěná hrazda jen 100 kg", completedDate: "", done: false },
    { num: 9, title: "Konzultace Antoš – cviky na žebřinách", category: "Rehabilitace", priority: "Vysoká", deadline: "květen/červen 2026", status: "Otevřeno", contact: "Po instalaci žebřin", completedDate: "", done: false },
    { num: 10, title: "Sušený vaječný bílek + epsomská sůl – nakoupit", category: "Výživa", priority: "Střední", deadline: "květen 2026", status: "Otevřeno", contact: "Pekařský, NE sportovní", completedDate: "", done: false },
    { num: 11, title: "Magnézium přesunout na večer", category: "Suplementy", priority: "Nízká", deadline: "květen 2026", status: "Otevřeno", contact: "Spasticita, spánek", completedDate: "", done: false },
    { num: 12, title: "Vit. D vysadit na léto", category: "Suplementy", priority: "Nízká", deadline: "květen 2026", status: "Otevřeno", contact: "Květen–srpen pauza", completedDate: "", done: false },
    { num: 13, title: "Rozhodnutí parkour vs. lezení – partnerka zkusí stěnu", category: "Sport", priority: "Střední", deadline: "květen/červen 2026", status: "Otevřeno", contact: "Lezení rozumnější u DMO", completedDate: "", done: false },
    { num: 14, title: "Vybrat bazén (Kraví hora / Lužánky / Hastrmánci)", category: "Sport", priority: "Střední", deadline: "květen 2026", status: "Otevřeno", contact: "Teplý bazén 30–35 °C", completedDate: "", done: false },
    { num: 15, title: "Zahájit plavání 1× týdně", category: "Sport", priority: "Střední", deadline: "červen 2026", status: "Otevřeno", contact: "Po výběru bazénu", completedDate: "", done: false },
    { num: 16, title: "Vyhodnotit výsledky odběrů a vyšetření od specialistů", category: "Koordinace", priority: "Vysoká", deadline: "léto 2026", status: "Otevřeno", contact: "Po prvních návštěvách", completedDate: "", done: false },
    { num: 17, title: "SPC poukaz na asistentku - obnovit (končí 31.8.2026)", category: "SPC", priority: "Vysoká", deadline: "léto 2026", status: "Otevřeno", contact: "Mgr. Lékař, Kociánka", completedDate: "", done: false },
    { num: 18, title: "Zvážit opakování pedopsychologického vyšetření", category: "Psychologie", priority: "Střední", deadline: "léto/podzim 2026", status: "Otevřeno", contact: "Po zvládnutí 1. třídy", completedDate: "", done: false },
    { num: 19, title: "Rozhodnutí o botulotoxinu (nová lokace dle Antoše?)", category: "Neurologie", priority: "Střední", deadline: "podzim 2026", status: "Otevřeno", contact: "Po neurologovi", completedDate: "", done: false },
    { num: 20, title: "Reanalýza WES – kontrola u genetika", category: "Genetika", priority: "Plánováno", deadline: "únor 2027", status: "Otevřeno", contact: "ÚBLG FN Motol – objednáno", completedDate: "", done: false },
    { num: 21, title: "Genetika ARSA/PROP1/GJB2 u syna při reprodukčním věku", category: "Genetika - syn", priority: "Plánováno", deadline: "15+ let", status: "Otevřeno", contact: "Vyš. partnerky", completedDate: "", done: false },
    { num: 22, title: "Čtvrtletní review plánu péče", category: "Koordinace", priority: "Stálé", deadline: "1. neděle 7/10/1/4", status: "Průběžně", contact: "Vlastní", completedDate: "", done: false },
    { num: 23, title: "Pochvaly za daný den na list v herně", category: "Rehabilitace", priority: "Stálé", deadline: "denně", status: "Průběžně", contact: "Bez bodů – jen co se povedlo", completedDate: "", done: false },
    { num: 24, title: "Fyzio Antoš ~1× za 3 měsíce", category: "Rehabilitace", priority: "Stálé", deadline: "průběžně", status: "Průběžně", contact: "Hamstringy priorita", completedDate: "", done: false }
  ],
  adminTasks: [],
  houseWorks: [],
  energy: { settings: { pricePerM3: 0, priceOld: 0, priceChangeDate: "", koef: 1, fixedPerYear: 0, unit: "m³" }, measurements: [] },
  finance: { predikce: [], zaplaceno: [], loans: [] },

  examinations: [
    { date: "4/2022", type: "MRI mozku + C páteře", conclusion: "Periventrikulární změny bílé hmoty + lehká dysplazie kalózního tělesa v rámci PVL. Normální C-páteř. Vedl. nález: výrazné slizniční hyperplastické změny v pneumatickém systému levé pyramidy. UZAVŘENO jako spastická forma DMO. Leukodystrofie radiologicky vyloučena.", domain: "neurologie" },
    { date: "7/2022", type: "Pedopsychologie", conclusion: "Vývojová dysfázie u intelektově hluboce podprůměrného chlapce (4,5 r.), sekundárně pervazivní symptomy. Zvýšená impulzivita, sociálně emoční inkompetence. ADOS nesplňuje PAS. Pozn.: test ovlivněn jazykem – aktuální stav výrazně lepší.", domain: "psychologie" },
    { date: "8/2022", type: "Alergoimunologie", conclusion: "Nemocnost HCD, AT 9/2021, perinatálně UPV, atopický ekzém. Bez známek imunodeficience, nižší C3.", domain: "imunologie" },
    { date: "11/2022", type: "Kardiologie", conclusion: "Normální anatomie srdce, mírně větší LK s normální funkcí. Trikuspidální regurgitace malého stupně – akcidentální systolický šelest. EKG bez preexcitace, normální repolarizace, bez arytmie. Bez medikace, bez omezení, kontrola jen při potížích.", domain: "kardiologie" },
    { date: "2/2023", type: "Neurologie", conclusion: "Diparetická forma DMO s akcentací na LDK. Efekt BTX. Pozitivní iritační jevy DKK, spasticita lýtkového svalstva.", domain: "neurologie" },
    { date: "3/2023", type: "Pneumologie", conclusion: "Potní test negativní (CF vyloučena). Abnormální screening řasinkového epitelu. Hraničně zvýšený TSH. Středně vysoké riziko PCD.", domain: "PCD" },
    { date: "5/2023", type: "Oční", conclusion: "Strabismus, brýle a okluzor.", domain: "oční" },
    { date: "7/2023", type: "HSVM (videomikroskopie cilií)", conclusion: "NEHODNOTITELNÉ. PCD nelze vyloučit.", domain: "PCD" },
    { date: "9/2023", type: "HSVM (videomikroskopie cilií)", conclusion: "NEHODNOTITELNÉ. Nasální NO 121/350 ppb. Doporučení: IF, EM, kultury.", domain: "PCD" },
    { date: "9/2024", type: "Alergoimunologie", conclusion: "Recidivující rýmy/kašel. Alergie neprokázána. Středně vys. riziko PCD.", domain: "imunologie" },
    { date: "11/2025", type: "WES trio", conclusion: "NEGATIVNÍ – plicní (253), imuno (586), spasticita (422), strabismus (965), OVŘ (986), ACMG (84). Karyotyp 46,XY.", domain: "genetika" },
    { date: "2/2026", type: "Carrier screening – matka", conclusion: "GJB2 přenašečka. HBOC, trombofilie, SMA, CFTR negativní.", domain: "genetika" },
    { date: "2/2026", type: "Carrier screening – otec", conclusion: "ACADM, ARSA, PROP1 přenašeč. CZECANCA, trombofilie, keratokonus negativní.", domain: "genetika" },
    { date: "4/2026", type: "Genetická zpráva ÚBLG FN Motol", conclusion: "Syn přenašeč ARSA, PROP1, GJB2. Q34.8. Plán: metabolika + sulfatidy, kontrola 2/2027.", domain: "genetika" }
  ],

  genetics: {
    summary: "WES trio (celoexomové sekvenování) u syna a obou rodičů je negativní – pro DMO, dysfázii ani strabismus nebyla nalezena genetická příčina. Diagnóza DMO je radiologicky vysvětlená PVL z nedonošenosti. Syn je pouze přenašeč tří genů (ARSA, PROP1, GJB2) – bez klinického projevu, bez rizika rozvoje nemoci. Pro případné další dítě je riziko těchto nemocí prakticky nulové (rodiče nesdílejí přenašečství).",
    findings: [
      { gene: "ARSA", carrier: "syn (po otci)", variant: "NM_000487.6:c.1283C>T p.(Pro428Leu), heterozygot", disease: "Metachromatická leukodystrofie (MIM:250100)", note: "U přenašeče se nerozvine. Matka ARSA nemá → MLD u syna vyloučena." },
      { gene: "PROP1", carrier: "syn (po otci)", variant: "NM_006261.4:c.301_302del p.(Leu102Cysfs*8), heterozygot", disease: "Kombinovaný deficit hypofyzárních hormonů (MIM:262600)", note: "U přenašeče se nerozvine." },
      { gene: "GJB2", carrier: "syn (po matce)", variant: "NM_004004.6:c.35del p.(Gly12Valfs*2), heterozygot", disease: "Nesyndromová hluchota, connexin 26 (MIM:220290)", note: "Přenašeč slyší." },
      { gene: "ACADM", carrier: "pouze otec", variant: "NM_000016.5:c.985A>G p.(Lys329Glu), heterozygot", disease: "Deficit MCAD (MIM:201450) – porucha oxidace mastných kyselin", note: "Syn ACADM nenese." }
    ],
    panels: [
      { panel: "Plicní (PCD + CFTR)", genes: "253", result: "PCD geneticky neprokázáno (ALE 30 % PCD pacientů bez genetického vysvětlení – nelze vyloučit)." },
      { panel: "Imunopanel", genes: "586", result: "Imunodeficience vyloučena." },
      { panel: "Spasticita (HP:0034353)", genes: "422", result: "Genetická příčina spasticity NENÍ. Potvrzuje DMO z PVL. Leukodystrofie/HSP/dystonie vyloučeny." },
      { panel: "Strabismus (HP:0000486)", genes: "965", result: "Genetická příčina strabismu NENÍ." },
      { panel: "Opožděný vývoj řeči (HP:0000750)", genes: "986", result: "Genetická příčina dysfázie NENÍ." },
      { panel: "Sekundární varianty ACMG", genes: "84", result: "Bez nálezu medicínsky aktionable variant." },
      { panel: "Karyotyp", genes: "—", result: "46,XY normální." }
    ],
    familyMatrix: [
      { gene: "ARSA", disease: "Metachromatická leukodystrofie (MLD)", father: "přenašeč", mother: "bez mutace", son: "přenašeč – nemoc vyloučena" },
      { gene: "PROP1", disease: "Kombinovaný deficit hormonů hypofýzy", father: "přenašeč", mother: "bez mutace", son: "přenašeč – nemoc vyloučena" },
      { gene: "ACADM", disease: "MCAD deficit (metabolismus tuků)", father: "přenašeč", mother: "bez mutace", son: "NENÍ přenašeč" },
      { gene: "GJB2", disease: "Nesyndromová hluchota (connexin 26)", father: "bez mutace", mother: "přenašečka", son: "přenašeč – nemoc vyloučena" },
      { gene: "SMN1 (SMA)", disease: "Spinální muskulární atrofie", father: "2 kopie, nepřenašeč", mother: "2 kopie, nepřenašečka", son: "neindikováno samostatně" },
      { gene: "CFTR", disease: "Cystická fibróza", father: "WES negativní", mother: "WES negativní", son: "WES negativní" }
    ],
    parents: {
      mother: { name: "Barbora Rodina", age: "37", findings: "GJB2 přenašečka. HBOC (26 genů) negativní, trombofilie negativní. SMA: 2 kopie SMN1 → s vysokou pravděpodobností nepřenašečka. CFTR negativní. Rodinná onkologická zátěž: babička ca ovárií 42 let." },
      father: { name: "Michal Rodina", age: "40", findings: "Přenašeč ACADM, ARSA, PROP1 (žádná se neprojeví). CZECANCA (226 genů) negativní, trombofilie negativní, keratokonus (120) negativní. Osobní: keratokonus, benigní melanom, Crohnova choroba." }
    }
  },

  family: {
    mother: [
      "Mateřská babička: karcinom ovárií ve 42 letech, úmrtí ve 42 letech (klíčový impuls pro onkogenetiku).",
      "Matka matky (prababička): údajně karcinom mléčné žlázy (ověřit v rámci onkogenetické konzultace).",
      "Mateřský dědeček: Alzheimerova choroba, tumor mozku v 60 letech, plicní embolie, trombóza DKK.",
      "Sestra matky: hypertenze, benigní tumor ovárií, cysty ovárií, žilní insuficience, varixy."
    ],
    father: [
      "Bratr otce: keratokonus, tinitus.",
      "Matka otce (babička otce): hypertenze, varixy, trombóza DKK.",
      "Sestra otce: 2× CMP, úmrtí v 71 letech.",
      "Paterní dědeček: úmrtí v 58 letech na leukémii.",
      "Otec matky otce: kolorektální karcinom (CRC), diagnóza v 67 letech, úmrtí v 68 letech."
    ]
  },

  contacts: [
    { name: "Endokrinolog Lékař", specialty: "endokrinologie", role: "IGF-1, IGFBP-3, TSH, fT4, RTG ruky", phone: "000 000 000", status: "objednat" },
    { name: "Dětský neurolog (Česká), FN Brno", specialty: "neurologie", role: "Botulotoxin, GMFCS, SDR, ortopedie", phone: "000 000 000 (13–15 h)", status: "objednat" },
    { name: "Onkogenetika ÚBLG FN Motol", specialty: "onkogenetika", role: "Konzultace + plán sledování (matka)", phone: "000 000 000", status: "objednat" },
    { name: "Pneumologie FN Motol – Dr. Lékař", specialty: "pneumologie", role: "PCD – IF, EM, kultury", phone: "ordinace@nemocnice.cz", status: "kontaktovat" },
    { name: "Genetika ÚBLG FN Motol – MUDr. Lékař", specialty: "genetika", role: "Kontrola s reanalýzou dat", phone: "000 000 000, 67 (7:15–9:00, 14:00–15:00)", status: "objednáno 2/2027" },
    { name: "Praktička Lékař (PLDD)", specialty: "pediatrie", role: "9letá prohlídka, žádanky, metabolika + sulfatidy", phone: "Poliklinika Lesná", status: "při prohlídce" },
    { name: "Zubař Križan", specialty: "stomatologie", role: "Kontrola + dotaz na zuby", phone: "Šikl a Caha", status: "aktivní" },
    { name: "Kardiolog Jeník", specialty: "kardiologie", role: "Bez aktivní potřeby (stav z 11/2022)", phone: "Dětská nemocnice", status: "při potížích" },
    { name: "Fyzioterapeut Antoš", specialty: "rehabilitace", role: "Žebřiny, cviky, core, závaží", phone: "Dětská nemocnice", status: "aktivní" },
    { name: "Logopedie Klinika LOGO", specialty: "logopedie", role: "Expresivní vývojová dysfázie", phone: "—", status: "aktivní" },
    { name: "Psycholog Čmiel", specialty: "psychologie", role: "Pedopsychologie, kontroly", phone: "Klinika LOGO", status: "aktivní" },
    { name: "Oční Unčovská", specialty: "oční", role: "Strabismus, amblyopie, brýle, okluzor", phone: "Dětská nemocnice", status: "aktivní" },
    { name: "Alergoimunologie Lékař", specialty: "imunologie", role: "Autovakcíny, nemocnost HCD", phone: "Brno", status: "aktivní" },
    { name: "Pneumologie Rybníček", specialty: "pneumologie", role: "Akutní + chronické dýchací potíže", phone: "Brno", status: "při infektech" },
    { name: "ORL Lékař", specialty: "ORL", role: "Sluch, infekty", phone: "ORL Pekařská", status: "dle potřeby" },
    { name: "Ortopedie Straka", specialty: "ortopedie", role: "Pohybový aparát, hamstringy", phone: "Dětská nemocnice", status: "po neurologovi" },
    { name: "Urologie Husár", specialty: "urologie", role: "UZ, dispenzarizace", phone: "Dětská nemocnice", status: "dle potřeby" },
    { name: "Rehabilitační lékařka Lékař", specialty: "rehabilitace", role: "Poukazy, rentgeny", phone: "Dětská nemocnice", status: "dle potřeby" },
    { name: "DLPP / Lázně Lékař", specialty: "lázně", role: "Lázeňský poukaz", phone: "Město", status: "1× ročně" },
    { name: "Kožní (Lékař / Lékař)", specialty: "dermatologie", role: "Atopický ekzém", phone: "Dům zdraví Jugoslávská", status: "dle potřeby" },
    { name: "SPC Kociánka – Mgr. Lékař", specialty: "škola", role: "Asistent ve škole – poukaz končí 31. 8. 2026!", phone: "Kociánka", status: "obnovit" }
  ],

  appointments: [
    { ambulance: "SPC", kde: "Kociánka", lekar: "Mgr. Lékař", posledniDate: "2024-12-01", posledniText: "", budouciDate: "2026-05-18", budouciText: "", cas: "", terminVolaniDate: "", frekvence: "1x za 2 roky", telefon: "000 000 000", email: "", komentar: "31.08.2026 končí \"poukaz\" na asistentku ve škole, návštěva ve škole" },
    { ambulance: "Endokrinolog", kde: "Brno", lekar: "MUDr. Lékař", posledniDate: "", posledniText: "", budouciDate: "2026-05-20", budouciText: "", cas: "08:15", terminVolaniDate: "", frekvence: "Dle nálezu", telefon: "000 000 000", email: "", komentar: "PROP1, TSH, růst, kostní věk" },
    { ambulance: "Neurologie", kde: "Dětská nemocnice", lekar: "Mudr. Česká", posledniDate: "2025-03-31", posledniText: "", budouciDate: "2026-05-26", budouciText: "", cas: "08:00", terminVolaniDate: "", frekvence: "1x ročně", telefon: "000 000 000", email: "", komentar: "objednání magnetická rezonance po lázních" },
    { ambulance: "Ortopedie", kde: "Dětská nemocnice", lekar: "Mudr. Miroslav Straka", posledniDate: "2023-08-28", posledniText: "", budouciDate: "2026-05-26", budouciText: "", cas: "10:00", terminVolaniDate: "", frekvence: "1x ročně", telefon: "000 000 000", email: "", komentar: "" },
    { ambulance: "Urologie", kde: "Dětská nemocnice", lekar: "Mudr. Matěj Husár", posledniDate: "2021-06-01", posledniText: "", budouciDate: "2026-05-29", budouciText: "", cas: "11:30", terminVolaniDate: "", frekvence: "dle potřeb", telefon: "000 000 000", email: "", komentar: "žádanka na UZ na centrální evidenci pro výsledky pak do ordinace" },
    { ambulance: "Oční", kde: "Dětská nemocnice", lekar: "Mudr. Edita Unčovská", posledniDate: "2025-10-03", posledniText: "", budouciDate: "2026-06-12", budouciText: "", cas: "09:00", terminVolaniDate: "2026-03-31", frekvence: "cca 1x za 6 měsíců", telefon: "000 000 000", email: "", komentar: "najít nového očaře" },
    { ambulance: "Ulzibat", kde: "Srbsko", lekar: "Zíma", posledniDate: "", posledniText: "x", budouciDate: "2026-06-26", budouciText: "", cas: "10:00", terminVolaniDate: "", frekvence: "x", telefon: "", email: "", komentar: "objednána konzultace s Dr. Nazarkinem v Praze, cena 1200 Kč" },
    { ambulance: "DLPP", kde: "Město", lekar: "Mudr. Lenka Lékař", posledniDate: "2025-11-03", posledniText: "", budouciDate: "2026-08-17", budouciText: "", cas: "", terminVolaniDate: "", frekvence: "1x ročně", telefon: "000 000 000", email: "", komentar: "dohlídat více jídlo, mytí 2x v týdnu, TV zkusit omezit režimově, odesláno na lékaře, aby vystavil žádost" },
    { ambulance: "Zubař", kde: "Šikl a Caha", lekar: "Mudr. Križan", posledniDate: "2025-10-09", posledniText: "", budouciDate: "2026-10-01", budouciText: "", cas: "07:30", terminVolaniDate: "", frekvence: "1x za 6 měsíců", telefon: "", email: "", komentar: "" },
    { ambulance: "Genetika", kde: "Motol Brno", lekar: "Mudr. Andrea Lékař", posledniDate: "2026-02-02", posledniText: "", budouciDate: "2027-02-01", budouciText: "", cas: "10:00", terminVolaniDate: "", frekvence: "x", telefon: "000 000 000", email: "", komentar: "čekáme na výsledky rozšířených testů, kontrola 2027" },
    { ambulance: "Fyzioterapie", kde: "Dětská nemocnice", lekar: "Miroslav Antoš Dis.", posledniDate: "2024-11-15", posledniText: "", budouciDate: "", budouciText: "bude po lázních", cas: "", terminVolaniDate: "", frekvence: "1x za 6 měsíců", telefon: "000 000 000", email: "", komentar: "návrh na rentgen páteře, udělat na návštěvě ortopedie" },
    { ambulance: "Rehabilitační lékař", kde: "Dětská nemocnice", lekar: "Mudr. Petra Lékař", posledniDate: "2024-11-15", posledniText: "", budouciDate: "", budouciText: "bude po lázních", cas: "", terminVolaniDate: "2026-04-17", frekvence: "1x za 6 měsíců", telefon: "000 000 000", email: "", komentar: "volat na další domluvu poukaz a rentgen" },
    { ambulance: "Pneumologie - PCD", kde: "FN Motol Praha", lekar: "Dr. Žofia Lékař", posledniDate: "2023-09-01", posledniText: "", budouciDate: "", budouciText: "OBJEDNAT", cas: "", terminVolaniDate: "", frekvence: "Diagnostika", telefon: "000 000 000", email: "ordinace@nemocnice.cz", komentar: "IF, EM, kultury" },
    { ambulance: "Onkogenetika - matka", kde: "ÚBLG FN Motol", lekar: "—", posledniDate: "", posledniText: "", budouciDate: "", budouciText: "OBJEDNAT", cas: "", terminVolaniDate: "", frekvence: "Dle plánu", telefon: "", email: "", komentar: "Babička ca ovárií 42 let" },
    { ambulance: "Psycholog", kde: "Klinika LOGO", lekar: "Mgr. Adam Čmiel", posledniDate: "2025-06-16", posledniText: "", budouciDate: "", budouciText: "", cas: "", terminVolaniDate: "2026-05-01", frekvence: "1x ročně", telefon: "", email: "", komentar: "objednat na kontrolu, ta má být v červnu" },
    { ambulance: "Kardiologie", kde: "Dětská nemocnice", lekar: "Mudr. Róbert Jeník", posledniDate: "2022-11-29", posledniText: "", budouciDate: "", budouciText: "", cas: "", terminVolaniDate: "", frekvence: "dle potřeb", telefon: "000 000 000", email: "", komentar: "volat na kontrolu" },
    { ambulance: "Centrum Edial Neurovývojovka", kde: "Královo Pole", lekar: "Lékař", posledniDate: "", posledniText: "2022", budouciDate: "", budouciText: "", cas: "", terminVolaniDate: "", frekvence: "dle potřeb", telefon: "", email: "", komentar: "volat - chceme doporučení, zda to v jeho věku má ještě smysl" },
    { ambulance: "Alergologie", kde: "Mudr. Lékař", lekar: "Mudr. Hana Lékař", posledniDate: "2023-01-01", posledniText: "", budouciDate: "", budouciText: "", cas: "", terminVolaniDate: "", frekvence: "dle potřeb", telefon: "", email: "", komentar: "" },
    { ambulance: "Reflux - laboratoř", kde: "Brno Bílý dům", lekar: "", posledniDate: "2023-06-01", posledniText: "", budouciDate: "", budouciText: "", cas: "", terminVolaniDate: "", frekvence: "dle potřeb", telefon: "", email: "", komentar: "" },
    { ambulance: "ORL", kde: "ORL Pekařská", lekar: "Šárka Lékař", posledniDate: "2025-02-03", posledniText: "", budouciDate: "", budouciText: "", cas: "", terminVolaniDate: "", frekvence: "dle potřeb", telefon: "", email: "", komentar: "" },
    { ambulance: "Pediatr", kde: "Poliklinika Lesná", lekar: "Mudr. Radmila Lékař", posledniDate: "2025-10-06", posledniText: "", budouciDate: "", budouciText: "", cas: "", terminVolaniDate: "", frekvence: "dle potřeb", telefon: "", email: "", komentar: "pravidelná prohlídka v 9 letech" },
    { ambulance: "Dr. Flipper", kde: "Poliklinika Lesná", lekar: "", posledniDate: "2026-01-30", posledniText: "", budouciDate: "", budouciText: "", cas: "", terminVolaniDate: "", frekvence: "dle potřeb", telefon: "", email: "", komentar: "info, že je vše ok" },
    { ambulance: "Kožní", kde: "Dům zdraví Jugoslávská", lekar: "Věra Lékař/Denisa Lékař", posledniDate: "", posledniText: "x", budouciDate: "", budouciText: "", cas: "", terminVolaniDate: "", frekvence: "dle potřeb", telefon: "", email: "", komentar: "" },
    { ambulance: "Logopedie", kde: "Klinika LOGO", lekar: "x", posledniDate: "", posledniText: "x", budouciDate: "", budouciText: "", cas: "", terminVolaniDate: "", frekvence: "dle potřeb", telefon: "", email: "", komentar: "" }
  ],

  questions: [
    { doctor: "Dětský neurolog (FN Brno)", q: "Aktuální GMFCS syna? (Pro sledování v čase.)" },
    { doctor: "Dětský neurolog (FN Brno)", q: "Má smysl změnit lokaci botulotoxinu k hamstringům (doporučení Antoše)?" },
    { doctor: "Dětský neurolog (FN Brno)", q: "Kdy by přicházela v úvahu selektivní dorzální rizotomie (SDR)?" },
    { doctor: "Dětský neurolog (FN Brno)", q: "Výhled potřeby ortopedické péče – ke komu nás pošlete?" },
    { doctor: "Dětský neurolog (FN Brno)", q: "Jak sledovat, zda stav není progresivní? Kdy přehodnocovat?" },
    { doctor: "Dětský neurolog (FN Brno)", q: "Kontext: MRI 4/2022 = PVL, WES 11/2025 negativní – leukodystrofie/HSP/dystonie vyloučena." },
    { doctor: "Endokrinolog Lékař", q: "Kostní věk vs. chronologický věk?" },
    { doctor: "Endokrinolog Lékař", q: "IGF-1, IGFBP-3, TSH, fT4 – v normě nebo na hranici?" },
    { doctor: "Endokrinolog Lékař", q: "Kontext otec PROP1 + TSH 3/2023 + opoždění zubů – další vyšetření hypofýzy (např. MRI sella turcica)?" },
    { doctor: "Endokrinolog Lékař", q: "Odhadovaný cílový růst syna podle rodičů?" },
    { doctor: "Endokrinolog Lékař", q: "Souvisí opožděné vypadávání mléčných zubů s hormonálním stavem?" },
    { doctor: "Endokrinolog Lékař", q: "Kdy znovu zkontrolovat při normě?" },
    { doctor: "Pneumologie (Dr. Lékař)", q: "Kdy bude termín pro IF, EM, kultury?" },
    { doctor: "Pneumologie (Dr. Lékař)", q: "Při dnešním stavu – preventivní léčba (inhalace, dechová rehabilitace)?" },
    { doctor: "Pneumologie (Dr. Lékař)", q: "Sledování případného postižení plic – kdy spirometrie?" },
    { doctor: "Pneumologie (Dr. Lékař)", q: "Vhodné očkování nad rámec (pneumokok, chřipka)?" },
    { doctor: "Pneumologie (Dr. Lékař)", q: "Kontext: WES plicní panel (253) negativní, ale 30 % PCD bez genetiky." },
    { doctor: "Klinická genetika (2/2027)", q: "Lze přezkoumat / reinterpretovat WES data v kontextu nových databází?" },
    { doctor: "Klinická genetika (2/2027)", q: "Jak naložit s výsledky metabolického vyšetření + sulfatidů v moči?" },
    { doctor: "Klinická genetika (2/2027)", q: "Má smysl u syna v budoucnu cílené vyšetření kvůli přenašečství?" },
    { doctor: "Klinická genetika (2/2027)", q: "Jakou jinou konkrétní prevenci doporučujete s ohledem na rodinnou zátěž?" },
    { doctor: "Onkogenetika (pro matku)", q: "Plán sledování (gynekologické UZ, mamograf, CA-125) s ohledem na babičku ca ovárií 42 let?" },
    { doctor: "Onkogenetika (pro matku)", q: "Konkrétní prevence v 37 letech?" },
    { doctor: "Onkogenetika (pro matku)", q: "Jak koordinovat péči s gynekologem / onkologem?" },
    { doctor: "Praktička (9letá prohlídka)", q: "Žádanky: organické kyseliny v moči, aminokyseliny v moči i plazmě, acylkarnitiny, laktát, amoniak, sulfatidy v moči, biochemie, zinek, železo, KO." },
    { doctor: "Praktička (9letá prohlídka)", q: "Žádanky: endokrinolog, neurolog." },
    { doctor: "Praktička (9letá prohlídka)", q: "Stav očkování?" },
    { doctor: "Praktička (9letá prohlídka)", q: "Je GER aktuálně klinicky klidný?" }
  ],

  topics: [
    {
      id: "neuro",
      title: "Neurologie, DMO, spasticita a rehabilitace",
      know: "Diagnóza spastická diparetická forma DMO s akcentací na LDK (G80.1). MRI 4/2022 PVL z prematurity. WES trio negativní – panel pro spasticitu (422 genů) bez nálezu, genetická příčina spasticity prakticky vyloučena. Leukodystrofie / HSP / dopa-responzivní dystonie všechny vyloučeny. MLD vyloučena geneticky i radiologicky. Dle Antoše hlavní problém hamstringy, NE Achillova šlacha.",
      doing: [
        "Fyzioterapie Antoš ~1× za 3 měsíce, hamstringy priorita, diastáza cvičit a neoperovat.",
        "Domácí cvičební plán – core, protahování, žebřiny, nové 3 cviky.",
        "Hierarchie léčby dle Antoše: žebřiny + cvičení → botulotoxin (změna lokace?) → SDR (FN Motol, pojišťovna) → Ulzibat fibrotomie (poslední, zahraničí; Antoš nedoporučuje)."
      ],
      todo: [
        "Změna lokace botulotoxinu k hamstringům (Antošův klinický postřeh).",
        "GMFCS klasifikace – pro sledování v čase.",
        "SDR ano/ne – FN Motol, pojišťovna; vhodný věk 4–8 let, syn 8,5 → ještě v pásmu zvažování.",
        "Ortopedická konzultace – ke komu poslat?"
      ],
      note: "Kódovací poznámka: G80.1 (diparéza s asymetrií) je správný kód, ne G80.2 (čistá hemiparéza)."
    },
    {
      id: "endo",
      title: "Endokrinologie, růst, štítná žláza",
      know: "Otec přenašeč PROP1 (transkripční faktor pro vývoj hypofýzy). Matka PROP1 nemá → dvojitá mutace u syna vyloučena. Syn jako přenašeč nemá riziko CPHD. 3/2023: hraničně zvýšený TSH. Růst: 122 cm v 7,2 r. → 128,6 cm v 8,5 r. (cca 6,6 cm/rok), ale několikaměsíční stagnace v Q4/Q1. Většina mléčných zubů v 8,5 letech – lehké opoždění (může souviset s hypotyreózou).",
      doing: [
        "Žádanka od PLDD na: IGF-1, IGFBP-3, TSH, fT4, RTG ruky (kostní věk).",
        "Objednat endokrinologa Magnovou (000 000 000).",
        "Vzít záznamy výšky syna + výšky obou rodičů + případně prarodičů. Cílová výška = (otec + matka ± 13 cm) / 2."
      ],
      todo: [
        "Kostní věk vs. chronologický věk?",
        "IGF-1, TSH, fT4 v normě? Kontext otec PROP1 + TSH 3/2023 + opoždění zubů – další vyšetření hypofýzy (MRI sella turcica)?",
        "Odhadovaný cílový růst syna podle rodičů? Kdy znovu zkontrolovat?",
        "Souvisí opožděné vypadávání mléčných zubů s hormonálním stavem?"
      ]
    },
    {
      id: "kardio",
      title: "Kardiologie a sluch",
      know: "Kardiologie 11/2022: normální anatomie, akcidentální systolický šelest z trikuspidální regurgitace malého stupně, EKG bez arytmie. Bez medikace, bez omezení. GJB2 je nesyndromová hluchota (NE Jervell-Lange-Nielsen) – žádné riziko dlouhého QT, žádný syndrom (ne Usher, ne Pendred). Audiogram bez aktivního úkolu.",
      doing: [
        "Uložit zprávu z 11/2022 do složky a u nových specialistů říkat: „kardio 11/2022 bez nutnosti sledování.“"
      ],
      todo: [
        "Pokud nebude dušnost / synkopy / netypická únavnost při sportu, nová kontrola není indikovaná.",
        "Pro pojistku kvůli plánovanému sportu lze při 9leté preventivní prohlídce požádat o klidové EKG."
      ],
      note: "Kardiologický bod NENÍ urgentní. Sluch: bez aktivního úkolu, při ORL problémech standardní péče."
    },
    {
      id: "pcd",
      title: "PCD – primární ciliární dyskineze (otevřená otázka)",
      know: "PCD není potvrzena ani vyloučena. Screening pohyblivosti cilií 3/2023 pozitivní (středně vysoké riziko). HSVM 7/2023 i 9/2023 nehodnotitelné (buněčné lemy zcela bez řasinek po ATB přeléčení). Nasální NO 121/350 ppb (zvýšené spíš mluví proti PCD). Potní test negativní (CF vyloučena). WES plicní panel 253 genů: NEGATIVNÍ – ale 30 % PCD pacientů zůstává bez genetického vysvětlení.",
      doing: [
        "Kontaktovat Dr. Varényiovou (ordinace@nemocnice.cz) ohledně termínu IF / EM / kultury.",
        "Pokračovat v léčbě akutních respiračních infektů cestou pediatrie (Ospen 1/2026).",
        "Před plánovanými inhalačními vyšetřeními: 14 dní před ATB Augmentin p. o.; do nosu mořská voda / Sterimar / vincetka pravidelně; v den vyšetření NEDÁVAT do nosu Mommox."
      ],
      todo: [
        "Termín pro IF, EM, kultury?",
        "Preventivní léčba (inhalace, dechová rehabilitace)?",
        "Sledování plic (kdy spirometrie)?",
        "Očkování nad rámec (pneumokok, chřipka)?"
      ],
      note: "Pokud by se PCD potvrdilo, mění to výrazně pneumologickou péči – pravidelná drenáž, aktivní léčba infekcí, sledování plic. Zatím symptomaticky."
    },
    {
      id: "metab",
      title: "Metabolické vyšetření a sulfatidy v moči",
      know: "Aktivní doporučení z genetické zprávy 4/2026. Důvod: i když je syn jen přenašeč ARSA a MLD u něj nemůže nastat, sulfatidy v moči jsou biochemický marker aktivity arylsulfatázy A – negativní výsledek je finální potvrzení dostatečné aktivity enzymu (i u přenašeče bývá 40–50 % normy).",
      doing: [
        "Žádanky od PLDD na: organické kyseliny v moči, aminokyseliny v moči A v plazmě, acylkarnitiny, laktát, amoniak, sulfatidy v moči (specifický marker pro ARSA), základní biochemie + KO.",
        "Konkrétní rozsah určí PLDD nebo metabolická ambulance (UDMP VFN Praha).",
        "Kopii výsledků zaslat do ÚBLG FNM. Splnit ideálně před kontrolou u genetika v 2/2027."
      ],
      todo: []
    },
    {
      id: "vyziva",
      title: "Výživa, doplňky, obecné zásady",
      know: "Syn NENÍ přenašeč ACADM – pravidla „nehladovět, při horečce glukóza“ pro něj nejsou povinností (jen obecná pediatrická opatření). GER aktuálně bez Omeprazolu – při 9leté prohlídce ověřit klinický klid. Pokud by se vracely potíže, je to důvod pro gastroenterologa, nikoli pro pouhou recidivu Omeprazolu.",
      doing: [
        "Doplňky stravy podle rozpisu (sekce Doplňky).",
        "Bílkoviny 30–38 g/den – nenápadně přidávat (sušený vaječný bílek, řecký jogurt, cottage, ořechové máslo, lněné/konopné semínko)."
      ],
      todo: []
    },
    {
      id: "pohyb",
      title: "Pohyb, sport a fyzioterapie",
      know: "Genetické vyšetření sport ani rehabilitaci neomezuje. Kardiologie 11/2022 bez omezení – syn může sportovat bez limitu.",
      doing: [
        "Fotbal, kolo, trampolína doma.",
        "Plavání 1× týdně v teplém bazénu (30–35 °C uvolňuje spastické svaly).",
        "Rozhodnutí parkour vs. lezení – partnerka zkusí stěnu.",
        "Hipoterapie odložena (syn nechce – respektovat).",
        "Fyzio Antoš ~1× za 3 měsíce – žebřiny, core, závaží, protahování."
      ],
      todo: [
        "Lezení vs. parkour: lezení rozumnější (core, rovnováha, hamstringy v přirozeném nastavení, nižší riziko pádu)."
      ],
      note: "Kolo: minimum spastických nástrah, dítě se cítí „normální“. Bazény TOP 3 v Brně: Kraví hora (33–35°C), Lužánky (30–32°C), Hastrmánci Modřice (31–32°C)."
    },
    {
      id: "dysfazie",
      title: "Vývojová dysfázie, psychologie, škola",
      know: "Expresivní vývojová dysfázie. Pedopsychologie 7/2022 (4,5 r.): závěr „intelektově hluboce podprůměrný“ – ALE test je z doby, kdy syn neuměl mluvit. Aktuálně 1. třída soukromé SCIO školy, asistent od 1. 1. 2025, slovní zásoba normální, ve větách, kamarády má. WES OVŘ (986 genů) negativní.",
      doing: [
        "Pokračovat v logopedii (Klinika LOGO).",
        "Pravidelná komunikace se školou a asistentem (ideálně měsíčně)."
      ],
      todo: [
        "Zvážit opakování pedopsychologického vyšetření v létě / podzimu 2026 – pro aktualizaci obrazu.",
        "Porucha koncentrace – pokud výrazně ovlivňuje školu, konzultace s dětským psychiatrem k otázce ADHD.",
        "SPC Kociánka (Mgr. Lékař) – obnovit poukaz na asistentku, končí 31. 8. 2026!"
      ],
      note: "Závěr „intelektově hluboce podprůměrný“ z 2022 je jazykově zkreslený – aktuální stav výrazně lepší. Má smysl mít v dokumentaci aktuální obraz."
    },
    {
      id: "onkogen",
      title: "Onkogenetika – matka a její sestra",
      know: "Aktivní doporučení z genetické zprávy. Babička ca ovárií ve 42 letech je signál pro onkogenetickou konzultaci – ca ovárií v tak mladém věku má nízkou pravděpodobnost čistě sporadického výskytu. HBOC negativní u matky, ale negativní HBOC nevylučuje další rizika.",
      doing: [
        "Onkogenetická konzultace pro matku A pro její sestru – ÚBLG FN Motol, 000 000 000.",
        "Kromě mamografu a gynekologické prohlídky 1× ročně i transvaginální UZ ovárií, případně CA-125. Intervaly určí onkogenetik.",
        "Zásady zdravé životosprávy: ovoce, zelenina, vláknina; omezit maso (zejména uzeniny); minimum alkoholu, kouření; prevence stresu; přiměřená fyzická aktivita; prevence přílišného slunění.",
        "Předat onkogenetické doporučení sestře matky.",
        "Genetické vyšetření GJB2 u dalších pokrevních příbuzných matky.",
        "Uložit genetické zprávy do rodinné složky – budou se hodit pro gynekology a onkology."
      ],
      todo: []
    },
    {
      id: "repro",
      title: "Reprodukční plánování",
      know: "Pro případné další dítě rodičů: rodiče u žádného genu nesdílejí přenašečství → riziko MLD, CPHD, MCAD i hluchoty z těchto genů prakticky nulové. Riziko DMO není geneticky zvýšené – závisí na průběhu těhotenství a porodu. Pro syna v reprodukčním věku (15+ let) informovat ho o přenašečství ARSA, PROP1, GJB2; jeho partnerka by měla mít možnost vyšetření.",
      doing: [],
      todo: [
        "Pokud by rodiče chtěli maximální jistotu, lze s genetikou diskutovat preimplantační genetickou diagnostiku – ale pravděpodobně není indikovaná.",
        "Informaci o přenašečství uložit do zdravotnické dokumentace syna."
      ]
    }
  ],

  exercises: [
    {
      title: "Aktivní vis s oporou nohou („stáhnutí lopatek“)",
      cat: "žebřiny",
      how: "Syn stojí čelem ke žebřinám na nižší příčce (asi v úrovni kolen), rukama se chytí horní hrazdy nadhmatem na šířku ramen. Nohy zůstávají opřené, váhu částečně nese sám. Úkol: „stáhni lopatky dolů a dozadu, jako bys je chtěl schovat do zadních kapes.“ Ramena se vzdálí od uší, hrudník se mírně zvedne. Drží 5 sekund, pak povolí.",
      start: "3–5 opakování, dýchá normálně, nezadržuje dech",
      why: "Nezvyšuje nitrobřišní tlak (bezpečné při diastáze), učí základní vzorec aktivace lopatek, syn si reguluje zátěž tím, kolik váhy nechá na nohou.",
      tracking: "Počet opakování × délka výdrže (sec)"
    },
    {
      title: "Šikmý „shyb“ pod nízkou tyčí (australian row)",
      cat: "žebřiny",
      how: "Trapéz nebo nižší příčka žebřin v úrovni pasu/hrudníku. Syn se postaví pod tyč, chytí ji nadhmatem, nohy zapřené o zem před tyčí. Tělo rovné jako prkno, paty na zemi. Přitahuje hrudník k tyči a pomalu spouští. Čím víc je tělo svislé, tím lehčí cvik.",
      start: "5 opakování, 2 série, lehčí poloha",
      why: "Horizontální tah – buduje sílu zad a paží potřebnou pro shyb, bez rizika přetížení ramene a bez tlaku na břišní stěnu. Cvik se dá donekonečna progresivně ztěžovat.",
      tracking: "Počet opakování × série, úhel těla (lehký / střední / těžký)"
    },
    {
      title: "Lezení po žebřinách nahoru a dolů",
      cat: "žebřiny",
      how: "Pomalé lezení po žebřinách nahoru a stejně pomalé zpátky dolů. Vždy se střídá ruka s nohou – vlevo ruka, vpravo noha, atd. Důraz na pomalost a kontrolu, ne na rychlost.",
      start: "2 série tam a zpět",
      why: "Přirozený funkční pohyb, který nutí levou stranu zapojit. Aktivuje současně nohy, ruce, střed těla v koordinaci, bez prudkých nárazů.",
      tracking: "Počet opakování tam-a-zpět, kvalita střídání (čisté / s nápovědou)"
    }
  ],

  dailyRoutine: [
    { when: "RÁNO 15 min", what: "Dýchání do břicha 10× vleže • Achillova šlacha 3×30 s • Flexory kyčle 3×20 s v kleku • Motýlek vsedě 3×20 s", since: "květen" },
    { when: "ODPOLEDNE 15–20 min", what: "Core: dead bug 2×8 + bird-dog 2×8 + boční plank 2×15 s • Nohy: dřepy 2×8 + zvedání špiček 2×10 • Rovnováha: stoj na 1 noze, chůze pozpátku • Senzomotorické chodníčky 10 min bosýma • Trampolína 5–10 min • Žebřiny 3 cviky", since: "květen core / červen rovnováha / léto žebřiny" },
    { when: "VEČER 10 min", what: "Orofaciální: foukání brčkem + smoothie brčkem + žvýkačka • Polykání zavřenými rty (u jídla) • Epsomská koupel 15–20 min (3–4×/týdně)", since: "květen" },
    { when: "CELÝ DEN", what: "W-sed → do tureckého nebo bočního sedu • Jazyk vysunutý → klidná připomínka max 3–5× denně • Chůze po špičkách → NEPŘIPOMÍNAT", since: "květen" }
  ],

  doVsDont: [
    { area: "Orofaciální", yes: "Foukání brčkem, smoothie brčkem, žvýkačka, polykání zavřenými rty", no: "Knoflíkový cvik. Jazyk nahoru – zvážit později." },
    { area: "W-sed", yes: "Turecký sed, boční sed", no: "Sedací klín (Antoš: není potřeba)" },
    { area: "Core", yes: "Dýchání do břicha, dead bug, bird-dog, boční plank, vis na hrazdě", no: "Fitball. Klasický plank." },
    { area: "Protahování", yes: "Achillova šlacha (priorita), flexory kyčle, motýlek", no: "Flexory lokte a zápěstí" },
    { area: "Posilování", yes: "Dřepy / squaty. Dorzální flexory – vyhodnotit.", no: "Bridging / gluteální most" },
    { area: "Rovnováha", yes: "Balanční čočka, chůze pozpátku, senzomotorické chodníčky, trampolína", no: "—" },
    { area: "Závaží", yes: "Při cvicích (1 min → sundat → jiný cvik → nasadit)", no: "Při chůzi, při protahování" },
    { area: "CIMT", yes: "Doplňkové – až po zavedení ostatního", no: "Zatím ne primární" },
    { area: "Ortéza AFO", yes: "—", no: "Zatím NE. Problém hamstringy, ne Achillovka. Přehodnotit po neurologovi." },
    { area: "Špičky", yes: "Řešit cvičením, botulotoxinem, protahováním", no: "NEPŘIPOMÍNAT při chůzi" }
  ],

  measurements: [
    { date: "2022-04-20", height: 104.5, weight: 16.35, bmi: 15.0, note: "odečteno oblečení 250 g" },
    { date: "2022-05-21", height: 107.0, weight: 17.25, bmi: 15.1, note: "odečteno oblečení a snídaně 350 g" },
    { date: "2022-06-18", height: 108.5, weight: 16.4, bmi: 13.9, note: "bez oblečení" },
    { date: "2022-07-17", height: 108.5, weight: 17.05, bmi: 14.5, note: "odečteno oblečení a snídaně 250 g" },
    { date: "2022-08-20", height: 109.5, weight: 17.0, bmi: 14.2, note: "odečtení oblečení 100 g" },
    { date: "2022-10-02", height: 109.5, weight: 17.4, bmi: 14.5, note: "odečteno oblečení 100 g" },
    { date: "2022-12-08", height: 111.0, weight: 17.6, bmi: 14.3, note: "bez oblečení" },
    { date: "2023-01-08", height: 111.0, weight: 17.3, bmi: 14.0, note: "bez oblečení" },
    { date: "2023-02-09", height: 111.5, weight: 18.1, bmi: 14.6, note: "bez oblečení" },
    { date: "2023-03-10", height: 111.5, weight: 18.0, bmi: 14.5, note: "bez oblečení" },
    { date: "2023-04-04", height: 112.0, weight: 17.7, bmi: 14.1, note: "bez oblečení" },
    { date: "2023-05-03", height: 112.0, weight: 18.4, bmi: 14.7, note: "bez oblečení" },
    { date: "2023-06-16", height: 113.0, weight: 17.9, bmi: 14.0, note: "bez oblečení" },
    { date: "2023-07-01", height: 114.0, weight: 18.0, bmi: 13.9, note: "bez oblečení" },
    { date: "2023-07-16", height: 114.0, weight: 18.3, bmi: 14.1, note: "bez oblečení" },
    { date: "2023-08-20", height: 114.0, weight: 18.3, bmi: 14.1, note: "bez oblečení" },
    { date: "2023-10-04", height: 115.0, weight: 19.5, bmi: 14.7, note: "bez oblečení" },
    { date: "2023-11-01", height: 115.5, weight: 19.4, bmi: 14.5, note: "bez oblečení" },
    { date: "2023-12-01", height: 115.5, weight: 19.7, bmi: 14.8, note: "bez oblečení" },
    { date: "2024-01-01", height: 115.5, weight: 19.6, bmi: 14.7, note: "bez oblečení" },
    { date: "2024-02-01", height: 117.0, weight: 19.6, bmi: 14.3, note: "bez oblečení" },
    { date: "2024-03-04", height: 117.0, weight: 19.6, bmi: 14.3, note: "bez oblečení" },
    { date: "2024-04-01", height: 118.0, weight: 20.2, bmi: 14.5, note: "bez oblečení" },
    { date: "2024-05-01", height: 118.0, weight: 20.4, bmi: 14.7, note: "bez oblečení" },
    { date: "2024-06-01", height: 118.0, weight: 20.2, bmi: 14.5, note: "bez oblečení" },
    { date: "2024-07-01", height: 119.0, weight: 20.2, bmi: 14.3, note: "bez oblečení" },
    { date: "2024-08-14", height: 120.0, weight: 21.4, bmi: 14.9, note: "bez oblečení" },
    { date: "2024-09-01", height: 120.5, weight: 21.2, bmi: 14.6, note: "bez oblečení" },
    { date: "2024-10-01", height: 121.3, weight: 21.3, bmi: 14.5, note: "bez oblečení" },
    { date: "2024-11-01", height: 121.5, weight: 21.8, bmi: 14.8, note: "bez oblečení" },
    { date: "2024-12-01", height: 121.9, weight: 21.7, bmi: 14.6, note: "bez oblečení" },
    { date: "2025-01-01", height: 122.0, weight: 21.8, bmi: 14.6, note: "bez oblečení" },
    { date: "2025-02-01", height: 123.0, weight: 22.1, bmi: 14.6, note: "bez oblečení" },
    { date: "2025-03-02", height: 123.3, weight: 22.2, bmi: 14.6, note: "bez oblečení" },
    { date: "2025-04-01", height: 124.0, weight: 22.8, bmi: 14.8, note: "bez oblečení" },
    { date: "2025-05-01", height: 124.0, weight: 22.6, bmi: 14.7, note: "bez oblečení" },
    { date: "2025-06-01", height: 125.0, weight: 23.2, bmi: 14.8, note: "bez oblečení" },
    { date: "2025-07-06", height: 125.0, weight: 23.5, bmi: 15.0, note: "bez oblečení" },
    { date: "2025-08-11", height: 125.0, weight: 23.5, bmi: 15.0, note: "bez oblečení" },
    { date: "2025-09-01", height: 126.0, weight: 24.1, bmi: 15.2, note: "bez oblečení" },
    { date: "2025-10-01", height: 126.8, weight: 23.8, bmi: 14.8, note: "bez oblečení" },
    { date: "2025-12-01", height: 126.8, weight: 24.3, bmi: 15.1, note: "bez oblečení" },
    { date: "2026-01-01", height: 127.6, weight: 25.1, bmi: 15.4, note: "bez oblečení" },
    { date: "2026-02-02", height: 127.6, weight: 24.5, bmi: 15.0, note: "bez oblečení" },
    { date: "2026-03-01", height: 127.6, weight: 25.3, bmi: 15.5, note: "bez oblečení" },
    { date: "2026-04-01", height: 128.6, weight: 25.0, bmi: 15.1, note: "bez oblečení" }
  ],

  supplements: [
    { name: "Vitamin D", dose: "1 000–2 000 IU", when: "ráno", season: "září–duben (léto vysadit)", status: "Aktivní", note: "Kosti, spasticita - magnézium spolu" },
    { name: "Omega-3 (EPA + DHA)", dose: "500–1 000 mg", when: "ráno", season: "celoročně", status: "Aktivní", note: "Mozek, zánětlivost" },
    { name: "Magnézium", dose: "100–200 mg", when: "VEČER", season: "celoročně", status: "Otevřeno", note: "ÚKOL: přesunout na večer" },
    { name: "Vápník", dose: "ze stravy", when: "v jídle", season: "celoročně", status: "Aktivní", note: "Mléčné, tofu, sezam" },
    { name: "Zinek + železo", dose: "kontrolovat", when: "—", season: "—", status: "Otevřeno", note: "Odběr při 9leté prohlídce" },
    { name: "Bílkoviny", dose: "30–38 g/den", when: "průběžně v jídle", season: "celoročně", status: "Aktivní", note: "Sušený vaječný bílek, řecký jogurt, cottage, ořechové máslo, lněné/konopné semínko" },
    { name: "Sušený vaječný bílek", dose: "1–2 lžíce/den", when: "do kaše/smoothie", season: "celoročně", status: "Otevřeno", note: "ÚKOL: koupit (pekařský, NE sportovní)" },
    { name: "Epsomská sůl (koupel)", dose: "1–2 hrnky", when: "večer před spaním", season: "celoročně", status: "Otevřeno", note: "ÚKOL: koupit. 3–4× týdně. Tracking v listu „3. Cvičení“" },
    { name: "Aerius", dose: "dle potřeby", when: "při alergii/rýmě", season: "—", status: "Aktivní", note: "Antihistaminikum - akutní" },
    { name: "Mommox", dose: "dle potřeby", when: "při dušnosti/kašli", season: "—", status: "Aktivní", note: "Bronchodilatátor. NE v den vyšetření PCD!" },
    { name: "Omeprazol (dříve)", dose: "—", when: "—", season: "—", status: "Pauza", note: "Aktuálně nebere - sledovat GER" }
  ],

  meds: [
    { name: "Aerius", type: "antihistaminikum", use: "dle potřeby při alergii / rýmě" },
    { name: "Mommox", type: "bronchodilatátor", use: "dle potřeby při dušnosti / kašli. POZN: NE v den vyšetření PCD!" },
    { name: "Omeprazol", type: "PPI (GER)", use: "dříve, aktuálně nebere, sledovat" }
  ],

  skills: {
    does: ["Čůrat na stojáka", "Utřít si zadek", "Čištění zubů elektrickým kartáčkem (zavírání pasty, mytí umyvadla, mytí kartáčku, mytí sebe sama, pinďa mast)", "Přikrývání", "Jídlo bez drobků", "Léky", "Vybalit tašku, umýt ruce, převléknout se"],
    sometimes: ["Skládání oblečení", "Ustlání", "Spláchnout, zhasnout, umýt si ruce", "Věšení oblečení", "Nalití pití + udělání jídla", "Krájení", "Vysátí po sobě", "Zavírání / otevírání dveří", "Pomoc v domácnosti"],
    canNotDoes: ["Chůze po celé noze"],
    cant: ["Vázání tkaniček", "Zapnout knoflík"]
  },

  equipment: [
    { item: "Merco CoreBoard balanční prkno s válcem", price: "1 000 Kč", type: "Balance", mount: "bez montáže", status: "máme" },
    { item: "Bosu", price: "800 Kč", type: "Balance", mount: "bez montáže", status: "máme" },
    { item: "Hrazda do dveří", price: "600 Kč", type: "Posilování", mount: "bez montáže", status: "máme" },
    { item: "Žebřiny ze zebrinyahrazdy.cz", price: "od 3 420 Kč", type: "Žebřiny (rozteč 10 cm, borovice + buk, nosnost 200 kg)", mount: "do zdi", status: "koupit (+000 000 000 000)" },
    { item: "Bukový nástavec (stolek) k žebřinám", price: "příplatek", type: "Příslušenství – pracovní stolek", mount: "k žebřinám", status: "koupit" },
    { item: "Ocelová hrazda (ribstole.cz nebo Hrazdy SCHUBI)", price: "1 500–3 500 Kč", type: "Hrazda – nerez/svařovaná, nosnost 130–150 kg", mount: "do zdi", status: "koupit (dřevěná z výrobce má jen 100 kg = na hraně pro dospělého)" },
    { item: "Gymnastické kruhy", price: "—", type: "Příslušenství", mount: "k žebřinám", status: "ověřit kompatibilitu, koupit" },
    { item: "Žíněnka pod žebřiny", price: "—", type: "Bezpečnost", mount: "—", status: "koupit (min. 180 × 60 × 5 cm)" }
  ],

  shopping: [
    "Epsomská sůl do koupele",
    "Sušený vaječný bílek (pekařský, NE sportovní)",
    "Vstupenky / permanentka do bazénu"
  ],

  principles: {
    mindset: "Vypichovat primárně to, co se mu povedlo. NEUPOZORŇOVAT na chyby. Místo hvězdiček a bodů: v herně visí list, na který krátce zapisujeme „pochvaly za daný den“ – konkrétní věci, které se povedly. Funguje to lépe než systém odměn, protože ho to nestresuje a posiluje to, co chceme vidět.",
    six: [
      { name: "Hra, ne cvičení", text: "dead bug = „brouk“, vis = „opice“, žebřiny = „Spiderman“." },
      { name: "Výběr, ne příkaz", text: "„Chceš brouka nebo opici?“ místo „musíš udělat obojí“." },
      { name: "Cvičit S NÍM", text: "dělat cviky vedle, závodit. Nestát a říkat, co má dělat." },
      { name: "Krátce a často", text: "3 × 7 min > 1 × 20 min. Pokud nechce, nech to být." },
      { name: "Viditelný pokrok", text: "nástěnka na lednici – kolik sekund vydrží vis, kolik opakování dřepů (čistě měření, ne odměny)." },
      { name: "Pozitivní kauzalita", text: "„Když cvičíme, líp ti to jde na fotbale“ místo „bude to horší“." }
    ],
    situations: [
      { sit: "Nechce cvičit", yes: "„Chceš brouka nebo opici?“ / Začít sám vedle něj. / „Ok, dneska pauza.“", no: "„Musíš cvičit.“ / „Když nebudeš, bude to horší.“" },
      { sit: "Odbíhá", yes: "„Jaký je další krok?“ / „Ještě dva a máš hotovo.“", no: "„Vrať se! Nikdy nevydržíš.“" },
      { sit: "W-sed", yes: "Tiše přijít, nabídnout polštář. „Přehoď nohy.“ Max 3× denně.", no: "„Zase takhle sedíš!“" },
      { sit: "Jazyk venku", yes: "Nenápadný signál (poklepání na bradu). Max 3–5× denně.", no: "Hlasité „dej jazyk dovnitř“." },
      { sit: "Chůze po špičkách", yes: "NEPŘIPOMÍNAT. Energii do cvičení, protahování, botulotoxinu.", no: "Slovní korekce u každého kroku." },
      { sit: "„Nechci / nejde.“", yes: "„Co kdybychom to zkusili jinak?“ / „Je ok, že je to těžké.“", no: "„Musíš.“ / „Jiné děti to zvládají.“" },
      { sit: "Dobrý den – snažil se", yes: "„Dneska ti to šlo. Všiml jsem si.“ Krátce, konkrétně, oční kontakt.", no: "Přehnaná pochvala bez konkrétna." }
    ],
    rules: [
      "Restrikce OK, ale framing: „tablet je po oblékání“ (pořadí), ne „když se neoblékneš, nemůžeš“ (trest).",
      "Pravidlo 3 z 5: pokud 3 z posledních 5 dnů problém → trend, hledat příčinu. Pokud 1 z 5 → výjimka, odpustit.",
      "Vlastní motivace: realisticky 13–16 let. Teď budujeme návyk formou hry.",
      "Nedělní reflexe 5–10 min: Co se povedlo? / Co bylo těžké? / Jak to vylepšíme?"
    ]
  },

  exerciseLog: [
    { date: "2026-05-05", cvicil: "Y", rano: "Y", odpoledne: "Y", vecer: "Y", visOpak: 5.0, visVydrz: 5.0, ausRowOpak: 4.0, ausRowUhel: "lehký", lezeniTamZpet: 1.0, lezeniKvalita: "s nápovědou", trampolinaMin: 8.0, plavani: "N", epsomska: "Y", poznamka: "Začátek tracking - 3 nové cviky" }
  ],

  yearRhythm: [
    { quarter: "Q2 (duben–červen)", label: "ZÁBĚH", text: "Počasí se zlepšuje, venku začíná fotbal a kolo. Doma instalace žebřin (s bukovým nástavcem), zavedení nových cviků (vis, australian row, lezení), zahájení plavání od června. Objednání u endokrinologa, neurologa, onkogenetiky pro matku, kontakt na pneumologii. Žádanky od PLDD na metabolické vyšetření a krevní odběr. Závaží zatím jen na zdravější straně. Vit. D vysadit. Magnézium přesunout na večer. Předat onkogenetickou informaci sestře matky." },
    { quarter: "Q3 (červenec–září)", label: "INTENZIVNÍ", text: "Prázdniny = víc času, delší tréninky (až 45 min). Maximum venku: plavání, kolo, lezení, fotbal. Lázně s doprovodem (pokud reálné). Progrese závaží na obě strany. Vyhodnocení výsledků od specialistů. Zvážit opakování pedopsychologického vyšetření před začátkem 2. třídy. SPC obnovení poukazu na asistentku do 31. 8. 2026." },
    { quarter: "Q4 (říjen–prosinec)", label: "INDOOR FOCUS", text: "Škola, méně světla. Žebřiny naplno, plavání pokračuje v teplém bazénu indoor. CIMT (fixace zdravé ruky – trénink slabší strany), pokud kapacita. Rozhodnutí o botulotoxinu (nová lokace) podle neurologa. PCD – výsledek IF/EM/kultur. Listopad–prosinec: vyhodnocení roku, plán 2027." },
    { quarter: "Q1 2027 (leden–březen)", label: "KONSOLIDACE", text: "Únor: KONTROLA U GENETIKA v ÚBLG FNM s reanalýzou dat. Přinést všechny výsledky (metabolika, sulfatidy, růstová křivka). Zhodnotit hierarchii léčby (žebřiny → BTX → SDR)." },
    { quarter: "Průběžně celý rok", label: "—", text: "Denní rutina (odpoledne 15–20 min + večer 10 min). W-sed korekce (tichá, max 3× denně), jazyk nenápadný signál (max 3–5×), chůze po špičkách – NEPŘIPOMÍNAT. Fyzio Antoš 1× za 3 měsíce. Čtvrtletní review plánu – první neděle v červenci, říjnu, lednu, dubnu. Pozor na progresi: DMO je z definice neprogresivní – ztráta dříve nabytých dovedností je signál pro nové vyšetření." }
  ]
};
