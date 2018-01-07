const dns = require('dns');

dns.lookup('pluralsight.com', (err, address) => {
    console.log(address)
});

dns.resolve4('pluralsight.com', (err, address) => {
    console.log(address)
});

dns.resolve('pluralsight.com','MX', (err, address) => {
    console.log(address);
});

dns.reverse('54.149.234.66', (err, hostnames) => {
    console.log(hostnames);
});