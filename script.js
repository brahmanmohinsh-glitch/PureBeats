/**
 * PULSE MUSIC PLAYER - CORE ENGINE & INTERACTIVE CONTROLLER
 * Ultra-responsive, Web Audio API powered music streaming engine.
 * Fully integrated with Indian Music API (Bollywood, Haryanvi, Bhojpuri, Punjabi).
 */

(function () {
  'use strict';

  // ==========================================================================
  // SUPERSTAR ARTISTS DISCOGRAPHIES & PRELOADED CATALOGS
  // Full-length 320kbps master studio streams loaded locally
  // ==========================================================================
  const DHANDA_NYOLIWALA_CATALOG = (typeof window !== 'undefined' && window.DHANDA_NYOLIWALA_CATALOG && Array.isArray(window.DHANDA_NYOLIWALA_CATALOG))
    ? window.DHANDA_NYOLIWALA_CATALOG
    : [];

  const ARTIST_CATALOGS = (typeof window !== 'undefined' && window.ARTIST_CATALOGS)
    ? window.ARTIST_CATALOGS
    : {};

  const BOLLYWOOD_SINGERS_CATALOG = (typeof window !== 'undefined' && window.BOLLYWOOD_SINGERS_CATALOG)
    ? window.BOLLYWOOD_SINGERS_CATALOG
    : {};

  const HARYANVI_SINGERS_CATALOG = (typeof window !== 'undefined' && window.HARYANVI_SINGERS_CATALOG)
    ? window.HARYANVI_SINGERS_CATALOG
    : {};

  const PUNJABI_SINGERS_CATALOG = (typeof window !== 'undefined' && window.PUNJABI_SINGERS_CATALOG)
    ? window.PUNJABI_SINGERS_CATALOG
    : {};

  const BHOJPURI_SINGERS_CATALOG = (typeof window !== 'undefined' && window.BHOJPURI_SINGERS_CATALOG)
    ? window.BHOJPURI_SINGERS_CATALOG
    : {};

  const RAP_SINGERS_CATALOG = (typeof window !== 'undefined' && window.RAP_SINGERS_CATALOG)
    ? window.RAP_SINGERS_CATALOG
    : {};

  const NEIGHBOUR_SINGERS_CATALOG = (typeof window !== 'undefined' && window.NEIGHBOUR_SINGERS_CATALOG)
    ? window.NEIGHBOUR_SINGERS_CATALOG
    : {};

  const OLDISGOLD_SINGERS_CATALOG = (typeof window !== 'undefined' && window.OLDISGOLD_SINGERS_CATALOG)
    ? window.OLDISGOLD_SINGERS_CATALOG
    : {};

  const BETTEROG_SINGERS_CATALOG = (typeof window !== 'undefined' && window.BETTEROG_SINGERS_CATALOG)
    ? window.BETTEROG_SINGERS_CATALOG
    : {};

  function getAllBetterOGTracks() {
    const all = [];
    const seen = new Set();
    const addSafe = (t) => {
      if (t && t.id && !seen.has(t.id)) {
        seen.add(t.id);
        all.push(t);
      }
    };
    const bCat = window.BETTEROG_SINGERS_CATALOG || BETTEROG_SINGERS_CATALOG || {};
    Object.values(bCat).forEach(arr => {
      if (Array.isArray(arr)) arr.forEach(addSafe);
    });
    return all;
  }

  function getAllOldIsGoldTracks() {
    const all = [];
    const seen = new Set();
    const addSafe = (t) => {
      if (t && t.id && !seen.has(t.id)) {
        seen.add(t.id);
        all.push(t);
      }
    };
    const oCat = window.OLDISGOLD_SINGERS_CATALOG || OLDISGOLD_SINGERS_CATALOG || {};
    Object.values(oCat).forEach(arr => {
      if (Array.isArray(arr)) arr.forEach(addSafe);
    });
    return all;
  }

  function getAllNeighbourTracks() {
    const all = [];
    const seen = new Set();
    const addSafe = (t) => {
      if (t && t.id && !seen.has(t.id)) {
        seen.add(t.id);
        all.push(t);
      }
    };
    const nCat = window.NEIGHBOUR_SINGERS_CATALOG || NEIGHBOUR_SINGERS_CATALOG || {};
    Object.values(nCat).forEach(arr => {
      if (Array.isArray(arr)) arr.forEach(addSafe);
    });
    return all;
  }

  function getAllBollywoodTracks() {
    const all = [];
    const seen = new Set();
    const addSafe = (t) => {
      if (t && t.id && !seen.has(t.id)) {
        seen.add(t.id);
        all.push(t);
      }
    };
    const bCat = window.BOLLYWOOD_SINGERS_CATALOG || BOLLYWOOD_SINGERS_CATALOG || {};
    Object.values(bCat).forEach(arr => {
      if (Array.isArray(arr)) arr.forEach(addSafe);
    });
    return all;
  }

  function getAllHaryanviTracks() {
    const all = [];
    const seen = new Set();
    const addSafe = (t) => {
      if (t && t.id && !seen.has(t.id)) {
        seen.add(t.id);
        all.push(t);
      }
    };
    const hCat = window.HARYANVI_SINGERS_CATALOG || HARYANVI_SINGERS_CATALOG || {};
    Object.values(hCat).forEach(arr => {
      if (Array.isArray(arr)) arr.forEach(addSafe);
    });
    (DHANDA_NYOLIWALA_CATALOG || []).forEach(addSafe);
    (ARTIST_CATALOGS['Sumit Parta'] || []).forEach(addSafe);
    return all;
  }

  function getAllPunjabiTracks() {
    const all = [];
    const seen = new Set();
    const addSafe = (t) => {
      if (t && t.id && !seen.has(t.id)) {
        seen.add(t.id);
        all.push(t);
      }
    };
    const pCat = window.PUNJABI_SINGERS_CATALOG || PUNJABI_SINGERS_CATALOG || {};
    Object.values(pCat).forEach(arr => {
      if (Array.isArray(arr)) arr.forEach(addSafe);
    });
    if (window.ARTIST_CATALOGS) {
      ['Diljit Dosanjh', 'Sidhu Moose Wala', 'AP Dhillon', 'Shubh'].forEach(k => {
        (window.ARTIST_CATALOGS[k] || []).forEach(addSafe);
      });
    }
    return all;
  }

  function getAllBhojpuriTracks() {
    const all = [];
    const seen = new Set();
    const addSafe = (t) => {
      if (t && t.id && !seen.has(t.id)) {
        seen.add(t.id);
        all.push(t);
      }
    };
    const bCat = window.BHOJPURI_SINGERS_CATALOG || BHOJPURI_SINGERS_CATALOG || {};
    Object.values(bCat).forEach(arr => {
      if (Array.isArray(arr)) arr.forEach(addSafe);
    });
    return all;
  }

  function getAllRapTracks() {
    const all = [];
    const seen = new Set();
    const addSafe = (t) => {
      if (t && t.id && !seen.has(t.id)) {
        seen.add(t.id);
        all.push(t);
      }
    };
    const rCat = window.RAP_SINGERS_CATALOG || RAP_SINGERS_CATALOG || {};
    Object.values(rCat).forEach(arr => {
      if (Array.isArray(arr)) arr.forEach(addSafe);
    });
    return all;
  }

  function getArtistTracks(name) {
    if (!name) return [];
    const n = name.trim().toLowerCase();
    if (n.includes('dhanda') || n.includes('nyoliwala')) {
      const hCat = window.HARYANVI_SINGERS_CATALOG || HARYANVI_SINGERS_CATALOG || {};
      return (hCat['Dhanda Nyoliwala'] && hCat['Dhanda Nyoliwala'].length > 0) ? hCat['Dhanda Nyoliwala'] : DHANDA_NYOLIWALA_CATALOG;
    }
    if (n.includes('sumit') || n.includes('parta')) return ARTIST_CATALOGS['Sumit Parta'] || [];
    if (n.includes('honey') || n.includes('yo yo')) {
      const rCat = window.RAP_SINGERS_CATALOG || RAP_SINGERS_CATALOG || {};
      return (rCat['Yo Yo Honey Singh'] && rCat['Yo Yo Honey Singh'].length > 0) ? rCat['Yo Yo Honey Singh'] : (ARTIST_CATALOGS['Honey Singh'] || []);
    }
    if (n.includes('dhillon')) return ARTIST_CATALOGS['AP Dhillon'] || [];
    if (n.includes('shubh')) return ARTIST_CATALOGS['Shubh'] || [];
    if (n.includes('anuv') || n.includes('anu jain')) return ARTIST_CATALOGS['Anuv Jain'] || [];

    // Punjabi Singers Subfields (Top 25 Songs Each)
    const punjabiCat = window.PUNJABI_SINGERS_CATALOG || PUNJABI_SINGERS_CATALOG || {};
    if (n === 'punjabi' || n === 'all-punjabi' || n.includes('all punjabi') || n.includes('punjabi swag')) {
      const allPunjabi = getAllPunjabiTracks();
      return allPunjabi.length > 0 ? allPunjabi : (punjabiCat['Sidhu Moose Wala'] || []);
    }
    if (n.includes('sidhu') || n.includes('moose')) {
      return (punjabiCat['Sidhu Moose Wala'] && punjabiCat['Sidhu Moose Wala'].length > 0) ? punjabiCat['Sidhu Moose Wala'] : (ARTIST_CATALOGS['Sidhu Moose Wala'] || []);
    }
    if (n.includes('guru') || n.includes('randhawa')) return punjabiCat['Guru Randhawa'] || [];
    if (n.includes('diljit')) {
      return (punjabiCat['Diljit Dosanjh'] && punjabiCat['Diljit Dosanjh'].length > 0) ? punjabiCat['Diljit Dosanjh'] : (ARTIST_CATALOGS['Diljit Dosanjh'] || []);
    }
    if (n.includes('karan') || n.includes('aujla')) return punjabiCat['Karan Aujla'] || [];
    if (n.includes('praak') || n === 'b praak') return punjabiCat['B Praak'] || [];
    if (n.includes('gurlez') || n.includes('akhtar') || n.includes('gurlej')) return punjabiCat['Gurlez Akhtar'] || [];
    if (n.includes('jass') || n.includes('manak')) return punjabiCat['Jass Manak'] || [];
    if (n.includes('jasmine') || n.includes('sandlas') || n.includes('sandles')) return punjabiCat['Jasmine Sandlas'] || [];
    if (n.includes('parmish') || n.includes('verma')) return punjabiCat['Parmish Verma'] || [];
    if (n === 'kaka' || n.includes('kaka')) return punjabiCat['Kaka'] || [];
    if (n.includes('millind') || n.includes('miling') || n.includes('gaba') || n.includes('gaga')) return punjabiCat['Millind Gaba'] || [];
    if (n.includes('harrdy') || n.includes('hardy') || n.includes('sandhu') || n.includes('sindhu')) return punjabiCat['Harrdy Sandhu'] || [];

    // Haryanvi Singers Subfields (Top 30 Songs Each)
    const haryanviCat = window.HARYANVI_SINGERS_CATALOG || HARYANVI_SINGERS_CATALOG || {};
    if (n === 'haryanvi' || n === 'all-haryanvi' || n.includes('all haryanvi') || n.includes('haryanvi beats')) {
      const allHaryanvi = getAllHaryanviTracks();
      return allHaryanvi.length > 0 ? allHaryanvi : (haryanviCat['Dhanda Nyoliwala'] || []);
    }
    if (n.includes('masoom') || n.includes('masoon')) return haryanviCat['Masoom Sharma'] || [];
    if (n.includes('amit saini') || n.includes('rohtakiya')) return haryanviCat['Amit Saini Rohtakiya'] || [];
    if (n.includes('gulzaar') || n.includes('gulzar') || n.includes('chhaniwala') || n.includes('channiwala')) return haryanviCat['Gulzaar Chhaniwala'] || [];
    if (n.includes('kd ') || n.includes('desi rock') || n === 'kd') return haryanviCat['KD Desi Rock'] || [];
    if (n.includes('amanraj') || n.includes('aman raj') || n.includes('gill')) return haryanviCat['Amanraj Gill'] || [];
    if (n.includes('surender') || n.includes('surendra') || n.includes('romio')) return haryanviCat['Surender Romio'] || [];
    if (n.includes('khasa') || n.includes('chahar') || n.includes('khasa ala char')) return haryanviCat['Khasa Aala Chahar'] || [];
    if (n.includes('swara') || n.includes('verma')) return haryanviCat['Swara Verma'] || [];
    if (n.includes('renuka') || n.includes('panwar') || n.includes('pawar')) return haryanviCat['Renuka Panwar'] || [];

    // Bollywood Singers subfields
    const bollyCat = window.BOLLYWOOD_SINGERS_CATALOG || BOLLYWOOD_SINGERS_CATALOG || {};
    if (n === 'bollywood' || n === 'all-bollywood' || n.includes('all bollywood')) {
      const allBolly = getAllBollywoodTracks();
      return allBolly.length > 0 ? allBolly : TRACK_CATALOG;
    }
    if (n.includes('arijit')) return bollyCat['Arijit Singh'] || [];
    if (n.includes('atif')) return bollyCat['Atif Aslam'] || [];
    if (n.includes('alka') || n.includes('yagnik')) return bollyCat['Alka Yagnik'] || [];
    if (n.includes('shreya') || n.includes('ghoshal') || n.includes('ghosal')) return bollyCat['Shreya Ghoshal'] || [];
    if (n.includes('udit') || n.includes('narayan')) return bollyCat['Udit Narayan'] || [];
    if (n.includes('sonu') || n.includes('nigam')) return bollyCat['Sonu Nigam'] || [];
    if (n.includes('dadlani') || n.includes('vishal dadlani')) return bollyCat['Vishal Dadlani'] || [];
    if (n.includes('sunidhi') || n.includes('chauhan')) return bollyCat['Sunidhi Chauhan'] || [];
    if (n.includes('armaan') || n.includes('malik')) return bollyCat['Armaan Malik'] || [];
    if (n.includes('vishal mishra') || (n.includes('mishra') && !n.includes('dadlani'))) return bollyCat['Vishal Mishra'] || [];
    if (n.includes('jubin') || n.includes('nautiyal')) return bollyCat['Jubin Nautiyal'] || [];
    if (n.includes('ankit') || (n.includes('tiwari') && !n.includes('manoj'))) return bollyCat['Ankit Tiwari'] || [];
    if (n.includes('palak') || n.includes('mucchal') || n.includes('muchhal')) return bollyCat['Palak Muchhal'] || [];
    if (n === 'kk' || n.includes(' kk') || n.startsWith('kk') || n.includes('krishnakumar')) return bollyCat['KK'] || [];

    // Bhojpuri Singers Subfields (Top 21 Songs Each)
    const bhojpuriCat = window.BHOJPURI_SINGERS_CATALOG || BHOJPURI_SINGERS_CATALOG || {};
    if (n === 'bhojpuri' || n === 'all-bhojpuri' || n.includes('all bhojpuri') || n.includes('bhojpuri dhamaka')) {
      const allBhojpuri = getAllBhojpuriTracks();
      return allBhojpuri.length > 0 ? allBhojpuri : (bhojpuriCat['Pawan Singh'] || []);
    }
    if (n.includes('pawan')) return bhojpuriCat['Pawan Singh'] || [];
    if (n.includes('khesari') || n.includes('khesarilal')) return bhojpuriCat['Khesari Lal Yadav'] || [];
    if (n.includes('shilpi') || n.includes('silpi')) return bhojpuriCat['Shilpi Raj'] || [];
    if (n.includes('neelkamal')) return bhojpuriCat['Neelkamal Singh'] || [];
    if (n.includes('purav') || n.includes('purav jha')) return bhojpuriCat['Purav Jha'] || [];
    if (n.includes('ritesh') || n.includes('pandey')) return bhojpuriCat['Ritesh Pandey'] || [];
    if (n.includes('manoj') || (n.includes('tiwari') && !n.includes('ankit'))) return bhojpuriCat['Manoj Tiwari'] || [];
    if (n.includes('kallu') || n.includes('arvind akela') || n.includes('arvind')) return bhojpuriCat['Arvind Akela Kallu'] || [];
    if (n.includes('samar')) return bhojpuriCat['Samar Singh'] || [];
    if (n.includes('dinesh lal') || n.includes('dinesh') || n.includes('nirahua')) return bhojpuriCat['Dinesh Lal Yadav'] || [];
    if (n.includes('ankush') || n.includes('raja')) return bhojpuriCat['Ankush Raja'] || [];

    // Desi Hip-Hop / Rap Singers Subfields (Top 31 Songs Each)
    const rapCat = window.RAP_SINGERS_CATALOG || RAP_SINGERS_CATALOG || {};
    if (n === 'rap' || n === 'all-rap' || n.includes('all rap') || n.includes('desi hip-hop') || n.includes('hip hop') || n.includes('hip-hop')) {
      const allRap = getAllRapTracks();
      return allRap.length > 0 ? allRap : (rapCat['DIVINE'] || []);
    }
    if (n.includes('divine')) return rapCat['DIVINE'] || [];
    if (n.includes('ikka')) return rapCat['Ikka'] || [];
    if (n.includes('kr$na') || n.includes('krsna') || n.includes('krishna')) return rapCat['KR$NA'] || [];
    if (n.includes('seedhe maut') || n.includes('seedhe') || n.includes('maut')) return rapCat['Seedhe Maut'] || [];
    if (n.includes('hanumankind') || n.includes('hanuman') || n.includes('hanumman')) return rapCat['Hanumankind'] || [];
    if (n.includes('emiway') || n.includes('bantai')) return rapCat['Emiway Bantai'] || [];
    if (n.includes('raftaar')) return rapCat['Raftaar'] || [];
    if (n.includes('badshah') || n.includes('baadshah')) return rapCat['Badshah'] || [];
    if (n.includes('mc stan') || n.includes('stan')) return rapCat['MC Stan'] || [];
    if (n.includes('dino') || n.includes('dino james')) return rapCat['Dino James'] || [];
    if (n.includes('bohemia') || n.includes('bohamia')) return rapCat['Bohemia'] || [];
    if (n === 'bali' || n.includes('bali')) return rapCat['Bali'] || [];

    // Neighbour Melodies Subfields (Top Tracks Each)
    const neighCat = window.NEIGHBOUR_SINGERS_CATALOG || NEIGHBOUR_SINGERS_CATALOG || {};
    if (n === 'neighbour' || n === 'all-neighbour' || n.includes('all neighbour') || n.includes('neighbour melodies') || n.includes('pakistani')) {
      const allNeigh = getAllNeighbourTracks();
      return allNeigh.length > 0 ? allNeigh : (neighCat['AUR'] || []);
    }
    if (n === 'aur' || n.includes('aur')) return neighCat['AUR'] || [];
    if (n.includes('hannan') || n.includes('hannah')) return neighCat['Abdul Hannan'] || [];
    if (n.includes('kaifi') || n.includes('khalil') || n.includes('khalid')) return neighCat['Kaifi Khalil'] || [];
    if (n.includes('talha') || n.includes('anjum')) return neighCat['Talha Anjum'] || [];
    if (n.includes('rahat')) return neighCat['Rahat Fateh Ali Khan'] || [];
    if (n.includes('nusrat')) return neighCat['Nusrat Fateh Ali Khan'] || [];
    if (n.includes('mustafa') || n.includes('zahid') || n.includes('jahid')) return neighCat['Mustafa Zahid'] || [];
    if (n.includes('afusic')) return neighCat['Afusic'] || [];
    if (n.includes('asim') || n.includes('amin azhar')) return neighCat['Asim Azhar'] || [];

    // Old is Gold Vintage Classics Subfields (Top 40 Songs Each)
    const oldCat = window.OLDISGOLD_SINGERS_CATALOG || OLDISGOLD_SINGERS_CATALOG || {};
    if (n === 'old is gold' || n === 'all-oldisgold' || n === 'oldisgold' || n.includes('all old is gold') || n.includes('old is gold') || n.includes('vintage')) {
      const allOld = getAllOldIsGoldTracks();
      return allOld.length > 0 ? allOld : (oldCat['Kishore Kumar'] || []);
    }
    if (n.includes('kishore')) return oldCat['Kishore Kumar'] || [];
    if (n.includes('mukesh')) return oldCat['Mukesh'] || [];
    if (n.includes('manna') || (n.includes('dey') && !n.includes('pandey'))) return oldCat['Manna Dey'] || [];
    if (n.includes('rafi') || n.includes('mohammad rafi') || n.includes('mohd rafi')) return oldCat['Mohammad Rafi'] || [];
    if (n.includes('talat') || n.includes('talat mohammad') || n.includes('talat mahmood')) return oldCat['Talat Mahmood'] || [];
    if (n.includes('hemant')) return oldCat['Hemant Kumar'] || [];
    if (n.includes('bhupinder')) return oldCat['Bhupinder Singh'] || [];
    if (n.includes('shamshad') || n.includes('shamsad')) return oldCat['Shamshad Begum'] || [];
    if (n.includes('mahendra')) return oldCat['Mahendra Kapoor'] || [];
    if (n.includes('asha') || n.includes('bhosle')) return oldCat['Asha Bhosle'] || [];
    if (n.includes('geeta') || (n.includes('dutt') && !n.includes('sanjay'))) return oldCat['Geeta Dutt'] || [];
    if (n.includes('usha')) return oldCat['Usha Mangeshkar'] || [];
    if (n.includes('lata')) return oldCat['Lata Mangeshkar'] || [];

    // Better OG Legends Subfields (Top 35 Songs Each)
    const betterCat = window.BETTEROG_SINGERS_CATALOG || BETTEROG_SINGERS_CATALOG || {};
    if (n === 'better og' || n === 'all-betterog' || n === 'betterog' || n.includes('all better og') || n.includes('better og') || n.includes('og legends')) {
      const allBetter = getAllBetterOGTracks();
      return allBetter.length > 0 ? allBetter : (betterCat['Shankar Mahadevan'] || []);
    }
    if (n.includes('shankar') || n.includes('mahadevan') || n.includes('sankar')) return betterCat['Shankar Mahadevan'] || [];
    if (n.includes('kailash') || n.includes('kher')) return betterCat['Kailash Kher'] || [];
    if (n.includes('hariharan')) return betterCat['Hariharan'] || [];
    if (n.includes('rahman') || n.includes('rehman') || n === 'ar rahman' || n.includes('a.r')) return betterCat['A.R. Rahman'] || [];
    if (n.includes('sukhwinder')) return betterCat['Sukhwinder Singh'] || [];

    return [];
  }

  const BETTEROG_SINGER_NAMES = [
    'Shankar Mahadevan', 'Kailash Kher', 'Hariharan', 'Mohammad Rafi', 'A.R. Rahman', 'Sukhwinder Singh'
  ];

  function isBetterOGSinger(name) {
    if (!name) return false;
    const lower = name.toLowerCase();
    return BETTEROG_SINGER_NAMES.some(s => lower.includes(s.toLowerCase()) || s.toLowerCase().includes(lower))
      || lower.includes('shankar') || lower.includes('sankar') || lower.includes('mahadevan')
      || lower.includes('kailash') || lower.includes('hariharan') || lower.includes('rahman')
      || lower.includes('rehman') || lower.includes('sukhwinder') || lower.includes('better og');
  }

  const OLDISGOLD_SINGER_NAMES = [
    'Kishore Kumar', 'Mukesh', 'Manna Dey', 'Mohammad Rafi', 'Talat Mahmood',
    'Hemant Kumar', 'Bhupinder Singh', 'Shamshad Begum', 'Mahendra Kapoor',
    'Asha Bhosle', 'Alka Yagnik', 'Geeta Dutt', 'Usha Mangeshkar', 'Lata Mangeshkar'
  ];

  function isOldIsGoldSinger(name) {
    if (!name) return false;
    const lower = name.toLowerCase();
    return OLDISGOLD_SINGER_NAMES.some(s => lower.includes(s.toLowerCase()) || s.toLowerCase().includes(lower))
      || lower.includes('kishore') || lower.includes('mukesh') || lower.includes('manna')
      || lower.includes('rafi') || lower.includes('talat') || lower.includes('hemant')
      || lower.includes('bhupinder') || lower.includes('shamshad') || lower.includes('shamsad')
      || lower.includes('mahendra') || lower.includes('geeta dutt') || lower.includes('usha mangeshkar')
      || lower.includes('lata mangeshkar') || lower.includes('old is gold') || lower.includes('vintage');
  }

  const NEIGHBOUR_SINGER_NAMES = [
    'AUR', 'Abdul Hannan', 'Bohemia', 'Kaifi Khalil', 'Talha Anjum',
    'Rahat Fateh Ali Khan', 'Nusrat Fateh Ali Khan', 'Mustafa Zahid',
    'Afusic', 'Asim Azhar'
  ];

  function isNeighbourSinger(name) {
    if (!name) return false;
    const lower = name.toLowerCase();
    return NEIGHBOUR_SINGER_NAMES.some(s => lower.includes(s.toLowerCase()) || s.toLowerCase().includes(lower))
      || lower.includes('hannah') || lower.includes('khalid') || lower.includes('jahid')
      || lower.includes('amin azhar') || lower.includes('talha') || lower.includes('rahat')
      || lower.includes('nusrat') || lower.includes('afusic') || lower.includes('kaifi');
  }

  const BOLLYWOOD_SINGER_NAMES = [
    'Arijit Singh', 'Atif Aslam', 'Alka Yagnik', 'Shreya Ghoshal',
    'Udit Narayan', 'Sonu Nigam', 'Vishal Dadlani', 'Sunidhi Chauhan',
    'Armaan Malik', 'Vishal Mishra', 'Jubin Nautiyal', 'Ankit Tiwari',
    'Palak Muchhal', 'KK'
  ];

  function isBollywoodSinger(name) {
    if (!name) return false;
    const lower = name.toLowerCase();
    return BOLLYWOOD_SINGER_NAMES.some(s => lower.includes(s.toLowerCase()) || s.toLowerCase().includes(lower));
  }

  const HARYANVI_SINGER_NAMES = [
    'Masoom Sharma', 'Dhanda Nyoliwala', 'Amit Saini Rohtakiya',
    'Gulzaar Chhaniwala', 'KD Desi Rock', 'Amanraj Gill',
    'Surender Romio', 'Khasa Aala Chahar', 'Swara Verma', 'Renuka Panwar'
  ];

  function isHaryanviSinger(name) {
    if (!name) return false;
    const lower = name.toLowerCase();
    return HARYANVI_SINGER_NAMES.some(s => lower.includes(s.toLowerCase()) || s.toLowerCase().includes(lower));
  }

  const PUNJABI_SINGER_NAMES = [
    'Sidhu Moose Wala', 'Guru Randhawa', 'Diljit Dosanjh', 'Karan Aujla',
    'B Praak', 'Gurlez Akhtar', 'Jass Manak', 'Jasmine Sandlas',
    'Parmish Verma', 'Kaka', 'Millind Gaba', 'Harrdy Sandhu'
  ];

  function isPunjabiSinger(name) {
    if (!name) return false;
    const lower = name.toLowerCase();
    return PUNJABI_SINGER_NAMES.some(s => lower.includes(s.toLowerCase()) || s.toLowerCase().includes(lower));
  }

  const BHOJPURI_SINGER_NAMES = [
    'Pawan Singh', 'Khesari Lal Yadav', 'Shilpi Raj', 'Neelkamal Singh',
    'Purav Jha', 'Ritesh Pandey', 'Manoj Tiwari', 'Arvind Akela Kallu',
    'Samar Singh', 'Dinesh Lal Yadav', 'Ankush Raja'
  ];

  function isBhojpuriSinger(name) {
    if (!name) return false;
    const lower = name.toLowerCase();
    return BHOJPURI_SINGER_NAMES.some(s => lower.includes(s.toLowerCase()) || s.toLowerCase().includes(lower))
      || lower.includes('silpi') || lower.includes('khesarilal') || lower.includes('nirahua');
  }

  const RAP_SINGER_NAMES = [
    'DIVINE', 'Ikka', 'KR$NA', 'Seedhe Maut', 'Hanumankind',
    'Emiway Bantai', 'Raftaar', 'Badshah', 'Yo Yo Honey Singh',
    'MC Stan', 'Dino James', 'Bohemia', 'Bali'
  ];

  function isRapSinger(name) {
    if (!name) return false;
    const lower = name.toLowerCase();
    return RAP_SINGER_NAMES.some(s => lower.includes(s.toLowerCase()) || s.toLowerCase().includes(lower))
      || lower.includes('krsna') || lower.includes('krishna') || lower.includes('hanuman')
      || lower.includes('baadshah') || lower.includes('bohamia') || lower.includes('bantai')
      || lower.includes('seedhe');
  }

  function getAllPreloadedTracks() {
    const all = [];
    const seen = new Set();
    const addSafe = (t) => {
      if (t && t.id && !seen.has(t.id)) {
        seen.add(t.id);
        all.push(t);
      }
    };
    (DHANDA_NYOLIWALA_CATALOG || []).forEach(addSafe);
    if (window.ARTIST_CATALOGS) {
      Object.values(window.ARTIST_CATALOGS).forEach(arr => {
        if (Array.isArray(arr)) arr.forEach(addSafe);
      });
    }
    if (window.BOLLYWOOD_SINGERS_CATALOG) {
      Object.values(window.BOLLYWOOD_SINGERS_CATALOG).forEach(arr => {
        if (Array.isArray(arr)) arr.forEach(addSafe);
      });
    }
    if (window.HARYANVI_SINGERS_CATALOG) {
      Object.values(window.HARYANVI_SINGERS_CATALOG).forEach(arr => {
        if (Array.isArray(arr)) arr.forEach(addSafe);
      });
    }
    if (window.PUNJABI_SINGERS_CATALOG) {
      Object.values(window.PUNJABI_SINGERS_CATALOG).forEach(arr => {
        if (Array.isArray(arr)) arr.forEach(addSafe);
      });
    }
    if (window.BHOJPURI_SINGERS_CATALOG) {
      Object.values(window.BHOJPURI_SINGERS_CATALOG).forEach(arr => {
        if (Array.isArray(arr)) arr.forEach(addSafe);
      });
    }
    if (window.RAP_SINGERS_CATALOG) {
      Object.values(window.RAP_SINGERS_CATALOG).forEach(arr => {
        if (Array.isArray(arr)) arr.forEach(addSafe);
      });
    }
    if (window.NEIGHBOUR_SINGERS_CATALOG) {
      Object.values(window.NEIGHBOUR_SINGERS_CATALOG).forEach(arr => {
        if (Array.isArray(arr)) arr.forEach(addSafe);
      });
    }
    if (window.OLDISGOLD_SINGERS_CATALOG) {
      Object.values(window.OLDISGOLD_SINGERS_CATALOG).forEach(arr => {
        if (Array.isArray(arr)) arr.forEach(addSafe);
      });
    }
    if (window.BETTEROG_SINGERS_CATALOG) {
      Object.values(window.BETTEROG_SINGERS_CATALOG).forEach(arr => {
        if (Array.isArray(arr)) arr.forEach(addSafe);
      });
    }
    TRACK_CATALOG.forEach(addSafe);
    return all;
  }

  function buildInitialTracks() {
    const list = [];
    const seen = new Set();
    const addSafe = (t) => {
      if (t && t.id && !seen.has(t.id)) {
        seen.add(t.id);
        list.push(t);
      }
    };

    (DHANDA_NYOLIWALA_CATALOG || []).slice(0, 5).forEach(addSafe);
    (ARTIST_CATALOGS['Sumit Parta'] || []).slice(0, 4).forEach(addSafe);
    (ARTIST_CATALOGS['Diljit Dosanjh'] || []).slice(0, 4).forEach(addSafe);
    (ARTIST_CATALOGS['Honey Singh'] || []).slice(0, 4).forEach(addSafe);
    (ARTIST_CATALOGS['Sidhu Moose Wala'] || []).slice(0, 4).forEach(addSafe);
    (ARTIST_CATALOGS['AP Dhillon'] || []).slice(0, 3).forEach(addSafe);
    (ARTIST_CATALOGS['Shubh'] || []).slice(0, 3).forEach(addSafe);
    (ARTIST_CATALOGS['Anuv Jain'] || []).slice(0, 3).forEach(addSafe);

    // Top hits from Desi Hip-Hop / Rap superstars
    const rapCatInit = window.RAP_SINGERS_CATALOG || RAP_SINGERS_CATALOG || {};
    ['DIVINE', 'KR$NA', 'Seedhe Maut', 'Hanumankind', 'Raftaar', 'Emiway Bantai', 'Badshah', 'MC Stan', 'Dino James', 'Bohemia', 'Ikka', 'Bali'].forEach(singer => {
      (rapCatInit[singer] || []).slice(0, 2).forEach(addSafe);
    });

    // Top hits from Bhojpuri superstars
    const bhojpuriCatInit = window.BHOJPURI_SINGERS_CATALOG || BHOJPURI_SINGERS_CATALOG || {};
    ['Pawan Singh', 'Khesari Lal Yadav', 'Shilpi Raj', 'Manoj Tiwari', 'Ritesh Pandey', 'Neelkamal Singh', 'Arvind Akela Kallu', 'Dinesh Lal Yadav', 'Samar Singh', 'Ankush Raja', 'Purav Jha'].forEach(singer => {
      (bhojpuriCatInit[singer] || []).slice(0, 2).forEach(addSafe);
    });

    // Top hits from Punjabi superstars
    const punjabiCatInit = window.PUNJABI_SINGERS_CATALOG || PUNJABI_SINGERS_CATALOG || {};
    ['Karan Aujla', 'Guru Randhawa', 'B Praak', 'Harrdy Sandhu', 'Jass Manak', 'Kaka', 'Jasmine Sandlas', 'Parmish Verma', 'Millind Gaba', 'Gurlez Akhtar'].forEach(singer => {
      (punjabiCatInit[singer] || []).slice(0, 2).forEach(addSafe);
    });

    // Top hits from Haryanvi superstars
    const haryanviCatInit = window.HARYANVI_SINGERS_CATALOG || HARYANVI_SINGERS_CATALOG || {};
    ['Masoom Sharma', 'Gulzaar Chhaniwala', 'Renuka Panwar', 'KD Desi Rock', 'Amit Saini Rohtakiya', 'Khasa Aala Chahar', 'Surender Romio', 'Amanraj Gill', 'Swara Verma'].forEach(singer => {
      (haryanviCatInit[singer] || []).slice(0, 2).forEach(addSafe);
    });

    // Top hits from Bollywood singers
    const bollyCat = window.BOLLYWOOD_SINGERS_CATALOG || BOLLYWOOD_SINGERS_CATALOG || {};
    ['Arijit Singh', 'KK', 'Atif Aslam', 'Shreya Ghoshal', 'Sonu Nigam', 'Alka Yagnik', 'Udit Narayan', 'Sunidhi Chauhan', 'Jubin Nautiyal', 'Armaan Malik', 'Vishal Mishra', 'Ankit Tiwari', 'Palak Muchhal', 'Vishal Dadlani'].forEach(singer => {
      (bollyCat[singer] || []).slice(0, 2).forEach(addSafe);
    });

    // Top hits from Neighbour Melodies superstars
    const neighCatInit = window.NEIGHBOUR_SINGERS_CATALOG || NEIGHBOUR_SINGERS_CATALOG || {};
    ['AUR', 'Abdul Hannan', 'Kaifi Khalil', 'Talha Anjum', 'Rahat Fateh Ali Khan', 'Nusrat Fateh Ali Khan', 'Asim Azhar', 'Mustafa Zahid', 'Afusic'].forEach(singer => {
      (neighCatInit[singer] || []).slice(0, 2).forEach(addSafe);
    });

    // Top hits from Old is Gold Golden Era superstars
    const oldCatInit = window.OLDISGOLD_SINGERS_CATALOG || OLDISGOLD_SINGERS_CATALOG || {};
    ['Kishore Kumar', 'Mohammad Rafi', 'Mukesh', 'Lata Mangeshkar', 'Asha Bhosle', 'Manna Dey', 'Talat Mahmood', 'Hemant Kumar'].forEach(singer => {
      (oldCatInit[singer] || []).slice(0, 2).forEach(addSafe);
    });

    // Top hits from Better OG Legends
    const betterCatInit = window.BETTEROG_SINGERS_CATALOG || BETTEROG_SINGERS_CATALOG || {};
    ['Shankar Mahadevan', 'A.R. Rahman', 'Kailash Kher', 'Sukhwinder Singh', 'Hariharan', 'Mohammad Rafi'].forEach(singer => {
      (betterCatInit[singer] || []).slice(0, 2).forEach(addSafe);
    });

    TRACK_CATALOG.forEach(addSafe);
    return list.length > 0 ? list : [...TRACK_CATALOG];
  }

  // ==========================================================================
  // CURATED INDIAN HIT TRACK CATALOG (BOLLYWOOD, HARYANVI, BHOJPURI, PUNJABI)
  // All tracks use verified, high-speed CDN audio streams with real vocals & beats.
  // ==========================================================================
  const TRACK_CATALOG = [
    {
        "id": "full-tujhe",
        "title": "Tujhe Kitna Chahne Lage",
        "artist": "Arijit Singh",
        "album": "Kabir Singh",
        "genre": "Bollywood",
        "language": "Bollywood",
        "plays": "14.8M",
        "duration": "4:44",
        "durationSec": 284,
        "cover": "https://c.saavncdn.com/807/Tujhe-Kitna-Chahne-Lage-From-Kabir-Singh--Hindi-2019-20190531120015-500x500.jpg",
        "src": "https://aac.saavncdn.com/807/bda6cd88c18ee0d75854146145922bcc_320.mp4",
        "lyrics": [
            {
                "time": 0,
                "text": "♪ Dil ka dariya beh hi gaya ♪"
            },
            {
                "time": 10,
                "text": "Ishq ibadat ban hi gaya"
            },
            {
                "time": 18,
                "text": "Khud ko mujhe tu sonp de"
            },
            {
                "time": 27,
                "text": "Meri zaroorat tu ban gaya"
            },
            {
                "time": 38,
                "text": "Baat dil ki nazron ne ki"
            },
            {
                "time": 50,
                "text": "Sach keh raha teri kasam"
            },
            {
                "time": 65,
                "text": "Tere bin ab na lenge ek bhi dam"
            },
            {
                "time": 82,
                "text": "Tujhe kitna chahne lage hum..."
            }
        ]
    },
    {
        "id": "full-apna",
        "title": "Apna Bana Le",
        "artist": "Arijit Singh & Sachin-Jigar",
        "album": "Bhediya",
        "genre": "Bollywood",
        "language": "Bollywood",
        "plays": "18.2M",
        "duration": "4:21",
        "durationSec": 261,
        "cover": "https://c.saavncdn.com/815/Bhediya-Hindi-2022-20221107141005-500x500.jpg",
        "src": "https://aac.saavncdn.com/815/483a6e118e8108cbb3e5cd8701674f32_320.mp4",
        "lyrics": [
            {
                "time": 0,
                "text": "♪ Tu mera koi na hoke bhi kuch laage ♪"
            },
            {
                "time": 12,
                "text": "Kiya re jo bhi toone kaise kiya re"
            },
            {
                "time": 24,
                "text": "Jiya ko mere baandh aise liya re"
            },
            {
                "time": 38,
                "text": "Samajh na aaye nain ye mere kahan bhage"
            },
            {
                "time": 55,
                "text": "Apna bana le piya, apna bana le piya"
            },
            {
                "time": 72,
                "text": "Dil ke nagar mein shehar tu basa le piya"
            }
        ]
    },
    {
        "id": "full-yaar",
        "title": "Tera Yaar Hoon Main",
        "artist": "Arijit Singh",
        "album": "Sonu Ke Titu Ki Sweety",
        "genre": "Bollywood",
        "language": "Bollywood",
        "plays": "16.5M",
        "duration": "4:24",
        "durationSec": 264,
        "cover": "https://c.saavncdn.com/074/Sonu-Ke-Titu-Ki-Sweety-Hindi-2018-20180214-500x500.jpg",
        "src": "https://aac.saavncdn.com/074/1f7370aa302c7fec4d6b2bec451abbae_320.mp4",
        "lyrics": [
            {
                "time": 0,
                "text": "♪ Tu jo rootha toh kaun hansega ♪"
            },
            {
                "time": 14,
                "text": "Tu jo chhoota toh kaun rahega"
            },
            {
                "time": 26,
                "text": "Tu chup hai toh ye darr lagta hai"
            },
            {
                "time": 42,
                "text": "Apna mujhko ab kaun kahega"
            },
            {
                "time": 60,
                "text": "Tere bina bewajah bekar hoon main"
            },
            {
                "time": 75,
                "text": "Tera yaar hoon main, tera yaar hoon main..."
            }
        ]
    },
    {
        "id": "full-hawayein",
        "title": "Hawayein",
        "artist": "Pritam & Arijit Singh",
        "album": "Jab Harry Met Sejal",
        "genre": "Bollywood",
        "language": "Bollywood",
        "plays": "12.9M",
        "duration": "4:49",
        "durationSec": 289,
        "cover": "https://c.saavncdn.com/423/Jab-Harry-Met-Sejal-Hindi-2017-20170803155355-500x500.jpg",
        "src": "https://aac.saavncdn.com/423/6aea1a20329cc974b77f9bef13a37f64_320.mp4",
        "lyrics": [
            {
                "time": 0,
                "text": "♪ Tujhko main rakh loon wahan ♪"
            },
            {
                "time": 14,
                "text": "Jahan pe kahin hai mera yaqeen"
            },
            {
                "time": 28,
                "text": "Main jo tera na hua kisi ka nahi"
            },
            {
                "time": 46,
                "text": "Hawayein... Hawayein... le jayein tujhe kahan"
            },
            {
                "time": 68,
                "text": "Chhu ke tujhe udti hain jahan jahan hawayein"
            }
        ]
    },
    {
        "id": "full-52gaj",
        "title": "52 Gaj Ka Daman",
        "artist": "Renuka Panwar & MJ",
        "album": "52 Gaj Ka Daman",
        "genre": "Haryanvi",
        "language": "Haryanvi",
        "plays": "24.1M",
        "duration": "2:43",
        "durationSec": 163,
        "cover": "https://c.saavncdn.com/407/52-Gaj-Ka-Daman-Haryanvi-2020-20201007054942-500x500.jpg",
        "src": "https://aac.saavncdn.com/407/d8b1de34b18920d7715033dbf8c93f47_320.mp4",
        "lyrics": [
            {
                "time": 0,
                "text": "♪ Aapan pehan ke 52 gaj ka daman matak chalungi ♪"
            },
            {
                "time": 12,
                "text": "Ghoonghat ki oat mein saara gaam dekhega"
            },
            {
                "time": 25,
                "text": "Jhumke jhanjhar chhan chhan karke baje re"
            },
            {
                "time": 40,
                "text": "52 gaj ka daman pehan matak chalungi"
            },
            {
                "time": 60,
                "text": "Desi look mein poora Haryana fida hoga!"
            }
        ]
    },
    {
        "id": "full-kabootar",
        "title": "Kabootar",
        "artist": "Renuka Panwar & Surender Romio",
        "album": "Kabootar",
        "genre": "Haryanvi",
        "language": "Haryanvi",
        "plays": "11.4M",
        "duration": "3:40",
        "durationSec": 220,
        "cover": "https://c.saavncdn.com/108/Kabootar-Haryanvi-2021-20211005121921-500x500.jpg",
        "src": "https://aac.saavncdn.com/108/0fd24917a34a1a7cc7f7cd4c6bc40da7_320.mp4",
        "lyrics": [
            {
                "time": 0,
                "text": "♪ Chhat pe baitha kabootar ghutar ghutar bole ♪"
            },
            {
                "time": 15,
                "text": "Teri yaad mein jora ye man dole"
            },
            {
                "time": 32,
                "text": "Mithi mithi batiyan kar le na raja"
            },
            {
                "time": 52,
                "text": "Desi andaz mein nach le saara Haryana!"
            }
        ]
    },
    {
        "id": "full-chatak",
        "title": "Chatak Matak",
        "artist": "Renuka Panwar",
        "album": "Chatak Matak",
        "genre": "Haryanvi",
        "language": "Haryanvi",
        "plays": "9.8M",
        "duration": "2:17",
        "durationSec": 137,
        "cover": "https://c.saavncdn.com/001/Chatak-Matak-Haryanvi-2020-20201219080007-500x500.jpg",
        "src": "https://aac.saavncdn.com/001/28c52a2e0fe96875454465473bd61738_320.mp4",
        "lyrics": [
            {
                "time": 0,
                "text": "♪ Chatak matak ke chale gori rani ♪"
            },
            {
                "time": 14,
                "text": "Kare aisi baat jaise ganga ka paani"
            },
            {
                "time": 30,
                "text": "Dekhe gaam ke chhore saare khade khade"
            },
            {
                "time": 48,
                "text": "Haryanvi dhun pe nach le mere sang!"
            }
        ]
    },
    {
        "id": "full-bhaga",
        "title": "Bhaga Aala",
        "artist": "Renuka Panwar feat. Deepak Lohchab",
        "album": "Bhaga Aala",
        "genre": "Haryanvi",
        "language": "Haryanvi",
        "plays": "8.3M",
        "duration": "2:52",
        "durationSec": 172,
        "cover": "https://c.saavncdn.com/158/Bhaga-Aala-Haryanvi-2022-20220608143922-500x500.jpg",
        "src": "https://aac.saavncdn.com/158/1664830c4ead62c7ddc888ac4790948c_320.mp4",
        "lyrics": [
            {
                "time": 0,
                "text": "♪ Bhaga aala paaya maine saajan pyara ♪"
            },
            {
                "time": 15,
                "text": "Chamke jaise asmaan mein chamke sitara"
            },
            {
                "time": 35,
                "text": "Jodi hamari lage sabse nirali"
            }
        ]
    },
    {
        "id": "full-nathuniya",
        "title": "Nathuniya",
        "artist": "Khesari Lal Yadav & Priyanka Singh",
        "album": "Bhojpuri Hit Machine",
        "genre": "Bhojpuri",
        "language": "Bhojpuri",
        "plays": "19.4M",
        "duration": "3:33",
        "durationSec": 213,
        "cover": "https://c.saavncdn.com/552/Nathuniya-Bhojpuri-2022-20220502123737-500x500.jpg",
        "src": "https://aac.saavncdn.com/552/3585ac65a53569958fc61e83d1e1c3de_sar_320.mp4",
        "lyrics": [
            {
                "time": 0,
                "text": "♪ Ae raja ji... Nathuniya pe goli chalwa di ka? ♪"
            },
            {
                "time": 15,
                "text": "Laal ghaghra chamke jab aave jawani"
            },
            {
                "time": 30,
                "text": "Bhojpuri danka baaje poore Bihar mein"
            },
            {
                "time": 50,
                "text": "Khesari Lal Yadav superhit dhamaka!"
            }
        ]
    },
    {
        "id": "full-palang",
        "title": "Palang Sagwan Ke",
        "artist": "Khesari Lal Yadav & Indu Sonali",
        "album": "Doli Saja Ke Rakhna",
        "genre": "Bhojpuri",
        "language": "Bhojpuri",
        "plays": "15.7M",
        "duration": "3:44",
        "durationSec": 224,
        "cover": "https://c.saavncdn.com/431/Doli-Saja-Ke-Rakhna-Bhojpuri-2022-20220708064952-500x500.jpg",
        "src": "https://aac.saavncdn.com/431/0f7118b2556ba75e482135f493faf0be_320.mp4",
        "lyrics": [
            {
                "time": 0,
                "text": "♪ Palang sagwan ke le aawa raja ji ♪"
            },
            {
                "time": 14,
                "text": "Bindiya chamke mathe pe dulhan rani"
            },
            {
                "time": 32,
                "text": "Desi dholak aur jhanjhar ki jankaar"
            },
            {
                "time": 55,
                "text": "Nach le jhoom ke saara sansar!"
            }
        ]
    },
    {
        "id": "full-panche",
        "title": "Panche Ke Nache Aiha",
        "artist": "Pawan Singh & Shilpi Raj",
        "album": "Panche Ke Nache Aiha",
        "genre": "Bhojpuri",
        "language": "Bhojpuri",
        "plays": "22.0M",
        "duration": "3:40",
        "durationSec": 220,
        "cover": "https://c.saavncdn.com/356/Panche-Ke-Nache-Aiha-Bhojpuri-2022-20221208075535-500x500.jpg",
        "src": "https://aac.saavncdn.com/356/8008a405340f8bc16e6b35765133eed2_320.mp4",
        "lyrics": [
            {
                "time": 0,
                "text": "♪ Panche ke nache aiha raja ji! ♪"
            },
            {
                "time": 14,
                "text": "Power star Pawan Singh ka dhamaka"
            },
            {
                "time": 30,
                "text": "Shilpi Raj sang jodi baate kamaal"
            },
            {
                "time": 52,
                "text": "Bhojpuri beats rockin the speakers!"
            }
        ]
    },
    {
        "id": "full-doghoont",
        "title": "Do Ghoont",
        "artist": "Khesari Lal Yadav & Shilpi Raj",
        "album": "Bhojpuri Hit Machine",
        "genre": "Bhojpuri",
        "language": "Bhojpuri",
        "plays": "13.3M",
        "duration": "3:26",
        "durationSec": 206,
        "cover": "https://c.saavncdn.com/552/Do-Ghoont-Bhojpuri-2021-20211116121404-500x500.jpg",
        "src": "https://aac.saavncdn.com/552/e4b7b310a1b0134e752ff03022440b52_sar_320.mp4",
        "lyrics": [
            {
                "time": 0,
                "text": "♪ Do ghoont mujhe bhi pila de sharaabi ♪"
            },
            {
                "time": 16,
                "text": "Bhojpuri tadka with electro beats"
            },
            {
                "time": 36,
                "text": "Naache pura club jab gaana baje re"
            }
        ]
    },
    {
        "id": "full-neverfold",
        "title": "Never Fold",
        "artist": "Sidhu Moose Wala",
        "album": "No Name - EP",
        "genre": "Punjabi",
        "language": "Punjabi",
        "plays": "31.2M",
        "duration": "3:00",
        "durationSec": 180,
        "cover": "https://c.saavncdn.com/448/No-Name-Punjabi-2022-20220425175924-500x500.jpg",
        "src": "https://aac.saavncdn.com/448/bbc0e14d595d2741ca172e221e6da012_320.mp4",
        "lyrics": [
            {
                "time": 0,
                "text": "♪ Sidhu Moose Wala... Dil da ni maada ♪"
            },
            {
                "time": 12,
                "text": "Zindagi ch kade hathyar ni chhadde"
            },
            {
                "time": 24,
                "text": "Veriyan de kadd ditte vham saare"
            },
            {
                "time": 40,
                "text": "We Never Fold, We Never Bend"
            },
            {
                "time": 60,
                "text": "Legends live forever in the sound!"
            }
        ]
    },
    {
        "id": "full-lover",
        "title": "Lover",
        "artist": "Diljit Dosanjh",
        "album": "MoonChild Era",
        "genre": "Punjabi",
        "language": "Punjabi",
        "plays": "27.4M",
        "duration": "3:10",
        "durationSec": 190,
        "cover": "https://c.saavncdn.com/209/MoonChild-Era-Punjabi-2021-20210822002347-500x500.jpg",
        "src": "https://aac.saavncdn.com/209/88cd9a1cc0af8768d67272876bb09851_320.mp4",
        "lyrics": [
            {
                "time": 0,
                "text": "♪ Yaar tera ban gaya Lover ni ♪"
            },
            {
                "time": 14,
                "text": "Ho jivein gaddi vich laggeya subwoofer ni"
            },
            {
                "time": 30,
                "text": "Diljit Dosanjh vibes everywhere"
            },
            {
                "time": 48,
                "text": "Tere pichhe pichhe aunde saare munde"
            },
            {
                "time": 68,
                "text": "Par yaar tera ban gaya Lover ni!"
            }
        ]
    },
    {
        "id": "full-goat",
        "title": "G.O.A.T.",
        "artist": "Diljit Dosanjh",
        "album": "G.O.A.T.",
        "genre": "Punjabi",
        "language": "Punjabi",
        "plays": "38.0M",
        "duration": "3:44",
        "durationSec": 224,
        "cover": "https://c.saavncdn.com/597/G-O-A-T--Punjabi-2020-20200729194017-500x500.jpg",
        "src": "https://aac.saavncdn.com/597/ce842951d6cde3c4355046ca5e250809_320.mp4",
        "lyrics": [
            {
                "time": 0,
                "text": "♪ Diamond jeya jatt khada hath naiyo aunda ♪"
            },
            {
                "time": 14,
                "text": "G.O.A.T. ban gaya munda international!"
            },
            {
                "time": 30,
                "text": "Desi swag challe poori duniya te"
            },
            {
                "time": 50,
                "text": "Diljit Dosanjh rule karda chartan te!"
            }
        ]
    },
    {
        "id": "full-sohigh",
        "title": "So High",
        "artist": "Sidhu Moose Wala",
        "album": "So High",
        "genre": "Punjabi",
        "language": "Punjabi",
        "plays": "45.1M",
        "duration": "3:53",
        "durationSec": 233,
        "cover": "https://c.saavncdn.com/544/So-High-Punjabi-2017-20170810141655-500x500.jpg",
        "src": "https://aac.saavncdn.com/544/fa128b5b00df068d78bc50bf19bf137f_320.mp4",
        "lyrics": [
            {
                "time": 0,
                "text": "♪ Jatt da muqabla das mainu kithe ae ♪"
            },
            {
                "time": 16,
                "text": "Sir utte ghumdi ae maut jivein rani"
            },
            {
                "time": 34,
                "text": "So High flown in the sky"
            },
            {
                "time": 54,
                "text": "Sidhu Moose Wala forever legend!"
            }
        ]
    }
];

  // ==========================================================================
  // INDIAN MUSIC FULL SONG API (BOLLYWOOD, DHANDA NYOLIWALA, HARYANVI, BHOJPURI, PUNJABI)
  // Direct 320kbps full track streaming with client-side DES decryption & CDN acceleration.
  // ==========================================================================
  function decryptSaavnUrl(enc) {
    if (!enc) return null;
    try {
      if (typeof CryptoJS !== 'undefined') {
        const key = CryptoJS.enc.Utf8.parse('38346591');
        const decrypted = CryptoJS.DES.decrypt(
          { ciphertext: CryptoJS.enc.Base64.parse(enc) },
          key,
          { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 }
        );
        const url = decrypted.toString(CryptoJS.enc.Utf8);
        if (url && url.startsWith('http')) {
          return url.replace('_96.mp4', '_320.mp4').replace('_96.m4a', '_320.m4a');
        }
      }
    } catch (e) {
      console.warn('DES Decrypt error:', e);
    }
    return null;
  }

  const IndianMusicAPI = {
    saavnUrl: 'https://www.jiosaavn.com/api.php',
    itunesUrl: 'https://itunes.apple.com/search',
    cache: {},

    queries: {
      Bollywood: ['arijit singh', 'atif aslam', 'shreya ghoshal', 'pritam', 'sachin jigar'],
      Haryanvi: ['dhanda nyoliwala drill', '52 gaj ka daman', 'renuka panwar', 'gulzaar chhaniwala'],
      'Dhanda Nyoliwala': ['dhanda nyoliwala', 'russian bandana', 'up to u dhanda', 'dhanda nyoliwala drill'],
      'Sumit Parta': ['sumit parta 4 aadmi', 'sumit parta ghane gande', 'sumit parta rail'],
      'Diljit Dosanjh': ['diljit dosanjh lover', 'diljit dosanjh born to shine', 'diljit dosanjh goat'],
      'Honey Singh': ['yo yo honey singh brown rang', 'honey singh blue eyes', 'honey singh millionaire'],
      'Sidhu Moose Wala': ['sidhu moose wala 295', 'sidhu moose wala so high', 'sidhu moose wala the last ride'],
      'AP Dhillon': ['ap dhillon brown munde', 'ap dhillon excuses', 'ap dhillon with you'],
      'Shubh': ['shubh baller', 'shubh cheques', 'shubh elevated', 'shubh no love'],
      'Anuv Jain': ['anuv jain husn', 'anuv jain baarishein', 'anuv jain alag aasmaan'],
      Bhojpuri: ['khesari lal yadav', 'pawan singh bhojpuri', 'shilpi raj bhojpuri', 'samar singh'],
      Punjabi: ['sidhu moose wala', 'diljit dosanjh', 'karan aujla', 'ap dhillon', 'shubh']
    },

    async fetchCategory(category = 'all', limit = 24) {
      const artistTracks = getArtistTracks(category);
      if (artistTracks && artistTracks.length > 0) {
        return artistTracks;
      }
      if (this.cache[category] && this.cache[category].length > 0) {
        return this.cache[category];
      }

      let queryList = [];
      if (category === 'all') {
        queryList = [
          { q: 'dhanda nyoliwala russian bandana', lang: 'Dhanda Nyoliwala' },
          { q: 'sumit parta 4 aadmi', lang: 'Sumit Parta' },
          { q: 'diljit dosanjh lover', lang: 'Diljit Dosanjh' },
          { q: 'honey singh millionaire', lang: 'Honey Singh' },
          { q: 'sidhu moose wala 295', lang: 'Sidhu Moose Wala' },
          { q: 'ap dhillon brown munde', lang: 'AP Dhillon' },
          { q: 'shubh baller cheques', lang: 'Shubh' },
          { q: 'anuv jain husn', lang: 'Anuv Jain' },
          { q: 'arijit singh bollywood hits', lang: 'Bollywood' },
          { q: 'renuka panwar haryanvi', lang: 'Haryanvi' },
          { q: 'khesari lal yadav bhojpuri', lang: 'Bhojpuri' },
          { q: 'diljit dosanjh punjabi hits', lang: 'Punjabi' }
        ];
      } else if (this.queries[category]) {
        queryList = this.queries[category].map(q => ({ q, lang: category }));
      } else {
        queryList = [{ q: category + ' hits', lang: category }];
      }

      const results = [];
      const seenIds = new Set();

      for (const item of queryList) {
        try {
          const perQueryLimit = Math.ceil(limit / queryList.length) + 2;
          const liveSongs = await this.searchLive(item.q, perQueryLimit, item.lang);
          if (liveSongs && liveSongs.length > 0) {
            liveSongs.forEach(song => {
              if (!seenIds.has(song.id)) {
                seenIds.add(song.id);
                results.push(song);
              }
            });
          }
        } catch (err) {
          console.warn('IndianMusicAPI error fetching ' + item.q + ':', err);
        }
      }

      if (results.length > 0) {
        this.cache[category] = results;
      }
      return results;
    },

    async searchLive(query, limit = 25, forcedLang = null) {
      // Step 1: Try JioSaavn Full-Length 320kbps Audio API
      try {
        const url = this.saavnUrl + '?__call=search.getResults&_format=json&n=' + limit + '&p=1&q=' + encodeURIComponent(query) + '&_marker=0&ctx=web6dot0';
        const res = await fetch(url, {
          headers: { 'Accept': 'application/json, text/plain, */*' }
        });
        if (res.ok) {
          const data = await res.json();
          if (data && data.results && data.results.length > 0) {
            const parsed = [];
            data.results.forEach(raw => {
              const enc = raw.encrypted_media_url || (raw.more_info && raw.more_info.encrypted_media_url);
              const fullAudioUrl = enc ? decryptSaavnUrl(enc) : null;
              if (fullAudioUrl) {
                const sec = parseInt(raw.duration, 10) || 180;
                const min = Math.floor(sec / 60);
                const s = Math.floor(sec % 60);
                const durationStr = min + ':' + (s < 10 ? '0' : '') + s;
                const detectedLang = forcedLang || this.detectLanguage(raw, query);

                parsed.push({
                  id: 'saavn-' + raw.id,
                  title: raw.song,
                  artist: raw.primary_artists || raw.singers || 'Artist',
                  album: raw.album || 'Single',
                  genre: detectedLang,
                  language: detectedLang,
                  plays: (Math.floor(Math.random() * 80 + 20) / 10).toFixed(1) + 'M',
                  duration: durationStr,
                  durationSec: sec,
                  cover: (raw.image || '').replace('150x150', '500x500'),
                  src: fullAudioUrl,
                  lyrics: [
                    { time: 0, text: '♪ ' + raw.song + ' ♪' },
                    { time: 4, text: raw.primary_artists || 'Artist' },
                    { time: 10, text: 'Full Length Song (320kbps Master) • Album: ' + (raw.album || 'Single') },
                    { time: 18, text: '♪ Full uncut studio track on Pulse Music Player ♪' }
                  ]
                });
              }
            });

            if (parsed.length > 0) {
              return parsed;
            }
          }
        }
      } catch (err) {
        console.warn('JioSaavn search notice, falling back:', err);
      }

      // Step 2: Fallback to iTunes API if JioSaavn is blocked
      try {
        const itunesUrl = this.itunesUrl + '?term=' + encodeURIComponent(query) + '&country=in&media=music&entity=song&limit=' + limit;
        const res = await fetch(itunesUrl);
        if (res.ok) {
          const data = await res.json();
          if (data && data.results) {
            return data.results
              .filter(raw => raw.previewUrl)
              .map(raw => this.formatItunesTrack(raw, forcedLang || this.detectLanguage(raw, query)));
          }
        }
      } catch (err) {
        console.warn('iTunes fallback search error:', err);
      }
      return [];
    },

    detectLanguage(raw, hint = '') {
      const name = raw.song || raw.trackName || '';
      const artist = raw.primary_artists || raw.singers || raw.artistName || '';
      const album = raw.album || raw.collectionName || '';
      const combined = (name + ' ' + artist + ' ' + album + ' ' + hint).toLowerCase();

      // Bollywood Singer sub-fields
      if (combined.includes('arijit')) return 'Arijit Singh';
      if (combined.includes('atif aslam')) return 'Atif Aslam';
      if (combined.includes('alka yagnik')) return 'Alka Yagnik';
      if (combined.includes('shreya')) return 'Shreya Ghoshal';
      if (combined.includes('udit narayan')) return 'Udit Narayan';
      if (combined.includes('sonu nigam')) return 'Sonu Nigam';
      if (combined.includes('vishal dadlani')) return 'Vishal Dadlani';
      if (combined.includes('sunidhi')) return 'Sunidhi Chauhan';
      if (combined.includes('armaan malik')) return 'Armaan Malik';
      if (combined.includes('vishal mishra')) return 'Vishal Mishra';
      if (combined.includes('jubin nautiyal')) return 'Jubin Nautiyal';
      if (combined.includes('ankit tiwari')) return 'Ankit Tiwari';
      if (combined.includes('palak muchhal') || combined.includes('palak mucchal')) return 'Palak Muchhal';
      if (combined.includes('kk') || combined.includes('krishnakumar')) return 'KK';

      if (combined.includes('dhanda') || combined.includes('nyoliwala')) return 'Dhanda Nyoliwala';
      if (combined.includes('sumit parta') || combined.includes('parta')) return 'Sumit Parta';
      if (combined.includes('diljit')) return 'Diljit Dosanjh';
      if (combined.includes('honey singh') || combined.includes('yo yo')) return 'Honey Singh';
      if (combined.includes('sidhu') || combined.includes('moose')) return 'Sidhu Moose Wala';
      if (combined.includes('dhillon')) return 'AP Dhillon';
      if (combined.includes('shubh')) return 'Shubh';
      if (combined.includes('anuv') || combined.includes('anu jain')) return 'Anuv Jain';
      if (combined.includes('punjabi') || combined.includes('aujla')) return 'Punjabi';
      if (combined.includes('haryanvi') || combined.includes('daman') || combined.includes('renuka') || combined.includes('gulzaar') || combined.includes('hooda')) return 'Haryanvi';
      if (combined.includes('bhojpuri') || combined.includes('khesari') || combined.includes('pawan') || combined.includes('shilpi') || combined.includes('bhoj')) return 'Bhojpuri';
      return 'Bollywood';
    },

    formatItunesTrack(raw, language) {
      const durationSec = Math.round((raw.trackTimeMillis || 180000) / 1000);
      const min = Math.floor(durationSec / 60);
      const sec = Math.floor(durationSec % 60);
      const durationStr = min + ':' + (sec < 10 ? '0' : '') + sec;
      const cover = (raw.artworkUrl100 || '').replace('100x100bb', '600x600bb') || 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&auto=format&fit=crop';

      return {
        id: 'in-' + raw.trackId,
        title: raw.trackName,
        artist: raw.artistName,
        album: raw.collectionName || 'Single',
        genre: language,
        language: language,
        plays: (Math.floor(Math.random() * 80 + 20) / 10).toFixed(1) + 'M',
        duration: durationStr,
        durationSec: durationSec,
        cover: cover,
        src: raw.previewUrl,
        lyrics: [
          { time: 0, text: '♪ ' + raw.trackName + ' ♪' },
          { time: 3, text: raw.artistName },
          { time: 8, text: 'Category: ' + language + ' Hit • Album: ' + (raw.collectionName || 'Single') }
        ]
      };
    }
  };

  // Curated Playlists
  const PLAYLISTS = [
    { id: 'pl-bolly-all', name: 'Bollywood All-Stars (278 Songs)', category: 'all-bollywood', count: 278, cover: 'https://c.saavncdn.com/320/Tu-Mil-Jaaye-From-KING-Hindi-2026-20261031131042-500x500.jpg', tag: '278 Tracks • 14 Legendary Singers' },
    { id: 'pl-arijit', name: 'Arijit Singh Soul Anthems', category: 'Arijit Singh', count: 20, cover: 'https://c.saavncdn.com/475/Dhurandhar-Hindi-2025-20260203083204-500x500.jpg', tag: '20 Tracks • Tum Hi Ho, Kesariya, Chaleya' },
    { id: 'pl-kk', name: 'KK Immortal Hits', category: 'KK', count: 20, cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=600&auto=format&fit=crop', tag: '20 Tracks • Zara Sa, Dil Ibadat, Alvida' },
    { id: 'pl-atif', name: 'Atif Aslam Romance Era', category: 'Atif Aslam', count: 20, cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600&auto=format&fit=crop', tag: '20 Tracks • Jeene Laga Hoon, Dil Diyan Gallan' },
    { id: 'pl-shreya', name: 'Shreya Ghoshal Melodies', category: 'Shreya Ghoshal', count: 19, cover: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=600&auto=format&fit=crop', tag: '19 Tracks • Teri Ore, Sunn Raha Hai' },
    { id: 'pl-sonu', name: 'Sonu Nigam Golden Classics', category: 'Sonu Nigam', count: 20, cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=600&auto=format&fit=crop', tag: '20 Tracks • Kal Ho Naa Ho, Abhi Mujh Mein' },
    { id: 'pl-alka-udit', name: 'Alka Yagnik & Udit Narayan 90s', category: 'Alka Yagnik', count: 20, cover: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&w=600&auto=format&fit=crop', tag: '39 Tracks • Kuch Kuch Hota Hai, Tip Tip' },
    { id: 'pl-dhanda', name: 'Dhanda Nyoliwala Discography', category: 'Dhanda Nyoliwala', count: 80, cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/bf/0d/15/bf0d1594-b24c-73cb-d440-13d422c40b4b/24UMGIM96203.rgb.jpg/600x600bb.jpg', tag: '80 Tracks • Russian Bandana & Drill' },
    { id: 'pl-parta', name: 'Sumit Parta Complete Hits', category: 'Sumit Parta', count: 46, cover: 'https://c.saavncdn.com/134/4-Aadmi-Haryanvi-2025-20260507160420-500x500.jpg', tag: '46 Tracks • 4 Aadmi & Desi Drill' },
    { id: 'pl-diljit', name: 'Diljit Dosanjh Global Anthems', category: 'Diljit Dosanjh', count: 33, cover: 'https://c.saavncdn.com/209/MoonChild-Era-Punjabi-2021-20240715073449-500x500.jpg', tag: '33 Tracks • Lover, G.O.A.T., Naina' },
    { id: 'pl-honey', name: 'Yo Yo Honey Singh Hits', category: 'Honey Singh', count: 30, cover: 'https://c.saavncdn.com/406/Ek-Tha-Raja-Hindi-2024-20240318125601-500x500.jpg', tag: '30 Tracks • Brown Rang, Blue Eyes' },
    { id: 'pl-sidhu', name: 'Sidhu Moose Wala Legends', category: 'Sidhu Moose Wala', count: 29, cover: 'https://c.saavncdn.com/609/Moosetape-Punjabi-2021-20260626155141-500x500.jpg', tag: '29 Tracks • 295, So High, Last Ride' },
    { id: 'pl-dhillon', name: 'AP Dhillon Brown Munde Vibes', category: 'AP Dhillon', count: 17, cover: 'https://c.saavncdn.com/154/Same-Beef-Punjabi-2019-20190919071247-500x500.jpg', tag: '17 Tracks • Brown Munde, Excuses' },
    { id: 'pl-shubh', name: 'Shubh Worldwide Chartbusters', category: 'Shubh', count: 23, cover: 'https://c.saavncdn.com/392/Kaali-Hoodie-Punjabi-2026-20261016142547-500x500.jpg', tag: '23 Tracks • Baller, Cheques, Elevated' },
    { id: 'pl-anuv', name: 'Anuv Jain Acoustic Soul', category: 'Anuv Jain', count: 16, cover: 'https://c.saavncdn.com/320/Tu-Mil-Jaaye-From-KING-Hindi-2026-20261031131042-500x500.jpg', tag: '16 Tracks • Husn, Baarishein, Alag Aasmaan' },
    { id: 'pl-masoom', name: 'Masoom Sharma Top 30 Hits', category: 'Masoom Sharma', count: 30, cover: 'https://c.saavncdn.com/504/Yaari-Hindi-2025-20250731193932-500x500.jpg', tag: '30 Tracks • Singer: Masoom Sharma • Yaari, Bahubali' },
    { id: 'pl-renuka', name: 'Renuka Panwar 52 Gaj Ka Daman', category: 'Renuka Panwar', count: 30, cover: 'https://c.saavncdn.com/982/Raat-Ke-Shikari-Haryanvi-2025-20250508155806-500x500.jpg', tag: '30 Tracks • Singer: Renuka Panwar • 52 Gaj, Kabootar' },
    { id: 'pl-gulzaar', name: 'Gulzaar Chhaniwala Desi Beats', category: 'Gulzaar Chhaniwala', count: 30, cover: 'https://c.saavncdn.com/707/Yaha-Ke-Bahubali-Haryanvi-2026-20260730075405-500x500.jpg', tag: '30 Tracks • Singer: Gulzaar Chhaniwala • Panchi, Jug Jug' },
    { id: 'pl-kd', name: 'KD Desi Rock Desi Rap', category: 'KD Desi Rock', count: 30, cover: 'https://c.saavncdn.com/504/Yaari-Hindi-2025-20250731193932-500x500.jpg', tag: '30 Tracks • Singer: KD Desi Rock • Banger, Jeep Md' },
    { id: 'pl-amit', name: 'Amit Saini Rohtakiya Rohtak Beats', category: 'Amit Saini Rohtakiya', count: 30, cover: 'https://c.saavncdn.com/982/Raat-Ke-Shikari-Haryanvi-2025-20250508155806-500x500.jpg', tag: '30 Tracks • Singer: Amit Saini Rohtakiya • Kaali Gaadi' },
    { id: 'pl-khasa', name: 'Khasa Aala Chahar Desi Swag', category: 'Khasa Aala Chahar', count: 30, cover: 'https://c.saavncdn.com/707/Yaha-Ke-Bahubali-Haryanvi-2026-20260730075405-500x500.jpg', tag: '30 Tracks • Singer: Khasa Aala Chahar • Old Money' },
    { id: 'pl-surender', name: 'Surender Romio Folk & Beats', category: 'Surender Romio', count: 30, cover: 'https://c.saavncdn.com/504/Yaari-Hindi-2025-20250731193932-500x500.jpg', tag: '30 Tracks • Singer: Surender Romio • Kabootar, Nangad' },
    { id: 'pl-amanraj', name: 'Amanraj Gill Melodies', category: 'Amanraj Gill', count: 30, cover: 'https://c.saavncdn.com/982/Raat-Ke-Shikari-Haryanvi-2025-20250508155806-500x500.jpg', tag: '30 Tracks • Singer: Amanraj Gill • Hopeless, Kale Kagaz' },
    { id: 'pl-swara', name: 'Swara Verma Sheesha & Folk', category: 'Swara Verma', count: 30, cover: 'https://c.saavncdn.com/707/Yaha-Ke-Bahubali-Haryanvi-2026-20260730075405-500x500.jpg', tag: '30 Tracks • Singer: Swara Verma • Sheesha, Badmashan' },
    { id: 'pl-2', name: 'All Haryanvi Superstars 300', category: 'Haryanvi', count: 300, cover: 'https://c.saavncdn.com/504/Yaari-Hindi-2025-20250731193932-500x500.jpg', tag: '300 Tracks • Top 30 of All 10 Haryanvi Legends' },
    { id: 'pl-bhojpuri-all', name: 'All Bhojpuri Dhamaka (231 Songs)', category: 'all-bhojpuri', count: 231, cover: 'https://c.saavncdn.com/436/Chhalakata-Hamro-Jawaniya-Bhojpuri-2016-20260420220308-500x500.jpg', tag: '231 Tracks • Top 21 of All 11 Bhojpuri Legends' },
    { id: 'pl-pawan', name: 'Pawan Singh Power Hits', category: 'Pawan Singh', count: 21, cover: 'https://c.saavncdn.com/436/Chhalakata-Hamro-Jawaniya-Bhojpuri-2016-20260420220308-500x500.jpg', tag: '21 Tracks • Singer: Pawan Singh • Lollypop Lagelu' },
    { id: 'pl-khesari', name: 'Khesari Lal Yadav Blockbusters', category: 'Khesari Lal Yadav', count: 21, cover: 'https://c.saavncdn.com/936/Bhojpuriya-Raja-Bhojpuri-2016-500x500.jpg', tag: '21 Tracks • Singer: Khesari Lal Yadav • Piyawa Gehu Katata' },
    { id: 'pl-shilpi', name: 'Shilpi Raj Chartbusters', category: 'Shilpi Raj', count: 21, cover: 'https://c.saavncdn.com/469/Chulha-Alage-Jari-Bhojpuri-2024-20240701204914-500x500.jpg', tag: '21 Tracks • Singer: Shilpi Raj • Raja Ji Khoon Kaida' },
    { id: 'pl-manoj', name: 'Manoj Tiwari Golden Classics', category: 'Manoj Tiwari', count: 21, cover: 'https://c.saavncdn.com/436/Chhalakata-Hamro-Jawaniya-Bhojpuri-2016-20260420220308-500x500.jpg', tag: '21 Tracks • Singer: Manoj Tiwari • Rinkiya Ke Papa, Jiya Ho Bihar' },
    { id: 'pl-ritesh', name: 'Ritesh Pandey Party Anthems', category: 'Ritesh Pandey', count: 21, cover: 'https://c.saavncdn.com/936/Bhojpuriya-Raja-Bhojpuri-2016-500x500.jpg', tag: '21 Tracks • Singer: Ritesh Pandey • Hello Koun, Piyawa Se Pahile' },
    { id: 'pl-guru', name: 'Guru Randhawa Global Hits', category: 'Guru Randhawa', count: 25, cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600&auto=format&fit=crop', tag: '25 Tracks • Singer: Guru Randhawa • Lahore, High Rated Gabru' },
    { id: 'pl-karan', name: 'Karan Aujla Swag Anthems', category: 'Karan Aujla', count: 25, cover: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=600&auto=format&fit=crop', tag: '25 Tracks • Singer: Karan Aujla • Softly, Winning Speech' },
    { id: 'pl-bpraak', name: 'B Praak Soulful Masterpieces', category: 'B Praak', count: 25, cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=600&auto=format&fit=crop', tag: '25 Tracks • Singer: B Praak • Filhall, Mann Bharrya' },
    { id: 'pl-harrdy', name: 'Harrdy Sandhu Pop Anthems', category: 'Harrdy Sandhu', count: 25, cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=600&auto=format&fit=crop', tag: '25 Tracks • Singer: Harrdy Sandhu • Bijlee Bijlee, Kya Baat Ay' },
    { id: 'pl-jass', name: 'Jass Manak Prada & Lehanga', category: 'Jass Manak', count: 25, cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&auto=format&fit=crop', tag: '25 Tracks • Singer: Jass Manak • Prada, Lehanga' },
    { id: 'pl-kaka', name: 'Kaka Libaas & Poetry', category: 'Kaka', count: 25, cover: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&w=600&auto=format&fit=crop', tag: '25 Tracks • Singer: Kaka • Libaas, Kale Je Libas' },
    { id: 'pl-jasmine', name: 'Jasmine Sandlas Queen Anthems', category: 'Jasmine Sandlas', count: 25, cover: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=600&auto=format&fit=crop', tag: '25 Tracks • Singer: Jasmine Sandlas • Illegal Weapon, Sip Sip' },
    { id: 'pl-parmish', name: 'Parmish Verma Desi Swag', category: 'Parmish Verma', count: 25, cover: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600&auto=format&fit=crop', tag: '25 Tracks • Singer: Parmish Verma • Gaal Ni Kadni, Shada' },
    { id: 'pl-millind', name: 'Millind Gaba Party Anthems', category: 'Millind Gaba', count: 25, cover: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=600&auto=format&fit=crop', tag: '25 Tracks • Singer: Millind Gaba • Daaru Party, She Don\'t Know' },
    { id: 'pl-gurlez', name: 'Gurlez Akhtar Duets & Hits', category: 'Gurlez Akhtar', count: 25, cover: 'https://images.unsplash.com/photo-1471478331149-c72f17e33c73?q=80&w=600&auto=format&fit=crop', tag: '25 Tracks • Singer: Gurlez Akhtar • 8 ASLE, Defaulter' },
    { id: 'pl-4', name: 'All Punjabi Swag Superstars 300', category: 'Punjabi', count: 300, cover: 'https://c.saavncdn.com/609/Moosetape-Punjabi-2021-20260626155141-500x500.jpg', tag: '300 Tracks • Top 25 of All 12 Punjabi Legends' },
    { id: 'pl-rap-all', name: 'Desi Hip-Hop & Rap (403 Songs)', category: 'all-rap', count: 403, cover: 'https://c.saavncdn.com/715/Punya-Paap-Hindi-2020-20201201190529-500x500.jpg', tag: '403 Tracks • Top 31 of All 13 Desi Hip-Hop Icons' },
    { id: 'pl-divine', name: 'DIVINE Gully Gang Anthems', category: 'DIVINE', count: 31, cover: 'https://c.saavncdn.com/715/Punya-Paap-Hindi-2020-20201201190529-500x500.jpg', tag: '31 Tracks • Singer: DIVINE • Kohinoor, Mirchi, Punya Paap' },
    { id: 'pl-krsna', name: 'KR$NA Lyrical Warfare', category: 'KR$NA', count: 31, cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&auto=format&fit=crop', tag: '31 Tracks • Singer: KR$NA • Still Here, Say My Name, No Cap' },
    { id: 'pl-seedhe-maut', name: 'Seedhe Maut TBSM Classics', category: 'Seedhe Maut', count: 31, cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=600&auto=format&fit=crop', tag: '31 Tracks • Singer: Seedhe Maut • Nayaab, Lunch Break' },
    { id: 'pl-hanumankind', name: 'Hanumankind Global Anthems', category: 'Hanumankind', count: 31, cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600&auto=format&fit=crop', tag: '31 Tracks • Singer: Hanumankind • Big Dawgs, Rush Hour' },
    { id: 'pl-emiway', name: 'Emiway Bantai Street Banger', category: 'Emiway Bantai', count: 31, cover: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&w=600&auto=format&fit=crop', tag: '31 Tracks • Singer: Emiway Bantai • Machayenge, Khatam' },
    { id: 'pl-raftaar', name: 'Raftaar Kalamkaar Power', category: 'Raftaar', count: 31, cover: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=600&auto=format&fit=crop', tag: '31 Tracks • Singer: Raftaar • Swag Mera Desi, Dhaakad' },
    { id: 'pl-bohemia', name: 'Bohemia The Punjabi Rap Pioneer', category: 'Bohemia', count: 31, cover: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=600&auto=format&fit=crop', tag: '31 Tracks • Singer: Bohemia • Kali Denali, Ek Tera Pyar' },
    { id: 'pl-mcstan', name: 'MC Stan Tadipaar & Basti', category: 'MC Stan', count: 31, cover: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600&auto=format&fit=crop', tag: '31 Tracks • Singer: MC Stan • Basti Ka Hasti, Tadipaar' },
    { id: 'pl-neighbour-all', name: 'Neighbour Melodies & Hits (223 Songs)', category: 'all-neighbour', count: 223, cover: 'https://c.saavncdn.com/178/AUR-TU-HAI-KAHAN-Slowed-Reverb-Hindi-2023-20231122224214-500x500.jpg', tag: '223 Tracks • Top Hits of 10 Neighbour Superstars' },
    { id: 'pl-aur', name: 'AUR Soul Hits & Pop', category: 'AUR', count: 25, cover: 'https://c.saavncdn.com/178/AUR-TU-HAI-KAHAN-Slowed-Reverb-Hindi-2023-20231122224214-500x500.jpg', tag: '25 Tracks • Singer: AUR • Tu Hai Kahan, Shiqayat' },
    { id: 'pl-abdul-hannan', name: 'Abdul Hannan Acoustic Magic', category: 'Abdul Hannan', count: 14, cover: 'https://c.saavncdn.com/823/Do-Aur-Do-Pyaar-Hindi-2024-20240412235725-500x500.jpg', tag: '14 Tracks • Singer: Abdul Hannan • Iraaday, Bikhra' },
    { id: 'pl-kaifi-khalil', name: 'Kaifi Khalil Soulful Poetry', category: 'Kaifi Khalil', count: 25, cover: 'https://c.saavncdn.com/977/Husn-Aur-Ishq-Urdu-2000-20240408222226-500x500.jpg', tag: '25 Tracks • Singer: Kaifi Khalil • Kahani Suno 2.0, Kana Yaari' },
    { id: 'pl-talha-anjum', name: 'Talha Anjum Open Letter Rap', category: 'Talha Anjum', count: 25, cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600&auto=format&fit=crop', tag: '25 Tracks • Singer: Talha Anjum • Downers At Dusk, Happy Hour' },
    { id: 'pl-rahat-fateh', name: 'Rahat Fateh Ali Khan Sufi Gems', category: 'Rahat Fateh Ali Khan', count: 25, cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=600&auto=format&fit=crop', tag: '25 Tracks • Singer: Rahat Fateh Ali Khan • O Re Piya, Afreen' },
    { id: 'pl-nusrat-fateh', name: 'Nusrat Fateh Ali Khan Immortals', category: 'Nusrat Fateh Ali Khan', count: 25, cover: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=600&auto=format&fit=crop', tag: '25 Tracks • Singer: Nusrat Fateh Ali Khan • Yeh Jo Halka Halka' },
    { id: 'pl-asim-azhar', name: 'Asim Azhar Romantic Hits', category: 'Asim Azhar', count: 25, cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=600&auto=format&fit=crop', tag: '25 Tracks • Singer: Asim Azhar • Habibi, Ghalat Fehmi' },
    { id: 'pl-mustafa-zahid', name: 'Mustafa Zahid Roxen Rock Anthems', category: 'Mustafa Zahid', count: 25, cover: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&w=600&auto=format&fit=crop', tag: '25 Tracks • Singer: Mustafa Zahid • Toh Phir Aao, Tera Mera Rishta' },
    { id: 'pl-afusic', name: 'Afusic Lo-Fi Vibes', category: 'Afusic', count: 9, cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&auto=format&fit=crop', tag: '9 Tracks • Singer: Afusic • Pal Pal, Dil, Qasam' },
    { id: 'pl-oldisgold-all', name: 'Old is Gold Golden Classics (560 Songs)', category: 'all-oldisgold', count: 560, cover: 'https://c.saavncdn.com/086/Mere-Jeevan-Saathi-Hindi-1972-20200901153944-500x500.jpg', tag: '560 Tracks • Top 40 of 14 Immortal Legends' },
    { id: 'pl-kishore', name: 'Kishore Kumar Evergreen Anthems', category: 'Kishore Kumar', count: 40, cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&auto=format&fit=crop', tag: '40 Tracks • Singer: Kishore Kumar • Pal Pal Dil, Roop Tera' },
    { id: 'pl-rafi', name: 'Mohammad Rafi Immortal Melodies', category: 'Mohammad Rafi', count: 40, cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600&auto=format&fit=crop', tag: '40 Tracks • Singer: Mohammad Rafi • Kya Hua Tera Wada, Gulabi Aankhen' },
    { id: 'pl-lata', name: 'Lata Mangeshkar Nightingale Gems', category: 'Lata Mangeshkar', count: 40, cover: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=600&auto=format&fit=crop', tag: '40 Tracks • Singer: Lata Mangeshkar • Lag Ja Gale, Ajeeb Dastan' },
    { id: 'pl-mukesh-gold', name: 'Mukesh Golden Era Soul', category: 'Mukesh', count: 40, cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=600&auto=format&fit=crop', tag: '40 Tracks • Singer: Mukesh • Kahin Door, Jeena Yahan' },
    { id: 'pl-asha-gold', name: 'Asha Bhosle Vintage Queen', category: 'Asha Bhosle', count: 40, cover: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&w=600&auto=format&fit=crop', tag: '40 Tracks • Singer: Asha Bhosle • Dum Maro Dum, Chura Liya' },
    { id: 'pl-manna-gold', name: 'Manna Dey Classical Masterpieces', category: 'Manna Dey', count: 40, cover: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=600&auto=format&fit=crop', tag: '40 Tracks • Singer: Manna Dey • Zindagi Kaisi Hai Paheli' },
    { id: 'pl-talat-gold', name: 'Talat Mahmood Velvet Ghazals', category: 'Talat Mahmood', count: 40, cover: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600&auto=format&fit=crop', tag: '40 Tracks • Singer: Talat Mahmood • Jalte Hain Jiske Liye' },
    { id: 'pl-hemant-gold', name: 'Hemant Kumar Deep Baritone', category: 'Hemant Kumar', count: 40, cover: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=600&auto=format&fit=crop', tag: '40 Tracks • Singer: Hemant Kumar • Yeh Nayan Dare Dare' },
    { id: 'pl-bhupinder-gold', name: 'Bhupinder Singh Ghazal & Soul', category: 'Bhupinder Singh', count: 40, cover: 'https://images.unsplash.com/photo-1471478331149-c72f17e33c73?q=80&w=600&auto=format&fit=crop', tag: '40 Tracks • Singer: Bhupinder Singh • Do Deewane Shaher Mein' },
    { id: 'pl-shamshad-gold', name: 'Shamshad Begum Vintage Pioneer', category: 'Shamshad Begum', count: 40, cover: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=600&auto=format&fit=crop', tag: '40 Tracks • Singer: Shamshad Begum • Kajra Mohabbat Wala' },
    { id: 'pl-mahendra-gold', name: 'Mahendra Kapoor Powerhouse Hits', category: 'Mahendra Kapoor', count: 40, cover: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=600&auto=format&fit=crop', tag: '40 Tracks • Singer: Mahendra Kapoor • Mere Desh Ki Dharti' },
    { id: 'pl-geeta-gold', name: 'Geeta Dutt Soulful Melodies', category: 'Geeta Dutt', count: 40, cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600&auto=format&fit=crop', tag: '40 Tracks • Singer: Geeta Dutt • Waqt Ne Kiya, Babuji Dheere' },
    { id: 'pl-usha-gold', name: 'Usha Mangeshkar Vibrant Folk Hits', category: 'Usha Mangeshkar', count: 40, cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&auto=format&fit=crop', tag: '40 Tracks • Singer: Usha Mangeshkar • Mungda, Gori Hai Kalaiyan' },
    { id: 'pl-betterog-all', name: 'Better OG Legends & Timeless Hits (210 Songs)', category: 'all-betterog', count: 210, cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600&auto=format&fit=crop', tag: '210 Tracks • 6 Immortal Powerhouses' },
    { id: 'pl-shankar', name: 'Shankar Mahadevan Powerhouse Anthems', category: 'Shankar Mahadevan', count: 35, cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=600&auto=format&fit=crop', tag: '35 Tracks • Singer: Shankar Mahadevan • Breathless, Dil Chahta Hai' },
    { id: 'pl-ar-rahman', name: 'A.R. Rahman Oscar & Mystic Melodies', category: 'A.R. Rahman', count: 35, cover: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=600&auto=format&fit=crop', tag: '35 Tracks • Singer: A.R. Rahman • Maa Tujhe Salaam, Kun Faya' },
    { id: 'pl-kailash', name: 'Kailash Kher Sufi Ecstasy', category: 'Kailash Kher', count: 35, cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=600&auto=format&fit=crop', tag: '35 Tracks • Singer: Kailash Kher • Teri Deewani, Saiyyan' },
    { id: 'pl-sukhwinder', name: 'Sukhwinder Singh High Energy Hits', category: 'Sukhwinder Singh', count: 35, cover: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&w=600&auto=format&fit=crop', tag: '35 Tracks • Singer: Sukhwinder Singh • Chaiyya Chaiyya, Chak De' },
    { id: 'pl-hariharan', name: 'Hariharan Velvet Romance & Soul', category: 'Hariharan', count: 35, cover: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=600&auto=format&fit=crop', tag: '35 Tracks • Singer: Hariharan • Tu Hi Re, Chanda Re' }
  ];

  // ==========================================================================
  // STATE STORE
  // ==========================================================================
  const State = {
    tracks: buildInitialTracks(),
    currentTrackIndex: 0,
    isPlaying: false,
    volume: parseFloat(localStorage.getItem('purebeats_volume') || localStorage.getItem('pulse_volume') || '0.85'),
    isMuted: false,
    shuffle: false,
    repeatMode: 'all', // 'off', 'all', 'one'
    likedTrackIds: new Set(JSON.parse(localStorage.getItem('purebeats_liked') || localStorage.getItem('pulse_liked') || '["dhanda-1766914121", "parta-1PjL0gOh", "diljit-qN8N_645", "sidhu-004_295", "in-1468448742"]')),
    customPlaylists: JSON.parse(localStorage.getItem('purebeats_custom_pl') || localStorage.getItem('pulse_custom_pl') || '[]'),
    activeFilter: 'all',
    searchQuery: '',
    visualizerMode: 'bars', // 'bars', 'wave', 'circle'
    user: JSON.parse(localStorage.getItem('purebeats_user') || localStorage.getItem('pulse_user') || '{"name": "PureBeats Explorer", "status": "Pro Listener", "avatar": "P"}')
  };

  // ==========================================================================
  // AUDIO ENGINE (HTML5 AUDIO & EQUALIZER)
  // Direct HTML5 Audio playback - zero CORS blocks, loud & clear master streaming.
  // ==========================================================================
  class AudioEngine {
    constructor() {
      this.audio = new Audio();
      this.audio.preload = 'auto';

      this.audioCtx = null;
      this.analyser = null;
      this.sourceNode = null;
      this.gainNode = null;
      this.eqFilters = [];
      this.freqBands = [60, 250, 1000, 4000, 16000];

      this.initEvents();
    }

    initWebAudio() {
      if (this.audioCtx) return;
      try {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextClass) return;
        this.audioCtx = new AudioContextClass();

        this.analyser = this.audioCtx.createAnalyser();
        this.analyser.fftSize = 256;
        this.analyser.smoothingTimeConstant = 0.8;

        this.gainNode = this.audioCtx.createGain();
        this.gainNode.gain.value = State.volume;

        // Build 5-band Studio Equalizer
        this.eqFilters = this.freqBands.map((freq, index) => {
          const filter = this.audioCtx.createBiquadFilter();
          if (index === 0) {
            filter.type = 'lowshelf';
          } else if (index === this.freqBands.length - 1) {
            filter.type = 'highshelf';
          } else {
            filter.type = 'peaking';
            filter.Q.value = 1.4;
          }
          filter.frequency.value = freq;
          filter.gain.value = 0;
          return filter;
        });
      } catch (err) {
        console.warn('Web Audio API notice:', err);
      }
    }

    ensureContext() {
      this.initWebAudio();
      if (this.audioCtx && this.audioCtx.state === 'suspended') {
        this.audioCtx.resume().catch(() => {});
      }
    }

    loadTrack(track) {
      if (!track || !track.src) return;
      this.audio.src = track.src;
      this.audio.load();
      this.updateVolume();

      if ('mediaSession' in navigator && track) {
        try {
          navigator.mediaSession.metadata = new MediaMetadata({
            title: track.title,
            artist: track.artist,
            album: track.album || 'PureBeats Hits',
            artwork: [
              { src: track.cover, sizes: '500x500', type: 'image/jpeg' }
            ]
          });
        } catch (e) {
          // Ignore MediaMetadata format restrictions
        }
      }
    }

    play() {
      this.ensureContext();
      this.updateVolume();
      const playPromise = this.audio.play();

      if (playPromise !== undefined) {
        playPromise.then(() => {
          State.isPlaying = true;
          UI.updatePlayState(true);
        }).catch(err => {
          console.warn('Playback error or blocked by autoplay policy:', err);
          State.isPlaying = false;
          UI.updatePlayState(false);
        });
      } else {
        State.isPlaying = true;
        UI.updatePlayState(true);
      }
    }

    pause() {
      this.audio.pause();
      State.isPlaying = false;
      UI.updatePlayState(false);
    }

    seek(timeSeconds) {
      if (!isNaN(this.audio.duration)) {
        this.audio.currentTime = timeSeconds;
      }
    }

    setVolume(val) {
      val = Math.max(0, Math.min(1, val));
      State.volume = val;
      this.audio.volume = State.isMuted ? 0 : val;
      if (this.gainNode && this.audioCtx) {
        try {
          this.gainNode.gain.setValueAtTime(val, this.audioCtx.currentTime);
        } catch (e) {}
      }
      localStorage.setItem('purebeats_volume', val.toString());
      localStorage.setItem('pulse_volume', val.toString());
    }

    setEqBand(bandIndex, gainDb) {
      if (this.eqFilters[bandIndex] && this.audioCtx) {
        try {
          this.eqFilters[bandIndex].gain.setValueAtTime(gainDb, this.audioCtx.currentTime);
        } catch (e) {}
      }
    }

    setEqPreset(preset) {
      const presets = {
        flat: [0, 0, 0, 0, 0],
        bass: [7, 5, 1, 0, -1],
        edm: [6, 4, -1, 3, 5],
        vocal: [-2, 0, 5, 3, 1],
        rock: [4, 2, -1, 3, 4],
        lofi: [5, 3, 0, -2, -4]
      };
      const gains = presets[preset] || presets.flat;
      gains.forEach((gain, i) => this.setEqBand(i, gain));
      return gains;
    }

    updateVolume() {
      this.audio.volume = State.isMuted ? 0 : State.volume;
    }

    initEvents() {
      this.audio.addEventListener('timeupdate', () => UI.onTimeUpdate());
      this.audio.addEventListener('ended', () => UI.onTrackEnded());
      this.audio.addEventListener('play', () => UI.updatePlayState(true));
      this.audio.addEventListener('pause', () => UI.updatePlayState(false));
      this.audio.addEventListener('loadedmetadata', () => UI.onMetadataLoaded());

      this.audio.addEventListener('error', (e) => {
        console.warn('Audio stream notice on track:', State.tracks[State.currentTrackIndex]?.title, e);
        if (State.isPlaying) {
          UI.showToast('Loading next PureBeats track... 🎵');
          setTimeout(() => {
            if (State.isPlaying) {
              UI.nextTrack();
            }
          }, 1500);
        }
      });
    }
  }

  const Engine = new AudioEngine();

  // ==========================================================================
  // REAL-TIME AUDIO VISUALIZER (CANVAS)
  // Dynamic, beat-synced visualization with 3 interactive visualizer modes.
  // ==========================================================================
  class VisualizerEngine {
    constructor() {
      this.canvas = document.getElementById('visualizer-canvas');
      this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
      this.animationFrame = null;
      this.initResize();
      this.start();
    }

    initResize() {
      if (!this.canvas) return;
      const resize = () => {
        this.canvas.width = this.canvas.parentElement.clientWidth * window.devicePixelRatio;
        this.canvas.height = this.canvas.parentElement.clientHeight * window.devicePixelRatio;
      };
      window.addEventListener('resize', resize);
      resize();
    }

    start() {
      const render = () => {
        this.animationFrame = requestAnimationFrame(render);
        this.draw();
      };
      render();
    }

    draw() {
      if (!this.canvas || !this.ctx) return;
      const ctx = this.ctx;
      const width = this.canvas.width;
      const height = this.canvas.height;

      ctx.clearRect(0, 0, width, height);

      let dataArray;
      let hasSignal = false;

      if (Engine.analyser && State.isPlaying) {
        const bufferLength = Engine.analyser.frequencyBinCount;
        dataArray = new Uint8Array(bufferLength);
        if (State.visualizerMode === 'wave') {
          Engine.analyser.getByteTimeDomainData(dataArray);
          for (let i = 0; i < dataArray.length; i++) {
            if (Math.abs(dataArray[i] - 128) > 3) {
              hasSignal = true;
              break;
            }
          }
        } else {
          Engine.analyser.getByteFrequencyData(dataArray);
          for (let i = 0; i < Math.min(dataArray.length, 32); i++) {
            if (dataArray[i] > 5) {
              hasSignal = true;
              break;
            }
          }
        }
      }

      // If playing but direct Web Audio has zero signal, provide rhythmic beat waveform
      if (!hasSignal && State.isPlaying) {
        const count = 64;
        dataArray = new Uint8Array(count);
        const t = (Engine.audio.currentTime || (Date.now() * 0.001)) * 4;
        for (let i = 0; i < count; i++) {
          const beat = Math.sin(t * 2 + i * 0.25) * 0.5 + 0.5;
          const bass = Math.sin(t * 4) > 0.3 ? 0.4 : 0.1;
          const val = Math.floor((beat * 0.6 + bass * 0.4) * 200 * State.volume);
          dataArray[i] = Math.max(15, Math.min(255, val));
        }
      } else if (!State.isPlaying) {
        // Idle ambient gentle breathing wave
        const count = 64;
        dataArray = new Uint8Array(count);
        const time = Date.now() * 0.003;
        for (let i = 0; i < count; i++) {
          dataArray[i] = Math.sin(time + i * 0.2) * 20 + 25;
        }
      }

      if (State.visualizerMode === 'bars') {
        this.drawBars(ctx, width, height, dataArray);
      } else if (State.visualizerMode === 'wave') {
        this.drawWave(ctx, width, height, dataArray);
      } else {
        this.drawCircle(ctx, width, height, dataArray);
      }
    }

    drawBars(ctx, width, height, data) {
      const barCount = 48;
      const barWidth = (width / barCount) * 0.65;
      const spacing = (width / barCount) * 0.35;
      const step = Math.max(1, Math.floor(data.length / barCount));

      for (let i = 0; i < barCount; i++) {
        const val = data[i * step] || 0;
        const percent = val / 255;
        const barHeight = Math.max(4, percent * height * 0.85);
        const x = i * (barWidth + spacing) + spacing / 2;
        const y = height - barHeight;

        // Gradient Cyan -> Violet -> Pink
        const grad = ctx.createLinearGradient(0, height, 0, 0);
        grad.addColorStop(0, '#00f5d4');
        grad.addColorStop(0.6, '#7928ca');
        grad.addColorStop(1, '#f72585');

        ctx.fillStyle = grad;
        ctx.beginPath();
        if (ctx.roundRect) {
          ctx.roundRect(x, y, barWidth, barHeight, [4, 4, 0, 0]);
        } else {
          ctx.rect(x, y, barWidth, barHeight);
        }
        ctx.fill();

        // Neon Glow Cap on high peaks
        if (percent > 0.4) {
          ctx.shadowColor = '#00f5d4';
          ctx.shadowBlur = 10;
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(x, y - 2, barWidth, 3);
          ctx.shadowBlur = 0;
        }
      }
    }

    drawWave(ctx, width, height, data) {
      ctx.beginPath();
      ctx.lineWidth = 3;
      const grad = ctx.createLinearGradient(0, 0, width, 0);
      grad.addColorStop(0, '#00f5d4');
      grad.addColorStop(0.5, '#7928ca');
      grad.addColorStop(1, '#f72585');
      ctx.strokeStyle = grad;

      const sliceWidth = width / data.length;
      let x = 0;

      for (let i = 0; i < data.length; i++) {
        const v = data[i] / 128.0;
        const y = (v * height) / 2;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
        x += sliceWidth;
      }
      ctx.stroke();

      // Ambient fill under wave
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.fillStyle = 'rgba(0, 245, 212, 0.05)';
      ctx.fill();
    }

    drawCircle(ctx, width, height, data) {
      const centerX = width / 2;
      const centerY = height / 2;
      const baseRadius = Math.min(width, height) * 0.25;

      ctx.save();
      ctx.translate(centerX, centerY);

      const count = 36;
      const angleStep = (Math.PI * 2) / count;

      for (let i = 0; i < count; i++) {
        const val = data[i * 2] || 0;
        const barLen = (val / 255) * (baseRadius * 0.8);
        const angle = i * angleStep;

        const x1 = Math.cos(angle) * baseRadius;
        const y1 = Math.sin(angle) * baseRadius;
        const x2 = Math.cos(angle) * (baseRadius + barLen);
        const y2 = Math.sin(angle) * (baseRadius + barLen);

        ctx.strokeStyle = val > 120 ? '#00f5d4' : '#7928ca';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }

      // Center glowing orb
      ctx.beginPath();
      ctx.arc(0, 0, baseRadius * 0.7, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(121, 40, 202, 0.3)';
      ctx.fill();
      ctx.strokeStyle = '#00f5d4';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.restore();
    }
  }

  // ==========================================================================
  // USER INTERFACE & EVENT HANDLERS
  // ==========================================================================
  const UI = {
    init() {
      this.bindDomElements();
      this.renderTrackList();
      this.renderPlaylists();
      this.renderUserProfile();
      this.attachEventListeners();
      this.loadTrack(0, false);
      this.initVisualizer();
      this.initLocalAudioDrop();
      this.showToast('Welcome to PureBeats! Press Space to Play. 🎵');

      // Native Lock Screen & Keyboard Media Keys Support
      if ('mediaSession' in navigator) {
        try {
          navigator.mediaSession.setActionHandler('play', () => this.togglePlay());
          navigator.mediaSession.setActionHandler('pause', () => this.togglePlay());
          navigator.mediaSession.setActionHandler('previoustrack', () => this.prevTrack());
          navigator.mediaSession.setActionHandler('nexttrack', () => this.nextTrack());
          navigator.mediaSession.setActionHandler('seekto', (details) => {
            if (details.seekTime !== undefined) Engine.seek(details.seekTime);
          });
        } catch (e) {
          // ignore unsupported media session handlers
        }
      }

      // Connect to Indian Music API
      setTimeout(() => {
        this.loadCategoryFromAPI('all', false);
      }, 200);
    },

    bindDomElements() {
      this.dom = {
        playPauseBtn: document.getElementById('btn-play-pause-main'),
        prevBtn: document.getElementById('btn-player-prev'),
        nextBtn: document.getElementById('btn-player-next'),
        shuffleBtn: document.getElementById('btn-player-shuffle'),
        repeatBtn: document.getElementById('btn-player-repeat'),
        playerThumb: document.getElementById('player-dock-thumb'),
        playerTitle: document.getElementById('player-dock-title'),
        playerArtist: document.getElementById('player-dock-artist'),
        playerDock: document.getElementById('player-dock'),
        playerLikeBtn: document.getElementById('btn-player-like'),
        progressTrack: document.getElementById('progress-track'),
        progressFill: document.getElementById('progress-fill'),
        timeCurrent: document.getElementById('time-current'),
        timeTotal: document.getElementById('time-total'),
        volumeSlider: document.getElementById('volume-slider'),
        volumeBtn: document.getElementById('btn-volume-icon'),
        songsList: document.getElementById('songs-list-container'),
        playlistsGrid: document.getElementById('playlists-grid-container'),
        searchInput: document.getElementById('header-search-input'),
        genreChips: document.querySelectorAll('.genre-chip'),
        lyricsDrawer: document.getElementById('lyrics-drawer'),
        queueDrawer: document.getElementById('queue-drawer'),
        lyricsContainer: document.getElementById('lyrics-lines-container'),
        queueContainer: document.getElementById('queue-items-container'),
        eqModal: document.getElementById('eq-modal-overlay'),
        btnEqToggle: document.getElementById('btn-eq-toggle'),
        btnLyricsToggle: document.getElementById('btn-lyrics-toggle'),
        btnQueueToggle: document.getElementById('btn-queue-toggle'),
        fileInput: document.getElementById('local-audio-input')
      };
    },

    loadTrack(index, autoPlay = true) {
      if (index < 0) index = State.tracks.length - 1;
      if (index >= State.tracks.length) index = 0;

      State.currentTrackIndex = index;
      const track = State.tracks[index];

      Engine.loadTrack(track);

      // Update Player Dock DOM
      if (this.dom.playerTitle) this.dom.playerTitle.textContent = track.title;
      if (this.dom.playerArtist) this.dom.playerArtist.textContent = track.artist;
      if (this.dom.playerThumb) this.dom.playerThumb.src = track.cover;
      if (this.dom.timeTotal) this.dom.timeTotal.textContent = track.duration;
      if (this.dom.timeCurrent) this.dom.timeCurrent.textContent = '0:00';
      if (this.dom.progressFill) this.dom.progressFill.style.width = '0%';

      // Dynamic 3D Turntable Deck update
      const ttThumb = document.getElementById('tt-artwork-thumb');
      const ttTitle = document.getElementById('tt-song-title');
      const ttArtist = document.getElementById('tt-song-artist');
      const ttTotal = document.getElementById('tt-total-time');
      const ttCurrent = document.getElementById('tt-current-time');
      if (ttThumb && track) ttThumb.src = track.cover;
      if (ttTitle && track) ttTitle.textContent = track.title;
      if (ttArtist && track) ttArtist.textContent = track.artist;
      if (ttTotal && track) ttTotal.textContent = track.duration;
      if (ttCurrent) ttCurrent.textContent = '0:00';

      // Dynamic Hero Banner update
      const heroTitle = document.getElementById('hero-banner-title');
      const heroDesc = document.getElementById('hero-banner-desc');
      if (heroTitle && track) heroTitle.textContent = `${track.title} — ${track.artist}`;
      if (heroDesc && track) heroDesc.textContent = `Streaming ${track.genre} Hit • Album: ${track.album} • Enjoy authentic rhythm on PureBeats`;

      this.updateLikeButton(track.id);
      this.highlightActiveSongRow();
      this.renderLyrics(track);
      this.renderQueue();

      if (autoPlay) {
        Engine.play();
      }
    },

    togglePlay() {
      if (State.isPlaying) {
        Engine.pause();
      } else {
        Engine.play();
      }
    },

    nextTrack() {
      if (State.shuffle) {
        const next = Math.floor(Math.random() * State.tracks.length);
        this.loadTrack(next, true);
      } else {
        this.loadTrack(State.currentTrackIndex + 1, true);
      }
    },

    prevTrack() {
      if (Engine.audio.currentTime > 3) {
        Engine.seek(0);
      } else {
        this.loadTrack(State.currentTrackIndex - 1, true);
      }
    },

    updatePlayState(isPlaying) {
      State.isPlaying = isPlaying;
      if (this.dom.playPauseBtn) {
        this.dom.playPauseBtn.innerHTML = isPlaying
          ? `<svg viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`
          : `<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`;
      }
      if (this.dom.playerDock) {
        this.dom.playerDock.classList.toggle('playing', isPlaying);
      }

      // 3D Turntable Deck sync
      const ttOverlay = document.getElementById('turntable-modal-overlay');
      if (ttOverlay) ttOverlay.classList.toggle('playing', isPlaying);
      document.body.classList.toggle('is-audio-playing', isPlaying);
      const ttRotaryIcon = document.getElementById('tt-rotary-play-icon');
      if (ttRotaryIcon) {
        ttRotaryIcon.innerHTML = isPlaying
          ? `<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>`
          : `<path d="M8 5v14l11-7z"/>`;
      }

      const heroBtn = document.getElementById('btn-hero-play');
      if (heroBtn) {
        heroBtn.innerHTML = isPlaying
          ? `<svg viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg> Pause PureBeats`
          : `<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg> Play PureBeats Hits`;
      }
      this.highlightActiveSongRow();
    },

    onTimeUpdate() {
      const audio = Engine.audio;
      const current = audio.currentTime || 0;
      const total = audio.duration || State.tracks[State.currentTrackIndex].durationSec || 1;

      if (this.dom.timeCurrent) {
        this.dom.timeCurrent.textContent = this.formatTime(current);
      }

      const ttCurrent = document.getElementById('tt-current-time');
      if (ttCurrent) ttCurrent.textContent = this.formatTime(current);

      const percent = (current / total) * 100;
      if (this.dom.progressFill) {
        this.dom.progressFill.style.width = `${percent}%`;
      }

      this.updateActiveLyricLine(current);
    },

    onMetadataLoaded() {
      if (!isNaN(Engine.audio.duration)) {
        if (this.dom.timeTotal) this.dom.timeTotal.textContent = this.formatTime(Engine.audio.duration);
        const ttTotal = document.getElementById('tt-total-time');
        if (ttTotal) ttTotal.textContent = this.formatTime(Engine.audio.duration);
      }
    },

    onTrackEnded() {
      if (State.repeatMode === 'one') {
        Engine.seek(0);
        Engine.play();
      } else {
        this.nextTrack();
      }
    },

    formatTime(seconds) {
      const min = Math.floor(seconds / 60);
      const sec = Math.floor(seconds % 60);
      return `${min}:${sec < 10 ? '0' : ''}${sec}`;
    },

    // ========================================================================
    // LOAD CATEGORY FROM INDIAN MUSIC API & PRELOADED CATALOGS
    // ========================================================================
    async loadCategoryFromAPI(category = 'all', showToastFeedback = true, autoExpandDropdown = true) {
      State.activeFilter = category;

      const isBollyCat = (category.toLowerCase() === 'bollywood' || category.toLowerCase() === 'all-bollywood' || isBollywoodSinger(category));
      const isHaryanviCat = (category.toLowerCase() === 'haryanvi' || category.toLowerCase() === 'all-haryanvi' || isHaryanviSinger(category));
      const isPunjabiCat = (category.toLowerCase() === 'punjabi' || category.toLowerCase() === 'all-punjabi' || isPunjabiSinger(category));
      const isBhojpuriCat = (category.toLowerCase() === 'bhojpuri' || category.toLowerCase() === 'all-bhojpuri' || isBhojpuriSinger(category));
      const isRapCat = (category.toLowerCase() === 'rap' || category.toLowerCase() === 'all-rap' || category.toLowerCase().includes('hip-hop') || category.toLowerCase().includes('hip hop') || isRapSinger(category));
      const isNeighbourCat = (category.toLowerCase() === 'neighbour' || category.toLowerCase() === 'all-neighbour' || category.toLowerCase().includes('neighbour') || isNeighbourSinger(category));
      const isOldIsGoldCat = (category.toLowerCase() === 'old is gold' || category.toLowerCase() === 'all-oldisgold' || category.toLowerCase() === 'oldisgold' || isOldIsGoldSinger(category));
      const isBetterOGCat = (category.toLowerCase() === 'better og' || category.toLowerCase() === 'all-betterog' || category.toLowerCase() === 'betterog' || isBetterOGSinger(category));

      // Update genre chips visual state
      if (this.dom.genreChips) {
        this.dom.genreChips.forEach(c => {
          const g = (c.dataset.genre || 'all').toLowerCase();
          const match = (g === category.toLowerCase()) || 
            (g === 'bollywood' && isBollyCat) ||
            (g === 'haryanvi' && isHaryanviCat) ||
            (g === 'punjabi' && isPunjabiCat) ||
            (g === 'bhojpuri' && isBhojpuriCat) ||
            (g === 'rap' && isRapCat) ||
            (g === 'neighbour' && isNeighbourCat) ||
            (g === 'old is gold' && isOldIsGoldCat) ||
            (g === 'better og' && isBetterOGCat);
          c.classList.toggle('active', !!match);
        });
      }

      // Update sidebar language navigation items
      document.querySelectorAll('.btn-lang-nav').forEach(btn => {
        const lang = (btn.dataset.lang || '').toLowerCase();
        const match = lang && (lang === category.toLowerCase() || 
          (lang === 'bollywood' && isBollyCat) ||
          (lang === 'haryanvi' && isHaryanviCat) ||
          (lang === 'punjabi' && isPunjabiCat) ||
          (lang === 'bhojpuri' && isBhojpuriCat) ||
          (lang === 'rap' && isRapCat) ||
          (lang === 'neighbour' && isNeighbourCat) ||
          (lang === 'old is gold' && isOldIsGoldCat) ||
          (lang === 'better og' && isBetterOGCat));
        btn.classList.toggle('active', !!match);
      });

      // Update sidebar singer navigation items
      document.querySelectorAll('.btn-singer-nav').forEach(btn => {
        const s = (btn.dataset.singer || '').toLowerCase();
        const isAllBolly = (s === 'all-bollywood' && isBollyCat && (category.toLowerCase() === 'bollywood' || category.toLowerCase() === 'all-bollywood'));
        const isAllHaryanvi = (s === 'all-haryanvi' && isHaryanviCat && (category.toLowerCase() === 'haryanvi' || category.toLowerCase() === 'all-haryanvi'));
        const isAllPunjabi = (s === 'all-punjabi' && isPunjabiCat && (category.toLowerCase() === 'punjabi' || category.toLowerCase() === 'all-punjabi'));
        const isAllBhojpuri = (s === 'all-bhojpuri' && isBhojpuriCat && (category.toLowerCase() === 'bhojpuri' || category.toLowerCase() === 'all-bhojpuri'));
        const isAllRap = (s === 'all-rap' && isRapCat && (category.toLowerCase() === 'rap' || category.toLowerCase() === 'all-rap'));
        const isAllNeighbour = (s === 'all-neighbour' && isNeighbourCat && (category.toLowerCase() === 'neighbour' || category.toLowerCase() === 'all-neighbour'));
        const isAllOldIsGold = (s === 'all-oldisgold' && isOldIsGoldCat && (category.toLowerCase() === 'old is gold' || category.toLowerCase() === 'all-oldisgold' || category.toLowerCase() === 'oldisgold'));
        const isAllBetterOG = (s === 'all-betterog' && isBetterOGCat && (category.toLowerCase() === 'better og' || category.toLowerCase() === 'all-betterog' || category.toLowerCase() === 'betterog'));
        const match = s && (s === category.toLowerCase() || isAllBolly || isAllHaryanvi || isAllPunjabi || isAllBhojpuri || isAllRap || isAllNeighbour || isAllOldIsGold || isAllBetterOG);
        btn.classList.toggle('active', !!match);
      });

      // Update horizontal singer chips
      document.querySelectorAll('.singer-chip').forEach(chip => {
        const s = (chip.dataset.singer || '').toLowerCase();
        const isAllBolly = (s === 'all-bollywood' && isBollyCat && (category.toLowerCase() === 'bollywood' || category.toLowerCase() === 'all-bollywood'));
        const isAllHaryanvi = (s === 'all-haryanvi' && isHaryanviCat && (category.toLowerCase() === 'haryanvi' || category.toLowerCase() === 'all-haryanvi'));
        const isAllPunjabi = (s === 'all-punjabi' && isPunjabiCat && (category.toLowerCase() === 'punjabi' || category.toLowerCase() === 'all-punjabi'));
        const isAllBhojpuri = (s === 'all-bhojpuri' && isBhojpuriCat && (category.toLowerCase() === 'bhojpuri' || category.toLowerCase() === 'all-bhojpuri'));
        const isAllRap = (s === 'all-rap' && isRapCat && (category.toLowerCase() === 'rap' || category.toLowerCase() === 'all-rap'));
        const isAllNeighbour = (s === 'all-neighbour' && isNeighbourCat && (category.toLowerCase() === 'neighbour' || category.toLowerCase() === 'all-neighbour'));
        const isAllOldIsGold = (s === 'all-oldisgold' && isOldIsGoldCat && (category.toLowerCase() === 'old is gold' || category.toLowerCase() === 'all-oldisgold' || category.toLowerCase() === 'oldisgold'));
        const isAllBetterOG = (s === 'all-betterog' && isBetterOGCat && (category.toLowerCase() === 'better og' || category.toLowerCase() === 'all-betterog' || category.toLowerCase() === 'betterog'));
        const match = s && (s === category.toLowerCase() || isAllBolly || isAllHaryanvi || isAllPunjabi || isAllBhojpuri || isAllRap || isAllNeighbour || isAllOldIsGold || isAllBetterOG);
        chip.classList.toggle('active', !!match);
      });

      // Auto-expand appropriate genre dropdown in sidebar only when autoExpandDropdown is true
      if (autoExpandDropdown !== false) {
        const activeGenreMap = [
          { cat: isBollyCat, id: 'nav-bollywood-dropdown' },
          { cat: isHaryanviCat, id: 'nav-haryanvi-dropdown' },
          { cat: isPunjabiCat, id: 'nav-punjabi-dropdown' },
          { cat: isBhojpuriCat, id: 'nav-bhojpuri-dropdown' },
          { cat: isRapCat, id: 'nav-rap-dropdown' },
          { cat: isNeighbourCat, id: 'nav-neighbour-dropdown' },
          { cat: isOldIsGoldCat, id: 'nav-oldisgold-dropdown' },
          { cat: isBetterOGCat, id: 'nav-betterog-dropdown' }
        ];
        const matched = activeGenreMap.find(item => item.cat);
        if (matched) {
          document.querySelectorAll('.nav-item-dropdown').forEach(d => {
            if (d.id !== matched.id) d.classList.remove('open');
          });
          const targetEl = document.getElementById(matched.id);
          if (targetEl) targetEl.classList.add('open');
        }
      }

      // 1. Instant loading for requested Superstar Artists, Bollywood, Haryanvi, Punjabi, Bhojpuri, Rap, Neighbour, Old is Gold & Better OG Singers
      const artistTracks = getArtistTracks(category);
      if (artistTracks && artistTracks.length > 0) {
        State.tracks = [...artistTracks];
        let displayLabel = category;
        if (category.toLowerCase() === 'all-bollywood' || category.toLowerCase() === 'bollywood') displayLabel = 'Bollywood Hits';
        if (category.toLowerCase() === 'all-haryanvi' || category.toLowerCase() === 'haryanvi') displayLabel = 'Haryanvi Superstars';
        if (category.toLowerCase() === 'all-punjabi' || category.toLowerCase() === 'punjabi') displayLabel = 'Punjabi Swag Superstars';
        if (category.toLowerCase() === 'all-bhojpuri' || category.toLowerCase() === 'bhojpuri') displayLabel = 'Bhojpuri Dhamaka Superstars';
        if (category.toLowerCase() === 'all-rap' || category.toLowerCase() === 'rap') displayLabel = 'Desi Hip-Hop / Rap Superstars';
        if (category.toLowerCase() === 'all-neighbour' || category.toLowerCase() === 'neighbour') displayLabel = 'Neighbour Melodies & Hits';
        if (category.toLowerCase() === 'all-oldisgold' || category.toLowerCase() === 'old is gold' || category.toLowerCase() === 'oldisgold') displayLabel = 'Old is Gold Golden Classics';
        if (category.toLowerCase() === 'all-betterog' || category.toLowerCase() === 'better og' || category.toLowerCase() === 'betterog') displayLabel = 'Better OG Legends';
        if (showToastFeedback) this.showToast(`Loaded all ${artistTracks.length} ${displayLabel} songs! 👑🔥`);
        this.renderTrackList();
        this.renderQueue();
        return;
      }

      // 2. All Hits: Load curated mix of all superstars and hits
      if (category === 'all') {
        State.tracks = buildInitialTracks();
        if (showToastFeedback) this.showToast('Playing All Superstars & Trending Hits! 🚀');
        this.renderTrackList();
        this.renderQueue();
        return;
      }

      // 3. Online fetch for genres (Bhojpuri)
      if (this.dom.songsList) {
        this.dom.songsList.innerHTML = `
          <div class="api-loading-state">
            <div class="api-spinner"></div>
            <span>Connecting to Indian Music API for ${category} hits...</span>
          </div>
        `;
      }

      try {
        const apiTracks = await IndianMusicAPI.fetchCategory(category, 28);
        if (apiTracks && apiTracks.length > 0) {
          const apiIds = new Set(apiTracks.map(t => t.id));
          const remaining = State.tracks.filter(t => !apiIds.has(t.id));
          State.tracks = [...apiTracks, ...remaining];
          this.showToast(`Loaded ${apiTracks.length} ${category} songs! 🇮🇳`);
        }
      } catch (err) {
        console.warn('API fetch warning:', err);
      }

      this.renderTrackList();
      this.renderQueue();
    },

    // ========================================================================
    // RENDER SONGS LIST
    // ========================================================================
    renderTrackList() {
      if (!this.dom.songsList) return;
      this.dom.songsList.innerHTML = '';

      let filtered = [];
      const hasSearch = State.searchQuery && State.searchQuery.trim().length > 0;

      if (hasSearch) {
        const qRaw = State.searchQuery.trim().toLowerCase();
        const tokens = qRaw.split(/\s+/).filter(Boolean);
        const allSongs = getAllPreloadedTracks();

        // Search across:
        // 1. Song Name (title)
        // 2. Singer (singer, artist, description)
        // 3. Genre (genre, language, subGenre)
        // 4. Album (album)
        filtered = allSongs.filter(t => {
          const title = (t.title || '').toLowerCase();
          const singer = (t.singer || '').toLowerCase();
          const artist = (t.artist || '').toLowerCase();
          const genre = (t.genre || '').toLowerCase();
          const lang = (t.language || '').toLowerCase();
          const subg = (t.subGenre || '').toLowerCase();
          const album = (t.album || '').toLowerCase();
          const desc = (t.description || '').toLowerCase();

          // Full query match
          if (title.includes(qRaw) || singer.includes(qRaw) || artist.includes(qRaw) ||
              genre.includes(qRaw) || lang.includes(qRaw) || subg.includes(qRaw) ||
              album.includes(qRaw) || desc.includes(qRaw)) {
            return true;
          }

          // Or all tokens match in any field
          return tokens.every(tok =>
            title.includes(tok) || singer.includes(tok) || artist.includes(tok) ||
            genre.includes(tok) || lang.includes(tok) || subg.includes(tok) ||
            album.includes(tok) || desc.includes(tok)
          );
        });

        // Smart ranking:
        filtered.sort((a, b) => {
          const aTitle = (a.title || '').toLowerCase();
          const bTitle = (b.title || '').toLowerCase();
          const aSinger = (a.singer || '').toLowerCase();
          const bSinger = (b.singer || '').toLowerCase();
          const aArtist = (a.artist || '').toLowerCase();
          const bArtist = (b.artist || '').toLowerCase();
          const aGenre = (a.genre || a.language || '').toLowerCase();
          const bGenre = (b.genre || b.language || '').toLowerCase();

          // 1. Exact song title match
          const aTExact = aTitle === qRaw ? 1 : 0;
          const bTExact = bTitle === qRaw ? 1 : 0;
          if (aTExact !== bTExact) return bTExact - aTExact;

          // 2. Song title starts with query
          const aTStarts = aTitle.startsWith(qRaw) ? 1 : 0;
          const bTStarts = bTitle.startsWith(qRaw) ? 1 : 0;
          if (aTStarts !== bTStarts) return bTStarts - aTStarts;

          // 3. Exact Singer match
          const aSExact = aSinger === qRaw || aArtist === qRaw ? 1 : 0;
          const bSExact = bSinger === qRaw || bArtist === qRaw ? 1 : 0;
          if (aSExact !== bSExact) return bSExact - aSExact;

          // 4. Primary singer starts with query
          const aSStarts = aSinger.startsWith(qRaw) || aArtist.startsWith(qRaw) ? 1 : 0;
          const bSStarts = bSinger.startsWith(qRaw) || bArtist.startsWith(qRaw) ? 1 : 0;
          if (aSStarts !== bSStarts) return bSStarts - aSStarts;

          // 5. Short artist length (prefers solo tracks over 50-artist mashups)
          if (aSExact || aSStarts) {
            const aLen = (a.singer || a.artist || '').length;
            const bLen = (b.singer || b.artist || '').length;
            return aLen - bLen;
          }

          // 6. Singer contains query
          const aSMatch = aSinger.includes(qRaw) || aArtist.includes(qRaw) ? 1 : 0;
          const bSMatch = bSinger.includes(qRaw) || bArtist.includes(qRaw) ? 1 : 0;
          if (aSMatch !== bSMatch) return bSMatch - aSMatch;

          // 7. Genre contains query
          const aGMatch = aGenre.includes(qRaw) ? 1 : 0;
          const bGMatch = bGenre.includes(qRaw) ? 1 : 0;
          if (aGMatch !== bGMatch) return bGMatch - aGMatch;

          return 0;
        });

        // Set State.tracks to the filtered search results so click-to-play loads the correct track
        State.tracks = filtered;

        // Render search results header banner
        const searchBanner = document.createElement('div');
        searchBanner.className = 'search-results-banner';
        searchBanner.innerHTML = `
          <div class="search-results-count">🔍 Found <strong>${filtered.length}</strong> tracks for "<em>${State.searchQuery}</em>"</div>
          <div class="search-results-meta">Matched by Singer, Genre & Song Name</div>
        `;
        this.dom.songsList.appendChild(searchBanner);

      } else {
        filtered = State.tracks;
        if (State.activeFilter !== 'all') {
          const filterKey = State.activeFilter.toLowerCase();
          filtered = filtered.filter(t => {
            const g = (t.genre || '').toLowerCase();
            const l = (t.language || '').toLowerCase();
            const a = (t.artist || '').toLowerCase();
            const singer = (t.singer || t.subGenre || '').toLowerCase();
            const id = (t.id || '').toLowerCase();

            // Bollywood section or singer subfield
          if (filterKey === 'bollywood' || filterKey === 'all-bollywood') {
            return g === 'bollywood' || l === 'bollywood' || singer.length > 0 || id.startsWith('bolly-');
          }
          if (filterKey.includes('arijit')) {
            return singer.includes('arijit') || a.includes('arijit') || id.includes('arijit');
          }
          if (filterKey.includes('atif')) {
            return singer.includes('atif') || a.includes('atif') || id.includes('atif');
          }
          if (filterKey.includes('alka') || filterKey.includes('yagnik')) {
            return singer.includes('alka') || a.includes('alka') || a.includes('yagnik') || id.includes('alka');
          }
          if (filterKey.includes('shreya') || filterKey.includes('ghoshal') || filterKey.includes('ghosal')) {
            return singer.includes('shreya') || a.includes('shreya') || a.includes('ghoshal') || a.includes('ghosal') || id.includes('shreya');
          }
          if (filterKey.includes('udit') || filterKey.includes('narayan')) {
            return singer.includes('udit') || a.includes('udit') || a.includes('narayan') || id.includes('udit');
          }
          if (filterKey.includes('sonu') || filterKey.includes('nigam')) {
            return singer.includes('sonu') || a.includes('sonu') || a.includes('nigam') || id.includes('sonu');
          }
          if (filterKey.includes('dadlani') || (filterKey.includes('vishal') && !filterKey.includes('mishra'))) {
            return singer.includes('dadlani') || a.includes('dadlani') || (singer.includes('vishal') && !singer.includes('mishra')) || id.includes('dadlani');
          }
          if (filterKey.includes('sunidhi') || filterKey.includes('chauhan')) {
            return singer.includes('sunidhi') || a.includes('sunidhi') || a.includes('chauhan') || id.includes('sunidhi');
          }
          if (filterKey.includes('armaan') || filterKey.includes('malik')) {
            return singer.includes('armaan') || a.includes('armaan') || id.includes('armaan');
          }
          if (filterKey.includes('mishra') || filterKey.includes('vishal mishra')) {
            return singer.includes('vishal mishra') || a.includes('vishal mishra') || (singer.includes('mishra') && !singer.includes('dadlani')) || id.includes('mishra');
          }
          if (filterKey.includes('jubin') || filterKey.includes('nautiyal')) {
            return singer.includes('jubin') || a.includes('jubin') || a.includes('nautiyal') || id.includes('jubin');
          }
          if (filterKey.includes('ankit') || (filterKey.includes('tiwari') && !filterKey.includes('manoj'))) {
            return singer.includes('ankit') || a.includes('ankit') || a.includes('tiwari') || id.includes('ankit');
          }
          if (filterKey.includes('palak') || filterKey.includes('mucchal') || filterKey.includes('muchhal')) {
            return singer.includes('palak') || a.includes('palak') || a.includes('mucchal') || a.includes('muchhal') || id.includes('palak');
          }
          if (filterKey === 'kk' || filterKey.includes(' kk') || filterKey.startsWith('kk') || filterKey.includes('krishnakumar')) {
            return singer === 'kk' || singer.includes('kk') || a.includes('kk') || a.includes('k.k.') || id.includes('bolly-kk-');
          }

          // Haryanvi section or singer subfield
          if (filterKey === 'haryanvi' || filterKey === 'all-haryanvi') {
            return g === 'haryanvi' || l === 'haryanvi' || isHaryanviSinger(singer) || id.startsWith('haryanvi-') || id.startsWith('dhanda-') || id.startsWith('parta-');
          }
          if (filterKey.includes('masoom') || filterKey.includes('masoon')) {
            return singer.includes('masoom') || a.includes('masoom') || id.includes('masoom');
          }
          if (filterKey.includes('amit saini') || filterKey.includes('rohtakiya')) {
            return singer.includes('amit saini') || a.includes('amit saini') || id.includes('amit-saini');
          }
          if (filterKey.includes('gulzaar') || filterKey.includes('gulzar') || filterKey.includes('chhaniwala') || filterKey.includes('channiwala')) {
            return singer.includes('gulzaar') || a.includes('gulzaar') || singer.includes('gulzar') || a.includes('gulzar') || id.includes('gulzaar');
          }
          if (filterKey.includes('kd ') || filterKey.includes('desi rock') || filterKey === 'kd') {
            return singer.includes('kd ') || singer.includes('desi rock') || a.includes('kd') || id.includes('kd-desi-rock');
          }
          if (filterKey.includes('amanraj') || filterKey.includes('gill')) {
            return singer.includes('amanraj') || a.includes('amanraj') || id.includes('amanraj');
          }
          if (filterKey.includes('surender') || filterKey.includes('surendra') || filterKey.includes('romio')) {
            return singer.includes('surender') || a.includes('surender') || singer.includes('surendra') || id.includes('surender');
          }
          if (filterKey.includes('khasa') || filterKey.includes('chahar') || filterKey.includes('khasa ala char')) {
            return singer.includes('khasa') || a.includes('khasa') || id.includes('khasa');
          }
          if (filterKey.includes('swara') || filterKey.includes('verma')) {
            return singer.includes('swara') || a.includes('swara') || id.includes('swara');
          }
          if (filterKey.includes('renuka') || filterKey.includes('panwar') || filterKey.includes('pawar')) {
            return singer.includes('renuka') || a.includes('renuka') || id.includes('renuka');
          }

          // Punjabi section or singer subfield
          if (filterKey === 'punjabi' || filterKey === 'all-punjabi') {
            return g === 'punjabi' || l === 'punjabi' || isPunjabiSinger(singer) || id.startsWith('punjabi-') || id.startsWith('diljit-') || id.startsWith('sidhu-') || id.startsWith('dhillon-') || id.startsWith('shubh-');
          }
          if (filterKey.includes('sidhu') || filterKey.includes('moose')) {
            return singer.includes('sidhu') || a.includes('sidhu') || a.includes('moose') || id.includes('sidhu');
          }
          if (filterKey.includes('guru') || filterKey.includes('randhawa')) {
            return singer.includes('guru') || a.includes('guru') || a.includes('randhawa') || id.includes('guru');
          }
          if (filterKey.includes('diljit')) {
            return singer.includes('diljit') || a.includes('diljit') || id.includes('diljit');
          }
          if (filterKey.includes('karan') || filterKey.includes('aujla')) {
            return singer.includes('karan') || a.includes('karan') || a.includes('aujla') || id.includes('karan');
          }
          if (filterKey.includes('praak') || filterKey === 'b praak') {
            return singer.includes('praak') || a.includes('praak') || id.includes('praak');
          }
          if (filterKey.includes('gurlez') || filterKey.includes('akhtar') || filterKey.includes('gurlej')) {
            return singer.includes('gurlez') || a.includes('gurlez') || a.includes('gurlej') || id.includes('gurlez');
          }
          if (filterKey.includes('jass') || filterKey.includes('manak')) {
            return singer.includes('jass') || a.includes('jass') || a.includes('manak') || id.includes('jass');
          }
          if (filterKey.includes('jasmine') || filterKey.includes('sandlas') || filterKey.includes('sandles')) {
            return singer.includes('jasmine') || a.includes('jasmine') || a.includes('sandlas') || id.includes('jasmine');
          }
          if (filterKey.includes('parmish') || filterKey.includes('verma')) {
            return singer.includes('parmish') || a.includes('parmish') || id.includes('parmish');
          }
          if (filterKey === 'kaka' || filterKey.includes('kaka')) {
            return singer === 'kaka' || singer.includes('kaka') || a.includes('kaka') || id.includes('kaka');
          }
          if (filterKey.includes('millind') || filterKey.includes('miling') || filterKey.includes('gaba') || filterKey.includes('gaga')) {
            return singer.includes('millind') || a.includes('millind') || a.includes('gaba') || id.includes('millind');
          }
          if (filterKey.includes('harrdy') || filterKey.includes('hardy') || filterKey.includes('sandhu') || filterKey.includes('sindhu')) {
            return singer.includes('harrdy') || a.includes('harrdy') || a.includes('hardy') || id.includes('harrdy');
          }

          // Bhojpuri section or singer subfield
          if (filterKey === 'bhojpuri' || filterKey === 'all-bhojpuri') {
            return g === 'bhojpuri' || l === 'bhojpuri' || isBhojpuriSinger(singer) || id.startsWith('bhojpuri-');
          }
          if (filterKey.includes('pawan')) {
            return singer.includes('pawan') || a.includes('pawan') || id.includes('pawan');
          }
          if (filterKey.includes('khesari') || filterKey.includes('khesarilal')) {
            return singer.includes('khesari') || a.includes('khesari') || id.includes('khesari');
          }
          if (filterKey.includes('shilpi') || filterKey.includes('silpi')) {
            return singer.includes('shilpi') || singer.includes('silpi') || a.includes('shilpi') || id.includes('shilpi');
          }
          if (filterKey.includes('neelkamal')) {
            return singer.includes('neelkamal') || a.includes('neelkamal') || id.includes('neelkamal');
          }
          if (filterKey.includes('purav') || filterKey.includes('jha')) {
            return singer.includes('purav') || a.includes('purav') || id.includes('purav');
          }
          if (filterKey.includes('ritesh') || filterKey.includes('pandey')) {
            return singer.includes('ritesh') || a.includes('ritesh') || a.includes('pandey') || id.includes('ritesh');
          }
          if (filterKey.includes('manoj') || (filterKey.includes('tiwari') && !filterKey.includes('ankit'))) {
            return singer.includes('manoj') || a.includes('manoj') || a.includes('tiwari') || id.includes('manoj');
          }
          if (filterKey.includes('kallu') || filterKey.includes('arvind')) {
            return singer.includes('kallu') || singer.includes('arvind') || a.includes('kallu') || id.includes('kallu');
          }
          if (filterKey.includes('samar')) {
            return singer.includes('samar') || a.includes('samar') || id.includes('samar');
          }
          if (filterKey.includes('nirahua') || filterKey.includes('dinesh')) {
            return singer.includes('dinesh') || singer.includes('nirahua') || a.includes('dinesh') || a.includes('nirahua') || id.includes('dinesh');
          }
          if (filterKey.includes('ankush')) {
            return singer.includes('ankush') || a.includes('ankush') || id.includes('ankush');
          }

          // Desi Hip-Hop / Rap section or singer subfield
          if (filterKey === 'rap' || filterKey === 'all-rap' || filterKey.includes('hip-hop') || filterKey.includes('hip hop')) {
            return g === 'rap' || isRapSinger(singer) || id.startsWith('rap-');
          }
          if (filterKey.includes('divine')) {
            return singer.includes('divine') || a.includes('divine') || id.includes('divine');
          }
          if (filterKey.includes('ikka')) {
            return singer.includes('ikka') || a.includes('ikka') || id.includes('ikka');
          }
          if (filterKey.includes('kr$na') || filterKey.includes('krsna') || filterKey.includes('krishna')) {
            return singer.includes('kr$na') || singer.includes('krsna') || a.includes('kr$na') || a.includes('krsna') || id.includes('kr-na') || id.includes('krsna');
          }
          if (filterKey.includes('seedhe') || filterKey.includes('maut')) {
            return singer.includes('seedhe') || singer.includes('maut') || a.includes('seedhe') || id.includes('seedhe-maut');
          }
          if (filterKey.includes('hanuman') || filterKey.includes('hanumankind')) {
            return singer.includes('hanuman') || a.includes('hanuman') || id.includes('hanumankind');
          }
          if (filterKey.includes('emiway') || filterKey.includes('bantai')) {
            return singer.includes('emiway') || singer.includes('bantai') || a.includes('emiway') || id.includes('emiway');
          }
          if (filterKey.includes('raftaar')) {
            return singer.includes('raftaar') || a.includes('raftaar') || id.includes('raftaar');
          }
          if (filterKey.includes('badshah') || filterKey.includes('baadshah')) {
            return singer.includes('badshah') || a.includes('badshah') || id.includes('badshah');
          }
          if (filterKey.includes('stan')) {
            return singer.includes('stan') || a.includes('stan') || id.includes('mc-stan');
          }
          if (filterKey.includes('dino')) {
            return singer.includes('dino') || a.includes('dino') || id.includes('dino-james');
          }
          if (filterKey.includes('bohemia') || filterKey.includes('bohamia')) {
            return singer.includes('bohemia') || a.includes('bohemia') || id.includes('bohemia');
          }
          if (filterKey === 'bali' || filterKey.includes('bali')) {
            return singer.includes('bali') || a.includes('bali') || id.includes('bali');
          }

          // Neighbour Melodies section or singer subfield
          if (filterKey === 'neighbour' || filterKey === 'all-neighbour') {
            return g === 'neighbour' || l === 'neighbour' || isNeighbourSinger(singer) || id.startsWith('neighbour-');
          }
          if (filterKey === 'aur' || filterKey.includes('aur')) {
            return singer === 'aur' || singer.includes('aur') || a.includes('aur') || id.includes('neighbour-aur-');
          }
          if (filterKey.includes('hannan') || filterKey.includes('hannah')) {
            return singer.includes('hannan') || singer.includes('hannah') || a.includes('hannan') || id.includes('abdul-hannan');
          }
          if (filterKey.includes('kaifi') || filterKey.includes('khalid') || filterKey.includes('khalil')) {
            return singer.includes('kaifi') || singer.includes('khalil') || singer.includes('khalid') || a.includes('kaifi') || id.includes('kaifi-khalil');
          }
          if (filterKey.includes('talha') || filterKey.includes('anjum')) {
            return singer.includes('talha') || singer.includes('anjum') || a.includes('talha') || id.includes('talha-anjum');
          }
          if (filterKey.includes('rahat')) {
            return singer.includes('rahat') || a.includes('rahat') || id.includes('rahat-fateh');
          }
          if (filterKey.includes('nusrat')) {
            return singer.includes('nusrat') || a.includes('nusrat') || id.includes('nusrat-fateh');
          }
          if (filterKey.includes('mustafa') || filterKey.includes('zahid') || filterKey.includes('jahid')) {
            return singer.includes('mustafa') || singer.includes('zahid') || singer.includes('jahid') || a.includes('mustafa') || id.includes('mustafa-zahid');
          }
          if (filterKey.includes('afusic')) {
            return singer.includes('afusic') || a.includes('afusic') || id.includes('afusic');
          }
          if (filterKey.includes('asim') || filterKey.includes('amin azhar')) {
            return singer.includes('asim') || singer.includes('amin azhar') || a.includes('asim azhar') || id.includes('asim-azhar');
          }

          // Old is Gold section or singer subfield
          if (filterKey === 'old is gold' || filterKey === 'all-oldisgold' || filterKey === 'oldisgold') {
            return g === 'old is gold' || l.includes('old is gold') || isOldIsGoldSinger(singer) || id.startsWith('oldisgold-');
          }
          if (filterKey.includes('kishore')) {
            return singer.includes('kishore') || a.includes('kishore') || id.includes('kishore-kumar');
          }
          if (filterKey.includes('mukesh')) {
            return singer.includes('mukesh') || a.includes('mukesh') || id.includes('mukesh');
          }
          if (filterKey.includes('manna') || (filterKey.includes('dey') && !filterKey.includes('pandey'))) {
            return singer.includes('manna') || a.includes('manna') || a.includes('dey') || id.includes('manna-dey');
          }
          if (filterKey.includes('rafi')) {
            return singer.includes('rafi') || a.includes('rafi') || id.includes('mohammad-rafi');
          }
          if (filterKey.includes('talat')) {
            return singer.includes('talat') || a.includes('talat') || id.includes('talat-mahmood');
          }
          if (filterKey.includes('hemant')) {
            return singer.includes('hemant') || a.includes('hemant') || id.includes('hemant-kumar');
          }
          if (filterKey.includes('bhupinder')) {
            return singer.includes('bhupinder') || a.includes('bhupinder') || id.includes('bhupinder-singh');
          }
          if (filterKey.includes('shamshad') || filterKey.includes('shamsad')) {
            return singer.includes('shamshad') || singer.includes('shamsad') || a.includes('shamshad') || id.includes('shamshad-begum');
          }
          if (filterKey.includes('mahendra')) {
            return singer.includes('mahendra') || a.includes('mahendra') || id.includes('mahendra-kapoor');
          }
          if (filterKey.includes('asha') || filterKey.includes('bhosle')) {
            return singer.includes('asha') || a.includes('asha') || a.includes('bhosle') || id.includes('asha-bhosle');
          }
          if (filterKey.includes('geeta')) {
            return singer.includes('geeta') || a.includes('geeta') || a.includes('dutt') || id.includes('geeta-dutt');
          }
          if (filterKey.includes('usha')) {
            return singer.includes('usha') || a.includes('usha') || id.includes('usha-mangeshkar');
          }
          if (filterKey.includes('lata')) {
            return singer.includes('lata') || a.includes('lata') || id.includes('lata-mangeshkar');
          }

          // Better OG section or singer subfield
          if (filterKey === 'better og' || filterKey === 'all-betterog' || filterKey === 'betterog') {
            return g === 'better og' || l.includes('better og') || isBetterOGSinger(singer) || id.startsWith('betterog-');
          }
          if (filterKey.includes('shankar') || filterKey.includes('mahadevan') || filterKey.includes('sankar')) {
            return singer.includes('shankar') || a.includes('shankar') || id.includes('shankar-mahadevan');
          }
          if (filterKey.includes('kailash') || filterKey.includes('kher')) {
            return singer.includes('kailash') || a.includes('kailash') || id.includes('kailash-kher');
          }
          if (filterKey.includes('hariharan')) {
            return singer.includes('hariharan') || a.includes('hariharan') || id.includes('hariharan');
          }
          if (filterKey.includes('rahman') || filterKey.includes('rehman')) {
            return singer.includes('rahman') || a.includes('rahman') || id.includes('ar-rahman');
          }
          if (filterKey.includes('sukhwinder')) {
            return singer.includes('sukhwinder') || a.includes('sukhwinder') || id.includes('sukhwinder-singh');
          }

          // Superstar Artists
          if (filterKey.includes('dhanda')) {
            return g.includes('dhanda') || a.includes('dhanda') || id.startsWith('dhanda-');
          }
          if (filterKey.includes('sumit') || filterKey.includes('parta')) {
            return g.includes('sumit') || a.includes('sumit') || a.includes('parta') || id.startsWith('parta-');
          }
          if (filterKey.includes('honey')) {
            return g.includes('honey') || a.includes('honey') || id.includes('honey');
          }
          if (filterKey.includes('dhillon')) {
            return g.includes('dhillon') || a.includes('dhillon') || id.startsWith('dhillon-');
          }
          if (filterKey.includes('shubh')) {
            return g.includes('shubh') || a.includes('shubh') || id.startsWith('shubh-');
          }
          if (filterKey.includes('anuv') || filterKey.includes('anu')) {
            return g.includes('anuv') || a.includes('anuv') || a.includes('jain') || id.startsWith('anuv-');
          }
          return g === filterKey || l === filterKey || g.includes(filterKey) || a.includes(filterKey) || singer.includes(filterKey);
        });
      }
    }

      if (filtered.length === 0) {
        this.dom.songsList.innerHTML = `
          <div style="text-align: center; padding: 40px; color: var(--text-muted);">
            No tracks found matching "<strong>${State.searchQuery || State.activeFilter}</strong>".
            <div style="margin-top: 14px; display: flex; gap: 8px; justify-content: center; flex-wrap: wrap;">
              <button class="btn-header-pill btn-cta-pulse" onclick="(window.PureBeatsApp||window.PulseApp).UI.loadCategoryFromAPI('all')">
                🔥 All Superstars Hits
              </button>
              <button class="btn-header-pill" onclick="(window.PureBeatsApp||window.PulseApp).UI.loadCategoryFromAPI('Punjabi')">
                🥁 All Punjabi (300)
              </button>
              <button class="btn-header-pill" onclick="(window.PureBeatsApp||window.PulseApp).UI.loadCategoryFromAPI('Karan Aujla')">
                ⚡ Karan Aujla (25)
              </button>
              <button class="btn-header-pill" onclick="(window.PureBeatsApp||window.PulseApp).UI.loadCategoryFromAPI('Guru Randhawa')">
                🌟 Guru Randhawa (25)
              </button>
              <button class="btn-header-pill" onclick="(window.PureBeatsApp||window.PulseApp).UI.loadCategoryFromAPI('Sidhu Moose Wala')">
                🦅 Sidhu Moose Wala (25)
              </button>
              <button class="btn-header-pill" onclick="(window.PureBeatsApp||window.PulseApp).UI.loadCategoryFromAPI('Haryanvi')">
                🌾 All Haryanvi (300)
              </button>
              <button class="btn-header-pill" onclick="(window.PureBeatsApp||window.PulseApp).UI.loadCategoryFromAPI('Bollywood')">
                🎬 All Bollywood (278)
              </button>
              <button class="btn-header-pill" onclick="(window.PureBeatsApp||window.PulseApp).UI.loadCategoryFromAPI('Neighbour')">
                🌙 All Neighbour (223)
              </button>
              <button class="btn-header-pill" onclick="(window.PureBeatsApp||window.PulseApp).UI.loadCategoryFromAPI('AUR')">
                💫 AUR (25)
              </button>
              <button class="btn-header-pill" onclick="(window.PureBeatsApp||window.PulseApp).UI.loadCategoryFromAPI('Old is Gold')">
                📻 All Old is Gold (560)
              </button>
              <button class="btn-header-pill" onclick="(window.PureBeatsApp||window.PulseApp).UI.loadCategoryFromAPI('Kishore Kumar')">
                🎙️ Kishore Kumar (40)
              </button>
            </div>
          </div>
        `;
        return;
      }

      // Progressive chunked rendering using DocumentFragment for maximum performance
      const renderChunk = (startIndex, chunkSize) => {
        const fragment = document.createDocumentFragment();
        const endIndex = Math.min(startIndex + chunkSize, filtered.length);

        for (let idx = startIndex; idx < endIndex; idx++) {
          const track = filtered[idx];
          const realIndex = hasSearch ? idx : State.tracks.findIndex(t => t.id === track.id);
          const isPlayingThis = State.isPlaying && State.currentTrackIndex === realIndex;
          const isLiked = State.likedTrackIds.has(track.id);

          const row = document.createElement('div');
          row.className = `song-row ${isPlayingThis ? 'playing' : ''}`;
          row.dataset.index = realIndex;

          const displayTag = track.singer || track.subGenre || track.genre || 'Bollywood';
          const tagSlug = displayTag.toLowerCase().replace(/[^a-z0-9]+/g, '-');

          row.innerHTML = `
            <div class="song-rank">
              <span class="song-rank-num">${realIndex + 1}</span>
              <span class="song-rank-play">▶</span>
            </div>
            <div class="song-thumb-wrap">
              <img src="${track.cover}" alt="${track.title}" loading="lazy" decoding="async" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&auto=format&fit=crop';"/>
              <div class="song-mini-wave">
                <span></span><span></span><span></span><span></span>
              </div>
            </div>
            <div class="song-info">
              <span class="song-title">
                ${track.title}
                <span class="song-lang-tag tag-${tagSlug}">${displayTag}</span>
              </span>
              <div class="song-artist-line">
                <span class="song-artist">${track.artist}</span>
                ${track.singer ? `<span class="song-singer-desc">🎤 Singer: <strong>${track.singer}</strong></span>` : ''}
              </div>
            </div>
            <div class="song-album">${track.album}</div>
            <div class="song-plays">${track.plays}</div>
            <div class="song-duration">${track.duration}</div>
            <button class="song-like-btn ${isLiked ? 'liked' : ''}" data-id="${track.id}" title="Like / Favorite">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
          `;

          row.addEventListener('click', (e) => {
            if (e.target.closest('.song-like-btn')) return;
            this.loadTrack(realIndex, true);
          });

          const likeBtn = row.querySelector('.song-like-btn');
          likeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleLike(track.id);
          });

          fragment.appendChild(row);
        }

        this.dom.songsList.appendChild(fragment);

        if (endIndex < filtered.length) {
          requestAnimationFrame(() => renderChunk(endIndex, 80));
        }
      };

      renderChunk(0, 50);
    },

    highlightActiveSongRow() {
      const rows = document.querySelectorAll('.song-row');
      rows.forEach(r => {
        const idx = parseInt(r.dataset.index, 10);
        r.classList.toggle('playing', idx === State.currentTrackIndex && State.isPlaying);
      });
    },

    // ========================================================================
    // RENDER PLAYLIST CARDS
    // ========================================================================
    renderPlaylists() {
      if (!this.dom.playlistsGrid) return;
      this.dom.playlistsGrid.innerHTML = '';

      PLAYLISTS.forEach((pl, i) => {
        const card = document.createElement('div');
        card.className = 'music-card';
        card.innerHTML = `
          <div class="card-artwork-box">
            <img src="${pl.cover}" alt="${pl.name}" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&auto=format&fit=crop';"/>
            <button class="card-play-btn" title="Play Playlist">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </button>
          </div>
          <div class="card-title">${pl.name}</div>
          <div class="card-subtitle">${pl.count} Tracks • ${pl.tag}</div>
        `;

        card.addEventListener('click', async () => {
          if (pl.category) {
            await this.loadCategoryFromAPI(pl.category);
            this.loadTrack(0, true);
            this.showToast(`Playing ${pl.name}! 🚀`);
          } else {
            this.loadTrack(i % State.tracks.length, true);
            this.showToast(`Playing Playlist: ${pl.name}`);
          }
        });

        this.dom.playlistsGrid.appendChild(card);
      });
    },

    // ========================================================================
    // LIKES & STORAGE
    // ========================================================================
    toggleLike(trackId) {
      if (State.likedTrackIds.has(trackId)) {
        State.likedTrackIds.delete(trackId);
        this.showToast('Removed from Liked Songs');
      } else {
        State.likedTrackIds.add(trackId);
        this.showToast('Added to Liked Songs ❤️');
      }
      localStorage.setItem('purebeats_liked', JSON.stringify([...State.likedTrackIds]));
      localStorage.setItem('pulse_liked', JSON.stringify([...State.likedTrackIds]));
      this.updateLikeButton(trackId);
      this.renderTrackList();
      const badge = document.getElementById('liked-count-badge');
      if (badge) badge.textContent = State.likedTrackIds.size;
    },

    updateLikeButton(trackId) {
      const isLiked = State.likedTrackIds.has(trackId);
      if (this.dom.playerLikeBtn) {
        this.dom.playerLikeBtn.classList.toggle('liked', isLiked);
        const svg = this.dom.playerLikeBtn.querySelector('svg');
        if (svg) {
          svg.setAttribute('fill', isLiked ? 'var(--accent-pink)' : 'none');
          svg.setAttribute('stroke', isLiked ? 'var(--accent-pink)' : 'currentColor');
        }
      }
    },

    // ========================================================================
    // SYNCHRONIZED LYRICS
    // ========================================================================
    renderLyrics(track) {
      if (!this.dom.lyricsContainer) return;
      this.dom.lyricsContainer.innerHTML = '';

      if (!track.lyrics || track.lyrics.length === 0) {
        this.dom.lyricsContainer.innerHTML = `<div class="lyrics-line active">Instrumental or lyrics unavailable for this track</div>`;
        return;
      }

      track.lyrics.forEach((line) => {
        const p = document.createElement('p');
        p.className = 'lyrics-line';
        p.dataset.time = line.time;
        p.textContent = line.text;
        p.addEventListener('click', () => {
          Engine.seek(line.time);
          if (!State.isPlaying) Engine.play();
        });
        this.dom.lyricsContainer.appendChild(p);
      });
    },

    updateActiveLyricLine(currentTime) {
      if (!this.dom.lyricsContainer) return;
      const lines = this.dom.lyricsContainer.querySelectorAll('.lyrics-line');
      let activeIndex = -1;

      lines.forEach((line, index) => {
        const lineTime = parseFloat(line.dataset.time);
        if (currentTime >= lineTime) {
          activeIndex = index;
        }
      });

      lines.forEach((line, index) => {
        const isActive = index === activeIndex;
        line.classList.toggle('active', isActive);
        if (isActive && this.dom.lyricsDrawer && this.dom.lyricsDrawer.classList.contains('open')) {
          line.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });
    },

    // ========================================================================
    // QUEUE
    // ========================================================================
    renderQueue() {
      if (!this.dom.queueContainer) return;
      this.dom.queueContainer.innerHTML = '';

      State.tracks.forEach((track, index) => {
        const isCurrent = index === State.currentTrackIndex;
        const item = document.createElement('div');
        item.className = `song-row ${isCurrent ? 'playing' : ''}`;
        item.style.gridTemplateColumns = '32px 40px 1fr 40px';
        item.innerHTML = `
          <div class="song-rank">${index + 1}</div>
          <div class="song-thumb-wrap" style="width: 36px; height: 36px;">
            <img src="${track.cover}" alt="${track.title}"/>
          </div>
          <div class="song-info">
            <span class="song-title" style="font-size: 13px;">${track.title}</span>
            <span class="song-artist" style="font-size: 11px;">${track.artist}</span>
          </div>
          <div class="song-duration">${track.duration}</div>
        `;
        item.addEventListener('click', () => this.loadTrack(index, true));
        this.dom.queueContainer.appendChild(item);
      });
    },

    // ========================================================================
    // LOCAL AUDIO IMPORT (USER UPLOAD)
    // ========================================================================
    initLocalAudioDrop() {
      const fileInput = this.dom.fileInput;

      const handleFiles = (files) => {
        Array.from(files).forEach((file) => {
          if (!file.type.startsWith('audio/')) return;
          const objectUrl = URL.createObjectURL(file);
          const cleanName = file.name.replace(/\.[^/.]+$/, '');
          const newTrack = {
            id: 'local-' + Date.now() + Math.random().toString(36).substring(2, 6),
            title: cleanName,
            artist: 'Local Import',
            album: 'My Files',
            genre: 'Uploaded',
            plays: '1',
            duration: '--:--',
            durationSec: 180,
            cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600&auto=format&fit=crop',
            src: objectUrl,
            lyrics: [
              { time: 0, text: `♪ Now Playing Local Audio: ${cleanName} ♪` }
            ]
          };

          State.tracks.unshift(newTrack);
          this.showToast(`Imported "${cleanName}" to PureBeats!`);
        });

        this.renderTrackList();
        this.loadTrack(0, true);
      };

      if (fileInput) {
        fileInput.addEventListener('change', (e) => handleFiles(e.target.files));
      }

      window.addEventListener('dragover', (e) => e.preventDefault());
      window.addEventListener('drop', (e) => {
        e.preventDefault();
        if (e.dataTransfer && e.dataTransfer.files.length > 0) {
          handleFiles(e.dataTransfer.files);
        }
      });
    },

    // ========================================================================
    // EVENT LISTENERS & SHORTCUTS
    // ========================================================================
    attachEventListeners() {
      // Play/Pause Main
      if (this.dom.playPauseBtn) {
        this.dom.playPauseBtn.addEventListener('click', () => this.togglePlay());
      }
      const heroPlay = document.getElementById('btn-hero-play');
      if (heroPlay) {
        heroPlay.addEventListener('click', () => this.togglePlay());
      }

      // Prev/Next
      if (this.dom.prevBtn) this.dom.prevBtn.addEventListener('click', () => this.prevTrack());
      if (this.dom.nextBtn) this.dom.nextBtn.addEventListener('click', () => this.nextTrack());

      // Shuffle & Repeat
      if (this.dom.shuffleBtn) {
        this.dom.shuffleBtn.addEventListener('click', () => {
          State.shuffle = !State.shuffle;
          this.dom.shuffleBtn.classList.toggle('active', State.shuffle);
          this.showToast(`Shuffle ${State.shuffle ? 'Enabled' : 'Disabled'}`);
        });
      }
      if (this.dom.repeatBtn) {
        this.dom.repeatBtn.addEventListener('click', () => {
          if (State.repeatMode === 'all') {
            State.repeatMode = 'one';
            this.dom.repeatBtn.classList.add('active');
            this.showToast('Repeat One Track');
          } else if (State.repeatMode === 'one') {
            State.repeatMode = 'off';
            this.dom.repeatBtn.classList.remove('active');
            this.showToast('Repeat Off');
          } else {
            State.repeatMode = 'all';
            this.dom.repeatBtn.classList.add('active');
            this.showToast('Repeat All Tracks');
          }
        });
      }

      // Seek Track (Click & Drag/Scrub)
      if (this.dom.progressTrack) {
        let isSeeking = false;
        const doSeek = (e) => {
          const rect = this.dom.progressTrack.getBoundingClientRect();
          const clickPos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
          const total = Engine.audio.duration || State.tracks[State.currentTrackIndex]?.durationSec || 180;
          Engine.seek(clickPos * total);
          if (this.dom.progressFill) {
            this.dom.progressFill.style.width = `${clickPos * 100}%`;
          }
          if (this.dom.timeCurrent) {
            this.dom.timeCurrent.textContent = this.formatTime(clickPos * total);
          }
        };

        this.dom.progressTrack.addEventListener('mousedown', (e) => {
          isSeeking = true;
          doSeek(e);
        });

        window.addEventListener('mousemove', (e) => {
          if (isSeeking) doSeek(e);
        });

        window.addEventListener('mouseup', () => {
          isSeeking = false;
        });

        this.dom.progressTrack.addEventListener('click', (e) => doSeek(e));
      }

      // Volume Slider
      if (this.dom.volumeSlider) {
        this.dom.volumeSlider.value = State.volume;
        this.dom.volumeSlider.addEventListener('input', (e) => {
          Engine.setVolume(parseFloat(e.target.value));
        });
      }
      if (this.dom.volumeBtn) {
        this.dom.volumeBtn.addEventListener('click', () => {
          State.isMuted = !State.isMuted;
          Engine.updateVolume();
          this.dom.volumeBtn.classList.toggle('active', State.isMuted);
          this.showToast(State.isMuted ? 'Muted' : 'Unmuted');
        });
      }

      // Player Dock Like button
      if (this.dom.playerLikeBtn) {
        this.dom.playerLikeBtn.addEventListener('click', () => {
          const currentId = State.tracks[State.currentTrackIndex].id;
          this.toggleLike(currentId);
        });
      }

      // Search Filter: Instant search across Singer, Genre, and Song Names + Indian Music API
      let searchDebounceTimer = null;
      const clearBtn = document.getElementById('btn-search-clear');

      if (this.dom.searchInput) {
        this.dom.searchInput.addEventListener('input', (e) => {
          const query = e.target.value.trim();
          State.searchQuery = query;

          if (clearBtn) {
            clearBtn.style.display = query.length > 0 ? 'flex' : 'none';
          }

          if (query.length > 0) {
            this.renderTrackList();
            this.renderQueue();

            // Bring trending section into view
            const trendingSec = document.getElementById('trending');
            if (trendingSec) {
              const rect = trendingSec.getBoundingClientRect();
              if (rect.top > window.innerHeight - 80 || rect.bottom < 80) {
                trendingSec.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
              }
            }
          } else {
            this.loadCategoryFromAPI(State.activeFilter || 'all', false);
          }

          clearTimeout(searchDebounceTimer);
          if (query.length >= 3) {
            searchDebounceTimer = setTimeout(async () => {
              try {
                const apiResults = await IndianMusicAPI.searchLive(query, 24);
                if (apiResults && apiResults.length > 0 && State.searchQuery === query) {
                  const seenIds = new Set(State.tracks.map(t => t.id));
                  const newFromApi = apiResults.filter(t => !seenIds.has(t.id));
                  if (newFromApi.length > 0) {
                    State.tracks = [...State.tracks, ...newFromApi];
                    this.renderTrackList();
                  }
                }
              } catch (err) {
                console.warn('Live API search notice:', err);
              }
            }, 450);
          }
        });
      }

      if (clearBtn && this.dom.searchInput) {
        clearBtn.addEventListener('click', () => {
          this.dom.searchInput.value = '';
          State.searchQuery = '';
          clearBtn.style.display = 'none';
          this.loadCategoryFromAPI(State.activeFilter || 'all', false);
        });
      }

      // Genre & Language Chips
      if (this.dom.genreChips) {
        this.dom.genreChips.forEach(chip => {
          chip.addEventListener('click', () => {
            const genre = chip.dataset.genre || 'all';
            this.loadCategoryFromAPI(genre);
          });
        });
      }

      // Bollywood, Haryanvi, Punjabi, Bhojpuri, Rap, Neighbour & Old is Gold Singer Sub-Fields Chips (Horizontal Bar)
      document.querySelectorAll('.singer-chip').forEach(chip => {
        chip.addEventListener('click', () => {
          const singer = chip.dataset.singer || 'all';
          if (singer === 'all-bollywood') {
            this.loadCategoryFromAPI('Bollywood');
          } else if (singer === 'all-haryanvi') {
            this.loadCategoryFromAPI('Haryanvi');
          } else if (singer === 'all-punjabi') {
            this.loadCategoryFromAPI('Punjabi');
          } else if (singer === 'all-bhojpuri') {
            this.loadCategoryFromAPI('Bhojpuri');
          } else if (singer === 'all-rap') {
            this.loadCategoryFromAPI('Rap');
          } else if (singer === 'all-neighbour') {
            this.loadCategoryFromAPI('Neighbour');
          } else if (singer === 'all-oldisgold') {
            this.loadCategoryFromAPI('Old is Gold');
          } else if (singer === 'all-betterog') {
            this.loadCategoryFromAPI('Better OG');
          } else {
            this.loadCategoryFromAPI(singer);
          }
        });
      });

      // Sidebar Indian Language & Genre Navigation Items (Click to Open/Close Genre Description & Singers)
      const dropdownMap = {
        'Bollywood': 'nav-bollywood-dropdown',
        'Haryanvi': 'nav-haryanvi-dropdown',
        'Punjabi': 'nav-punjabi-dropdown',
        'Bhojpuri': 'nav-bhojpuri-dropdown',
        'Rap': 'nav-rap-dropdown',
        'Neighbour': 'nav-neighbour-dropdown',
        'Old is Gold': 'nav-oldisgold-dropdown',
        'Better OG': 'nav-betterog-dropdown'
      };

      document.querySelectorAll('.btn-lang-nav').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const lang = btn.dataset.lang;
          const targetDropdownId = dropdownMap[lang];

          if (targetDropdownId) {
            const dropdown = document.getElementById(targetDropdownId);
            if (dropdown) {
              const isOpen = dropdown.classList.contains('open');
              if (isOpen) {
                // Clicking an open genre closes its description card and singer list
                dropdown.classList.remove('open');
                this.showToast(`Closed ${lang} details`);
                return;
              } else {
                // Clicking a closed genre closes other genres and opens this genre's description and singers
                document.querySelectorAll('.nav-item-dropdown').forEach(d => {
                  if (d !== dropdown) d.classList.remove('open');
                });
                dropdown.classList.add('open');
                this.loadCategoryFromAPI(lang, true, false);
                return;
              }
            }
          }

          // Superstar artist buttons without dropdown (e.g., Dhanda Nyoliwala, Diljit Dosanjh, etc.)
          this.loadCategoryFromAPI(lang, true, true);
        });
      });

      // Also allow clicking directly on genre description card to close it
      document.querySelectorAll('.genre-sidebar-desc-card').forEach(card => {
        card.style.cursor = 'pointer';
        card.setAttribute('title', 'Click to close');
        card.addEventListener('click', (e) => {
          e.stopPropagation();
          const parentDropdown = card.closest('.nav-item-dropdown');
          if (parentDropdown) {
            parentDropdown.classList.remove('open');
          }
        });
      });

      // Sidebar Singer Sub-Items (Dropdown Menu)
      document.querySelectorAll('.btn-singer-nav').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const singer = btn.dataset.singer || 'all';
          if (singer === 'all-bollywood') {
            this.loadCategoryFromAPI('Bollywood');
          } else if (singer === 'all-haryanvi') {
            this.loadCategoryFromAPI('Haryanvi');
          } else if (singer === 'all-punjabi') {
            this.loadCategoryFromAPI('Punjabi');
          } else if (singer === 'all-bhojpuri') {
            this.loadCategoryFromAPI('Bhojpuri');
          } else if (singer === 'all-rap') {
            this.loadCategoryFromAPI('Rap');
          } else if (singer === 'all-neighbour') {
            this.loadCategoryFromAPI('Neighbour');
          } else if (singer === 'all-oldisgold') {
            this.loadCategoryFromAPI('Old is Gold');
          } else if (singer === 'all-betterog') {
            this.loadCategoryFromAPI('Better OG');
          } else {
            this.loadCategoryFromAPI(singer);
          }
        });
      });

      // ======================================================================
      // MULTI-DEVICE MOBILE SIDEBAR DRAWER TOGGLE & OVERLAY
      // ======================================================================
      const btnMobileMenu = document.getElementById('btn-mobile-menu-toggle');
      const mobileOverlay = document.getElementById('mobile-sidebar-overlay');
      const sidebarEl = document.querySelector('.sidebar');

      const toggleMobileSidebar = (forceClose = false) => {
        if (!sidebarEl) return;
        const shouldOpen = forceClose ? false : !sidebarEl.classList.contains('mobile-open');
        sidebarEl.classList.toggle('mobile-open', shouldOpen);
        if (btnMobileMenu) btnMobileMenu.classList.toggle('active', shouldOpen);
        if (mobileOverlay) mobileOverlay.classList.toggle('active', shouldOpen);
        document.body.style.overflow = shouldOpen ? 'hidden' : '';
      };

      if (btnMobileMenu) {
        btnMobileMenu.addEventListener('click', (e) => {
          e.stopPropagation();
          toggleMobileSidebar();
        });
      }
      if (mobileOverlay) {
        mobileOverlay.addEventListener('click', () => toggleMobileSidebar(true));
      }

      // Auto-close mobile drawer when any link, singer, or filter is tapped on mobile/tablet
      document.querySelectorAll('.sidebar a, .btn-lang-nav, .btn-singer-nav, .singer-chip, .genre-chip').forEach(el => {
        el.addEventListener('click', () => {
          if (window.innerWidth <= 900) {
            toggleMobileSidebar(true);
          }
        });
      });

      // ======================================================================
      // SIDEBAR SINGER HOVER PREVIEW (HOVER OPENS SINGER'S SONGS OVER MAIN PAGE)
      // ======================================================================
      let sidebarHoverDebounceTimer = null;
      let lastHoverTarget = null;

      const triggerSingerHoverPreview = (targetSinger, buttonEl) => {
        if (!targetSinger || targetSinger === lastHoverTarget) return;

        clearTimeout(sidebarHoverDebounceTimer);
        sidebarHoverDebounceTimer = setTimeout(() => {
          lastHoverTarget = targetSinger;

          // Highlight hovered item in sidebar
          document.querySelectorAll('.btn-singer-nav, .btn-lang-nav, .singer-chip').forEach(el => el.classList.remove('hover-preview'));
          if (buttonEl) buttonEl.classList.add('hover-preview');

          // Reset search query if active so hovered singer's tracks are visible cleanly
          if (State.searchQuery) {
            State.searchQuery = '';
            if (this.dom.searchInput) this.dom.searchInput.value = '';
            const clearBtn = document.getElementById('btn-search-clear');
            if (clearBtn) clearBtn.style.display = 'none';
          }

          let categoryToLoad = targetSinger;
          if (targetSinger === 'all-bollywood') categoryToLoad = 'Bollywood';
          else if (targetSinger === 'all-haryanvi') categoryToLoad = 'Haryanvi';
          else if (targetSinger === 'all-punjabi') categoryToLoad = 'Punjabi';
          else if (targetSinger === 'all-bhojpuri') categoryToLoad = 'Bhojpuri';
          else if (targetSinger === 'all-rap') categoryToLoad = 'Rap';
          else if (targetSinger === 'all-neighbour') categoryToLoad = 'Neighbour';
          else if (targetSinger === 'all-oldisgold') categoryToLoad = 'Old is Gold';
          else if (targetSinger === 'all-betterog') categoryToLoad = 'Better OG';

          // Load that singer's songs over the main page!
          this.loadCategoryFromAPI(categoryToLoad, false);

          // Update Hero Banner text
          const heroTitle = document.getElementById('hero-banner-title');
          const heroDesc = document.getElementById('hero-banner-desc');
          if (heroTitle) heroTitle.textContent = `🎤 ${categoryToLoad} — Studio Collection`;
          if (heroDesc) heroDesc.textContent = `Browsing ${State.tracks.length} master songs by ${categoryToLoad}. Hovering over sidebar singer opened songs over main page!`;

          // Show floating pill notification
          this.showSidebarHoverPill(categoryToLoad, State.tracks.length);

          // Scroll main content smoothly to the songs list if needed
          const trendingSec = document.getElementById('trending');
          if (trendingSec) {
            const rect = trendingSec.getBoundingClientRect();
            if (rect.top > window.innerHeight - 100 || rect.bottom < 100) {
              trendingSec.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
          }
        }, 90);
      };

      // Hover on sidebar singer sub-items
      document.querySelectorAll('.btn-singer-nav').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
          const singer = btn.dataset.singer;
          if (singer) triggerSingerHoverPreview(singer, btn);
        });
      });

      // Hover on sidebar superstar artists (skip genre dropdown headers so hovering doesn't trigger unexpectedly)
      document.querySelectorAll('.btn-lang-nav').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
          const lang = btn.dataset.lang;
          if (dropdownMap[lang]) return; // Only open/close genre descriptions by clicking!
          if (lang) triggerSingerHoverPreview(lang, btn);
        });
      });

      // Hover on horizontal subfields singer chips
      document.querySelectorAll('.singer-chip').forEach(chip => {
        chip.addEventListener('mouseenter', () => {
          const singer = chip.dataset.singer;
          if (singer) triggerSingerHoverPreview(singer, chip);
        });
      });

      // Clear hover-preview highlight when mouse leaves sidebar
      const sidebarNav = document.querySelector('.app-sidebar');
      if (sidebarNav) {
        sidebarNav.addEventListener('mouseleave', () => {
          document.querySelectorAll('.btn-singer-nav, .btn-lang-nav').forEach(el => el.classList.remove('hover-preview'));
          lastHoverTarget = null;
        });
      }

      // Drawer Toggles
      if (this.dom.btnLyricsToggle && this.dom.lyricsDrawer) {
        this.dom.btnLyricsToggle.addEventListener('click', () => {
          this.dom.lyricsDrawer.classList.toggle('open');
          if (this.dom.queueDrawer) this.dom.queueDrawer.classList.remove('open');
        });
      }
      if (this.dom.btnQueueToggle && this.dom.queueDrawer) {
        this.dom.btnQueueToggle.addEventListener('click', () => {
          this.dom.queueDrawer.classList.toggle('open');
          if (this.dom.lyricsDrawer) this.dom.lyricsDrawer.classList.remove('open');
        });
      }
      document.querySelectorAll('.btn-drawer-close').forEach(btn => {
        btn.addEventListener('click', () => {
          if (this.dom.lyricsDrawer) this.dom.lyricsDrawer.classList.remove('open');
          if (this.dom.queueDrawer) this.dom.queueDrawer.classList.remove('open');
        });
      });

      // Equalizer Modal
      if (this.dom.btnEqToggle && this.dom.eqModal) {
        this.dom.btnEqToggle.addEventListener('click', () => {
          this.dom.eqModal.classList.add('open');
        });
      }
      const btnSidebarEq = document.getElementById('btn-sidebar-eq');
      if (btnSidebarEq && this.dom.eqModal) {
        btnSidebarEq.addEventListener('click', () => {
          this.dom.eqModal.classList.add('open');
        });
      }

      // Sidebar Liked Songs filter
      const likedNav = document.querySelector('a[href="#liked"]');
      if (likedNav) {
        likedNav.addEventListener('click', (e) => {
          e.preventDefault();
          State.activeFilter = 'all';
          State.searchQuery = '';
          const likedOnly = State.tracks.filter(t => State.likedTrackIds.has(t.id));
          if (likedOnly.length === 0) {
            UI.showToast('No liked songs yet! Click ❤️ on any track.');
          } else {
            UI.showToast(`Showing ${likedOnly.length} Liked Songs`);
          }
          UI.dom.songsList.innerHTML = '';
          likedOnly.forEach(track => {
            const realIndex = State.tracks.findIndex(t => t.id === track.id);
            const isPlayingThis = State.isPlaying && State.currentTrackIndex === realIndex;
            const row = document.createElement('div');
            row.className = `song-row ${isPlayingThis ? 'playing' : ''}`;
            row.dataset.index = realIndex;
            row.innerHTML = `
              <div class="song-rank">
                <span class="song-rank-num">${realIndex + 1}</span>
                <span class="song-rank-play">▶</span>
              </div>
              <div class="song-thumb-wrap">
                <img src="${track.cover}" alt="${track.title}"/>
                <div class="song-mini-wave"><span></span><span></span><span></span><span></span></div>
              </div>
              <div class="song-info">
                <span class="song-title">${track.title}</span>
                <span class="song-artist">${track.artist}</span>
              </div>
              <div class="song-album">${track.album}</div>
              <div class="song-plays">${track.plays}</div>
              <div class="song-duration">${track.duration}</div>
              <button class="song-like-btn liked" data-id="${track.id}" title="Unlike">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="var(--accent-pink)" fill="var(--accent-pink)">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>
            `;
            row.addEventListener('click', (ev) => {
              if (ev.target.closest('.song-like-btn')) return;
              UI.loadTrack(realIndex, true);
            });
            row.querySelector('.song-like-btn').addEventListener('click', (ev) => {
              ev.stopPropagation();
              UI.toggleLike(track.id);
            });
            UI.dom.songsList.appendChild(row);
          });
        });
      }

      // Header 5-Band Equalizer Widget Toggle & Outside Click
      const headerEqWidget = document.getElementById('header-eq-widget');
      const btnHeaderEqToggle = document.getElementById('btn-header-eq-toggle');
      if (btnHeaderEqToggle && headerEqWidget) {
        btnHeaderEqToggle.addEventListener('click', (e) => {
          e.stopPropagation();
          headerEqWidget.classList.toggle('open');
        });
      }
      document.addEventListener('click', (e) => {
        if (headerEqWidget && !headerEqWidget.contains(e.target)) {
          headerEqWidget.classList.remove('open');
        }
      });

      // Header EQ Sliders (60Hz, 250Hz, 1kHz, 4kHz, 16kHz)
      document.querySelectorAll('.header-eq-slider').forEach(slider => {
        slider.addEventListener('input', (e) => {
          const band = parseInt(e.target.dataset.band, 10);
          const db = parseFloat(e.target.value);
          Engine.setEqBand(band, db);
          const hdrValLabel = document.getElementById(`hdr-eq-db-${band}`);
          if (hdrValLabel) hdrValLabel.textContent = `${db > 0 ? '+' : ''}${db}dB`;
          // Bidirectional sync with modal EQ slider & label
          const modalSlider = document.querySelector(`.eq-slider[data-band="${band}"]`);
          if (modalSlider) modalSlider.value = db;
          const modalValLabel = document.getElementById(`eq-val-${band}`);
          if (modalValLabel) modalValLabel.textContent = `${db > 0 ? '+' : ''}${db}dB`;
        });
      });

      // Header EQ Preset Chips
      document.querySelectorAll('.header-eq-preset-chip').forEach(chip => {
        chip.addEventListener('click', () => {
          document.querySelectorAll('.header-eq-preset-chip, .eq-preset-chip').forEach(c => c.classList.remove('active'));
          chip.classList.add('active');
          const preset = chip.dataset.preset;
          const modalChip = document.querySelector(`.eq-preset-chip[data-preset="${preset}"]`);
          if (modalChip) modalChip.classList.add('active');
          const presetNameBadge = document.getElementById('header-eq-preset-name');
          if (presetNameBadge) presetNameBadge.textContent = chip.textContent;
          const gains = Engine.setEqPreset(preset);
          gains.forEach((gain, i) => {
            const hdrSlider = document.querySelector(`.header-eq-slider[data-band="${i}"]`);
            if (hdrSlider) hdrSlider.value = gain;
            const hdrVal = document.getElementById(`hdr-eq-db-${i}`);
            if (hdrVal) hdrVal.textContent = `${gain > 0 ? '+' : ''}${gain}dB`;
            const modSlider = document.querySelector(`.eq-slider[data-band="${i}"]`);
            if (modSlider) modSlider.value = gain;
            const modVal = document.getElementById(`eq-val-${i}`);
            if (modVal) modVal.textContent = `${gain > 0 ? '+' : ''}${gain}dB`;
          });
          this.showToast(`Equalizer: ${chip.textContent}`);
        });
      });

      // Header EQ Reset Button
      const btnHeaderEqReset = document.getElementById('btn-header-eq-reset');
      if (btnHeaderEqReset) {
        btnHeaderEqReset.addEventListener('click', () => {
          const flatChip = document.querySelector('.header-eq-preset-chip[data-preset="flat"]');
          if (flatChip) flatChip.click();
        });
      }

      // 3D Genre Interactive Cards Click Handlers
      document.querySelectorAll('.genre-3d-card').forEach(card => {
        card.addEventListener('click', (e) => {
          const genre = card.dataset.genre;
          if (!genre) return;
          this.loadCategoryFromAPI(genre);
          setTimeout(() => {
            if (State.tracks.length > 0) {
              this.loadTrack(0, true);
            }
          }, 250);
          const trendingSec = document.getElementById('trending');
          if (trendingSec) {
            trendingSec.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });

      // 3D Turntable Modal Triggers & Controls
      const ttModal = document.getElementById('turntable-modal-overlay');
      const btnHeaderTt = document.getElementById('btn-header-turntable');
      const btnDockTt = document.getElementById('btn-turntable-dock-toggle');
      const btnCloseTt = document.getElementById('btn-turntable-close');

      const openTurntable = () => {
        if (ttModal) {
          ttModal.classList.add('open');
          const currentTrack = State.tracks[State.currentTrackIndex];
          if (currentTrack) {
            const ttThumb = document.getElementById('tt-artwork-thumb');
            const ttTitle = document.getElementById('tt-song-title');
            const ttArtist = document.getElementById('tt-song-artist');
            const ttTotal = document.getElementById('tt-total-time');
            const ttCurrent = document.getElementById('tt-current-time');
            if (ttThumb) ttThumb.src = currentTrack.cover;
            if (ttTitle) ttTitle.textContent = currentTrack.title;
            if (ttArtist) ttArtist.textContent = currentTrack.artist;
            if (ttTotal) ttTotal.textContent = currentTrack.duration;
            if (ttCurrent) ttCurrent.textContent = this.formatTime(Engine.audio.currentTime || 0);
          }
          ttModal.classList.toggle('playing', State.isPlaying);
        }
      };

      if (btnHeaderTt) btnHeaderTt.addEventListener('click', openTurntable);
      if (btnDockTt) btnDockTt.addEventListener('click', openTurntable);
      if (btnCloseTt && ttModal) {
        btnCloseTt.addEventListener('click', () => ttModal.classList.remove('open'));
      }
      if (ttModal) {
        ttModal.addEventListener('click', (e) => {
          if (e.target === ttModal) ttModal.classList.remove('open');
        });
      }

      // Turntable Controls: Prev, Next, Rotary Dial
      const btnTtPrev = document.getElementById('btn-tt-prev');
      const btnTtNext = document.getElementById('btn-tt-next');
      const ttRotaryDial = document.getElementById('tt-rotary-dial');
      if (btnTtPrev) btnTtPrev.addEventListener('click', () => this.prevTrack());
      if (btnTtNext) btnTtNext.addEventListener('click', () => this.nextTrack());
      if (ttRotaryDial) {
        ttRotaryDial.addEventListener('click', () => this.togglePlay());
        ttRotaryDial.addEventListener('wheel', (e) => {
          e.preventDefault();
          const delta = e.deltaY < 0 ? 0.05 : -0.05;
          const newVol = Math.max(0, Math.min(1, State.volume + delta));
          Engine.setVolume(newVol);
          if (this.dom.volumeSlider) this.dom.volumeSlider.value = newVol;
          const deg = (newVol - 0.5) * 120;
          ttRotaryDial.style.transform = `rotate(${deg}deg)`;
        });
      }

      const btnEqClose = document.getElementById('btn-eq-close');
      if (btnEqClose && this.dom.eqModal) {
        btnEqClose.addEventListener('click', () => {
          this.dom.eqModal.classList.remove('open');
        });
      }
      if (this.dom.eqModal) {
        this.dom.eqModal.addEventListener('click', (e) => {
          if (e.target === this.dom.eqModal) this.dom.eqModal.classList.remove('open');
        });
      }

      // Equalizer Sliders (Modal)
      document.querySelectorAll('.eq-slider').forEach(slider => {
        slider.addEventListener('input', (e) => {
          const band = parseInt(e.target.dataset.band, 10);
          const db = parseFloat(e.target.value);
          Engine.setEqBand(band, db);
          const valLabel = document.getElementById(`eq-val-${band}`);
          if (valLabel) valLabel.textContent = `${db > 0 ? '+' : ''}${db}dB`;
          // Sync header slider and label
          const hdrSlider = document.querySelector(`.header-eq-slider[data-band="${band}"]`);
          if (hdrSlider) hdrSlider.value = db;
          const hdrValLabel = document.getElementById(`hdr-eq-db-${band}`);
          if (hdrValLabel) hdrValLabel.textContent = `${db > 0 ? '+' : ''}${db}dB`;
        });
      });

      // EQ Preset Chips (Modal)
      document.querySelectorAll('.eq-preset-chip').forEach(chip => {
        chip.addEventListener('click', () => {
          document.querySelectorAll('.eq-preset-chip, .header-eq-preset-chip').forEach(c => c.classList.remove('active'));
          chip.classList.add('active');
          const preset = chip.dataset.preset;
          const hdrChip = document.querySelector(`.header-eq-preset-chip[data-preset="${preset}"]`);
          if (hdrChip) hdrChip.classList.add('active');
          const presetNameBadge = document.getElementById('header-eq-preset-name');
          if (presetNameBadge) presetNameBadge.textContent = chip.textContent;
          const gains = Engine.setEqPreset(preset);
          gains.forEach((gain, i) => {
            const slider = document.querySelector(`.eq-slider[data-band="${i}"]`);
            if (slider) slider.value = gain;
            const valLabel = document.getElementById(`eq-val-${i}`);
            if (valLabel) valLabel.textContent = `${gain > 0 ? '+' : ''}${gain}dB`;
            const hdrSlider = document.querySelector(`.header-eq-slider[data-band="${i}"]`);
            if (hdrSlider) hdrSlider.value = gain;
            const hdrVal = document.getElementById(`hdr-eq-db-${i}`);
            if (hdrVal) hdrVal.textContent = `${gain > 0 ? '+' : ''}${gain}dB`;
          });
          this.showToast(`Equalizer Preset: ${chip.textContent}`);
        });
      });

      // Visualizer Mode Toggles
      document.querySelectorAll('.btn-viz-mode').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.btn-viz-mode').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          State.visualizerMode = btn.dataset.mode;
          this.showToast(`Visualizer: ${btn.textContent}`);
        });
      });

      // Keyboard Shortcuts
      window.addEventListener('keydown', (e) => {
        if (['input', 'textarea'].includes(document.activeElement.tagName.toLowerCase())) return;

        switch (e.code) {
          case 'Space':
            e.preventDefault();
            this.togglePlay();
            break;
          case 'ArrowRight':
            e.preventDefault();
            Engine.seek(Engine.audio.currentTime + 5);
            break;
          case 'ArrowLeft':
            e.preventDefault();
            Engine.seek(Engine.audio.currentTime - 5);
            break;
          case 'ArrowUp':
            e.preventDefault();
            Engine.setVolume(State.volume + 0.05);
            if (this.dom.volumeSlider) this.dom.volumeSlider.value = State.volume;
            break;
          case 'ArrowDown':
            e.preventDefault();
            Engine.setVolume(State.volume - 0.05);
            if (this.dom.volumeSlider) this.dom.volumeSlider.value = State.volume;
            break;
          case 'KeyM':
            State.isMuted = !State.isMuted;
            Engine.updateVolume();
            if (this.dom.volumeBtn) this.dom.volumeBtn.classList.toggle('active', State.isMuted);
            break;
          case 'KeyL':
            this.toggleLike(State.tracks[State.currentTrackIndex].id);
            break;
          case 'KeyN':
            this.nextTrack();
            break;
          case 'KeyP':
            this.prevTrack();
            break;
        }
      });
    },

    initVisualizer() {
      this.visualizer = new VisualizerEngine();
    },

    renderUserProfile() {
      const user = State.user;
      const avatarEl = document.getElementById('user-avatar-text');
      const nameEl = document.getElementById('user-name-text');
      const statusEl = document.getElementById('user-status-text');

      if (avatarEl) avatarEl.textContent = user.avatar || user.name.charAt(0);
      if (nameEl) nameEl.textContent = user.name;
      if (statusEl) statusEl.textContent = user.status || 'Pro Listener';

      const likedBadge = document.getElementById('liked-count-badge');
      if (likedBadge) likedBadge.textContent = State.likedTrackIds.size;
    },

    showToast(message) {
      let container = document.querySelector('.toast-container');
      if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
      }

      const toast = document.createElement('div');
      toast.className = 'toast';
      toast.innerHTML = `
        <svg viewBox="0 0 24 24" width="16" height="16" fill="var(--accent-cyan)">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
        <span>${message}</span>
      `;
      container.appendChild(toast);

      setTimeout(() => {
        if (toast && toast.style) {
          toast.style.opacity = '0';
          toast.style.transform = 'translateY(10px)';
        }
        setTimeout(() => {
          if (toast && typeof toast.remove === 'function') toast.remove();
        }, 300);
      }, 3200);
    },

    showSidebarHoverPill(singerName, trackCount) {
      let toast = document.getElementById('sidebar-hover-toast');
      if (!toast) {
        toast = document.createElement('div');
        toast.id = 'sidebar-hover-toast';
        toast.className = 'sidebar-hover-toast';
        document.body.appendChild(toast);
      }
      toast.innerHTML = `<span>🎤</span> <span>Opened <strong>${singerName}</strong> (${trackCount} songs) over main page!</span>`;
      toast.style.display = 'flex';
      clearTimeout(this._hoverToastTimer);
      this._hoverToastTimer = setTimeout(() => {
        if (toast) toast.style.display = 'none';
      }, 2200);
    }
  };

  // Expose on window for easy interaction (PureBeatsApp primary, PulseApp legacy alias)
  window.PureBeatsApp = window.PulseApp = {
    Engine,
    UI,
    State,
    catalog: TRACK_CATALOG
  };

  // Run on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => UI.init());
  } else {
    UI.init();
  }
})();
