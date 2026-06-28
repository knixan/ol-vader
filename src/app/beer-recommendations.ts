export interface BeerRecommendation {
  name: string;
  style: string;
  comment: string;
  brands: string;
  swedishBrands: string;
  emoji: string;
  image: string;
}

export function getBeerRecommendation(weatherId: number, temp: number): BeerRecommendation {
  // Thunderstorm (200–232)
  if (weatherId >= 200 && weatherId < 300) {
    return {
      name: 'Imperial Stout',
      style: 'Dark & Roasted',
      comment: 'North Coast Old Rasputin har bryggts sedan 1995 i Fort Bragg, Kalifornien. Uppkallad efter den ryske mystikern Grigori Rasputin. En Russian Imperial Stout på 9% ABV med djupa smaker av choklad och kaffe – precis lika oförklarlig och kraftfull som sin namne.',
      brands: 'North Coast Old Rasputin · Founders Breakfast Stout · Goose Island Bourbon County',
      swedishBrands: 'Oppigårds Thurbo Stout · Närke Kulturbryggeri Kaggen · Omnipollo',
      emoji: '⛈️',
      image: '/Imperial Stout.png',
    };
  }

  // Drizzle (300–321)
  if (weatherId >= 300 && weatherId < 400) {
    return {
      name: 'Witbier',
      style: 'Belgian Wheat Beer',
      comment: 'Blue Moon skapades 1995 av Keith Villa, som har en doktorsexamen i bryggning från universitetet i Bryssel. Den bryggas med valenciansk apelsinskal och koriander och serveras traditionellt med en apelsinskiva. Trots sin belgiska stil är det ölsorten som introducerade miljontals amerikaner till vetebryggning.',
      brands: 'Hoegaarden · Allagash White · Blue Moon',
      swedishBrands: 'Malmö Brewing Canned Wheat · Oppigårds Weissbier',
      emoji: '🌦️',
      image: '/Witbier-dimma.png',
    };
  }

  // Rain (500–531)
  if (weatherId >= 500 && weatherId < 600) {
    return {
      name: 'IPA',
      style: 'India Pale Ale',
      comment: 'Lagunitas grundades 1993 av Tony Magee i sitt eget kök i Petaluma, Kalifornien. Deras IPA är känd för sin djärva humlekaraktär med citrus och tall. På etiketten finns alltid en historia eller dikt – bryggeriet är lika känt för sin humor som för sin öl.',
      brands: 'Sierra Nevada Torpedo · Lagunitas IPA · Ballast Point Sculpin',
      swedishBrands: 'Oppigårds New Sweden IPA · Stigbergets West Coast NEIPA · Galgbacken IPA',
      emoji: '🌧️',
      image: '/ipa.jpg',
    };
  }

  // Snow (600–622)
  if (weatherId >= 600 && weatherId < 700) {
    return {
      name: 'Winter Ale',
      style: 'Spiced Winter Ale',
      comment: 'Samuel Adams Winter Lager bryggas av Boston Beer Company, uppkallat efter den amerikanske grundarfadern som också var maltmästare. Winter Lager är en säsongsöl med kanel, ingefära och apelsinskal – en festbier-stil med varm kryddighet som har bryggts sedan 1990-talet.',
      brands: 'Samuel Adams Winter Lager · Anchor Christmas Ale · Fuller\'s Winter Ale',
      swedishBrands: 'Oppigårds Thurbo-serien · Nynäshamns Ångbryggeri säsongsöl',
      emoji: '❄️',
      image: '/winter-ale.jpg',
    };
  }

  // Atmosphere – dimma, dis (700–781)
  if (weatherId >= 700 && weatherId < 800) {
    return {
      name: 'Blanc',
      style: 'French Wheat Beer',
      comment: '1664 Blanc härstammar från Kronenbourg i Strasbourg, Alsace – där familjen Hatt började brygga öl år 1664. Blanc är en vitöl smaksatt med Curaçao-apelsinskal och koriander. Det är idag en av Frankrikes mest exporterade ölsorter och en klassiker på europeiska uteserveringar.',
      brands: '1664 Blanc · Kronenbourg 1664',
      swedishBrands: 'Oppigårds Ruby Ale',
      emoji: '🌫️',
      image: '/AmberAle.png',
    };
  }

  // Clear sky (800)
  if (weatherId === 800) {
    if (temp >= 25) {
      return {
        name: 'Pilsner',
        style: 'Czech Lager',
        comment: 'Staropramen har bryggts i Prag sedan 1869 och dess namn betyder "Gamla källan" på tjeckiska. Det bryggas med Saaz-humle, känt för sin jordiga och kryddiga karaktär. Smíchovbryggeriet vid Vltavafloden är en av Centraleuropas mest ikoniska bryggerier och en symbol för tjeckisk ölkultur.',
        brands: 'Pilsner Urquell · Staropramen · Zlatý Bažant',
        swedishBrands: 'Smålands Brygghus Pilsner · O/O Pivot Pils · Köket Remmarlöv Haus Pils',
        emoji: '☀️',
        image: '/pilsner.jpg',
      };
    }
    if (temp >= 15) {
      return {
        name: 'Pale Ale',
        style: 'American Pale Ale',
        comment: 'Sierra Nevada Pale Ale lanserades 1980 och anses ha startat den amerikanska craft beer-revolutionen. Bryggt i Chico, Kalifornien, med hela Cascade-humlekonor som ger den dess karakteristiska citrus- och tallsmak. En av de mest inflytelserika ölsorterna i historien – utan den hade hantverksölen sett helt annorlunda ut idag.',
        brands: 'Sierra Nevada Pale Ale · Firestone 805 · Founders All Day IPA',
        swedishBrands: 'Oppigårds Amarillo · Stigbergets Killer Pale',
        emoji: '🌤️',
        image: '/PaleAle.jpg',
      };
    }
    return {
      name: 'Amber Ale',
      style: 'American Amber Ale',
      comment: 'Fat Tire skapades efter att grundaren Jeff Lebesch cyklade genom Belgien 1988 på sin tjocka mountainbike – därav namnet. Han återvände till Fort Collins, Colorado och återskapade de belgiska ölerna hemma i källaren. New Belgium Brewing grundades 1991 och Fat Tire blev snabbt en symbol för den amerikanska craft beer-rörelsen.',
      brands: 'Fat Tire · Bell\'s Amber Ale · Tröegs Hopback',
      swedishBrands: 'Oppigårds Ruby Ale · Oppigårds Single Hop Ale',
      emoji: '🍂',
      image: '/AmberAlesol.png',
    };
  }

  // Clouds (801–804)
  if (weatherId >= 801 && weatherId < 900) {
    return {
      name: 'Hefeweizen',
      style: 'Bavarian Wheat Beer',
      comment: 'Weihenstephaner är världens äldsta aktiva bryggeri, grundat vid ett benediktinskt kloster i Bayern år 1040. Deras Hefe Weissbier är ett referensverk för hela stilen – banan och kryddnejlika, krämigt vitt skum och brödig kropp. Nästan tusen år av bryggkunskap i varje glas.',
      brands: 'Weihenstephaner Hefe Weissbier · Sierra Nevada Kellerweis',
      swedishBrands: 'Nynäshamns Ångbryggeri Hamnvik Hefeweizen · Oppigårds Weissbier',
      emoji: '☁️',
      image: '/Hefeweizen.jpg',
    };
  }

  return {
    name: 'Pale Ale',
    style: 'Pale Ale',
    comment: 'Oavsett vad vädret hittar på är en pale ale alltid rätt val.',
    brands: 'Sierra Nevada Pale Ale · Founders All Day IPA',
    swedishBrands: 'Oppigårds Amarillo · Stigbergets Killer Pale',
    emoji: '🍺',
    image: '/PaleAle.jpg',
  };
}
