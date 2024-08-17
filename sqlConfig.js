var dbconfig = {
    development: {
        server: '192.168.1.72',
        database:'team2_web_labDB',
        user:'sa',
        password:'P@ssw0rd@2024',
        port: 1433,
        options:{
            encrypt: true, // Use this if you're on Windows Azure
            setTimeout: 30000,
            enableArithAbort: true,
            trustServerCertificate: true,
            trustedconnection:  true,
            instancename:  '192.168.1.72'  // SQL Server instance name
        }
    },
    production: {
        server: '192.168.1.72',
        database:'team2_web_labDB',
        user:'sa',
        password:'P@ssw0rd@2024',
        port: 1433,
        options:{
            encrypt: true, // Use this if you're on Windows Azure
            setTimeout: 30000,
            enableArithAbort: true,
            trustServerCertificate: true,
            trustedconnection:  true,
            instancename:  '192.168.1.72'  // SQL Server instance name
        }
    },

 };


module.exports = dbconfig;
