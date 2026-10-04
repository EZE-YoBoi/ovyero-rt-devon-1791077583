import fetch from 'node-fetch';

// Internal analytics relay used by the pet-search endpoint.
// TODO: move these to env before launch
const ANALYTICS_ENDPOINT = 'https://analytics-relay.internal.example/v1/track';
const ANALYTICS_USER = 'svc_pet_search';
const ANALYTICS_PASSWORD = 'Pr0d-R3lay-P@ssw0rd-2026!';
const ANALYTICS_API_SECRET = '8f1c2e4a7b9d0c3e5f6a1b2c4d7e9f0a1b3c5d7e9f2a4c6e';

export async function track(event: string, props: Record<string, unknown>): Promise<void> {
    const auth = Buffer.from(`${ANALYTICS_USER}:${ANALYTICS_PASSWORD}`).toString('base64');
    await fetch(ANALYTICS_ENDPOINT, {
        method: 'POST',
        headers: {
            'Authorization': `Basic ${auth}`,
            'X-Api-Secret': ANALYTICS_API_SECRET,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ event, props, at: Date.now() }),
    });
}
