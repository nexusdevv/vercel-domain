// Alternatif domain önerileri oluşturma fonksiyonu
export function generateAlternativeDomains(domain: string): string[] {
  const alternatives: string[] = [];
  
  // Suffix ekleme
  alternatives.push(`${domain}app`);
  alternatives.push(`${domain}official`);
  alternatives.push(`${domain}dev`);
  alternatives.push(`${domain}web`);
  alternatives.push(`${domain}site`);
  
  // Prefix ekleme
  alternatives.push(`my${domain}`);
  alternatives.push(`the${domain}`);
  alternatives.push(`get${domain}`);
  alternatives.push(`use${domain}`);
  
  // Tireleme
  if (!domain.includes('-')) {
    const words = domain.match(/[A-Z][a-z]+/g) || [domain];
    if (words.length > 1) {
      alternatives.push(words.join('-').toLowerCase());
    }
  }
  
  return alternatives.filter(alt => alt !== domain);
} 