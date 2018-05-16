export default async function getAvailableFortnights(region) {
  // TODO: Add Japan region
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  let currentRegion = region === 'Global' ? '' : 'Jap';
  const weekData = await fetch(
    `https://optc-agenda.github.io/assets/json/weeks${currentRegion}.json`
  );

  // FIXME: Add all the translations
  const fortnightTranslations = {
    LuffyPizza: '2087',
    OarsHogback: '1965',
    WandaCarrot: '1812',
    Kalifa: '0318',
    Lucci: '0322',
    Franky: '0337',
    Kraken: '0341',
    Hogback: '0386',
    Perona: '0392',
    Absalom: '0405',
    Brook: '0424',
    Okama: '0436',
    Duck: '0445',
    BaroqueWorksPrison: '0462',
    Crocodile: '0510',
    Domino: '0538',
    SadieChan: '0550',
    AfroLuffy: '0571',
    Shandia: '0583',
    ShanksBuggy: '0599',
    Zeff: '0607',
    Camie: '0635',
    ArlongPiratess: '0656',
    SunaSand: '0664',
    CalgaraNoland: '0688',
    TBone: '0724',
    Wanze: '0743',
    LuffyHalloween: '0761',
    ZoroHalloween: '0766',
    Breed: '0797',
    ProposalNami: '0808',
    TomWorkers: '0848',
    Wapol: '0852',
    StrawHat: '0866',
    JinbeKimono: '0885',
    CrocodileKimono: '0897',
    KujaPirates: '0918',
    Hannyabal: '0929',
    WhitebeardCommanders: '0946',
    WhitebeardCommanders2: '0979',
    HeartPirates: '1003',
    CountButler: '1011',
    IvankovWoman: '1037',
    NicoOlvia: '1049',
    Gasparde: '1072',
    Indigo: '1095',
    YoungNamiRobin: '1112',
    CP9: '1137',
    GranTesoro: '1167',
    Rumbar: '1203',
    World: '1215',
    RevolutionaryArmy: '1242',
    WhitebeardCommanders3: '1254',
    DonquixotePirates: '1287',
    Mr3Jail: '1304',
    Tontatta1: '1328',
    Tontatta2: '1332',
    BigMomPirates: '1357',
    Soldatino: '1384',
    Shambles: '1397',
    Sengoku: '1416',
    ChinjaoFamily: '1426',
    Violet: '1450',
    Sentomaru: '1469',
    Whitebeard4: '1509',
    Dadan: '1520',
    SoulKing: '1547',
    Elizabello: '1564',
    LawMonet: '1581',
    Shirahoshi: '1597',
    BlackbeardPirates: '1606',
    Fishman: '1624',
    GiollaBrook: '1649',
    MadameSharley: '1670',
    KidPirates: '1690',
    WanoSamurai: '1774',
    Caribou: '1842',
    PeronaMihawk: '1891',
    ReijuSanji: '1918',
    MakinoShanks: '2021',
    Germa: '2056',
  };
  const { weeks } = await weekData.json();
  const today = new Date();
  const weekDayIndex = today.getDay();
  const firstDayOfWeek = new Date(today.setDate(today.getDate() - weekDayIndex));

  const todayData = weeks
    .reverse()
    .find(
      w =>
        w.starting === firstDayOfWeek.getDate() && w.month === monthNames[firstDayOfWeek.getMonth()]
    );

  const result = [];
  todayData.program[weekDayIndex].fn.map(f => result.push(fortnightTranslations[f]));

  // TODO: Add default (as in: always available) fortnights
  return result || [];
}
