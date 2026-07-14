// Frozen fixture snapshot of the DeflockOnSol site copy (2026-07-14) — doctrine 5: no
// invented amounts; live RPC values render as "—" with an honest note. Canonical values
// (addresses, receipts, contact) live on the official site; this file does not update.
// raid.targets and footerEmail are PLACEHOLDERS here, not site copy — see notes inline.
window.DF_DATA = {
  tabs: [
    { href: "/", label: "Why DeFlock", mobileLabel: "Why" },
    { href: "/raid-station", label: "Raid Station", mobileLabel: "Raid" },
    { href: "/library", label: "Library", mobileLabel: "Library" },
    { href: "/donations", label: "Donations", mobileLabel: "Donate" },
    { href: "/profile", label: "Profile", mobileLabel: "Profile" },
  ],
  links: {
    buyCoffee: "https://buymeacoffee.com/deflock",
    communityX: "https://x.com/DeflockOnSol",
    pumpfun: "https://pump.fun/coin/FaL1PFQhNo4JAGaQKSnKurWeNtpexqEAduQjR4H6pump",
    solscanAccount: "https://solscan.io/account/",
    deflockOrg: "https://deflock.org",
    osm: "https://www.openstreetmap.org/copyright",
    githubFoggedLens: "https://github.com/FoggedLens",
  },
  accounts: {
    claimWallet: "8HzQiR4Ycb45vn394RRD5DpjLxuTm5dTGebZwjNYDhYn",
    feeVault: "6HUYQiV7cYwvGVzhN8cEHp11QnGow5Fm6E3UgAjyNusN",
    tokenMint: "FaL1PFQhNo4JAGaQKSnKurWeNtpexqEAduQjR4H6pump",
    legacyRecipient: "9qxbGSBqMKeDBS8H64pof5Jz3wNSZp5gfMZvRsJ2V5PP",
  },
  why: {
    kicker: "WHO WATCHES THE WATCHERS",
    heroLabel: "THEY MAP YOUR PLATES.",
    heroTitle: "WE MAP THE CAMERAS.",
    heroValue: "The unaffiliated $DeFlock community terminal: see the surveillance near you, grab raid-ready content, and back the movement with receipts.",
    ctas: ["CHECK YOUR ZIP", "WHY $DEFLOCK"],
    zip: {
      label: "LIVE MAP CHECK",
      title: "Run your ZIP through the camera map.",
      body: "This widget queries OpenStreetMap data live for ALPR surveillance camera nodes within 10km of the ZIP centroid.",
      idle: ["READY FOR A ZIP", "Query OpenStreetMap data for mapped ALPR cameras within 10km."],
      loading: ["PRESSING THE QUERY", "Checking the live OpenStreetMap data."],
      invalid: "Enter a 5-digit US ZIP code and try again.",
      error: ["QUERY DID NOT LAND", "The live map query did not answer. Try the ZIP again in a minute."],
      empty: ["NO MAPPED HIT YET", "No mapped ALPR cameras within 10km of this ZIP yet."],
      readySuffix: "ALPR cameras mapped within 10km of",
      mapLink: "See them on the deflock.org map",
      attribution: "© OpenStreetMap contributors plus DeFlock project data.",
    },
    thesis: [
      { label: "What ALPRs do", body: "Automatic license plate reader cameras photograph and log vehicle license plates at scale. That includes cameras sold by Flock Safety Inc." },
      { label: "Why people push back", body: "These cameras are deployed across many US municipalities, which makes privacy and local accountability an active local-government policy debate." },
      { label: "What deflock.org does", body: "The DeFlock project is open-source, community-run, and built on OpenStreetMap data to map ALPR surveillance cameras worldwide." },
      { label: "What the community does", body: "$DeFlock is a Solana community memecoin launched via pump.fun. The community makes noise and directs a share of creator-fee claims toward donations, with receipts tracked on the Donations tab." },
    ],
    thesisActions: [["Buy $DeFlock", "pumpfun"], ["X community", "communityX"]],
    realProject: {
      label: "THE REAL PROJECT",
      title: "deflock.org is the source signal.",
      body: "We are not affiliated with deflock.org. We are fans directing public receipt-backed support toward the mission.",
      link: "Visit deflock.org",
    },
  },
  donations: {
    meta: "Community fee transparency",
    title: "Donations",
    body: "Public tracking for the unaffiliated $DeFlock community\u2019s creator-fee claims, unclaimed vault balance, and community-reported donation records for support sent to the DeFlock open-source project.",
    kpis: [
      { eyebrow: "CLAIMED SOL", label: "Claimed by wallet", value: "\u2014 SOL", sub: "live from Solana RPC", wash: "accent" },
      { eyebrow: "CLAIMABLE SOL", label: "Claimable now", value: "\u2014 SOL", sub: "unclaimed vault estimate", nudge: true },
      { eyebrow: "NEEDS RECEIPTS", label: "Needs receipts", value: "\u2014", sub: "50% claimed allocation minus accepted receipts", wash: "red" },
    ],
    impact: {
      head: ["Donation impact", "Receipt reconciliation", "50% allocation"],
      rows: [
        ["Claimed metric", "\u2014 SOL"],
        ["Estimated DeFlock allocation", "\u2014"],
        ["Accepted receipts", "$580.00"],
        ["Needs receipts", "\u2014"],
        ["Receipt-backed months funded", "21.5"],
        ["Monthly infra estimate", "$27.00"],
      ],
      note: "USD values are mark-to-market estimates unless tied to a concrete receipt. Monthly estimate source: DeFlock VPS $6/mo + DeFlock CMS VPS $6/mo + AWS midpoint $15/mo.",
    },
    receipts: {
      head: ["Off-chain records", "Community-confirmed records", "2 accepted"],
      rows: [
        { date: "2026-07-09", amount: "$500.00", note: "$DeFlock community confirmed donation via Discord.", status: "community confirmed" },
        { date: "2026-07-11", amount: "$80.00", note: "$DeFlock community confirmed an $80/month GitHub Sponsors contribution to Will Freeman, creator of deflock.org.", status: "community confirmed" },
      ],
      totals: [["Receipts accepted", "2"], ["Accepted receipt total", "$580.00"]],
    },
    legacy: {
      badge: "Verified claimed",
      meta: "PRE-CTO ESCROW CLAIMED BY FOGGEDLENS",
      title: "FoggedLens claimed the pre-CTO escrow",
      paras: [
        "The creator of deflock.org, Will Freeman, claimed the fees directed to his GitHub through pump.fun on July 13.",
        "The fees were escrowed by pump.fun after Will\u2019s initial refusal to interact with or associate with the $DeFlock token on July 8.",
        "We\u2019re excited to keep directing community support toward deflock.org\u2019s mission and to build around public receipts.",
        "This proof tracks a public fee-recipient claim only; it is not an endorsement of $DeFlock or @DeflockOnSol by deflock.org, FoggedLens, or Will Freeman.",
      ],
      valueRows: [["CLAIM STATUS", "Claimed"], ["CURRENT FOGGEDLENS WALLET BALANCE \u00b7 NOT IN TOTALS", "\u2014 SOL"]],
    },
    meaning: {
      head: ["Meaning", "What this page means", "Unaffiliated community"],
      items: [
        "On-chain claim and vault values are live from Solana RPC, with a frozen real-data fixture as fallback if RPC is unavailable.",
        "Donation records are off-chain evidence supplied by the $DeFlock community.",
        "This dashboard and @DeflockOnSol are not affiliated with, sponsored by, or endorsed by deflock.org or the DeFlock open-source project.",
      ],
    },
  },
  profile: {
    kicker: "PROFILE",
    title: "Your watch post.",
    copy: "Track your wallets. No signature required.",
    watch: {
      kicker: "WATCH A WALLET",
      title: "Paste once. Keep it under glass.",
      label: "Wallet address",
      button: "WATCH",
      empty: "NO WATCHED WALLETS YET",
      dupError: "That wallet is already on watch.",
      pending: "Holdings are refreshing. Your watch is saved to your profile and will show here.",
    },
    verify: {
      kicker: "VERIFY BY SIGNATURE",
      title: "Prove the wallet is yours.",
      body: "Tie a wallet to this profile with a signature. No transfer. No spend.",
      button: "OPEN VERIFY NOTES",
      sheetTitle: "Signature verify",
      sheetBody: "The wallet signs a plain ownership message. The profile records that proof as a wallet-linked profile signal.",
      sheetHint: "Connect and sign below. It costs nothing and moves nothing.",
      sheetButton: "SIGN WITH WALLET",
    },
    signedOut: { kicker: "NOT SIGNED IN", button: "SIGN IN WITH X" },
    roleBadge: "No watched wallet yet",
    roleBadgeSaved: "Wallet watch saved",
  },
  library: {
    kicker: "COMMUNITY LIBRARY",
    title: "Raid-ready asset library",
    framing: "Stickers, posters, banners, memes, logos, and video for the $DeFlock community.",
    actions: ["RAID-READY KIT", "SUBMIT YOUR WORK", "QUEUE"],
    filters: ["ALL", "STICKERS", "POSTERS", "BANNERS", "MEMES", "TRANSPARENTS", "LOGOS", "VIDEO"],
    empty: "No assets in this set yet.",
    assets: [
      { src: "img/stk-flock-watches-back-flat.png", title: "stk-flock-watches-back", tags: "STICKER \u00b7 1024\u00d71024", kind: "STICKERS" },
      { src: "img/stk-murmuration-eye-flat.png", title: "stk-murmuration-eye", tags: "STICKER \u00b7 1408\u00d7768", kind: "STICKERS" },
      { src: "img/stk2-A3-everyday-flat.png", title: "stk2-A3-everyday", tags: "STICKER \u00b7 1408\u00d7768", kind: "STICKERS" },
      { src: "img/stk2-D1-flat.png", title: "stk2-D1", tags: "STICKER \u00b7 1408\u00d7768", kind: "STICKERS" },
      { src: "img/stk2-J1-flat.png", title: "stk2-J1", tags: "STICKER \u00b7 1408\u00d7768", kind: "STICKERS" },
      { src: "img/mascot-pfp-400.png", title: "deflock-mascot-pfp", tags: "LOGO \u00b7 400\u00d7400", kind: "LOGOS" },
    ],
  },
  raid: {
    kicker: "RAID STATION",
    title: "Signal moves when people mean it",
    mission: "Step in when the target matters. Add your words. Leave a real trace.",
    // PLACEHOLDER rows (fictional). The live site's target list is ephemeral engagement
    // data and is intentionally not frozen into this public fixture.
    targets: [
      { author: "example-reporter", why: "Local news covered a city council vote on ALPR cameras: live policy fight", kit: "long kit" },
      { author: "example-account", why: "High-visibility post about ALPR expansion: counter with mapped facts", kit: "short kit" },
      { author: "example-analyst", why: "Public records story on ALPR database misuse: abuse-of-access case study", kit: "medium kit" },
    ],
  },
  // PLACEHOLDER — swap for your project's real contact address.
  footerEmail: "contact@deflockonsol.example",
};
