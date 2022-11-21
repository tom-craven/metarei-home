export const ONE_TOKEN = 100000000;
export const LAB_MAIL = 'hello@metarei.net'
export const LAB_LOCATION = 'Glasgow|Oxford UK'
export const LAB_TEL = '+447588252184'
export const decimals = 8;

//export const HOST_CHAIN_LOGO = `${process.env.PUBLIC_URL}/polygon-matic5119.png`;
export const HOST_CHAIN_LOGO = `${process.env.PUBLIC_URL}/45615063.png`;
//export const HOST_CHAIN_NAME = `Binance Smart Chain`;
export const METAMASK_GUIDE = 'https://docs.binance.org/smart-chain/wallet/metamask.html';

//export const HOST_CHAIN_LOGO = `${process.env.PUBLIC_URL}/polygon-matic5119.png`;
//export const HOST_CHAIN_NAME = CONTRACT_METADATA.swap_base_name;
//export const METAMASK_GUIDE = "https://docs.polygon.technology/docs/develop/metamask/hello";
export const CHAIN_GUIDE_URL = 'https://docs.polygon.technology/docs/develop/metamask/config-polygon-on-metamask/';

export const TWITTER_HANDLE = "https://twitter.com/Metarei";
export const FACEBOOK_HANDLE = "https://fb.me/g/4g5Frt8tH/w88wKFcH";
export const INSTAGRAM_HANDLE = "https://www.instagram.com/metarei_network/";
export const TELEGRAM_HANDLE = "https://t.me/+bkc5DVICNLxkYTE0";
export const LAB_GIT_URL = "https://bitbucket.org/metarei/contracts/src/master/"
export const CONTRACT_METADATA = require('../contract-metadata.json');
export const CONTRACT_ABI = CONTRACT_METADATA.token_abi;
export const SALE_CONTRACT_ABI = CONTRACT_METADATA.sale_abi;
export const TB = 1 / CONTRACT_METADATA.tax_burn_fraction;
export const TOTAL_SUPPLY = CONTRACT_METADATA.total_supply;
export const TOKEN_NAME = CONTRACT_METADATA.token_name;
export const TOKEN_SYMBOL = CONTRACT_METADATA.token_symbol;
export const FRACTION_SYMBOL = CONTRACT_METADATA.token_fraction;
export const SALE_PERCENTAGE = CONTRACT_METADATA.total_sale_percentage;
export const SALE_PRIVATE_PERCENTAGE = CONTRACT_METADATA.stealth_percentage;
export const SALE_PUBLIC_PERCENTAGE = CONTRACT_METADATA.public_percentage;
export const SALE_LISTING_PERCENTAGE = CONTRACT_METADATA.listing_percentage;
export const SALE_LP_PERCENTAGE = CONTRACT_METADATA.lp_percentage;

export const HOVER_COLOUR_2 = "w3-hover-blue-grey";
export const COLOUR_CYAN = "w3-cyan";

export const SWAP_BASE_SYMBOL = CONTRACT_METADATA.swap_base_symbol
export const DEV_PERCENTAGE = CONTRACT_METADATA.dev_percentage;
export const RESERVE_PERCENTAGE = CONTRACT_METADATA.reserve_percentage;
export const COMMUNITY_PERCENTAGE = CONTRACT_METADATA.community_percentage;
export const TEAM_PERCENTAGE = CONTRACT_METADATA.team_percentage;
export const MARKETING_PERCENTAGE = CONTRACT_METADATA.marketing_percentage;

export const RESERVE_ADDRESS = CONTRACT_METADATA.reserve;
export const LIQUIDITY_ADDRESS = CONTRACT_METADATA.liquidity_pool;
export const MARKETING_ADDRESS = CONTRACT_METADATA.marketing;
export const COMMUNITY_ADDRESS = CONTRACT_METADATA.community;
export const DEVELOPMENT_ADDRESS = CONTRACT_METADATA.development;
export const TEAM_ADDRESS = CONTRACT_METADATA.team;
export const LISTING_ADDRESS = CONTRACT_METADATA.exchange_listing;
export const PUBLIC_ADDRESS = CONTRACT_METADATA.public_sale;
export const PVT_ADDRESS = CONTRACT_METADATA.stealth_sale;

export const CONTRACT_EXPLORER_PREFIX = "https://www.bscscan.com/address/";
//export const CONTRACT_EXPLORER_PREFIX = "https://polygonscan.com/address/";
//export const CONTRACT_EXPLORER_PREFIX = "https://mumbai.polygonscan.com/address/";
export const TOKEN_EXPLORER_URL = CONTRACT_EXPLORER_PREFIX + CONTRACT_METADATA.token_address;
export const SALE_EXPLORER_URL = CONTRACT_EXPLORER_PREFIX + CONTRACT_METADATA.sale_address;
export const DEV_EXPLORER_URL = CONTRACT_EXPLORER_PREFIX + DEVELOPMENT_ADDRESS;
export const RESERVE_EXPLORER_URL = CONTRACT_EXPLORER_PREFIX + RESERVE_ADDRESS;

export const COMMUNITY_EXPLORER_URL = CONTRACT_EXPLORER_PREFIX + COMMUNITY_ADDRESS;
export const TEAM_EXPLORER_URL = CONTRACT_EXPLORER_PREFIX + TEAM_ADDRESS;
export const MARKETING_EXPLORER_URL = CONTRACT_EXPLORER_PREFIX + MARKETING_ADDRESS;
export const LP_EXPLORER_URL = CONTRACT_EXPLORER_PREFIX + LIQUIDITY_ADDRESS;
export const STEALTH_EXPLORER_URL = CONTRACT_EXPLORER_PREFIX + PVT_ADDRESS;
export const PUBLIC_EXPLORER_URL = CONTRACT_EXPLORER_PREFIX + PUBLIC_ADDRESS;
export const LISTING_EXPLORER_URL = CONTRACT_EXPLORER_PREFIX + LISTING_ADDRESS;
export const LAUNCH_SALE_AMOUNT = (TOTAL_SUPPLY / 2) / 100 * SALE_PERCENTAGE;
