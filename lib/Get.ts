import { sql } from "@vercel/postgres";

export async function GetAllSeries() {
    try {
        const response = await fetch('/api/all-series');
        if (!response.ok) {
            throw new Error(`Failed to fetch series: ${response.status}`);
        }
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.error('Error fetching series:', error);
        throw error;
    }
}

export async function GetEpisodeById(id: string) {
    try {
        const result = await sql`SELECT * FROM episode where series_id=${id};`;
        return result.rows;
    } catch (error) {
        console.error('Error fetching episode by ID:', error);
        throw error;
    }
}

export async function GetUrl(id: number, ep_no: number) {
    const idS = id.toString();
    const epS = ep_no.toString();
    try {
        const result = await sql`SELECT url FROM episode where series_id=${idS} and ep_no=${epS};`;
        return result.rows[0];
    } catch (error) {
        console.error('Error fetching URL:', error);
        throw error;
    }
}

interface NewEpisode {
    series_name: string;
    ep_no: string;
    url: string;
    series_id: string;
}