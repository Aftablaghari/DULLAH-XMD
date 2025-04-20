const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'DULLAH-MD;;;H4sIAAAAAAAAA71VW46rRhDdS//aE4OBBiyNFAzY+AkMfowd5aOBNmDeTWMbX1nKVrKQ/GQpWUmEPaM7yuNmIkXhq2maU6eqzqn+ArI8qvAMN2DwBRQkOiGK2yVtCgwGYFgfDpiALvARRWAAgnl8kTqqaVnqJqiC/EigMRtvyp4vUltmZvN6uuZcu7huz8/g1gVF7SaR9w1AKbyG9UqVtQwu/R4Xw3EhOXVZ9pT9xt2ri2mmmntZZfdh/AxuLSKKSJQFehHiFBOUzHBjoYh8jn7HjCFco4x1nEh1R/phK/JnROqFv+8I+TQ0yuX+cpElK/kk/cUs52V309dhYBazSQwbv1omGCbEu+Tp3IpEGtoXk5qXN/pVFGTYn/g4oxFtPl13e8qzonxcsB0oRdrIic9BNR5flROcUnaPm9Gqt0dMnIuv+eeIZ33rpbMdNixfmPpGWHoBbBrd3a7Xo6DmX14zZ0q3ksjO7clH4hZ510r8b+q+1X3E7Cp1zEzLYGPV7Hm+10cLXtAsUvvbfH1MXwr29ehsPln3MomZoBiOyom2YJVcVsuLM9IWyUvp8ttVdJgJvjCvehy9fqg7ojX5Fku6XO16i00s2lFON46ZMtEpcwVjFp9n8HTpycyYlPK8vopR2dkE+5cogGP+Uqaufc3P3vi8v+AdkZTeBE2x0Suz48qKlOd7RjFuJj4YsLcuIDiIKkoQjfLsvidKXYD8k4M9gum9vGDTu4qTsOp7r7ReRQWpNOcyzobuZbI9EDRxZgy9ltdrze30Z9AFBck9XFXYN6KK5qRZ4KpCAa7A4Id7p9qkCU5ziqeRDwZA5sQ+5CQZ8vL31XfnENEKFcV3GaagCw4kTxcYDCipcRfcz480DUKFgawEGThU+oqoirrIaP2hLkqsprQZpo+YqyjFFUVp0SbGC6zA9GXp1v1PaPBw2NcEZsgLCs/zfV2BsgQFmVMkSYeQ/b9oMJrMyCynQ15jJF1WeV0T1RELhwKjMVxf/iYNjhFuP3ZBhi/0YaZWAhzbBYeIVHSd1UWSI//dae8fkefldUadJvPUdoEJGHzYxpRGWVC1idUZIl4YnbDa5gEGB5RU+NYFPj5FHm7xQBjvMlsz09WhWaXMenJmkPd0bmUU5tnjCOIFFnMIPx04TnziIURPMi8IT4Lv+1BkedYTBdCW4zHH2n/+1lbTeZ056mRRG42lDa+qDfuKMbHi3cy+W+PhB0yw/15lF3lxXazyGGffwDVOwZ6VmwIiV2MLwWBeZ6LQo1wU5x9wHz4Dgy9f7w4191s8KNkWq7I2aLvVxvmjGAbsn+WQofYs+O2nX3776RdHcdYz/defH29tzLeGtGg+pihKKjAAqtU7FMLa0BdEjSVlPFb0QFEDBXxt4Pt0eri/vz3Z9WWos6+jw56bC8f1Lq3VmlWYvERMklhwvAkmxFiqwfNfgIAB2LsrKCiW0fTSwjSKUShu0iFhdOMEwzKC43rFOhpLDWMW5xtz63VIj+4z2cxIOKpPki2f1645dW3CswY+Tt3t1jor9nMb7SGkj8GuptnofON7scStT7kQHmHcbxpfWRzdTtDpc8hhVmtTTHaLY7I202Ol7WIv79NlaFll53iobTL2JmtDd0aFs9Hl0St3fJub97mdvN2X0dtEe8juEOH79fPWkn9o3Ff9M7fuB4S36+xvNDb0E8LMK/tlubm89v2ms2PHUxIQai9ns5RO96tOmOzU2eVq5+DWGrtIED3kJAUDUKUuAl2QoIoqX/37V5NJ6IK0UYrCoYi+2x4o9+c6AbffAfeFR6emCQAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "WHYAFTAB",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "923103278551",             
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || '`SASUKE`,
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/bbz4xm.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "no",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
                 ANTIDELETE3 : process.env.ANTIDELETE2 || 'yes',
                  DULLAH_CHATBOT : process.env.DULLAH_CHATBOT || 'yes',
                
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
                  AUTO_TAG_STATUS : process.env.AUTO_TAG_STATUS || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
