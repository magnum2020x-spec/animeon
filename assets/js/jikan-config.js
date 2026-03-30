// Jikan API Configuration (MyAnimeList)
const JIKAN_BASE_URL = 'https://api.jikan.moe/v4';

class Jikan_API {
    static async fetch(endpoint, params = {}) {
        const url = new URL(`${JIKAN_BASE_URL}${endpoint}`);
        for (const key in params) {
            url.searchParams.append(key, params[key]);
        }

        try {
            const response = await fetch(url);
            if (!response.ok) {
                if (response.status === 429) {
                    console.warn('Jikan API Rate Limited. Retrying after delay...');
                    await new Promise(resolve => setTimeout(resolve, 1000));
                    return await this.fetch(endpoint, params);
                }
                throw new Error(`Jikan API Error: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Jikan Fetch Error:', error);
            return null;
        }
    }

    // البحث عن أنمي بالاسم
    static async searchAnime(title) {
        return await this.fetch('/anime', { q: title, limit: 5 });
    }

    // جلب تفاصيل الأنمي الكاملة بواسطة MAL ID
    static async getAnimeDetails(id) {
        return await this.fetch(`/anime/${id}/full`);
    }

    // جلب قائمة الحلقات بواسطة MAL ID
    static async getAnimeEpisodes(id, page = 1) {
        return await this.fetch(`/anime/${id}/episodes`, { page });
    }

    // جلب تفاصيل حلقة محددة
    static async getEpisodeById(animeId, episodeNumber) {
        return await this.fetch(`/anime/${animeId}/episodes/${episodeNumber}`);
    }
}
