// Define custom Prism language for DNS zone files
Prism.languages.dnszone = {
  'comment': /;.*/,
  'directive': {
    pattern: /\$[A-Z]+\b.*/i,
    greedy: true,
    alias: 'keyword'
  },
  'record': {
    pattern: /^\s*[A-Za-z0-9\-_\.@]+\s+(IN)?\s*(A|AAAA|NS|MX|CNAME|TXT|SRV|PTR|SOA|CAA|TLSA|SSHFP)\s+[^\s;]+/im,
    greedy: true,
    alias: 'function'
  },
  'number': /\b\d+\b/,
  'punctuation': /[()]/,
  'whitespace': /\s+/
};