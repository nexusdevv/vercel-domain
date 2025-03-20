'use server';

// Domain kontrolü fonksiyonu
export async function checkDomainExist(appName: string, tld: string = 'vercel.app') {
  try {
    // Özel karakterleri kontrol et ve temizle
    const sanitizedName = appName.toLowerCase().trim();
    
    // Sadece vercel.app domainlerini kontrol etmek için, tld parametresini yok sayıyoruz
    const res = await fetch(`https://${sanitizedName}.vercel.app`, {
      method: 'GET',
      mode: 'no-cors',
      cache: 'no-store',
    });

    if (res.ok || res.status < 400) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
    throw new Error('Error checking domain');
  }
} 