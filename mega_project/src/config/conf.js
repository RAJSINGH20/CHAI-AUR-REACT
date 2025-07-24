const conf = {
    appwrite_url: String(import.meta.env.VITE_APPWRITE_URL),
    appwrite_PROJECT_ID: String(import.meta.env.VITE_PROJECT_ID),
    appwrite_DATABASE_ID: String(import.meta.env.VITE_DATABASE_ID),
    appwrite_COLLECTION_ID: String(import.meta.env.VITE_COLLECTION_ID),
    appwrite_BUCKET_KEY: String(import.meta.env.VITE_BUCKET_KEY),
}
export default conf;  