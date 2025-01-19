// /utils/cookie.ts

interface CookieOptions {
    expires?: number;
    path: string;
    domain?: string; // Make domain optional
  }
  
  export function setCookie(name: string, value: string, options: CookieOptions) {
    let cookieStr = `${name}=${value};`;
  
    if (options.expires) {
      const expiryDate = new Date();
      expiryDate.setDate(expiryDate.getDate() + options.expires);
      cookieStr += `expires=${expiryDate.toUTCString()};`;
    }
  
    cookieStr += `path=${options.path};`;
  
    if (options.domain) {
      cookieStr += `domain=${options.domain};`; // Add domain to the cookie string if present
    }
  
    document.cookie = cookieStr;
  }
  
  export function getCookie(name: string): string | null {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    
    if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
    
    return null;
  }
  