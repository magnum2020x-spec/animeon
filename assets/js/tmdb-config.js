// TMDB API Configuration
const TMDB_API_KEY = '77742f3603f71f6522f775466548596b'; // مفتاح تجريبي، يفضل تغييره لاحقاً
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

class TMDB_API {
    static async fetch(endpoint, params = {}) {
        const url = new URL(`${TMDB_BASE_URL}${endpoint}`);
        url.searchParams.append('api_key', TMDB_API_KEY);
        url.searchParams.append('language', 'ar'); // جلب البيانات بالعربية
        
        for (const key in params) {
            url.searchParams.append(key, params[key]);
        }

        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('TMDB API Error');
            return await response.json();
        } catch (error) {
            console.error('TMDB Fetch Error:', error);
            return null;
        }
    }

    static async searchTV(query) {
        return await this.fetch('/search/tv', { query });
    }

    static async getEpisodeDetails(seriesId, seasonNumber, episodeNumber) {
        return await this.fetch(`/tv/${seriesId}/season/${seasonNumber}/episode/${episodeNumber}`);
    }
    
    static async getSeasonDetails(seriesId, seasonNumber) {
        return await this.fetch(`/tv/${seriesId}/season/${seasonNumber}`);
    }
}
