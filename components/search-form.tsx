'use client';

import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { 
  Check, 
  ExternalLink, 
  Loader2, 
  Search, 
  X,
  AlertCircle
} from 'lucide-react';
import { checkDomainExist } from '@/action/check-domain';
import { generateAlternativeDomains } from '@/lib/domain-utils';
import { useState } from 'react';
import { toast } from 'sonner';

interface SearchFormProps {
  className?: string;
}

interface AlternativeResult {
  name: string;
  available: boolean | null;
}

const SearchForm = ({ className }: SearchFormProps) => {
  const [searchAppName, setSearchAppName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
  const [alternativeSuggestions, setAlternativeSuggestions] = useState<AlternativeResult[]>([]);
  const [showAlternatives, setShowAlternatives] = useState(false);

  // Özel karakter kontrolü - Vercel domain kurallarına göre düzenlendi
  const containsSpecialChars = (str: string) => {
    // Tire karakteri (-) Vercel domain adlarında geçerlidir
    const specialChars = /[!@#$%^&*()+={}\[\];':"\\|,.<>\/?]+/;
    return specialChars.test(str);
  };

  // Büyük harf kontrolü
  const containsUppercase = (str: string) => {
    return /[A-Z]/.test(str);
  };

  // Alternatif domain önerilerini kontrol et
  const checkAlternativeDomains = async () => {
    if (!searchAppName) return;
    
    const alternatives = generateAlternativeDomains(searchAppName);
    
    // En fazla 5 alternatif göster
    const limitedAlternatives = alternatives.slice(0, 5);
    
    const results = await Promise.all(
      limitedAlternatives.map(async (alt) => {
        try {
          const exists = await checkDomainExist(alt);
          return { name: alt, available: !exists };
        } catch (error) {
          return { name: alt, available: null };
        }
      })
    );
    
    setAlternativeSuggestions(results);
    setShowAlternatives(true);
  };

  // Ana domain kontrolü
  const handleSubmit = async () => {
    setIsAvailable(null);
    setShowAlternatives(false);
    
    if (!searchAppName) {
      toast.error('Please enter app name');
      return;
    }

    // Özel karakter kontrolü
    if (containsSpecialChars(searchAppName)) {
      toast.error('Invalid Characters', {
        description: 'Domain names cannot contain special characters like !@#$%^&*(){}[]. Hyphens (-) are allowed.',
        icon: <AlertCircle className="h-5 w-5 text-red-500" />
      });
      return;
    }

    // Büyük harf uyarısı
    if (containsUppercase(searchAppName)) {
      toast.warning('Uppercase Letters Detected', {
        description: 'Note: Domain names are case-insensitive. We\'ll convert it to lowercase.',
      });
    }
    
    setIsLoading(true);
    
    try {
      const result = await checkDomainExist(searchAppName);
      setIsAvailable(!result);
      
      if (!result) {
        toast.success('Available', {
          description: `https://${searchAppName}.vercel.app is available to use.`,
        });
      } else {
        toast.error('Unavailable', {
          description: `https://${searchAppName}.vercel.app is unavailable to use.`,
        });
        // Domain kullanılamıyorsa alternatif önerileri kontrol et
        await checkAlternativeDomains();
      }
    } catch (error) {
      toast.error('Something went wrong');
    }
    
    setIsLoading(false);
  };

  return (
    <div className={cn('flex flex-col items-center w-full', className)}>
      <div className="flex items-center relative w-full max-w-xl">
        <div className="relative flex-1">
          <Input
            value={searchAppName}
            onChange={(e) => setSearchAppName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSubmit();
              }
            }}
            className="bg-white pr-24"
            placeholder="Enter domain name"
          />
          <span className="text-sm lg:text-base absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 bg-white px-1">.vercel.app</span>
        </div>
      </div>
      
      {isAvailable !== null && (
        <div className={cn(
          "mt-4 w-full max-w-xl rounded-lg p-4 flex items-center justify-between",
          isAvailable 
            ? "bg-green-50 border border-green-200" 
            : "bg-red-50 border border-red-200"
        )}>
          <div className="flex items-center">
            <div className={cn(
              "rounded-full p-1 mr-3",
              isAvailable ? "bg-green-100" : "bg-red-100"
            )}>
              {isAvailable ? (
                <Check className="h-5 w-5 text-green-600" />
              ) : (
                <X className="h-5 w-5 text-red-600" />
              )}
            </div>
            <div>
              <p className="font-medium">
                {isAvailable ? "Available!" : "Not Available"}
              </p>
              <p className="text-sm text-slate-500">
                {`${searchAppName}.vercel.app`}
              </p>
            </div>
          </div>

          {isAvailable && (
            <a
              href={`https://vercel.com/new?name=${searchAppName}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
            >
              Deploy on Vercel
              <ExternalLink className="h-3 w-3" />
            </a>
          )}
        </div>
      )}
      
      <div className="flex mt-6">
        <Button
          onClick={handleSubmit}
          disabled={isLoading}
          className="bg-black hover:bg-gray-800"
        >
          {isLoading ? (
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
          ) : (
            <Search className="h-4 w-4 mr-2" />
          )}
          Check Availability
        </Button>
      </div>

      {/* Alternatif Öneriler */}
      {showAlternatives && alternativeSuggestions.length > 0 && (
        <div className="mt-8 w-full max-w-xl">
          <h3 className="font-medium mb-3">Alternative Suggestions</h3>
          <div className="space-y-2">
            {alternativeSuggestions.map((alt) => (
              <div
                key={alt.name}
                className={cn(
                  "border rounded-md p-3 flex items-center justify-between",
                  alt.available === true 
                    ? "border-green-200 bg-green-50" 
                    : alt.available === false 
                      ? "border-red-200 bg-red-50" 
                      : "border-gray-200 bg-gray-50"
                )}
              >
                <span className="font-medium">{alt.name}.vercel.app</span>
                <div className="flex items-center gap-2">
                  {alt.available === true ? (
                    <>
                      <span className="text-sm text-green-600">Available</span>
                      <a
                        href={`https://vercel.com/new?name=${alt.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 rounded-full hover:bg-green-100"
                      >
                        <ExternalLink className="h-4 w-4 text-green-600" />
                      </a>
                    </>
                  ) : alt.available === false ? (
                    <span className="text-sm text-red-600">Unavailable</span>
                  ) : (
                    <span className="text-sm text-gray-500">Unknown</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchForm;
