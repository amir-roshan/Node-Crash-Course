import { URL } from 'url';

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// Serialized URL
console.log('Serialized URL:', myUrl.href);
console.log('Serialized URL (toString):', myUrl.toString());

// Host (root domain)
console.log('Host:', myUrl.host);

// Hostname (does not get port)
console.log('Hostname:', myUrl.hostname);

// Pathname
console.log('Pathname:', myUrl.pathname);

// Serialized query
console.log('Serialized Query:', myUrl.search);

// Params object
console.log('Params Object:', myUrl.searchParams);

// Add param
myUrl.searchParams.append('abc', '123');
console.log('Updated Params:', myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
