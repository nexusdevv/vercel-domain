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
  
  // Tire (-) işleme
  if (!domain.includes('-')) {
    // Domaine tire ekleyerek alternatifler oluştur
    if (domain.length > 3) {
      // Ortadan böl ve tire ekle
      const midPoint = Math.floor(domain.length / 2);
      const withHyphen = `${domain.substring(0, midPoint)}-${domain.substring(midPoint)}`;
      alternatives.push(withHyphen);
    }
    
    // Büyük harflerle ayrılmış kelimeleri tespit et ve tire ile ayır
    const words = domain.match(/[A-Z][a-z]+/g) || [domain];
    if (words.length > 1) {
      alternatives.push(words.join('-').toLowerCase());
    }
  } else {
    // Halihazırda tire içeren domainler için, tireleri kaldır
    alternatives.push(domain.replace(/-/g, ''));
  }
  
  return alternatives.filter(alt => alt !== domain);
} 