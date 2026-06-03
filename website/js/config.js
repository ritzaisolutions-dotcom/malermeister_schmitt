// ============================================================
//  HANDWERKER TEMPLATE — Kundenkonfiguration
//  Alle kundespezifischen Werte hier eintragen.
//  Bilder: logo-client.png, favicon-client.png, hero-video.mp4, ref_*.jpg
// ============================================================
const CLIENT = {
  // ── FIRMA ──────────────────────────────────────────────────
  name:                 "Malergeschäft Hans Schmitt e.K.",
  nameKurz:             "Schmitt",
  unternehmenstyp:      "e.K.",
  handwerksbezeichnung: "Maler",
  berufsbezeichnung:    "Malermeister",
  gruendungsjahr:       "",
  slogan:               "Exakte Malerarbeiten, ruhige Beratung und ein Ergebnis, das zur Architektur passt.",
  heroEyebrow:          "Meisterbetrieb · Koblenz",
  leistungenKurz:       "Innenarbeiten, Fassadengestaltung, Bodenbeläge und Schimmelbeseitigung",

  // ── KONTAKT & ADRESSE ──────────────────────────────────────
  strasse:        "Emser Straße 80",
  plz:            "56076",
  ort:            "Koblenz",
  telefon:        "+49-261-28744414",
  telefonDisplay: "0261 / 28744414",
  fax:            "+49-261-28737369",
  faxDisplay:     "0261 / 28737369",
  email:          "info@malergeschaeft-schmitt.de",

  // ── ONLINE ─────────────────────────────────────────────────
  domain:        "https://malergeschaeft-schmitt.de",
  calcomLink:    "",
  web3formsKey:  "[WEB3FORMS_ACCESS_KEY]",
  pdfSlug:       "kalkulation",

  // ── WHATSAPP ───────────────────────────────────────────────
  // Leer lassen ("") um WhatsApp-Button zu deaktivieren.
  // Format: internationale Nummer ohne Leerzeichen, z. B. "+4917612345678"
  whatsapp:            "+4926128744414",
  whatsappVornachricht: "Hallo, ich interessiere mich für Ihre Leistungen und würde gerne mehr erfahren.",

  // ── TERMINBUCHUNG VARIANTE ─────────────────────────────────
  // "calcom"   → Cal.com Embed hinter Consent-Gate
  // "whatsapp" → Großer WhatsApp-Button
  // "formular" → Terminanfrage-Formular via Web3Forms
  // "rueckruf" → Telefon + WhatsApp + Rückruf-Formular (mailto)
  terminVariante: "rueckruf",

  // ── FORMULARE ──────────────────────────────────────────────
  // "mailto" bis Web3Forms-Key vor Go-Live; "web3forms" mit echtem Key
  formularModus: "mailto",

  // ── GOOGLE ─────────────────────────────────────────────────
  googleMapsEmbedUrl:    "",
  googleMapsLink:        "https://maps.app.goo.gl/QEFtoo4XoMRHQzND8",
  googleBewertungsLink:  "https://maps.app.goo.gl/QEFtoo4XoMRHQzND8",
  googleBewertungAnzahl: "Google-Profil",
  googleBewertungNote:   "Bewertungen",

  // ── ÖFFNUNGSZEITEN ─────────────────────────────────────────
  oeffnungszeiten: {
    moDo: [
      { von: "07:30", bis: "12:00" },
      { von: "12:45", bis: "16:00" }
    ],
    fr: [
      { von: "07:30", bis: "12:00" },
      { von: "12:45", bis: "14:45" }
    ]
  },

  // ── LEISTUNGEN (Startseite, 4 Karten) ──────────────────────
  leistung1Titel: "Innenarbeiten",
  leistung1Text:  "Streichen, Tapezieren, Lasieren, Lackieren, kreative Wandgestaltung und Trockenbau mit sauberer Ausführung.",
  leistung2Titel: "Außenarbeiten",
  leistung2Text:  "Fassadenanstriche, Fassadengestaltung, WDVS-Wärmedämmung und Sanierung von Wasserschäden.",
  leistung3Titel: "Bodenbeläge",
  leistung3Text:  "Laminat, Teppich, PVC und Linoleum sorgfältig vorbereitet und passend zum Raum verlegt.",
  leistung4Titel: "Schimmel & Substanzschutz",
  leistung4Text:  "Schimmelbeseitigung, Werterhalt und Schutz bestehender Oberflächen mit Blick auf die Bausubstanz.",

  // ── WARUM-WIR (Startseite, 4 Punkte) ───────────────────────
  warumLabel:  "Warum wir",
  warum1Titel: "Meisterbetrieb mit Haltung",
  warum1Text:  "Beratung, Vorbereitung und Ausführung bleiben in fachkundiger Hand.",
  warum2Titel: "Regional verwurzelt",
  warum2Text:  "Wir arbeiten für Privatkunden und Gewerbe in Koblenz und der Rhein-Mosel-Region.",
  warum3Titel: "Saubere Baustellen",
  warum3Text:  "Schutz, Ordnung und präzise Übergaben gehören zur Arbeit, nicht zum Extra.",
  warum4Titel: "Persönliche Beratung",
  warum4Text:  "Material, Farbe und Ablauf werden vorab ruhig abgestimmt, damit das Ergebnis zum Objekt passt.",

  // ── REFERENZEN ─────────────────────────────────────────────
  referenzenIntro: "Auswahl von Maler-, Fassaden- und Gestaltungsprojekten aus Koblenz und Umgebung.",

  // ── ÜBER UNS TEXT ──────────────────────────────────────────
  // Array mit je einem Absatz als String. config-apply.js rendert
  // diese als <p>-Elemente in die .familie-body Section.
  // Empfohlen: 3–4 Absätze. HTML-Tags sind erlaubt (z.B. <strong>).
  ueberUns: [
    "Malergeschäft Hans Schmitt e.K. steht für Malerhandwerk mit ruhiger, präziser Ausführung. Vom ersten Gespräch bis zur fertigen Fläche zählt, dass Material, Untergrund und Gestaltung zusammenpassen.",
    "Unsere Arbeit beginnt nicht beim ersten Farbauftrag, sondern bei der Vorbereitung: abkleben, schützen, prüfen, spachteln und sauber planen. So entstehen Oberflächen, die nicht nur frisch aussehen, sondern lange tragen.",
    "Wir betreuen Projekte in Koblenz und der Umgebung, darunter Neuwied, Andernach, Lahnstein, Bendorf, Mayen, Vallendar und Boppard."
  ],

  // ── DOKUMENT-BILDER (Über-uns-Sektion) ─────────────────────
  // Dateiname ohne Extension (Dateien: images/<name>.jpg + images/<name>.webp).
  // Leer lassen ("") um ein Dokument-Bild auszublenden.
  dokBild1: "",    // Meisterbrief
  dokBild2: "",    // Zweites Zertifikat
  dokBild3: "",    // Urkunde / Auszeichnung

  // ── TEAM (team.html, bis zu 3 Mitglieder) ──────────────────
  team1Name:  "Hans Schmitt",
  team1Rolle: "Malermeister",
  team1Init:  "HS",
  team2Name:  "Fachteam Innenarbeiten",
  team2Rolle: "Streichen, Tapezieren, Gestalten",
  team2Init:  "IN",
  team3Name:  "Fachteam Außen & Boden",
  team3Rolle: "Fassade, Bodenbeläge, Sanierung",
  team3Init:  "AB",

  // ── KOSTENRECHNER ──────────────────────────────────────────
  // Auf false setzen um den Kostenrechner komplett auszublenden
  // (inkl. Navigation). Sinnvoll für Betriebe ohne Flächenpreise.
  kostenrechnerAktiv: true,

  // ── KOSTENRECHNER PREISE (€/m²) ────────────────────────────
  preise: {
    standard:           18,
    premium:            28,
    xl:                 22,
    altbelagEntfernen:  8,
    abdichtung:         15,
    fussbodenheizung:   12
  },

  calcProjekte: [
    { id: "bath",    label: "Innenarbeiten",        multi: 1.0  },
    { id: "floor",   label: "Bodenbeläge",          multi: 0.9  },
    { id: "terrace", label: "Fassade",              multi: 1.3  },
    { id: "repair",  label: "Schimmel & Sanierung", multi: 1.15 }
  ],
  calcMaterialien: [
    { id: "standard", label: "Standardanstrich", desc: "Hochwertige Dispersionsfarbe, ca. 18 €/m²" },
    { id: "premium",  label: "Premiumgestaltung", desc: "Lasur, Spezialfarbe oder feine Gestaltung, ca. 28 €/m²" },
    { id: "xl",       label: "Tapezieren", desc: "Vliestapete fachgerecht verarbeiten, ca. 22 €/m²" }
  ],
  calcExtras: [
    { id: "debris",        label: "Alte Tapete entfernen", desc: "+ ca. 8 €/m²"  },
    { id: "waterproofing", label: "Grundierung & Spachtelung", desc: "+ ca. 15 €/m²" },
    { id: "floorHeating",  label: "Deckenarbeiten", desc: "+ ca. 12 €/m²" }
  ],

  // ── KONTAKTFORMULAR ────────────────────────────────────────
  // Auf false setzen um das Formular auszublenden (nur Adresse/Tel/WA).
  kontaktformularAktiv: true,

  // Anliegen-Optionen für das Kontaktformular-Dropdown.
  // config-apply.js ersetzt die hardcodierten HTML-Optionen damit.
  kontaktAnliegen: [
    { value: "beratung",    label: "Beratung / Angebot anfragen"  },
    { value: "innen",       label: "Innenarbeiten"                },
    { value: "fassade",     label: "Fassade / Außenarbeiten"      },
    { value: "schimmel",    label: "Schimmel / Sanierung"         },
    { value: "allgemein",   label: "Allgemeine Anfrage"           }
  ],

  // ── SOCIAL MEDIA ───────────────────────────────────────────
  facebook:  "",
  instagram: "",

  // ── FARBEN ─────────────────────────────────────────────────
  // Überschreibt CSS Custom Properties aus variables.css.
  // Alle Felder sind optional — nur ausgefüllte Werte werden angewendet.
  colors: {
    primary:      "#c9a84c",
    primaryDark:  "#0f0e0c",
    primaryMid:   "#1c1a14",
    primaryLight: "#242018",
    accent:       "#c9a84c",
    accentHover:  "#e8c97a",
    accentLight:  "#8a7035"
  },

  // ── SEO & SCHEMA.ORG ───────────────────────────────────────
  branche:  "PaintingContractor",
  geoLat:   "50.3480602",
  geoLng:   "7.6047456",

  // ── KAMMER & VERBAND (für Impressum) ───────────────────────
  kammer:      "Handwerkskammer Koblenz, Koblenz",
  fachverband: "Maler- und Lackierer-Innung Koblenz",

  // ── DATENSCHUTZ ────────────────────────────────────────────
  // Für die Datenschutzerklärung: zuständige Aufsichtsbehörde
  bundesland:          "Rheinland-Pfalz",
  aufsichtsbehoerde:   "Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Rheinland-Pfalz",
  aufsichtsbehoerdeUrl:"https://www.datenschutz.rlp.de/",

  // ── TEAM & STATS ───────────────────────────────────────────
  jahreErfahrung:    "Meister",
  teamGroesse:       "Fachteam",
  bewertungenAnzahl: "Google-Profil",

  // ── PARTNER (Quelle: malergeschaeft-schmitt.de/Partner/) ───
  partnerIntro: "Gemeinsam mit regionalen Fachbetrieben und bewährten Systempartnern in Koblenz und der Region.",
  partnerBgColor: "var(--secondary-dark, #1c1a14)",
  partner: [
    { name: "Schreinerei Meerbothe",       url: "http://www.schreinerei-meerbothe.de/start.html", logo: "partner/meerbothe.png" },
    { name: "Schreinerei Müller",         url: "http://innenausbau-mueller.com/",                logo: "partner/mueller.png" },
    { name: "Elektro-Service-Dietze",     url: "",                                               logo: "" },
    { name: "Jakob Dunkel",               url: "http://www.dunkel-elektroanlagen.de/",           logo: "partner/dunkel.png" },
    { name: "Dachdecker Marco Zeuzheim",  url: "http://www.dachdecker-zeuzheim.de/",             logo: "partner/zeuzheim.png" },
    { name: "Bedachungen Rudolf Fetz",    url: "http://www.bedachungen-fetz.de/",                logo: "partner/fetz.png" },
    { name: "a.knipp natursteine",        url: "http://www.aknipp.de/",                           logo: "partner/aknipp.png" },
    { name: "Kürsten Sanitär",            url: "http://www.kuersten-shk.de/",                     logo: "partner/kuersten.png" },
    { name: "Brillux",                    url: "http://www.brillux.de/",                           logo: "partner/brillux.png" },
    { name: "Südwest",                    url: "https://suedwest.de/",                             logo: "partner/suedwest.png" },
    { name: "ED Baucenter",               url: "https://ed-baucenter.de/",                         logo: "partner/ed-baucenter.png" },
    { name: "MEG",                        url: "https://www.meg.de/",                              logo: "partner/meg.png" }
  ],

  // ── FAQ (Akkordeon neben Kontaktformular) ──────────────────
  faq: [
    {
      frage: "Welche Malerarbeiten bietet Malergeschäft Hans Schmitt in Koblenz an?",
      antwort: "Innenarbeiten (Streichen, Tapezieren, Lasieren, Lackieren, Gestaltung, Trockenbau), Fassadenarbeiten mit WDVS, Bodenbeläge sowie Schimmelbeseitigung und Sanierung nach Wasserschäden."
    },
    {
      frage: "In welchen Orten rund um Koblenz arbeitet der Betrieb?",
      antwort: "Hauptstandort ist Koblenz (Emser Straße 80, 56076). Wir betreuen Projekte auch in Neuwied, Andernach, Lahnstein, Bendorf, Mayen, Vallendar und Boppard."
    },
    {
      frage: "Wie läuft eine Anfrage ab?",
      antwort: "Sie erreichen uns telefonisch, per E-Mail, über das Kontaktformular oder die Rückruf-Anfrage. Wir besprechen Umfang, Untergrund und Zeitplan in einem unverbindlichen Gespräch."
    },
    {
      frage: "Bietet der Betrieb Fassadenarbeiten und WDVS an?",
      antwort: "Ja — Fassadenanstrich, Fassadengestaltung, Wärmedämmverbundsystem (WDVS) und Sanierung von Wasserschäden an der Gebäudehülle."
    },
    {
      frage: "Macht der Betrieb auch Bodenbeläge?",
      antwort: "Ja — Laminat, Teppich, PVC und Linoleum werden nach sauberer Untergrundvorbereitung verlegt."
    },
    {
      frage: "Erstellen Sie kostenlose Angebote?",
      antwort: "Ja. Nach Ihrer Anfrage klären wir den Umfang und erstellen auf Wunsch ein unverbindliches Angebot — vor Ort in Koblenz oder telefonisch."
    }
  ],

  // ── INTERN ─────────────────────────────────────────────────
  klaroStorageName: "schmitt-consent-v1"
};
